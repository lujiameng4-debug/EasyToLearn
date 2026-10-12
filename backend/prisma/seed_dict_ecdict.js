/**
 * Stream-import ECDICT CSV into the Dictionary table.
 *
 * Place ecdict.csv in this folder, then run:
 *   node prisma/seed_dict_ecdict.js
 *
 * Optional:
 *   node prisma/seed_dict_ecdict.js /path/to/ecdict.csv
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_CSV_PATH = path.join(__dirname, 'ecdict.csv');
const CHUNK_SIZE = 5000;

const prisma = new PrismaClient();

const HELP_MESSAGE = `
ECDICT CSV not found.

To import the full offline dictionary:

  1. Download ecdict.csv from the ECDICT project:
     https://github.com/skywind3000/ECDICT

     Direct link (large file, ~70MB+):
     https://raw.githubusercontent.com/skywind3000/ECDICT/master/ecdict.csv

     Or clone the repo and copy ecdict.csv into:
     ${DEFAULT_CSV_PATH}

  2. Run this script again:
     node prisma/seed_dict_ecdict.js

  3. For quick UI testing without the full CSV, run:
     node prisma/seed_dict_basic.js
`.trim();

/**
 * Parse one CSV record line into fields (handles quoted commas and "" escapes).
 * @param {string} line
 * @returns {string[]}
 */
function parseCsvFields(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      fields.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  fields.push(current);
  return fields;
}

/**
 * Async generator yielding parsed CSV records from a large file.
 * Handles newlines inside quoted fields.
 * @param {string} filePath
 * @returns {AsyncGenerator<string[]>}
 */
async function* iterateCsvRecords(filePath) {
  const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
  let buffer = '';
  let inQuotes = false;

  for await (const chunk of stream) {
    buffer += chunk;

    let recordStart = 0;

    for (let i = 0; i < buffer.length; i += 1) {
      const char = buffer[i];

      if (char === '"') {
        if (inQuotes && buffer[i + 1] === '"') {
          i += 1;
          continue;
        }
        inQuotes = !inQuotes;
        continue;
      }

      if (!inQuotes && (char === '\n' || char === '\r')) {
        const record = buffer.slice(recordStart, i);
        if (record.trim()) {
          yield parseCsvFields(record);
        }

        if (char === '\r' && buffer[i + 1] === '\n') {
          i += 1;
        }

        recordStart = i + 1;
      }
    }

    buffer = buffer.slice(recordStart);
  }

  if (buffer.trim()) {
    yield parseCsvFields(buffer);
  }
}

/**
 * @param {string[] | undefined} header
 * @returns {Record<string, number>}
 */
function buildColumnIndex(header) {
  const index = {};
  if (!header) return index;

  header.forEach((name, i) => {
    index[name.trim().toLowerCase()] = i;
  });

  return index;
}

/**
 * @param {string[] | undefined} fields
 * @param {Record<string, number>} columns
 * @returns {{ word: string; phonetic: string | null; translation: string; definition: string | null; pos: string | null; exchange: string | null } | null}
 */
function mapRecord(fields, columns) {
  if (!fields?.length) return null;

  const get = (name) => {
    const idx = columns[name];
    if (idx === undefined) return '';
    return (fields[idx] ?? '').trim();
  };

  const word = get('word').toLowerCase();
  const translation = get('translation');

  if (!word || !translation) return null;

  const phonetic = get('phonetic') || null;
  const definition = get('definition') || null;
  const pos = get('pos') || null;
  const exchange = get('exchange') || null;

  return {
    word,
    phonetic: phonetic ? (phonetic.startsWith('/') ? phonetic : `/${phonetic}/`) : null,
    translation: translation.replace(/\r\n/g, '\n'),
    definition: definition ? definition.replace(/\r\n/g, '\n') : null,
    pos,
    exchange,
  };
}

/**
 * @param {Array<{ word: string; phonetic: string | null; translation: string; definition: string | null; pos: string | null; exchange: string | null }>} batch
 * @param {Set<string>} seenWords
 */
async function flushBatch(batch, seenWords) {
  if (!batch.length) return 0;

  const uniqueBatch = batch.filter((entry) => {
    if (seenWords.has(entry.word)) return false;
    seenWords.add(entry.word);
    return true;
  });

  batch.length = 0;
  if (!uniqueBatch.length) return 0;

  const result = await prisma.dictionary.createMany({
    data: uniqueBatch,
  });

  return result.count;
}

async function main() {
  const csvPath = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_CSV_PATH;

  if (!fs.existsSync(csvPath)) {
    console.error(HELP_MESSAGE);
    process.exit(1);
  }

  console.log(`Importing dictionary from: ${csvPath}`);
  console.log(`Batch size: ${CHUNK_SIZE}`);
  console.log('Clearing existing dictionary entries...');
  await prisma.dictionary.deleteMany();

  let headerParsed = false;
  let columns = {};
  let batch = [];
  let totalRead = 0;
  let totalInserted = 0;
  let skipped = 0;
  const seenWords = new Set();

  for await (const fields of iterateCsvRecords(csvPath)) {
    if (!headerParsed) {
      const firstCell = (fields[0] ?? '').trim().toLowerCase();
      if (firstCell === 'word') {
        columns = buildColumnIndex(fields);
        headerParsed = true;
        continue;
      }

      // Fallback column order from ECDICT spec when header row is missing.
      columns = {
        word: 0,
        phonetic: 1,
        definition: 2,
        translation: 3,
        pos: 4,
        exchange: 10,
      };
      headerParsed = true;
    }

    const record = mapRecord(fields, columns);
    if (!record) {
      skipped += 1;
      continue;
    }

    batch.push(record);
    totalRead += 1;

    if (batch.length >= CHUNK_SIZE) {
      totalInserted += await flushBatch(batch, seenWords);
      process.stdout.write(`\rProcessed ${totalRead.toLocaleString()} entries, inserted ${totalInserted.toLocaleString()} so far...`);
    }
  }

  totalInserted += await flushBatch(batch, seenWords);

  console.log(`\nImport complete.`);
  console.log(`  Valid records processed: ${totalRead.toLocaleString()}`);
  console.log(`  New rows inserted:       ${totalInserted.toLocaleString()}`);
  console.log(`  Skipped (empty word/translation): ${skipped.toLocaleString()}`);
}

main()
  .catch((error) => {
    console.error('ECDICT import failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

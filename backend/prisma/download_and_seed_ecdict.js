/**
 * Download ECDICT CSV from GitHub and seed the Dictionary table.
 *
 * Uses macOS built-in curl + unzip (no extra npm packages).
 *
 * Usage (from backend/):
 *   node prisma/download_and_seed_ecdict.js
 */
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BACKEND_DIR = path.join(__dirname, '..');
const PRISMA_DIR = __dirname;
const TEMP_DIR = path.join(PRISMA_DIR, '.ecdict-download-tmp');
const ZIP_PATH = path.join(TEMP_DIR, 'ecdict-master.zip');
const EXTRACTED_DIR = path.join(TEMP_DIR, 'ECDICT-master');
const CSV_SOURCE = path.join(EXTRACTED_DIR, 'ecdict.csv');
const CSV_DEST = path.join(PRISMA_DIR, 'ecdict.csv');
const SEED_SCRIPT = path.join(PRISMA_DIR, 'seed_dict_ecdict.js');

const DOWNLOAD_URL = 'https://github.com/skywind3000/ECDICT/archive/refs/heads/master.zip';
const MIN_ZIP_BYTES = 50_000;
const MIN_CSV_BYTES = 1_000_000;

const MANUAL_HELP = `
If automatic download failed, try manually:

  1. Download ecdict.csv from the ECDICT project:
     https://github.com/skywind3000/ECDICT

  2. Place the file at:
     ${CSV_DEST}

  3. Run the seed script:
     node prisma/seed_dict_ecdict.js
`.trim();

/**
 * @param {string} label
 * @param {string} command
 * @param {import('child_process').ExecOptions} [options]
 */
async function runStep(label, command, options = {}) {
  console.log(`\n→ ${label}`);
  console.log(`  $ ${command}`);

  try {
    const { stdout, stderr } = await execAsync(command, {
      cwd: BACKEND_DIR,
      maxBuffer: 20 * 1024 * 1024,
      ...options,
    });

    const out = stdout?.trim();
    const err = stderr?.trim();
    if (out) console.log(out);
    if (err) console.log(err);
  } catch (error) {
    const detail = error.stderr?.trim() || error.message;
    throw new Error(`${label} failed.\n  ${detail}`);
  }
}

/** @param {string} tool */
async function assertToolExists(tool) {
  try {
    await execAsync(`command -v ${tool}`);
  } catch {
    throw new Error(`Required tool "${tool}" was not found on PATH.`);
  }
}

function formatMb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function cleanupTemp() {
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
}

async function main() {
  console.log('ECDICT download & seed');
  console.log('======================');

  await assertToolExists('curl');
  await assertToolExists('unzip');

  cleanupTemp();
  fs.mkdirSync(TEMP_DIR, { recursive: true });

  try {
    await runStep(
      'Downloading ECDICT repository archive',
      `curl -L --fail --retry 3 --retry-delay 2 -o "${ZIP_PATH}" "${DOWNLOAD_URL}"`,
    );

    const zipStat = fs.statSync(ZIP_PATH);
    if (zipStat.size < MIN_ZIP_BYTES) {
      throw new Error(
        `Downloaded archive is too small (${zipStat.size} bytes). GitHub may have returned an error page.`,
      );
    }
    console.log(`  Archive size: ${formatMb(zipStat.size)}`);

    await runStep(
      'Extracting archive',
      `unzip -q "${ZIP_PATH}" -d "${TEMP_DIR}"`,
    );

    if (!fs.existsSync(CSV_SOURCE)) {
      throw new Error(
        `Expected CSV not found at:\n  ${CSV_SOURCE}\nThe ECDICT repo layout may have changed.`,
      );
    }

    const csvStat = fs.statSync(CSV_SOURCE);
    if (csvStat.size < MIN_CSV_BYTES) {
      throw new Error(
        `ecdict.csv looks too small (${formatMb(csvStat.size)}). ` +
          'It may be a Git LFS pointer instead of the real dictionary file.',
      );
    }
    console.log(`  Found ecdict.csv (${formatMb(csvStat.size)})`);

    if (fs.existsSync(CSV_DEST)) {
      console.log(`\n→ Replacing existing ${CSV_DEST}`);
      fs.unlinkSync(CSV_DEST);
    }

    fs.renameSync(CSV_SOURCE, CSV_DEST);
    console.log(`  Saved to ${CSV_DEST}`);

    console.log('\n→ Cleaning up temporary files');
    cleanupTemp();
    console.log('  Done.');

    if (!fs.existsSync(SEED_SCRIPT)) {
      throw new Error(`Seed script not found at ${SEED_SCRIPT}`);
    }

    await runStep('Seeding dictionary table', `node "${SEED_SCRIPT}"`);

    console.log('\n✓ ECDICT download and seed completed successfully.');
  } catch (error) {
    console.error(`\n✗ ${error.message}`);
    console.error(`\n${MANUAL_HELP}`);
    cleanupTemp();
    process.exit(1);
  }
}

main();

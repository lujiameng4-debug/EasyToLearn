import fs from 'fs';

function parseWords(sentence) {
  return sentence.split(/\s+/).map(w => {
    const m = w.match(/^([\w'-]+)(.*)$/);
    const obj = { word: m ? m[1] : w };
    if (m && m[2]) obj.punctuation = m[2];
    return obj;
  });
}

// Import data by dynamic import of gen file logic - copy data array inline via eval of the module
const src = fs.readFileSync('gen_shopping02_50.js', 'utf8');
const fn = new Function(src.replace(/^import fs from 'fs';\n/, '').replace(/fs\.writeFileSync[\s\S]*$/, 'return data;'));
const data = fn();

for (let i = 0; i < data.length; i++) {
  const [chinese, english, components] = data[i];
  const words = parseWords(english);
  const last = words.length - 1;
  console.log(`\n=== s${100 + i} len=${words.length} ===`);
  console.log(words.map((w, j) => `${j}:${w.word}`).join(' '));
  for (const c of components) {
    const ok = c[0] >= 0 && c[1] < words.length;
    console.log(`  [${c[0]},${c[1]}] ${c[2]} ${ok ? 'OK' : 'BAD'}`);
  }
  const covered = new Set();
  for (const c of components) {
    for (let j = c[0]; j <= c[1]; j++) covered.add(j);
  }
  const missing = [];
  for (let j = 0; j <= last; j++) if (!covered.has(j)) missing.push(j);
  const extra = [...covered].filter(j => j > last);
  if (missing.length || extra.length) {
    console.log(`  MISSING: ${missing.join(',') || 'none'} EXTRA: ${extra.join(',') || 'none'}`);
  }
}

#!/usr/bin/env node
import { writeFileSync } from "fs";
import { partA } from "./_sports02_70_data_a.mjs";
import { partB } from "./_sports02_70_data_b.mjs";
import { partC } from "./_sports02_70_data_c.mjs";
import { partD } from "./_sports02_70_data_d.mjs";

function buildEntry(id, chinese, words, components, analysis) {
  const builtComponents = components.map((c) => ({
    start: c.start,
    end: c.end,
    label: c.label,
    phonetic: c.phonetic,
    translation: c.translation,
    subComponents: [{ startIndex: 0, words: words.slice(c.start, c.end + 1) }],
  }));
  const english_full = words
    .map((x, i) => {
      const punct = x.punctuation || "";
      if (punct === "," || punct === ";" || punct === ".") return (i === 0 ? "" : " ") + x.word + punct;
      return (i === 0 ? "" : " ") + x.word;
    })
    .join("")
    .trim();
  return { id, chinese, english_full, words, components: builtComponents, analysis };
}

function fmtWords(words) {
  return words
    .map((x) => {
      const p = x.punctuation ? `, punctuation: "${x.punctuation}"` : "";
      return `{ word: "${x.word}"${p} }`;
    })
    .join(", ");
}

function fmtEntry(e) {
  const comps = e.components
    .map((c) => {
      const subs = c.subComponents[0].words
        .map((x) => {
          const p = x.punctuation ? `, punctuation: "${x.punctuation}"` : "";
          return `{ word: "${x.word}"${p} }`;
        })
        .join(", ");
      return `        {
          start: ${c.start}, end: ${c.end}, label: "${c.label}", phonetic: "${c.phonetic}", translation: "${c.translation}",
          subComponents: [{ startIndex: 0, words: [${subs}] }]
        }`;
    })
    .join(",\n");
  const analysis = e.analysis.map((a) => `{ type: "${a.type}", text: "${a.text}" }`).join(", ");
  return `    {
      id: "${e.id}",
      chinese: "${e.chinese}",
      english_full: "${e.english_full}",
      words: [
        ${fmtWords(e.words)}
      ],
      components: [
${comps}
      ],
      analysis: [
        ${analysis}
      ]
    }`;
}

function mk([id, chinese, words, comps, [atype, atext]]) {
  return buildEntry(
    id,
    chinese,
    words,
    comps.map(([start, end, label, phonetic, translation]) => ({ start, end, label, phonetic, translation })),
    [{ type: atype, text: atext }]
  );
}

function validate(entries) {
  const errors = [];
  entries.forEach((item) => {
    const n = item.words.length;
    const covered = new Set();
    item.components.forEach((c) => {
      for (let i = c.start; i <= c.end; i++) covered.add(i);
      const slice = item.words.slice(c.start, c.end + 1);
      const subWords = c.subComponents?.[0]?.words || [];
      if (JSON.stringify(slice) !== JSON.stringify(subWords)) {
        errors.push(`${item.id}: subComponents mismatch at [${c.start}-${c.end}]`);
      }
    });
    for (let i = 0; i < n; i++) {
      if (!covered.has(i)) errors.push(`${item.id}: word index ${i} '${item.words[i].word}' not covered`);
    }
    const rebuilt = item.words
      .map((x, i) => {
        const punct = x.punctuation || "";
        if (punct === "," || punct === ";" || punct === ".") return (i === 0 ? "" : " ") + x.word + punct;
        return (i === 0 ? "" : " ") + x.word;
      })
      .join("")
      .trim();
    if (rebuilt !== item.english_full) {
      errors.push(`${item.id}: english_full mismatch: '${rebuilt}' vs '${item.english_full}'`);
    }
  });
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
}

const raw = [...partA, ...partB, ...partC, ...partD];
const entries = raw.map(mk);

if (entries.length !== 70) {
  console.error(`Expected 70 entries, got ${entries.length}`);
  process.exit(1);
}

validate(entries);

const out = `export const extensions = {
  "sports_02": [
${entries.map(fmtEntry).join(",\n")}
  ]
};
`;

writeFileSync(new URL("./scenarios_data_ext_sports02_70.js", import.meta.url), out);
console.log(`Generated scenarios_data_ext_sports02_70.js with ${entries.length} entries.`);

export function parseWords(sentence) {
  return sentence.split(/\s+/).map((w, i, arr) => {
    const m = w.match(/^(.+?)([.,!?;:])?$/);
    const word = m ? m[1] : w;
    const punct = m && m[2] ? m[2] : (i === arr.length - 1 ? "." : undefined);
    const obj = { word };
    if (punct) obj.punctuation = punct;
    return obj;
  });
}

export function comp(start, end, label, phonetic, translation, words) {
  return {
    start, end, label, phonetic, translation,
    subComponents: [{ startIndex: 0, words: words.slice(start, end + 1) }]
  };
}

export function mk(id, chinese, english, components, analysis) {
  const words = parseWords(english);
  const comps = components.map(c => comp(c[0], c[1], c[2], c[3], c[4], words));
  return { id, chinese, english_full: english, words, components: comps, analysis };
}

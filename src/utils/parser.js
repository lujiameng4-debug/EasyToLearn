/**
 * Parses raw text input into the sentence object format required by the app.
 * Expected format per sentence pair:
 * Chinese sentence
 * English sentence
 * # Optional analysis line 1
 * # Optional analysis line 2
 * (empty line or just next sentence pair)
 */
export const parseRawTextToLibrary = (rawText) => {
  if (!rawText || !rawText.trim()) return [];

  const lines = rawText.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  const library = [];
  let i = 0;
  
  while (i < lines.length) {
    if (lines[i].startsWith('#')) {
      i++;
      continue;
    }
    
    const chinese = lines[i];
    const english_full = lines[i + 1];
    
    if (!english_full || english_full.startsWith('#')) {
      break; // Invalid format
    }

    let j = i + 2;
    const analysis = [];
    // Collect all consecutive lines starting with #
    while (j < lines.length && lines[j].startsWith('#')) {
      analysis.push(lines[j].substring(1).trim());
      j++;
    }

    const rawWords = english_full.split(/\s+/);
    const words = rawWords.map((rawWord, index) => {
      const puncMatch = rawWord.match(/([.,?!;:]+)$/);
      let word = rawWord;
      let punctuation = '';
      
      if (puncMatch) {
        punctuation = puncMatch[1];
        word = rawWord.slice(0, -punctuation.length);
      }

      // Remove trailing periods from sentences entirely as requested
      if (index === rawWords.length - 1 && punctuation === '.') {
        punctuation = '';
      }
      
      // Auto-capitalize the very first letter of the sentence
      if (index === 0 && word.length > 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      
      return { word, punctuation };
    }).filter(w => w.word.length > 0);

    if (chinese && english_full && words.length > 0) {
      library.push({
        id: `custom_${Date.now()}_${i}`,
        chinese,
        english_full,
        words,
        analysis
      });
    }
    
    i = j;
  }

  return library;
};

export const stringifyLibraryToRawText = (library) => {
  if (!library || library.length === 0) return '';
  return library.map(item => {
    const english = item.english_full || (item.words || [])
      .map(w => typeof w === 'string' ? w : `${w?.word || ''}${w?.punctuation || ''}`)
      .filter(Boolean)
      .join(' ');
    let block = `${item.chinese}\n${english}`;
    if (item.analysis && item.analysis.length > 0) {
      const analysisLines = item.analysis
        .map(item => typeof item === 'string' ? item : item?.text || item?.description || '')
        .filter(Boolean);
      if (analysisLines.length > 0) {
        block += '\n' + analysisLines.map(text => `# ${text}`).join('\n');
      }
    }
    return block;
  }).join('\n\n');
};

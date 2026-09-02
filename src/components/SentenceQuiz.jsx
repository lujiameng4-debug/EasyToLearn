import React, { useState, useRef, useEffect, useMemo } from 'react';
import { playKeypress, playError, playSuccess } from '../utils/audio';
import { getWordDefinition } from '../data/dictionary';

const SentenceQuiz = ({ question, onComplete, onMistake, theme, isAnalysisMode, difficulty }) => {
  const { chinese, words, components } = question;
  
  const correctWords = words.map(w => w.word);

  // Parse words into component chunks for rendering structural underlines
  const chunks = useMemo(() => {
    const res = [];
    let i = 0;
    while (i < words.length) {
      const comp = components?.find(c => c.start <= i && c.end >= i);
      if (comp && comp.start === i) {
        
        // Group words into subChunks based on subComponents if available
        const subChunks = [];
        let j = comp.start;
        while (j <= comp.end) {
          const subComp = comp.subComponents?.find(sc => sc.start <= j && sc.end >= j);
          if (subComp && subComp.start === j) {
            subChunks.push({
              label: subComp.label,
              startIndex: subComp.start,
              endIndex: subComp.end,
              words: words.slice(subComp.start, subComp.end + 1)
            });
            j = subComp.end + 1;
          } else {
            subChunks.push({
              label: null,
              startIndex: j,
              endIndex: j,
              words: [words[j]]
            });
            j++;
          }
        }

        res.push({
          label: comp.label,
          phonetic: comp.phonetic,
          translation: comp.translation,
          startIndex: comp.start,
          endIndex: comp.end,
          subChunks: subChunks
        });
        i = comp.end + 1;
      } else {
        res.push({
          label: null,
          phonetic: null,
          translation: null,
          startIndex: i,
          endIndex: i,
          subChunks: [{
            label: null,
            startIndex: i,
            endIndex: i,
            words: [words[i]]
          }]
        });
        i++;
      }
    }
    return res;
  }, [words, components]);

  const getComponentColor = (label) => {
    if (!label) return 'bg-gray-500';
    if (label.includes('主')) return 'bg-sky-500/90 dark:bg-sky-600/90';
    if (label.includes('谓') && !label.includes('助')) return 'bg-rose-500/90 dark:bg-rose-600/90';
    if (label.includes('助')) return 'bg-orange-400/90 dark:bg-orange-500/90';
    if (label.includes('宾')) return 'bg-emerald-500/90 dark:bg-emerald-600/90';
    if (label.includes('状')) return 'bg-purple-500/90 dark:bg-purple-600/90';
    if (label.includes('定语')) return 'bg-indigo-500/90 dark:bg-indigo-600/90';
    if (label.includes('系')) return 'bg-pink-500/90 dark:bg-pink-600/90';
    if (label.includes('表')) return 'bg-teal-500/90 dark:bg-teal-600/90';
    return 'bg-gray-500/90 dark:bg-gray-600/90';
  };
  
  // --- Difficulty / Cloze Logic ---
  // Determine which words should be pre-filled based on difficulty
  const preFilledIndices = useMemo(() => {
    if (difficulty === 3) return new Set(); // Level 3: Hard (100% blank)
    
    const total = correctWords.length;
    // Target blank percentage: Level 1 (30% blank -> 70% pre-filled), Level 2 (60% blank -> 40% pre-filled)
    const preFillRatio = difficulty === 1 ? 0.7 : 0.4;
    
    let numToFill = Math.floor(total * preFillRatio);
    if (numToFill === total && total > 0) numToFill = total - 1; // Never pre-fill the entire sentence
    
    const filledSet = new Set();
    
    // Create an array of available indices [0, 1, 2, ... total - 1]
    const availableIndices = Array.from({ length: total }, (_, i) => i);
    
    // We seed the random slightly differently per question ID and difficulty to keep it deterministic per session but varied
    let seed = 1;
    if (question && question.id) {
       for(let i = 0; i < question.id.length; i++) {
          seed += question.id.charCodeAt(i);
       }
    }
    seed *= difficulty;
    
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }
    
    // Fisher-Yates shuffle with custom seed to randomize the indices
    for (let i = availableIndices.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [availableIndices[i], availableIndices[j]] = [availableIndices[j], availableIndices[i]];
    }
    
    // Take the first 'numToFill' indices from the shuffled array
    for (let i = 0; i < numToFill; i++) {
      filledSet.add(availableIndices[i]);
    }
    
    return filledSet;
  }, [difficulty, correctWords.length, question]);

  // Track user input for each word
  // Initialize with pre-filled words if applicable
  const [userInputs, setUserInputs] = useState(() => 
    correctWords.map((word, i) => preFilledIndices.has(i) ? word : '')
  );
  
  // Track correctness status
  // Pre-filled words start as 'true' (correct)
  // Null means untouched/typing, false means error
  const [wordStatus, setWordStatus] = useState(() => 
    correctWords.map((_, i) => preFilledIndices.has(i) ? true : null)
  );

  // Track hint level per word (0: no hint, 1: first letter, 2: two letters... up to full word)
  const [hintLevels, setHintLevels] = useState(Array(correctWords.length).fill(0));
  
  // State for active dictionary popover index
  const [activeDictIndex, setActiveDictIndex] = useState(null);
  
  // Track focused input index for subtle UI highlights
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Close popover when question changes
  useEffect(() => {
    setActiveDictIndex(null);
  }, [question.id]);
  
  // Keep refs for all input elements to manage focus
  const inputRefs = useRef([]);

  // Reset state when question changes or difficulty changes
  useEffect(() => {
    // When question changes, reset everything based on the newly calculated preFilledIndices
    setUserInputs(correctWords.map((word, i) => preFilledIndices.has(i) ? word : ''));
    setWordStatus(correctWords.map((_, i) => preFilledIndices.has(i) ? true : null));
    setHintLevels(Array(correctWords.length).fill(0));
    setFocusedIndex(null);
  }, [question.id, difficulty, preFilledIndices]); 

  // Auto-focus the FIRST EMPTY input
  useEffect(() => {
      // Only do this if we are not in analysis mode, otherwise it steals focus back
      if (!isAnalysisMode) {
        setTimeout(() => {
          let firstEmptyIndex = 0;
          while (firstEmptyIndex < correctWords.length && preFilledIndices.has(firstEmptyIndex)) {
            firstEmptyIndex++;
          }
          
          if (firstEmptyIndex < correctWords.length && inputRefs.current[firstEmptyIndex]) {
            inputRefs.current[firstEmptyIndex].focus();
          } else if (inputRefs.current[0]) {
            // Fallback
            inputRefs.current[0].focus();
          }
        }, 150); // Slightly longer delay to ensure DOM is ready after transition
      }
  }, [question.id, difficulty, preFilledIndices, isAnalysisMode]); // Added isAnalysisMode dependency so it re-focuses when leaving analysis mode

  // We need a specific ref to know if the user has interacted with this question yet
  const hasInteractedRef = useRef(false);
  const hasCompletedRef = useRef(false);
  useEffect(() => {
    hasInteractedRef.current = false;
    hasCompletedRef.current = false;
  }, [question.id]);

  const handleKeyDown = (e, index) => {
    // Ignore key events if the user is in the middle of typing with an IME (e.g., Chinese Pinyin).
    // This allows them to press Enter/Space to commit the IME text without us interrupting the browser!
    if (e.nativeEvent.isComposing) return;

    const isCompleted = wordStatus[index] === true;
    
    // Ignore input if we are already in Analysis mode (sentence complete)
    if (isAnalysisMode) return;

    // --- Arrow Keys Navigation ---
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
      return;
    }
    
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (index < correctWords.length - 1) {
        inputRefs.current[index + 1].focus();
      }
      return;
    }

    // --- Hint System (Tab or ?) ---
    if ((e.key === 'Tab' || e.key === '?') && !isCompleted) {
      e.preventDefault();
      const currentLevel = hintLevels[index];
      const targetWord = correctWords[index];
      
      if (currentLevel < targetWord.length) {
        const newHintLevels = [...hintLevels];
        newHintLevels[index] = currentLevel + 1;
        setHintLevels(newHintLevels);
        
        // Using a hint counts as a mistake for spaced repetition!
        if (onMistake) onMistake();
      }
      return;
    }

    // --- Validation (Space or Enter) ---
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault(); // Prevent typing a space
      
      const currentInput = userInputs[index].trim();
      if (!currentInput) return; // ignore empty space
      
      // Strict case-sensitive validation
      const isCorrect = currentInput === correctWords[index];
      
      const newStatus = [...wordStatus];
      newStatus[index] = isCorrect;
      setWordStatus(newStatus);
      
      // If correct, move to the next EMPTY input automatically
      if (isCorrect) {
        playSuccess();
        
        let nextIndex = index + 1;
        // Skip over pre-filled or already correct words
        while (nextIndex < correctWords.length && (newStatus[nextIndex] === true || preFilledIndices.has(nextIndex))) {
          nextIndex++;
        }
        
        if (nextIndex < correctWords.length && inputRefs.current[nextIndex]) {
          inputRefs.current[nextIndex].focus();
        } else {
          // If all are correct, we are done
          if (newStatus.every((s, i) => s === true || preFilledIndices.has(i))) {
            if (inputRefs.current[index]) inputRefs.current[index].blur();
            // Delay completion slightly for UI to update visually first
            setTimeout(() => {
              if (!hasCompletedRef.current) {
                hasCompletedRef.current = true;
                if (onComplete) onComplete();
              }
            }, 250);
          }
        }
      } else {
        playError(); // Play error thud sound
        if (onMistake) onMistake(); // Report mistake for spaced repetition
        // Add subtle shake animation class
        if (inputRefs.current[index]) {
          inputRefs.current[index].parentElement.classList.add('animate-shake');
          setTimeout(() => {
            if (inputRefs.current[index]) {
              inputRefs.current[index].parentElement.classList.remove('animate-shake');
            }
          }, 400);
        }
      }
      return;
    }
    
    // --- Backspace Navigation ---
    // Allow backspace to move to previous NON-PREFILLED input if current is empty
    if (e.key === 'Backspace' && userInputs[index] === '' && index > 0) {
      e.preventDefault();
      
      let prevIndex = index - 1;
      // Skip over pre-filled words when navigating backward
      while (prevIndex >= 0 && preFilledIndices.has(prevIndex)) {
        prevIndex--;
      }
      
      if (prevIndex >= 0) {
        const newStatus = [...wordStatus];
        newStatus[prevIndex] = null;
        setWordStatus(newStatus);
        inputRefs.current[prevIndex].focus();
      }
      return;
    }
  };

  const handleChange = (e, index) => {
    if (isAnalysisMode) return;
    
    // If they typed a '?' trying to trigger the hint, don't write it to the value
    if (e.target.value.includes('?')) {
       return;
    }

    // Don't allow spaces, Chinese characters, or non-English symbols.
    // Allow letters, numbers, hyphens, and apostrophes.
    const value = e.target.value.replace(/[^a-zA-Z0-9'-]/g, '');
    
    // Play subtle keypress sound if they actually typed a new character
    if (value.length > userInputs[index].length) {
      playKeypress();
    }

    hasInteractedRef.current = true; // Mark as interacted

    const newInputs = [...userInputs];
    newInputs[index] = value;
    setUserInputs(newInputs);
    
    const newStatus = [...wordStatus];
    // If the word was previously marked wrong, reset its visual status to null when they type
    if (newStatus[index] === false) {
      newStatus[index] = null;
    }
    
    setWordStatus(newStatus);
  };

  // Check if all words are correct on initial render/update (e.g. for already completed or 100% prefilled sentences)
  useEffect(() => {
    // We NO LONGER auto-complete here based purely on state.
    // Validation ONLY happens via user action (pressing Space/Enter) in handleKeyDown.
    // The only exception is if a sentence is 100% prefilled by difficulty logic.
    if (wordStatus.length > 0 && wordStatus.every(status => status === true)) {
      const isFullyPrefilled = preFilledIndices.size === correctWords.length;
      if (!isAnalysisMode && isFullyPrefilled && !hasCompletedRef.current) {
        hasCompletedRef.current = true;
        if (onComplete) {
          onComplete();
        }
      }
    }
  }, [wordStatus, onComplete, isAnalysisMode, preFilledIndices.size, correctWords.length]);

  // Helper to get the hint string based on hint level
  const getHintString = (word, level, inputVal) => {
    // If the user has started typing, hide the hint completely to prevent overlap
    if (inputVal && inputVal.length > 0) return '';
    if (level === 0) return '';
    return word.substring(0, level);
  };

  const handleWordClick = (index) => {
    // Only allow opening the dictionary in analysis mode
    if (isAnalysisMode) {
      setActiveDictIndex(prev => prev === index ? null : index);
    }
  };

  // Determine the highlight color based on theme
  const getHighlightColor = () => {
    if (theme.id === 'mono') return 'border-black text-black dark:border-white dark:text-white';
    if (theme.id === 'paper') return 'border-[#8A7969] text-[#8A7969]';
    if (theme.id === 'midnight') return 'border-[#94A3B8] text-[#94A3B8]';
    return 'border-green-500 text-green-500'; // fallback
  };

  const highlightClass = getHighlightColor();
  const highlightBorderOnly = highlightClass.split(' ').filter(c => c.startsWith('border')).join(' ');

  return (
    <div className={`flex flex-col items-center justify-center w-full px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnalysisMode ? 'scale-[0.98]' : 'scale-100'}`}>
      <h2 className={`text-xl md:text-3xl font-light tracking-[0.08em] md:tracking-[0.1em] text-center leading-loose md:leading-relaxed transition-colors duration-1000 mb-8 md:mb-10 ${theme.text}`}>
        {chinese}
      </h2>
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative">
        <div className="w-full flex flex-wrap items-end justify-center gap-x-3 md:gap-x-4 gap-y-12 md:gap-y-16 pb-4 pt-4">
          {chunks.map((chunk, chunkIdx) => {
            // Check if any subChunk has a label to conditionally add top margin
            const hasSubLabels = chunk.subChunks.some(sc => sc.label);
            
            return (
              <div key={chunkIdx} className={`relative flex flex-col items-center ${isAnalysisMode && hasSubLabels ? 'mt-8 md:mt-10' : ''} transition-all duration-700`}>
                {/* Morphing underline container */}
                <div className={`flex items-end gap-x-3 md:gap-x-4 transition-colors duration-700 ${isAnalysisMode && chunk.label ? `border-b-[4px] ${highlightBorderOnly}` : 'border-b-[4px] border-transparent'}`}>
              
              {chunk.subChunks.map((subChunk, subIdx) => (
                <div key={subIdx} className="relative flex flex-col items-center">
                  
                  {/* Sub-component Top Label */}
                  <div className={`absolute -top-9 left-0 right-0 flex justify-center transition-all duration-700 z-20
                    ${isAnalysisMode && subChunk.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <span className={`text-[10px] font-bold tracking-widest ${theme.text} whitespace-nowrap bg-black/10 dark:bg-white/15 backdrop-blur-sm border ${theme.secondary} shadow-sm px-2 py-0.5 rounded-full`}>
                      {subChunk.label}
                    </span>
                  </div>

                  {/* Sub-component Top Bracket Lines */}
                  {isAnalysisMode && subChunk.label && (
                    <div className={`absolute -top-3 left-1 right-1 h-2 border-t-[2px] border-l-[2px] border-r-[2px] rounded-t-sm transition-opacity duration-700 border-current ${theme.text} opacity-30 pointer-events-none`}></div>
                  )}

                  <div className="flex items-end gap-x-3 md:gap-x-4">
                    {subChunk.words.map((wordObj, localIdx) => {
                      const index = subChunk.startIndex + localIdx;
                      const targetWord = correctWords[index];
                      const punctuation = wordObj.punctuation || '';
                      
                      return (
                        <div key={index} className={`flex items-end ${activeDictIndex === index ? 'z-50' : 'z-10'}`}>
                          <div className="relative flex flex-col items-center">
                            
                            {/* Dictionary Popover */}
                            {activeDictIndex === index && (() => {
                              const dictWordInfo = getWordDefinition(targetWord);
                              
                              // Parse example to separate English and Chinese
                              const exampleMatch = dictWordInfo.example ? dictWordInfo.example.match(/^(.*?)\s*\((.*)\)$/) : null;
                              
                              return (
                                <div className="absolute bottom-[100%] mb-3 left-1/2 -translate-x-1/2 z-[200]">
                                  <div 
                                    className={`w-[260px] p-4 rounded-2xl shadow-2xl border animate-in cursor-default text-left relative
                                      ${theme.id === 'mono' ? 'bg-white dark:bg-[#151515] border-gray-200/50 dark:border-gray-800/50' : (theme.id === 'paper' ? 'bg-[#FCF9F2] border-[#D9CDBF]/50' : 'bg-[#121A2F] border-[#1E293B]/50')}
                                    `}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <button 
                                      onClick={(e) => { e.stopPropagation(); setActiveDictIndex(null); }}
                                      className={`absolute top-2 right-2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-10 ${theme.accent} hover:${theme.text}`}
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>

                                    <div className="flex items-baseline gap-2 mb-2 pr-6">
                                      <h3 className={`text-2xl font-bold font-serif ${theme.text}`}>{dictWordInfo.word}</h3>
                                      <span className={`text-sm font-sans tracking-wide ${theme.accent}`}>| {dictWordInfo.phonetic} |</span>
                                    </div>
                                    
                                    <div className="grid grid-cols-[max-content_1fr] gap-x-2 gap-y-1.5 mb-3.5 text-[13px] md:text-sm">
                                      {dictWordInfo.translation.split('\n').map((line, i) => {
                                        const match = line.trim().match(/^([a-z]+\.)\s*(.*)/i);
                                        if (match) {
                                          return (
                                            <div key={i} className="contents">
                                              <span className={`text-left font-medium pt-0.5 ${theme.accent}`}>{match[1]}</span>
                                              <span className={`pr-1 leading-relaxed ${theme.text}`}>{match[2]}</span>
                                            </div>
                                          );
                                        }
                                        return <div key={i} className={`col-span-2 leading-relaxed pr-1 ${theme.text}`}>{line}</div>;
                                      })}
                                    </div>

                                    {dictWordInfo.collocations && dictWordInfo.collocations.length > 0 && (
                                      <div className="mb-3.5">
                                        <div className={`text-[9px] uppercase tracking-widest mb-1.5 ${theme.accent}`}>COLLOCATIONS</div>
                                        <div className="flex flex-col gap-1">
                                          {dictWordInfo.collocations.map((coll, idx) => (
                                            <div key={idx} className="flex items-start gap-1.5">
                                              <span className={`text-[12.5px] font-medium leading-snug ${theme.text}`}>{coll.phrase}</span>
                                              <span className={`text-[11.5px] leading-snug pt-[1px] ${theme.accent}`}>{coll.meaning}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {dictWordInfo.synonyms && dictWordInfo.synonyms.length > 0 && dictWordInfo.synonyms[0] !== '-' && (
                                      <div className="mb-3.5">
                                        <div className={`text-[9px] uppercase tracking-widest mb-1.5 ${theme.accent}`}>SYNONYMS</div>
                                        <div className="flex flex-wrap gap-1.5">
                                          {dictWordInfo.synonyms.map((syn, idx) => (
                                            <span key={idx} className={`text-[11px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 ${theme.text}`}>
                                              {syn}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {dictWordInfo.example && (
                                      <div>
                                        <div className={`text-[9px] uppercase tracking-widest mb-1.5 ${theme.accent}`}>EXAMPLE</div>
                                        <div className="flex flex-col gap-0.5">
                                          <span className={`text-[12.5px] font-medium leading-snug ${theme.text}`}>{exampleMatch ? exampleMatch[1] : dictWordInfo.example}</span>
                                          {exampleMatch && (
                                            <span className={`text-[11.5px] leading-snug ${theme.accent}`}>{exampleMatch[2]}</span>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })()}

                            {/* Hint Placeholder - sits behind the input */}
                            <div className={`absolute inset-0 pointer-events-none flex items-center justify-center border-b-[2px] border-transparent pb-1.5 text-xl md:text-3xl font-mono opacity-50 z-0 whitespace-nowrap ${theme.accent}`}>
                              {getHintString(targetWord, hintLevels[index], userInputs[index])}
                            </div>
                            
                            <input
                              ref={el => inputRefs.current[index] = el}
                              value={userInputs[index]}
                              onChange={(e) => handleChange(e, index)}
                              onKeyDown={(e) => handleKeyDown(e, index)}
                              onClick={() => handleWordClick(index)}
                              readOnly={wordStatus[index] === true || isAnalysisMode}
                              autoComplete="off"
                              autoCorrect="off"
                              autoCapitalize="off"
                              spellCheck={false}
                              data-gramm="false"
                              tabIndex={preFilledIndices.has(index) ? -1 : 0} 
                              maxLength={targetWord.length} 
                              className={`
                                relative z-10 bg-transparent text-center text-xl md:text-3xl font-mono outline-none 
                                transition-all duration-300 pb-1.5 px-0 mx-0
                                ${isAnalysisMode ? 'cursor-pointer hover:opacity-70' : ''}
                                ${wordStatus[index] === true 
                                  ? (isAnalysisMode && chunk.label 
                                      ? `border-b-[0px] border-transparent ${preFilledIndices.has(index) ? theme.accent : highlightClass}` 
                                      : (preFilledIndices.has(index) ? `border-b-[2px] ${theme.secondary} ${theme.accent}` : `border-b-[0px] border-transparent ${highlightClass}`)
                                    ) 
                                  : ''}
                                ${wordStatus[index] === false ? 'border-b-[2px] border-red-500 text-red-500 animate-pulse text-glow-sm' : ''}
                                ${wordStatus[index] === null ? `border-b-[2px] ${theme.primary} focus:border-glow` : ''}
                              `}
                              style={{ 
                                width: `${Math.max(targetWord.length, 1)}ch`
                              }}
                            />
                          </div>
                          
                          {punctuation && (
                            <span className={`text-lg md:text-2xl font-mono pb-1.5 pl-0.5 select-none font-extralight transition-colors duration-1000 ${theme.accent}`}>
                              {punctuation}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>    
    
            {/* Grammar Underline Details Component */}
            <div className={`absolute top-full pt-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-700
              ${isAnalysisMode && (chunk.label || chunk.phonetic) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
            `}>
              {chunk.phonetic && (
                <span className={`text-[9px] md:text-[10px] whitespace-nowrap font-mono tracking-wide opacity-50 mb-0.5 ${theme.text}`}>
                  {chunk.phonetic}
                </span>
              )}
              {chunk.translation && (
                <span className={`text-[10px] md:text-[11px] whitespace-nowrap font-medium opacity-80 mb-1 ${theme.text}`}>
                  {chunk.translation}
                </span>
              )}
              {chunk.label && (
                <span className={`text-[9px] md:text-[10px] whitespace-nowrap tracking-widest font-semibold text-white px-1.5 py-0.5 rounded shadow-sm ${getComponentColor(chunk.label)}`}>
                  {chunk.label}
                </span>
              )}
            </div>
          </div>
        );
      })}
        </div>

        {/* Grammar & Analysis Panel */}
        <div className={`w-full flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top
          ${isAnalysisMode ? 'opacity-100 max-h-[800px] mt-12 md:mt-16 translate-y-0' : 'opacity-0 max-h-0 mt-0 pointer-events-none overflow-hidden translate-y-8'}`}>
          
          <div className="w-full flex justify-center">
            {question.analysis && question.analysis.length > 0 && (
              <div className="flex flex-col justify-center gap-y-3 w-max max-w-[90vw] md:max-w-3xl">
                {question.analysis.map((item, i) => {
                  const isObj = typeof item === 'object';
                  const type = isObj ? item.type : item.split('：')[0];
                  const text = isObj ? item.text : (item.split('：').slice(1).join('：') || item);

                  return (
                    <div key={i} className="grid grid-cols-[max-content_1fr] items-start gap-x-4 w-full">
                      {type && type !== text && (
                        <span className={`text-[10px] md:text-[11px] font-bold tracking-widest ${theme.accent} uppercase px-3 py-1 rounded-md bg-black/5 dark:bg-white/5 justify-self-start mt-[3px]`}>
                          {type}
                        </span>
                      )}
                      <span className={`text-sm md:text-base font-light ${theme.text} text-left leading-relaxed whitespace-normal`}>
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          <div className={`w-full flex justify-center mt-6 md:mt-8 pb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnalysisMode ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className={`text-[10px] tracking-[0.2em] uppercase font-medium ${theme.accent} animate-pulse px-6 py-2 rounded-full border border-dashed ${theme.secondary} flex items-center gap-2 glass-button cursor-default`}>
              <span className="font-mono bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded">SPACE</span> 
              To Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceQuiz;
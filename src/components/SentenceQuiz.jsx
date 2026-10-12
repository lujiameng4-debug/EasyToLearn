import React, { useState, useRef, useEffect, useMemo } from 'react';
import { playKeypress, playError, playSuccess } from '../utils/audio';

const transferGuides = {
  position: '换一个具体议题，写清你的立场和适用范围。',
  cause: '换一个现象，解释它为什么发生，而不只替换名词。',
  effect: '说明谁受到影响，以及影响是怎样产生的。',
  example: '为你的观点设计一个具体、可信的情境。',
  contrast: '明确比较对象，并说出真正影响判断的差异。',
  concession: '承认一项合理顾虑，再回应它为什么不足以推翻观点。',
  conclusion: '根据前面的理由提出有限定条件的建议。',
};
const normalizeExpression = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const SentenceQuiz = ({ question, onComplete, onMistake, theme, isAnalysisMode, difficulty, isMastered }) => {
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
  
  // 处理字典弹窗
  const [activeDictIndex, setActiveDictIndex] = useState(null);
  const [dictData, setDictData] = useState(null);
  const [isDictLoading, setIsDictLoading] = useState(false);
  const [dictPosition, setDictPosition] = useState('top'); // 'top' or 'bottom'
  const [playingAudio, setPlayingAudio] = useState(null); // 'uk', 'us', or null

  // Speech Recognition States
  const [isRecording, setIsRecording] = useState(false);
  const [speechResult, setSpeechResult] = useState('');
  const [speechScore, setSpeechScore] = useState(null);
  const [recognizedWords, setRecognizedWords] = useState([]);
  const transcriptRef = useRef('');
  const [transferDraft, setTransferDraft] = useState(() => {
    if (!question.scenario || !question.argumentFunction) return '';
    return localStorage.getItem(`easyToLearn_transfer_${question.id}`) || '';
  });
  const transferMatchesReference = Boolean(transferDraft.trim()) && normalizeExpression(transferDraft) === normalizeExpression(question.english_full || '');

  const updateTransferDraft = (value) => {
    setTransferDraft(value);
    if (value) localStorage.setItem(`easyToLearn_transfer_${question.id}`, value);
    else localStorage.removeItem(`easyToLearn_transfer_${question.id}`);
    window.dispatchEvent(new Event('easyToLearn:transferDraftChanged'));
  };

  const playWordAudio = (word, type, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    // Make sure we stop any currently playing audio
    if (window.currentWordAudio) {
      window.currentWordAudio.pause();
    }

    // type: 1 for UK (英音), 2 for US (美音)
    const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=${type}`;
    const audio = new Audio(audioUrl);
    window.currentWordAudio = audio; // Keep track of the audio instance
    
    setPlayingAudio(type === 1 ? 'uk' : 'us');
    
    audio.onended = () => setPlayingAudio(null);
    audio.onerror = () => {
      console.error("Audio playback failed");
      setPlayingAudio(null);
    };
    
    // Browsers often block autoplay without user interaction, but since this is called onClick, it should be fine.
    audio.play().catch(err => {
      console.error("Error playing audio:", err);
      setPlayingAudio(null);
    });
  };

  const evaluateSpeech = (transcript) => {
    if (!transcript) return;
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const targetWords = correctWords.map(w => normalize(w)).filter(w => w);
    const spokenWords = transcript.toLowerCase().split(/\s+/).map(normalize).filter(w => w);

    let matchCount = 0;
    const matched = targetWords.map(tw => {
       if (spokenWords.includes(tw)) {
          matchCount++;
          return true;
       }
       return false;
    });

    const score = Math.round((matchCount / targetWords.length) * 100);
    setSpeechScore(score);
    setRecognizedWords(matched);
  };

  const toggleRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition. Please use Chrome.");
      return;
    }

    if (isRecording) {
      window.isRecordingIntent = false;
      if (window.recognitionInstance) {
        try { window.recognitionInstance.stop(); } catch(e) {}
      }
      setIsRecording(false);
      return;
    }

    // Clean up any existing instance to prevent zombie listeners
    if (window.recognitionInstance) {
      window.recognitionInstance.onend = null;
      window.recognitionInstance.onerror = null;
      window.recognitionInstance.onresult = null;
      window.recognitionInstance.onstart = null;
      try { window.recognitionInstance.abort(); } catch(e) {}
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true; 
    window.recognitionInstance = recognition;

    // Reset accumulated transcript on manual start
    if (!window.accumulatedTranscript) {
       window.accumulatedTranscript = '';
    }
    window.accumulatedTranscript = '';
    transcriptRef.current = '';
    setSpeechResult('');
    setSpeechScore(null);
    setRecognizedWords([]);

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      
      const fullTranscript = (window.accumulatedTranscript + ' ' + currentTranscript).trim();
      setSpeechResult(fullTranscript);
      transcriptRef.current = fullTranscript;
    };

    // Keep it alive if it ends unexpectedly, unless user clicked stop
    recognition.onend = () => {
      // If we still want to be recording but the browser stopped it (e.g. due to silence)
      if (window.isRecordingIntent) {
         // Accumulate current transcript so we don't lose it on auto-restart
         window.accumulatedTranscript = transcriptRef.current;
         
         if (window.restartTimer) clearTimeout(window.restartTimer);
         
         // Must use setTimeout to avoid DOMException when restarting inside onend
         window.restartTimer = setTimeout(() => {
           if (window.isRecordingIntent) {
             try {
                recognition.start();
             } catch (e) {
                console.error("Failed to restart recognition", e);
                // If it fails (e.g. Safari blocking programmatic start without user gesture), we just stop and evaluate
                if (e.name !== 'InvalidStateError') {
                   setSpeechResult((prev) => prev ? prev : "Microphone stopped.");
                   setIsRecording(false);
                   window.isRecordingIntent = false;
                   if (transcriptRef.current) evaluateSpeech(transcriptRef.current);
                }
             }
           }
         }, 300); // 300ms is a safe delay for Chrome/Edge
      } else {
         setIsRecording(false);
         if (transcriptRef.current) {
            evaluateSpeech(transcriptRef.current);
         }
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      
      // We ignore these specific errors if we plan to restart anyway
      if ((event.error === 'no-speech' || event.error === 'aborted') && window.isRecordingIntent) {
         return; 
      }

      // If it's a real fatal error (like not-allowed), stop recording and show the error
      setIsRecording(false);
      window.isRecordingIntent = false;
      
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
          setSpeechResult(`Mic Error: ${event.error}`);
      }
      
      if (transcriptRef.current) {
          evaluateSpeech(transcriptRef.current);
      }
    };

    window.isRecordingIntent = true;
    try {
        recognition.start();
    } catch (e) {
        console.error("Failed to start recognition immediately", e);
        setIsRecording(false);
        window.isRecordingIntent = false;
        setSpeechResult(`Failed to start: ${e.message}`);
    }
  };

  // Ensure we clean up if component unmounts
  useEffect(() => {
    return () => {
      if (window.recognitionInstance) {
        window.isRecordingIntent = false;
        window.recognitionInstance.stop();
      }
    };
  }, []);

  const fetchDictionary = async (word) => {
    setIsDictLoading(true);
    setDictData(null);
    try {
      const cleanWord = word.replace(/[^a-zA-Z'-]/g, '');
      const response = await fetch(`http://localhost:3000/api/dictionary?word=${encodeURIComponent(cleanWord)}`);
      if (response.ok) {
        const data = await response.json();
        setDictData(data);
      } else {
        setDictData({ error: '暂未收录该词' });
      }
    } catch (error) {
      console.error("Dictionary fetch error:", error);
      setDictData({ error: '网络错误' });
    } finally {
      setIsDictLoading(false);
    }
  };

  const handleWordClick = (e, index, word, isCorrect) => {
    if (isAnalysisMode) {
      if (activeDictIndex === index) {
        setActiveDictIndex(null);
      } else {
        // Calculate smart position: if word is in top half of screen, pop down. Otherwise pop up.
        if (e && e.currentTarget) {
          const rect = e.currentTarget.getBoundingClientRect();
          const isTopHalf = rect.top < window.innerHeight / 2;
          setDictPosition(isTopHalf ? 'bottom' : 'top');
        } else {
          setDictPosition('top'); // fallback
        }
        
        setActiveDictIndex(index);
        fetchDictionary(word);
      }
    }
  };

  const closeDictionary = (e) => {
    if (e) e.stopPropagation();
    setActiveDictIndex(null);
  };
  
  // Handle click outside to close dictionary
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Close popover when question changes
  useEffect(() => {
    setActiveDictIndex(null);
  }, [question.id]);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      // If clicking anywhere outside a dictionary popup
      if (activeDictIndex !== null) {
        if (e.target.closest('.dict-popover')) {
          return;
        }
        closeDictionary();
      }
    };
    
    // Use capture phase to intercept clicks before they reach elements that might call stopPropagation
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [activeDictIndex]);

  // Keep refs for all input elements to manage focus
  const inputRefs = useRef([]);

  // Audio Pre-fetching
  useEffect(() => {
    if (!correctWords || correctWords.length === 0) return;

    // Extract unique valid words
    const uniqueWords = [...new Set(
      correctWords
        .map(w => w.replace(/[^a-zA-Z'-]/g, ''))
        .filter(w => w.length > 0)
    )];

    // Prefetch with a slight delay to avoid blocking main thread rendering
    const timer = setTimeout(() => {
      uniqueWords.forEach((word, index) => {
        // Stagger requests slightly to avoid network spike
        setTimeout(() => {
          const ukAudio = new Audio();
          ukAudio.src = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=1`;
          ukAudio.preload = 'auto';

          const usAudio = new Audio();
          usAudio.src = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`;
          usAudio.preload = 'auto';
        }, index * 50);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [question.id]);

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
      <h2 className={`text-xl md:text-3xl font-light tracking-[0.08em] md:tracking-[0.1em] text-center leading-loose md:leading-relaxed transition-colors duration-1000 mb-8 md:mb-10 ${theme.text} flex items-center justify-center flex-wrap gap-x-3`}>
        {chinese}
        {isMastered && (
          <div className="inline-flex items-center justify-center text-green-500 animate-in zoom-in duration-500" title="Mastered">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
        )}
      </h2>
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative">
        <div className="w-full flex flex-wrap items-end justify-center gap-x-3 md:gap-x-4 gap-y-12 md:gap-y-16 pb-4 pt-4">
          {chunks.map((chunk, chunkIdx) => {
            // Check if any subChunk has a label to conditionally add top margin
            const hasSubLabels = chunk.subChunks.some(sc => sc.label);
            
            return (
              <div key={chunkIdx} className={`relative flex flex-col items-center ${isAnalysisMode && hasSubLabels ? 'mt-8 md:mt-10' : ''} transition-all duration-700`}>
                {/* Morphing underline container */}
                <div className={`flex flex-wrap justify-center items-end gap-x-3 md:gap-x-4 gap-y-4 transition-colors duration-700 ${isAnalysisMode && chunk.label ? `border-b-[4px] ${highlightBorderOnly}` : 'border-b-[4px] border-transparent'}`}>
              
              {chunk.subChunks.map((subChunk, subIdx) => (
                <div key={subIdx} className="relative flex flex-col items-center">
                  
                  {/* Sub-component Top Label */}
                  <div className={`absolute -top-9 left-0 right-0 flex justify-center transition-all duration-700 z-20
                    ${isAnalysisMode && subChunk.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <span className={`text-[10px] font-bold tracking-widest ${theme.text} whitespace-nowrap bg-black/10 dark:bg-white/20 backdrop-blur-sm border ${theme.secondary} shadow-sm px-2 py-0.5 rounded-full`}>
                      {subChunk.label}
                    </span>
                  </div>

                  {/* Sub-component Top Bracket Lines */}
                  {isAnalysisMode && subChunk.label && (
                    <div className={`absolute -top-3 left-1 right-1 h-2 border-t-[2px] border-l-[2px] border-r-[2px] rounded-t-sm transition-opacity duration-700 border-current ${theme.text} opacity-30 pointer-events-none`}></div>
                  )}

                  <div className="flex flex-wrap justify-center items-end gap-x-3 md:gap-x-4 gap-y-4">
                    {subChunk.words.map((wordObj, localIdx) => {
                      const index = subChunk.startIndex + localIdx;
                      const targetWord = correctWords[index];
                      // Also strip trailing period here just in case data already has it
                      const isLastWord = index === words.length - 1;
                      let punctuation = wordObj.punctuation || '';
                      if (isLastWord && punctuation === '.') {
                        punctuation = '';
                      }
                      
                      return (
                        <div 
                          key={index} 
                          className={`flex items-end ${activeDictIndex === index ? 'z-50' : 'z-10'}`}
                          onClick={(e) => {
                            // In analysis mode, clicking the container should open dictionary
                            if (isAnalysisMode) {
                              e.stopPropagation();
                              handleWordClick(e, index, targetWord, wordStatus[index]);
                            }
                          }}
                        >
                          <div className="relative flex flex-col items-center">
                            
                            {/* Dictionary Popover */}
                            {activeDictIndex === index && (
                              <div className={`absolute left-1/2 -translate-x-1/2 z-[200] ${dictPosition === 'top' ? 'bottom-[calc(100%+16px)]' : 'top-[calc(100%+16px)]'}`}>
                                  <div 
                                    className={`dict-popover relative z-[100] w-[280px] md:w-[320px] max-h-[35vh] md:max-h-[40vh] overflow-y-auto overflow-x-hidden p-4 rounded-xl shadow-[0_12px_40px_rgb(0,0,0,0.15)] glass-panel border ${theme.secondary} custom-scrollbar`}
                                    onClick={e => e.stopPropagation()}
                                  >
                                    <button 
                                      onClick={(e) => { e.stopPropagation(); setActiveDictIndex(null); }}
                                      className={`absolute top-2 right-2 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-10 ${theme.accent} hover:${theme.text}`}
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>

                                    {isDictLoading ? (
                                      <div className="space-y-4 animate-pulse">
                                        <div className="h-6 bg-black/10 dark:bg-white/10 rounded w-1/3"></div>
                                        <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-1/2"></div>
                                        <div className="h-10 bg-black/5 dark:bg-white/5 rounded w-full"></div>
                                      </div>
                                    ) : dictData?.error ? (
                                      <div className={`text-center py-4 text-sm ${theme.accent} italic`}>
                                        {dictData.error}
                                      </div>
                                    ) : dictData ? (
                                      <>
                                        <div className="flex flex-col gap-0.5 mb-3 pr-6">
                                          <div className="flex items-baseline gap-2 flex-wrap">
                                            <h3 className={`text-xl font-bold font-serif ${theme.text}`}>{dictData.word}</h3>
                                            
                                            {/* Pronunciation Buttons */}
                                            <div className="flex items-center gap-1.5 ml-1">
                                              <button
                                                onClick={(e) => playWordAudio(dictData.word, 1, e)}
                                                className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono tracking-wider transition-colors border
                                                  ${playingAudio === 'uk' 
                                                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400' 
                                                    : `border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 ${theme.text} opacity-70 hover:opacity-100`}`}
                                              >
                                                <span>UK</span>
                                                <svg className={playingAudio === 'uk' ? 'animate-pulse' : ''} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                                              </button>
                                              
                                              <button
                                                onClick={(e) => playWordAudio(dictData.word, 2, e)}
                                                className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono tracking-wider transition-colors border
                                                  ${playingAudio === 'us' 
                                                    ? 'bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400' 
                                                    : `border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 ${theme.text} opacity-70 hover:opacity-100`}`}
                                              >
                                                <span>US</span>
                                                <svg className={playingAudio === 'us' ? 'animate-pulse' : ''} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                                              </button>
                                            </div>
                                          </div>
                                          
                                          <div className="flex items-center justify-between w-full mt-0.5">
                                            {dictData.phonetic && (
                                              <span className={`text-[12px] font-sans tracking-wide ${theme.accent}`}>| {dictData.phonetic.replace(/\//g, '')} |</span>
                                            )}
                                            {dictData.isVariant && (
                                              <span className={`text-[10px] font-mono opacity-60 ml-auto`}>
                                                ({dictData.queriedWord} &rarr; {dictData.word})
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-[max-content_1fr] gap-x-2 gap-y-1 mb-2.5 text-[12px]">
                                          {dictData.translation.split('; ').map((line, i) => {
                                            const match = line.trim().match(/^([a-z]+\.)\s*(.*)/i);
                                            if (match) {
                                              return (
                                                <div key={i} className="contents">
                                                  <span className={`text-left font-medium pt-[1px] ${theme.accent}`}>{match[1]}</span>
                                                  <span className={`pr-1 leading-snug ${theme.text}`}>{match[2]}</span>
                                                </div>
                                              );
                                            }
                                            return <div key={i} className={`col-span-2 leading-snug pr-1 ${theme.text}`}>{line}</div>;
                                          })}
                                        </div>

                                        {dictData.exchange && dictData.exchange.length > 0 && (
                                          <div className="mb-2.5 pt-2 border-t border-black/5 dark:border-white/5">
                                            <div className={`text-[8px] uppercase tracking-widest mb-1 ${theme.accent}`}>WORD FORMS</div>
                                            <div className="flex flex-wrap gap-1">
                                              {dictData.exchange.map((ex, idx) => (
                                                <div key={idx} className={`text-[10px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 flex gap-1 ${theme.text}`}>
                                                  <span className="opacity-50">{ex.type}:</span>
                                                  <span>{ex.word}</span>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        )}

                                        {dictData.definition && (
                                          <div className="pt-2 border-t border-black/5 dark:border-white/5">
                                            <div className={`text-[8px] uppercase tracking-widest mb-1 ${theme.accent}`}>DEFINITION</div>
                                            <div className={`text-[11px] leading-snug italic ${theme.text} opacity-70`}>
                                              "{dictData.definition.replace(/\\n/g, ' ')}"
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    ) : null}
                                  </div>
                                </div>
                            )}

                            {/* Hint Placeholder - sits behind the input */}
                            <div className={`absolute inset-0 pointer-events-none flex items-center justify-center border-b-[2px] border-transparent pb-1.5 text-xl md:text-3xl font-mono opacity-50 z-0 whitespace-nowrap ${theme.accent}`}>
                              {getHintString(targetWord, hintLevels[index], userInputs[index])}
                            </div>
                            
                            <div 
                              className={`absolute inset-0 z-20 cursor-pointer ${isAnalysisMode ? 'block' : 'hidden'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleWordClick(e, index, targetWord, wordStatus[index]);
                              }}
                            />
                            
                            <input
                              ref={el => inputRefs.current[index] = el}
                              value={userInputs[index]}
                              onChange={(e) => handleChange(e, index)}
                              onKeyDown={(e) => handleKeyDown(e, index)}
                              onClick={(e) => {
                                // If the input is read-only (in analysis mode), clicking it should bubble up or directly open dict
                                if (isAnalysisMode) {
                                  e.stopPropagation();
                                  handleWordClick(e, index, targetWord, wordStatus[index]);
                                } else {
                                  e.stopPropagation();
                                }
                              }}
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
          ${isAnalysisMode ? 'opacity-100 max-h-[1400px] mt-12 md:mt-16 translate-y-0' : 'opacity-0 max-h-0 mt-0 pointer-events-none overflow-hidden translate-y-8'}`}>
          
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
                        <span className={`text-[10px] md:text-[11px] font-bold tracking-widest ${theme.text} opacity-80 uppercase px-3 py-1 rounded-md bg-black/5 dark:bg-white/10 justify-self-start mt-[3px]`}>
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

          {question.scenario && question.argumentFunction && (
            <div className={`mt-8 w-full max-w-2xl rounded-2xl border ${theme.secondary} p-5 text-left`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className={`text-sm font-semibold ${theme.text}`}>迁移到你的作文</h3>
                {transferDraft && (
                  <button type="button" onClick={() => updateTransferDraft('')} className={`text-xs ${theme.accent} hover:underline`}>清空草稿</button>
                )}
              </div>
              <p className={`mt-2 text-xs leading-relaxed ${theme.accent}`}>
                参考上面的表达结构，换一个具体话题写出自己的英文句子。草稿只保存在本设备，不会自动评分。
              </p>
              <p className={`mt-2 text-xs leading-relaxed ${theme.text}`}>改写提示：{transferGuides[question.argumentFunction]}</p>
              <textarea
                aria-label="迁移写作草稿"
                value={transferDraft}
                onChange={(event) => updateTransferDraft(event.target.value)}
                placeholder="在这里写下你的英文句子…"
                rows={3}
                className={`mt-4 w-full resize-y rounded-xl border ${theme.secondary} bg-transparent px-4 py-3 text-sm leading-relaxed ${theme.text} outline-none focus:ring-2 focus:ring-indigo-500/40`}
              />
              <p className={`mt-1 text-right text-[11px] ${theme.accent}`}>{transferDraft.trim().split(/\s+/).filter(Boolean).length} 词</p>
              {transferMatchesReference && <p role="status" className="mt-2 text-xs text-amber-700 dark:text-amber-300">这句话与参考句相同。试着换成与你要讨论的话题相关的对象、原因或例子。</p>}
            </div>
          )}
          
          {/* Speech Recognition Section */}
          <div className={`w-full flex flex-col items-center mt-2 pt-2 border-t border-black/10 dark:border-white/20 transition-all duration-700 delay-300 ${isAnalysisMode ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={toggleRecording}
              className={`relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 shadow-md border ${
                isRecording
                  ? 'bg-red-500 border-red-400 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse'
                  : `bg-white dark:bg-[#2A3143] border-gray-300 dark:border-gray-600 ${theme.text} hover:scale-105`
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </button>

            {/* Speech Result */}
            <div className="mt-2 w-full max-w-2xl text-center min-h-[30px]">
              {isRecording ? (
                <p className={`text-sm font-light italic ${theme.text} opacity-70`}>
                  {speechResult || "Listening..."}
                </p>
              ) : speechScore !== null ? (
                <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-2">
                  <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mb-2">
                    {correctWords.map((word, idx) => {
                      const isWordMatched = recognizedWords[idx];
                      const cleanWord = word.replace(/[^a-zA-Z'-]/g, '');
                      if (!cleanWord) return (
                        <span key={idx} className={`text-sm md:text-base font-mono ${theme.text} opacity-50`}>{word}</span>
                      );
                      return (
                        <span key={idx} className={`text-sm md:text-base font-mono transition-colors ${isWordMatched ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400 opacity-70 line-through decoration-red-500/50'}`}>
                          {word}
                        </span>
                      );
                    })}
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${speechScore >= 80 ? 'bg-green-500/20 text-green-600 dark:text-green-400' : speechScore >= 50 ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' : 'bg-red-500/20 text-red-600 dark:text-red-400'}`}>
                    Accuracy: {speechScore}%
                  </div>
                </div>
              ) : (
                <p className={`text-[11px] font-light ${theme.text} opacity-50`}>
                  {speechResult ? speechResult : "Click the microphone and read the sentence aloud."}
                </p>
              )}
            </div>
          </div>

          <div className={`w-full flex justify-center mt-1 md:mt-2 pb-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnalysisMode ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className={`text-[10px] tracking-[0.2em] uppercase font-medium ${theme.text} opacity-80 animate-pulse px-6 py-2 rounded-full border border-dashed ${theme.secondary} flex items-center gap-2 glass-button cursor-default`}>
              <span className="font-mono bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded">SPACE</span> 
              To Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceQuiz;

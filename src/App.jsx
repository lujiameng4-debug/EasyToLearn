import React, { useState, useEffect, useCallback, useRef } from 'react';
import SentenceQuiz from './components/SentenceQuiz';
import { curriculum, customModuleTemplate } from './data/sentences';
import { parseRawTextToLibrary, stringifyLibraryToRawText } from './utils/parser';

// Define the Zen Themes
const THEMES = [
  {
    id: 'mono',
    bg: 'bg-[#F5F5F7] dark:bg-[#000000]',
    cardBg: 'bg-white dark:bg-[#111111]',
    text: 'text-gray-900 dark:text-gray-100',
    accent: 'text-gray-500 dark:text-gray-400',
    primary: 'border-black dark:border-white focus:border-black dark:focus:border-white text-black dark:text-white',
    secondary: 'border-gray-200 dark:border-gray-800',
  },
  {
    id: 'paper',
    bg: 'bg-[#EFE8DD] dark:bg-[#EFE8DD]',
    cardBg: 'bg-[#FAF7F0] dark:bg-[#FAF7F0]',
    text: 'text-[#4A3C31] dark:text-[#4A3C31]',
    accent: 'text-[#736354] dark:text-[#736354]',
    primary: 'border-[#4A3C31] focus:border-[#4A3C31] text-[#4A3C31] dark:border-[#4A3C31] dark:focus:border-[#4A3C31] dark:text-[#4A3C31]',
    secondary: 'border-[#D9CDBF] dark:border-[#D9CDBF]',
  },
  {
    id: 'midnight',
    bg: 'bg-[#0B0F19] dark:bg-[#0B0F19]',
    cardBg: 'bg-[#151E32] dark:bg-[#151E32]',
    text: 'text-[#F1F5F9] dark:text-[#F1F5F9]',
    accent: 'text-[#94A3B8] dark:text-[#94A3B8]',
    primary: 'border-[#E2E8F0] focus:border-[#E2E8F0] text-[#E2E8F0] dark:border-[#E2E8F0] dark:focus:border-[#E2E8F0] dark:text-[#E2E8F0]',
    secondary: 'border-[#1E293B] dark:border-[#1E293B]',
  }
];

const getModuleIcon = (id) => {
  const props = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "group-hover:scale-110 transition-transform duration-300"
  };

  if (id.includes('custom')) return <svg {...props}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
  if (id.includes('env')) return <svg {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 1 8.3C18 16 14.5 20 11 20z" /></svg>;
  if (id.includes('airport')) return <svg {...props}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L2.5 9l8.1 4.5L7 17.1 3 16.5 2 18l4 2 2 4 1.5-1-1.4-4 3.6-3.6 4.5 8.1c.4-.2.7-.6.6-1.1z"/></svg>;
  if (id.includes('hotel')) return <svg {...props}><path d="M10 22v-6.57"/><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M14 15.43V22"/><path d="M15 16a5 5 0 0 0-6 0"/><path d="M16 11h.01"/><path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M8 7h.01"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>;
  if (id.includes('hospital')) return <svg {...props}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
  if (id.includes('school')) return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
  if (id.includes('dining')) return <svg {...props}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>;
  if (id.includes('shopping')) return <svg {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
  if (id.includes('sports')) return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
  if (id.includes('tech')) return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
  if (id.includes('finance')) return <svg {...props}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
  if (id.includes('work')) return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
  if (id.includes('art')) return <svg {...props}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>;
  if (id.includes('travel')) return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
  if (id.includes('basic')) return <svg {...props}><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>;
  if (id.includes('tense')) return <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
  if (id.includes('clause')) return <svg {...props}><path d="M9 4v16"/><path d="M15 4v16"/><path d="M5 8h14"/><path d="M5 16h14"/></svg>;

  return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>;
};

function App() {
  // --- App View State ---
  // 'dashboard' or 'quiz'
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeModule, setActiveModule] = useState(null);

  // Load custom module from localStorage
  const [customModule, setCustomModule] = useState(() => {
    const saved = localStorage.getItem('easyToLearn_customModule');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.sentences) return parsed;
      } catch (e) {
        console.error("Failed to parse saved custom module");
      }
    }
    return customModuleTemplate;
  });

  // Persist custom module changes
  useEffect(() => {
    localStorage.setItem('easyToLearn_customModule', JSON.stringify(customModule));
  }, [customModule]);

  // The active library is the sentences array of the active module
  const library = activeModule ? activeModule.sentences : null;

  const [queue, setQueue] = useState([]);
  const [sessionTotal, setSessionTotal] = useState(0); 
  const [sessionProgress, setSessionProgress] = useState(1);
  const [currentSentenceHadError, setCurrentSentenceHadError] = useState(false);
  const [sessionMistakes, setSessionMistakes] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  
  // NEW: Fetch modules from the backend
  const [modules, setModules] = useState([]); // Start empty, will fetch others
  const [dueReviews, setDueReviews] = useState([]); // SRS due reviews


  // 5. State for Global Stats (Heatmap & Streak)
  const [globalStats, setGlobalStats] = useState({
    history: {}, // Format: 'YYYY-MM-DD': number_of_sentences
    lastActiveDate: null,
    currentStreak: 0
  });

  const fetchDueReviews = useCallback(() => {
    fetch('/api/review/today?userId=local_user')
      .then(res => res.json())
      .then(data => {
        setDueReviews(data);
      })
      .catch(err => {
        console.error("Failed to fetch due reviews", err);
      });
  }, []);

  const fetchGlobalStats = useCallback(() => {
    fetch('/api/stats?userId=local_user')
      .then(res => res.json())
      .then(data => {
        if (data && data.history) {
          // Sync local data to backend if backend is empty but we have local history
          const saved = localStorage.getItem('easyToLearn_globalStats');
          if (saved && Object.keys(data.history).length === 0) {
            try {
              const localData = JSON.parse(saved);
              if (localData.history && Object.keys(localData.history).length > 0) {
                fetch('/api/stats/sync', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ userId: 'local_user', ...localData })
                }).then(() => {
                  // Wait briefly then refetch
                  setTimeout(() => {
                    fetch('/api/stats?userId=local_user')
                      .then(r => r.json())
                      .then(d => { if (d && d.history) setGlobalStats(d); });
                  }, 100);
                });
                return;
              }
            } catch (e) {}
          }
          setGlobalStats(data);
        }
      })
      .catch(err => {
        console.error("Failed to fetch global stats from backend", err);
        // Fallback to localStorage if backend is down
        const saved = localStorage.getItem('easyToLearn_globalStats');
        if (saved) {
          try { setGlobalStats(JSON.parse(saved)); } catch (e) {}
        }
      });
  }, []);

  useEffect(() => {
    // Fetch standard curriculum
    fetch('/api/curriculum')
      .then(res => res.json())
      .then(data => {
        setModules(data);
        setIsDataLoaded(true);
      })
      .catch(err => {
        console.error("Backend not running, falling back to local data", err);
        setModules(curriculum);
        setIsDataLoaded(true);
      });

    // Fetch due reviews
    fetchDueReviews();

    // Fetch global stats
    fetchGlobalStats();
  }, [fetchDueReviews, fetchGlobalStats]);

  // Derived list of all available modules
  const allModules = [...modules, customModule];

  // --- Session & Review State ---
  const [isSessionComplete, setIsSessionComplete] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [stats, setStats] = useState({ flaws: 0, timeSeconds: 0 });
  const sessionActiveRef = useRef(false);
  const completedInSessionRef = useRef(new Set());
  
  // NEW: State for showing analysis after a sentence is completed
  const [showAnalysis, setShowAnalysis] = useState(false);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [rawText, setRawText] = useState('');

  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem('easyToLearn_themeIndex');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [voiceAccent, setVoiceAccent] = useState(() => {
    const saved = localStorage.getItem('easyToLearn_voiceAccent');
    return saved || 'US';
  });

  const [difficulty, setDifficulty] = useState(1);

  // 6. State for In-Game Combo
  const [combo, setCombo] = useState(0);

  // 7. State for Yearly Stats Modal
  const [showYearModal, setShowYearModal] = useState(false);

  // 8. State for Sentence Mastery (Spaced Repetition)
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('easyToLearn_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {}; // Format: { [sentence_id]: 'mastered' | 'unfamiliar' }
  });
  
  const userProgressRef = useRef(userProgress);
  useEffect(() => {
    userProgressRef.current = userProgress;
    localStorage.setItem('easyToLearn_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  // 9. Toast State
  const [toast, setToast] = useState(null);
  const showToast = useCallback((msg, type) => {
    // If there's an existing toast, close it first before showing the new one
    setToast(null);
    setTimeout(() => {
      setToast({ msg, type, id: Date.now() });
    }, 50);
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Update backend review state
  const updateSentenceReview = useCallback((sentenceId, action) => {
    fetch('/api/review/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'local_user', sentenceId, action })
    }).catch(err => console.error('Failed to update review:', err));
  }, []);

  // Persist global stats
  useEffect(() => {
    localStorage.setItem('easyToLearn_globalStats', JSON.stringify(globalStats));
  }, [globalStats]);

  const startNewSession = useCallback((lib, specificIndices = null) => {
    if (!lib) return;
    let initialQueue = [];
    
    if (specificIndices) {
      // If we provided specific indices (e.g. for practicing mistakes), just use them directly
      initialQueue = [...specificIndices];
    } else {
      // We can determine if it's the review module based on the library contents or activeModule.
      // To keep it safe, let's just use the current library. If it's from dueReviews, 
      // it typically has a progress object attached by the backend.
      const isReview = lib.length > 0 && lib[0].progress !== undefined;
      
      if (isReview) {
        // In review mode, we just queue all the due sentences
        initialQueue = lib.map((_, i) => i);
      } else {
        const mastered = [];
        const unfamiliar = [];
        const learning = [];

        // Categorize sentences based on user progress
        lib.forEach((q, index) => {
          const status = userProgressRef.current[q.id];
          if (status === 'mastered') {
            mastered.push(index);
          } else if (status === 'unfamiliar') {
            unfamiliar.push(index);
            unfamiliar.push(index); // Duplicate unfamiliar sentences for extra practice in this session
          } else {
            learning.push(index);
          }
        });

        if (learning.length === 0 && unfamiliar.length === 0 && mastered.length > 0) {
          // If ALL sentences are mastered, just review them all once (shuffled)
          initialQueue = [...mastered];
        } else {
          // Otherwise, only focus on unfamiliar and learning sentences, skipping mastered ones
          initialQueue = [...unfamiliar, ...learning];
        }
      }
    }

    // Shuffle the queue (Fisher-Yates)
    for (let i = initialQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialQueue[i], initialQueue[j]] = [initialQueue[j], initialQueue[i]];
    }

    setQueue(initialQueue);
    setSessionTotal(initialQueue.length);
    setSessionProgress(1);
    setSessionMistakes([]); // Reset mistakes on new session
    setIsSessionComplete(false);
    setSessionStartTime(Date.now());
    setStats({ flaws: 0, timeSeconds: 0 });
    setShowAnalysis(false);
    setCurrentSentenceHadError(false);
    setCombo(0); // Reset combo at start of new session
    sessionActiveRef.current = true;
    completedInSessionRef.current = new Set();
  }, []);

  // Initialize on mount or library change
  useEffect(() => {
    startNewSession(library);
  }, [library, startNewSession]);

  useEffect(() => {
    localStorage.setItem('easyToLearn_library', JSON.stringify(library));
  }, [library]);

  useEffect(() => {
    localStorage.setItem('easyToLearn_themeIndex', themeIndex);
  }, [themeIndex]);

  useEffect(() => {
    localStorage.setItem('easyToLearn_voiceAccent', voiceAccent);
  }, [voiceAccent]);

  // Pre-load voices on mount so they are available immediately
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
      // Ensure voices are loaded asynchronously in Chrome/Safari
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Helper to read sentence aloud using Web Speech API
  const speakSentence = useCallback((text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1; 
    
    // Explicitly set the language tag so the browser knows the base expectation
    const isUK = voiceAccent === 'UK';
    utterance.lang = isUK ? 'en-GB' : 'en-US';
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      // Filter out all voices that match our target accent (case-insensitive)
      const accentVoices = voices.filter(v => 
        v.lang.toLowerCase().includes(isUK ? 'gb' : 'us') || 
        v.lang.toLowerCase().includes(isUK ? 'uk' : 'us')
      );

      let preferredVoice = null;
      
      if (accentVoices.length > 0) {
        if (isUK) {
          // Prioritize User's requested UK voice: Daniel (specifically Premium/Enhanced if available)
          preferredVoice = 
            accentVoices.find(v => v.name.includes('Daniel') && (v.name.includes('Premium') || v.name.includes('Enhanced'))) ||
            accentVoices.find(v => v.name.includes('Daniel')) ||
            accentVoices.find(v => v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced') || v.name.includes('Neural')) ||
            accentVoices[0];
        } else {
          // Prioritize User's requested US voice: Ava (specifically Premium/Enhanced if available)
          preferredVoice = 
            accentVoices.find(v => v.name.includes('Ava') && (v.name.includes('Premium') || v.name.includes('Enhanced'))) ||
            accentVoices.find(v => v.name.includes('Ava')) ||
            accentVoices.find(v => v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced') || v.name.includes('Neural')) ||
            accentVoices[0];
        }
      }

      // Overwrite the utterance voice if we successfully found one
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
    }

    window.speechSynthesis.speak(utterance);
  }, [voiceAccent]);

  const currentTheme = THEMES[themeIndex];
  const currentQuestionIndex = queue.length > 0 ? queue[0] : null;
  const currentQuestion = (currentQuestionIndex !== null && currentQuestionIndex !== undefined && library && library[currentQuestionIndex]) ? library[currentQuestionIndex] : null;

  // Global key handler for advancing from Analysis screen, Session Complete screen, and shortcuts
  useEffect(() => {
    const handleGlobalKey = (e) => {
      if (currentView !== 'quiz') return;
      
      // Handle Ctrl shortcuts (strictly Ctrl, ignoring Command)
      if (e.ctrlKey && !e.metaKey) {
        const key = e.key.toLowerCase();
        
        if (key === 'a') {
          e.preventDefault(); // Prevent "Select All"
          if (currentQuestion && currentQuestion.english_full) {
            speakSentence(currentQuestion.english_full);
          }
          return;
        }
        
        if (key === 's') { 
          e.preventDefault(); 
          if (currentQuestion) {
            setUserProgress(prev => ({ ...prev, [currentQuestion.id]: 'mastered' }));
            updateSentenceReview(currentQuestion.id, 'mastered');
            completedInSessionRef.current.add(currentQuestion.id);
            showToast('已标记为掌握，将减少出现频率', 'success');
          }
          return; 
        }
        
        if (key === 'd') { 
          e.preventDefault(); 
          if (currentQuestion) {
            setUserProgress(prev => ({ ...prev, [currentQuestion.id]: 'unfamiliar' }));
            updateSentenceReview(currentQuestion.id, 'forgot');
            completedInSessionRef.current.add(currentQuestion.id);
            showToast('已标记为生词，已加入稍后复习', 'warning');
            
            // Instantly push this question to the end of the current session queue again
            setQueue(prevQueue => [...prevQueue, prevQueue[0]]);
            setSessionTotal(prev => prev + 1); // Adjust progress bar total
          }
          return; 
        }
      }

      if (e.key === 'Escape') {
        setCurrentView('dashboard');
        fetchDueReviews();
        return;
      }
      
      if (e.key === ' ' || e.key === 'Enter') {
        if (isSessionComplete) {
          e.preventDefault();
          // We no longer automatically start a new session here because there are multiple options 
          // (Restart All, Practice Mistakes, Return Home). The user should click the specific button.
          // Or we could default to returning home.
          setCurrentView('dashboard');
          fetchDueReviews();
        } else if (showAnalysis && !isTransitioning) {
          e.preventDefault();
          handleNextQuestionRef.current();
        }
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [currentView, isSessionComplete, showAnalysis, isTransitioning, library, startNewSession, currentQuestion, speakSentence, showToast, fetchDueReviews]);

  const startModule = (mod) => {
    if (!mod.sentences || mod.sentences.length === 0) {
      if (mod.id === 'module_custom') {
        setActiveModule(mod);
        setCurrentView('quiz');
        openEditor(); // Auto open editor if custom is empty
        return;
      }
      alert("This module has no sentences yet!");
      return;
    }
    setActiveModule(mod);
    setCurrentView('quiz');
    startNewSession(mod.sentences);
  };

  const handleMistake = useCallback(() => {
    if (!currentSentenceHadError && !showAnalysis) {
      setCurrentSentenceHadError(true);
      setCombo(0); // Break the combo on any mistake or hint
    }
  }, [currentSentenceHadError, showAnalysis]);

  // Record a completed sentence to global stats
  const recordCompletedSentence = useCallback(() => {
    fetch('/api/stats/record', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'local_user' })
    })
      .then(res => res.json())
      .then(data => {
        setGlobalStats(prev => {
          const newHistory = { ...prev.history };
          newHistory[data.date] = data.count;
          return {
            history: newHistory,
            lastActiveDate: data.lastActiveDate,
            currentStreak: data.currentStreak
          };
        });
      })
      .catch(err => {
        console.error("Failed to record stats to backend:", err);
        // Fallback to local logic if backend fails
        const today = new Date();
        const dateStr = today.toISOString().split('T')[0];
        
        setGlobalStats(prev => {
          const newHistory = { ...prev.history };
          newHistory[dateStr] = (newHistory[dateStr] || 0) + 1;
          
          let newStreak = prev.currentStreak;
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];

          if (prev.lastActiveDate !== dateStr) {
            if (prev.lastActiveDate === yesterdayStr) {
              newStreak += 1;
            } else {
              newStreak = 1;
            }
          }

          return {
            history: newHistory,
            lastActiveDate: dateStr,
            currentStreak: newStreak
          };
        });
      });
  }, []);

  const handleSentenceComplete = useCallback(() => {
    // Only execute this ONCE per question state
    if (showAnalysis) return;
    
    const isFirstAttempt = currentQuestion && !completedInSessionRef.current.has(currentQuestion.id);

    // If no errors were made on this sentence, increase combo!
    if (!currentSentenceHadError) {
      setCombo(prev => prev + 1);
      if (isFirstAttempt) {
        recordCompletedSentence();
        if (currentQuestion) updateSentenceReview(currentQuestion.id, 'correct');
      }
    } else {
      if (isFirstAttempt && currentQuestion) {
        updateSentenceReview(currentQuestion.id, 'wrong');
      }
    }
    
    if (currentQuestion) {
      completedInSessionRef.current.add(currentQuestion.id);
    }

    // Instead of auto-transitioning, we show the analysis mode
    setShowAnalysis(true);
  }, [currentSentenceHadError, recordCompletedSentence, currentQuestion, updateSentenceReview, showAnalysis]);

  // Called manually by the user pressing Space when reading the analysis
  const handleNextQuestion = useCallback(() => {
    setIsTransitioning(true);
    
    // We intentionally delay resetting showAnalysis here
    // so the outgoing animation can play out with the content still visible
    setTimeout(() => {
      setShowAnalysis(false);
      
      setQueue(prevQueue => {
        const newQueue = [...prevQueue];
        const completedIndex = newQueue.shift();

        if (currentSentenceHadError) {
          // Do NOT push it back to the queue. Instead, track it in sessionMistakes for later practice
          setSessionMistakes(prev => {
            if (!prev.includes(completedIndex)) {
              return [...prev, completedIndex];
            }
            return prev;
          });
          setStats(s => ({ ...s, flaws: s.flaws + 1 }));
        }

        if (newQueue.length === 0) {
          sessionActiveRef.current = false;
          const endTime = Date.now();
          const timeSpent = Math.floor((endTime - sessionStartTime) / 1000);
          setStats(s => ({ ...s, timeSeconds: timeSpent }));
          setIsSessionComplete(true);
          fetchDueReviews(); // Refresh review counts when session finishes
        }

        return newQueue;
      });
      
      // Increment progress for the next question, capping at sessionTotal
      setSessionProgress(prev => {
         // Using function updater to avoid stale sessionTotal in closure if possible
         // But we just use the closure sessionTotal here
         return Math.min(sessionTotal, prev + 1);
      });
      
      setCurrentSentenceHadError(false);
      
      // Delay removing the transition state slightly so React has time to render the new question
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
      
    }, 400); // Faster, snappier transition
  }, [currentSentenceHadError, sessionStartTime, fetchDueReviews]);

  const handleNextQuestionRef = useRef(handleNextQuestion);
  useEffect(() => {
    handleNextQuestionRef.current = handleNextQuestion;
  }); // Removed dependency array so it updates on EVERY render

  const openEditor = () => {
    setRawText(stringifyLibraryToRawText(library));
    setIsEditing(true);
  };

  const saveEditor = () => {
    const newSentences = parseRawTextToLibrary(rawText);
    if (newSentences.length > 0) {
      setCustomModule(prev => ({ ...prev, sentences: newSentences }));
      setActiveModule(prev => ({ ...prev, sentences: newSentences }));
      setIsEditing(false);
      startNewSession(newSentences);
    } else {
      alert("Please provide at least one valid Chinese/English sentence pair.");
    }
  };

  const resetToDefault = () => {
    if (window.confirm("Are you sure you want to clear your custom sentences?")) {
      setCustomModule(prev => ({ ...prev, sentences: [] }));
      setActiveModule(prev => ({ ...prev, sentences: [] }));
      setIsEditing(false);
      setCurrentView('dashboard');
      fetchDueReviews();
    }
  };

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % THEMES.length);
  };

  const cycleDifficulty = () => {
    // If they change difficulty while reading analysis, force them out of analysis mode
    if (showAnalysis) {
      setShowAnalysis(false);
      // We don't want to advance to the next question, just reset the current one
      // The key change in SentenceQuiz will handle the remount
    }
    setDifficulty((prev) => (prev % 3) + 1);
  };

  const cycleAccent = () => {
    setVoiceAccent(prev => prev === 'US' ? 'UK' : 'US');
  };

  const progressCurrent = sessionProgress;

  // Removed progressText string logic since we are rendering the progress bar and exact numbers inline

  // Helper to format time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  };

  // Generate data for a specific month
  const generateMonthMatrix = (year, monthIndex) => {
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const matrix = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const y = year;
      const m = String(monthIndex + 1).padStart(2, '0');
      const d = String(i).padStart(2, '0');
      const dateStr = `${y}-${m}-${d}`;
      const count = globalStats.history[dateStr] || 0;
      matrix.push({ date: dateStr, count });
    }
    return matrix;
  };

  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const allowScroll = currentView !== 'quiz' || isEditing || isSessionComplete || showAnalysis;

  return (
    <div className={`min-h-[100dvh] w-full ${currentTheme.bg} transition-colors duration-1000 flex flex-col items-center p-8 font-sans relative overflow-x-hidden ${allowScroll ? 'overflow-y-auto' : 'overflow-y-hidden'} hide-scrollbar`}>
      
      {/* Header Controls */}
      <div className="absolute top-6 left-6 right-6 md:top-8 md:left-8 md:right-8 flex justify-between items-center z-[100] pointer-events-none">
        {/* Left side: Back to Dashboard & Theme Toggle */}
        <div className="flex items-center gap-2 pointer-events-auto glass-panel rounded-full px-2 py-1">
          {currentView === 'quiz' && !isEditing && (
            <button 
              onClick={() => { setCurrentView('dashboard'); fetchDueReviews(); }}
              className={`flex items-center gap-2 ${currentTheme.accent} hover:${currentTheme.text} transition-all duration-300 px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-sm tracking-widest uppercase font-medium hover:-translate-x-1`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Menu
            </button>
          )}
          
          <button 
            onClick={cycleTheme}
            className={`${currentTheme.accent} hover:${currentTheme.text} transition-all duration-300 p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 hover:rotate-90`}
            aria-label="Change Theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
            </svg>
          </button>
        </div>

        {/* Right side: Difficulty, Accent & Edit */}
        {!isEditing && !isSessionComplete && (
          <div className="flex items-center gap-2 pointer-events-auto glass-panel rounded-full px-2 py-1">
            {currentView === 'quiz' && (
              <button 
                onClick={cycleAccent}
                className={`flex items-center gap-1.5 ${currentTheme.accent} hover:${currentTheme.text} transition-colors px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 font-mono text-xs tracking-wider`}
                title={`Current Accent: ${voiceAccent === 'US' ? 'American English' : 'British English'}`}
              >
                <span className={`font-bold ${currentTheme.text}`}>{voiceAccent}</span>
                <span className="opacity-50">VOICE</span>
              </button>
            )}

            {currentView === 'quiz' && (
              <button 
                onClick={cycleDifficulty}
                className={`flex items-center gap-1.5 ${currentTheme.accent} hover:${currentTheme.text} transition-colors px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 font-mono text-xs tracking-wider`}
                title={`Current Difficulty: Level ${difficulty}`}
              >
                <span className="opacity-50">LVL</span>
                <span className={`font-bold ${difficulty === 3 ? 'text-red-500/70' : difficulty === 2 ? 'text-yellow-500/70' : 'text-green-500/70'}`}>
                  {difficulty}
                </span>
              </button>
            )}
            
            {currentView === 'quiz' && activeModule?.id === 'module_custom' && (
              <button 
                onClick={openEditor}
                className={`${currentTheme.accent} hover:${currentTheme.text} transition-colors p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5`}
                aria-label="Edit Custom Library"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Shortcut Sidebar (Only in Quiz view) */}
      {currentView === 'quiz' && !isEditing && !isSessionComplete && (
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40 opacity-20 hover:opacity-100 transition-all duration-500 hover:translate-x-2">
          <div className="flex flex-col gap-3 glass-panel p-4 rounded-2xl">
          {[
            { isCtrl: true, key: 'A', label: '读句' },
            { isCtrl: true, key: 'S', label: '掌握' },
            { isCtrl: true, key: 'D', label: '生词' },
            { isCtrl: false, key: 'Tab', label: '答案' }
          ].map((sc, i) => (
            <div key={i} className={`flex items-center gap-3 group cursor-default`}>
              <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                {sc.isCtrl && (
                  <>
                    <div className={`flex items-center justify-center h-7 px-2 rounded-md border ${currentTheme.secondary} bg-black/5 dark:bg-white/5 ${currentTheme.text} shadow-sm font-mono text-[10px] font-medium`}>
                      Ctrl
                    </div>
                    <span className={`font-mono text-[10px] font-bold ${currentTheme.accent} opacity-40`}>+</span>
                  </>
                )}
                <div className={`flex items-center justify-center h-7 px-2 min-w-[28px] rounded-md border ${currentTheme.secondary} bg-black/5 dark:bg-white/5 ${currentTheme.text} shadow-sm font-mono text-[11px] font-medium`}>
                  {sc.key}
                </div>
              </div>
              <span className={`text-[11px] tracking-widest font-medium ${currentTheme.accent} whitespace-nowrap group-hover:text-current transition-colors duration-300`}>
                {sc.label}
              </span>
            </div>
          ))}
          </div>
        </div>
      )}

      <main className="w-full max-w-6xl flex-1 flex flex-col items-center justify-center relative mt-16 md:mt-0">
        
        {currentView === 'dashboard' ? (
          // --- Dashboard View (Select Module) ---
          <div className="w-full animate-spring-up py-12 px-4 md:px-12">
            
            {/* Global Stats Dashboard (Header) */}
            <div className="flex flex-col md:flex-row items-stretch justify-between mb-16 md:mb-24 gap-8">
              
              {/* Streak Counter */}
              <div className="flex flex-col items-start justify-between w-full md:w-1/3">
                <div className={`text-xs font-mono tracking-widest uppercase mb-2 md:mb-0 ${currentTheme.accent}`}>
                  Current Streak
                </div>
                <div className={`flex items-baseline gap-2 ${globalStats.currentStreak > 0 ? (currentTheme.id === 'mono' ? 'text-black dark:text-white' : 'text-orange-500/80') : currentTheme.accent}`}>
                  <span className="text-5xl font-light leading-none">{globalStats.currentStreak}</span>
                  <span className="text-sm">DAYS</span>
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                <h1 className={`text-5xl md:text-6xl font-bold tracking-tight text-center leading-none ${currentTheme.text}`}>
                  Curriculum
                </h1>
              </div>

              {/* Current Month Activity Matrix */}
              <div className="flex flex-col items-end w-full md:w-1/3">
                <div className="flex flex-col items-center justify-between h-full">
                  <div 
                    className={`text-xs font-mono tracking-widest uppercase mb-2 md:mb-0 ${currentTheme.accent} flex items-center gap-1.5 cursor-pointer hover:opacity-70 transition-opacity`}
                    onClick={() => setShowYearModal(true)}
                    title="View Yearly History"
                  >
                    {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </div>
                  <div 
                    className="grid grid-cols-7 gap-[3px] cursor-pointer group"
                    onClick={() => setShowYearModal(true)}
                    title="Click to view full year"
                  >
                    {generateMonthMatrix(new Date().getFullYear(), new Date().getMonth()).map((dayObj, idx) => {
                      let intensityClass = 'opacity-10'; // 0
                      if (dayObj.count > 0 && dayObj.count < 5) intensityClass = 'opacity-40';
                      else if (dayObj.count >= 5 && dayObj.count < 15) intensityClass = 'opacity-70';
                      else if (dayObj.count >= 15) intensityClass = 'opacity-100';

                      return (
                        <div 
                          key={idx}
                          className={`w-3.5 h-3.5 rounded-[1px] transition-all duration-300 group-hover:opacity-80
                            ${dayObj.count > 0 
                              ? (currentTheme.id === 'mono' ? 'bg-black dark:bg-white ' + intensityClass : 'bg-green-500 ' + intensityClass)
                              : `bg-transparent border ${currentTheme.secondary}`
                            }
                          `}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Daily Review Card */}
              {dueReviews.length > 0 && (
                <button
                  onClick={() => startModule({ id: 'module_review', title: '今日复习 (Review Due)', sentences: dueReviews })}
                  className={`col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 group relative flex items-center justify-between gap-4 px-8 py-6 rounded-2xl transition-all duration-500 ease-out overflow-hidden
                    ${currentTheme.id === 'mono' ? 'bg-black text-white dark:bg-white dark:text-black' : (currentTheme.id === 'paper' ? 'bg-[#4A3C31] text-[#F4EFE6]' : 'bg-[#E2E8F0] text-[#0B0F19]')}
                    shadow-lg hover:shadow-xl hover:-translate-y-1
                  `}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 dark:bg-black/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform duration-300">
                        <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
                      </svg>
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-xl md:text-2xl font-bold tracking-wide">
                        今日待复习
                      </span>
                      <span className="text-xs font-mono tracking-widest mt-1 opacity-80 uppercase">
                        Spaced Repetition
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-4xl font-light leading-none">
                      {dueReviews.length}
                    </div>
                    <div className="text-[10px] font-mono tracking-widest uppercase opacity-70 mt-1">
                      Sentences Due
                    </div>
                  </div>
                </button>
              )}

              {allModules.map((mod) => {
                const isCustom = mod.id === 'module_custom';
                // Extract Chinese title and English subtitle if format is "中文 (English)"
                const titleMatch = mod.title.match(/^(.*?)\s*\((.*?)\)$/);
                const displayTitle = titleMatch ? titleMatch[1].trim() : mod.title;
                const displaySub = titleMatch ? titleMatch[2].trim().toUpperCase() : (isCustom ? 'USER CONTENT' : 'FUNDAMENTAL');

                return (
                  <button
                    key={mod.id}
                    onClick={() => startModule(mod)}
                    className={`group relative flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-500 ease-out overflow-hidden
                      ${isCustom 
                        ? `bg-transparent border-2 border-dashed ${currentTheme.secondary} hover:bg-black/[0.02] dark:hover:bg-white/[0.02]` 
                        : `${currentTheme.cardBg} border border-transparent shadow-[0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-[0_2px_10px_rgb(255,255,255,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)] hover:-translate-y-1`
                      }
                    `}
                  >
                    {/* Icon container */}
                    <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500
                      ${isCustom ? `bg-black/5 dark:bg-white/5 ${currentTheme.text}` : `bg-black/5 dark:bg-white/5 ${currentTheme.text} group-hover:bg-black/10 dark:group-hover:bg-white/10`}
                    `}>
                      {getModuleIcon(mod.id)}
                    </div>
                    
                    {/* Title */}
                    <div className="flex-1 flex flex-col items-start text-left overflow-hidden pr-2">
                      <span className={`text-sm md:text-base font-medium truncate w-full ${currentTheme.text} group-hover:scale-[1.02] transform origin-left transition-transform duration-300`}>
                        {displayTitle}
                      </span>
                      <span className={`text-[9px] md:text-[10px] font-mono tracking-widest mt-0.5 truncate w-full ${currentTheme.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
                        {displaySub}
                      </span>
                    </div>

                    {/* Sentence Count */}
                    <div className={`flex-shrink-0 text-xs font-mono font-medium ${currentTheme.text} opacity-30 group-hover:opacity-60 transition-opacity duration-300`}>
                      {mod.sentences.length}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : isEditing ? (
          <div className="w-full max-w-2xl animate-spring-up z-40">
            <div className="mb-6 flex justify-between items-end">
              <div>
                <h3 className={`text-xl font-medium ${currentTheme.text}`}>Library</h3>
                <p className={`text-sm ${currentTheme.accent} mt-1`}>
                  Format: Chinese on line 1, English on line 2.
                </p>
              </div>
              <button 
                onClick={resetToDefault}
                className="text-sm text-red-400 hover:text-red-500 transition-colors"
              >
                Reset
              </button>
            </div>
            
            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              className={`w-full h-[50vh] p-8 ${currentTheme.cardBg} border-none rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-base font-mono leading-loose outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-700 transition-colors resize-none ${currentTheme.text}`}
              placeholder={`Example:\n\n我今天需要做这件事情。\ni need to do it today.\n\n熟能生巧！\npractice makes perfect!`}
            />
            
            <div className="mt-8 flex justify-end items-center gap-6">
              <button 
                onClick={() => setIsEditing(false)}
                className={`${currentTheme.accent} hover:${currentTheme.text} transition-colors font-medium`}
              >
                Cancel
              </button>
              <button 
                onClick={saveEditor}
                className={`px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform active:scale-95 ${currentTheme.id === 'mono' ? 'bg-black text-white dark:bg-white dark:text-black' : (currentTheme.id === 'paper' ? 'bg-[#4A3C31] text-[#F4EFE6]' : 'bg-[#E2E8F0] text-[#0B0F19]')}`}
              >
                Save Changes
              </button>
            </div>
          </div>
        ) : isSessionComplete ? (
          // --- Summary Screen ---
          <div className="flex flex-col items-center animate-spring-up w-full max-w-md">
            <h2 className={`text-2xl md:text-3xl font-light tracking-[0.2em] ${currentTheme.text} mb-12 uppercase text-center`}>
              Session Complete
            </h2>
            
            <div className={`w-full glass-panel border ${currentTheme.secondary} rounded-3xl p-8 mb-12 flex flex-col items-center transition-all duration-300 hover:scale-[1.02]`}>
              {/* Mastery Stats Bar */}
              {activeModule?.id === 'module_review' && (
                <div className="w-full flex flex-col items-center mb-10 pb-10 border-b border-gray-200/50 dark:border-gray-800/50">
                  <div className={`text-xs font-semibold tracking-[0.15em] mb-4 ${currentTheme.accent} uppercase`}>Review Mastery Progress</div>
                  <div className="w-full flex justify-between text-[10px] font-mono tracking-widest text-gray-400 mb-2 px-1">
                    <span>Needs Work</span>
                    <span>1D</span>
                    <span>3D</span>
                    <span>7D</span>
                    <span>15D</span>
                    <span className="text-green-500">Mastered</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex">
                    {/* Fake progress bar showing the distribution, for a real app we would compute this from the session queue */}
                    <div className="h-full bg-red-400/80 transition-all" style={{ width: `${(stats.flaws / sessionTotal) * 100}%` }}></div>
                    <div className="h-full bg-yellow-400/80 transition-all" style={{ width: `${Math.max(0, 30 - (stats.flaws / sessionTotal) * 100)}%` }}></div>
                    <div className="h-full bg-blue-400/80 transition-all flex-1"></div>
                    <div className="h-full bg-green-500 transition-all" style={{ width: '25%' }}></div>
                  </div>
                </div>
              )}

              <div className="flex w-full justify-around mb-8">
                <div className="flex flex-col items-center">
                  <div className={`text-xs font-semibold tracking-[0.15em] mb-2 ${currentTheme.accent} uppercase`}>Time</div>
                  <div className={`text-3xl font-mono font-light ${currentTheme.text}`}>{formatTime(stats.timeSeconds)}</div>
                </div>
                
                {/* Subtle Divider */}
                <div className={`w-px h-16 ${currentTheme.secondary}`}></div>

                    <div className="flex flex-col items-center">
                      <div className={`text-xs font-semibold tracking-[0.15em] mb-2 ${currentTheme.accent} uppercase`}>Re-tries</div>
                      <div className={`text-3xl font-mono font-light ${stats.flaws > 0 ? 'text-red-500' : currentTheme.text}`}>
                        {stats.flaws}
                      </div>
                    </div>
                  </div>

              {stats.flaws === 0 ? (
                <div className="text-sm text-green-500 font-medium tracking-wide flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Flawless Execution
                </div>
              ) : (
                <div className={`text-sm ${currentTheme.accent} tracking-wide text-center flex flex-col items-center gap-2`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                  Room for improvement. <br/> Keep practicing!
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-4 w-full">
              {sessionMistakes.length > 0 && (
                <button 
                  onClick={() => {
                    startNewSession(library, sessionMistakes);
                  }}
                  className={`group flex justify-center items-center gap-3 text-sm tracking-[0.1em] font-medium py-3 px-8 rounded-full transition-all duration-300 ${currentTheme.id === 'mono' ? 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200' : (currentTheme.id === 'paper' ? 'bg-[#4A3C31] text-[#F4EFE6] hover:bg-[#3A2C21]' : 'bg-[#E2E8F0] text-[#0B0F19] hover:bg-white')} shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 active:translate-y-0`}
                >
                  练习错题 ({sessionMistakes.length})
                  <span className="opacity-60 text-xs font-mono bg-black/20 dark:bg-black/10 px-2 py-0.5 rounded ml-2 group-hover:opacity-100 transition-opacity">SPACE</span>
                </button>
              )}
              
              <div className="flex gap-4 w-full">
                <button 
                  onClick={() => {
                    if (activeModule?.id === 'module_review') {
                      setCurrentView('dashboard');
                      fetchDueReviews();
                    } else {
                      startNewSession(library);
                    }
                  }}
                  className={`flex-1 group flex justify-center items-center gap-3 text-sm tracking-[0.1em] font-medium py-3 px-6 rounded-full transition-all duration-300 glass-button ${currentTheme.text}`}
                >
                  再练一次
                </button>

                <button 
                  onClick={() => {
                    setCurrentView('dashboard');
                    fetchDueReviews();
                  }}
                  className={`flex-1 group flex justify-center items-center gap-3 text-sm tracking-[0.1em] font-medium py-3 px-6 rounded-full transition-all duration-300 glass-button ${currentTheme.text}`}
                >
                  返回主页
                </button>
              </div>
            </div>
          </div>
        ) : (
          // --- Quiz Mode ---
          <div className={`w-full transition-all duration-500 ease-out transform ${isTransitioning ? 'opacity-0 scale-[0.97] blur-[4px] -translate-y-4' : 'opacity-100 scale-100 blur-0 translate-y-0'} flex flex-col items-center justify-center relative z-[60] pb-12`}>
            {currentQuestion ? (
              <div className="relative w-full flex flex-col items-center">
                
                {/* Top area: Combo & Progress */}
                <div className="flex flex-col items-center justify-end min-h-[3rem] mb-6 mt-4 md:mt-8">
                  {/* Absolute positioning relative to the container ensures it sits exactly above progressText */}
                  <div className="relative w-full h-0 flex justify-center z-50 pointer-events-none">
                    {combo > 0 && !showAnalysis && (
                      <div className="absolute bottom-5 animate-combo flex items-center gap-2 mb-2">
                        <span className={`text-xs tracking-[0.25em] uppercase font-bold leading-none ${currentTheme.id === 'mono' ? currentTheme.text : 'text-orange-500/90'}`}>
                          Combo
                        </span>
                        <span className={`text-3xl font-mono italic leading-none ${currentTheme.id === 'mono' ? currentTheme.text : 'text-orange-500/90'}`}>
                          x{combo}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="flex flex-col items-center w-full max-w-md gap-3 mb-2">
                    <div className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-700 ease-out rounded-full ${currentTheme.id === 'mono' ? 'bg-black dark:bg-white' : (currentTheme.id === 'paper' ? 'bg-[#4A3C31]' : 'bg-[#E2E8F0]')}`}
                        style={{ width: `${(queue.length === 0 && isSessionComplete ? 100 : (progressCurrent - 1) / sessionTotal * 100)}%` }}
                      />
                    </div>
                  <div className={`text-xs font-mono tracking-[0.2em] transition-colors duration-1000 ${currentTheme.accent} opacity-60 leading-none flex items-center`}>
                    <span className="w-6 text-right">{progressCurrent > sessionTotal ? sessionTotal : progressCurrent}</span>
                    <span className="mx-2">/</span>
                    <span className="w-6 text-left">{sessionTotal}</span>
                    {currentSentenceHadError && !isTransitioning && (
                      <span className="ml-3 text-red-500/50 animate-in fade-in zoom-in slide-in-from-left-2 duration-300">●</span>
                    )}
                  </div>
                  </div>
                </div>
                
                  {/* Core Quiz */}
                  {/* Background Ambient Glow for high combos */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 z-0
                    ${combo > 1 && !showAnalysis 
                      ? (currentTheme.id === 'mono' ? 'bg-black/5 dark:bg-white/5 animate-pulse' : 'bg-orange-500/10 animate-pulse') 
                      : 'opacity-0 scale-50'
                    }`} 
                  />

                  {/* Review Mode Overlay Hint */}
                  {activeModule?.id === 'module_review' && !showAnalysis && !isTransitioning && currentQuestion?.progress && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className={`px-4 py-1.5 rounded-full border ${currentTheme.secondary} ${currentTheme.cardBg} shadow-sm flex items-center gap-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={currentTheme.accent}><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                        <span className={`text-[10px] font-mono font-medium tracking-widest uppercase ${currentTheme.accent}`}>
                          {currentQuestion.progress.reviewCount === 0 ? "Needs Review" : `Review #${currentQuestion.progress.reviewCount}`}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="w-full flex justify-center relative">
                  <SentenceQuiz 
                    key={`${currentQuestion.id}-${queue.length}-${difficulty}`} 
                    question={currentQuestion} 
                    onComplete={handleSentenceComplete}
                    onMistake={handleMistake}
                    theme={currentTheme}
                    isAnalysisMode={showAnalysis}
                    difficulty={difficulty}
                  />
                </div>
              </div>
            ) : (
              <p className={currentTheme.accent}>Loading...</p>
            )}
          </div>
        )}

      </main>

      {/* Toast Notification */}
      {toast && (
        <div key={toast.id} className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] animate-spring-up pointer-events-none">
          <div className={`px-6 py-3 rounded-full shadow-2xl font-mono text-sm tracking-widest flex items-center gap-3 transition-colors glass-panel border border-white/20
            ${toast.type === 'success' 
              ? `bg-green-500/90 text-white ${currentTheme.id === 'mono' ? 'dark:bg-green-400 dark:text-black' : ''}` 
              : `bg-orange-500/90 border-orange-500/30 text-white ${currentTheme.id === 'mono' ? 'dark:bg-orange-400 dark:text-black' : ''}`}
          `}>
            {toast.type === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            )}
            <span className="font-semibold">{toast.msg}</span>
          </div>
        </div>
      )}

      {/* Full Year Modal Overlay */}
      {showYearModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/40 dark:bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setShowYearModal(false)}>
          <div 
            className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12 shadow-2xl glass-panel border ${currentTheme.secondary} animate-spring-up`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className={`text-3xl font-bold tracking-tight ${currentTheme.text}`}>Activity History</h2>
                <p className={`text-sm mt-2 ${currentTheme.accent}`}>{new Date().getFullYear()} Overview</p>
              </div>
              <button 
                onClick={() => setShowYearModal(false)}
                className={`p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${currentTheme.accent} hover:${currentTheme.text}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {MONTH_NAMES.map((monthName, mIdx) => (
                <div key={monthName} className="flex flex-col">
                  <h4 className={`text-xs font-mono tracking-widest uppercase mb-4 ${currentTheme.accent}`}>{monthName}</h4>
                  <div className="grid grid-cols-7 gap-1.5">
                    {generateMonthMatrix(new Date().getFullYear(), mIdx).map((dayObj, dIdx) => {
                      let intensityClass = 'opacity-10'; 
                      if (dayObj.count > 0 && dayObj.count < 5) intensityClass = 'opacity-40';
                      else if (dayObj.count >= 5 && dayObj.count < 15) intensityClass = 'opacity-70';
                      else if (dayObj.count >= 15) intensityClass = 'opacity-100';

                      return (
                        <div 
                          key={dIdx}
                          title={`${dayObj.date}: ${dayObj.count} sentences`}
                          className={`w-2.5 h-2.5 rounded-[1px] transition-all duration-300
                            ${dayObj.count > 0 
                              ? (currentTheme.id === 'mono' ? 'bg-black dark:bg-white ' + intensityClass : 'bg-green-500 ' + intensityClass)
                              : `bg-transparent border ${currentTheme.secondary}`
                            }
                          `}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
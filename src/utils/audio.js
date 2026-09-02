// Web Audio API context
let audioCtx = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

// 1. Keypress: A very short, soft mechanical click
export const playKeypress = () => {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    // Quick drop in frequency to simulate a 'thwack'
    osc.frequency.setValueAtTime(300, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.02);
    
    // Very low volume, quick fade out
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime); 
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.03);
  } catch (e) {
    console.error("Audio play failed", e);
  }
};

// 2. Error: A low, dull thud/buzz indicating wrong input
export const playError = () => {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'triangle'; // Slightly harsher sound
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  } catch (e) {}
};

// 3. Success: A pleasant, resonant bell-like 'ding' for sentence completion
export const playSuccess = () => {
  try {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine'; // Pure tone
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
    
    // Attack and long release for a bell effect
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 1.2);
  } catch (e) {}
};

import { useCallback, useRef, useEffect } from 'react';

// Voice feedback audio files (Hebrew TTS)
const CORRECT_SOUNDS = [
  '/sounds/correct-1.mp3',  // כל הכבוד
  '/sounds/correct-2.mp3',  // נהדר
  '/sounds/correct-3.mp3',  // יופי
  '/sounds/correct-4.mp3',  // מצוין
];

const WRONG_SOUNDS = [
  '/sounds/wrong-1.mp3',    // טעות, נסה שנית
  '/sounds/wrong-2.mp3',    // לא נכון, נסו שוב
  '/sounds/wrong-3.mp3',    // אופס, נסו עוד פעם
  '/sounds/wrong-4.mp3',    // כמעט, נסו שוב
];

const COMPLETE_SOUNDS = [
  '/sounds/complete-1.mp3', // סיימנו
  '/sounds/complete-2.mp3', // כל הכבוד, סיימת את המשחק
  '/sounds/complete-3.mp3', // מדהים, עשית את זה
];

const ENCOURAGE_SOUNDS = [
  '/sounds/encourage-1.mp3', // בוא ננסה עוד פעם
  '/sounds/encourage-2.mp3', // אפשר לנסות שוב
  '/sounds/encourage-3.mp3', // אל תוותר
];

// Simple sound effects (optional - can be added later)
const SOUNDS = {
  click: '/sounds/click.mp3',
  star: '/sounds/star.mp3',
};

// Helper to get random item from array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function useAudio() {
  const audioRef = useRef(null);
  const instructionAudioRef = useRef(null);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (instructionAudioRef.current) {
        instructionAudioRef.current.pause();
        instructionAudioRef.current = null;
      }
    };
  }, []);

  const playAudioFile = useCallback((soundUrl, volume = 0.7) => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (soundUrl) {
        audioRef.current = new Audio(soundUrl);
        audioRef.current.volume = volume;
        audioRef.current.play().catch(() => {
          // Ignore autoplay errors
        });
      }
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }, []);

  const playSound = useCallback((soundType) => {
    const soundUrl = SOUNDS[soundType];
    if (soundUrl) {
      playAudioFile(soundUrl, 0.5);
    }
  }, [playAudioFile]);

  const playCorrect = useCallback(() => {
    const soundUrl = getRandomItem(CORRECT_SOUNDS);
    playAudioFile(soundUrl, 0.8);
  }, [playAudioFile]);

  const playWrong = useCallback(() => {
    const soundUrl = getRandomItem(WRONG_SOUNDS);
    playAudioFile(soundUrl, 0.8);
  }, [playAudioFile]);

  const playComplete = useCallback(() => {
    const soundUrl = getRandomItem(COMPLETE_SOUNDS);
    playAudioFile(soundUrl, 0.9);
  }, [playAudioFile]);

  const playEncourage = useCallback(() => {
    const soundUrl = getRandomItem(ENCOURAGE_SOUNDS);
    playAudioFile(soundUrl, 0.8);
  }, [playAudioFile]);

  const playClick = useCallback(() => {
    playSound('click');
  }, [playSound]);

  const playStar = useCallback(() => {
    playSound('star');
  }, [playSound]);

  const playInstruction = useCallback((audioUrl) => {
    try {
      if (instructionAudioRef.current) {
        instructionAudioRef.current.pause();
      }
      if (audioUrl) {
        instructionAudioRef.current = new Audio(audioUrl);
        instructionAudioRef.current.volume = 0.8;
        instructionAudioRef.current.play().catch(() => {
          // Ignore autoplay errors
        });
      }
    } catch (error) {
      console.warn('Instruction audio playback failed:', error);
    }
  }, []);

  const stopInstruction = useCallback(() => {
    if (instructionAudioRef.current) {
      instructionAudioRef.current.pause();
      instructionAudioRef.current.currentTime = 0;
    }
  }, []);

  const stopAllAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (instructionAudioRef.current) {
      instructionAudioRef.current.pause();
    }
  }, []);

  return {
    playSound,
    playCorrect,
    playWrong,
    playComplete,
    playEncourage,
    playClick,
    playStar,
    playInstruction,
    stopInstruction,
    stopAllAudio,
  };
}

export default useAudio;

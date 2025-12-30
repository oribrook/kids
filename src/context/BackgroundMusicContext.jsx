import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

const BackgroundMusicContext = createContext();

const BACKGROUND_MUSIC_URL = '/sounds/background-music.mp3';

export function BackgroundMusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(BACKGROUND_MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Low volume for background
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle play/pause based on state
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying && !isMuted && hasUserInteracted) {
      audioRef.current.play().catch(() => {
        // Autoplay blocked - will retry on user interaction
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, isMuted, hasUserInteracted]);

  // Listen for first user interaction to enable audio
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        // Auto-start music on first interaction
        setIsPlaying(true);
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasUserInteracted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const startMusic = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const stopMusic = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return (
    <BackgroundMusicContext.Provider value={{ 
      isPlaying, 
      isMuted, 
      toggleMute, 
      startMusic, 
      stopMusic 
    }}>
      {children}
    </BackgroundMusicContext.Provider>
  );
}

export function useBackgroundMusic() {
  const context = useContext(BackgroundMusicContext);
  if (!context) {
    throw new Error('useBackgroundMusic must be used within BackgroundMusicProvider');
  }
  return context;
}

export default BackgroundMusicContext;

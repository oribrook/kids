import { useBackgroundMusic } from '../../context/BackgroundMusicContext';
import styles from './MusicToggle.module.css';

export function MusicToggle() {
  const { isMuted, toggleMute } = useBackgroundMusic();

  return (
    <button 
      className={styles.musicToggle}
      onClick={toggleMute}
      aria-label={isMuted ? 'הפעל מוזיקה' : 'השתק מוזיקה'}
      title={isMuted ? 'הפעל מוזיקה' : 'השתק מוזיקה'}
    >
      {isMuted ? (
        // Muted icon
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        // Playing icon with sound waves
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
}

export default MusicToggle;

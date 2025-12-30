import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AudioButton.module.css';

function AudioButton({ audioUrl, onPlay, size = 'medium' }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
    if (onPlay) {
      onPlay(audioUrl);
    }
    // Reset after animation
    setTimeout(() => setIsPlaying(false), 1000);
  };

  return (
    <motion.button
      className={`${styles.button} ${styles[size]}`}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.3 }}
    >
      <svg viewBox="0 0 24 24" className={`${styles.icon} ${isPlaying ? styles.playing : ''}`}>
        <path
          fill="currentColor"
          d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
        />
      </svg>
      {isPlaying && (
        <motion.div
          className={styles.ripple}
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.button>
  );
}

export default AudioButton;

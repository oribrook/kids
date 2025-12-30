import { motion } from 'framer-motion';
import styles from './Mascot.module.css';

// Cute fox mascot as inline SVG
function Mascot({ size = 'medium', mood = 'happy', animate = true, className = '' }) {
  const sizeMap = {
    small: 80,
    medium: 150,
    large: 250,
  };

  const actualSize = sizeMap[size] || sizeMap.medium;

  const moodColors = {
    happy: '#FF9500',
    excited: '#FF6B6B',
    thinking: '#4ECDC4',
    sad: '#95A5A6',
  };

  return (
    <motion.div
      className={`${styles.container} ${className}`}
      animate={animate ? { y: [0, -10, 0] } : {}}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        width={actualSize}
        height={actualSize}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ears */}
        <ellipse cx="55" cy="50" rx="30" ry="40" fill={moodColors[mood]} />
        <ellipse cx="55" cy="50" rx="20" ry="28" fill="#FFD9B3" />
        <ellipse cx="145" cy="50" rx="30" ry="40" fill={moodColors[mood]} />
        <ellipse cx="145" cy="50" rx="20" ry="28" fill="#FFD9B3" />

        {/* Head */}
        <circle cx="100" cy="110" r="70" fill={moodColors[mood]} />

        {/* Face white area */}
        <ellipse cx="100" cy="130" rx="45" ry="40" fill="white" />

        {/* Eyes */}
        <ellipse cx="75" cy="100" rx="15" ry="18" fill="white" />
        <ellipse cx="125" cy="100" rx="15" ry="18" fill="white" />
        <circle cx="78" cy="102" r="8" fill="#2D3436" />
        <circle cx="128" cy="102" r="8" fill="#2D3436" />
        <circle cx="80" cy="99" r="3" fill="white" />
        <circle cx="130" cy="99" r="3" fill="white" />

        {/* Nose */}
        <ellipse cx="100" cy="130" rx="12" ry="8" fill="#2D3436" />

        {/* Mouth - changes based on mood */}
        {mood === 'happy' && (
          <path
            d="M85 145 Q100 160 115 145"
            stroke="#2D3436"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        )}
        {mood === 'excited' && (
          <>
            <ellipse cx="100" cy="150" rx="15" ry="12" fill="#2D3436" />
            <ellipse cx="100" cy="148" rx="10" ry="6" fill="#FF6B6B" />
          </>
        )}
        {mood === 'thinking' && (
          <path
            d="M90 148 L110 148"
            stroke="#2D3436"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
        {mood === 'sad' && (
          <path
            d="M85 155 Q100 145 115 155"
            stroke="#2D3436"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* Cheeks */}
        <circle cx="60" cy="125" r="10" fill="#FFB3B3" opacity="0.6" />
        <circle cx="140" cy="125" r="10" fill="#FFB3B3" opacity="0.6" />
      </svg>
    </motion.div>
  );
}

export default Mascot;

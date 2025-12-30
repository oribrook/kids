import { motion } from 'framer-motion';
import { Card } from '../common';
import styles from './SelectionQuestion.module.css';

// Color item icons
const ItemIcons = {
  'apple-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#FF4757" />
      <ellipse cx="50" cy="50" rx="30" ry="32" fill="#FF6B6B" />
      <path d="M 50 18 Q 55 10 65 15" stroke="#7ED321" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="12" rx="10" ry="6" fill="#7ED321" />
    </svg>
  ),
  'apple-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#27AE60" />
      <ellipse cx="50" cy="50" rx="30" ry="32" fill="#2ECC71" />
      <path d="M 50 18 Q 55 10 65 15" stroke="#27AE60" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="12" rx="10" ry="6" fill="#27AE60" />
    </svg>
  ),
  'apple-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#F1C40F" />
      <ellipse cx="50" cy="50" rx="30" ry="32" fill="#FFE66D" />
      <path d="M 50 18 Q 55 10 65 15" stroke="#7ED321" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="12" rx="10" ry="6" fill="#7ED321" />
    </svg>
  ),
  banana: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 20 70 Q 30 20 70 25 Q 85 30 80 45 Q 75 60 50 65 Q 25 70 20 70" fill="#F1C40F" />
      <path d="M 25 65 Q 35 30 68 32 Q 78 35 75 45 Q 70 55 50 60 Q 30 65 25 65" fill="#FFE66D" />
      <ellipse cx="75" cy="30" rx="5" ry="8" fill="#8B7355" />
    </svg>
  ),
  strawberry: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 15 L 30 30 Q 20 50 25 70 Q 35 90 50 95 Q 65 90 75 70 Q 80 50 70 30 Z" fill="#FF4757" />
      <path d="M 50 15 L 35 28 Q 25 48 30 68 Q 40 85 50 88 Q 55 75 50 50 Q 48 30 50 15" fill="#FF6B6B" />
      <ellipse cx="50" cy="12" rx="15" ry="8" fill="#7ED321" />
      <circle cx="35" cy="45" r="3" fill="#FFE66D" />
      <circle cx="50" cy="55" r="3" fill="#FFE66D" />
      <circle cx="65" cy="50" r="3" fill="#FFE66D" />
      <circle cx="45" cy="70" r="3" fill="#FFE66D" />
      <circle cx="58" cy="72" r="3" fill="#FFE66D" />
    </svg>
  ),
  grapes: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="40" cy="40" r="12" fill="#9B59B6" />
      <circle cx="60" cy="40" r="12" fill="#9B59B6" />
      <circle cx="30" cy="55" r="12" fill="#8E44AD" />
      <circle cx="50" cy="55" r="12" fill="#9B59B6" />
      <circle cx="70" cy="55" r="12" fill="#8E44AD" />
      <circle cx="40" cy="70" r="12" fill="#9B59B6" />
      <circle cx="60" cy="70" r="12" fill="#9B59B6" />
      <circle cx="50" cy="85" r="10" fill="#8E44AD" />
      <path d="M 50 20 Q 50 10 60 12" stroke="#7ED321" strokeWidth="3" fill="none" />
      <ellipse cx="58" cy="10" rx="8" ry="5" fill="#7ED321" />
    </svg>
  ),
  orange: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="55" r="38" fill="#FF9500" />
      <circle cx="50" cy="50" r="32" fill="#FFA726" />
      <ellipse cx="50" cy="18" rx="6" ry="4" fill="#7ED321" />
    </svg>
  ),
  'ball-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#FF4757" />
      <circle cx="50" cy="50" r="35" fill="#FF6B6B" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-blue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#2980B9" />
      <circle cx="50" cy="50" r="35" fill="#3498DB" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#27AE60" />
      <circle cx="50" cy="50" r="35" fill="#2ECC71" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#F1C40F" />
      <circle cx="50" cy="50" r="35" fill="#FFE66D" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'flower-pink': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FD79A8" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#FD79A8" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#FD79A8" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#FD79A8" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#FD79A8" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FFE66D" />
    </svg>
  ),
  'flower-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FFE66D" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#FFE66D" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#FFE66D" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#FFE66D" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#FFE66D" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FF9500" />
    </svg>
  ),
  'flower-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FF6B6B" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#FF6B6B" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#FF6B6B" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#FF6B6B" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#FF6B6B" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FFE66D" />
    </svg>
  ),
  'flower-purple': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#A29BFE" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#A29BFE" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#A29BFE" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#A29BFE" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#A29BFE" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FFE66D" />
    </svg>
  ),
  sun: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="25" fill="#FFE66D" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={50 + 30 * Math.cos(angle * Math.PI / 180)}
          y1={50 + 30 * Math.sin(angle * Math.PI / 180)}
          x2={50 + 45 * Math.cos(angle * Math.PI / 180)}
          y2={50 + 45 * Math.sin(angle * Math.PI / 180)}
          stroke="#FFE66D"
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  ),
  tree: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="42" y="65" width="16" height="30" fill="#8B4513" />
      <ellipse cx="50" cy="40" rx="35" ry="35" fill="#27AE60" />
      <ellipse cx="35" cy="35" rx="8" ry="8" fill="#2ECC71" />
      <ellipse cx="65" cy="38" rx="10" ry="10" fill="#2ECC71" />
      <ellipse cx="50" cy="25" rx="12" ry="12" fill="#2ECC71" />
    </svg>
  ),
  heart: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 85 C 20 55 10 35 25 20 C 40 10 50 25 50 35 C 50 25 60 10 75 20 C 90 35 80 55 50 85" fill="#FF6B6B" />
      <ellipse cx="35" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  cloud: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="35" cy="55" rx="25" ry="20" fill="white" stroke="#E0E0E0" strokeWidth="2" />
      <ellipse cx="60" cy="50" rx="30" ry="25" fill="white" stroke="#E0E0E0" strokeWidth="2" />
      <ellipse cx="75" cy="60" rx="20" ry="15" fill="white" stroke="#E0E0E0" strokeWidth="2" />
    </svg>
  ),
  // Shape icons for pattern and logic games
  'circle-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#E74C3C" />
      <circle cx="50" cy="50" r="32" fill="#EC7063" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-blue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#2980B9" />
      <circle cx="50" cy="50" r="32" fill="#3498DB" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#27AE60" />
      <circle cx="50" cy="50" r="32" fill="#2ECC71" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#F1C40F" />
      <circle cx="50" cy="50" r="32" fill="#F4D03F" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'square-blue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#2980B9" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#3498DB" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'square-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#27AE60" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#2ECC71" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'square-black': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#2D3436" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#636E72" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  ),
  'triangle-orange': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon points="50,10 90,85 10,85" fill="#E67E22" />
      <polygon points="50,22 80,78 20,78" fill="#F39C12" />
      <polygon points="35,35 50,35 42,50" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'star-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#F1C40F"
      />
      <polygon
        points="50,15 58,40 85,40 64,56 72,82 50,68 28,82 36,56 15,40 42,40"
        fill="#F4D03F"
      />
    </svg>
  ),
  'heart-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 88 C 20 58 5 38 22 20 C 38 5 50 22 50 32 C 50 22 62 5 78 20 C 95 38 80 58 50 88" fill="#E74C3C" />
      <path d="M 50 78 C 28 55 18 40 30 28 C 40 18 50 30 50 38" fill="#EC7063" />
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  // Match pairs game icons
  bone: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="20" cy="25" rx="12" ry="10" fill="#F5DEB3" />
      <ellipse cx="20" cy="75" rx="12" ry="10" fill="#F5DEB3" />
      <ellipse cx="80" cy="25" rx="12" ry="10" fill="#F5DEB3" />
      <ellipse cx="80" cy="75" rx="12" ry="10" fill="#F5DEB3" />
      <rect x="15" y="35" width="70" height="30" rx="10" fill="#F5DEB3" />
      <rect x="20" y="40" width="60" height="20" rx="8" fill="#FFF8DC" />
    </svg>
  ),
  carrot: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon points="50,95 30,30 70,30" fill="#E67E22" />
      <polygon points="50,85 35,35 65,35" fill="#F39C12" />
      <ellipse cx="45" cy="20" rx="5" ry="15" fill="#27AE60" />
      <ellipse cx="50" cy="18" rx="5" ry="18" fill="#2ECC71" />
      <ellipse cx="55" cy="20" rx="5" ry="15" fill="#27AE60" />
    </svg>
  ),
  cheese: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon points="10,80 90,80 90,40 50,20" fill="#F1C40F" />
      <polygon points="10,80 50,20 50,80" fill="#F4D03F" />
      <circle cx="30" cy="60" r="8" fill="#E67E22" />
      <circle cx="60" cy="55" r="6" fill="#E67E22" />
      <circle cx="75" cy="70" r="5" fill="#E67E22" />
      <circle cx="45" cy="75" r="4" fill="#E67E22" />
    </svg>
  ),
  'fish-food': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="50" rx="35" ry="25" fill="#3498DB" />
      <polygon points="85,50 100,35 100,65" fill="#3498DB" />
      <circle cx="30" cy="45" r="5" fill="#2D3436" />
      <circle cx="32" cy="43" r="2" fill="white" />
      <path d="M 35 55 Q 45 60 55 55" stroke="#2D3436" strokeWidth="2" fill="none" />
      <ellipse cx="50" cy="35" rx="8" ry="3" fill="#2980B9" />
    </svg>
  ),
  nest: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="70" rx="40" ry="20" fill="#8B4513" />
      <ellipse cx="50" cy="65" rx="35" ry="15" fill="#A0522D" />
      <ellipse cx="50" cy="60" rx="28" ry="12" fill="#D2691E" />
      <ellipse cx="40" cy="50" rx="10" ry="12" fill="#F5F5DC" />
      <ellipse cx="55" cy="48" rx="10" ry="12" fill="#FFFAF0" />
      <ellipse cx="48" cy="45" rx="10" ry="12" fill="#FFF8DC" />
    </svg>
  ),
  doghouse: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="15" y="45" width="70" height="50" fill="#8B4513" />
      <polygon points="50,15 10,50 90,50" fill="#A0522D" />
      <ellipse cx="50" cy="75" rx="15" ry="18" fill="#2D3436" />
      <rect x="20" y="50" width="60" height="40" fill="#D2691E" />
    </svg>
  ),
  fishbowl: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="38" ry="35" fill="#87CEEB" stroke="#B0C4DE" strokeWidth="3" />
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#B0E0E6" />
      <ellipse cx="40" cy="60" rx="12" ry="8" fill="#FF6B6B" />
      <polygon points="52,60 62,55 62,65" fill="#FF6B6B" />
      <circle cx="35" cy="57" r="3" fill="#2D3436" />
    </svg>
  ),
  cave: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="85" rx="45" ry="15" fill="#696969" />
      <path d="M 10 85 Q 10 30 50 20 Q 90 30 90 85" fill="#808080" />
      <ellipse cx="50" cy="75" rx="25" ry="20" fill="#2D3436" />
      <ellipse cx="50" cy="80" rx="20" ry="15" fill="#1a1a1a" />
    </svg>
  ),
  water: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="50" rx="40" ry="40" fill="#3498DB" />
      <ellipse cx="50" cy="45" rx="35" ry="35" fill="#5DADE2" />
      <path d="M 25 40 Q 35 35 45 40 Q 55 45 65 40" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M 30 55 Q 40 50 50 55 Q 60 60 70 55" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
    </svg>
  ),
  house: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="20" y="45" width="60" height="50" fill="#E74C3C" />
      <polygon points="50,10 10,50 90,50" fill="#C0392B" />
      <rect x="40" y="60" width="20" height="35" fill="#8B4513" />
      <rect x="25" y="55" width="15" height="15" fill="#87CEEB" />
      <rect x="60" y="55" width="15" height="15" fill="#87CEEB" />
      <circle cx="55" cy="78" r="2" fill="#F1C40F" />
    </svg>
  ),
};

function SelectionQuestion({ question, selectedAnswer, showFeedback, isCorrect, onAnswer }) {
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          const isThisCorrect = option.isCorrect;
          const ItemIcon = ItemIcons[option.image];

          let cardState = null;
          if (showFeedback && isSelected) {
            cardState = isThisCorrect;
          }

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                size="xlarge"
                selected={isSelected && !showFeedback}
                correct={cardState}
                onClick={() => onAnswer(option.id)}
                disabled={showFeedback}
              >
                {ItemIcon ? (
                  <ItemIcon />
                ) : (
                  <span className={styles.placeholder}>{option.label}</span>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectionQuestion;

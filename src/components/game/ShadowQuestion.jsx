import { motion } from 'framer-motion';
import { Card } from '../common';
import styles from './ShadowQuestion.module.css';

// Main colorful images
const MainImages = {
  'cat-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="60" rx="28" ry="24" fill="#636E72" />
      <circle cx="50" cy="38" r="24" fill="#636E72" />
      <polygon points="25,25 30,50 40,35" fill="#636E72" />
      <polygon points="75,25 70,50 60,35" fill="#636E72" />
      <polygon points="28,28 32,45 38,35" fill="#FD79A8" />
      <polygon points="72,28 68,45 62,35" fill="#FD79A8" />
      <ellipse cx="40" cy="35" rx="6" ry="8" fill="#74B9FF" />
      <ellipse cx="60" cy="35" rx="6" ry="8" fill="#74B9FF" />
      <ellipse cx="40" cy="37" rx="2" ry="5" fill="#2D3436" />
      <ellipse cx="60" cy="37" rx="2" ry="5" fill="#2D3436" />
      <ellipse cx="50" cy="48" rx="5" ry="3" fill="#FD79A8" />
    </svg>
  ),
  'elephant-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="30" fill="#95A5A6" />
      <circle cx="50" cy="35" r="28" fill="#95A5A6" />
      <ellipse cx="20" cy="35" rx="15" ry="20" fill="#95A5A6" />
      <ellipse cx="80" cy="35" rx="15" ry="20" fill="#95A5A6" />
      <ellipse cx="20" cy="35" rx="10" ry="14" fill="#BDC3C7" />
      <ellipse cx="80" cy="35" rx="10" ry="14" fill="#BDC3C7" />
      <path d="M 50 50 Q 45 70 40 85" stroke="#95A5A6" strokeWidth="12" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="32" r="5" fill="white" />
      <circle cx="60" cy="32" r="5" fill="white" />
      <circle cx="42" cy="33" r="3" fill="#2D3436" />
      <circle cx="62" cy="33" r="3" fill="#2D3436" />
    </svg>
  ),
  'star-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#FFE66D"
        stroke="#F5D85E"
        strokeWidth="2"
      />
    </svg>
  ),
  'car-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <rect x="10" y="45" width="80" height="30" rx="8" fill="#FF6B6B" />
      <path d="M 25 45 L 35 25 L 65 25 L 75 45" fill="#FF6B6B" />
      <rect x="38" y="28" width="24" height="15" rx="2" fill="#74B9FF" />
      <circle cx="28" cy="75" r="10" fill="#2D3436" />
      <circle cx="72" cy="75" r="10" fill="#2D3436" />
      <circle cx="28" cy="75" r="5" fill="#95A5A6" />
      <circle cx="72" cy="75" r="5" fill="#95A5A6" />
    </svg>
  ),
  'flower-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <rect x="46" y="60" width="8" height="35" fill="#27AE60" />
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FD79A8" />
      <ellipse cx="75" cy="40" rx="15" ry="18" fill="#FD79A8" transform="rotate(72 75 40)" />
      <ellipse cx="68" cy="65" rx="15" ry="18" fill="#FD79A8" transform="rotate(144 68 65)" />
      <ellipse cx="32" cy="65" rx="15" ry="18" fill="#FD79A8" transform="rotate(-144 32 65)" />
      <ellipse cx="25" cy="40" rx="15" ry="18" fill="#FD79A8" transform="rotate(-72 25 40)" />
      <circle cx="50" cy="45" r="12" fill="#FFE66D" />
    </svg>
  ),
};

// Shadow silhouettes
const ShadowImages = {
  'shadow-cat': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="28" ry="24" fill="#2D3436" />
      <circle cx="50" cy="38" r="24" fill="#2D3436" />
      <polygon points="25,25 30,50 40,35" fill="#2D3436" />
      <polygon points="75,25 70,50 60,35" fill="#2D3436" />
    </svg>
  ),
  'shadow-dog': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="30" ry="25" fill="#2D3436" />
      <circle cx="50" cy="35" r="25" fill="#2D3436" />
      <ellipse cx="25" cy="20" rx="12" ry="18" fill="#2D3436" />
      <ellipse cx="75" cy="20" rx="12" ry="18" fill="#2D3436" />
    </svg>
  ),
  'shadow-rabbit': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="65" rx="25" ry="22" fill="#2D3436" />
      <circle cx="50" cy="45" r="20" fill="#2D3436" />
      <ellipse cx="38" cy="15" rx="8" ry="25" fill="#2D3436" />
      <ellipse cx="62" cy="15" rx="8" ry="25" fill="#2D3436" />
    </svg>
  ),
  'shadow-elephant': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="30" fill="#2D3436" />
      <circle cx="50" cy="35" r="28" fill="#2D3436" />
      <ellipse cx="20" cy="35" rx="15" ry="20" fill="#2D3436" />
      <ellipse cx="80" cy="35" rx="15" ry="20" fill="#2D3436" />
      <path d="M 50 50 Q 45 70 40 85" stroke="#2D3436" strokeWidth="12" fill="none" strokeLinecap="round" />
    </svg>
  ),
  'shadow-giraffe': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="80" rx="20" ry="15" fill="#2D3436" />
      <rect x="45" y="30" width="10" height="50" fill="#2D3436" />
      <circle cx="50" cy="20" r="15" fill="#2D3436" />
      <ellipse cx="35" cy="10" rx="5" ry="10" fill="#2D3436" />
      <ellipse cx="65" cy="10" rx="5" ry="10" fill="#2D3436" />
    </svg>
  ),
  'shadow-lion': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <circle cx="50" cy="50" r="35" fill="#2D3436" />
      <circle cx="50" cy="50" r="25" fill="#2D3436" />
      <ellipse cx="50" cy="80" rx="15" ry="12" fill="#2D3436" />
    </svg>
  ),
  'shadow-star': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#2D3436"
      />
    </svg>
  ),
  'shadow-circle': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <circle cx="50" cy="50" r="40" fill="#2D3436" />
    </svg>
  ),
  'shadow-heart': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <path d="M 50 85 C 20 55 10 35 25 20 C 40 10 50 25 50 35 C 50 25 60 10 75 20 C 90 35 80 55 50 85" fill="#2D3436" />
    </svg>
  ),
  'shadow-car': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="10" y="45" width="80" height="30" rx="8" fill="#2D3436" />
      <path d="M 25 45 L 35 25 L 65 25 L 75 45" fill="#2D3436" />
      <circle cx="28" cy="75" r="10" fill="#2D3436" />
      <circle cx="72" cy="75" r="10" fill="#2D3436" />
    </svg>
  ),
  'shadow-plane': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="50" rx="40" ry="10" fill="#2D3436" />
      <polygon points="50,20 60,50 50,45 40,50" fill="#2D3436" />
      <polygon points="50,80 60,50 50,55 40,50" fill="#2D3436" />
    </svg>
  ),
  'shadow-boat': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <path d="M 15 60 L 25 80 L 75 80 L 85 60 Z" fill="#2D3436" />
      <rect x="45" y="30" width="10" height="30" fill="#2D3436" />
      <polygon points="55,30 55,55 80,55" fill="#2D3436" />
    </svg>
  ),
  'shadow-flower': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="46" y="60" width="8" height="35" fill="#2D3436" />
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#2D3436" />
      <ellipse cx="75" cy="40" rx="15" ry="18" fill="#2D3436" transform="rotate(72 75 40)" />
      <ellipse cx="68" cy="65" rx="15" ry="18" fill="#2D3436" transform="rotate(144 68 65)" />
      <ellipse cx="32" cy="65" rx="15" ry="18" fill="#2D3436" transform="rotate(-144 32 65)" />
      <ellipse cx="25" cy="40" rx="15" ry="18" fill="#2D3436" transform="rotate(-72 25 40)" />
      <circle cx="50" cy="45" r="12" fill="#2D3436" />
    </svg>
  ),
  'shadow-tree': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="42" y="65" width="16" height="30" fill="#2D3436" />
      <ellipse cx="50" cy="40" rx="35" ry="35" fill="#2D3436" />
    </svg>
  ),
  'shadow-leaf': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <path d="M 50 10 Q 80 30 80 60 Q 80 90 50 90 Q 20 90 20 60 Q 20 30 50 10" fill="#2D3436" />
      <path d="M 50 90 L 50 50" stroke="#636E72" strokeWidth="3" />
    </svg>
  ),
};

function ShadowQuestion({ question, selectedAnswer, showFeedback, isCorrect, onAnswer }) {
  const MainImage = MainImages[question.mainImage];

  return (
    <div className={styles.container}>
      {/* Main colored image */}
      <motion.div
        className={styles.mainImageWrapper}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {MainImage && <MainImage />}
      </motion.div>

      {/* Shadow options */}
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          const isThisCorrect = option.isCorrect;
          const ShadowImage = ShadowImages[option.image];

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
                size="large"
                selected={isSelected && !showFeedback}
                correct={cardState}
                onClick={() => onAnswer(option.id)}
                disabled={showFeedback}
              >
                {ShadowImage && <ShadowImage />}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ShadowQuestion;

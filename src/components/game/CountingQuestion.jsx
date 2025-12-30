import { motion } from 'framer-motion';
import { Card } from '../common';
import styles from './CountingQuestion.module.css';

// Animal and Shape SVG components
const AnimalIcons = {
  fish: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <ellipse cx="50" cy="50" rx="35" ry="25" fill="#4ECDC4" />
      <polygon points="85,50 100,35 100,65" fill="#4ECDC4" />
      <circle cx="30" cy="45" r="5" fill="#2D3436" />
      <circle cx="32" cy="43" r="2" fill="white" />
      <path d="M 35 55 Q 45 60 55 55" stroke="#2D3436" strokeWidth="2" fill="none" />
      <ellipse cx="50" cy="35" rx="8" ry="3" fill="#3DBDB4" />
    </svg>
  ),
  butterfly: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <ellipse cx="30" cy="35" rx="20" ry="25" fill="#FD79A8" />
      <ellipse cx="70" cy="35" rx="20" ry="25" fill="#FD79A8" />
      <ellipse cx="30" cy="70" rx="15" ry="20" fill="#A29BFE" />
      <ellipse cx="70" cy="70" rx="15" ry="20" fill="#A29BFE" />
      <ellipse cx="50" cy="50" rx="8" ry="30" fill="#2D3436" />
      <circle cx="50" cy="20" r="6" fill="#2D3436" />
      <line x1="45" y1="15" x2="40" y2="5" stroke="#2D3436" strokeWidth="2" />
      <line x1="55" y1="15" x2="60" y2="5" stroke="#2D3436" strokeWidth="2" />
    </svg>
  ),
  bird: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <ellipse cx="50" cy="55" rx="30" ry="25" fill="#FFE66D" />
      <circle cx="50" cy="35" r="20" fill="#FFE66D" />
      <polygon points="30,35 15,40 30,45" fill="#FF9500" />
      <circle cx="42" cy="32" r="4" fill="#2D3436" />
      <circle cx="43" cy="31" r="1.5" fill="white" />
      <ellipse cx="75" cy="55" rx="15" ry="8" fill="#F5D85E" />
      <ellipse cx="40" cy="75" rx="5" ry="10" fill="#FF9500" />
      <ellipse cx="50" cy="75" rx="5" ry="10" fill="#FF9500" />
      <ellipse cx="60" cy="75" rx="5" ry="10" fill="#FF9500" />
    </svg>
  ),
  dog: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <ellipse cx="50" cy="60" rx="30" ry="25" fill="#D4A574" />
      <circle cx="50" cy="35" r="25" fill="#D4A574" />
      <ellipse cx="25" cy="20" rx="12" ry="18" fill="#B8956B" />
      <ellipse cx="75" cy="20" rx="12" ry="18" fill="#B8956B" />
      <circle cx="40" cy="32" r="5" fill="#2D3436" />
      <circle cx="60" cy="32" r="5" fill="#2D3436" />
      <circle cx="42" cy="30" r="2" fill="white" />
      <circle cx="62" cy="30" r="2" fill="white" />
      <ellipse cx="50" cy="45" rx="8" ry="6" fill="#2D3436" />
      <path d="M 42 52 Q 50 58 58 52" stroke="#2D3436" strokeWidth="2" fill="none" />
    </svg>
  ),
  cat: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
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
      <line x1="20" y1="40" x2="35" y2="45" stroke="#2D3436" strokeWidth="1.5" />
      <line x1="20" y1="48" x2="35" y2="48" stroke="#2D3436" strokeWidth="1.5" />
      <line x1="80" y1="40" x2="65" y2="45" stroke="#2D3436" strokeWidth="1.5" />
      <line x1="80" y1="48" x2="65" y2="48" stroke="#2D3436" strokeWidth="1.5" />
    </svg>
  ),
  // Shape icons for counting shapes game
  circle: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <circle cx="50" cy="50" r="40" fill="#3498DB" />
      <circle cx="50" cy="50" r="32" fill="#5DADE2" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  square: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#E74C3C" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#EC7063" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  triangle: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <polygon points="50,10 90,85 10,85" fill="#F39C12" />
      <polygon points="50,22 80,78 20,78" fill="#F5B041" />
      <polygon points="35,35 50,35 42,50" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  star: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#9B59B6"
      />
      <polygon
        points="50,15 58,40 85,40 64,56 72,82 50,68 28,82 36,56 15,40 42,40"
        fill="#A569BD"
      />
    </svg>
  ),
  heart: () => (
    <svg viewBox="0 0 100 100" className={styles.animalSvg}>
      <path d="M 50 88 C 20 58 5 38 22 20 C 38 5 50 22 50 32 C 50 22 62 5 78 20 C 95 38 80 58 50 88" fill="#E91E63" />
      <path d="M 50 78 C 28 55 18 40 30 28 C 40 18 50 30 50 38" fill="#F06292" />
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
};

function CountingQuestion({ question, selectedAnswer, showFeedback, isCorrect, onAnswer }) {
  const AnimalIcon = AnimalIcons[question.image] || AnimalIcons.fish;

  // Generate animal positions for visual display
  const generateAnimalPositions = (count) => {
    const positions = [];
    const cols = Math.min(count, 3);
    const rows = Math.ceil(count / cols);

    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      positions.push({
        x: (col + 0.5) / cols,
        y: (row + 0.5) / rows,
        delay: i * 0.1,
      });
    }
    return positions;
  };

  const animalPositions = generateAnimalPositions(question.imageCount);

  return (
    <div className={styles.container}>
      {/* Animals display */}
      <div className={styles.animalsArea}>
        {animalPositions.map((pos, index) => (
          <motion.div
            key={index}
            className={styles.animalWrapper}
            style={{
              left: `${pos.x * 100}%`,
              top: `${pos.y * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: pos.delay, type: 'spring', stiffness: 300 }}
          >
            <AnimalIcon />
          </motion.div>
        ))}
      </div>

      {/* Number options */}
      <div className={styles.options}>
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isThisCorrect = option.value === question.correctAnswer;

          let cardState = null;
          if (showFeedback && isSelected) {
            cardState = isThisCorrect;
          }

          return (
            <Card
              key={option.id}
              size="large"
              selected={isSelected && !showFeedback}
              correct={cardState}
              onClick={() => onAnswer(option.id, option.value)}
              disabled={showFeedback}
            >
              <span className={styles.numberOption}>{option.display}</span>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default CountingQuestion;

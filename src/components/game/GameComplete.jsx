import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mascot, Button } from '../common';
import styles from './GameComplete.module.css';

function GameComplete({ score, maxScore, stars, onPlayAgain, onGoHome, onComplete }) {
  useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  const percentage = Math.round((score / maxScore) * 100);

  const getMessageByStars = () => {
    switch (stars) {
      case 3:
        return 'מדהים! אתם אלופים! 🏆';
      case 2:
        return 'יופי! עבודה נהדרת! 👏';
      case 1:
        return 'כל הכבוד! המשיכו להתאמן! 💪';
      default:
        return 'נסו שוב! אתם יכולים! 🌟';
    }
  };

  const getMascotMood = () => {
    if (stars >= 2) return 'excited';
    if (stars === 1) return 'happy';
    return 'thinking';
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Confetti */}
      {stars >= 2 && (
        <div className={styles.confetti}>
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className={styles.confettiPiece}
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A29BFE', '#FD79A8'][Math.floor(Math.random() * 5)],
              }}
              initial={{ y: -20, opacity: 1 }}
              animate={{
                y: '100vh',
                rotate: Math.random() * 720,
                opacity: 0,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      <div className={styles.content}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
        >
          <Mascot size="large" mood={getMascotMood()} />
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          סיימתם! 🎉
        </motion.h1>

        {/* Stars */}
        <motion.div
          className={styles.stars}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring' }}
        >
          {[1, 2, 3].map((star) => (
            <motion.span
              key={star}
              className={`${styles.star} ${star <= stars ? styles.earned : styles.empty}`}
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.7 + star * 0.1 }}
            >
              ⭐
            </motion.span>
          ))}
        </motion.div>

        {/* Score */}
        <motion.div
          className={styles.scoreBox}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span className={styles.scoreLabel}>הניקוד שלכם</span>
          <span className={styles.scoreValue}>{score}</span>
          <span className={styles.scoreMax}>מתוך {maxScore}</span>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.p
          className={styles.message}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {getMessageByStars()}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className={styles.buttons}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Button onClick={onPlayAgain} variant="primary" size="large" icon="🔄">
            שחקו שוב
          </Button>
          <Button onClick={onGoHome} variant="secondary" size="large" icon="📋">
            חזרה לתפריט
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default GameComplete;

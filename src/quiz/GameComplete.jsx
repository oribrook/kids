import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mascot, Button } from '../components/common';
import styles from './GameComplete.module.css';

const CONFETTI_COLORS = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A29BFE', '#FD79A8'];

function makeConfetti() {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    rotate: Math.random() * 720,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 0.5,
  }));
}

function GameComplete({ score, maxScore, stars, onPlayAgain, onHome }) {
  const [confetti] = useState(makeConfetti);
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
          {confetti.map((piece) => (
            <motion.div
              key={piece.id}
              className={styles.confettiPiece}
              style={{
                left: `${piece.left}%`,
                backgroundColor: piece.color,
              }}
              initial={{ y: -20, opacity: 1 }}
              animate={{
                y: '100vh',
                rotate: piece.rotate,
                opacity: 0,
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
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

        {/* Message */}
        <motion.p
          className={styles.message}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {getMessageByStars()}
        </motion.p>

        {/* Buttons - right after the stars for easy access */}
        <motion.div
          className={styles.buttons}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button onClick={onPlayAgain} variant="primary" size="xlarge" icon="🔄">
            שחקו שוב
          </Button>
          {onHome && (
            <Button onClick={onHome} variant="secondary" size="xlarge" icon="🏠">
              הביתה
            </Button>
          )}
        </motion.div>

        {/* Score */}
        <motion.div
          className={styles.scoreBox}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <span className={styles.scoreLabel}>הניקוד שלכם</span>
          <span className={styles.scoreValue}>{score}</span>
          <span className={styles.scoreMax}>מתוך {maxScore}</span>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default GameComplete;

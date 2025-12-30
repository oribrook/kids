import { motion, AnimatePresence } from 'framer-motion';
import styles from './ScoreDisplay.module.css';

function ScoreDisplay({ score, multiplier = 1, showMultiplier = true }) {
  return (
    <div className={styles.container}>
      <div className={styles.scoreBox}>
        <span className={styles.star}>⭐</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={score}
            className={styles.score}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {score}
          </motion.span>
        </AnimatePresence>
      </div>
      {showMultiplier && multiplier > 1 && (
        <motion.div
          className={styles.multiplier}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        >
          x{multiplier}
        </motion.div>
      )}
    </div>
  );
}

export default ScoreDisplay;

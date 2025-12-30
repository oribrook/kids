import { motion } from 'framer-motion';
import { Mascot, Button } from '../common';
import styles from './WelcomeScreen.module.css';

function WelcomeScreen({ onNext }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.content}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Mascot size="large" mood="excited" />
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          שלום! 👋
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          ברוכים הבאים למשחקי לימוד!
        </motion.p>

        <motion.div
          className={styles.features}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🔢</span>
            <span>ספירה</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎨</span>
            <span>צבעים</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🧩</span>
            <span>חשיבה</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            onClick={onNext}
            variant="primary"
            size="xlarge"
            icon="🚀"
          >
            בואו נתחיל!
          </Button>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className={styles.decorations}>
        <motion.div
          className={`${styles.decoration} ${styles.star1}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          ⭐
        </motion.div>
        <motion.div
          className={`${styles.decoration} ${styles.star2}`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌟
        </motion.div>
        <motion.div
          className={`${styles.decoration} ${styles.heart}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          💖
        </motion.div>
        <motion.div
          className={`${styles.decoration} ${styles.rainbow}`}
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌈
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WelcomeScreen;

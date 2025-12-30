import { motion } from 'framer-motion';
import { Mascot, Button } from '../common';
import styles from './AgeSelector.module.css';

const ages = [
  { value: 3, label: '3', emoji: '👶' },
  { value: 4, label: '4', emoji: '🧒' },
  { value: 5, label: '5', emoji: '👦' },
];

function AgeSelector({ onSelect, selectedAge }) {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className={styles.content}>
        <Mascot size="medium" mood="thinking" />

        <motion.h2
          className={styles.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          בני כמה אתם? 🎂
        </motion.h2>

        <motion.div
          className={styles.ageButtons}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {ages.map((age, index) => (
            <motion.button
              key={age.value}
              className={`${styles.ageButton} ${selectedAge === age.value ? styles.selected : ''}`}
              onClick={() => onSelect(age.value)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <span className={styles.emoji}>{age.emoji}</span>
              <span className={styles.ageLabel}>{age.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className={styles.progress}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={`${styles.dot} ${styles.active}`}></div>
      </div>
    </motion.div>
  );
}

export default AgeSelector;

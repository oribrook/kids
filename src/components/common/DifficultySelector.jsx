import { motion } from 'framer-motion';
import { useUser, DIFFICULTY_INFO } from '../../context/UserContext';
import styles from './DifficultySelector.module.css';

function DifficultySelector() {
  const { currentDifficulty, setDifficulty, availableDifficulties } = useUser();

  const handleSelect = (difficulty) => {
    if (availableDifficulties.includes(difficulty)) {
      setDifficulty(difficulty);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        {Object.entries(DIFFICULTY_INFO).map(([key, info]) => {
          const isAvailable = availableDifficulties.includes(key);
          const isSelected = currentDifficulty === key;

          return (
            <motion.button
              key={key}
              className={`${styles.option} ${isSelected ? styles.selected : ''} ${!isAvailable ? styles.locked : ''}`}
              onClick={() => handleSelect(key)}
              disabled={!isAvailable}
              whileHover={isAvailable ? { scale: 1.05 } : {}}
              whileTap={isAvailable ? { scale: 0.95 } : {}}
              style={{
                '--difficulty-color': info.color,
              }}
            >
              <span className={styles.icon}>{isAvailable ? info.icon : '🔒'}</span>
              <span className={styles.label}>{info.label}</span>
              {isSelected && (
                <motion.div
                  className={styles.indicator}
                  layoutId="difficultyIndicator"
                  style={{ backgroundColor: info.color }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export default DifficultySelector;

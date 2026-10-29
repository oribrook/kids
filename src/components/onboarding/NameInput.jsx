import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mascot, Button } from '../common';
import styles from './NameInput.module.css';

function NameInput({ onNext, onSkip }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    onNext(name.trim() || 'חבר');
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className={styles.content}>
        <Mascot size="medium" mood="happy" />

        <motion.h2
          className={styles.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          מה השם שלך? 😊
        </motion.h2>

        <motion.div
          className={styles.inputWrapper}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <input
            type="text"
            className={styles.input}
            placeholder="הקלידו את השם שלכם"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            autoFocus
          />
        </motion.div>

        <motion.div
          className={styles.buttons}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button onClick={handleSubmit} variant="primary" size="large">
            המשך
          </Button>
          <Button onClick={() => onSkip()} variant="ghost" size="large">
            דלג
          </Button>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className={styles.progress}>
        <div className={styles.dot}></div>
        <div className={`${styles.dot} ${styles.active}`}></div>
        <div className={styles.dot}></div>
      </div>
    </motion.div>
  );
}

export default NameInput;

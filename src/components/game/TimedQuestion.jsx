import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../common';
import styles from './TimedQuestion.module.css';

// Number SVG icons with colorful, kid-friendly design
const NumberIcons = {
  3: () => (
    <svg viewBox="0 0 80 100" className={styles.numberSvg}>
      <text x="40" y="75" textAnchor="middle" fontSize="70" fontWeight="bold" fill="#9B59B6" stroke="#8E44AD" strokeWidth="2" fontFamily="Comic Sans MS, cursive">3</text>
    </svg>
  ),
  4: () => (
    <svg viewBox="0 0 80 100" className={styles.numberSvg}>
      <text x="40" y="75" textAnchor="middle" fontSize="70" fontWeight="bold" fill="#3498DB" stroke="#2980B9" strokeWidth="2" fontFamily="Comic Sans MS, cursive">4</text>
    </svg>
  ),
  5: () => (
    <svg viewBox="0 0 80 100" className={styles.numberSvg}>
      <text x="40" y="75" textAnchor="middle" fontSize="70" fontWeight="bold" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" fontFamily="Comic Sans MS, cursive">5</text>
    </svg>
  ),
  6: () => (
    <svg viewBox="0 0 80 100" className={styles.numberSvg}>
      <text x="40" y="75" textAnchor="middle" fontSize="70" fontWeight="bold" fill="#27AE60" stroke="#1E8449" strokeWidth="2" fontFamily="Comic Sans MS, cursive">6</text>
    </svg>
  ),
  7: () => (
    <svg viewBox="0 0 80 100" className={styles.numberSvg}>
      <text x="40" y="75" textAnchor="middle" fontSize="70" fontWeight="bold" fill="#F39C12" stroke="#D68910" strokeWidth="2" fontFamily="Comic Sans MS, cursive">7</text>
    </svg>
  ),
  8: () => (
    <svg viewBox="0 0 80 100" className={styles.numberSvg}>
      <text x="40" y="75" textAnchor="middle" fontSize="70" fontWeight="bold" fill="#E91E63" stroke="#C2185B" strokeWidth="2" fontFamily="Comic Sans MS, cursive">8</text>
    </svg>
  ),
  9: () => (
    <svg viewBox="0 0 80 100" className={styles.numberSvg}>
      <text x="40" y="75" textAnchor="middle" fontSize="70" fontWeight="bold" fill="#00BCD4" stroke="#0097A7" strokeWidth="2" fontFamily="Comic Sans MS, cursive">9</text>
    </svg>
  ),
  10: () => (
    <svg viewBox="0 0 100 100" className={styles.numberSvg}>
      <text x="50" y="75" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#FF5722" stroke="#E64A19" strokeWidth="2" fontFamily="Comic Sans MS, cursive">10</text>
    </svg>
  ),
  11: () => (
    <svg viewBox="0 0 100 100" className={styles.numberSvg}>
      <text x="50" y="75" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#673AB7" stroke="#512DA8" strokeWidth="2" fontFamily="Comic Sans MS, cursive">11</text>
    </svg>
  ),
  12: () => (
    <svg viewBox="0 0 100 100" className={styles.numberSvg}>
      <text x="50" y="75" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#4CAF50" stroke="#388E3C" strokeWidth="2" fontFamily="Comic Sans MS, cursive">12</text>
    </svg>
  ),
  13: () => (
    <svg viewBox="0 0 100 100" className={styles.numberSvg}>
      <text x="50" y="75" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#FF9800" stroke="#F57C00" strokeWidth="2" fontFamily="Comic Sans MS, cursive">13</text>
    </svg>
  ),
  14: () => (
    <svg viewBox="0 0 100 100" className={styles.numberSvg}>
      <text x="50" y="75" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#2196F3" stroke="#1976D2" strokeWidth="2" fontFamily="Comic Sans MS, cursive">14</text>
    </svg>
  ),
  15: () => (
    <svg viewBox="0 0 100 100" className={styles.numberSvg}>
      <text x="50" y="75" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#9C27B0" stroke="#7B1FA2" strokeWidth="2" fontFamily="Comic Sans MS, cursive">15</text>
    </svg>
  ),
};

/**
 * TimedQuestion - A question component with a countdown timer
 * Used for "hard" difficulty timed challenge games
 */
function TimedQuestion({
  question,
  timeLimit = 10, // seconds
  selectedAnswer,
  showFeedback,
  isCorrect,
  onAnswer,
  onTimeUp,
}) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(timeLimit);
    setIsRunning(true);
  }, [question.id, timeLimit]);

  // Countdown logic
  useEffect(() => {
    if (!isRunning || showFeedback) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsRunning(false);
          onTimeUp?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isRunning, showFeedback, onTimeUp]);

  // Stop timer when feedback shows
  useEffect(() => {
    if (showFeedback) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  }, [showFeedback]);

  const handleOptionClick = (option) => {
    if (showFeedback || timeLeft === 0) return;
    onAnswer(option.id, option.value);
  };

  const timerPercentage = (timeLeft / timeLimit) * 100;
  const timerColor = timeLeft <= 3 ? 'var(--color-error)' :
                     timeLeft <= 5 ? 'var(--color-warning)' :
                     'var(--color-success)';

  return (
    <div className={styles.container}>
      {/* Timer bar */}
      <div className={styles.timerWrapper}>
        <div className={styles.timerBar}>
          <motion.div
            className={styles.timerFill}
            style={{ backgroundColor: timerColor }}
            animate={{ width: `${timerPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className={`${styles.timerText} ${timeLeft <= 3 ? styles.urgent : ''}`}>
          {timeLeft}
        </span>
      </div>

      {/* Time's up overlay */}
      <AnimatePresence>
        {timeLeft === 0 && !showFeedback && (
          <motion.div
            className={styles.timeUpOverlay}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className={styles.timeUpText}>נגמר הזמן! ⏰</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Options grid */}
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          const isWrong = showFeedback && isSelected && !isCorrect;
          const isCorrectAnswer = showFeedback && option.isCorrect;

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                size="medium"
                selected={isSelected}
                correct={isCorrectAnswer}
                wrong={isWrong}
                disabled={showFeedback || timeLeft === 0}
                onClick={() => handleOptionClick(option)}
              >
                <div className={styles.optionContent}>
                  {NumberIcons[option.value] ? (
                    NumberIcons[option.value]()
                  ) : (
                    <span className={styles.numberText}>{option.display || option.label}</span>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default TimedQuestion;

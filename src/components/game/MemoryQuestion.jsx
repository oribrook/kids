import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Button } from '../common';
import styles from './MemoryQuestion.module.css';

// Color circle SVGs for memory game
const ColorIcons = {
  red: () => (
    <svg viewBox="0 0 100 100" className={styles.colorSvg}>
      <circle cx="50" cy="50" r="45" fill="#E74C3C" />
      <circle cx="50" cy="50" r="38" fill="#EC7063" />
      <ellipse cx="35" cy="35" rx="12" ry="10" fill="rgba(255,255,255,0.4)" />
    </svg>
  ),
  blue: () => (
    <svg viewBox="0 0 100 100" className={styles.colorSvg}>
      <circle cx="50" cy="50" r="45" fill="#2980B9" />
      <circle cx="50" cy="50" r="38" fill="#3498DB" />
      <ellipse cx="35" cy="35" rx="12" ry="10" fill="rgba(255,255,255,0.4)" />
    </svg>
  ),
  green: () => (
    <svg viewBox="0 0 100 100" className={styles.colorSvg}>
      <circle cx="50" cy="50" r="45" fill="#27AE60" />
      <circle cx="50" cy="50" r="38" fill="#2ECC71" />
      <ellipse cx="35" cy="35" rx="12" ry="10" fill="rgba(255,255,255,0.4)" />
    </svg>
  ),
  yellow: () => (
    <svg viewBox="0 0 100 100" className={styles.colorSvg}>
      <circle cx="50" cy="50" r="45" fill="#F1C40F" />
      <circle cx="50" cy="50" r="38" fill="#F4D03F" />
      <ellipse cx="35" cy="35" rx="12" ry="10" fill="rgba(255,255,255,0.4)" />
    </svg>
  ),
  purple: () => (
    <svg viewBox="0 0 100 100" className={styles.colorSvg}>
      <circle cx="50" cy="50" r="45" fill="#9B59B6" />
      <circle cx="50" cy="50" r="38" fill="#A569BD" />
      <ellipse cx="35" cy="35" rx="12" ry="10" fill="rgba(255,255,255,0.4)" />
    </svg>
  ),
  orange: () => (
    <svg viewBox="0 0 100 100" className={styles.colorSvg}>
      <circle cx="50" cy="50" r="45" fill="#E67E22" />
      <circle cx="50" cy="50" r="38" fill="#F39C12" />
      <ellipse cx="35" cy="35" rx="12" ry="10" fill="rgba(255,255,255,0.4)" />
    </svg>
  ),
};

// Map Hebrew color names and emojis to color keys
const colorNameMap = {
  'אדום': 'red',
  'כחול': 'blue',
  'ירוק': 'green',
  'צהוב': 'yellow',
  'סגול': 'purple',
  'כתום': 'orange',
  '🔴': 'red',
  '🔵': 'blue',
  '🟢': 'green',
  '🟡': 'yellow',
  '🟣': 'purple',
  '🟠': 'orange',
};

// Get color icon by label or emoji
const getColorIcon = (item) => {
  const colorKey = colorNameMap[item.label] || colorNameMap[item.emoji];
  return colorKey ? ColorIcons[colorKey] : null;
};

/**
 * MemoryQuestion - A question component with memory challenge
 * Shows items briefly, then hides them and asks a question
 * Used for "hard" difficulty memory challenge games
 */
function MemoryQuestion({
  question,
  memoryTime = 3, // seconds to memorize
  selectedAnswer,
  showFeedback,
  isCorrect,
  onAnswer,
}) {
  const [phase, setPhase] = useState('memorize'); // 'memorize' | 'answer'
  const [countdown, setCountdown] = useState(memoryTime);

  // Reset phase when question changes
  useEffect(() => {
    setPhase('memorize');
    setCountdown(memoryTime);
  }, [question.id, memoryTime]);

  // Countdown during memorize phase
  useEffect(() => {
    if (phase !== 'memorize') return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setPhase('answer');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  const handleOptionClick = (option) => {
    if (showFeedback || phase === 'memorize') return;
    onAnswer(option.id, option.value);
  };

  const handleSkipMemorize = useCallback(() => {
    setPhase('answer');
    setCountdown(0);
  }, []);

  return (
    <div className={styles.container}>
      {/* Memorize Phase */}
      <AnimatePresence mode="wait">
        {phase === 'memorize' && (
          <motion.div
            className={styles.memorizePhase}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className={styles.memorizeHeader}>
              <span className={styles.memorizeIcon}>🧠</span>
              <span className={styles.memorizeTitle}>זכרו!</span>
            </div>

            {/* Items to memorize */}
            <div className={styles.memorizeItems}>
              {question.memoryItems.map((item, index) => {
                const ColorIcon = getColorIcon(item);
                return (
                  <motion.div
                    key={item.id || index}
                    className={styles.memoryItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {ColorIcon ? (
                      <ColorIcon />
                    ) : item.emoji ? (
                      <span className={styles.itemEmoji}>{item.emoji}</span>
                    ) : null}
                    {item.label && (
                      <span className={styles.itemLabel}>{item.label}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Countdown */}
            <div className={styles.countdownWrapper}>
              <motion.div
                className={styles.countdown}
                key={countdown}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                {countdown}
              </motion.div>
              <Button
                variant="ghost"
                size="small"
                onClick={handleSkipMemorize}
              >
                זכרתי! ➡️
              </Button>
            </div>
          </motion.div>
        )}

        {/* Answer Phase */}
        {phase === 'answer' && (
          <motion.div
            className={styles.answerPhase}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Question prompt */}
            <div className={styles.questionPrompt}>
              <span className={styles.questionIcon}>❓</span>
              <span className={styles.questionText}>{question.memoryQuestion}</span>
            </div>

            {/* Options grid */}
            <div className={styles.options}>
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option.id;
                const isWrong = showFeedback && isSelected && !isCorrect;
                const isCorrectAnswer = showFeedback && option.isCorrect;
                const ColorIcon = getColorIcon(option);

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
                      disabled={showFeedback}
                      onClick={() => handleOptionClick(option)}
                    >
                      <div className={styles.optionContent}>
                        {ColorIcon ? (
                          <ColorIcon />
                        ) : option.emoji ? (
                          <span className={styles.optionEmoji}>{option.emoji}</span>
                        ) : null}
                        {!ColorIcon && (option.display || option.label)}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MemoryQuestion;

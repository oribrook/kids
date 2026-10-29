import { motion } from 'framer-motion';
import { Card } from '../components/common';
import styles from './SelectionQuestion.module.css';
import { ItemIcons, MultiIconRenderer } from '../components/icons';

function SelectionQuestion({
  question,
  selectedAnswer,
  showFeedback,
  isCorrect,
  onAnswer,
  // Multi-select props
  multiSelectState,
  onMultiSelectAnswer,
  // Intro multi-select props
  onIntroMultiSelectAnswer,
  // Audio preview prop
  onPlayOptionAudio,
}) {
  // Support for question image (used in letters games to show word image)
  const QuestionImage = question.questionImage ? ItemIcons[question.questionImage] : null;
  const questionImageCount = question.questionImageCount || 1;

  // Check if this is a multi-select question
  const isMultiSelect = question.multiSelect === true;

  // Check if this is an intro multi-select question (all options correct, plays word audio)
  const isIntroMultiSelect = question.isIntroMultiSelect === true;

  // Check if we have 9 options (for quiz-style 3x3 grid)
  const hasNineOptions = question.options.length === 9;

  // Determine the options container class
  const getOptionsClass = () => {
    if (isMultiSelect || isIntroMultiSelect) return styles.optionsMultiSelect;
    if (hasNineOptions) return styles.optionsGrid9;
    return styles.options;
  };

  return (
    <div className={styles.container}>
      {/* Optional question image display */}
      {QuestionImage && (
        <motion.div
          className={styles.questionImageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.questionImage}>
            <MultiIconRenderer
              IconComponent={QuestionImage}
              count={questionImageCount}
            />
          </div>
        </motion.div>
      )}

      <div className={getOptionsClass()}>
        {question.options.map((option, index) => {
          const ItemIcon = ItemIcons[option.image];
          const isThisCorrect = option.isCorrect;

          // Intro multi-select mode (all correct, plays word audio on click)
          if (isIntroMultiSelect) {
            const optionState = multiSelectState?.[option.id];
            const isCorrectFound = optionState === 'correct';

            return (
              <motion.div
                key={option.id}
                className={styles.introCardWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  size="large"
                  selected={false}
                  correct={isCorrectFound ? true : null}
                  onClick={() => onIntroMultiSelectAnswer(option.id, option.optionAudio)}
                  disabled={false}
                >
                  {ItemIcon ? (
                    <MultiIconRenderer
                      IconComponent={ItemIcon}
                      count={option.imageCount || 1}
                    />
                  ) : (
                    <span className={styles.placeholder}>{option.label}</span>
                  )}
                  {/* Checkmark overlay for selected items */}
                  {isCorrectFound && (
                    <div className={styles.checkmark}>✓</div>
                  )}
                </Card>
                {/* Arabic word label below card */}
                {question.showLabels && option.label && (
                  <div className={styles.arabicLabel}>{option.label}</div>
                )}
                {/* Speaker icon to preview word audio */}
                {option.optionAudio && onPlayOptionAudio && (
                  <button
                    className={styles.speakerButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayOptionAudio(option.optionAudio);
                    }}
                    aria-label={`השמע ${option.label}`}
                  >
                    <svg viewBox="0 0 24 24" className={styles.speakerIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  </button>
                )}
              </motion.div>
            );
          }

          // Multi-select mode
          if (isMultiSelect) {
            const optionState = multiSelectState?.[option.id];
            const isSelected = optionState === 'selected';
            const isCorrectFound = optionState === 'correct';
            const isWrong = optionState === 'wrong';
            const isDisabled = isCorrectFound || isWrong;

            let cardCorrectState = null;
            if (isCorrectFound) cardCorrectState = true;
            if (isWrong) cardCorrectState = false;

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  size="large"
                  selected={isSelected}
                  correct={cardCorrectState}
                  onClick={() => onMultiSelectAnswer(option.id, isThisCorrect)}
                  disabled={isDisabled}
                >
                  {ItemIcon ? (
                    <MultiIconRenderer
                      IconComponent={ItemIcon}
                      count={option.imageCount || 1}
                    />
                  ) : (
                    <span className={styles.placeholder}>{option.label}</span>
                  )}
                  {/* Checkmark overlay for correct selections */}
                  {isCorrectFound && (
                    <div className={styles.checkmark}>✓</div>
                  )}
                </Card>
              </motion.div>
            );
          }

          // Standard single-select mode
          const isSelected = selectedAnswer === option.id;
          let cardState = null;
          if (showFeedback && isSelected) {
            cardState = isThisCorrect;
          }

          // Use smaller cards for 9-option grids
          const cardSize = hasNineOptions ? 'large' : 'xlarge';

          const hasOptionAudio = option.optionAudio && onPlayOptionAudio;

          return (
            <motion.div
              key={option.id}
              className={hasOptionAudio ? styles.introCardWrapper : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                size={cardSize}
                selected={isSelected && !showFeedback}
                correct={cardState}
                onClick={() => onAnswer(option.id)}
                disabled={showFeedback}
              >
                {ItemIcon ? (
                  <MultiIconRenderer
                    IconComponent={ItemIcon}
                    count={option.imageCount || 1}
                  />
                ) : (
                  <span className={styles.placeholder}>{option.label}</span>
                )}
              </Card>
              {/* Speaker icon to preview word audio */}
              {hasOptionAudio && (
                <button
                  className={styles.speakerButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayOptionAudio(option.optionAudio);
                  }}
                  aria-label={`השמע ${option.label}`}
                >
                  <svg viewBox="0 0 24 24" className={styles.speakerIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectionQuestion;

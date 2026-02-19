import { useState, useEffect } from 'react';
import styles from './HiddenLetterInstruction.module.css';

/**
 * HiddenLetterInstruction - Replaces target letters/numbers in instruction text with stars.
 *
 * When the instruction says "מצאו את האות א", the letter "א" is hidden behind a ⭐.
 * Clicking the star reveals the letter for 1 second, then hides it again.
 *
 * Skips intro questions (isIntroMultiSelect) where showing the letter is intentional.
 *
 * Supported patterns:
 * - בחרו את כל האותיות X
 * - מצאו את האות X
 * - איזו מילה מתחילה באות X?
 * - סמנו את כל האותיות X ו-Y (and X, Y ו-Z)
 * - מצאו את המספר X
 * - בחרו את כל המספרים X
 * - בחרו את כל המספרים X ו-Y (and X, Y ו-Z)
 * - איפה המספר X?
 * - איזה מספר בא אחרי X?
 * - בחרו את האות עם הניקוד X
 * - איזו מילה מתחילה בצליל X?
 * - כל המילים האלה מתחילות באותיות שלמדנו: X، Y، Z (Arabic cumulative review)
 */

// Patterns that end with target letter(s) to hide
// Each regex captures: (prefix text)(target letters to hide)
const HIDE_PATTERNS = [
  // "בחרו את כל האותיות א" or "בחרו את כל האותיות A"
  /^(בחרו את כל האותיות\s+)(.+)$/,
  // "מצאו את האות א" or "מצאו את האות A"
  /^(מצאו את האות\s+)(.+)$/,
  // "איזו מילה מתחילה באות א?" or "...באות A?"
  /^(איזו מילה מתחילה באות\s+)(.+?)(\??)$/,
  // "סמנו את כל האותיות א ו-ב" or "...א, ב ו-ג"
  /^(סמנו את כל האותיות\s+)(.+)$/,
  // "מצאו את המספר 5"
  /^(מצאו את המספר\s+)(.+)$/,
  // "בחרו את כל המספרים 3" or "...3 ו-4" or "...3, 4 ו-5"
  /^(בחרו את כל המספרים\s+)(.+)$/,
  // "איפה המספר 5?"
  /^(איפה המספר\s+)(.+?)(\??)$/,
  // "איזה מספר בא אחרי 5?"
  /^(איזה מספר בא אחרי\s+)(.+?)(\??)$/,
  // "בחרו את האות עם הניקוד X"
  /^(בחרו את האות עם הניקוד\s+)(.+)$/,
  // "איזו מילה מתחילה בצליל X?"
  /^(איזו מילה מתחילה בצליל\s+)(.+?)(\??)$/,
  // Arabic cumulative review: "כל המילים האלה מתחילות באותיות שלמדנו: أ، ب، ت"
  /^(כל המילים האלה מתחילות באותיות שלמדנו:\s+)(.+)$/,
];

function HiddenLetterInstruction({ instruction, isIntro, className }) {
  const [revealedIndex, setRevealedIndex] = useState(null);

  // Reset revealed state when instruction changes
  useEffect(() => {
    setRevealedIndex(null);
  }, [instruction]);

  if (!instruction) return null;

  // Skip hiding for intro questions
  if (isIntro) {
    return <p className={className}>{instruction}</p>;
  }

  // Try each pattern
  for (const pattern of HIDE_PATTERNS) {
    const match = instruction.match(pattern);
    if (match) {
      const prefix = match[1];
      const targetText = match[2];
      const suffix = match[3] || '';

      const handleStarClick = () => {
        if (revealedIndex !== null) return; // Already revealing
        setRevealedIndex(1);
        setTimeout(() => setRevealedIndex(null), 1000);
      };

      return (
        <p className={className}>
          {prefix}
          <span
            className={`${styles.starWrapper} ${revealedIndex !== null ? styles.revealed : ''}`}
            onClick={handleStarClick}
          >
            <span className={styles.starIcon}>⭐</span>
            <span className={styles.hiddenText}>{targetText}</span>
          </span>
          {suffix}
        </p>
      );
    }
  }

  // No pattern matched — render as-is
  return <p className={className}>{instruction}</p>;
}

export default HiddenLetterInstruction;

import { useState, useRef, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import { shuffleArray } from '../../utils/shuffle';
import styles from './MathGame.module.css';

const NEXT_QUESTION_DELAY_MS = 1200;
const NEAR_OFFSETS = [-2, -1, 1, 2];
const FAR_OFFSETS = [-4, -3, 3, 4];

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// 3 wrong options: the "other operation" result (mixing + and −) when valid,
// then numbers close to the answer. All options stay in 0..maxResult.
function makeOptions(answer, swappedResult, maxResult) {
  const isValid = (n) => n >= 0 && n <= maxResult && n !== answer;
  const wrong = isValid(swappedResult) ? [swappedResult] : [];
  for (const offset of [...shuffleArray(NEAR_OFFSETS), ...shuffleArray(FAR_OFFSETS)]) {
    if (wrong.length === 3) break;
    const n = answer + offset;
    if (isValid(n) && !wrong.includes(n)) wrong.push(n);
  }
  return shuffleArray([answer, ...wrong]);
}

function makeQuestion(yValues, maxResult) {
  const y = yValues[randInt(0, yValues.length - 1)];
  const isPlus = Math.random() < 0.5;
  const x = isPlus ? randInt(0, maxResult - y) : randInt(y, maxResult);
  const answer = isPlus ? x + y : x - y;
  const swappedResult = isPlus ? x - y : x + y;
  return {
    x,
    y,
    op: isPlus ? '+' : '−',
    answer,
    options: makeOptions(answer, swappedResult, maxResult),
  };
}

function makeRound(yValues, count, maxResult) {
  const seen = new Set();
  const questions = [];
  while (questions.length < count) {
    const q = makeQuestion(yValues, maxResult);
    const key = `${q.x}${q.op}${q.y}`;
    if (seen.has(key)) continue;
    seen.add(key);
    questions.push(q);
  }
  return questions;
}

function starsForMistakes(mistakes) {
  if (mistakes <= 1) return 3;
  if (mistakes <= 4) return 2;
  return 1;
}

function mistakesText(mistakes) {
  if (mistakes === 0) return 'בלי אף טעות! 💯';
  if (mistakes === 1) return 'עם טעות אחת';
  return `עם ${mistakes} טעויות`;
}

function MathGame({ game, onClose }) {
  const { levels, maxResult, questionsPerRound } = game;
  const [phase, setPhase] = useState('waiting'); // waiting | playing | ended
  const [levelId, setLevelId] = useState(levels[0].id);
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [wrongPicks, setWrongPicks] = useState([]);
  const [solved, setSolved] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [stars, setStars] = useState(0);
  const timerRef = useRef(null);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playComplete } = useAudio();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const level = levels.find(l => l.id === levelId) || levels[0];
  const question = questions[qIndex];

  const startGame = () => {
    setQuestions(makeRound(level.yValues, questionsPerRound, maxResult));
    setQIndex(0);
    setWrongPicks([]);
    setSolved(false);
    setMistakes(0);
    setPhase('playing');
  };

  const handlePick = (value) => {
    if (solved || wrongPicks.includes(value)) return;

    if (value !== question.answer) {
      playWrong();
      setWrongPicks(prev => [...prev, value]);
      setMistakes(prev => prev + 1);
      return;
    }

    playCorrect();
    setSolved(true);
    const isLast = qIndex === questions.length - 1;
    timerRef.current = setTimeout(() => {
      if (isLast) {
        const gameStars = starsForMistakes(mistakes);
        setStars(gameStars);
        setPhase('ended');
        playComplete();
        addScore(gameStars * 16);
        recordGamePlayed(game.id, gameStars * 16, gameStars);
      } else {
        setQIndex(i => i + 1);
        setWrongPicks([]);
        setSolved(false);
      }
    }, NEXT_QUESTION_DELAY_MS);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {phase === 'playing' && (
          <>
            <div className={styles.infoDisplay}>
              {level.emoji} תרגיל {qIndex + 1}/{questions.length}
            </div>
            <div className={styles.scoreDisplay}>❌ {mistakes}</div>
          </>
        )}
      </div>

      {phase === 'playing' && question && (
        <div className={styles.gameArea}>
          <div className={styles.instruction}>כמה זה?</div>

          <div key={qIndex} className={styles.equationCard}>
            <span>{question.x}</span>
            <span className={styles.operator}>{question.op}</span>
            <span>{question.y}</span>
            <span className={styles.operator}>=</span>
            <span className={`${styles.answerBox} ${solved ? styles.answerBoxSolved : ''}`}>
              {solved ? question.answer : '?'}
            </span>
          </div>

          <div className={styles.options}>
            {question.options.map(value => {
              const isWrong = wrongPicks.includes(value);
              const isRight = solved && value === question.answer;
              return (
                <button
                  key={`${qIndex}-${value}`}
                  className={`${styles.option} ${isWrong ? styles.optionWrong : ''} ${isRight ? styles.optionRight : ''}`}
                  onClick={() => handlePick(value)}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startIcon}>➕➖</div>
          <div className={styles.startText}>חיבור וחיסור!</div>
          <div className={styles.startSubtext}>בחרו רמה ופתרו {questionsPerRound} תרגילים</div>

          <div className={styles.levelSelector}>
            {levels.map(l => (
              <button
                key={l.id}
                className={`${styles.levelBtn} ${levelId === l.id ? styles.levelBtnActive : ''}`}
                onClick={() => setLevelId(l.id)}
              >
                <span className={styles.levelEmoji}>{l.emoji}</span>
                <span>{l.label}</span>
                <span className={styles.levelHint}>{l.yValues.join(' או ')}</span>
              </button>
            ))}
          </div>

          <button className={styles.startBtn} onClick={startGame}>
            יאללה! 🚀
          </button>
        </div>
      )}

      {phase === 'ended' && (
        <div className={styles.endOverlay}>
          <div className={styles.endText}>כל הכבוד! 🎉</div>
          <div className={styles.endScore}>
            פתרתם {questions.length} תרגילים {mistakesText(mistakes)}
          </div>
          <div className={styles.endStars}>
            {[1, 2, 3].map(s => (
              <span key={s} style={{ opacity: s <= stars ? 1 : 0.3 }}>⭐</span>
            ))}
          </div>
          <button className={styles.endBtn} onClick={() => setPhase('waiting')}>🔄 שחקו שוב</button>
          <button className={styles.endBtnSecondary} onClick={onClose}>🏠 חזרה</button>
        </div>
      )}
    </div>
  );
}

export default MathGame;

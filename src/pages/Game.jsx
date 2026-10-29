import { useEffect, useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { useUser } from '../context/UserContext';
import { useAudio } from '../hooks/useAudio';
import { getGameById, getQuestionsForDifficulty } from '../data/registry';
import { getCategoryById, getTopicForCategory } from '../data/categories';
import { shuffleArray } from '../utils/shuffle';
import { ProgressBar, ScoreDisplay, AudioButton, Button, Mascot } from '../components/common';
import GameComplete from '../quiz/GameComplete';
import SelectionQuestion from '../quiz/SelectionQuestion';
import HiddenLetterInstruction from '../quiz/HiddenLetterInstruction';
import { STANDALONE_GAMES } from '../games';
import styles from './Game.module.css';

const REPLAY_DELAY_MS = 1400;
const EXIT_ARM_MS = 2000;

function Game() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = getGameById(gameId);
  const category = game ? getCategoryById(game.categoryId) : null;

  const { gameState, startGame, endGame, submitAnswer, getCurrentQuestion, getStars } = useGame();
  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playInstruction, playComplete } = useAudio();

  // Get questions (always easy)
  const questions = useMemo(() => {
    if (!game) return [];
    return getQuestionsForDifficulty(game);
  }, [game]);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  // Multi-select state: { optionId: 'selected' | 'correct' | 'wrong' }
  const [multiSelectState, setMultiSelectState] = useState({});
  const [multiSelectCorrectCount, setMultiSelectCorrectCount] = useState(0);

  // Single-select: options already tried and wrong, kept per question id
  const [wrongTries, setWrongTries] = useState({ questionId: null, ids: [] });

  const [exitArmed, setExitArmed] = useState(false);

  // Track the previous isComplete value to detect transition from false -> true
  // Initialize to true to prevent playing on mount when context has stale isComplete=true
  const prevIsCompleteRef = useRef(true);

  // Pending timers (feedback, advance, instruction replay) - cleared on question change / unmount
  const timersRef = useRef([]);

  const currentQuestion = getCurrentQuestion();
  const wrongIds = wrongTries.questionId === currentQuestion?.id ? wrongTries.ids : [];

  // Shuffle options for current question (memoized per question id)
  // eslint-disable-next-line react-hooks/preserve-manual-memoization -- re-shuffle only when the question id changes
  const shuffledQuestion = useMemo(() => {
    if (!currentQuestion || !currentQuestion.options) return currentQuestion;

    // Skip shuffle for intro screens (all options correct, order can stay)
    if (currentQuestion.isIntroMultiSelect || currentQuestion.noShuffle) {
      return currentQuestion;
    }

    return {
      ...currentQuestion,
      options: shuffleArray(currentQuestion.options),
    };
  }, [currentQuestion?.id]); // Re-shuffle only when question changes

  useEffect(() => {
    if (game && questions.length > 0) {
      // Pass game with difficulty-specific questions
      const gameWithQuestions = {
        ...game,
        questions: questions,
      };
      startGame(gameWithQuestions);
    }
  }, [game, questions, startGame]);

  // Reset game session state on unmount so the NEXT game never sees a stale
  // isComplete=true (previously caused the old completion screen to flash/stick)
  useEffect(() => {
    return () => {
      endGame();
    };
  }, [endGame]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const later = (fn, ms) => {
    timersRef.current.push(setTimeout(fn, ms));
  };

  useEffect(() => {
    return () => clearTimers();
  }, [currentQuestion?.id]);

  // Where to go when exiting this game. Single-game categories skip their
  // useless middle page (Category with one card) and go straight to the topic.
  const exitPath = useMemo(() => {
    if (!game || !category) return '/home';
    if ((category.games?.length || 0) <= 1) {
      const topic = getTopicForCategory(category.id);
      if (topic) return `/topic/${topic.id}`;
    }
    return `/category/${game.categoryId}`;
  }, [game, category]);

  // Handle game completion - play audio only when isComplete transitions from false to true
  useEffect(() => {
    if (gameState.isComplete && !prevIsCompleteRef.current) {
      // Transition from false -> true: game just completed, play audio
      prevIsCompleteRef.current = true;
      playComplete();
      addScore(gameState.score);
      recordGamePlayed(game.id, gameState.score, getStars());
    } else if (!gameState.isComplete && prevIsCompleteRef.current) {
      // Transition from true -> false: game was reset, allow audio again for next completion
      prevIsCompleteRef.current = false;
    }
  }, [gameState.isComplete, gameState.score, game?.id, playComplete, addScore, recordGamePlayed, getStars]);

  // Auto-play instruction audio shortly after a new question loads
  useEffect(() => {
    if (currentQuestion?.instructionAudio && !gameState.isComplete) {
      const timer = setTimeout(() => {
        playInstruction(currentQuestion.instructionAudio);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentQuestion?.id, gameState.isComplete, playInstruction]);

  if (!game || !category) {
    return (
      <div className={styles.notFound}>
        <h1>משחק לא נמצא</h1>
        <Button onClick={() => navigate('/home')}>חזרה לדף הבית</Button>
      </div>
    );
  }

  // Standalone games - self-contained, bypass the question-based flow
  const StandaloneGame = STANDALONE_GAMES[game.gameType];
  if (StandaloneGame) {
    return (
      <StandaloneGame
        game={game}
        onClose={() => navigate(exitPath)}
      />
    );
  }

  const replayInstruction = () => {
    if (!currentQuestion?.instructionAudio) return;
    later(() => playInstruction(currentQuestion.instructionAudio), REPLAY_DELAY_MS);
  };

  const resetQuestionState = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(null);
    setMultiSelectState({});
    setMultiSelectCorrectCount(0);
  };

  const handleAnswer = (answerId) => {
    if (showFeedback) return;

    setSelectedAnswer(answerId);
    setShowFeedback(true);

    // Check if the selected option has isCorrect: true (supports multiple correct answers)
    let correct = false;
    const selectedOption = currentQuestion.options?.find(opt => opt.id === answerId);
    if (selectedOption?.isCorrect) {
      correct = true;
    } else {
      // Fallback to legacy correctAnswerId check
      correct = answerId === currentQuestion.correctAnswerId;
    }

    setIsCorrect(correct);

    if (correct) {
      clearTimers();
      playCorrect();
      later(() => {
        submitAnswer(true);
        resetQuestionState();
      }, 1500);
      return;
    }

    playWrong();
    later(() => {
      submitAnswer(false);
      setWrongTries(prev => ({
        questionId: currentQuestion.id,
        ids: prev.questionId === currentQuestion.id ? [...prev.ids, answerId] : [answerId],
      }));
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(null);
    }, 1000);
    replayInstruction();
  };

  const handleClose = () => {
    if (exitArmed) {
      navigate(exitPath);
      return;
    }
    setExitArmed(true);
    later(() => setExitArmed(false), EXIT_ARM_MS);
  };

  const handlePlayInstruction = () => {
    if (currentQuestion?.instructionAudio) {
      playInstruction(currentQuestion.instructionAudio);
    }
  };

  // Handle multi-select answer (for questions with multiSelect: true)
  const handleMultiSelectAnswer = (optionId, isOptionCorrect) => {
    // If already processed this option, ignore
    if (multiSelectState[optionId] === 'correct' || multiSelectState[optionId] === 'wrong') {
      return;
    }
    // Question already completed, waiting to advance
    if (showFeedback && isCorrect) return;

    if (isOptionCorrect) {
      playCorrect();
      const newCorrectCount = multiSelectCorrectCount + 1;
      setMultiSelectCorrectCount(newCorrectCount);
      setMultiSelectState(prev => ({ ...prev, [optionId]: 'correct' }));

      // Check if all correct answers found
      const totalCorrect = currentQuestion.correctCount ||
        currentQuestion.options.filter(opt => opt.isCorrect).length;

      if (newCorrectCount >= totalCorrect) {
        clearTimers();
        setShowFeedback(true);
        setIsCorrect(true);
        later(() => {
          submitAnswer(true);
          resetQuestionState();
        }, 1500);
      }
      return;
    }

    // Wrong tap: keep the found cards, mark this one wrong, count the attempt
    playWrong();
    submitAnswer(false);
    setMultiSelectState(prev => ({ ...prev, [optionId]: 'wrong' }));
    setShowFeedback(true);
    setIsCorrect(false);
    later(() => {
      setShowFeedback(false);
      setIsCorrect(null);
    }, 1000);
    replayInstruction();
  };

  // Handle intro multi-select answer (for introduction questions - all correct, plays word audio)
  const handleIntroMultiSelectAnswer = (optionId, optionAudio) => {
    // If already selected, replay the audio
    if (multiSelectState[optionId] === 'correct') {
      if (optionAudio) {
        playInstruction(optionAudio);
      }
      return;
    }

    // Play the word audio
    if (optionAudio) {
      playInstruction(optionAudio);
    }

    const newCorrectCount = multiSelectCorrectCount + 1;
    setMultiSelectCorrectCount(newCorrectCount);
    setMultiSelectState(prev => ({ ...prev, [optionId]: 'correct' }));

    // Check if all options selected
    const totalOptions = currentQuestion.options.length;

    if (newCorrectCount >= totalOptions) {
      setShowFeedback(true);
      setIsCorrect(true);
      later(() => {
        submitAnswer(true);
        resetQuestionState();
      }, 1500);
    }
  };

  const handlePlayAgain = () => {
    clearTimers();
    resetQuestionState();
    setWrongTries({ questionId: null, ids: [] });
    setExitArmed(false);
    startGame({ ...game, questions });
  };

  // The context session must belong to THIS game. It resets on unmount, but the
  // very first render still happens before startGame runs - never show another
  // game's (or an empty) session state.
  const isCurrentGameSession = gameState.currentGame?.id === game.id;

  // Show completion screen
  if (gameState.isComplete && isCurrentGameSession) {
    return (
      <GameComplete
        score={gameState.score}
        maxScore={questions.length * 16}
        stars={getStars()}
        onPlayAgain={handlePlayAgain}
        onHome={() => navigate(exitPath)}
      />
    );
  }

  // Render appropriate question component based on game type
  const renderQuestion = () => {
    if (!shuffledQuestion) return null;

    return (
      <SelectionQuestion
        question={shuffledQuestion}
        selectedAnswer={selectedAnswer}
        showFeedback={showFeedback}
        wrongIds={wrongIds}
        onAnswer={handleAnswer}
        multiSelectState={multiSelectState}
        onMultiSelectAnswer={handleMultiSelectAnswer}
        onIntroMultiSelectAnswer={handleIntroMultiSelectAnswer}
        onPlayOptionAudio={playInstruction}
      />
    );
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: category.backgroundColor }}
    >
      {/* Header */}
      <header className={styles.header}>
        <button
          className={`${styles.closeButton} ${exitArmed ? styles.closeArmed : ''}`}
          onClick={handleClose}
          aria-label={exitArmed ? 'לחצו שוב ליציאה' : 'יציאה'}
        >
          {exitArmed ? '🏠' : '✕'}
        </button>
        <div className={styles.progressWrapper}>
          <ProgressBar
            current={gameState.currentQuestionIndex + 1}
            total={questions.length}
            color={category.color}
            showLabels={questions.length <= 10}
          />
        </div>
        <ScoreDisplay score={gameState.score} showMultiplier={false} />
      </header>

      {/* Main game area */}
      <main className={styles.main}>
        {/* Instruction text */}
        <motion.div
          className={styles.instruction}
          key={currentQuestion?.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <HiddenLetterInstruction
            instruction={currentQuestion?.instruction}
            isIntro={currentQuestion?.isIntroMultiSelect}
            className={styles.instructionText}
          />
        </motion.div>

        {/* Question content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion?.id}
            className={styles.questionArea}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {renderQuestion()}
          </motion.div>
        </AnimatePresence>

        {/* Feedback mascot */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              className={styles.feedbackMascot}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <Mascot
                size="small"
                mood={isCorrect ? 'excited' : 'sad'}
                animate={false}
              />
              <span className={styles.feedbackText}>
                {isCorrect ? 'כל הכבוד! 🎉' : 'נסו שוב! 💪'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Audio button */}
      <div className={styles.audioButtonWrapper}>
        <AudioButton
          audioUrl={currentQuestion?.instructionAudio}
          onPlay={handlePlayInstruction}
          size="large"
        />
      </div>
    </div>
  );
}

export default Game;

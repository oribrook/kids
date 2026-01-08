import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { useUser } from '../context/UserContext';
import { useAudio } from '../hooks/useAudio';
import { getGameById, getQuestionsForDifficulty } from '../data/games';
import { getCategoryById } from '../data/categories';
import { ProgressBar, ScoreDisplay, AudioButton, Button, Mascot } from '../components/common';
import GameComplete from '../components/game/GameComplete';
import CountingQuestion from '../components/game/CountingQuestion';
import SelectionQuestion from '../components/game/SelectionQuestion';
import ShadowQuestion from '../components/game/ShadowQuestion';
import TimedQuestion from '../components/game/TimedQuestion';
import MemoryQuestion from '../components/game/MemoryQuestion';
import styles from './Game.module.css';

function Game() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = getGameById(gameId);
  const category = game ? getCategoryById(game.categoryId) : null;

  const { gameState, startGame, submitAnswer, getCurrentQuestion, getProgress, getStars } = useGame();
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

  // Track the previous isComplete value to detect transition from false -> true
  // Initialize to true to prevent playing on mount when context has stale isComplete=true
  const prevIsCompleteRef = useRef(true);

  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();

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

  // Auto-play instruction audio 1 second after new question loads
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

  const handleAnswer = (answerId, answerValue) => {
    if (showFeedback) return;

    setSelectedAnswer(answerId);
    setShowFeedback(true);

    // Check if answer is correct based on game type
    let correct = false;
    if (game.id === 'count-animals' || game.id === 'count-shapes') {
      correct = answerValue === currentQuestion.correctAnswer;
    } else {
      // Check if the selected option has isCorrect: true (supports multiple correct answers)
      const selectedOption = currentQuestion.options?.find(opt => opt.id === answerId);
      if (selectedOption?.isCorrect) {
        correct = true;
      } else {
        // Fallback to legacy correctAnswerId check
        correct = answerId === currentQuestion.correctAnswerId;
      }
    }

    setIsCorrect(correct);

    if (correct) {
      playCorrect();
    } else {
      playWrong();
    }

    // Auto-advance after delay
    setTimeout(() => {
      submitAnswer(correct);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(null);
    }, correct ? 1500 : 1000);
  };

  const handleClose = () => {
    navigate(`/category/${game.categoryId}`);
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

    if (isOptionCorrect) {
      // Correct selection!
      playCorrect();
      const newCorrectCount = multiSelectCorrectCount + 1;
      setMultiSelectCorrectCount(newCorrectCount);
      setMultiSelectState(prev => ({ ...prev, [optionId]: 'correct' }));

      // Check if all correct answers found
      const totalCorrect = currentQuestion.correctCount ||
        currentQuestion.options.filter(opt => opt.isCorrect).length;

      if (newCorrectCount >= totalCorrect) {
        // All found! Complete the question
        setShowFeedback(true);
        setIsCorrect(true);
        setTimeout(() => {
          submitAnswer(true);
          setSelectedAnswer(null);
          setShowFeedback(false);
          setIsCorrect(null);
          setMultiSelectState({});
          setMultiSelectCorrectCount(0);
        }, 1500);
      }
    } else {
      // Wrong selection - show error immediately
      playWrong();
      setMultiSelectState(prev => ({ ...prev, [optionId]: 'wrong' }));
      setShowFeedback(true);
      setIsCorrect(false);

      // Brief delay then advance (wrong answer)
      setTimeout(() => {
        submitAnswer(false);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setIsCorrect(null);
        setMultiSelectState({});
        setMultiSelectCorrectCount(0);
      }, 1000);
    }
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
      // All selected! Complete the question
      setShowFeedback(true);
      setIsCorrect(true);
      setTimeout(() => {
        submitAnswer(true);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setIsCorrect(null);
        setMultiSelectState({});
        setMultiSelectCorrectCount(0);
      }, 1500);
    }
  };

  const handlePlayAgain = () => {
    navigate(`/category/${game.categoryId}`);
  };

  // Handle time up for timed games (must be before early return to follow hooks rules)
  const handleTimeUp = useCallback(() => {
    if (showFeedback) return;
    setShowFeedback(true);
    setIsCorrect(false);
    playWrong();

    // Auto-advance after delay
    setTimeout(() => {
      submitAnswer(false);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(null);
    }, 1500);
  }, [showFeedback, playWrong, submitAnswer]);

  // Show completion screen
  if (gameState.isComplete) {
    return (
      <GameComplete
        score={gameState.score}
        maxScore={questions.length * 16}
        stars={getStars()}
        onPlayAgain={handlePlayAgain}
      />
    );
  }

  // Render appropriate question component based on game type
  const renderQuestion = () => {
    if (!currentQuestion) return null;

    const commonProps = {
      question: currentQuestion,
      selectedAnswer,
      showFeedback,
      isCorrect,
      onAnswer: handleAnswer,
    };

    // Check game type first for special handling
    if (game.gameType === 'timed') {
      return (
        <TimedQuestion
          {...commonProps}
          timeLimit={game.timeLimit || 10}
          onTimeUp={handleTimeUp}
        />
      );
    }

    if (game.gameType === 'memory') {
      return (
        <MemoryQuestion
          {...commonProps}
          memoryTime={game.memoryTime || 3}
        />
      );
    }

    // Standard games - use specific question components
    if (game.id === 'count-animals' || game.id === 'count-shapes' || game.id === 'speed-count') {
      return <CountingQuestion {...commonProps} />;
    } else if (game.id === 'shadow-match') {
      return <ShadowQuestion {...commonProps} />;
    } else {
      // SelectionQuestion - pass multi-select props if needed
      return (
        <SelectionQuestion
          {...commonProps}
          multiSelectState={multiSelectState}
          onMultiSelectAnswer={handleMultiSelectAnswer}
          onIntroMultiSelectAnswer={handleIntroMultiSelectAnswer}
        />
      );
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: category.backgroundColor }}
    >
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.closeButton} onClick={handleClose}>
          ✕
        </button>
        <div className={styles.progressWrapper}>
          <ProgressBar
            current={gameState.currentQuestionIndex + 1}
            total={questions.length}
            color={category.color}
            showLabels={true}
          />
        </div>
        <ScoreDisplay
          score={gameState.score}
          multiplier={gameState.attempts === 0 ? 2 : 1}
          showMultiplier={gameState.attempts === 0}
        />
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
          <p className={styles.instructionText}>{currentQuestion?.instruction}</p>
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

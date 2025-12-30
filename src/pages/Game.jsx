import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { useUser } from '../context/UserContext';
import { useAudio } from '../hooks/useAudio';
import { getGameById } from '../data/games';
import { getCategoryById } from '../data/categories';
import { ProgressBar, ScoreDisplay, AudioButton, Card, Button, Mascot } from '../components/common';
import GameComplete from '../components/game/GameComplete';
import CountingQuestion from '../components/game/CountingQuestion';
import SelectionQuestion from '../components/game/SelectionQuestion';
import ShadowQuestion from '../components/game/ShadowQuestion';
import styles from './Game.module.css';

function Game() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = getGameById(gameId);
  const category = game ? getCategoryById(game.categoryId) : null;

  const { gameState, startGame, submitAnswer, getCurrentQuestion, getProgress, getStars } = useGame();
  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playInstruction, playComplete } = useAudio();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();

  useEffect(() => {
    if (game) {
      startGame(game);
    }
  }, [game, startGame]);

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
      correct = answerId === currentQuestion.correctAnswerId;
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

  const handleGameComplete = () => {
    playComplete();
    addScore(gameState.score);
    recordGamePlayed(game.id, gameState.score, getStars());
  };

  const handlePlayAgain = () => {
    startGame(game);
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  // Show completion screen
  if (gameState.isComplete) {
    return (
      <GameComplete
        score={gameState.score}
        maxScore={game.questions.length * 16}
        stars={getStars()}
        onPlayAgain={handlePlayAgain}
        onGoHome={handleGoHome}
        onComplete={handleGameComplete}
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

    if (game.id === 'count-animals' || game.id === 'count-shapes') {
      return <CountingQuestion {...commonProps} />;
    } else if (game.id === 'shadow-match') {
      return <ShadowQuestion {...commonProps} />;
    } else {
      return <SelectionQuestion {...commonProps} />;
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
            total={game.questions.length}
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

import { createContext, useContext, useState, useCallback } from 'react';

const GameContext = createContext(null);

const initialGameState = {
  currentGame: null,
  currentQuestionIndex: 0,
  score: 0,
  attempts: 0,
  maxScore: 16,
  answers: [],
  isComplete: false,
  isPaused: false,
};

export function GameProvider({ children }) {
  const [gameState, setGameState] = useState(initialGameState);

  const startGame = useCallback((game) => {
    setGameState({
      ...initialGameState,
      currentGame: game,
    });
  }, []);

  const submitAnswer = useCallback((isCorrect) => {
    setGameState(prev => {
      const attempts = prev.attempts + 1;

      if (isCorrect) {
        // Calculate score based on attempts
        // Attempt 1: 16, Attempt 2: 8, Attempt 3: 4, Attempt 4: 2, Attempt 5+: 1
        let pointsEarned;
        switch (attempts) {
          case 1: pointsEarned = 16; break;
          case 2: pointsEarned = 8; break;
          case 3: pointsEarned = 4; break;
          case 4: pointsEarned = 2; break;
          default: pointsEarned = 1;
        }

        const newAnswers = [...prev.answers, {
          questionIndex: prev.currentQuestionIndex,
          attempts,
          pointsEarned,
          correct: true,
        }];

        const isLastQuestion = prev.currentQuestionIndex >= prev.currentGame.questions.length - 1;

        return {
          ...prev,
          score: prev.score + pointsEarned,
          attempts: 0,
          answers: newAnswers,
          currentQuestionIndex: isLastQuestion ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
          isComplete: isLastQuestion,
        };
      } else {
        // Wrong answer - just increment attempts
        return {
          ...prev,
          attempts,
        };
      }
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setGameState(prev => {
      if (prev.currentQuestionIndex < prev.currentGame.questions.length - 1) {
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          attempts: 0,
        };
      }
      return { ...prev, isComplete: true };
    });
  }, []);

  const pauseGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: true }));
  }, []);

  const resumeGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: false }));
  }, []);

  const endGame = useCallback(() => {
    setGameState(initialGameState);
  }, []);

  const getCurrentQuestion = useCallback(() => {
    if (!gameState.currentGame) return null;
    return gameState.currentGame.questions[gameState.currentQuestionIndex];
  }, [gameState.currentGame, gameState.currentQuestionIndex]);

  const getProgress = useCallback(() => {
    if (!gameState.currentGame) return 0;
    return ((gameState.currentQuestionIndex + 1) / gameState.currentGame.questions.length) * 100;
  }, [gameState.currentGame, gameState.currentQuestionIndex]);

  const getMaxPossibleScore = useCallback(() => {
    if (!gameState.currentGame) return 0;
    return gameState.currentGame.questions.length * 16;
  }, [gameState.currentGame]);

  const getStars = useCallback(() => {
    const maxScore = getMaxPossibleScore();
    if (maxScore === 0) return 0;
    const percentage = (gameState.score / maxScore) * 100;
    if (percentage >= 90) return 3;
    if (percentage >= 60) return 2;
    if (percentage >= 30) return 1;
    return 0;
  }, [gameState.score, getMaxPossibleScore]);

  const value = {
    gameState,
    startGame,
    submitAnswer,
    nextQuestion,
    pauseGame,
    resumeGame,
    endGame,
    getCurrentQuestion,
    getProgress,
    getMaxPossibleScore,
    getStars,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

export default GameContext;

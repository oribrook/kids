// Games index - exports all games with difficulty-aware helpers
// Letter games only - organized by letter groups

// Category: אבגדה (letters-alef-he)
import learnAlef from './learnAlef';
import learnBet from './learnBet';
import learnGimel from './learnGimel';
import learnDalet from './learnDalet';
import learnHe from './learnHe';
import quizAlefHe from './quizAlefHe';

// Category: וזחטי (letters-vav-yod)
import learnVav from './learnVav';
import learnZayin from './learnZayin';
import learnChet from './learnChet';
import learnTet from './learnTet';

// All games registry
export const games = {
  // Category: אבגדה
  'learn-alef': learnAlef,
  'learn-bet': learnBet,
  'learn-gimel': learnGimel,
  'learn-dalet': learnDalet,
  'learn-he': learnHe,
  'quiz-alef-he': quizAlefHe,
  // Category: וזחטי
  'learn-vav': learnVav,
  'learn-zayin': learnZayin,
  'learn-chet': learnChet,
  'learn-tet': learnTet,
};

// Game type constants
export const GAME_TYPES = {
  STANDARD: 'standard',
  TIMED: 'timed',
  MEMORY: 'memory',
};

/**
 * Get a single game by ID
 */
export const getGameById = (id) => {
  return games[id] || null;
};

/**
 * Get games filtered by category and difficulty
 * @param {string} categoryId - Category to filter by
 * @param {string} difficulty - Current difficulty level ('easy', 'medium', 'hard')
 * @returns {Array} Games available for this category and difficulty
 */
export const getGamesByCategory = (categoryId, difficulty = 'easy') => {
  return Object.values(games).filter(game => {
    // Must match category
    if (game.categoryId !== categoryId) return false;
    // Must be available in current difficulty
    if (!game.availableIn.includes(difficulty)) return false;
    return true;
  });
};

/**
 * Get questions for a game based on difficulty
 * @param {object} game - The game object
 * @param {string} difficulty - Current difficulty level
 * @returns {Array} Questions for this difficulty
 */
export const getQuestionsForDifficulty = (game, difficulty = 'easy') => {
  if (!game || !game.questions) return [];

  // If questions is already an array (legacy format), return it
  if (Array.isArray(game.questions)) {
    return game.questions;
  }

  // New format: questions organized by difficulty
  return game.questions[difficulty] || game.questions.easy || [];
};

/**
 * Get all games available for a specific difficulty
 * @param {string} difficulty - Current difficulty level
 * @returns {Array} All games available for this difficulty
 */
export const getGamesForDifficulty = (difficulty = 'easy') => {
  return Object.values(games).filter(game =>
    game.availableIn.includes(difficulty)
  );
};

/**
 * Get games by game type (standard, timed, memory)
 * @param {string} gameType - Type of game
 * @param {string} difficulty - Current difficulty level
 * @returns {Array} Games of this type available for this difficulty
 */
export const getGamesByType = (gameType, difficulty = 'easy') => {
  return Object.values(games).filter(game =>
    game.gameType === gameType && game.availableIn.includes(difficulty)
  );
};

/**
 * Check if a game is available for a specific difficulty
 * @param {string} gameId - Game ID
 * @param {string} difficulty - Difficulty level
 * @returns {boolean}
 */
export const isGameAvailableForDifficulty = (gameId, difficulty) => {
  const game = games[gameId];
  if (!game) return false;
  return game.availableIn.includes(difficulty);
};

/**
 * Get game metadata for display (name, icon, question count for difficulty)
 * @param {string} gameId - Game ID
 * @param {string} difficulty - Current difficulty level
 * @returns {object} Game display info
 */
export const getGameDisplayInfo = (gameId, difficulty = 'easy') => {
  const game = games[gameId];
  if (!game) return null;

  const questions = getQuestionsForDifficulty(game, difficulty);

  return {
    id: game.id,
    name: game.name,
    description: game.description,
    icon: game.icon,
    categoryId: game.categoryId,
    gameType: game.gameType,
    questionCount: questions.length,
    maxScore: questions.length * 16, // Max score if all first-try correct
  };
};

export default games;

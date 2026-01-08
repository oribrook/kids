// Games index - Letter games only, organized by letter groups

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
import learnYod from './learnYod';
import quizVavYod from './quizVavYod';

// Category: כלמנס (letters-kaf-samech)
import learnKaf from './learnKaf';
import learnLamed from './learnLamed';
import learnMem from './learnMem';
import learnNun from './learnNun';
import learnSamech from './learnSamech';

// Category: עפצקר (letters-ayin-resh)
import learnAyin from './learnAyin';
import learnPeh from './learnPeh';
import learnTsade from './learnTsade';
import learnKof from './learnKof';
import learnResh from './learnResh';

// Category: שת (letters-shin-tav) - final letters
import learnShin from './learnShin';
import learnTav from './learnTav';

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
  'learn-yod': learnYod,
  'quiz-vav-yod': quizVavYod,
  // Category: כלמנס
  'learn-kaf': learnKaf,
  'learn-lamed': learnLamed,
  'learn-mem': learnMem,
  'learn-nun': learnNun,
  'learn-samech': learnSamech,
  // Category: עפצקר
  'learn-ayin': learnAyin,
  'learn-peh': learnPeh,
  'learn-tsade': learnTsade,
  'learn-kof': learnKof,
  'learn-resh': learnResh,
  // Category: שת
  'learn-shin': learnShin,
  'learn-tav': learnTav,
};

/**
 * Get a single game by ID
 */
export const getGameById = (id) => {
  return games[id] || null;
};

/**
 * Get games filtered by category
 * @param {string} categoryId - Category to filter by
 * @returns {Array} Games available for this category
 */
export const getGamesByCategory = (categoryId) => {
  return Object.values(games).filter(game => game.categoryId === categoryId);
};

/**
 * Get questions for a game (easy difficulty)
 * @param {object} game - The game object
 * @returns {Array} Questions for the game
 */
export const getQuestionsForDifficulty = (game) => {
  if (!game || !game.questions) return [];

  // If questions is already an array (legacy format), return it
  if (Array.isArray(game.questions)) {
    return game.questions;
  }

  // New format: questions organized by difficulty - always use easy
  return game.questions.easy || [];
};

/**
 * Get game metadata for display
 * @param {string} gameId - Game ID
 * @returns {object} Game display info
 */
export const getGameDisplayInfo = (gameId) => {
  const game = games[gameId];
  if (!game) return null;

  const questions = getQuestionsForDifficulty(game);

  return {
    id: game.id,
    name: game.name,
    description: game.description,
    icon: game.icon,
    categoryId: game.categoryId,
    questionCount: questions.length,
    maxScore: questions.length * 16,
  };
};

export default games;

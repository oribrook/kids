// Single game registry: id -> game definition.
// Lesson groups (question engine) live in ./lessons/<group>/index.js, standalone games in ../games/defs.js.
// Imports only data - no React, no CSS - so plain tooling (scripts/dump-registry.mjs) can load it.
import heLetters from './lessons/he-letters';
import enLetters from './lessons/en-letters';
import arLetters from './lessons/ar-letters';
import heNikud from './lessons/he-nikud';
import audioObjects from './lessons/audio-objects';
import numbers from './lessons/numbers';
import { standaloneGameDefs } from '../games/defs';

// Only the order inside one category is visible (Category page filters by categoryId);
// every category is contiguous inside one group array.
const all = [
  ...heLetters,
  ...enLetters,
  ...arLetters,
  ...heNikud,
  ...standaloneGameDefs,
  ...audioObjects,
  ...numbers,
];

export const games = Object.fromEntries(all.map((game) => [game.id, game]));

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

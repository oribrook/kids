// Games index - exports all games
import countAnimals from './countAnimals';
import countShapes from './countShapes';
import findColor from './findColor';
import shadowMatch from './shadowMatch';
import whatsDifferent from './whatsDifferent';
import completePattern from './completePattern';
import matchPairs from './matchPairs';

export const games = {
  'count-animals': countAnimals,
  'count-shapes': countShapes,
  'find-color': findColor,
  'shadow-match': shadowMatch,
  'whats-different': whatsDifferent,
  'complete-pattern': completePattern,
  'match-pairs': matchPairs,
};

export const getGameById = (id) => {
  return games[id] || null;
};

export const getGamesByCategory = (categoryId) => {
  return Object.values(games).filter(game => game.categoryId === categoryId);
};

export default games;

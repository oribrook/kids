// Pure data (no React/CSS imports) - definitions of the standalone games.
// Order = order on the Category page inside each category.
import { memoryHebrewLetters, memoryObjects } from './memory-cards/games';
import drawingBoard from './drawing-board/game';
import storyDraw from './story-draw/game';
import { mazeGame, mazeGame2, mazeGame3 } from './maze/games';
import brickBreaker from './brick-breaker/game';
import templeRun from './temple-run/game';
import balloonPop from './balloon-pop/game';
import fastBalloon from './fast-balloon/game';
import simonSays from './simon-says/game';
import sortGame from './sort/game';
import photoWords from './photo-words/game';
import mathGame from './math/game';

export const standaloneGameDefs = [
  memoryHebrewLetters,
  memoryObjects,
  drawingBoard,
  storyDraw,
  mazeGame,
  mazeGame2,
  mazeGame3,
  brickBreaker,
  templeRun,
  balloonPop,
  fastBalloon,
  simonSays,
  sortGame,
  photoWords,
  mathGame,
];

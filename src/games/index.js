import MemoryCardGame from './memory-cards/MemoryCardGame';
import DrawingBoard from './drawing-board/DrawingBoard';
import StoryDraw from './story-draw/StoryDraw';
import MazeGame from './maze/MazeGame';
import BrickBreaker from './brick-breaker/BrickBreaker';
import TempleRun from './temple-run/TempleRun';
import BalloonPop from './balloon-pop/BalloonPop';
import FastBalloon from './fast-balloon/FastBalloon';
import SimonSays from './simon-says/SimonSays';
import SortGame from './sort/SortGame';
import PhotoWordGame from './photo-words/PhotoWordGame';
import MathGame from './math/MathGame';

// gameType -> component. Standalone games manage their own flow (no question engine).
// Adding a standalone game: new folder here + one line in this map + its def in defs.js.
export const STANDALONE_GAMES = {
  memoryCard: MemoryCardGame,
  drawingBoard: DrawingBoard,
  storyDraw: StoryDraw,
  mazeGame: MazeGame,
  brickBreaker: BrickBreaker,
  templeRun: TempleRun,
  balloonPop: BalloonPop,
  fastBalloon: FastBalloon,
  simonSays: SimonSays,
  sortGame: SortGame,
  photoWord: PhotoWordGame,
  mathGame: MathGame,
};

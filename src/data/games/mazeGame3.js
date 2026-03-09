// Game: Maze 3 (מבוך 3) - Hard difficulty
// Category: toddler-maze
// Type: mazeGame - draw-your-path maze game, hardest level

const mazeGame3 = {
  id: 'maze-game-3',
  categoryId: 'toddler-maze',
  name: 'מבוך 3',
  description: 'מבוך למתקדמים!',
  icon: '🧩',
  type: 'selection',
  gameType: 'mazeGame',
  availableIn: ['easy'],
  mazeConfig: { cols: 10, rows: 13, wallWidth: 2 },
  questions: { easy: [] },
};

export default mazeGame3;

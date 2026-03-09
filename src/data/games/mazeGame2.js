// Game: Maze 2 (מבוך 2) - Medium difficulty
// Category: toddler-maze
// Type: mazeGame - draw-your-path maze game, harder than maze 1

const mazeGame2 = {
  id: 'maze-game-2',
  categoryId: 'toddler-maze',
  name: 'מבוך 2',
  description: 'מבוך קצת יותר קשה!',
  icon: '🧩',
  type: 'selection',
  gameType: 'mazeGame',
  availableIn: ['easy'],
  mazeConfig: { cols: 8, rows: 10, wallWidth: 2.5 },
  questions: { easy: [] },
};

export default mazeGame2;

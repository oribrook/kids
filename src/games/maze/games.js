// Game: Maze (מבוך)
// Category: toddler-maze
// Type: mazeGame - draw-your-path maze game for toddlers
// No scoring/disqualification - just draw the path through the maze

export const mazeGame = {
  id: 'maze-game',
  categoryId: 'toddler-maze',
  name: 'מבוך',
  description: 'מצאו את הדרך החוצה!',
  icon: '🧩',
  type: 'selection',
  gameType: 'mazeGame',
  availableIn: ['easy'],
  // No questions - this game type manages its own flow
  questions: { easy: [] },
};

// Game: Maze 2 (מבוך 2) - Medium difficulty
// Category: toddler-maze
// Type: mazeGame - draw-your-path maze game, harder than maze 1

export const mazeGame2 = {
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

// Game: Maze 3 (מבוך 3) - Hard difficulty
// Category: toddler-maze
// Type: mazeGame - draw-your-path maze game, hardest level

export const mazeGame3 = {
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

// Game: Maze (מבוך)
// Category: toddler-maze
// Type: mazeGame - draw-your-path maze game for toddlers
// No scoring/disqualification - just draw the path through the maze

const mazeGame = {
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

export default mazeGame;

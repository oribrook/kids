// Game: Drawing Board (לוח ציור)
// Category: toddler-drawing
// Type: drawingBoard - free-play canvas drawing game
// No questions/scoring - pure creative play for toddlers

const drawingBoard = {
  id: 'drawing-board',
  categoryId: 'toddler-drawing',
  name: 'לוח ציור',
  description: 'ציירו מה שבא לכם!',
  icon: '🎨',
  type: 'selection',
  gameType: 'drawingBoard',
  availableIn: ['easy'],
  // No questions - this game type manages its own flow
  questions: { easy: [] },
};

export default drawingBoard;

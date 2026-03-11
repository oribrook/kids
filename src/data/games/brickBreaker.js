// Game: Brick Breaker (שבירת לבנים)
// Category: brick-breaker
// Type: brickBreaker - standalone arcade game
// Simple brick breaker for toddlers. Touch-drag paddle, break all bricks.
// No lives/game-over - ball respawns. Speed control (very slow default).
// Forced landscape orientation.

const brickBreaker = {
  id: 'brick-breaker',
  categoryId: 'brick-breaker',
  name: 'שבירת לבנים',
  description: 'שברו את כל הלבנים!',
  icon: '🧱',
  type: 'selection',
  gameType: 'brickBreaker',
  availableIn: ['easy'],
  // No questions array - this game type manages its own flow
  questions: { easy: [] },
};

export default brickBreaker;

// Game: Sort Game (סדרו בסדר!)
// Category: sort-game
// Type: sortGame - standalone sorting/ordering game
// Drag items to sort them in order.
// Numbers mode: sort numbers (easy 1-5, medium 1-10 with gaps, hard 1-100 single digits + round, very hard 1-100)
// Letters mode: sort Hebrew letters in alphabetical order

const sortGame = {
  id: 'sort-game',
  categoryId: 'sort-game',
  name: 'סדרו בסדר!',
  description: 'סדרו מספרים ואותיות!',
  icon: '🔢',
  type: 'selection',
  gameType: 'sortGame',
  availableIn: ['easy'],
  questions: { easy: [] },
};

export default sortGame;

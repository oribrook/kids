// Game: Simon Says (שמעון אומר)
// Category: simon-says
// Type: simonSays - standalone memory/pattern game
// Classic color sequence memory game for toddlers.
// 4 colored buttons, shows a sequence, kid repeats it.
// Sequence gets longer each round.

const simonSays = {
  id: 'simon-says',
  categoryId: 'simon-says',
  name: 'שמעון אומר',
  description: 'זכרו את הסדר!',
  icon: '🔴',
  type: 'selection',
  gameType: 'simonSays',
  availableIn: ['easy'],
  questions: { easy: [] },
};

export default simonSays;

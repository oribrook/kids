// Game: Fast Balloon (בלון מהיר!)
// Category: fast-balloon
// Type: fastBalloon - standalone arcade game
// Endless balloon popping: starts slow, speeds up forever.
// Bombs must not be touched, missed balloons cost lives,
// every 5 pops earns a life back. Game over when hearts run out.

const fastBalloon = {
  id: 'fast-balloon',
  categoryId: 'fast-balloon',
  name: 'בלון מהיר!',
  description: 'פוצצו הכל - אבל אל תגעו בפצצות!',
  icon: '⚡',
  type: 'selection',
  gameType: 'fastBalloon',
  availableIn: ['easy'],
  questions: { easy: [] },
};

export default fastBalloon;

// Game: Plus & Minus (חיבור וחיסור)
// Category: math-plus-minus
// Type: mathGame - standalone, random "x + y = ?" / "x − y = ?" questions.
// The level sets the possible y values. Every number shown stays in 0..maxResult.

const mathGame = {
  id: 'math-plus-minus',
  categoryId: 'math-plus-minus',
  name: 'חיבור וחיסור',
  description: 'פתרו תרגילי חשבון!',
  icon: '➕',
  type: 'selection',
  gameType: 'mathGame',
  availableIn: ['easy'],
  questions: { easy: [] },
  levels: [
    { id: 'easy', label: 'מתחיל', emoji: '🐣', yValues: [1, 2] },
    { id: 'medium', label: 'בינוני', emoji: '🐥', yValues: [2, 3] },
    { id: 'hard', label: 'קשה', emoji: '🐔', yValues: [3, 4] },
  ],
  maxResult: 30,
  questionsPerRound: 10,
};

export default mathGame;

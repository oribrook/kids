// Game: Memory Card Game - Hebrew Letters (משחק זיכרון - אותיות עברית)
// Category: memory-hebrew-letters
// Type: memoryCard - classic flip-and-match memory game
// Player picks grid size (4x4 or 6x6), then flips cards to find matching pairs.
// Each card flip plays the letter name audio.

import { hebrewLetters } from '../hebrewLetterBank';

const memoryHebrewLetters = {
  id: 'memory-hebrew-letters',
  categoryId: 'memory-hebrew-letters',
  name: 'זיכרון אותיות',
  description: 'משחק זיכרון - מצאו זוגות של אותיות',
  icon: '🧠',
  type: 'selection',
  gameType: 'memoryCard',
  availableIn: ['easy'],
  gridSizes: [
    { size: 16, label: '4×4', pairs: 8 },
    { size: 36, label: '6×6', pairs: 18 },
  ],
  itemPool: hebrewLetters, // 22 standard letters (no sofit - too similar visually)
  // No questions array - this game type manages its own flow
  questions: { easy: [] },
};

export default memoryHebrewLetters;

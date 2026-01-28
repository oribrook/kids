// Game: Learn the Letter S
// Category: English Letters (QRST)
// Type: Standard selection - introduction to the letter S with various question types
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, letter names in English
// Reuses existing Hebrew ס images where possible (sus=horse, sefer=book, sabon=soap, sira=boat)

const learnS = {
  id: 'learn-s',
  categoryId: 'letters-qrst',
  name: 'S',
  description: 'למדו את האות S',
  icon: 'S',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with S
      {
        id: 'ls-en-e1',
        instruction: 'זוהי האות S. המילים הבאות מתחילות באות S',
        instructionAudio: '/audio/en/intro-s.mp3',
        questionImage: 'letter-S',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-sun', label: 'Sun', isCorrect: true, optionAudio: '/audio/en/word-sun.mp3' },
          { id: 'opt-2', image: 'word-nachash', label: 'Snake', isCorrect: true, optionAudio: '/audio/en/word-snake.mp3' },
          { id: 'opt-3', image: 'word-kochav', label: 'Star', isCorrect: true, optionAudio: '/audio/en/word-star.mp3' },
        ],
      },
      // Question 2: Select all S letters from 3x3 grid
      {
        id: 'ls-en-e2',
        instruction: 'בחרו את כל האותיות S',
        instructionAudio: '/audio/en/select-all-s.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-2', image: 'letter-Z', label: 'Z' },
          { id: 'opt-3', image: 'letter-C', label: 'C' },
          { id: 'opt-4', image: 'letter-R', label: 'R' },
          { id: 'opt-5', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-6', image: 'letter-Q', label: 'Q' },
          { id: 'opt-7', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-8', image: 'letter-P', label: 'P' },
          { id: 'opt-9', image: 'letter-Z', label: 'Z' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 6 random letters
      {
        id: 'ls-en-e3',
        instruction: 'מצאו את האות S',
        instructionAudio: '/audio/en/find-s.mp3',
        options: [
          { id: 'opt-1', image: 'letter-Z', label: 'Z' },
          { id: 'opt-2', image: 'letter-C', label: 'C' },
          { id: 'opt-3', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-4', image: 'letter-O', label: 'O' },
          { id: 'opt-5', image: 'letter-Q', label: 'Q' },
          { id: 'opt-6', image: 'letter-R', label: 'R' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 4: Click on the item that starts with S - using Sun
      {
        id: 'ls-en-e4',
        instruction: 'איזו מילה מתחילה באות S?',
        instructionAudio: '/audio/en/word-starts-s.mp3',
        options: [
          { id: 'opt-1', image: 'word-sun', label: 'Sun', isCorrect: true },
          { id: 'opt-2', image: 'word-rabbit', label: 'Rabbit' },
          { id: 'opt-3', image: 'word-queen', label: 'Queen' },
          { id: 'opt-4', image: 'word-pig', label: 'Pig' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Review previous letter - Find letter R
      {
        id: 'ls-en-e5',
        instruction: 'מצאו את האות R',
        instructionAudio: '/audio/en/find-r.mp3',
        options: [
          { id: 'opt-1', image: 'letter-S', label: 'S' },
          { id: 'opt-2', image: 'letter-P', label: 'P' },
          { id: 'opt-3', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-K', label: 'K' },
          { id: 'opt-6', image: 'letter-Q', label: 'Q' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Click on another item that starts with S - using Star
      {
        id: 'ls-en-e6',
        instruction: 'איזו מילה מתחילה באות S?',
        instructionAudio: '/audio/en/word-starts-s.mp3',
        options: [
          { id: 'opt-1', image: 'word-rainbow', label: 'Rainbow' },
          { id: 'opt-2', image: 'word-kochav', label: 'Star', isCorrect: true },
          { id: 'opt-3', image: 'word-quilt', label: 'Quilt' },
          { id: 'opt-4', image: 'word-pizza', label: 'Pizza' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Find the letter shape among 6 letters (different set)
      {
        id: 'ls-en-e7',
        instruction: 'מצאו את האות S',
        instructionAudio: '/audio/en/find-s.mp3',
        options: [
          { id: 'opt-1', image: 'letter-Q', label: 'Q' },
          { id: 'opt-2', image: 'letter-R', label: 'R' },
          { id: 'opt-3', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-4', image: 'letter-T', label: 'T' },
          { id: 'opt-5', image: 'letter-Z', label: 'Z' },
          { id: 'opt-6', image: 'letter-C', label: 'C' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 8: MULTI-SELECT - Mark last 4 letters P, Q, R, S
      {
        id: 'ls-en-e8',
        instruction: 'סמנו את כל האותיות P, Q, R ו-S',
        instructionAudio: '/audio/en/mark-all-p-q-r-s.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-2', image: 'letter-A', label: 'A' },
          { id: 'opt-3', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-4', image: 'letter-B', label: 'B' },
          { id: 'opt-5', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-6', image: 'letter-P', label: 'P', isCorrect: true },
          { id: 'opt-7', image: 'letter-C', label: 'C' },
          { id: 'opt-8', image: 'letter-S', label: 'S', isCorrect: true },
          { id: 'opt-9', image: 'letter-Q', label: 'Q', isCorrect: true },
          { id: 'opt-10', image: 'letter-T', label: 'T' },
          { id: 'opt-11', image: 'letter-R', label: 'R', isCorrect: true },
          { id: 'opt-12', image: 'letter-S', label: 'S', isCorrect: true },
        ],
        correctCount: 8,
      },
    ],
  },
};

export default learnS;

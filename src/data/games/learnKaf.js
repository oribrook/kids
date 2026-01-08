// Game: Learn the Letter Kaf (כ)
// Category: Letters כלמנס
// Type: Standard selection - introduction to the letter כ with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnKaf = {
  id: 'learn-kaf',
  categoryId: 'letters-kaf-samech',
  name: 'כ',
  description: 'למדו את האות כ',
  icon: 'כ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with כ
      {
        id: 'lk-e1',
        instruction: 'זוהי האות כ. המילים הבאות מתחילות באות כ',
        instructionAudio: '/audio/intro-kaf.mp3',
        questionImage: 'letter-kaf',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-kadur', label: 'כדור', isCorrect: true, optionAudio: '/audio/word-kadur.mp3' },
          { id: 'opt-2', image: 'word-kelev', label: 'כלב', isCorrect: true, optionAudio: '/audio/word-kelev.mp3' },
          { id: 'opt-3', image: 'word-kochav', label: 'כוכב', isCorrect: true, optionAudio: '/audio/word-kochav.mp3' },
          { id: 'opt-4', image: 'word-kova', label: 'כובע', isCorrect: true, optionAudio: '/audio/word-kova.mp3' },
        ],
      },
      // Question 2: Select all כ letters from mix of כ and ב
      {
        id: 'lk-e2',
        instruction: 'בחרו את כל האותיות כ',
        instructionAudio: '/audio/select-all-kaf.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-5', image: 'letter-bet', label: 'ב' },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-7', image: 'letter-bet', label: 'ב' },
          { id: 'opt-8', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-9', image: 'letter-bet', label: 'ב' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all כ letters from 3x3 grid (various letters)
      {
        id: 'lk-e3',
        instruction: 'בחרו את כל האותיות כ',
        instructionAudio: '/audio/select-all-kaf.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lk-e4',
        instruction: 'מצאו את האות כ',
        instructionAudio: '/audio/find-kaf.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with כ
      {
        id: 'lk-e5',
        instruction: 'איזו מילה מתחילה באות כ?',
        instructionAudio: '/audio/word-starts-kaf.mp3',
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lk-e6',
        instruction: 'מצאו את האות כ',
        instructionAudio: '/audio/find-kaf.mp3',
        options: [
          { id: 'opt-1', image: 'letter-chet', label: 'ח' },
          { id: 'opt-2', image: 'letter-tet', label: 'ט' },
          { id: 'opt-3', image: 'letter-yod', label: 'י' },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 7: Find another word starting with כ
      {
        id: 'lk-e7',
        instruction: 'איזו מילה מתחילה באות כ?',
        instructionAudio: '/audio/word-starts-kaf.mp3',
        options: [
          { id: 'opt-1', image: 'word-kochav', label: 'כוכב', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters ח, ט, י, כ
      {
        id: 'lk-e8',
        instruction: 'סמנו את כל האותיות ח, ט, י, כ',
        instructionAudio: '/audio/mark-all-chet-to-kaf.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-6', image: 'letter-nun', label: 'נ' },
          { id: 'opt-7', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-8', image: 'letter-samech', label: 'ס' },
          { id: 'opt-9', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-10', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-kaf', label: 'כ', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnKaf;

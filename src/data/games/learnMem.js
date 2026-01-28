// Game: Learn the Letter Mem (מ)
// Category: Letters כלמנס
// Type: Standard selection - introduction to the letter מ with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnMem = {
  id: 'learn-mem',
  categoryId: 'letters-kaf-samech',
  name: 'מ',
  description: 'למדו את האות מ',
  icon: 'מ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with מ
      {
        id: 'lm-e1',
        instruction: 'זוהי האות מ. המילים הבאות מתחילות באות מ',
        instructionAudio: '/audio/intro-mem.mp3',
        questionImage: 'letter-mem',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-melafafon', label: 'מלפפון', isCorrect: true, optionAudio: '/audio/word-melafafon.mp3' },
          { id: 'opt-2', image: 'word-marak', label: 'מרק', isCorrect: true, optionAudio: '/audio/word-marak.mp3' },
          { id: 'opt-3', image: 'word-madregot', label: 'מדרגות', isCorrect: true, optionAudio: '/audio/word-madregot.mp3' },
          { id: 'opt-4', image: 'word-milky', label: 'מילקי', isCorrect: true, optionAudio: '/audio/word-milky.mp3' },
        ],
      },
      // Question 2: Select all מ letters from mix of מ and נ
      {
        id: 'lm-e2',
        instruction: 'בחרו את כל האותיות מ',
        instructionAudio: '/audio/select-all-mem.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-nun', label: 'נ' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-7', image: 'letter-nun', label: 'נ' },
          { id: 'opt-8', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all מ letters from 3x3 grid (various letters)
      {
        id: 'lm-e3',
        instruction: 'בחרו את כל האותיות מ',
        instructionAudio: '/audio/select-all-mem.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lm-e4',
        instruction: 'מצאו את האות מ',
        instructionAudio: '/audio/find-mem.mp3',
        options: [
          { id: 'opt-1', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-samech', label: 'ס' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with מ (using מזלג)
      {
        id: 'lm-e5',
        instruction: 'איזו מילה מתחילה באות מ?',
        instructionAudio: '/audio/word-starts-mem.mp3',
        options: [
          { id: 'opt-1', image: 'word-mazleg', label: 'מזלג', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-lev', label: 'לב' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lm-e6',
        instruction: 'מצאו את האות מ',
        instructionAudio: '/audio/find-mem.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tet', label: 'ט' },
          { id: 'opt-2', image: 'letter-yod', label: 'י' },
          { id: 'opt-3', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-4', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-5', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-6', image: 'letter-nun', label: 'נ' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 7: Find another word starting with מ (using מיטה)
      {
        id: 'lm-e7',
        instruction: 'איזו מילה מתחילה באות מ?',
        instructionAudio: '/audio/word-starts-mem.mp3',
        options: [
          { id: 'opt-1', image: 'word-mita', label: 'מיטה', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-limon', label: 'לימון' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Review - find previous letter ל
      {
        id: 'lm-e8',
        instruction: 'מצאו את האות ל',
        instructionAudio: '/audio/find-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 9: Review - find letter כ (two before)
      {
        id: 'lm-e9',
        instruction: 'מצאו את האות כ',
        instructionAudio: '/audio/find-kaf.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-bet', label: 'ב' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-6', image: 'letter-yod', label: 'י' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 10: Multi-select - mark last 4 letters י, כ, ל, מ
      {
        id: 'lm-e10',
        instruction: 'סמנו את כל האותיות י, כ, ל, מ',
        instructionAudio: '/audio/mark-all-yod-to-mem.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-nun', label: 'נ' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-samech', label: 'ס' },
          { id: 'opt-5', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-6', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-7', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-8', image: 'letter-peh', label: 'פ' },
          { id: 'opt-9', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-10', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-mem', label: 'מ', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnMem;

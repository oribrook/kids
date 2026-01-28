// Game: Learn the Letter Samech (ס)
// Category: Letters כלמנס
// Type: Standard selection - introduction to the letter ס with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnSamech = {
  id: 'learn-samech',
  categoryId: 'letters-kaf-samech',
  name: 'ס',
  description: 'למדו את האות ס',
  icon: 'ס',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ס
      {
        id: 'ls-e1',
        instruction: 'זוהי האות ס. המילים הבאות מתחילות באות ס',
        instructionAudio: '/audio/intro-samech.mp3',
        questionImage: 'letter-samech',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'סוס', isCorrect: true, optionAudio: '/audio/word-sus.mp3' },
          { id: 'opt-2', image: 'word-sefer', label: 'ספר', isCorrect: true, optionAudio: '/audio/word-sefer.mp3' },
          { id: 'opt-3', image: 'word-sabon', label: 'סבון', isCorrect: true, optionAudio: '/audio/word-sabon.mp3' },
          { id: 'opt-4', image: 'word-sira', label: 'סירה', isCorrect: true, optionAudio: '/audio/word-sira.mp3' },
        ],
      },
      // Question 2: Select all ס letters from mix of ס and ע
      {
        id: 'ls-e2',
        instruction: 'בחרו את כל האותיות ס',
        instructionAudio: '/audio/select-all-samech.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-3', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-4', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-5', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-6', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-7', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-8', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-9', image: 'letter-ayin', label: 'ע' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ס letters from 3x3 grid (various letters)
      {
        id: 'ls-e3',
        instruction: 'בחרו את כל האותיות ס',
        instructionAudio: '/audio/select-all-samech.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'ls-e4',
        instruction: 'מצאו את האות ס',
        instructionAudio: '/audio/find-samech.mp3',
        options: [
          { id: 'opt-1', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-2', image: 'letter-nun', label: 'נ' },
          { id: 'opt-3', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-4', image: 'letter-peh', label: 'פ' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ס (using סלט)
      {
        id: 'ls-e5',
        instruction: 'איזו מילה מתחילה באות ס?',
        instructionAudio: '/audio/word-starts-samech.mp3',
        options: [
          { id: 'opt-1', image: 'word-salat', label: 'סלט', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-naal', label: 'נעל' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'ls-e6',
        instruction: 'מצאו את האות ס',
        instructionAudio: '/audio/find-samech.mp3',
        options: [
          { id: 'opt-1', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-5', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 7: Find another word starting with ס (using סנדל)
      {
        id: 'ls-e7',
        instruction: 'איזו מילה מתחילה באות ס?',
        instructionAudio: '/audio/word-starts-samech.mp3',
        options: [
          { id: 'opt-1', image: 'word-sandal', label: 'סנדל', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-nachash', label: 'נחש' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Review - find previous letter נ
      {
        id: 'ls-e8',
        instruction: 'מצאו את האות נ',
        instructionAudio: '/audio/find-nun.mp3',
        options: [
          { id: 'opt-1', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-2', image: 'letter-samech', label: 'ס' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 9: Review - find letter מ (two before)
      {
        id: 'ls-e9',
        instruction: 'מצאו את האות מ',
        instructionAudio: '/audio/find-mem.mp3',
        options: [
          { id: 'opt-1', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-2', image: 'letter-nun', label: 'נ' },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-5', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 10: Multi-select - mark last 4 letters ל, מ, נ, ס
      {
        id: 'ls-e10',
        instruction: 'סמנו את כל האותיות ל, מ, נ, ס',
        instructionAudio: '/audio/mark-all-lamed-to-samech.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-peh', label: 'פ' },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-6', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-7', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-8', image: 'letter-kof', label: 'ק' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-10', image: 'letter-resh', label: 'ר' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-samech', label: 'ס', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnSamech;

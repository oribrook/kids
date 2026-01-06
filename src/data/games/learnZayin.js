// Game: Learn the Letter Zayin (ז)
// Category: Letters
// Type: Standard selection - introduction to the letter ז with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnZayin = {
  id: 'learn-zayin',
  categoryId: 'letters-vav-yod',
  name: 'ז',
  description: 'למדו את האות ז',
  icon: 'ז',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ז
      {
        id: 'lz-e1',
        instruction: 'זוהי האות ז. המילים הבאות מתחילות באות ז',
        instructionAudio: '/audio/intro-zayin.mp3',
        questionImage: 'letter-zayin',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-zanav', label: 'זנב', isCorrect: true, optionAudio: '/audio/word-zanav.mp3' },
          { id: 'opt-2', image: 'word-zchuchit', label: 'זכוכית', isCorrect: true, optionAudio: '/audio/word-zchuchit.mp3' },
          { id: 'opt-3', image: 'word-zeev', label: 'זאב', isCorrect: true, optionAudio: '/audio/word-zeev.mp3' },
          { id: 'opt-4', image: 'word-zebra', label: 'זברה', isCorrect: true, optionAudio: '/audio/word-zebra.mp3' },
        ],
      },
      // Question 2: Introduction - different ways to write zayin
      {
        id: 'lz-e2',
        instruction: 'הנה כמה אפשרויות לכתוב את האות ז',
        instructionAudio: '/audio/intro-zayin-options.mp3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'zayin-option-1', label: 'ז', isCorrect: true },
          { id: 'opt-2', image: 'zayin-option-2', label: 'ז', isCorrect: true },
          { id: 'opt-3', image: 'zayin-option-3', label: 'ז', isCorrect: true },
          { id: 'opt-4', image: 'zayin-option-4', label: 'ז', isCorrect: true },
          { id: 'opt-5', image: 'zayin-option-5', label: 'ז', isCorrect: true },
        ],
      },
      // Question 3: Select all ז letters from mix of ד and ז
      {
        id: 'lz-e3',
        instruction: 'בחרו את כל האותיות ז',
        instructionAudio: '/audio/select-all-zayin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-5', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-7', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-8', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-9', image: 'letter-dalet', label: 'ד' },
        ],
        correctCount: 4,
      },
      // Question 4: Select all ז letters from 3x3 grid (various letters)
      {
        id: 'lz-e4',
        instruction: 'בחרו את כל האותיות ז',
        instructionAudio: '/audio/select-all-zayin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 5: Find the letter shape among 6 random letters
      {
        id: 'lz-e5',
        instruction: 'מצאו את האות ז',
        instructionAudio: '/audio/find-zayin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-2', image: 'letter-vav', label: 'ו' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-yod', label: 'י' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Click on the item that starts with ז
      {
        id: 'lz-e6',
        instruction: 'איזו מילה מתחילה באות ז?',
        instructionAudio: '/audio/word-starts-zayin.mp3',
        options: [
          { id: 'opt-1', image: 'word-zeev', label: 'זאב', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 7: Find the letter shape among different letters
      {
        id: 'lz-e7',
        instruction: 'מצאו את האות ז',
        instructionAudio: '/audio/find-zayin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-he', label: 'ה' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו' },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז', isCorrect: true },
        ],
        correctAnswerId: 'opt-6',
      },
      // Question 8: Find another word starting with ז
      {
        id: 'lz-e8',
        instruction: 'איזו מילה מתחילה באות ז?',
        instructionAudio: '/audio/word-starts-zayin.mp3',
        options: [
          { id: 'opt-1', image: 'word-zebra', label: 'זברה', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 9: Multi-select - mark last 4 letters ד, ה, ו, ז
      {
        id: 'lz-e9',
        instruction: 'סמנו את כל האותיות ד, ה, ו, ז',
        instructionAudio: '/audio/mark-all-dalet-to-zayin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-chet', label: 'ח' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-6', image: 'letter-yod', label: 'י' },
          { id: 'opt-7', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-8', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-9', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-10', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-zayin', label: 'ז', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnZayin;

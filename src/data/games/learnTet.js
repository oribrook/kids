// Game: Learn the Letter Tet (ט)
// Category: Letters
// Type: Standard selection - introduction to the letter ט with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnTet = {
  id: 'learn-tet',
  categoryId: 'letters-vav-yod',
  name: 'ט',
  description: 'למדו את האות ט',
  icon: 'ט',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ט (5 words for intro)
      {
        id: 'lt-e1',
        instruction: 'זוהי האות ט. המילים הבאות מתחילות באות ט',
        instructionAudio: '/audio/intro-tet.mp3',
        questionImage: 'letter-tet',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-telephone', label: 'טלפון', isCorrect: true, optionAudio: '/audio/word-telephone.mp3' },
          { id: 'opt-2', image: 'word-tabaat', label: 'טבעת', isCorrect: true, optionAudio: '/audio/word-tabaat.mp3' },
          { id: 'opt-3', image: 'word-televizia', label: 'טלוויזיה', isCorrect: true, optionAudio: '/audio/word-televizia.mp3' },
          { id: 'opt-4', image: 'word-tayas', label: 'טייס', isCorrect: true, optionAudio: '/audio/word-tayas.mp3' },
          { id: 'opt-5', image: 'word-tavos', label: 'טווס', isCorrect: true, optionAudio: '/audio/word-tavos.mp3' },
        ],
      },
      // Question 2: Select all ט letters from mix of ח and ט
      {
        id: 'lt-e2',
        instruction: 'בחרו את כל האותיות ט',
        instructionAudio: '/audio/select-all-tet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-chet', label: 'ח' },
          { id: 'opt-2', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-5', image: 'letter-chet', label: 'ח' },
          { id: 'opt-6', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-7', image: 'letter-chet', label: 'ח' },
          { id: 'opt-8', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-9', image: 'letter-chet', label: 'ח' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ט letters from 3x3 grid (various letters)
      {
        id: 'lt-e3',
        instruction: 'בחרו את כל האותיות ט',
        instructionAudio: '/audio/select-all-tet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lt-e4',
        instruction: 'מצאו את האות ט',
        instructionAudio: '/audio/find-tet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ט (טיגריס)
      {
        id: 'lt-e5',
        instruction: 'איזו מילה מתחילה באות ט?',
        instructionAudio: '/audio/word-starts-tet.mp3',
        options: [
          { id: 'opt-1', image: 'word-tigris', label: 'טיגריס', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lt-e6',
        instruction: 'מצאו את האות ט',
        instructionAudio: '/audio/find-tet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-he', label: 'ה' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו' },
          { id: 'opt-6', image: 'letter-tet', label: 'ט', isCorrect: true },
        ],
        correctAnswerId: 'opt-6',
      },
      // Question 7: Find another word starting with ט (טרקטור)
      {
        id: 'lt-e7',
        instruction: 'איזו מילה מתחילה באות ט?',
        instructionAudio: '/audio/word-starts-tet.mp3',
        options: [
          { id: 'opt-1', image: 'word-traktor', label: 'טרקטור', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters ו, ז, ח, ט
      {
        id: 'lt-e8',
        instruction: 'סמנו את כל האותיות ו, ז, ח, ט',
        instructionAudio: '/audio/mark-all-vav-to-tet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-yod', label: 'י' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-7', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-8', image: 'letter-mem', label: 'מ' },
          { id: 'opt-9', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-10', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-11', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-12', image: 'letter-tet', label: 'ט', isCorrect: true },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnTet;

// Game: Learn the Letter Vav (ו)
// Category: Letters
// Type: Standard selection - introduction to the letter ו with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnVav = {
  id: 'learn-vav',
  categoryId: 'letters',
  name: 'ו',
  description: 'למדו את האות ו',
  icon: 'ו',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ו
      {
        id: 'lv-e1',
        instruction: 'זוהי האות ו. המילים הבאות מתחילות באות ו',
        instructionAudio: '/audio/intro-vav.mp3',
        questionImage: 'letter-vav',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-vilon', label: 'וילון', isCorrect: true, optionAudio: '/audio/word-vilon.mp3' },
          { id: 'opt-2', image: 'word-veterinar', label: 'ווטרינר', isCorrect: true, optionAudio: '/audio/word-veterinar.mp3' },
          { id: 'opt-3', image: 'word-vered', label: 'ורד', isCorrect: true, optionAudio: '/audio/word-vered.mp3' },
          { id: 'opt-4', image: 'word-varod', label: 'ורוד', isCorrect: true, optionAudio: '/audio/word-varod.mp3' },
          { id: 'opt-5', image: 'word-waffle', label: 'וופל', isCorrect: true, optionAudio: '/audio/word-waffle.mp3' },
        ],
      },
      // Question 2: Introduction - two ways to write vav
      {
        id: 'lv-e2',
        instruction: 'אפשר לכתוב את האות ו בשתי דרכים',
        instructionAudio: '/audio/intro-vav-two-ways.mp3',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'vav-two-ways', label: 'ו', isCorrect: true },
        ],
      },
      // Question 3: Select all ו letters from 3x3 grid
      {
        id: 'lv-e3',
        instruction: 'בחרו את כל האותיות ו',
        instructionAudio: '/audio/select-all-vav.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lv-e4',
        instruction: 'מצאו את האות ו',
        instructionAudio: '/audio/find-vav.mp3',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-yod', label: 'י' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ו
      {
        id: 'lv-e5',
        instruction: 'איזו מילה מתחילה באות ו?',
        instructionAudio: '/audio/word-starts-vav.mp3',
        options: [
          { id: 'opt-1', image: 'word-vered', label: 'ורד', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lv-e6',
        instruction: 'מצאו את האות ו',
        instructionAudio: '/audio/find-vav.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-he', label: 'ה' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 7: Find another word starting with ו
      {
        id: 'lv-e7',
        instruction: 'איזו מילה מתחילה באות ו?',
        instructionAudio: '/audio/word-starts-vav.mp3',
        options: [
          { id: 'opt-1', image: 'word-waffle', label: 'וופל', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters ג, ד, ה, ו
      {
        id: 'lv-e8',
        instruction: 'סמנו את כל האותיות ג, ד, ה, ו',
        instructionAudio: '/audio/mark-all-gimel-to-vav.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-chet', label: 'ח' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-6', image: 'letter-tet', label: 'ט' },
          { id: 'opt-7', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-8', image: 'letter-yod', label: 'י' },
          { id: 'opt-9', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-10', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-11', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-12', image: 'letter-lamed', label: 'ל' },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnVav;

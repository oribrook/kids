// Game: Learn the Letter Chet (ח)
// Category: Letters
// Type: Standard selection - introduction to the letter ח with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnChet = {
  id: 'learn-chet',
  categoryId: 'letters-vav-yod',
  name: 'ח',
  description: 'למדו את האות ח',
  icon: 'ח',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ח (4 words for intro)
      {
        id: 'lc-e1',
        instruction: 'זוהי האות ח. המילים הבאות מתחילות באות ח',
        instructionAudio: '/audio/intro-chet.mp3',
        questionImage: 'letter-chet',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-chatul', label: 'חתול', isCorrect: true, optionAudio: '/audio/word-chatul.mp3' },
          { id: 'opt-2', image: 'word-chamesh', label: 'חמש', isCorrect: true, optionAudio: '/audio/word-chamesh.mp3' },
          { id: 'opt-3', image: 'word-chevel', label: 'חבל', isCorrect: true, optionAudio: '/audio/word-chevel.mp3' },
          { id: 'opt-4', image: 'word-chagav', label: 'חגב', isCorrect: true, optionAudio: '/audio/word-chagav.mp3' },
        ],
      },
      // Question 2: Select all ח letters from mix of ה and ח
      {
        id: 'lc-e2',
        instruction: 'בחרו את כל האותיות ח',
        instructionAudio: '/audio/select-all-chet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-he', label: 'ה' },
          { id: 'opt-2', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-9', image: 'letter-he', label: 'ה' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ח letters from 3x3 grid (various letters)
      {
        id: 'lc-e3',
        instruction: 'בחרו את כל האותיות ח',
        instructionAudio: '/audio/select-all-chet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lc-e4',
        instruction: 'מצאו את האות ח',
        instructionAudio: '/audio/find-chet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-2', image: 'letter-he', label: 'ה' },
          { id: 'opt-3', image: 'letter-tav', label: 'ת' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ח (חביתה)
      {
        id: 'lc-e5',
        instruction: 'איזו מילה מתחילה באות ח?',
        instructionAudio: '/audio/word-starts-chet.mp3',
        options: [
          { id: 'opt-1', image: 'word-chavita', label: 'חביתה', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lc-e6',
        instruction: 'מצאו את האות ח',
        instructionAudio: '/audio/find-chet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-he', label: 'ה' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו' },
          { id: 'opt-6', image: 'letter-chet', label: 'ח', isCorrect: true },
        ],
        correctAnswerId: 'opt-6',
      },
      // Question 7: Find another word starting with ח (חיפושית)
      {
        id: 'lc-e7',
        instruction: 'איזו מילה מתחילה באות ח?',
        instructionAudio: '/audio/word-starts-chet.mp3',
        options: [
          { id: 'opt-1', image: 'word-chipooshit', label: 'חיפושית', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters ה, ו, ז, ח
      {
        id: 'lc-e8',
        instruction: 'סמנו את כל האותיות ה, ו, ז, ח',
        instructionAudio: '/audio/mark-all-he-to-chet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-tet', label: 'ט' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-yod', label: 'י' },
          { id: 'opt-5', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-7', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-8', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-10', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-11', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-12', image: 'letter-chet', label: 'ח', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnChet;

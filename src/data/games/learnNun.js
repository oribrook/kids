// Game: Learn the Letter Nun (נ)
// Category: Letters כלמנס
// Type: Standard selection - introduction to the letter נ with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnNun = {
  id: 'learn-nun',
  categoryId: 'letters-kaf-samech',
  name: 'נ',
  description: 'למדו את האות נ',
  icon: 'נ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with נ
      {
        id: 'ln-e1',
        instruction: 'זוהי האות נ. המילים הבאות מתחילות באות נ',
        instructionAudio: '/audio/intro-nun.mp3',
        questionImage: 'letter-nun',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-ner', label: 'נר', isCorrect: true, optionAudio: '/audio/word-ner.mp3' },
          { id: 'opt-2', image: 'word-nachash', label: 'נחש', isCorrect: true, optionAudio: '/audio/word-nachash.mp3' },
          { id: 'opt-3', image: 'word-naal', label: 'נעל', isCorrect: true, optionAudio: '/audio/word-naal.mp3' },
          { id: 'opt-4', image: 'word-namer', label: 'נמר', isCorrect: true, optionAudio: '/audio/word-namer.mp3' },
        ],
      },
      // Question 2: Select all נ letters from mix of נ and ס
      {
        id: 'ln-e2',
        instruction: 'בחרו את כל האותיות נ',
        instructionAudio: '/audio/select-all-nun.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-samech', label: 'ס' },
          { id: 'opt-2', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-7', image: 'letter-samech', label: 'ס' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-9', image: 'letter-samech', label: 'ס' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all נ letters from 3x3 grid (various letters)
      {
        id: 'ln-e3',
        instruction: 'בחרו את כל האותיות נ',
        instructionAudio: '/audio/select-all-nun.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'ln-e4',
        instruction: 'מצאו את האות נ',
        instructionAudio: '/audio/find-nun.mp3',
        options: [
          { id: 'opt-1', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with נ (using נוצה)
      {
        id: 'ln-e5',
        instruction: 'איזו מילה מתחילה באות נ?',
        instructionAudio: '/audio/word-starts-nun.mp3',
        options: [
          { id: 'opt-1', image: 'word-notza', label: 'נוצה', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-marak', label: 'מרק' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'ln-e6',
        instruction: 'מצאו את האות נ',
        instructionAudio: '/audio/find-nun.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-ayin', label: 'ע' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 7: Find another word starting with נ (using נמלה)
      {
        id: 'ln-e7',
        instruction: 'איזו מילה מתחילה באות נ?',
        instructionAudio: '/audio/word-starts-nun.mp3',
        options: [
          { id: 'opt-1', image: 'word-nemala', label: 'נמלה', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-limon', label: 'לימון' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters כ, ל, מ, נ
      {
        id: 'ln-e8',
        instruction: 'סמנו את כל האותיות כ, ל, מ, נ',
        instructionAudio: '/audio/mark-all-kaf-to-nun.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-samech', label: 'ס' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-5', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
          { id: 'opt-7', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-8', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-9', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-10', image: 'letter-kof', label: 'ק' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-nun', label: 'נ', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnNun;

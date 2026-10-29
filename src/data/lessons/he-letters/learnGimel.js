// Game: Learn the Letter Gimel (ג)
// Category: Letters
// Type: Standard selection - introduction to the letter ג with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnGimel = {
  id: 'learn-gimel',
  categoryId: 'letters-alef-he',
  name: 'ג',
  description: 'למדו את האות ג',
  icon: 'ג',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ג
      {
        id: 'lg-e1',
        instruction: 'זוהי האות ג. המילים הבאות מתחילות באות ג',
        instructionAudio: '/audio/intro-gimel.mp3',
        questionImage: 'letter-gimel',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-gamal', label: 'גמל', isCorrect: true, optionAudio: '/audio/word-gamal.mp3' },
          { id: 'opt-2', image: 'word-gina', label: 'גינה', isCorrect: true, optionAudio: '/audio/word-gina.mp3' },
          { id: 'opt-3', image: 'word-garbayim', label: 'גרביים', isCorrect: true, optionAudio: '/audio/word-garbayim.mp3' },
          { id: 'opt-4', image: 'word-gezer', label: 'גזר', isCorrect: true, optionAudio: '/audio/word-gezer.mp3' },
          { id: 'opt-5', image: 'word-geshem', label: 'גשם', isCorrect: true, optionAudio: '/audio/word-geshem.mp3' },
        ],
      },
      // Question 2: Select all ג letters from 3x3 grid
      {
        id: 'lg-e2',
        instruction: 'בחרו את כל האותיות ג',
        instructionAudio: '/audio/select-all-gimel.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-6', image: 'letter-he', label: 'ה' },
          { id: 'opt-7', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-8', image: 'letter-vav', label: 'ו' },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 4 random letters
      {
        id: 'lg-e3',
        instruction: 'מצאו את האות ג',
        instructionAudio: '/audio/find-gimel.mp3',
        options: [
          { id: 'opt-1', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-2', image: 'letter-he', label: 'ה' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 4: Click on the item that starts with ג
      {
        id: 'lg-e4',
        instruction: 'איזו מילה מתחילה באות ג?',
        instructionAudio: '/audio/word-starts-gimel.mp3',
        options: [
          { id: 'opt-1', image: 'word-gezer', label: 'גזר', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-arye', label: 'אריה' },
          { id: 'opt-4', image: 'word-mita', label: 'מיטה' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Find the letter shape among different letters
      {
        id: 'lg-e5',
        instruction: 'מצאו את האות ג',
        instructionAudio: '/audio/find-gimel.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-5', image: 'letter-tav', label: 'ת' },
          { id: 'opt-6', image: 'letter-ayin', label: 'ע' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Find the letter Bet - reviewing previous letter!
      {
        id: 'lg-e6',
        instruction: 'מצאו את האות ב',
        instructionAudio: '/audio/find-bet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-3', image: 'letter-resh', label: 'ר' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Multi-select - mark ALL א, ב and ג
      {
        id: 'lg-e7',
        instruction: 'סמנו את כל האותיות א, ב, ג',
        instructionAudio: '/audio/mark-all-alef-bet-gimel.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-4', image: 'letter-he', label: 'ה' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
          { id: 'opt-7', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-8', image: 'letter-chet', label: 'ח' },
          { id: 'opt-9', image: 'letter-tet', label: 'ט' },
          { id: 'opt-10', image: 'letter-yod', label: 'י' },
          { id: 'opt-11', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-12', image: 'letter-gimel', label: 'ג', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnGimel;

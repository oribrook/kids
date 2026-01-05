// Game: Learn the Letter Bet (ב)
// Category: Letters
// Type: Standard selection - introduction to the letter ב with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnBet = {
  id: 'learn-bet',
  categoryId: 'letters',
  name: 'ב',
  description: 'למדו את האות ב',
  icon: 'ב',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ב
      {
        id: 'lb-e1',
        instruction: 'זוהי האות ב. המילים הבאות מתחילות באות ב',
        instructionAudio: '/audio/intro-bet.mp3',
        questionImage: 'letter-bet',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-bayit', label: 'בית', isCorrect: true, optionAudio: '/audio/word-bayit.mp3' },
          { id: 'opt-2', image: 'word-balon', label: 'בלון', isCorrect: true, optionAudio: '/audio/word-balon.mp3' },
          { id: 'opt-3', image: 'word-bamba', label: 'במבה', isCorrect: true, optionAudio: '/audio/word-bamba.mp3' },
          { id: 'opt-4', image: 'word-barvaz', label: 'ברווז', isCorrect: true, optionAudio: '/audio/word-barvaz.mp3' },
          { id: 'opt-5', image: 'word-beigale', label: 'בייגלה', isCorrect: true, optionAudio: '/audio/word-beigale.mp3' },
        ],
      },
      // Question 2: Select all ב letters from 3x3 grid
      {
        id: 'lb-e2',
        instruction: 'בחרו את כל האותיות ב',
        instructionAudio: '/audio/select-all-bet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-5', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-6', image: 'letter-he', label: 'ה' },
          { id: 'opt-7', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-8', image: 'letter-vav', label: 'ו' },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 4 random letters
      {
        id: 'lb-e3',
        instruction: 'מצאו את האות ב',
        instructionAudio: '/audio/find-bet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 4: Click on the item that starts with ב
      {
        id: 'lb-e4',
        instruction: 'איזו מילה מתחילה באות ב?',
        instructionAudio: '/audio/word-starts-bet.mp3',
        options: [
          { id: 'opt-1', image: 'word-banana', label: 'בננה', isCorrect: true },
          { id: 'opt-2', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-3', image: 'word-kof', label: 'קוף' },
          { id: 'opt-4', image: 'word-mita', label: 'מיטה' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Find the letter shape among different letters
      {
        id: 'lb-e5',
        instruction: 'מצאו את האות ב',
        instructionAudio: '/audio/find-bet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-6', image: 'letter-tav', label: 'ת' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Find the letter Alef - reviewing previous letter!
      {
        id: 'lb-e6',
        instruction: 'מצאו את האות א',
        instructionAudio: '/audio/find-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-2', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-3', image: 'letter-resh', label: 'ר' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Multi-select - mark ALL א and ב
      {
        id: 'lb-e7',
        instruction: 'סמנו את כל האותיות א ו-ב',
        instructionAudio: '/audio/mark-all-alef-bet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-7', image: 'letter-vav', label: 'ו' },
          { id: 'opt-8', image: 'letter-bet', label: 'ב', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnBet;

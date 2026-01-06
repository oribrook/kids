// Game: Learn the Letter Dalet (ד)
// Category: Letters
// Type: Standard selection - introduction to the letter ד with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnDalet = {
  id: 'learn-dalet',
  categoryId: 'letters-alef-he',
  name: 'ד',
  description: 'למדו את האות ד',
  icon: 'ד',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ד
      {
        id: 'ld-e1',
        instruction: 'זוהי האות ד. המילים הבאות מתחילות באות ד',
        instructionAudio: '/audio/intro-dalet.mp3',
        questionImage: 'letter-dalet',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-delet', label: 'דלת', isCorrect: true, optionAudio: '/audio/word-delet.mp3' },
          { id: 'opt-2', image: 'word-dag', label: 'דג', isCorrect: true, optionAudio: '/audio/word-dag.mp3' },
          { id: 'opt-3', image: 'word-dvora', label: 'דבורה', isCorrect: true, optionAudio: '/audio/word-dvora.mp3' },
          { id: 'opt-4', image: 'word-degel', label: 'דגל', isCorrect: true, optionAudio: '/audio/word-degel.mp3' },
          { id: 'opt-5', image: 'word-deshe', label: 'דשא', isCorrect: true, optionAudio: '/audio/word-deshe.mp3' },
        ],
      },
      // Question 2: Select all ד letters from 3x3 grid
      {
        id: 'ld-e2',
        instruction: 'בחרו את כל האותיות ד',
        instructionAudio: '/audio/select-all-dalet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-6', image: 'letter-he', label: 'ה' },
          { id: 'opt-7', image: 'letter-vav', label: 'ו' },
          { id: 'opt-8', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 4 random letters
      {
        id: 'ld-e3',
        instruction: 'מצאו את האות ד',
        instructionAudio: '/audio/find-dalet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-2', image: 'letter-resh', label: 'ר' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 4: Click on the item that starts with ד
      {
        id: 'ld-e4',
        instruction: 'איזו מילה מתחילה באות ד?',
        instructionAudio: '/audio/word-starts-dalet.mp3',
        options: [
          { id: 'opt-1', image: 'word-dinozaur', label: 'דינוזאור', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-arye', label: 'אריה' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Find the letter shape among different letters
      {
        id: 'ld-e5',
        instruction: 'מצאו את האות ד',
        instructionAudio: '/audio/find-dalet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-mem', label: 'מ' },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל' },
        ],
        correctAnswerId: 'opt-3',
      },
      // Question 6: Find another word starting with ד
      {
        id: 'ld-e6',
        instruction: 'איזו מילה מתחילה באות ד?',
        instructionAudio: '/audio/word-starts-dalet.mp3',
        options: [
          { id: 'opt-1', image: 'word-dvash', label: 'דבש', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-tapuach', label: 'תפוח' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 7: Multi-select - mark ALL א, ב, ג, ד
      {
        id: 'ld-e7',
        instruction: 'סמנו את כל האותיות א, ב, ג, ד',
        instructionAudio: '/audio/mark-all-alef-bet-gimel-dalet.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-he', label: 'ה' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-7', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-8', image: 'letter-chet', label: 'ח' },
          { id: 'opt-9', image: 'letter-tet', label: 'ט' },
          { id: 'opt-10', image: 'letter-yod', label: 'י' },
          { id: 'opt-11', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-12', image: 'letter-lamed', label: 'ל' },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnDalet;

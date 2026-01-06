// Game: Learn the Letter Alef (א)
// Category: Letters
// Type: Standard selection - introduction to the letter א with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnAlef = {
  id: 'learn-alef',
  categoryId: 'letters-alef-he',
  name: 'א',
  description: 'למדו את האות א',
  icon: 'א',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with א
      {
        id: 'la-e1',
        instruction: 'זוהי האות א. המילים הבאות מתחילות באות א',
        instructionAudio: '/audio/intro-alef.mp3',
        questionImage: 'letter-alef',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-avokado', label: 'אבוקדו', isCorrect: true, optionAudio: '/audio/word-avokado.mp3' },
          { id: 'opt-2', image: 'word-avatiach', label: 'אבטיח', isCorrect: true, optionAudio: '/audio/word-avatiach.mp3' },
          { id: 'opt-3', image: 'word-ochel', label: 'אוכל', isCorrect: true, optionAudio: '/audio/word-ochel.mp3' },
        ],
      },
      // Question 2: Select all א letters from 3x3 grid
      {
        id: 'la-e2',
        instruction: 'בחרו את כל האותיות א',
        instructionAudio: '/audio/select-all-alef.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-5', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-6', image: 'letter-he', label: 'ה' },
          { id: 'opt-7', image: 'letter-vav', label: 'ו' },
          { id: 'opt-8', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 4 random letters
      {
        id: 'la-e3',
        instruction: 'מצאו את האות א',
        instructionAudio: '/audio/find-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-shin', label: 'ש' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 4: Click on the item that starts with א
      {
        id: 'la-e4',
        instruction: 'איזו מילה מתחילה באות א?',
        instructionAudio: '/audio/word-starts-alef.mp3',
        options: [
          { id: 'opt-1', image: 'word-avatiach', label: 'אבטיח', isCorrect: true },
          { id: 'opt-2', image: 'word-kiseh', label: 'כיסא' },
          { id: 'opt-3', image: 'word-bayit', label: 'בית' },
          { id: 'opt-4', image: 'word-mamtak', label: 'ממתק' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on another item that starts with א - using אוזן
      {
        id: 'la-e5',
        instruction: 'איזו מילה מתחילה באות א?',
        instructionAudio: '/audio/word-starts-alef.mp3',
        options: [
          { id: 'opt-1', image: 'word-banana', label: 'בננה' },
          { id: 'opt-2', image: 'word-ozen', label: 'אוזן', isCorrect: true },
          { id: 'opt-3', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 6: Find the letter shape among 4 letters (different set)
      {
        id: 'la-e6',
        instruction: 'מצאו את האות א',
        instructionAudio: '/audio/find-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-2', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
        ],
        correctAnswerId: 'opt-2',
      },
      // Question 7: Click on item that starts with א - using אש
      {
        id: 'la-e7',
        instruction: 'איזו מילה מתחילה באות א?',
        instructionAudio: '/audio/word-starts-alef.mp3',
        options: [
          { id: 'opt-1', image: 'word-esh', label: 'אש', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
    ],
  },
};

export default learnAlef;

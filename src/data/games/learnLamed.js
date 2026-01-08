// Game: Learn the Letter Lamed (ל)
// Category: Letters כלמנס
// Type: Standard selection - introduction to the letter ל with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnLamed = {
  id: 'learn-lamed',
  categoryId: 'letters-kaf-samech',
  name: 'ל',
  description: 'למדו את האות ל',
  icon: 'ל',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ל
      {
        id: 'll-e1',
        instruction: 'זוהי האות ל. המילים הבאות מתחילות באות ל',
        instructionAudio: '/audio/intro-lamed.mp3',
        questionImage: 'letter-lamed',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-lev', label: 'לב', isCorrect: true, optionAudio: '/audio/word-lev.mp3' },
          { id: 'opt-2', image: 'word-limon', label: 'לימון', isCorrect: true, optionAudio: '/audio/word-limon.mp3' },
          { id: 'opt-3', image: 'word-lechem', label: 'לחם', isCorrect: true, optionAudio: '/audio/word-lechem.mp3' },
          { id: 'opt-4', image: 'word-leitzan', label: 'ליצן', isCorrect: true, optionAudio: '/audio/word-leitzan.mp3' },
        ],
      },
      // Question 2: Select all ל letters from mix of ל and כ
      {
        id: 'll-e2',
        instruction: 'בחרו את כל האותיות ל',
        instructionAudio: '/audio/select-all-lamed.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-3', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-4', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-5', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-7', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-8', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-9', image: 'letter-kaf', label: 'כ' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ל letters from 3x3 grid (various letters)
      {
        id: 'll-e3',
        instruction: 'בחרו את כל האותיות ל',
        instructionAudio: '/audio/select-all-lamed.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'll-e4',
        instruction: 'מצאו את האות ל',
        instructionAudio: '/audio/find-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-2', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ל (using לב)
      {
        id: 'll-e5',
        instruction: 'איזו מילה מתחילה באות ל?',
        instructionAudio: '/audio/word-starts-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'word-lev', label: 'לב', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'll-e6',
        instruction: 'מצאו את האות ל',
        instructionAudio: '/audio/find-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'letter-chet', label: 'ח' },
          { id: 'opt-2', image: 'letter-tet', label: 'ט' },
          { id: 'opt-3', image: 'letter-yod', label: 'י' },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 7: Find another word starting with ל (using לימון)
      {
        id: 'll-e7',
        instruction: 'איזו מילה מתחילה באות ל?',
        instructionAudio: '/audio/word-starts-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'word-limon', label: 'לימון', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters ט, י, כ, ל
      {
        id: 'll-e8',
        instruction: 'סמנו את כל האותיות ט, י, כ, ל',
        instructionAudio: '/audio/mark-all-tet-to-lamed.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-6', image: 'letter-samech', label: 'ס' },
          { id: 'opt-7', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-8', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-9', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-10', image: 'letter-peh', label: 'פ' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-lamed', label: 'ל', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnLamed;

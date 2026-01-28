// Game: Learn the Letter Kof (ק)
// Category: Letters עפצקר
// Type: Standard selection - introduction to the letter ק with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnKof = {
  id: 'learn-kof',
  categoryId: 'letters-ayin-resh',
  name: 'ק',
  description: 'למדו את האות ק',
  icon: 'ק',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ק
      {
        id: 'lk-e1',
        instruction: 'זוהי האות ק. המילים הבאות מתחילות באות ק',
        instructionAudio: '/audio/intro-kof.mp3',
        questionImage: 'letter-kof',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-kidush', label: 'קידוש', isCorrect: true, optionAudio: '/audio/word-kidush.mp3' },
          { id: 'opt-2', image: 'word-kanguru', label: 'קנגרו', isCorrect: true, optionAudio: '/audio/word-kanguru.mp3' },
          { id: 'opt-3', image: 'word-kafe', label: 'קפה', isCorrect: true, optionAudio: '/audio/word-kafe.mp3' },
          { id: 'opt-4', image: 'word-kaki', label: 'קקי', isCorrect: true, optionAudio: '/audio/word-kaki.mp3' },
        ],
      },
      // Question 2: Select all ק letters from mix of ק and ר
      {
        id: 'lk-e2',
        instruction: 'בחרו את כל האותיות ק',
        instructionAudio: '/audio/select-all-kof.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-resh', label: 'ר' },
          { id: 'opt-2', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-3', image: 'letter-resh', label: 'ר' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-7', image: 'letter-resh', label: 'ר' },
          { id: 'opt-8', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-9', image: 'letter-resh', label: 'ר' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ק letters from 3x3 grid (various letters)
      {
        id: 'lk-e3',
        instruction: 'בחרו את כל האותיות ק',
        instructionAudio: '/audio/select-all-kof.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lk-e4',
        instruction: 'מצאו את האות ק',
        instructionAudio: '/audio/find-kof.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-3', image: 'letter-peh', label: 'פ' },
          { id: 'opt-4', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-samech', label: 'ס' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ק (using קצף)
      {
        id: 'lk-e5',
        instruction: 'איזו מילה מתחילה באות ק?',
        instructionAudio: '/audio/word-starts-kof.mp3',
        options: [
          { id: 'opt-1', image: 'word-ketssef', label: 'קצף', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lk-e6',
        instruction: 'מצאו את האות ק',
        instructionAudio: '/audio/find-kof.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 7: Find another word starting with ק (using קסדה)
      {
        id: 'lk-e7',
        instruction: 'איזו מילה מתחילה באות ק?',
        instructionAudio: '/audio/word-starts-kof.mp3',
        options: [
          { id: 'opt-1', image: 'word-kasda', label: 'קסדה', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-limon', label: 'לימון' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Review - find previous letter צ
      {
        id: 'lk-e8',
        instruction: 'מצאו את האות צ',
        instructionAudio: '/audio/find-tsade.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-2', image: 'letter-kof', label: 'ק' },
          { id: 'opt-3', image: 'letter-peh', label: 'פ' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר' },
          { id: 'opt-5', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-6', image: 'letter-gimel', label: 'ג' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 9: Review - find letter פ (two before)
      {
        id: 'lk-e9',
        instruction: 'מצאו את האות פ',
        instructionAudio: '/audio/find-peh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 10: Multi-select - mark last 4 letters ע, פ, צ, ק
      {
        id: 'lk-e10',
        instruction: 'סמנו את כל האותיות ע, פ, צ, ק',
        instructionAudio: '/audio/mark-all-ayin-to-kof.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-resh', label: 'ר' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-shin', label: 'ש' },
          { id: 'opt-5', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-6', image: 'letter-tav', label: 'ת' },
          { id: 'opt-7', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-10', image: 'letter-samech', label: 'ס' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-kof', label: 'ק', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnKof;

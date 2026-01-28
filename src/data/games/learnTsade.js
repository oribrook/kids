// Game: Learn the Letter Tsade (צ)
// Category: Letters עפצקר
// Type: Standard selection - introduction to the letter צ with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnTsade = {
  id: 'learn-tsade',
  categoryId: 'letters-ayin-resh',
  name: 'צ',
  description: 'למדו את האות צ',
  icon: 'צ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with צ
      {
        id: 'lt-e1',
        instruction: 'זוהי האות צ. המילים הבאות מתחילות באות צ',
        instructionAudio: '/audio/intro-tsade.mp3',
        questionImage: 'letter-tsade',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-tsipor', label: 'ציפור', isCorrect: true, optionAudio: '/audio/word-tsipor.mp3' },
          { id: 'opt-2', image: 'word-tsfardea', label: 'צפרדע', isCorrect: true, optionAudio: '/audio/word-tsfardea.mp3' },
          { id: 'opt-3', image: 'word-tsvayim', label: 'צבעים', isCorrect: true, optionAudio: '/audio/word-tsvayim.mp3' },
          { id: 'opt-4', image: 'word-tsdafa', label: 'צדפה', isCorrect: true, optionAudio: '/audio/word-tsdafa.mp3' },
        ],
      },
      // Question 2: Select all צ letters from mix of צ and ק
      {
        id: 'lt-e2',
        instruction: 'בחרו את כל האותיות צ',
        instructionAudio: '/audio/select-all-tsade.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-kof', label: 'ק' },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-5', image: 'letter-kof', label: 'ק' },
          { id: 'opt-6', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-7', image: 'letter-kof', label: 'ק' },
          { id: 'opt-8', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-9', image: 'letter-kof', label: 'ק' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all צ letters from 3x3 grid (various letters)
      {
        id: 'lt-e3',
        instruction: 'בחרו את כל האותיות צ',
        instructionAudio: '/audio/select-all-tsade.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lt-e4',
        instruction: 'מצאו את האות צ',
        instructionAudio: '/audio/find-tsade.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-3', image: 'letter-peh', label: 'פ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-samech', label: 'ס' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with צ (using צחוק)
      {
        id: 'lt-e5',
        instruction: 'איזו מילה מתחילה באות צ?',
        instructionAudio: '/audio/word-starts-tsade.mp3',
        options: [
          { id: 'opt-1', image: 'word-tschok', label: 'צחוק', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lt-e6',
        instruction: 'מצאו את האות צ',
        instructionAudio: '/audio/find-tsade.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 7: Find another word starting with צ (using צנצנת)
      {
        id: 'lt-e7',
        instruction: 'איזו מילה מתחילה באות צ?',
        instructionAudio: '/audio/word-starts-tsade.mp3',
        options: [
          { id: 'opt-1', image: 'word-tsantsenet', label: 'צנצנת', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Review - find previous letter פ
      {
        id: 'lt-e8',
        instruction: 'מצאו את האות פ',
        instructionAudio: '/audio/find-peh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-3', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 9: Review - find letter ע (two before)
      {
        id: 'lt-e9',
        instruction: 'מצאו את האות ע',
        instructionAudio: '/audio/find-ayin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-samech', label: 'ס' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-alef', label: 'א' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 10: Multi-select - mark last 4 letters ס, ע, פ, צ
      {
        id: 'lt-e10',
        instruction: 'סמנו את כל האותיות ס, ע, פ, צ',
        instructionAudio: '/audio/mark-all-samech-to-tsade.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-kof', label: 'ק' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
          { id: 'opt-7', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-8', image: 'letter-tav', label: 'ת' },
          { id: 'opt-9', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-10', image: 'letter-nun', label: 'נ' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-tsade', label: 'צ', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnTsade;

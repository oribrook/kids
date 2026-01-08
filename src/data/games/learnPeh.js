// Game: Learn the Letter Peh (פ)
// Category: Letters עפצקר
// Type: Standard selection - introduction to the letter פ with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnPeh = {
  id: 'learn-peh',
  categoryId: 'letters-ayin-resh',
  name: 'פ',
  description: 'למדו את האות פ',
  icon: 'פ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with פ
      {
        id: 'lp-e1',
        instruction: 'זוהי האות פ. המילים הבאות מתחילות באות פ',
        instructionAudio: '/audio/intro-peh.mp3',
        questionImage: 'letter-peh',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-pita', label: 'פיתה', isCorrect: true, optionAudio: '/audio/word-pita.mp3' },
          { id: 'opt-2', image: 'word-pil', label: 'פיל', isCorrect: true, optionAudio: '/audio/word-pil.mp3' },
          { id: 'opt-3', image: 'word-pilpel', label: 'פילפל', isCorrect: true, optionAudio: '/audio/word-pilpel.mp3' },
          { id: 'opt-4', image: 'word-para', label: 'פרה', isCorrect: true, optionAudio: '/audio/word-para.mp3' },
        ],
      },
      // Question 2: Select all פ letters from mix of פ and צ
      {
        id: 'lp-e2',
        instruction: 'בחרו את כל האותיות פ',
        instructionAudio: '/audio/select-all-peh.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-5', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-7', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-8', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-9', image: 'letter-tsade', label: 'צ' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all פ letters from 3x3 grid (various letters)
      {
        id: 'lp-e3',
        instruction: 'בחרו את כל האותיות פ',
        instructionAudio: '/audio/select-all-peh.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lp-e4',
        instruction: 'מצאו את האות פ',
        instructionAudio: '/audio/find-peh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-samech', label: 'ס' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with פ (using פרגולה)
      {
        id: 'lp-e5',
        instruction: 'איזו מילה מתחילה באות פ?',
        instructionAudio: '/audio/word-starts-peh.mp3',
        options: [
          { id: 'opt-1', image: 'word-pergola', label: 'פרגולה', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lp-e6',
        instruction: 'מצאו את האות פ',
        instructionAudio: '/audio/find-peh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 7: Find another word starting with פ (using פרפר)
      {
        id: 'lp-e7',
        instruction: 'איזו מילה מתחילה באות פ?',
        instructionAudio: '/audio/word-starts-peh.mp3',
        options: [
          { id: 'opt-1', image: 'word-parpar', label: 'פרפר', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters נ, ס, ע, פ
      {
        id: 'lp-e8',
        instruction: 'סמנו את כל האותיות נ, ס, ע, פ',
        instructionAudio: '/audio/mark-all-nun-to-peh.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-6', image: 'letter-resh', label: 'ר' },
          { id: 'opt-7', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-8', image: 'letter-shin', label: 'ש' },
          { id: 'opt-9', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-10', image: 'letter-tav', label: 'ת' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-peh', label: 'פ', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnPeh;

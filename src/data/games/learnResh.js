// Game: Learn the Letter Resh (ר)
// Category: Letters עפצקר (letters-ayin-resh)
// Type: Standard selection - introduction to the letter ר with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnResh = {
  id: 'learn-resh',
  categoryId: 'letters-ayin-resh',
  name: 'ר',
  description: 'למדו את האות ר',
  icon: 'ר',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ר
      {
        id: 'lr-e1',
        instruction: 'זוהי האות ר. המילים הבאות מתחילות באות ר',
        instructionAudio: '/audio/intro-resh.mp3',
        questionImage: 'letter-resh',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-raashan', label: 'רעשן', isCorrect: true, optionAudio: '/audio/word-raashan.mp3' },
          { id: 'opt-2', image: 'word-regel', label: 'רגל', isCorrect: true, optionAudio: '/audio/word-regel.mp3' },
          { id: 'opt-3', image: 'word-rofe', label: 'רופא', isCorrect: true, optionAudio: '/audio/word-rofe.mp3' },
          { id: 'opt-4', image: 'word-rakevet', label: 'רכבת', isCorrect: true, optionAudio: '/audio/word-rakevet.mp3' },
        ],
      },
      // Question 2: Select all ר letters from mix of ר and ק
      {
        id: 'lr-e2',
        instruction: 'בחרו את כל האותיות ר',
        instructionAudio: '/audio/select-all-resh.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-kof', label: 'ק' },
          { id: 'opt-2', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-5', image: 'letter-kof', label: 'ק' },
          { id: 'opt-6', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-7', image: 'letter-kof', label: 'ק' },
          { id: 'opt-8', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-9', image: 'letter-kof', label: 'ק' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ר letters from 3x3 grid (various letters)
      {
        id: 'lr-e3',
        instruction: 'בחרו את כל האותיות ר',
        instructionAudio: '/audio/select-all-resh.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lr-e4',
        instruction: 'מצאו את האות ר',
        instructionAudio: '/audio/find-resh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-2', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ר (using רשת)
      {
        id: 'lr-e5',
        instruction: 'איזו מילה מתחילה באות ר?',
        instructionAudio: '/audio/word-starts-resh.mp3',
        options: [
          { id: 'opt-1', image: 'word-reshet', label: 'רשת', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lr-e6',
        instruction: 'מצאו את האות ר',
        instructionAudio: '/audio/find-resh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 7: Find another word starting with ר (using רקדנית)
      {
        id: 'lr-e7',
        instruction: 'איזו מילה מתחילה באות ר?',
        instructionAudio: '/audio/word-starts-resh.mp3',
        options: [
          { id: 'opt-1', image: 'word-rakdanit', label: 'רקדנית', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters ע, פ, צ, ק, ר
      {
        id: 'lr-e8',
        instruction: 'סמנו את כל האותיות ע, פ, צ, ק, ר',
        instructionAudio: '/audio/mark-all-ayin-to-resh.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-6', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-7', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-8', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-9', image: 'letter-he', label: 'ה' },
          { id: 'opt-10', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-11', image: 'letter-vav', label: 'ו' },
          { id: 'opt-12', image: 'letter-shin', label: 'ש' },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnResh;

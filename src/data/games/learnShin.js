// Game: Learn the Letter Shin (ש)
// Category: Letters שת (letters-shin-tav) - final category
// Type: Standard selection - introduction to the letter ש with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnShin = {
  id: 'learn-shin',
  categoryId: 'letters-shin-tav',
  name: 'ש',
  description: 'למדו את האות ש',
  icon: 'ש',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ש
      {
        id: 'ls-e1',
        instruction: 'זוהי האות ש. המילים הבאות מתחילות באות ש',
        instructionAudio: '/audio/intro-shin.mp3',
        questionImage: 'letter-shin',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-shachor', label: 'שחור', isCorrect: true, optionAudio: '/audio/word-shachor.mp3' },
          { id: 'opt-2', image: 'word-sheva', label: 'שבע', isCorrect: true, optionAudio: '/audio/word-sheva.mp3' },
          { id: 'opt-3', image: 'word-shablul', label: 'שבלול', isCorrect: true, optionAudio: '/audio/word-shablul.mp3' },
          { id: 'opt-4', image: 'word-shulchan', label: 'שולחן', isCorrect: true, optionAudio: '/audio/word-shulchan.mp3' },
        ],
      },
      // Question 2: Select all ש letters from mix of ש and ס
      {
        id: 'ls-e2',
        instruction: 'בחרו את כל האותיות ש',
        instructionAudio: '/audio/select-all-shin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-samech', label: 'ס' },
          { id: 'opt-2', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-7', image: 'letter-samech', label: 'ס' },
          { id: 'opt-8', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-9', image: 'letter-samech', label: 'ס' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ש letters from 3x3 grid (various letters)
      {
        id: 'ls-e3',
        instruction: 'בחרו את כל האותיות ש',
        instructionAudio: '/audio/select-all-shin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'ls-e4',
        instruction: 'מצאו את האות ש',
        instructionAudio: '/audio/find-shin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-2', image: 'letter-samech', label: 'ס' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-tav', label: 'ת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ש (using שופר)
      {
        id: 'ls-e5',
        instruction: 'איזו מילה מתחילה באות ש?',
        instructionAudio: '/audio/word-starts-shin.mp3',
        options: [
          { id: 'opt-1', image: 'word-shofar', label: 'שופר', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'ls-e6',
        instruction: 'מצאו את האות ש',
        instructionAudio: '/audio/find-shin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-peh', label: 'פ' },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר' },
          { id: 'opt-5', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-6', image: 'letter-tav', label: 'ת' },
        ],
        correctAnswerId: 'opt-5',
      },
      // Question 7: Find another word starting with ש (using שלוש)
      {
        id: 'ls-e7',
        instruction: 'איזו מילה מתחילה באות ש?',
        instructionAudio: '/audio/word-starts-shin.mp3',
        options: [
          { id: 'opt-1', image: 'word-shalosh', label: 'שלוש', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters פ, צ, ק, ר, ש
      {
        id: 'ls-e8',
        instruction: 'סמנו את כל האותיות פ, צ, ק, ר, ש',
        instructionAudio: '/audio/mark-all-peh-to-shin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-6', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-7', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-8', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-9', image: 'letter-he', label: 'ה' },
          { id: 'opt-10', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-11', image: 'letter-vav', label: 'ו' },
          { id: 'opt-12', image: 'letter-tav', label: 'ת' },
        ],
        correctCount: 5,
      },
    ],
  },
};

export default learnShin;

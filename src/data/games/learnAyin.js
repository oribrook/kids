// Game: Learn the Letter Ayin (ע)
// Category: Letters עפצקר (next category after כלמנס)
// Type: Standard selection - introduction to the letter ע with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnAyin = {
  id: 'learn-ayin',
  categoryId: 'letters-ayin-resh',
  name: 'ע',
  description: 'למדו את האות ע',
  icon: 'ע',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ע
      {
        id: 'la-e1',
        instruction: 'זוהי האות ע. המילים הבאות מתחילות באות ע',
        instructionAudio: '/audio/intro-ayin.mp3',
        questionImage: 'letter-ayin',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-etz', label: 'עץ', isCorrect: true, optionAudio: '/audio/word-etz.mp3' },
          { id: 'opt-2', image: 'word-ayin-eye', label: 'עין', isCorrect: true, optionAudio: '/audio/word-ayin-eye.mp3' },
          { id: 'opt-3', image: 'word-uga', label: 'עוגה', isCorrect: true, optionAudio: '/audio/word-uga.mp3' },
          { id: 'opt-4', image: 'word-et', label: 'עט', isCorrect: true, optionAudio: '/audio/word-et.mp3' },
        ],
      },
      // Question 2: Select all ע letters from mix of ע and פ
      {
        id: 'la-e2',
        instruction: 'בחרו את כל האותיות ע',
        instructionAudio: '/audio/select-all-ayin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-peh', label: 'פ' },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-3', image: 'letter-peh', label: 'פ' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-5', image: 'letter-peh', label: 'פ' },
          { id: 'opt-6', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-7', image: 'letter-peh', label: 'פ' },
          { id: 'opt-8', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-9', image: 'letter-peh', label: 'פ' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ע letters from 3x3 grid (various letters)
      {
        id: 'la-e3',
        instruction: 'בחרו את כל האותיות ע',
        instructionAudio: '/audio/select-all-ayin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'la-e4',
        instruction: 'מצאו את האות ע',
        instructionAudio: '/audio/find-ayin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-2', image: 'letter-samech', label: 'ס' },
          { id: 'opt-3', image: 'letter-peh', label: 'פ' },
          { id: 'opt-4', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-nun', label: 'נ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ע (using עכבר)
      {
        id: 'la-e5',
        instruction: 'איזו מילה מתחילה באות ע?',
        instructionAudio: '/audio/word-starts-ayin.mp3',
        options: [
          { id: 'opt-1', image: 'word-achbar', label: 'עכבר', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'la-e6',
        instruction: 'מצאו את האות ע',
        instructionAudio: '/audio/find-ayin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-mem', label: 'מ' },
          { id: 'opt-2', image: 'letter-nun', label: 'נ' },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-5', image: 'letter-peh', label: 'פ' },
          { id: 'opt-6', image: 'letter-tsade', label: 'צ' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 7: Find another word starting with ע (using עכביש)
      {
        id: 'la-e7',
        instruction: 'איזו מילה מתחילה באות ע?',
        instructionAudio: '/audio/word-starts-ayin.mp3',
        options: [
          { id: 'opt-1', image: 'word-akavish', label: 'עכביש', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Review - find previous letter ס
      {
        id: 'la-e8',
        instruction: 'מצאו את האות ס',
        instructionAudio: '/audio/find-samech.mp3',
        options: [
          { id: 'opt-1', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-2', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-peh', label: 'פ' },
          { id: 'opt-5', image: 'letter-mem', label: 'מ' },
          { id: 'opt-6', image: 'letter-gimel', label: 'ג' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 9: Review - find letter נ (two before)
      {
        id: 'la-e9',
        instruction: 'מצאו את האות נ',
        instructionAudio: '/audio/find-nun.mp3',
        options: [
          { id: 'opt-1', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-2', image: 'letter-samech', label: 'ס' },
          { id: 'opt-3', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-6', image: 'letter-gimel', label: 'ג' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 10: Multi-select - mark last 4 letters מ, נ, ס, ע
      {
        id: 'la-e10',
        instruction: 'סמנו את כל האותיות מ, נ, ס, ע',
        instructionAudio: '/audio/mark-all-mem-to-ayin.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-5', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-6', image: 'letter-kof', label: 'ק' },
          { id: 'opt-7', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-8', image: 'letter-resh', label: 'ר' },
          { id: 'opt-9', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-10', image: 'letter-shin', label: 'ש' },
          { id: 'opt-11', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-12', image: 'letter-ayin', label: 'ע', isCorrect: true },
        ],
        correctCount: 4, // Number of correct answers to find
      },
    ],
  },
};

export default learnAyin;

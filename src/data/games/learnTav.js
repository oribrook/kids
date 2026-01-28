// Game: Learn the Letter Tav (ת)
// Category: Letters שת (letters-shin-tav) - final category, last letter of Hebrew alphabet
// Type: Standard selection - introduction to the letter ת with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnTav = {
  id: 'learn-tav',
  categoryId: 'letters-shin-tav',
  name: 'ת',
  description: 'למדו את האות ת',
  icon: 'ת',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ת
      {
        id: 'lt-e1',
        instruction: 'זוהי האות ת. המילים הבאות מתחילות באות ת',
        instructionAudio: '/audio/intro-tav.mp3',
        questionImage: 'letter-tav',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'תפוח', isCorrect: true, optionAudio: '/audio/word-tapuach.mp3' },
          { id: 'opt-2', image: 'word-tinok', label: 'תינוק', isCorrect: true, optionAudio: '/audio/word-tinok.mp3' },
          { id: 'opt-3', image: 'word-tik', label: 'תיק', isCorrect: true, optionAudio: '/audio/word-tik.mp3' },
          { id: 'opt-4', image: 'word-tut', label: 'תות', isCorrect: true, optionAudio: '/audio/word-tut.mp3' },
        ],
      },
      // Question 2: Select all ת letters from mix of ת and ח
      {
        id: 'lt-e2',
        instruction: 'בחרו את כל האותיות ת',
        instructionAudio: '/audio/select-all-tav.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-chet', label: 'ח' },
          { id: 'opt-2', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-5', image: 'letter-chet', label: 'ח' },
          { id: 'opt-6', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-7', image: 'letter-chet', label: 'ח' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-9', image: 'letter-chet', label: 'ח' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all ת letters from 3x3 grid (various letters)
      {
        id: 'lt-e3',
        instruction: 'בחרו את כל האותיות ת',
        instructionAudio: '/audio/select-all-tav.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'lt-e4',
        instruction: 'מצאו את האות ת',
        instructionAudio: '/audio/find-tav.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-2', image: 'letter-chet', label: 'ח' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-shin', label: 'ש' },
          { id: 'opt-6', image: 'letter-resh', label: 'ר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with ת (using תרנגול)
      {
        id: 'lt-e5',
        instruction: 'איזו מילה מתחילה באות ת?',
        instructionAudio: '/audio/word-starts-tav.mp3',
        options: [
          { id: 'opt-1', image: 'word-tarnegol', label: 'תרנגול', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר' },
          { id: 'opt-4', image: 'word-kelev', label: 'כלב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'lt-e6',
        instruction: 'מצאו את האות ת',
        instructionAudio: '/audio/find-tav.mp3',
        options: [
          { id: 'opt-1', image: 'letter-peh', label: 'פ' },
          { id: 'opt-2', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר' },
          { id: 'opt-5', image: 'letter-shin', label: 'ש' },
          { id: 'opt-6', image: 'letter-tav', label: 'ת', isCorrect: true },
        ],
        correctAnswerId: 'opt-6',
      },
      // Question 7: Find another word starting with ת (using תשע)
      {
        id: 'lt-e7',
        instruction: 'איזו מילה מתחילה באות ת?',
        instructionAudio: '/audio/word-starts-tav.mp3',
        options: [
          { id: 'opt-1', image: 'word-tesha', label: 'תשע', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Review - find previous letter ש
      {
        id: 'lt-e8',
        instruction: 'מצאו את האות ש',
        instructionAudio: '/audio/find-shin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-2', image: 'letter-tav', label: 'ת' },
          { id: 'opt-3', image: 'letter-resh', label: 'ר' },
          { id: 'opt-4', image: 'letter-samech', label: 'ס' },
          { id: 'opt-5', image: 'letter-kof', label: 'ק' },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 9: Review - find letter ר (two before)
      {
        id: 'lt-e9',
        instruction: 'מצאו את האות ר',
        instructionAudio: '/audio/find-resh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-2', image: 'letter-shin', label: 'ש' },
          { id: 'opt-3', image: 'letter-tav', label: 'ת' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 10: Multi-select - mark last 4 letters ק, ר, ש, ת
      {
        id: 'lt-e10',
        instruction: 'סמנו את כל האותיות ק, ר, ש, ת',
        instructionAudio: '/audio/mark-all-kof-to-tav.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-7', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-9', image: 'letter-he', label: 'ה' },
          { id: 'opt-10', image: 'letter-peh', label: 'פ' },
          { id: 'opt-11', image: 'letter-vav', label: 'ו' },
          { id: 'opt-12', image: 'letter-tsade', label: 'צ' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnTav;

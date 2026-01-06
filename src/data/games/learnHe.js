// Game: Learn the Letter He (ה)
// Category: Letters
// Type: Standard selection - introduction to the letter ה with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnHe = {
  id: 'learn-he',
  categoryId: 'letters-alef-he',
  name: 'ה',
  description: 'למדו את האות ה',
  icon: 'ה',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with ה
      // Uses question mark placeholders instead of images - user will provide images later
      {
        id: 'lh-e1',
        instruction: 'זוהי האות hey, המילים הבאות מתחילות באות hey',
        instructionAudio: '/audio/intro-he.mp3',
        questionImage: 'letter-he',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-hayeled', label: 'הילד', isCorrect: true, optionAudio: '/audio/word-hayeled.mp3' },
          { id: 'opt-2', image: 'word-hatzipor', label: 'הציפור', isCorrect: true, optionAudio: '/audio/word-hatzipor.mp3' },
          { id: 'opt-3', image: 'word-habayit', label: 'הבית', isCorrect: true, optionAudio: '/audio/word-habayit.mp3' },
          { id: 'opt-4', image: 'word-habanana', label: 'הבננה', isCorrect: true, optionAudio: '/audio/word-habanana.mp3' },
        ],
      },
      // Question 2: Select all ה letters from 3x3 grid
      {
        id: 'lh-e2',
        instruction: 'בחרו את כל האותיות ה',
        instructionAudio: '/audio/select-all-he.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-8', image: 'letter-vav', label: 'ו' },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז' },
        ],
        correctCount: 3,
      },
      // Question 3: Find the letter shape among 4 random letters
      {
        id: 'lh-e3',
        instruction: 'מצאו את האות ה',
        instructionAudio: '/audio/find-he.mp3',
        options: [
          { id: 'opt-1', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-2', image: 'letter-chet', label: 'ח' },
          { id: 'opt-3', image: 'letter-tav', label: 'ת' },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 4: Click on the item that starts with ה
      {
        id: 'lh-e4',
        instruction: 'איזו מילה מתחילה באות ה?',
        instructionAudio: '/audio/word-starts-he.mp3',
        options: [
          { id: 'opt-1', image: 'word-har', label: 'הר', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Find the letter shape among different letters
      {
        id: 'lh-e5',
        instruction: 'מצאו את האות ה',
        instructionAudio: '/audio/find-he.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-5', image: 'letter-vav', label: 'ו' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
        ],
        correctAnswerId: 'opt-4',
      },
      // Question 6: Find another word starting with ה
      {
        id: 'lh-e6',
        instruction: 'איזו מילה מתחילה באות ה?',
        instructionAudio: '/audio/word-starts-he.mp3',
        options: [
          { id: 'opt-1', image: 'word-havdala', label: 'הבדלה', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-dag', label: 'דג' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 7: Multi-select - mark ALL א, ב, ג, ד, ה
      {
        id: 'lh-e7',
        instruction: 'סמנו את כל האותיות א, ב, ג, ד, ה',
        instructionAudio: '/audio/mark-all-alef-bet-gimel-dalet-he.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-vav', label: 'ו' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-4', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-5', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-6', image: 'letter-chet', label: 'ח' },
          { id: 'opt-7', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-8', image: 'letter-tet', label: 'ט' },
          { id: 'opt-9', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-10', image: 'letter-yod', label: 'י' },
          { id: 'opt-11', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-12', image: 'letter-lamed', label: 'ל' },
        ],
        correctCount: 5, // Number of correct answers to find
      },
    ],
  },
};

export default learnHe;

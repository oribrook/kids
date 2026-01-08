// Game: Learn the Letter Yod (י)
// Category: Letters
// Type: Standard selection - introduction to the letter י with various question types
// Teaches children to recognize the letter, its shape, and words that start with it

const learnYod = {
  id: 'learn-yod',
  categoryId: 'letters-vav-yod',
  name: 'י',
  description: 'למדו את האות י',
  icon: 'י',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - click all words that start with י (5 words for intro)
      {
        id: 'ly-e1',
        instruction: 'זוהי האות י. המילים הבאות מתחילות באות י',
        instructionAudio: '/audio/intro-yod.mp3',
        questionImage: 'letter-yod',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-yadayim', label: 'ידיים', isCorrect: true, optionAudio: '/audio/word-yadayim.mp3' },
          { id: 'opt-2', image: 'word-yareach', label: 'ירח', isCorrect: true, optionAudio: '/audio/word-yareach.mp3' },
          { id: 'opt-3', image: 'word-yahalom', label: 'יהלום', isCorrect: true, optionAudio: '/audio/word-yahalom.mp3' },
          { id: 'opt-4', image: 'word-yoga', label: 'יוגה', isCorrect: true, optionAudio: '/audio/word-yoga.mp3' },
          { id: 'opt-5', image: 'word-yom-huledet', label: 'יום-הולדת', isCorrect: true, optionAudio: '/audio/word-yom-huledet.mp3' },
        ],
      },
      // Question 2: Select all י letters from mix of ט and י
      {
        id: 'ly-e2',
        instruction: 'בחרו את כל האותיות י',
        instructionAudio: '/audio/select-all-yod.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-tet', label: 'ט' },
          { id: 'opt-2', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-3', image: 'letter-tet', label: 'ט' },
          { id: 'opt-4', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-5', image: 'letter-tet', label: 'ט' },
          { id: 'opt-6', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-7', image: 'letter-tet', label: 'ט' },
          { id: 'opt-8', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-9', image: 'letter-tet', label: 'ט' },
        ],
        correctCount: 4,
      },
      // Question 3: Select all י letters from 3x3 grid (various letters)
      {
        id: 'ly-e3',
        instruction: 'בחרו את כל האותיות י',
        instructionAudio: '/audio/select-all-yod.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-5', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-he', label: 'ה' },
          { id: 'opt-8', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-9', image: 'letter-vav', label: 'ו' },
        ],
        correctCount: 3,
      },
      // Question 4: Find the letter shape among 6 random letters
      {
        id: 'ly-e4',
        instruction: 'מצאו את האות י',
        instructionAudio: '/audio/find-yod.mp3',
        options: [
          { id: 'opt-1', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-2', image: 'letter-vav', label: 'ו' },
          { id: 'opt-3', image: 'letter-nun', label: 'נ' },
          { id: 'opt-4', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 5: Click on the item that starts with י (יין)
      {
        id: 'ly-e5',
        instruction: 'איזו מילה מתחילה באות י?',
        instructionAudio: '/audio/word-starts-yod.mp3',
        options: [
          { id: 'opt-1', image: 'word-yayin', label: 'יין', isCorrect: true },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 6: Find the letter shape among different letters
      {
        id: 'ly-e6',
        instruction: 'מצאו את האות י',
        instructionAudio: '/audio/find-yod.mp3',
        options: [
          { id: 'opt-1', image: 'letter-bet', label: 'ב' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-he', label: 'ה' },
          { id: 'opt-5', image: 'letter-vav', label: 'ו' },
          { id: 'opt-6', image: 'letter-yod', label: 'י', isCorrect: true },
        ],
        correctAnswerId: 'opt-6',
      },
      // Question 7: Find another word starting with י (ירח)
      {
        id: 'ly-e7',
        instruction: 'איזו מילה מתחילה באות י?',
        instructionAudio: '/audio/word-starts-yod.mp3',
        options: [
          { id: 'opt-1', image: 'word-yareach', label: 'ירח', isCorrect: true },
          { id: 'opt-2', image: 'word-bayit', label: 'בית' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
        correctAnswerId: 'opt-1',
      },
      // Question 8: Multi-select - mark last 4 letters ז, ח, ט, י
      {
        id: 'ly-e8',
        instruction: 'סמנו את כל האותיות ז, ח, ט, י',
        instructionAudio: '/audio/mark-all-zayin-to-yod.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-3', image: 'letter-bet', label: 'ב' },
          { id: 'opt-4', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-5', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
          { id: 'opt-7', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-10', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-11', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-12', image: 'letter-yod', label: 'י', isCorrect: true },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnYod;

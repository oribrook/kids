// Game: Quiz Kaf to Samech (כלמנס)
// Category: Letters
// Type: Quiz/Exam on letters כ, ל, מ, נ, ס
// 15 questions (3 per letter), pre-shuffled
// Q types: 1) Find letter among 9, 2) What letter does word start with (9 options), 3) Which word starts with letter (4 options)

const quizKafSamech = {
  id: 'quiz-kaf-samech',
  categoryId: 'letters-kaf-samech',
  name: 'כלמנס',
  description: 'בוחן אותיות כ-ס',
  icon: '📝',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Q1: Find letter מ among 9 letters
      {
        id: 'qks-1',
        instruction: 'מצאו את האות מ',
        instructionAudio: '/audio/quiz-find-mem.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-7', image: 'letter-peh', label: 'פ' },
          { id: 'opt-8', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-9', image: 'letter-kof', label: 'ק' },
        ],
      },
      // Q2: What letter does כלב start with? (9 letter options)
      {
        id: 'qks-2',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-kelev',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
          { id: 'opt-7', image: 'letter-nun', label: 'נ' },
          { id: 'opt-8', image: 'letter-samech', label: 'ס' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q3: Which word starts with ל? (4 word options)
      {
        id: 'qks-3',
        instruction: 'איזו מילה מתחילה באות ל?',
        instructionAudio: '/audio/quiz-word-starts-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'word-limon', label: 'לימון', isCorrect: true },
          { id: 'opt-2', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-3', image: 'word-nachash', label: 'נחש' },
          { id: 'opt-4', image: 'word-sefer', label: 'ספר' },
        ],
      },
      // Q4: Find letter ס among 9 letters
      {
        id: 'qks-4',
        instruction: 'מצאו את האות ס',
        instructionAudio: '/audio/quiz-find-samech.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-4', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-5', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-6', image: 'letter-mem', label: 'מ' },
          { id: 'opt-7', image: 'letter-resh', label: 'ר' },
          { id: 'opt-8', image: 'letter-shin', label: 'ש' },
          { id: 'opt-9', image: 'letter-tav', label: 'ת' },
        ],
      },
      // Q5: What letter does לב start with? (9 letter options)
      {
        id: 'qks-5',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-lev',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
          { id: 'opt-7', image: 'letter-kof', label: 'ק' },
          { id: 'opt-8', image: 'letter-resh', label: 'ר' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q6: Which word starts with נ? (4 word options)
      {
        id: 'qks-6',
        instruction: 'איזו מילה מתחילה באות נ?',
        instructionAudio: '/audio/quiz-word-starts-nun.mp3',
        options: [
          { id: 'opt-1', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-2', image: 'word-namer', label: 'נמר', isCorrect: true },
          { id: 'opt-3', image: 'word-marak', label: 'מרק' },
          { id: 'opt-4', image: 'word-sus', label: 'סוס' },
        ],
      },
      // Q7: Find letter כ among 9 letters
      {
        id: 'qks-7',
        instruction: 'מצאו את האות כ',
        instructionAudio: '/audio/quiz-find-kaf.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-kaf', label: 'כ', isCorrect: true },
          { id: 'opt-4', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-5', image: 'letter-bet', label: 'ב' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
          { id: 'opt-7', image: 'letter-resh', label: 'ר' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q8: Which word starts with ס? (4 word options)
      {
        id: 'qks-8',
        instruction: 'איזו מילה מתחילה באות ס?',
        instructionAudio: '/audio/quiz-word-starts-samech.mp3',
        options: [
          { id: 'opt-1', image: 'word-lev', label: 'לב' },
          { id: 'opt-2', image: 'word-nachash', label: 'נחש' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר', isCorrect: true },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב' },
        ],
      },
      // Q9: What letter does נר start with? (9 letter options)
      {
        id: 'qks-9',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-ner',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-7', image: 'letter-yod', label: 'י' },
          { id: 'opt-8', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q10: Find letter ל among 9 letters
      {
        id: 'qks-10',
        instruction: 'מצאו את האות ל',
        instructionAudio: '/audio/quiz-find-lamed.mp3',
        options: [
          { id: 'opt-1', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-2', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-lamed', label: 'ל', isCorrect: true },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-7', image: 'letter-chet', label: 'ח' },
          { id: 'opt-8', image: 'letter-tet', label: 'ט' },
          { id: 'opt-9', image: 'letter-yod', label: 'י' },
        ],
      },
      // Q11: Which word starts with כ? (4 word options)
      {
        id: 'qks-11',
        instruction: 'איזו מילה מתחילה באות כ?',
        instructionAudio: '/audio/quiz-word-starts-kaf.mp3',
        options: [
          { id: 'opt-1', image: 'word-sus', label: 'סוס' },
          { id: 'opt-2', image: 'word-ner', label: 'נר' },
          { id: 'opt-3', image: 'word-limon', label: 'לימון' },
          { id: 'opt-4', image: 'word-kochav', label: 'כוכב', isCorrect: true },
        ],
      },
      // Q12: What letter does סוס start with? (9 letter options)
      {
        id: 'qks-12',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-sus',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס', isCorrect: true },
          { id: 'opt-6', image: 'letter-chet', label: 'ח' },
          { id: 'opt-7', image: 'letter-tet', label: 'ט' },
          { id: 'opt-8', image: 'letter-kof', label: 'ק' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q13: Find letter נ among 9 letters
      {
        id: 'qks-13',
        instruction: 'מצאו את האות נ',
        instructionAudio: '/audio/quiz-find-nun.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-resh', label: 'ר' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-nun', label: 'נ', isCorrect: true },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-7', image: 'letter-bet', label: 'ב' },
          { id: 'opt-8', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-9', image: 'letter-peh', label: 'פ' },
        ],
      },
      // Q14: What letter does מיטה start with? (9 letter options)
      {
        id: 'qks-14',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-mita',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ', isCorrect: true },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-7', image: 'letter-mem', label: 'מ' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q15: Which word starts with מ? (4 word options)
      {
        id: 'qks-15',
        instruction: 'איזו מילה מתחילה באות מ?',
        instructionAudio: '/audio/quiz-word-starts-mem.mp3',
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-2', image: 'word-lechem', label: 'לחם' },
          { id: 'opt-3', image: 'word-marak', label: 'מרק', isCorrect: true },
          { id: 'opt-4', image: 'word-sira', label: 'סירה' },
        ],
      },
    ],
  },
};

export default quizKafSamech;

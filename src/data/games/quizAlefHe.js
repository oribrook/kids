// Game: Quiz Alef to He (אבגדה)
// Category: Letters
// Type: Quiz/Exam on letters א, ב, ג, ד, ה
// 15 questions (3 per letter), pre-shuffled
// Q types: 1) Find letter among 9, 2) What letter does word start with (9 options), 3) Which word starts with letter (4 options)

const quizAlefHe = {
  id: 'quiz-alef-he',
  categoryId: 'letters-alef-he',
  name: 'אבגדה',
  description: 'בוחן אותיות א-ה',
  icon: '📝',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Q1: Find letter ג among 9 letters
      {
        id: 'qah-1',
        instruction: 'מצאו את האות ג',
        instructionAudio: '/audio/quiz-find-gimel.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
          { id: 'opt-7', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-8', image: 'letter-chet', label: 'ח' },
          { id: 'opt-9', image: 'letter-tet', label: 'ט' },
        ],
      },
      // Q2: What letter does בננה start with? (9 letter options)
      {
        id: 'qah-2',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-banana',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
          { id: 'opt-7', image: 'letter-shin', label: 'ש' },
          { id: 'opt-8', image: 'letter-mem', label: 'מ' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q3: Which word starts with א? (4 word options)
      {
        id: 'qah-3',
        instruction: 'איזו מילה מתחילה באות א?',
        instructionAudio: '/audio/quiz-word-starts-alef.mp3',
        options: [
          { id: 'opt-1', image: 'word-avatiach', label: 'אבטיח', isCorrect: true },
          { id: 'opt-2', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-3', image: 'word-delet', label: 'דלת' },
          { id: 'opt-4', image: 'word-har', label: 'הר' },
        ],
      },
      // Q4: Find letter ה among 9 letters
      {
        id: 'qah-4',
        instruction: 'מצאו את האות ה',
        instructionAudio: '/audio/quiz-find-he.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-chet', label: 'ח' },
          { id: 'opt-7', image: 'letter-tav', label: 'ת' },
          { id: 'opt-8', image: 'letter-bet', label: 'ב' },
          { id: 'opt-9', image: 'letter-resh', label: 'ר' },
        ],
      },
      // Q5: What letter does גמל start with? (9 letter options)
      {
        id: 'qah-5',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-gamal',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג', isCorrect: true },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
          { id: 'opt-7', image: 'letter-qof', label: 'ק' },
          { id: 'opt-8', image: 'letter-resh', label: 'ר' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q6: Which word starts with ד? (4 word options)
      {
        id: 'qah-6',
        instruction: 'איזו מילה מתחילה באות ד?',
        instructionAudio: '/audio/quiz-word-starts-dalet.mp3',
        options: [
          { id: 'opt-1', image: 'word-balon', label: 'בלון' },
          { id: 'opt-2', image: 'word-dinozaur', label: 'דינוזאור', isCorrect: true },
          { id: 'opt-3', image: 'word-arye', label: 'אריה' },
          { id: 'opt-4', image: 'word-geshem', label: 'גשם' },
        ],
      },
      // Q7: Find letter א among 9 letters
      {
        id: 'qah-7',
        instruction: 'מצאו את האות א',
        instructionAudio: '/audio/quiz-find-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-4', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-5', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-6', image: 'letter-peh', label: 'פ' },
          { id: 'opt-7', image: 'letter-resh', label: 'ר' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q8: Which word starts with ב? (4 word options)
      {
        id: 'qah-8',
        instruction: 'איזו מילה מתחילה באות ב?',
        instructionAudio: '/audio/quiz-word-starts-bet.mp3',
        options: [
          { id: 'opt-1', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-2', image: 'word-dag', label: 'דג' },
          { id: 'opt-3', image: 'word-barvaz', label: 'ברווז', isCorrect: true },
          { id: 'opt-4', image: 'word-ozen', label: 'אוזן' },
        ],
      },
      // Q9: What letter does דג start with? (9 letter options)
      {
        id: 'qah-9',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-dag',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-7', image: 'letter-yod', label: 'י' },
          { id: 'opt-8', image: 'letter-samech', label: 'ס' },
          { id: 'opt-9', image: 'letter-ayin', label: 'ע' },
        ],
      },
      // Q10: Find letter ב among 9 letters
      {
        id: 'qah-10',
        instruction: 'מצאו את האות ב',
        instructionAudio: '/audio/quiz-find-bet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-2', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-7', image: 'letter-chet', label: 'ח' },
          { id: 'opt-8', image: 'letter-tet', label: 'ט' },
          { id: 'opt-9', image: 'letter-yod', label: 'י' },
        ],
      },
      // Q11: Which word starts with ג? (4 word options)
      {
        id: 'qah-11',
        instruction: 'איזו מילה מתחילה באות ג?',
        instructionAudio: '/audio/quiz-word-starts-gimel.mp3',
        options: [
          { id: 'opt-1', image: 'word-havdala', label: 'הבדלה' },
          { id: 'opt-2', image: 'word-dvash', label: 'דבש' },
          { id: 'opt-3', image: 'word-gina', label: 'גינה', isCorrect: true },
          { id: 'opt-4', image: 'word-bamba', label: 'במבה' },
        ],
      },
      // Q12: What letter does הר start with? (9 letter options)
      {
        id: 'qah-12',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-har',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-6', image: 'letter-chet', label: 'ח' },
          { id: 'opt-7', image: 'letter-tet', label: 'ט' },
          { id: 'opt-8', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-9', image: 'letter-lamed', label: 'ל' },
        ],
      },
      // Q13: Find letter ד among 9 letters
      {
        id: 'qah-13',
        instruction: 'מצאו את האות ד',
        instructionAudio: '/audio/quiz-find-dalet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-resh', label: 'ר' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-7', image: 'letter-bet', label: 'ב' },
          { id: 'opt-8', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-9', image: 'letter-peh', label: 'פ' },
        ],
      },
      // Q14: What letter does אריה start with? (9 letter options)
      {
        id: 'qah-14',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-arye',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א', isCorrect: true },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-7', image: 'letter-mem', label: 'מ' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q15: Which word starts with ה? (4 word options)
      {
        id: 'qah-15',
        instruction: 'איזו מילה מתחילה באות ה?',
        instructionAudio: '/audio/quiz-word-starts-he.mp3',
        options: [
          { id: 'opt-1', image: 'word-avokado', label: 'אבוקדו' },
          { id: 'opt-2', image: 'word-beigale', label: 'בייגלה' },
          { id: 'opt-3', image: 'word-garbayim', label: 'גרביים' },
          { id: 'opt-4', image: 'word-havdala', label: 'הבדלה', isCorrect: true },
        ],
      },
    ],
  },
};

export default quizAlefHe;

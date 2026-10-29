// Game: Quiz Shin to Tav (שת)
// Category: Letters
// Type: Quiz/Exam on letters ש, ת (final category with only 2 letters)
// 10 questions (5 per letter), pre-shuffled
// Q types: 1) Find letter among 9, 2) What letter does word start with (9 options), 3) Which word starts with letter (4 options)

const quizShinTav = {
  id: 'quiz-shin-tav',
  categoryId: 'letters-shin-tav',
  name: 'שת',
  description: 'בוחן אותיות ש-ת',
  icon: '📝',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Q1: Find letter ש among 9 letters
      {
        id: 'qst-1',
        instruction: 'מצאו את האות ש',
        instructionAudio: '/audio/quiz-find-shin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-samech', label: 'ס' },
          { id: 'opt-2', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-3', image: 'letter-tav', label: 'ת' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר' },
          { id: 'opt-5', image: 'letter-kof', label: 'ק' },
          { id: 'opt-6', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-7', image: 'letter-peh', label: 'פ' },
          { id: 'opt-8', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-9', image: 'letter-mem', label: 'מ' },
        ],
      },
      // Q2: What letter does תפוח start with? (9 letter options)
      {
        id: 'qst-2',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-tapuach',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-3', image: 'letter-resh', label: 'ר' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-6', image: 'letter-alef', label: 'א' },
          { id: 'opt-7', image: 'letter-bet', label: 'ב' },
          { id: 'opt-8', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-9', image: 'letter-peh', label: 'פ' },
        ],
      },
      // Q3: Which word starts with ש? (4 word options)
      {
        id: 'qst-3',
        instruction: 'איזו מילה מתחילה באות ש?',
        instructionAudio: '/audio/quiz-word-starts-shin.mp3',
        options: [
          { id: 'opt-1', image: 'word-shofar', label: 'שופר', isCorrect: true },
          { id: 'opt-2', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-3', image: 'word-rakevet', label: 'רכבת' },
          { id: 'opt-4', image: 'word-kanguru', label: 'קנגרו' },
        ],
      },
      // Q4: Find letter ת among 9 letters
      {
        id: 'qst-4',
        instruction: 'מצאו את האות ת',
        instructionAudio: '/audio/quiz-find-tav.mp3',
        options: [
          { id: 'opt-1', image: 'letter-chet', label: 'ח' },
          { id: 'opt-2', image: 'letter-he', label: 'ה' },
          { id: 'opt-3', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-4', image: 'letter-mem', label: 'מ' },
          { id: 'opt-5', image: 'letter-shin', label: 'ש' },
          { id: 'opt-6', image: 'letter-resh', label: 'ר' },
          { id: 'opt-7', image: 'letter-kof', label: 'ק' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-lamed', label: 'ל' },
        ],
      },
      // Q5: What letter does שולחן start with? (9 letter options)
      {
        id: 'qst-5',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-shulchan',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-2', image: 'letter-tav', label: 'ת' },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-chet', label: 'ח' },
          { id: 'opt-7', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-peh', label: 'פ' },
        ],
      },
      // Q6: Which word starts with ת? (4 word options)
      {
        id: 'qst-6',
        instruction: 'איזו מילה מתחילה באות ת?',
        instructionAudio: '/audio/quiz-word-starts-tav.mp3',
        options: [
          { id: 'opt-1', image: 'word-sheva', label: 'שבע' },
          { id: 'opt-2', image: 'word-tarnegol', label: 'תרנגול', isCorrect: true },
          { id: 'opt-3', image: 'word-rakevet', label: 'רכבת' },
          { id: 'opt-4', image: 'word-tsipor', label: 'ציפור' },
        ],
      },
      // Q7: Find letter ש among different 9 letters
      {
        id: 'qst-7',
        instruction: 'מצאו את האות ש',
        instructionAudio: '/audio/quiz-find-shin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-bet', label: 'ב' },
          { id: 'opt-3', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-4', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-5', image: 'letter-he', label: 'ה' },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
          { id: 'opt-7', image: 'letter-shin', label: 'ש', isCorrect: true },
          { id: 'opt-8', image: 'letter-tav', label: 'ת' },
          { id: 'opt-9', image: 'letter-resh', label: 'ר' },
        ],
      },
      // Q8: What letter does תות start with? (9 letter options)
      {
        id: 'qst-8',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-tut',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-3', image: 'letter-tet', label: 'ט' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
          { id: 'opt-7', image: 'letter-alef', label: 'א' },
          { id: 'opt-8', image: 'letter-bet', label: 'ב' },
          { id: 'opt-9', image: 'letter-samech', label: 'ס' },
        ],
      },
      // Q9: Which word starts with ש? (4 word options)
      {
        id: 'qst-9',
        instruction: 'איזו מילה מתחילה באות ש?',
        instructionAudio: '/audio/quiz-word-starts-shin.mp3',
        options: [
          { id: 'opt-1', image: 'word-tut', label: 'תות' },
          { id: 'opt-2', image: 'word-shablul', label: 'שבלול', isCorrect: true },
          { id: 'opt-3', image: 'word-rakdanit', label: 'רקדנית' },
          { id: 'opt-4', image: 'word-tsipor', label: 'ציפור' },
        ],
      },
      // Q10: Find letter ת among different 9 letters
      {
        id: 'qst-10',
        instruction: 'מצאו את האות ת',
        instructionAudio: '/audio/quiz-find-tav.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-nun', label: 'נ' },
          { id: 'opt-5', image: 'letter-samech', label: 'ס' },
          { id: 'opt-6', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-7', image: 'letter-peh', label: 'פ' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת', isCorrect: true },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
    ],
  },
};

export default quizShinTav;

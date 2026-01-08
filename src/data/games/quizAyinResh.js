// Game: Quiz Ayin to Resh (עפצקר)
// Category: Letters
// Type: Quiz/Exam on letters ע, פ, צ, ק, ר
// 15 questions (3 per letter), pre-shuffled
// Q types: 1) Find letter among 9, 2) What letter does word start with (9 options), 3) Which word starts with letter (4 options)

const quizAyinResh = {
  id: 'quiz-ayin-resh',
  categoryId: 'letters-ayin-resh',
  name: 'עפצקר',
  description: 'בוחן אותיות ע-ר',
  icon: '📝',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Q1: Find letter צ among 9 letters
      {
        id: 'qar-1',
        instruction: 'מצאו את האות צ',
        instructionAudio: '/audio/quiz-find-tsade.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-shin', label: 'ש' },
          { id: 'opt-7', image: 'letter-tav', label: 'ת' },
          { id: 'opt-8', image: 'letter-samech', label: 'ס' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q2: What letter does עץ start with? (9 letter options)
      {
        id: 'qar-2',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-etz',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-alef', label: 'א' },
          { id: 'opt-7', image: 'letter-bet', label: 'ב' },
          { id: 'opt-8', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q3: Which word starts with פ? (4 word options)
      {
        id: 'qar-3',
        instruction: 'איזו מילה מתחילה באות פ?',
        instructionAudio: '/audio/quiz-word-starts-peh.mp3',
        options: [
          { id: 'opt-1', image: 'word-parpar', label: 'פרפר', isCorrect: true },
          { id: 'opt-2', image: 'word-etz', label: 'עץ' },
          { id: 'opt-3', image: 'word-tsipor', label: 'ציפור' },
          { id: 'opt-4', image: 'word-rakevet', label: 'רכבת' },
        ],
      },
      // Q4: Find letter ר among 9 letters
      {
        id: 'qar-4',
        instruction: 'מצאו את האות ר',
        instructionAudio: '/audio/quiz-find-resh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-3', image: 'letter-kof', label: 'ק' },
          { id: 'opt-4', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-5', image: 'letter-vav', label: 'ו' },
          { id: 'opt-6', image: 'letter-nun', label: 'נ' },
          { id: 'opt-7', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-8', image: 'letter-shin', label: 'ש' },
          { id: 'opt-9', image: 'letter-tav', label: 'ת' },
        ],
      },
      // Q5: What letter does פיל start with? (9 letter options)
      {
        id: 'qar-5',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-pil',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
          { id: 'opt-7', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-8', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q6: Which word starts with ק? (4 word options)
      {
        id: 'qar-6',
        instruction: 'איזו מילה מתחילה באות ק?',
        instructionAudio: '/audio/quiz-word-starts-kof.mp3',
        options: [
          { id: 'opt-1', image: 'word-etz', label: 'עץ' },
          { id: 'opt-2', image: 'word-kanguru', label: 'קנגרו', isCorrect: true },
          { id: 'opt-3', image: 'word-pil', label: 'פיל' },
          { id: 'opt-4', image: 'word-tsipor', label: 'ציפור' },
        ],
      },
      // Q7: Find letter ע among 9 letters
      {
        id: 'qar-7',
        instruction: 'מצאו את האות ע',
        instructionAudio: '/audio/quiz-find-ayin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-shin', label: 'ש' },
          { id: 'opt-2', image: 'letter-samech', label: 'ס' },
          { id: 'opt-3', image: 'letter-ayin', label: 'ע', isCorrect: true },
          { id: 'opt-4', image: 'letter-peh', label: 'פ' },
          { id: 'opt-5', image: 'letter-bet', label: 'ב' },
          { id: 'opt-6', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-7', image: 'letter-resh', label: 'ר' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q8: Which word starts with ר? (4 word options)
      {
        id: 'qar-8',
        instruction: 'איזו מילה מתחילה באות ר?',
        instructionAudio: '/audio/quiz-word-starts-resh.mp3',
        options: [
          { id: 'opt-1', image: 'word-pil', label: 'פיל' },
          { id: 'opt-2', image: 'word-tsipor', label: 'ציפור' },
          { id: 'opt-3', image: 'word-rakevet', label: 'רכבת', isCorrect: true },
          { id: 'opt-4', image: 'word-kanguru', label: 'קנגרו' },
        ],
      },
      // Q9: What letter does ציפור start with? (9 letter options)
      {
        id: 'qar-9',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-tsipor',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ', isCorrect: true },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-7', image: 'letter-yod', label: 'י' },
          { id: 'opt-8', image: 'letter-samech', label: 'ס' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q10: Find letter פ among 9 letters
      {
        id: 'qar-10',
        instruction: 'מצאו את האות פ',
        instructionAudio: '/audio/quiz-find-peh.mp3',
        options: [
          { id: 'opt-1', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-2', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-peh', label: 'פ', isCorrect: true },
          { id: 'opt-6', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-7', image: 'letter-chet', label: 'ח' },
          { id: 'opt-8', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-9', image: 'letter-bet', label: 'ב' },
        ],
      },
      // Q11: Which word starts with ע? (4 word options)
      {
        id: 'qar-11',
        instruction: 'איזו מילה מתחילה באות ע?',
        instructionAudio: '/audio/quiz-word-starts-ayin.mp3',
        options: [
          { id: 'opt-1', image: 'word-rakevet', label: 'רכבת' },
          { id: 'opt-2', image: 'word-kanguru', label: 'קנגרו' },
          { id: 'opt-3', image: 'word-parpar', label: 'פרפר' },
          { id: 'opt-4', image: 'word-akavish', label: 'עכביש', isCorrect: true },
        ],
      },
      // Q12: What letter does רגל start with? (9 letter options)
      {
        id: 'qar-12',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-regel',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק' },
          { id: 'opt-5', image: 'letter-resh', label: 'ר', isCorrect: true },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-8', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q13: Find letter ק among 9 letters
      {
        id: 'qar-13',
        instruction: 'מצאו את האות ק',
        instructionAudio: '/audio/quiz-find-kof.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-resh', label: 'ר' },
          { id: 'opt-3', image: 'letter-he', label: 'ה' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו' },
          { id: 'opt-5', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-7', image: 'letter-bet', label: 'ב' },
          { id: 'opt-8', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-9', image: 'letter-peh', label: 'פ' },
        ],
      },
      // Q14: What letter does קנגרו start with? (9 letter options)
      {
        id: 'qar-14',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-kanguru',
        options: [
          { id: 'opt-1', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-2', image: 'letter-peh', label: 'פ' },
          { id: 'opt-3', image: 'letter-tsade', label: 'צ' },
          { id: 'opt-4', image: 'letter-kof', label: 'ק', isCorrect: true },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-7', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-shin', label: 'ש' },
        ],
      },
      // Q15: Which word starts with צ? (4 word options)
      {
        id: 'qar-15',
        instruction: 'איזו מילה מתחילה באות צ?',
        instructionAudio: '/audio/quiz-word-starts-tsade.mp3',
        options: [
          { id: 'opt-1', image: 'word-etz', label: 'עץ' },
          { id: 'opt-2', image: 'word-parpar', label: 'פרפר' },
          { id: 'opt-3', image: 'word-tsfardea', label: 'צפרדע', isCorrect: true },
          { id: 'opt-4', image: 'word-regel', label: 'רגל' },
        ],
      },
    ],
  },
};

export default quizAyinResh;

// Game: Quiz Vav to Yod (וזחטי)
// Category: Letters
// Type: Quiz/Exam on letters ו, ז, ח, ט, י
// 20 questions total:
//   - 15 questions for new letters (3 per letter: find letter, what letter word starts with, which word starts with letter)
//   - 5 review questions for previous category (1 per letter א-ה)
// Questions are pre-shuffled mixing new and review content

const quizVavYod = {
  id: 'quiz-vav-yod',
  categoryId: 'letters-vav-yod',
  name: 'וזחטי',
  description: 'בוחן אותיות ו-י',
  icon: '📝',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Q1: Find letter ח among 9 letters
      {
        id: 'qvy-1',
        instruction: 'מצאו את האות ח',
        instructionAudio: '/audio/find-chet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-yod', label: 'י' },
          { id: 'opt-6', image: 'letter-he', label: 'ה' },
          { id: 'opt-7', image: 'letter-tav', label: 'ת' },
          { id: 'opt-8', image: 'letter-mem', label: 'מ' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q2: What letter does זברה start with? (9 letter options)
      {
        id: 'qvy-2',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-zebra',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-yod', label: 'י' },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-shin', label: 'ש' },
          { id: 'opt-8', image: 'letter-resh', label: 'ר' },
          { id: 'opt-9', image: 'letter-bet', label: 'ב' },
        ],
      },
      // Q3: REVIEW - Which word starts with א? (4 word options)
      {
        id: 'qvy-3',
        instruction: 'איזו מילה מתחילה באות א?',
        instructionAudio: '/audio/quiz-word-starts-alef.mp3',
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'אריה', isCorrect: true },
          { id: 'opt-2', image: 'word-zebra', label: 'זברה' },
          { id: 'opt-3', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-4', image: 'word-telephone', label: 'טלפון' },
        ],
      },
      // Q4: Find letter י among 9 letters
      {
        id: 'qvy-4',
        instruction: 'מצאו את האות י',
        instructionAudio: '/audio/find-yod.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-2', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-3', image: 'letter-mem', label: 'מ' },
          { id: 'opt-4', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-vav', label: 'ו' },
          { id: 'opt-7', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-8', image: 'letter-alef', label: 'א' },
          { id: 'opt-9', image: 'letter-bet', label: 'ב' },
        ],
      },
      // Q5: Which word starts with ט? (4 word options)
      {
        id: 'qvy-5',
        instruction: 'איזו מילה מתחילה באות ט?',
        instructionAudio: '/audio/word-starts-tet.mp3',
        options: [
          { id: 'opt-1', image: 'word-vered', label: 'ורד' },
          { id: 'opt-2', image: 'word-traktor', label: 'טרקטור', isCorrect: true },
          { id: 'opt-3', image: 'word-zeev', label: 'זאב' },
          { id: 'opt-4', image: 'word-yareach', label: 'ירח' },
        ],
      },
      // Q6: What letter does חתול start with? (9 letter options)
      {
        id: 'qvy-6',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-chatul',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-chet', label: 'ח', isCorrect: true },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-yod', label: 'י' },
          { id: 'opt-6', image: 'letter-he', label: 'ה' },
          { id: 'opt-7', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-8', image: 'letter-tav', label: 'ת' },
          { id: 'opt-9', image: 'letter-mem', label: 'מ' },
        ],
      },
      // Q7: REVIEW - Find letter ב among 9 letters
      {
        id: 'qvy-7',
        instruction: 'מצאו את האות ב',
        instructionAudio: '/audio/quiz-find-bet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-bet', label: 'ב', isCorrect: true },
          { id: 'opt-6', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-7', image: 'letter-peh', label: 'פ' },
          { id: 'opt-8', image: 'letter-nun', label: 'נ' },
          { id: 'opt-9', image: 'letter-yod', label: 'י' },
        ],
      },
      // Q8: Find letter ו among 9 letters
      {
        id: 'qvy-8',
        instruction: 'מצאו את האות ו',
        instructionAudio: '/audio/find-vav.mp3',
        options: [
          { id: 'opt-1', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-2', image: 'letter-nun', label: 'נ' },
          { id: 'opt-3', image: 'letter-yod', label: 'י' },
          { id: 'opt-4', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-5', image: 'letter-resh', label: 'ר' },
          { id: 'opt-6', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-7', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-8', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-9', image: 'letter-kaf', label: 'כ' },
        ],
      },
      // Q9: Which word starts with ז? (4 word options)
      {
        id: 'qvy-9',
        instruction: 'איזו מילה מתחילה באות ז?',
        instructionAudio: '/audio/word-starts-zayin.mp3',
        options: [
          { id: 'opt-1', image: 'word-waffle', label: 'וופל' },
          { id: 'opt-2', image: 'word-chavita', label: 'חביתה' },
          { id: 'opt-3', image: 'word-zanav', label: 'זנב', isCorrect: true },
          { id: 'opt-4', image: 'word-tigris', label: 'טיגריס' },
        ],
      },
      // Q10: What letter does טלפון start with? (9 letter options)
      {
        id: 'qvy-10',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-telephone',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-5', image: 'letter-yod', label: 'י' },
          { id: 'opt-6', image: 'letter-samech', label: 'ס' },
          { id: 'opt-7', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-8', image: 'letter-peh', label: 'פ' },
          { id: 'opt-9', image: 'letter-mem', label: 'מ' },
        ],
      },
      // Q11: REVIEW - Which word starts with ג? (4 word options)
      {
        id: 'qvy-11',
        instruction: 'איזו מילה מתחילה באות ג?',
        instructionAudio: '/audio/quiz-word-starts-gimel.mp3',
        options: [
          { id: 'opt-1', image: 'word-yadayim', label: 'ידיים' },
          { id: 'opt-2', image: 'word-gezer', label: 'גזר', isCorrect: true },
          { id: 'opt-3', image: 'word-vilon', label: 'וילון' },
          { id: 'opt-4', image: 'word-chagav', label: 'חגב' },
        ],
      },
      // Q12: Find letter ז among 9 letters
      {
        id: 'qvy-12',
        instruction: 'מצאו את האות ז',
        instructionAudio: '/audio/find-zayin.mp3',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-3', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-4', image: 'letter-zayin', label: 'ז', isCorrect: true },
          { id: 'opt-5', image: 'letter-nun', label: 'נ' },
          { id: 'opt-6', image: 'letter-chet', label: 'ח' },
          { id: 'opt-7', image: 'letter-tet', label: 'ט' },
          { id: 'opt-8', image: 'letter-yod', label: 'י' },
          { id: 'opt-9', image: 'letter-resh', label: 'ר' },
        ],
      },
      // Q13: Which word starts with י? (4 word options)
      {
        id: 'qvy-13',
        instruction: 'איזו מילה מתחילה באות י?',
        instructionAudio: '/audio/word-starts-yod.mp3',
        options: [
          { id: 'opt-1', image: 'word-yahalom', label: 'יהלום', isCorrect: true },
          { id: 'opt-2', image: 'word-zchuchit', label: 'זכוכית' },
          { id: 'opt-3', image: 'word-tayas', label: 'טייס' },
          { id: 'opt-4', image: 'word-chevel', label: 'חבל' },
        ],
      },
      // Q14: What letter does ורד start with? (9 letter options)
      {
        id: 'qvy-14',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-vered',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו', isCorrect: true },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-yod', label: 'י' },
          { id: 'opt-6', image: 'letter-bet', label: 'ב' },
          { id: 'opt-7', image: 'letter-resh', label: 'ר' },
          { id: 'opt-8', image: 'letter-dalet', label: 'ד' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q15: REVIEW - What letter does דג start with? (9 letter options)
      {
        id: 'qvy-15',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-dag',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-dalet', label: 'ד', isCorrect: true },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-yod', label: 'י' },
          { id: 'opt-6', image: 'letter-resh', label: 'ר' },
          { id: 'opt-7', image: 'letter-gimel', label: 'ג' },
          { id: 'opt-8', image: 'letter-bet', label: 'ב' },
          { id: 'opt-9', image: 'letter-zayin', label: 'ז' },
        ],
      },
      // Q16: Find letter ט among 9 letters
      {
        id: 'qvy-16',
        instruction: 'מצאו את האות ט',
        instructionAudio: '/audio/find-tet.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef', label: 'א' },
          { id: 'opt-2', image: 'letter-mem', label: 'מ' },
          { id: 'opt-3', image: 'letter-samech', label: 'ס' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט', isCorrect: true },
          { id: 'opt-5', image: 'letter-ayin', label: 'ע' },
          { id: 'opt-6', image: 'letter-chet', label: 'ח' },
          { id: 'opt-7', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-8', image: 'letter-bet', label: 'ב' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q17: Which word starts with ו? (4 word options)
      {
        id: 'qvy-17',
        instruction: 'איזו מילה מתחילה באות ו?',
        instructionAudio: '/audio/word-starts-vav.mp3',
        options: [
          { id: 'opt-1', image: 'word-zeev', label: 'זאב' },
          { id: 'opt-2', image: 'word-chipooshit', label: 'חיפושית' },
          { id: 'opt-3', image: 'word-vilon', label: 'וילון', isCorrect: true },
          { id: 'opt-4', image: 'word-tabaat', label: 'טבעת' },
        ],
      },
      // Q18: What letter does ירח start with? (9 letter options)
      {
        id: 'qvy-18',
        instruction: 'באיזו אות מתחילה המילה?',
        instructionAudio: '/audio/quiz-what-letter-word.mp3',
        questionImage: 'word-yareach',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-tet', label: 'ט' },
          { id: 'opt-5', image: 'letter-yod', label: 'י', isCorrect: true },
          { id: 'opt-6', image: 'letter-resh', label: 'ר' },
          { id: 'opt-7', image: 'letter-kaf', label: 'כ' },
          { id: 'opt-8', image: 'letter-lamed', label: 'ל' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q19: REVIEW - Find letter ה among 9 letters
      {
        id: 'qvy-19',
        instruction: 'מצאו את האות ה',
        instructionAudio: '/audio/quiz-find-he.mp3',
        options: [
          { id: 'opt-1', image: 'letter-vav', label: 'ו' },
          { id: 'opt-2', image: 'letter-zayin', label: 'ז' },
          { id: 'opt-3', image: 'letter-chet', label: 'ח' },
          { id: 'opt-4', image: 'letter-he', label: 'ה', isCorrect: true },
          { id: 'opt-5', image: 'letter-yod', label: 'י' },
          { id: 'opt-6', image: 'letter-tav', label: 'ת' },
          { id: 'opt-7', image: 'letter-resh', label: 'ר' },
          { id: 'opt-8', image: 'letter-bet', label: 'ב' },
          { id: 'opt-9', image: 'letter-nun', label: 'נ' },
        ],
      },
      // Q20: Which word starts with ח? (4 word options)
      {
        id: 'qvy-20',
        instruction: 'איזו מילה מתחילה באות ח?',
        instructionAudio: '/audio/word-starts-chet.mp3',
        options: [
          { id: 'opt-1', image: 'word-tavos', label: 'טווס' },
          { id: 'opt-2', image: 'word-chavita', label: 'חביתה', isCorrect: true },
          { id: 'opt-3', image: 'word-yayin', label: 'יין' },
          { id: 'opt-4', image: 'word-waffle', label: 'וופל' },
        ],
      },
    ],
  },
};

export default quizVavYod;

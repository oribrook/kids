// Game: Learn the Letter Kha (خ) - Arabic
// Category: Arabic Letters (حخدذر)
// Type: Standard selection - introduction to the letter خ
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: خبز (bread), خيار (cucumber), خروف (sheep), خاتم (ring),
//        خنفساء (beetle), خيمة (tent), خس (lettuce), خوخ (peach), خنزير (pig)

const learnKhaAr = {
  id: 'learn-kha-ar',
  categoryId: 'arabic-ha-ra',
  name: 'خ',
  description: 'למדו את האות خ',
  icon: 'خ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lkh-ar-e1',
        instruction: 'זוהי האות خ. המילים הבאות מתחילות באות خ',
        instructionAudio: '/audio/ar/intro-kha.mp3',
        questionImage: 'letter-kha-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-lechem', label: 'خبز', isCorrect: true, optionAudio: '/audio/ar/word-khubz.mp3' },
          { id: 'opt-2', image: 'word-melafafon', label: 'خيار', isCorrect: true, optionAudio: '/audio/ar/word-khiyar.mp3' },
          { id: 'opt-3', image: 'word-kharoof', label: 'خروف', isCorrect: true, optionAudio: '/audio/ar/word-kharoof.mp3' },
          { id: 'opt-4', image: 'word-tabaat', label: 'خاتم', isCorrect: true, optionAudio: '/audio/ar/word-khatim.mp3' },
          { id: 'opt-5', image: 'word-chipooshit', label: 'خنفساء', isCorrect: true, optionAudio: '/audio/ar/word-khunfusa.mp3' },
          { id: 'opt-6', image: 'word-kheima', label: 'خيمة', isCorrect: true, optionAudio: '/audio/ar/word-kheima.mp3' },
          { id: 'opt-7', image: 'word-salat', label: 'خس', isCorrect: true, optionAudio: '/audio/ar/word-khas.mp3' },
          { id: 'opt-8', image: 'word-khoukh', label: 'خوخ', isCorrect: true, optionAudio: '/audio/ar/word-khoukh.mp3' },
          { id: 'opt-9', image: 'word-pig', label: 'خنزير', isCorrect: true, optionAudio: '/audio/ar/word-khinzir.mp3' },
        ],
      },
      // Question 2: Select all خ letters from 3x3 grid
      {
        id: 'lkh-ar-e2',
        instruction: 'בחרו את כל האותיות خ',
        instructionAudio: '/audio/ar/select-all-kha.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-3', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-4', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-5', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-8', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-9', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter خ among 6 letters
      {
        id: 'lkh-ar-e3',
        instruction: 'מצאו את האות خ',
        instructionAudio: '/audio/ar/find-kha.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-kha-ar', label: 'خ', isCorrect: true },
          { id: 'opt-4', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
        ],
      },
      // Question 4: Which word starts with خ
      {
        id: 'lkh-ar-e4',
        instruction: 'איזו מילה מתחילה באות خ?',
        instructionAudio: '/audio/ar/word-starts-kha.mp3',
        options: [
          { id: 'opt-1', image: 'word-lechem', label: 'خبز', isCorrect: true, optionAudio: '/audio/ar/word-khubz.mp3' },
          { id: 'opt-2', image: 'word-sus', label: 'حصان', optionAudio: '/audio/ar/word-hisan.mp3' },
          { id: 'opt-3', image: 'word-rabbit', label: 'أرنب', optionAudio: '/audio/ar/word-arnab.mp3' },
          { id: 'opt-4', image: 'word-gamal', label: 'جمل', optionAudio: '/audio/ar/word-jamal.mp3' },
        ],
      },
      // Question 5: Review previous letter - Find letter ح
      {
        id: 'lkh-ar-e5',
        instruction: 'מצאו את האות ح',
        instructionAudio: '/audio/ar/find-ha.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark all أ and ح
      {
        id: 'lkh-ar-e6',
        instruction: 'סמנו את כל האותיות أ ו-ح',
        instructionAudio: '/audio/ar/mark-all-alef-ha.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-7', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-8', image: 'letter-ha-ar', label: 'ح', isCorrect: true },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnKhaAr;

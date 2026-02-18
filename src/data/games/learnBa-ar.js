// Game: Learn the Letter Ba (ب) - Arabic
// Category: Arabic Letters (أبتثج)
// Type: Standard selection - introduction to the letter ب
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: بطة (batta/duck), بندورة (bandora/tomato), بيت (beit/house)

const learnBaAr = {
  id: 'learn-ba-ar',
  categoryId: 'arabic-alef-jim',
  name: 'ب',
  description: 'למדו את האות ب',
  icon: 'ب',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + example words
      {
        id: 'lb-ar-e1',
        instruction: 'זוהי האות ب. המילים הבאות מתחילות באות ب',
        instructionAudio: '/audio/ar/intro-ba.mp3',
        questionImage: 'letter-ba-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-barvaz', label: 'بطة', isCorrect: true, optionAudio: '/audio/ar/word-batta.mp3' },
          { id: 'opt-2', image: 'word-bandora', label: 'بندورة', isCorrect: true, optionAudio: '/audio/ar/word-bandora.mp3' },
          { id: 'opt-3', image: 'word-bayit', label: 'بيت', isCorrect: true, optionAudio: '/audio/ar/word-beit.mp3' },
        ],
      },
      // Question 2: Select all ب letters from 3x3 grid
      {
        id: 'lb-ar-e2',
        instruction: 'בחרו את כל האותיות ب',
        instructionAudio: '/audio/ar/select-all-ba.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-7', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-8', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-9', image: 'letter-ta-ar', label: 'ت' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ب among 6 letters
      {
        id: 'lb-ar-e3',
        instruction: 'מצאו את האות ب',
        instructionAudio: '/audio/ar/find-ba.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-3', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
        ],
      },
      // Question 4: Which word starts with ب
      {
        id: 'lb-ar-e4',
        instruction: 'איזו מילה מתחילה באות ب?',
        instructionAudio: '/audio/ar/word-starts-ba.mp3',
        options: [
          { id: 'opt-1', image: 'word-barvaz', label: 'بطة', isCorrect: true, optionAudio: '/audio/ar/word-batta.mp3' },
          { id: 'opt-2', image: 'word-rabbit', label: 'أرنب', optionAudio: '/audio/ar/word-arnab.mp3' },
          { id: 'opt-3', image: 'word-gamal', label: 'جمل', optionAudio: '/audio/ar/word-jamal.mp3' },
          { id: 'opt-4', image: 'word-tapuach', label: 'تفاح', optionAudio: '/audio/ar/word-tuffah.mp3' },
        ],
      },
      // Question 5: Review previous letter - Find أ
      {
        id: 'lb-ar-e5',
        instruction: 'מצאו את האות أ',
        instructionAudio: '/audio/ar/find-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-3', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-4', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-5', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark ALL أ and ب letters
      {
        id: 'lb-ar-e6',
        instruction: 'סמנו את כל האותיות أ ו-ب',
        instructionAudio: '/audio/ar/mark-all-alef-ba.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-3', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-7', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-8', image: 'letter-ta-ar', label: 'ت' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnBaAr;

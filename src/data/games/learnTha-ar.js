// Game: Learn the Letter Tha (ث) - Arabic
// Category: Arabic Letters (أبتثج)
// Type: Standard selection - introduction to the letter ث
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: ثلج (thalj/snow), ثعلب (thalab/fox), ثوم (thoom/garlic)

const learnThaAr = {
  id: 'learn-tha-ar',
  categoryId: 'arabic-alef-jim',
  name: 'ث',
  description: 'למדו את האות ث',
  icon: 'ث',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + example words
      {
        id: 'lth-ar-e1',
        instruction: 'זוהי האות ث. המילים הבאות מתחילות באות ث',
        instructionAudio: '/audio/ar/intro-tha.mp3',
        questionImage: 'letter-tha-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-snow', label: 'ثلج', isCorrect: true, optionAudio: '/audio/ar/word-thalj.mp3' },
          { id: 'opt-2', image: 'word-fox', label: 'ثعلب', isCorrect: true, optionAudio: '/audio/ar/word-thalab.mp3' },
          { id: 'opt-3', image: 'word-thoom', label: 'ثوم', isCorrect: true, optionAudio: '/audio/ar/word-thoom.mp3' },
        ],
      },
      // Question 2: Select all ث letters from 3x3 grid
      {
        id: 'lth-ar-e2',
        instruction: 'בחרו את כל האותיות ث',
        instructionAudio: '/audio/ar/select-all-tha.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-tha-ar', label: 'ث', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-4', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-5', image: 'letter-tha-ar', label: 'ث', isCorrect: true },
          { id: 'opt-6', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-7', image: 'letter-tha-ar', label: 'ث', isCorrect: true },
          { id: 'opt-8', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-9', image: 'letter-ba-ar', label: 'ب' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ث among 6 letters
      {
        id: 'lth-ar-e3',
        instruction: 'מצאו את האות ث',
        instructionAudio: '/audio/ar/find-tha.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-2', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-3', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-4', image: 'letter-tha-ar', label: 'ث', isCorrect: true },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-ta-ar', label: 'ت' },
        ],
      },
      // Question 4: Which word starts with ث
      {
        id: 'lth-ar-e4',
        instruction: 'איזו מילה מתחילה באות ث?',
        instructionAudio: '/audio/ar/word-starts-tha.mp3',
        options: [
          { id: 'opt-1', image: 'word-fox', label: 'ثعلب', isCorrect: true, optionAudio: '/audio/ar/word-thalab.mp3' },
          { id: 'opt-2', image: 'word-rabbit', label: 'أرنب' },
          { id: 'opt-3', image: 'word-barvaz', label: 'بطة' },
          { id: 'opt-4', image: 'word-tapuach', label: 'تفاح' },
        ],
      },
      // Question 5: Review previous letter - Find ت
      {
        id: 'lth-ar-e5',
        instruction: 'מצאו את האות ت',
        instructionAudio: '/audio/ar/find-ta.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت', isCorrect: true },
          { id: 'opt-4', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark last 4 letters أ, ب, ت, ث
      {
        id: 'lth-ar-e6',
        instruction: 'סמנו את כל האותיות أ, ب, ت ו-ث',
        instructionAudio: '/audio/ar/mark-all-alef-tha.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-3', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-ta-ar', label: 'ت', isCorrect: true },
          { id: 'opt-6', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-7', image: 'letter-tha-ar', label: 'ث', isCorrect: true },
          { id: 'opt-8', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-9', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-10', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-11', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnThaAr;

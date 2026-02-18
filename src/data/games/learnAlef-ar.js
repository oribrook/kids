// Game: Learn the Letter Alef (أ) - Arabic
// Category: Arabic Letters (أبتثج)
// Type: Standard selection - introduction to the letter أ
// Teaches children to recognize the letter, its shape, and words that start with it
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Reuses existing images where possible

const learnAlefAr = {
  id: 'learn-alef-ar',
  categoryId: 'arabic-alef-jim',
  name: 'أ',
  description: 'למדו את האות أ',
  icon: 'أ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + example words
      {
        id: 'la-ar-e1',
        instruction: 'זוהי האות أ. המילים הבאות מתחילות באות أ',
        instructionAudio: '/audio/ar/intro-alef.mp3',
        questionImage: 'letter-alef-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-rabbit', label: 'أرنب', isCorrect: true, optionAudio: '/audio/ar/word-arnab.mp3' },
          { id: 'opt-2', image: 'word-arye', label: 'أسد', isCorrect: true, optionAudio: '/audio/ar/word-asad.mp3' },
          { id: 'opt-3', image: 'word-ozen', label: 'إجاص', isCorrect: true, optionAudio: '/audio/ar/word-ijas.mp3' },
        ],
      },
      // Question 2: Select all أ letters from 3x3 grid
      {
        id: 'la-ar-e2',
        instruction: 'בחרו את כל האותיות أ',
        instructionAudio: '/audio/ar/select-all-alef.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-7', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter أ among 6 letters
      {
        id: 'la-ar-e3',
        instruction: 'מצאו את האות أ',
        instructionAudio: '/audio/ar/find-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-2', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-3', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-5', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
        ],
      },
      // Question 4: Which word starts with أ
      {
        id: 'la-ar-e4',
        instruction: 'איזו מילה מתחילה באות أ?',
        instructionAudio: '/audio/ar/word-starts-alef.mp3',
        options: [
          { id: 'opt-1', image: 'word-rabbit', label: 'أرنب', isCorrect: true, optionAudio: '/audio/ar/word-arnab.mp3' },
          { id: 'opt-2', image: 'word-banana', label: 'موز', optionAudio: '/audio/ar/word-mawz.mp3' },
          { id: 'opt-3', image: 'word-gamal', label: 'جمل', optionAudio: '/audio/ar/word-jamal.mp3' },
          { id: 'opt-4', image: 'word-tapuach', label: 'تفاح', optionAudio: '/audio/ar/word-tuffah.mp3' },
        ],
      },
      // Question 5: Find letter أ among different letters
      {
        id: 'la-ar-e5',
        instruction: 'מצאו את האות أ',
        instructionAudio: '/audio/ar/find-alef.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-3', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-4', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
        ],
      },
      // Question 6: Which word starts with أ (different word)
      {
        id: 'la-ar-e6',
        instruction: 'איזו מילה מתחילה באות أ?',
        instructionAudio: '/audio/ar/word-starts-alef.mp3',
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'كلب', optionAudio: '/audio/ar/word-kalb.mp3' },
          { id: 'opt-2', image: 'word-arye', label: 'أسد', isCorrect: true, optionAudio: '/audio/ar/word-asad.mp3' },
          { id: 'opt-3', image: 'word-barvaz', label: 'بطة', optionAudio: '/audio/ar/word-batta.mp3' },
          { id: 'opt-4', image: 'word-tapuach', label: 'تفاح', optionAudio: '/audio/ar/word-tuffah.mp3' },
        ],
      },
    ],
  },
};

export default learnAlefAr;

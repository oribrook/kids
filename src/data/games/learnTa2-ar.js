// Game: Learn the Letter Ta' (ط) - Arabic
// Category: Arabic Letters (طظعغف)
// Type: Standard selection - introduction to the letter ط
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: طائرة (plane), طبل (drum), طفل (child), طاولة (table), طبيب (doctor),
//        طوق (hoop), طيارة (kite), طحين (flour), طماطم (tomato)

const learnTa2Ar = {
  id: 'learn-ta2-ar',
  categoryId: 'arabic-ta-fa',
  name: 'ط',
  description: 'למדו את האות ط',
  icon: 'ط',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lt2-ar-e1',
        instruction: 'זוהי האות ط. המילים הבאות מתחילות באות ט',
        instructionAudio: '/audio/ar/intro-ta2.mp3',
        questionImage: 'letter-ta2-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-tayas', label: 'طائرة', isCorrect: true, optionAudio: '/audio/ar/word-taira.mp3' },
          { id: 'opt-2', image: 'word-tabl', label: 'طبل', isCorrect: true, optionAudio: '/audio/ar/word-tabl.mp3' },
          { id: 'opt-3', image: 'word-tifl', label: 'طفل', isCorrect: true, optionAudio: '/audio/ar/word-tifl.mp3' },
          { id: 'opt-4', image: 'word-tawla', label: 'طاولة', isCorrect: true, optionAudio: '/audio/ar/word-tawla.mp3' },
          { id: 'opt-5', image: 'word-tabib', label: 'طبيب', isCorrect: true, optionAudio: '/audio/ar/word-tabib.mp3' },
          { id: 'opt-6', image: 'word-tawq', label: 'طوق', isCorrect: true, optionAudio: '/audio/ar/word-tawq.mp3' },
          { id: 'opt-7', image: 'word-tayara', label: 'طيارة', isCorrect: true, optionAudio: '/audio/ar/word-tayara.mp3' },
          { id: 'opt-8', image: 'word-taheen', label: 'طحين', isCorrect: true, optionAudio: '/audio/ar/word-taheen.mp3' },
          { id: 'opt-9', image: 'word-bandora', label: 'طماطم', isCorrect: true, optionAudio: '/audio/ar/word-tamatim.mp3' },
        ],
      },
      // Question 2: Select all ط letters from 3x3 grid
      {
        id: 'lt2-ar-e2',
        instruction: 'בחרו את כל האותיות ט',
        instructionAudio: '/audio/ar/select-all-ta2.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-2', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-3', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-4', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-5', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-6', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-7', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-8', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-9', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ط among 6 letters
      {
        id: 'lt2-ar-e3',
        instruction: 'מצאו את האות ט',
        instructionAudio: '/audio/ar/find-ta2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-2', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-3', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-4', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-5', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-6', image: 'letter-ra-ar', label: 'ر' },
        ],
      },
      // Question 4: Which word starts with ط
      {
        id: 'lt2-ar-e4',
        instruction: 'איזו מילה מתחילה באות ט?',
        instructionAudio: '/audio/ar/word-starts-ta2.mp3',
        options: [
          { id: 'opt-1', image: 'word-tayas', label: 'طائرة', isCorrect: true, optionAudio: '/audio/ar/word-taira.mp3' },
          { id: 'opt-2', image: 'word-tsfardea', label: 'ضفدع', optionAudio: '/audio/ar/word-difda.mp3' },
          { id: 'opt-3', image: 'word-rocket', label: 'صاروخ', optionAudio: '/audio/ar/word-sarookh.mp3' },
          { id: 'opt-4', image: 'word-dag', label: 'سمكة', optionAudio: '/audio/ar/word-samaka.mp3' },
        ],
      },
      // Question 5: Find letter ط among different letters
      {
        id: 'lt2-ar-e5',
        instruction: 'מצאו את האות ט',
        instructionAudio: '/audio/ar/find-ta2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-4', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-5', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-6', image: 'letter-sin-ar', label: 'س' },
        ],
      },
      // Question 6: Which word starts with ط (different word)
      {
        id: 'lt2-ar-e6',
        instruction: 'איזו מילה מתחילה באות ט?',
        instructionAudio: '/audio/ar/word-starts-ta2.mp3',
        options: [
          { id: 'opt-1', image: 'word-sun', label: 'شمس', optionAudio: '/audio/ar/word-shams.mp3' },
          { id: 'opt-2', image: 'word-tabl', label: 'طبل', isCorrect: true, optionAudio: '/audio/ar/word-tabl.mp3' },
          { id: 'opt-3', image: 'word-zarafa', label: 'زرافة', optionAudio: '/audio/ar/word-zarafa.mp3' },
          { id: 'opt-4', image: 'word-dub', label: 'دب', optionAudio: '/audio/ar/word-dub.mp3' },
        ],
      },
    ],
  },
};

export default learnTa2Ar;

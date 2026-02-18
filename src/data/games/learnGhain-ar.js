// Game: Learn the Letter Ghain (غ) - Arabic
// Category: Arabic Letters (طظعغف)
// Type: Standard selection - introduction to the letter غ
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: غزال (deer), غيمة (cloud), غراب (crow), غسالة (washer), غابة (forest),
//        غطاء (lid), غنم (sheep), غصن (branch), غار (cave)

const learnGhainAr = {
  id: 'learn-ghain-ar',
  categoryId: 'arabic-ta-fa',
  name: 'غ',
  description: 'למדו את האות غ',
  icon: 'غ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lg-ar-e1',
        instruction: 'זוהי האות غ. המילים הבאות מתחילות באות غ',
        instructionAudio: '/audio/ar/intro-ghain.mp3',
        questionImage: 'letter-ghain-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-ghazal', label: 'غزال', isCorrect: true, optionAudio: '/audio/ar/word-ghazal.mp3' },
          { id: 'opt-2', image: 'word-ghayma', label: 'غيمة', isCorrect: true, optionAudio: '/audio/ar/word-ghayma.mp3' },
          { id: 'opt-3', image: 'word-ghurab', label: 'غراب', isCorrect: true, optionAudio: '/audio/ar/word-ghurab.mp3' },
          { id: 'opt-4', image: 'word-ghassala', label: 'غسالة', isCorrect: true, optionAudio: '/audio/ar/word-ghassala.mp3' },
          { id: 'opt-5', image: 'word-ghaba', label: 'غابة', isCorrect: true, optionAudio: '/audio/ar/word-ghaba.mp3' },
          { id: 'opt-6', image: 'word-ghitaa', label: 'غطاء', isCorrect: true, optionAudio: '/audio/ar/word-ghitaa.mp3' },
          { id: 'opt-7', image: 'word-ghanam', label: 'غنم', isCorrect: true, optionAudio: '/audio/ar/word-ghanam.mp3' },
          { id: 'opt-8', image: 'word-ghusn', label: 'غصن', isCorrect: true, optionAudio: '/audio/ar/word-ghusn.mp3' },
          { id: 'opt-9', image: 'word-ghar', label: 'غار', isCorrect: true, optionAudio: '/audio/ar/word-ghar.mp3' },
        ],
      },
      // Question 2: Select all غ letters from 3x3 grid
      {
        id: 'lg-ar-e2',
        instruction: 'בחרו את כל האותיות غ',
        instructionAudio: '/audio/ar/select-all-ghain.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ghain-ar', label: 'غ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-3', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-4', image: 'letter-dha2-ar', label: 'ظ' },
          { id: 'opt-5', image: 'letter-ghain-ar', label: 'غ', isCorrect: true },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-7', image: 'letter-ghain-ar', label: 'غ', isCorrect: true },
          { id: 'opt-8', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-9', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter غ among 6 letters
      {
        id: 'lg-ar-e3',
        instruction: 'מצאו את האות غ',
        instructionAudio: '/audio/ar/find-ghain.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-2', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-3', image: 'letter-ghain-ar', label: 'غ', isCorrect: true },
          { id: 'opt-4', image: 'letter-dha2-ar', label: 'ظ' },
          { id: 'opt-5', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
        ],
      },
      // Question 4: Which word starts with غ
      {
        id: 'lg-ar-e4',
        instruction: 'איזו מילה מתחילה באות غ?',
        instructionAudio: '/audio/ar/word-starts-ghain.mp3',
        options: [
          { id: 'opt-1', image: 'word-ghazal', label: 'غزال', isCorrect: true, optionAudio: '/audio/ar/word-ghazal.mp3' },
          { id: 'opt-2', image: 'word-ayin-eye', label: 'عين', optionAudio: '/audio/ar/word-ayn.mp3' },
          { id: 'opt-3', image: 'word-dharf', label: 'ظرف', optionAudio: '/audio/ar/word-dharf.mp3' },
          { id: 'opt-4', image: 'word-tayas', label: 'طائرة', optionAudio: '/audio/ar/word-taira.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ع
      {
        id: 'lg-ar-e5',
        instruction: 'מצאו את האות ע',
        instructionAudio: '/audio/ar/find-ain.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-4', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-sin-ar', label: 'س' },
        ],
      },
      // Question 6: Multi-select marking ط, ظ, ع, غ (last 4 letters)
      {
        id: 'lg-ar-e6',
        instruction: 'סמנו את כל האותיות ط, ظ, ع ו-غ',
        instructionAudio: '/audio/ar/mark-all-ta2-ghain.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-4', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-5', image: 'letter-ain-ar', label: 'ع', isCorrect: true },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-7', image: 'letter-ghain-ar', label: 'غ', isCorrect: true },
          { id: 'opt-8', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-9', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-10', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-11', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-12', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnGhainAr;

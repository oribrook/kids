// Game: Learn the Letter Dad (ض) - Arabic
// Category: Arabic Letters (زسشصض)
// Type: Standard selection - introduction to the letter ض
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: ضفدع (frog), ضوء (light), ضحك (laugh), ضيف (guest), ضباب (fog),
//        ضمادة (bandage), ضبع (hyena), ضرس (tooth), ضب (lizard)

const learnDadAr = {
  id: 'learn-dad-ar',
  categoryId: 'arabic-zay-dad',
  name: 'ض',
  description: 'למדו את האות ض',
  icon: 'ض',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'ld-ar-e1',
        instruction: 'זוהי האות ض. המילים הבאות מתחילות באות ض',
        instructionAudio: '/audio/ar/intro-dad.mp3',
        questionImage: 'letter-dad-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-tsfardea', label: 'ضفدع', isCorrect: true, optionAudio: '/audio/ar/word-difda.mp3' },
          { id: 'opt-2', image: 'word-daw', label: 'ضوء', isCorrect: true, optionAudio: '/audio/ar/word-daw.mp3' },
          { id: 'opt-3', image: 'word-dahk', label: 'ضحك', isCorrect: true, optionAudio: '/audio/ar/word-dahk.mp3' },
          { id: 'opt-4', image: 'word-dayf', label: 'ضيف', isCorrect: true, optionAudio: '/audio/ar/word-dayf.mp3' },
          { id: 'opt-5', image: 'word-dabab', label: 'ضباب', isCorrect: true, optionAudio: '/audio/ar/word-dabab.mp3' },
          { id: 'opt-6', image: 'word-dimada', label: 'ضمادة', isCorrect: true, optionAudio: '/audio/ar/word-dimada.mp3' },
          { id: 'opt-7', image: 'word-daba', label: 'ضبع', isCorrect: true, optionAudio: '/audio/ar/word-daba.mp3' },
          { id: 'opt-8', image: 'word-dirs', label: 'ضرس', isCorrect: true, optionAudio: '/audio/ar/word-dirs.mp3' },
          { id: 'opt-9', image: 'word-dabb', label: 'ضب', isCorrect: true, optionAudio: '/audio/ar/word-dabb.mp3' },
        ],
      },
      // Question 2: Select all ض letters from 3x3 grid
      {
        id: 'ld-ar-e2',
        instruction: 'בחרו את כל האותיות ض',
        instructionAudio: '/audio/ar/select-all-dad.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-dad-ar', label: 'ض', isCorrect: true },
          { id: 'opt-2', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-3', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-4', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-5', image: 'letter-dad-ar', label: 'ض', isCorrect: true },
          { id: 'opt-6', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-7', image: 'letter-dad-ar', label: 'ض', isCorrect: true },
          { id: 'opt-8', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-9', image: 'letter-ha-ar', label: 'ح' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ض among 6 letters
      {
        id: 'ld-ar-e3',
        instruction: 'מצאו את האות ض',
        instructionAudio: '/audio/ar/find-dad.mp3',
        options: [
          { id: 'opt-1', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-2', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-3', image: 'letter-dad-ar', label: 'ض', isCorrect: true },
          { id: 'opt-4', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-5', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
        ],
      },
      // Question 4: Which word starts with ض
      {
        id: 'ld-ar-e4',
        instruction: 'איזו מילה מתחילה באות ض?',
        instructionAudio: '/audio/ar/word-starts-dad.mp3',
        options: [
          { id: 'opt-1', image: 'word-tsfardea', label: 'ضفدع', isCorrect: true, optionAudio: '/audio/ar/word-difda.mp3' },
          { id: 'opt-2', image: 'word-rocket', label: 'صاروخ' },
          { id: 'opt-3', image: 'word-sun', label: 'شمس' },
          { id: 'opt-4', image: 'word-dag', label: 'سمكة' },
        ],
      },
      // Question 5: Find letter ض among different letters
      {
        id: 'ld-ar-e5',
        instruction: 'מצאו את האות ض',
        instructionAudio: '/audio/ar/find-dad.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-2', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-3', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-4', image: 'letter-dad-ar', label: 'ض', isCorrect: true },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-sad-ar', label: 'ص' },
        ],
      },
      // Question 6: Which word starts with ض (different word)
      {
        id: 'ld-ar-e6',
        instruction: 'איזו מילה מתחילה באות ض?',
        instructionAudio: '/audio/ar/word-starts-dad.mp3',
        options: [
          { id: 'opt-1', image: 'word-sabon', label: 'صابون' },
          { id: 'opt-2', image: 'word-daw', label: 'ضوء', isCorrect: true, optionAudio: '/audio/ar/word-daw.mp3' },
          { id: 'opt-3', image: 'word-zarafa', label: 'زرافة' },
          { id: 'opt-4', image: 'word-etz', label: 'شجرة' },
        ],
      },
      // Question 7: MULTI-SELECT - Mark last 4 letters س, ش, ص, ض
      {
        id: 'ld-ar-e7',
        instruction: 'סמנו את כל האותיות س, ش, ص ו-ض',
        instructionAudio: '/audio/ar/mark-all-sin-dad.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-4', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-5', image: 'letter-sad-ar', label: 'ص', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-dad-ar', label: 'ض', isCorrect: true },
          { id: 'opt-8', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-9', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-10', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-11', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 4,
      },
    ],
  },
};

export default learnDadAr;

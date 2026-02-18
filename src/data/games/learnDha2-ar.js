// Game: Learn the Letter Dha' (ظ) - Arabic
// Category: Arabic Letters (طظعغف)
// Type: Standard selection - introduction to the letter ظ
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: ظرف (envelope), ظل (shadow), ظبي (gazelle), ظفر (nail), ظهر (back),
//        ظلام (darkness), ظريف (cute), ظبية (doe), ظمأ (thirst)

import { generateCumulativeReview, arabicLetterOrder } from '../arabicWordBank';

const learnDha2Ar = {
  id: 'learn-dha2-ar',
  categoryId: 'arabic-ta-fa',
  name: 'ظ',
  description: 'למדו את האות ظ',
  icon: 'ظ',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'ldh2-ar-e1',
        instruction: 'זוהי האות ظ. המילים הבאות מתחילות באות ظ',
        instructionAudio: '/audio/ar/intro-dha2.mp3',
        questionImage: 'letter-dha2-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-dharf', label: 'ظرف', isCorrect: true, optionAudio: '/audio/ar/word-dharf.mp3' },
          { id: 'opt-2', image: 'word-dhill', label: 'ظل', isCorrect: true, optionAudio: '/audio/ar/word-dhill.mp3' },
          { id: 'opt-3', image: 'word-dhabi', label: 'ظبي', isCorrect: true, optionAudio: '/audio/ar/word-dhabi.mp3' },
          { id: 'opt-4', image: 'word-dhufr', label: 'ظفر', isCorrect: true, optionAudio: '/audio/ar/word-dhufr.mp3' },
          { id: 'opt-5', image: 'word-dhahr', label: 'ظهر', isCorrect: true, optionAudio: '/audio/ar/word-dhahr.mp3' },
          { id: 'opt-6', image: 'word-dhalam', label: 'ظلام', isCorrect: true, optionAudio: '/audio/ar/word-dhalam.mp3' },
          { id: 'opt-7', image: 'word-dharif', label: 'ظريف', isCorrect: true, optionAudio: '/audio/ar/word-dharif.mp3' },
          { id: 'opt-8', image: 'word-dhabya', label: 'ظبية', isCorrect: true, optionAudio: '/audio/ar/word-dhabya.mp3' },
          { id: 'opt-9', image: 'word-dhama', label: 'ظمأ', isCorrect: true, optionAudio: '/audio/ar/word-dhama.mp3' },
        ],
      },
      // Question 2: Select all ظ letters from 3x3 grid
      {
        id: 'ldh2-ar-e2',
        instruction: 'בחרו את כל האותיות ظ',
        instructionAudio: '/audio/ar/select-all-dha2.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-3', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-4', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-5', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-6', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-7', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-8', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-9', image: 'letter-zay-ar', label: 'ز' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ظ among 6 letters
      {
        id: 'ldh2-ar-e3',
        instruction: 'מצאו את האות ظ',
        instructionAudio: '/audio/ar/find-dha2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-2', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-3', image: 'letter-dha2-ar', label: 'ظ', isCorrect: true },
          { id: 'opt-4', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-5', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-6', image: 'letter-dhal-ar', label: 'ذ' },
        ],
      },
      // Question 4: Which word starts with ظ
      {
        id: 'ldh2-ar-e4',
        instruction: 'איזו מילה מתחילה באות ظ?',
        instructionAudio: '/audio/ar/word-starts-dha2.mp3',
        options: [
          { id: 'opt-1', image: 'word-dharf', label: 'ظرف', isCorrect: true, optionAudio: '/audio/ar/word-dharf.mp3' },
          { id: 'opt-2', image: 'word-tayas', label: 'طائرة', optionAudio: '/audio/ar/word-taira.mp3' },
          { id: 'opt-3', image: 'word-tsfardea', label: 'ضفدع', optionAudio: '/audio/ar/word-difda.mp3' },
          { id: 'opt-4', image: 'word-rocket', label: 'صاروخ', optionAudio: '/audio/ar/word-sarookh.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ط
      {
        id: 'ldh2-ar-e5',
        instruction: 'מצאו את האות ט',
        instructionAudio: '/audio/ar/find-ta2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-2', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-3', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-4', image: 'letter-dha2-ar', label: 'ظ' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-6', image: 'letter-ha-ar', label: 'ح' },
        ],
      },
      // Question 6: Multi-select marking أ and ط
      {
        id: 'ldh2-ar-e6',
        instruction: 'סמנו את כל האותיות أ ו-ط',
        instructionAudio: '/audio/ar/mark-all-alef-ta2.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-4', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-5', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-6', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-7', image: 'letter-ta2-ar', label: 'ط', isCorrect: true },
          { id: 'opt-8', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-9', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-10', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-11', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(16, 'ldh2-ar', 7),
    ],
  },
};

export default learnDha2Ar;

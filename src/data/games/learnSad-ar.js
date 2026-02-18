// Game: Learn the Letter Sad (ص) - Arabic
// Category: Arabic Letters (زسشصض)
// Type: Standard selection - introduction to the letter ص
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: صاروخ (rocket), صبار (cactus), صحن (plate), صوف (wool), صندوق (box),
//        صقر (falcon), صابون (soap), صورة (picture), صنبور (faucet)

import { generateCumulativeReview, arabicLetterOrder } from '../arabicWordBank';

const learnSadAr = {
  id: 'learn-sad-ar',
  categoryId: 'arabic-zay-dad',
  name: 'ص',
  description: 'למדו את האות ص',
  icon: 'ص',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lsd-ar-e1',
        instruction: 'זוהי האות ص. המילים הבאות מתחילות באות ص',
        instructionAudio: '/audio/ar/intro-sad.mp3',
        questionImage: 'letter-sad-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-rocket', label: 'صاروخ', isCorrect: true, optionAudio: '/audio/ar/word-sarookh-sad.mp3' },
          { id: 'opt-2', image: 'word-sabbar', label: 'صبار', isCorrect: true, optionAudio: '/audio/ar/word-sabbar.mp3' },
          { id: 'opt-3', image: 'word-sahn', label: 'صحن', isCorrect: true, optionAudio: '/audio/ar/word-sahn.mp3' },
          { id: 'opt-4', image: 'word-soof', label: 'صوف', isCorrect: true, optionAudio: '/audio/ar/word-soof.mp3' },
          { id: 'opt-5', image: 'word-sundooq', label: 'صندوق', isCorrect: true, optionAudio: '/audio/ar/word-sundooq.mp3' },
          { id: 'opt-6', image: 'word-saqr', label: 'صقر', isCorrect: true, optionAudio: '/audio/ar/word-saqr.mp3' },
          { id: 'opt-7', image: 'word-sabon', label: 'صابون', isCorrect: true, optionAudio: '/audio/ar/word-saboon.mp3' },
          { id: 'opt-8', image: 'word-soora', label: 'صورة', isCorrect: true, optionAudio: '/audio/ar/word-soora.mp3' },
          { id: 'opt-9', image: 'word-sunboor', label: 'صنبور', isCorrect: true, optionAudio: '/audio/ar/word-sunboor.mp3' },
        ],
      },
      // Question 2: Select all ص letters from 3x3 grid
      {
        id: 'lsd-ar-e2',
        instruction: 'בחרו את כל האותיות ص',
        instructionAudio: '/audio/ar/select-all-sad.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-sad-ar', label: 'ص', isCorrect: true },
          { id: 'opt-2', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-3', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-4', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-5', image: 'letter-sad-ar', label: 'ص', isCorrect: true },
          { id: 'opt-6', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-7', image: 'letter-sad-ar', label: 'ص', isCorrect: true },
          { id: 'opt-8', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-9', image: 'letter-dal-ar', label: 'د' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ص among 6 letters
      {
        id: 'lsd-ar-e3',
        instruction: 'מצאו את האות ص',
        instructionAudio: '/audio/ar/find-sad.mp3',
        options: [
          { id: 'opt-1', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-2', image: 'letter-shin-ar-icon', label: 'ش' },
          { id: 'opt-3', image: 'letter-sad-ar', label: 'ص', isCorrect: true },
          { id: 'opt-4', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-5', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-6', image: 'letter-kha-ar', label: 'خ' },
        ],
      },
      // Question 4: Which word starts with ص
      {
        id: 'lsd-ar-e4',
        instruction: 'איזו מילה מתחילה באות ص?',
        instructionAudio: '/audio/ar/word-starts-sad.mp3',
        options: [
          { id: 'opt-1', image: 'word-rocket', label: 'صاروخ', isCorrect: true, optionAudio: '/audio/ar/word-sarookh-sad.mp3' },
          { id: 'opt-2', image: 'word-dag', label: 'سمكة', optionAudio: '/audio/ar/word-samaka.mp3' },
          { id: 'opt-3', image: 'word-sun', label: 'شمس', optionAudio: '/audio/ar/word-shams.mp3' },
          { id: 'opt-4', image: 'word-zarafa', label: 'زرافة', optionAudio: '/audio/ar/word-zarafa.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ش
      {
        id: 'lsd-ar-e5',
        instruction: 'מצאו את האות ش',
        instructionAudio: '/audio/ar/find-shin-ar.mp3',
        options: [
          { id: 'opt-1', image: 'letter-sad-ar', label: 'ص' },
          { id: 'opt-2', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-3', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-4', image: 'letter-zay-ar', label: 'ز' },
          { id: 'opt-5', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-6', image: 'letter-ra-ar', label: 'ر' },
        ],
      },
      // Question 6: MULTI-SELECT - Mark last 4 letters ز, س, ش, ص
      {
        id: 'lsd-ar-e6',
        instruction: 'סמנו את כל האותיות ز, س, ش ו-ص',
        instructionAudio: '/audio/ar/mark-all-zay-sad.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-zay-ar', label: 'ز', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-sin-ar', label: 'س', isCorrect: true },
          { id: 'opt-4', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-5', image: 'letter-shin-ar-icon', label: 'ش', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-sad-ar', label: 'ص', isCorrect: true },
          { id: 'opt-8', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-9', image: 'letter-kha-ar', label: 'خ' },
          { id: 'opt-10', image: 'letter-dal-ar', label: 'د' },
          { id: 'opt-11', image: 'letter-jim-ar', label: 'ج' },
          { id: 'opt-12', image: 'letter-ta-ar', label: 'ت' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(13, 'lsd-ar', 7),
    ],
  },
};

export default learnSadAr;

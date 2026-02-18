// Game: Learn the Letter Lam (ل) - Arabic
// Category: Arabic Letters (قكلمن)
// Type: Standard selection - introduction to the letter ل
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: ليمون (lemon), لعبة (toy), لسان (tongue), لبن (yogurt), ليل (night),
//        لوحة (painting), لحم (meat), لؤلؤة (pearl), لباس (clothes)

import { generateCumulativeReview } from '../arabicWordBank';

const learnLamAr = {
  id: 'learn-lam-ar',
  categoryId: 'arabic-qaf-nun',
  name: 'ل',
  description: 'למדו את האות ل',
  icon: 'ل',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'll-ar-e1',
        instruction: 'זוהי האות ل. המילים הבאות מתחילות באות ل',
        instructionAudio: '/audio/ar/intro-lam.mp3',
        questionImage: 'letter-lam-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-limon', label: 'ليمون', isCorrect: true, optionAudio: '/audio/ar/word-leimun.mp3' },
          { id: 'opt-2', image: 'word-luaba', label: 'لعبة', isCorrect: true, optionAudio: '/audio/ar/word-luaba.mp3' },
          { id: 'opt-3', image: 'word-lisan', label: 'لسان', isCorrect: true, optionAudio: '/audio/ar/word-lisan.mp3' },
          { id: 'opt-4', image: 'word-yogurt', label: 'لبن', isCorrect: true, optionAudio: '/audio/ar/word-laban.mp3' },
          { id: 'opt-5', image: 'word-leil', label: 'ليل', isCorrect: true, optionAudio: '/audio/ar/word-leil.mp3' },
          { id: 'opt-6', image: 'word-lawha', label: 'لوحة', isCorrect: true, optionAudio: '/audio/ar/word-lawha.mp3' },
          { id: 'opt-7', image: 'word-lahm', label: 'لحم', isCorrect: true, optionAudio: '/audio/ar/word-lahm.mp3' },
          { id: 'opt-8', image: 'word-lulu', label: 'لؤلؤة', isCorrect: true, optionAudio: '/audio/ar/word-lulu.mp3' },
          { id: 'opt-9', image: 'word-fustan', label: 'لباس', isCorrect: true, optionAudio: '/audio/ar/word-libas.mp3' },
        ],
      },
      // Question 2: Select all ل letters from 3x3 grid
      {
        id: 'll-ar-e2',
        instruction: 'בחרו את כל האותיות ل',
        instructionAudio: '/audio/ar/select-all-lam.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-2', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-3', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-7', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-8', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-9', image: 'letter-ghain-ar', label: 'غ' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ل among 6 letters
      {
        id: 'll-ar-e3',
        instruction: 'מצאו את האות ل',
        instructionAudio: '/audio/ar/find-lam.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-2', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-3', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-4', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-5', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-6', image: 'letter-dad-ar', label: 'ض' },
        ],
      },
      // Question 4: Which word starts with ل
      {
        id: 'll-ar-e4',
        instruction: 'איזו מילה מתחילה באות ل?',
        instructionAudio: '/audio/ar/word-starts-lam.mp3',
        options: [
          { id: 'opt-1', image: 'word-limon', label: 'ليمون', isCorrect: true, optionAudio: '/audio/ar/word-leimun.mp3' },
          { id: 'opt-2', image: 'word-kelev', label: 'كلب', optionAudio: '/audio/ar/word-kalb.mp3' },
          { id: 'opt-3', image: 'word-chatul', label: 'قطة', optionAudio: '/audio/ar/word-qitta.mp3' },
          { id: 'opt-4', image: 'word-pil', label: 'فيل', optionAudio: '/audio/ar/word-fil.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ك
      {
        id: 'll-ar-e5',
        instruction: 'מצאו את האות ك',
        instructionAudio: '/audio/ar/find-kaf-ar.mp3',
        options: [
          { id: 'opt-1', image: 'letter-lam-ar', label: 'ل' },
          { id: 'opt-2', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-3', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
        ],
      },
      // Question 6: Multi-select marking ق, ك, ل
      {
        id: 'll-ar-e6',
        instruction: 'סמנו את כל האותיות ق, ك ו-ل',
        instructionAudio: '/audio/ar/mark-all-qaf-lam.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-lam-ar', label: 'ل', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-8', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-9', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-10', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-11', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 3,
      },
      generateCumulativeReview(22, 'll-ar', 7),
    ],
  },
};

export default learnLamAr;

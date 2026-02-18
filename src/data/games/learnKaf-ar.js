// Game: Learn the Letter Kaf (ك) - Arabic
// Category: Arabic Letters (قكلمن)
// Type: Standard selection - introduction to the letter ك
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: كلب (dog), كتاب (book), كرسي (chair), كوب (cup), كرة (ball),
//        كعكة (cake), كنغر (kangaroo), كمان (violin), كمثرى (pear)

import { generateCumulativeReview } from '../arabicWordBank';

const learnKafAr = {
  id: 'learn-kaf-ar',
  categoryId: 'arabic-qaf-nun',
  name: 'ك',
  description: 'למדו את האות ك',
  icon: 'ك',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lk-ar-e1',
        instruction: 'זוהי האות ك. המילים הבאות מתחילות באות ك',
        instructionAudio: '/audio/ar/intro-kaf-ar.mp3',
        questionImage: 'letter-kaf-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'كلب', isCorrect: true, optionAudio: '/audio/ar/word-kalb.mp3' },
          { id: 'opt-2', image: 'word-sefer', label: 'كتاب', isCorrect: true, optionAudio: '/audio/ar/word-kitab.mp3' },
          { id: 'opt-3', image: 'word-kursi', label: 'كرسي', isCorrect: true, optionAudio: '/audio/ar/word-kursi.mp3' },
          { id: 'opt-4', image: 'word-finjan', label: 'كوب', isCorrect: true, optionAudio: '/audio/ar/word-kub.mp3' },
          { id: 'opt-5', image: 'word-kadur', label: 'كرة', isCorrect: true, optionAudio: '/audio/ar/word-kura.mp3' },
          { id: 'opt-6', image: 'word-uga', label: 'كعكة', isCorrect: true, optionAudio: '/audio/ar/word-kaaka.mp3' },
          { id: 'opt-7', image: 'word-kanguru', label: 'كنغر', isCorrect: true, optionAudio: '/audio/ar/word-kanghar.mp3' },
          { id: 'opt-8', image: 'word-violin', label: 'كمان', isCorrect: true, optionAudio: '/audio/ar/word-kaman.mp3' },
          { id: 'opt-9', image: 'word-kumthra', label: 'كمثرى', isCorrect: true, optionAudio: '/audio/ar/word-kumthra.mp3' },
        ],
      },
      // Question 2: Select all ك letters from 3x3 grid
      {
        id: 'lk-ar-e2',
        instruction: 'בחרו את כל האותיות ك',
        instructionAudio: '/audio/ar/select-all-kaf-ar.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-2', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-3', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-4', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-5', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-6', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-7', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-8', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-9', image: 'letter-dad-ar', label: 'ض' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ك among 6 letters
      {
        id: 'lk-ar-e3',
        instruction: 'מצאו את האות ك',
        instructionAudio: '/audio/ar/find-kaf-ar.mp3',
        options: [
          { id: 'opt-1', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-2', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-3', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-4', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-5', image: 'letter-ain-ar', label: 'ع' },
          { id: 'opt-6', image: 'letter-sin-ar', label: 'س' },
        ],
      },
      // Question 4: Which word starts with ك
      {
        id: 'lk-ar-e4',
        instruction: 'איזו מילה מתחילה באות ك?',
        instructionAudio: '/audio/ar/word-starts-kaf-ar.mp3',
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'كلب', isCorrect: true, optionAudio: '/audio/ar/word-kalb.mp3' },
          { id: 'opt-2', image: 'word-chatul', label: 'قطة', optionAudio: '/audio/ar/word-qitta.mp3' },
          { id: 'opt-3', image: 'word-pil', label: 'فيل', optionAudio: '/audio/ar/word-fil.mp3' },
          { id: 'opt-4', image: 'word-ghazal', label: 'غزال', optionAudio: '/audio/ar/word-ghazal.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ق
      {
        id: 'lk-ar-e5',
        instruction: 'מצאו את האות ق',
        instructionAudio: '/audio/ar/find-qaf.mp3',
        options: [
          { id: 'opt-1', image: 'letter-kaf-ar', label: 'ك' },
          { id: 'opt-2', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-3', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-4', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-5', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-6', image: 'letter-ain-ar', label: 'ع' },
        ],
      },
      // Question 6: Multi-select marking أ, ق, ك
      {
        id: 'lk-ar-e6',
        instruction: 'סמנו את כל האותיות أ, ق ו-ك',
        instructionAudio: '/audio/ar/mark-all-qaf-kaf.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-alef-ar', label: 'أ', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-qaf-ar', label: 'ق', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-kaf-ar', label: 'ك', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-8', image: 'letter-dad-ar', label: 'ض' },
          { id: 'opt-9', image: 'letter-ra-ar', label: 'ر' },
          { id: 'opt-10', image: 'letter-ta2-ar', label: 'ط' },
          { id: 'opt-11', image: 'letter-ha-ar', label: 'ح' },
          { id: 'opt-12', image: 'letter-jim-ar', label: 'ج' },
        ],
        correctCount: 3,
      },
      generateCumulativeReview(21, 'lk-ar', 7),
    ],
  },
};

export default learnKafAr;

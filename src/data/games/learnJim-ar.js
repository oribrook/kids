// Game: Learn the Letter Jim (ج) - Arabic
// Category: Arabic Letters (أبتثج)
// Type: Standard selection - introduction to the letter ج
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: جمل (jamal/camel), جبنة (jibne/cheese), جزر (jazar/carrots)

import { generateCumulativeReview, arabicLetterOrder } from '../arabicWordBank';

const learnJimAr = {
  id: 'learn-jim-ar',
  categoryId: 'arabic-alef-jim',
  name: 'ج',
  description: 'למדו את האות ج',
  icon: 'ج',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + example words
      {
        id: 'lj-ar-e1',
        instruction: 'זוהי האות ج. המילים הבאות מתחילות באות ج',
        instructionAudio: '/audio/ar/intro-jim.mp3',
        questionImage: 'letter-jim-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-gamal', label: 'جمل', isCorrect: true, optionAudio: '/audio/ar/word-jamal.mp3' },
          { id: 'opt-2', image: 'word-jibne', label: 'جبنة', isCorrect: true, optionAudio: '/audio/ar/word-jibne.mp3' },
          { id: 'opt-3', image: 'word-gezer', label: 'جزر', isCorrect: true, optionAudio: '/audio/ar/word-jazar.mp3' },
        ],
      },
      // Question 2: Select all ج letters from 3x3 grid
      {
        id: 'lj-ar-e2',
        instruction: 'בחרו את כל האותיות ج',
        instructionAudio: '/audio/ar/select-all-jim.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-jim-ar', label: 'ج', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-4', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج', isCorrect: true },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-7', image: 'letter-jim-ar', label: 'ج', isCorrect: true },
          { id: 'opt-8', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-9', image: 'letter-alef-ar', label: 'أ' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter ج among 6 letters
      {
        id: 'lj-ar-e3',
        instruction: 'מצאו את האות ج',
        instructionAudio: '/audio/ar/find-jim.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-2', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-3', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-4', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-5', image: 'letter-jim-ar', label: 'ج', isCorrect: true },
          { id: 'opt-6', image: 'letter-ta-ar', label: 'ت' },
        ],
      },
      // Question 4: Which word starts with ج
      {
        id: 'lj-ar-e4',
        instruction: 'איזו מילה מתחילה באות ج?',
        instructionAudio: '/audio/ar/word-starts-jim.mp3',
        options: [
          { id: 'opt-1', image: 'word-gamal', label: 'جمل', isCorrect: true, optionAudio: '/audio/ar/word-jamal.mp3' },
          { id: 'opt-2', image: 'word-rabbit', label: 'أرنب', optionAudio: '/audio/ar/word-arnab.mp3' },
          { id: 'opt-3', image: 'word-barvaz', label: 'بطة', optionAudio: '/audio/ar/word-batta.mp3' },
          { id: 'opt-4', image: 'word-tapuach', label: 'تفاح', optionAudio: '/audio/ar/word-tuffah.mp3' },
        ],
      },
      // Question 5: Find letter ج among different letters
      {
        id: 'lj-ar-e5',
        instruction: 'מצאו את האות ج',
        instructionAudio: '/audio/ar/find-jim.mp3',
        options: [
          { id: 'opt-1', image: 'letter-tha-ar', label: 'ث' },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-4', image: 'letter-jim-ar', label: 'ج', isCorrect: true },
          { id: 'opt-5', image: 'letter-ta-ar', label: 'ت' },
          { id: 'opt-6', image: 'letter-tha-ar', label: 'ث' },
        ],
      },
      // Question 6: Which word starts with ج (different word)
      {
        id: 'lj-ar-e6',
        instruction: 'איזו מילה מתחילה באות ج?',
        instructionAudio: '/audio/ar/word-starts-jim.mp3',
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'أسد', optionAudio: '/audio/ar/word-asad.mp3' },
          { id: 'opt-2', image: 'word-gezer', label: 'جزر', isCorrect: true, optionAudio: '/audio/ar/word-jazar.mp3' },
          { id: 'opt-3', image: 'word-barvaz', label: 'بطة', optionAudio: '/audio/ar/word-batta.mp3' },
          { id: 'opt-4', image: 'word-fox', label: 'ثعلب', optionAudio: '/audio/ar/word-thalab.mp3' },
        ],
      },
      // Question 7: MULTI-SELECT - Mark last 4 letters ب, ت, ث, ج
      {
        id: 'lj-ar-e7',
        instruction: 'סמנו את כל האותיות ب, ت, ث ו-ج',
        instructionAudio: '/audio/ar/mark-all-ba-jim.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ba-ar', label: 'ب', isCorrect: true },
          { id: 'opt-2', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-3', image: 'letter-ta-ar', label: 'ت', isCorrect: true },
          { id: 'opt-4', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-5', image: 'letter-tha-ar', label: 'ث', isCorrect: true },
          { id: 'opt-6', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-7', image: 'letter-jim-ar', label: 'ج', isCorrect: true },
          { id: 'opt-8', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-9', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-10', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-11', image: 'letter-alef-ar', label: 'أ' },
          { id: 'opt-12', image: 'letter-alef-ar', label: 'أ' },
        ],
        correctCount: 4,
      },
      // Cumulative review
      generateCumulativeReview(4, 'lj-ar', 8),
    ],
  },
};

export default learnJimAr;

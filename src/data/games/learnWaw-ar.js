// Game: Learn the Letter Waw (و) - Arabic
// Category: Arabic Letters (هوي)
// Type: Standard selection - introduction to the letter و
// Instructions in Hebrew, word audio in Arabic (spoken/colloquial)
// Words: وردة (rose), ولد (boy), وجه (face), وسادة (pillow),
//        وزة (goose), ورقة (leaf), وعاء (bowl), ونش (crane), وقود (fuel)

import { generateCumulativeReview } from '../arabicWordBank';

const learnWawAr = {
  id: 'learn-waw-ar',
  categoryId: 'arabic-ha-ya',
  name: 'و',
  description: 'למדו את האות و',
  icon: 'و',
  type: 'selection',
  gameType: 'standard',
  availableIn: ['easy'],

  questions: {
    easy: [
      // Question 1: Introduction - show letter + 9 example words
      {
        id: 'lw-ar-e1',
        instruction: 'זוהי האות و. המילים הבאות מתחילות באות و',
        instructionAudio: '/audio/ar/intro-waw.mp3',
        questionImage: 'letter-waw-ar',
        isIntroMultiSelect: true,
        options: [
          { id: 'opt-1', image: 'word-vered', label: 'وردة', isCorrect: true, optionAudio: '/audio/ar/word-warda.mp3' },
          { id: 'opt-2', image: 'word-walad', label: 'ولد', isCorrect: true, optionAudio: '/audio/ar/word-walad.mp3' },
          { id: 'opt-3', image: 'word-wajh', label: 'وجه', isCorrect: true, optionAudio: '/audio/ar/word-wajh.mp3' },
          { id: 'opt-4', image: 'word-wisada', label: 'وسادة', isCorrect: true, optionAudio: '/audio/ar/word-wisada.mp3' },
          { id: 'opt-5', image: 'word-wazza', label: 'وزة', isCorrect: true, optionAudio: '/audio/ar/word-wazza.mp3' },
          { id: 'opt-6', image: 'word-leaf', label: 'ورقة', isCorrect: true, optionAudio: '/audio/ar/word-waraqa.mp3' },
          { id: 'opt-7', image: 'word-wiaa', label: 'وعاء', isCorrect: true, optionAudio: '/audio/ar/word-wiaa.mp3' },
          { id: 'opt-8', image: 'word-winsh', label: 'ونش', isCorrect: true, optionAudio: '/audio/ar/word-winsh.mp3' },
          { id: 'opt-9', image: 'word-waquud', label: 'وقود', isCorrect: true, optionAudio: '/audio/ar/word-waquud.mp3' },
        ],
      },
      // Question 2: Select all و letters from 3x3 grid
      {
        id: 'lw-ar-e2',
        instruction: 'בחרו את כל האותיות و',
        instructionAudio: '/audio/ar/select-all-waw.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-waw-ar', label: 'و', isCorrect: true },
          { id: 'opt-2', image: 'letter-ha2-ar', label: 'ه' },
          { id: 'opt-3', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-4', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-5', image: 'letter-waw-ar', label: 'و', isCorrect: true },
          { id: 'opt-6', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-7', image: 'letter-waw-ar', label: 'و', isCorrect: true },
          { id: 'opt-8', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-9', image: 'letter-kaf-ar', label: 'ك' },
        ],
        correctCount: 3,
      },
      // Question 3: Find letter و among 6 letters
      {
        id: 'lw-ar-e3',
        instruction: 'מצאו את האות و',
        instructionAudio: '/audio/ar/find-waw.mp3',
        options: [
          { id: 'opt-1', image: 'letter-ha2-ar', label: 'ه' },
          { id: 'opt-2', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-3', image: 'letter-waw-ar', label: 'و', isCorrect: true },
          { id: 'opt-4', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-5', image: 'letter-lam-ar', label: 'ل' },
          { id: 'opt-6', image: 'letter-kaf-ar', label: 'ك' },
        ],
      },
      // Question 4: Which word starts with و
      {
        id: 'lw-ar-e4',
        instruction: 'איזו מילה מתחילה באות و?',
        instructionAudio: '/audio/ar/word-starts-waw.mp3',
        options: [
          { id: 'opt-1', image: 'word-vered', label: 'وردة', isCorrect: true, optionAudio: '/audio/ar/word-warda.mp3' },
          { id: 'opt-2', image: 'word-telephone', label: 'هاتف', optionAudio: '/audio/ar/word-hatif.mp3' },
          { id: 'opt-3', image: 'word-limon', label: 'ليمون', optionAudio: '/audio/ar/word-leimun.mp3' },
          { id: 'opt-4', image: 'word-chatul', label: 'قطة', optionAudio: '/audio/ar/word-qitta.mp3' },
        ],
      },
      // Question 5: Reviews previous letter ه
      {
        id: 'lw-ar-e5',
        instruction: 'מצאו את האות ه',
        instructionAudio: '/audio/ar/find-ha2.mp3',
        options: [
          { id: 'opt-1', image: 'letter-waw-ar', label: 'و' },
          { id: 'opt-2', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-3', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-4', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-5', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-6', image: 'letter-fa-ar', label: 'ف' },
        ],
      },
      // Question 6: Multi-select marking ه, و
      {
        id: 'lw-ar-e6',
        instruction: 'סמנו את כל האותיות ه ו-و',
        instructionAudio: '/audio/ar/mark-all-ha2-waw.mp3',
        multiSelect: true,
        options: [
          { id: 'opt-1', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-2', image: 'letter-ba-ar', label: 'ب' },
          { id: 'opt-3', image: 'letter-waw-ar', label: 'و', isCorrect: true },
          { id: 'opt-4', image: 'letter-fa-ar', label: 'ف' },
          { id: 'opt-5', image: 'letter-ha2-ar', label: 'ه', isCorrect: true },
          { id: 'opt-6', image: 'letter-ghain-ar', label: 'غ' },
          { id: 'opt-7', image: 'letter-waw-ar', label: 'و', isCorrect: true },
          { id: 'opt-8', image: 'letter-sin-ar', label: 'س' },
          { id: 'opt-9', image: 'letter-nun-ar', label: 'ن' },
          { id: 'opt-10', image: 'letter-mim-ar', label: 'م' },
          { id: 'opt-11', image: 'letter-qaf-ar', label: 'ق' },
          { id: 'opt-12', image: 'letter-alef-ar', label: 'أ' },
        ],
        correctCount: 4,
      },
      generateCumulativeReview(26, 'lw-ar', 7),
    ],
  },
};

export default learnWawAr;

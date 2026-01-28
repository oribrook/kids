// Audio Objects Game - לגיל הרך
// Listen to the audio and select the matching image
// For toddlers ages 3-5

const audioObjects = {
  id: 'audio-objects',
  categoryId: 'toddler-audio',
  name: 'מה שומעים?',
  description: 'הקשיבו לצליל ובחרו את התמונה המתאימה',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - כלב
      {
        id: 'q1',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-kelev.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב', isCorrect: true },
          { id: 'opt-2', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-3', image: 'word-banana', label: 'בננה' },
          { id: 'opt-4', image: 'word-tapuach', label: 'תפוח' },
        ],
      },
      // Question 2 - 4 options - דג
      {
        id: 'q2',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-dag.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-bayit', label: 'בית' },
          { id: 'opt-2', image: 'word-dag', label: 'דג', isCorrect: true },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-sus', label: 'סוס' },
        ],
      },
      // Question 3 - 9 options - תפוח
      {
        id: 'q3',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-tapuach.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-2', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח', isCorrect: true },
          { id: 'opt-4', image: 'word-banana', label: 'בננה' },
          { id: 'opt-5', image: 'word-bayit', label: 'בית' },
          { id: 'opt-6', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-7', image: 'word-sus', label: 'סוס' },
          { id: 'opt-8', image: 'word-delet', label: 'דלת' },
          { id: 'opt-9', image: 'word-gezer', label: 'גזר' },
        ],
      },
      // Question 4 - 4 options - בית
      {
        id: 'q4',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-bayit.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-bayit', label: 'בית', isCorrect: true },
          { id: 'opt-2', image: 'word-delet', label: 'דלת' },
          { id: 'opt-3', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-4', image: 'word-limon', label: 'לימון' },
        ],
      },
      // Question 5 - 9 options - גמל
      {
        id: 'q5',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-gamal.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-2', image: 'word-gamal', label: 'גמל', isCorrect: true },
          { id: 'opt-3', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-4', image: 'word-banana', label: 'בננה' },
          { id: 'opt-5', image: 'word-bayit', label: 'בית' },
          { id: 'opt-6', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-7', image: 'word-sus', label: 'סוס' },
          { id: 'opt-8', image: 'word-arye', label: 'אריה' },
          { id: 'opt-9', image: 'word-gezer', label: 'גזר' },
        ],
      },
      // Question 6 - 4 options - סוס
      {
        id: 'q6',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-sus.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-2', image: 'word-arye', label: 'אריה' },
          { id: 'opt-3', image: 'word-sus', label: 'סוס', isCorrect: true },
          { id: 'opt-4', image: 'word-pil', label: 'פיל' },
        ],
      },
      // Question 7 - 9 options - לימון
      {
        id: 'q7',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-limon.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-4', image: 'word-limon', label: 'לימון', isCorrect: true },
          { id: 'opt-5', image: 'word-avatiach', label: 'אבטיח' },
          { id: 'opt-6', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-7', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-8', image: 'word-bayit', label: 'בית' },
          { id: 'opt-9', image: 'word-kochav', label: 'כוכב' },
        ],
      },
      // Question 8 - 4 options - פיל
      {
        id: 'q8',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-pil.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-zebra', label: 'זברה' },
          { id: 'opt-2', image: 'word-pil', label: 'פיל', isCorrect: true },
          { id: 'opt-3', image: 'word-gamal', label: 'גמל' },
          { id: 'opt-4', image: 'word-nachash', label: 'נחש' },
        ],
      },
      // Question 9 - 9 options - כוכב
      {
        id: 'q9',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-kochav.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-2', image: 'word-yareach', label: 'ירח' },
          { id: 'opt-3', image: 'word-kochav', label: 'כוכב', isCorrect: true },
          { id: 'opt-4', image: 'word-geshem', label: 'גשם' },
          { id: 'opt-5', image: 'word-har', label: 'הר' },
          { id: 'opt-6', image: 'word-bayit', label: 'בית' },
          { id: 'opt-7', image: 'word-etz', label: 'עץ' },
          { id: 'opt-8', image: 'word-vered', label: 'ורד' },
          { id: 'opt-9', image: 'word-deshe', label: 'דשא' },
        ],
      },
      // Question 10 - 4 options - חתול
      {
        id: 'q10',
        instruction: 'הקשיבו ובחרו את התמונה',
        instructionAudio: '/audio/word-chatul.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-2', image: 'word-chatul', label: 'חתול', isCorrect: true },
          { id: 'opt-3', image: 'word-dag', label: 'דג' },
          { id: 'opt-4', image: 'word-tsipor', label: 'ציפור' },
        ],
      },
    ],
  },
};

export default audioObjects;

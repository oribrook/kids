// Audio Objects Game 3 - לגיל הרך
// Listen to the audio and select the matching image
// Shows first letter as hint
// For toddlers ages 3-5

const audioObjects3 = {
  id: 'audio-objects-3',
  categoryId: 'toddler-audio',
  name: 'מה שומעים? 3',
  description: 'הקשיבו לצליל ובחרו - עם רמז של אות ראשונה',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - פרפר (פ)
      {
        id: 'q1',
        instruction: 'האות הראשונה: פ',
        instructionAudio: '/audio/word-parpar.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-dvora', label: 'דבורה' },
          { id: 'opt-2', image: 'word-parpar', label: 'פרפר', isCorrect: true },
          { id: 'opt-3', image: 'word-tsipor', label: 'ציפור' },
          { id: 'opt-4', image: 'word-nemala', label: 'נמלה' },
        ],
      },
      // Question 2 - 4 options - טרקטור (ט)
      {
        id: 'q2',
        instruction: 'האות הראשונה: ט',
        instructionAudio: '/audio/word-traktor.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-traktor', label: 'טרקטור', isCorrect: true },
          { id: 'opt-2', image: 'word-rakevet', label: 'רכבת' },
          { id: 'opt-3', image: 'word-tayas', label: 'טייס' },
          { id: 'opt-4', image: 'word-sira', label: 'סירה' },
        ],
      },
      // Question 3 - 9 options - ספר (ס)
      {
        id: 'q3',
        instruction: 'האות הראשונה: ס',
        instructionAudio: '/audio/word-sefer.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-tik', label: 'תיק' },
          { id: 'opt-2', image: 'word-et', label: 'עט' },
          { id: 'opt-3', image: 'word-sefer', label: 'ספר', isCorrect: true },
          { id: 'opt-4', image: 'word-delet', label: 'דלת' },
          { id: 'opt-5', image: 'word-mita', label: 'מיטה' },
          { id: 'opt-6', image: 'word-kova', label: 'כובע' },
          { id: 'opt-7', image: 'word-sandal', label: 'סנדל' },
          { id: 'opt-8', image: 'word-shulchan', label: 'שולחן' },
          { id: 'opt-9', image: 'word-bayit', label: 'בית' },
        ],
      },
      // Question 4 - 4 options - תרנגול (ת)
      {
        id: 'q4',
        instruction: 'האות הראשונה: ת',
        instructionAudio: '/audio/word-tarnegol.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-barvaz', label: 'ברווז' },
          { id: 'opt-2', image: 'word-tarnegol', label: 'תרנגול', isCorrect: true },
          { id: 'opt-3', image: 'word-tsipor', label: 'ציפור' },
          { id: 'opt-4', image: 'word-dag', label: 'דג' },
        ],
      },
      // Question 5 - 9 options - רכבת (ר)
      {
        id: 'q5',
        instruction: 'האות הראשונה: ר',
        instructionAudio: '/audio/word-rakevet.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-traktor', label: 'טרקטור' },
          { id: 'opt-2', image: 'word-tayas', label: 'טייס' },
          { id: 'opt-3', image: 'word-sira', label: 'סירה' },
          { id: 'opt-4', image: 'word-rakevet', label: 'רכבת', isCorrect: true },
          { id: 'opt-5', image: 'word-kadur', label: 'כדור' },
          { id: 'opt-6', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-7', image: 'word-bayit', label: 'בית' },
          { id: 'opt-8', image: 'word-sus', label: 'סוס' },
          { id: 'opt-9', image: 'word-gamal', label: 'גמל' },
        ],
      },
      // Question 6 - 4 options - לב (ל)
      {
        id: 'q6',
        instruction: 'האות הראשונה: ל',
        instructionAudio: '/audio/word-lev.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kochav', label: 'כוכב' },
          { id: 'opt-2', image: 'word-lev', label: 'לב', isCorrect: true },
          { id: 'opt-3', image: 'word-shemesh', label: 'שמש' },
          { id: 'opt-4', image: 'word-kadur', label: 'כדור' },
        ],
      },
      // Question 7 - 9 options - אבטיח (א)
      {
        id: 'q7',
        instruction: 'האות הראשונה: א',
        instructionAudio: '/audio/word-avatiach.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'תפוח' },
          { id: 'opt-2', image: 'word-banana', label: 'בננה' },
          { id: 'opt-3', image: 'word-avatiach', label: 'אבטיח', isCorrect: true },
          { id: 'opt-4', image: 'word-limon', label: 'לימון' },
          { id: 'opt-5', image: 'word-gezer', label: 'גזר' },
          { id: 'opt-6', image: 'word-tut', label: 'תות' },
          { id: 'opt-7', image: 'word-melafafon', label: 'מלפפון' },
          { id: 'opt-8', image: 'word-vered', label: 'ורד' },
          { id: 'opt-9', image: 'word-etz', label: 'עץ' },
        ],
      },
      // Question 8 - 4 options - כובע (כ)
      {
        id: 'q8',
        instruction: 'האות הראשונה: כ',
        instructionAudio: '/audio/word-kova.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-sandal', label: 'סנדל' },
          { id: 'opt-2', image: 'word-naal', label: 'נעל' },
          { id: 'opt-3', image: 'word-garbayim', label: 'גרביים' },
          { id: 'opt-4', image: 'word-kova', label: 'כובע', isCorrect: true },
        ],
      },
      // Question 9 - 9 options - צפרדע (צ)
      {
        id: 'q9',
        instruction: 'האות הראשונה: צ',
        instructionAudio: '/audio/word-tsfardea.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'כלב' },
          { id: 'opt-2', image: 'word-chatul', label: 'חתול' },
          { id: 'opt-3', image: 'word-nachash', label: 'נחש' },
          { id: 'opt-4', image: 'word-tsfardea', label: 'צפרדע', isCorrect: true },
          { id: 'opt-5', image: 'word-dvora', label: 'דבורה' },
          { id: 'opt-6', image: 'word-parpar', label: 'פרפר' },
          { id: 'opt-7', image: 'word-pil', label: 'פיל' },
          { id: 'opt-8', image: 'word-arye', label: 'אריה' },
          { id: 'opt-9', image: 'word-sus', label: 'סוס' },
        ],
      },
      // Question 10 - 4 options - הר (ה)
      {
        id: 'q10',
        instruction: 'האות הראשונה: ה',
        instructionAudio: '/audio/word-har.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-etz', label: 'עץ' },
          { id: 'opt-2', image: 'word-har', label: 'הר', isCorrect: true },
          { id: 'opt-3', image: 'word-deshe', label: 'דשא' },
          { id: 'opt-4', image: 'word-vered', label: 'ורד' },
        ],
      },
    ],
  },
};

export default audioObjects3;

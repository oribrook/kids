// Games index - Letter games only, organized by letter groups

// Category: אבגדה (letters-alef-he)
import learnAlef from './learnAlef';
import learnBet from './learnBet';
import learnGimel from './learnGimel';
import learnDalet from './learnDalet';
import learnHe from './learnHe';
import quizAlefHe from './quizAlefHe';

// Category: וזחטי (letters-vav-yod)
import learnVav from './learnVav';
import learnZayin from './learnZayin';
import learnChet from './learnChet';
import learnTet from './learnTet';
import learnYod from './learnYod';
import quizVavYod from './quizVavYod';

// Category: כלמנס (letters-kaf-samech)
import learnKaf from './learnKaf';
import learnLamed from './learnLamed';
import learnMem from './learnMem';
import learnNun from './learnNun';
import learnSamech from './learnSamech';
import quizKafSamech from './quizKafSamech';

// Category: עפצקר (letters-ayin-resh)
import learnAyin from './learnAyin';
import learnPeh from './learnPeh';
import learnTsade from './learnTsade';
import learnKof from './learnKof';
import learnResh from './learnResh';
import quizAyinResh from './quizAyinResh';

// Category: שת (letters-shin-tav) - final letters
import learnShin from './learnShin';
import learnTav from './learnTav';
import quizShinTav from './quizShinTav';

// English - Category: ABCD (letters-abcd)
import learnA from './learnA';
import learnB from './learnB';
import learnC from './learnC';
import learnD from './learnD';

// English - Category: EFG (letters-efg)
import learnE from './learnE';
import learnF from './learnF';
import learnG from './learnG';

// English - Category: HIJK (letters-hijk)
import learnH from './learnH';
import learnI from './learnI';
import learnJ from './learnJ';
import learnK from './learnK';

// English - Category: LMNOP (letters-lmnop)
import learnL from './learnL';
import learnM from './learnM';
import learnN from './learnN';
import learnO from './learnO';
import learnP from './learnP';

// English - Category: QRST (letters-qrst)
import learnQ from './learnQ';
import learnRen from './learnR-en';
import learnSen from './learnS-en';
import learnTen from './learnT-en';

// English - Category: UV (letters-uv)
import learnU from './learnU';
import learnV from './learnV';

// English - Category: WXYZ (letters-wxyz)
import learnW from './learnW';
import learnX from './learnX';
import learnY from './learnY';
import learnZ from './learnZ';

// Hebrew Nikud - Category: בואו נתחיל (nikud-start)
import learnTzeirei from './learnTzeirei';
import learnChirik from './learnChirik';
import learnPatach from './learnPatach';
import learnCholam from './learnCholam';
import learnShuruk from './learnShuruk';

// Hebrew Toddler - Category: מה שומעים? (toddler-audio)
import audioObjects from './audioObjects';

// English Toddler - Category: What do we hear? (toddler-audio-en)
import audioObjectsEn from './audioObjectsEn';

// Numbers - Category: 12345 (numbers-12345)
import learnOne from './learnOne';
import learnTwo from './learnTwo';
import learnThree from './learnThree';
import learnFour from './learnFour';
import learnFive from './learnFive';

// Numbers - Category: 67890 (numbers-67890)
import learnSix from './learnSix';
import learnSeven from './learnSeven';
import learnEight from './learnEight';
import learnNine from './learnNine';
import learnTenNum from './learnTen';

// Numbers - Category: 10-20 (numbers-10-20)
import learnElevenTwelve from './learnElevenTwelve';
import learnThirteenFifteen from './learnThirteenFifteen';
import learnSixteenEighteen from './learnSixteenEighteen';
import learnNineteenTwenty from './learnNineteenTwenty';
import quizTenTwenty from './quizTenTwenty';

// Numbers - Category: 20-100 (numbers-20-100)
import learnTwentyThirty from './learnTwentyThirty';
import learnFortyFifty from './learnFortyFifty';
import learnSixtySeventy from './learnSixtySeventy';
import learnEightyNinety from './learnEightyNinety';
import learnHundred from './learnHundred';
import quizTwentyHundred from './quizTwentyHundred';

// All games registry
export const games = {
  // Category: אבגדה
  'learn-alef': learnAlef,
  'learn-bet': learnBet,
  'learn-gimel': learnGimel,
  'learn-dalet': learnDalet,
  'learn-he': learnHe,
  'quiz-alef-he': quizAlefHe,
  // Category: וזחטי
  'learn-vav': learnVav,
  'learn-zayin': learnZayin,
  'learn-chet': learnChet,
  'learn-tet': learnTet,
  'learn-yod': learnYod,
  'quiz-vav-yod': quizVavYod,
  // Category: כלמנס
  'learn-kaf': learnKaf,
  'learn-lamed': learnLamed,
  'learn-mem': learnMem,
  'learn-nun': learnNun,
  'learn-samech': learnSamech,
  'quiz-kaf-samech': quizKafSamech,
  // Category: עפצקר
  'learn-ayin': learnAyin,
  'learn-peh': learnPeh,
  'learn-tsade': learnTsade,
  'learn-kof': learnKof,
  'learn-resh': learnResh,
  'quiz-ayin-resh': quizAyinResh,
  // Category: שת
  'learn-shin': learnShin,
  'learn-tav': learnTav,
  'quiz-shin-tav': quizShinTav,
  // English - Category: ABCD
  'learn-a': learnA,
  'learn-b': learnB,
  'learn-c': learnC,
  'learn-d': learnD,
  // English - Category: EFG
  'learn-e': learnE,
  'learn-f': learnF,
  'learn-g': learnG,
  // English - Category: HIJK
  'learn-h': learnH,
  'learn-i': learnI,
  'learn-j': learnJ,
  'learn-k': learnK,
  // English - Category: LMNOP
  'learn-l': learnL,
  'learn-m': learnM,
  'learn-n': learnN,
  'learn-o': learnO,
  'learn-p': learnP,
  // English - Category: QRST
  'learn-q': learnQ,
  'learn-r': learnRen,
  'learn-s': learnSen,
  'learn-t-en': learnTen,
  // English - Category: UV
  'learn-u': learnU,
  'learn-v': learnV,
  // English - Category: WXYZ
  'learn-w': learnW,
  'learn-x': learnX,
  'learn-y': learnY,
  'learn-z': learnZ,
  // Hebrew Nikud - Category: בואו נתחיל
  'learn-tzeirei': learnTzeirei,
  'learn-chirik': learnChirik,
  'learn-patach': learnPatach,
  'learn-cholam': learnCholam,
  'learn-shuruk': learnShuruk,
  // Hebrew Toddler - Category: מה שומעים?
  'audio-objects': audioObjects,
  // English Toddler - Category: What do we hear?
  'audio-objects-en': audioObjectsEn,
  // Numbers - Category: 12345
  'learn-one': learnOne,
  'learn-two': learnTwo,
  'learn-three': learnThree,
  'learn-four': learnFour,
  'learn-five': learnFive,
  // Numbers - Category: 67890
  'learn-six': learnSix,
  'learn-seven': learnSeven,
  'learn-eight': learnEight,
  'learn-nine': learnNine,
  'learn-ten': learnTenNum,
  // Numbers - Category: 10-20
  'learn-eleven-twelve': learnElevenTwelve,
  'learn-thirteen-fifteen': learnThirteenFifteen,
  'learn-sixteen-eighteen': learnSixteenEighteen,
  'learn-nineteen-twenty': learnNineteenTwenty,
  'quiz-ten-twenty': quizTenTwenty,
  // Numbers - Category: 20-100
  'learn-twenty-thirty': learnTwentyThirty,
  'learn-forty-fifty': learnFortyFifty,
  'learn-sixty-seventy': learnSixtySeventy,
  'learn-eighty-ninety': learnEightyNinety,
  'learn-hundred': learnHundred,
  'quiz-twenty-hundred': quizTwentyHundred,
};

/**
 * Get a single game by ID
 */
export const getGameById = (id) => {
  return games[id] || null;
};

/**
 * Get games filtered by category
 * @param {string} categoryId - Category to filter by
 * @returns {Array} Games available for this category
 */
export const getGamesByCategory = (categoryId) => {
  return Object.values(games).filter(game => game.categoryId === categoryId);
};

/**
 * Get questions for a game (easy difficulty)
 * @param {object} game - The game object
 * @returns {Array} Questions for the game
 */
export const getQuestionsForDifficulty = (game) => {
  if (!game || !game.questions) return [];

  // If questions is already an array (legacy format), return it
  if (Array.isArray(game.questions)) {
    return game.questions;
  }

  // New format: questions organized by difficulty - always use easy
  return game.questions.easy || [];
};

/**
 * Get game metadata for display
 * @param {string} gameId - Game ID
 * @returns {object} Game display info
 */
export const getGameDisplayInfo = (gameId) => {
  const game = games[gameId];
  if (!game) return null;

  const questions = getQuestionsForDifficulty(game);

  return {
    id: game.id,
    name: game.name,
    description: game.description,
    icon: game.icon,
    categoryId: game.categoryId,
    questionCount: questions.length,
    maxScore: questions.length * 16,
  };
};

export default games;

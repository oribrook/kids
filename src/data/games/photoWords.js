// Game: Photo Words (התמונה שלי!)
// Standalone game: a blurred photo hides behind a name. The child picks the
// name's letters in order - each correct letter clears part of the blur.
// To add a new photo: add an entry to photoWordsList + photo in
// public/images/photos/ + name audio in public/audio/ (edge-tts, with nikud).
// RULE: words must NOT contain א ה ו י - those letters are silent/vowel
// carriers here and confuse a kid who is sounding the word out.

export const photoWordsList = [
  {
    id: 'kedem',
    letters: ['ק', 'ד', 'ם'],
    displayLetters: ['קֶ', 'דֶ', 'ם'],
    fullName: 'קֶדֶם',
    image: '/images/photos/kedem.jpg',
    nameAudio: '/audio/photo-name-kedem.mp3',
  },
  {
    id: 'carmel',
    letters: ['כ', 'ר', 'מ', 'ל'],
    displayLetters: ['כַּ', 'רְ', 'מֶ', 'ל'],
    fullName: 'כַּרְמֶל',
    image: '/images/photos/carmel.jpg',
    nameAudio: '/audio/photo-name-carmel.mp3',
  },
  {
    id: 'kelev',
    letters: ['כ', 'ל', 'ב'],
    displayLetters: ['כֶּ', 'לֶ', 'ב'],
    fullName: 'כֶּלֶב',
    image: '/images/photos/kelev.jpg',
    nameAudio: '/audio/photo-name-kelev.mp3',
  },
  {
    id: 'dag',
    letters: ['ד', 'ג'],
    displayLetters: ['דָּ', 'ג'],
    fullName: 'דָּג',
    image: '/images/photos/dag.jpg',
    nameAudio: '/audio/photo-name-dag.mp3',
  },
  {
    id: 'lev',
    letters: ['ל', 'ב'],
    displayLetters: ['לֵ', 'ב'],
    fullName: 'לֵב',
    image: '/images/photos/lev.jpg',
    nameAudio: '/audio/photo-name-lev.mp3',
  },
  {
    id: 'gezer',
    letters: ['ג', 'ז', 'ר'],
    displayLetters: ['גֶּ', 'זֶ', 'ר'],
    fullName: 'גֶּזֶר',
    image: '/images/photos/gezer.jpg',
    nameAudio: '/audio/photo-name-gezer.mp3',
  },
  {
    id: 'gamal',
    letters: ['ג', 'מ', 'ל'],
    displayLetters: ['גָּ', 'מָ', 'ל'],
    fullName: 'גָּמָל',
    image: '/images/photos/gamal.jpg',
    nameAudio: '/audio/photo-name-gamal.mp3',
  },
  {
    id: 'namer',
    letters: ['נ', 'מ', 'ר'],
    displayLetters: ['נָ', 'מֵ', 'ר'],
    fullName: 'נָמֵר',
    image: '/images/photos/namer.jpg',
    nameAudio: '/audio/photo-name-namer.mp3',
  },
  {
    id: 'dvash',
    letters: ['ד', 'ב', 'ש'],
    displayLetters: ['דְּ', 'בַ', 'שׁ'],
    fullName: 'דְּבַשׁ',
    image: '/images/photos/dvash.jpg',
    nameAudio: '/audio/photo-name-dvash.mp3',
  },
  {
    id: 'regel',
    letters: ['ר', 'ג', 'ל'],
    displayLetters: ['רֶ', 'גֶ', 'ל'],
    fullName: 'רֶגֶל',
    image: '/images/photos/regel.jpg',
    nameAudio: '/audio/photo-name-regel.mp3',
  },
];

const photoWords = {
  id: 'photo-words',
  categoryId: 'photo-words',
  name: 'התמונה שלי!',
  description: 'מי מסתתר בתמונה?',
  icon: '📸',
  type: 'selection',
  gameType: 'photoWord',
  availableIn: ['easy'],
  questions: { easy: [] },
};

export default photoWords;

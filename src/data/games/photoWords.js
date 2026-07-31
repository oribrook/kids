// Game: Photo Words (התמונה שלי!)
// Standalone game: a blurred photo hides behind a name. The child picks the
// name's letters in order - each correct letter clears part of the blur.
// To add a new photo: add an entry to photoWordsList + photo in
// public/images/photos/ + name audio in public/audio/ (edge-tts, with nikud).

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
    id: 'sus',
    letters: ['ס', 'ו', 'ס'],
    displayLetters: ['ס', 'וּ', 'ס'],
    fullName: 'סוּס',
    image: '/images/photos/sus.jpg',
    nameAudio: '/audio/photo-name-sus.mp3',
  },
  {
    id: 'tik',
    letters: ['ת', 'י', 'ק'],
    displayLetters: ['תִּ', 'י', 'ק'],
    fullName: 'תִּיק',
    image: '/images/photos/tik.jpg',
    nameAudio: '/audio/photo-name-tik.mp3',
  },
  {
    id: 'kadur',
    letters: ['כ', 'ד', 'ו', 'ר'],
    displayLetters: ['כַּ', 'דּ', 'וּ', 'ר'],
    fullName: 'כַּדּוּר',
    image: '/images/photos/kadur.jpg',
    nameAudio: '/audio/photo-name-kadur.mp3',
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

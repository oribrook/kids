// Audio Objects Game 4 - English version
// Listen to the audio and select the matching image
// Shows first letter as hint
// For toddlers ages 3-5

const audioObjectsEn4 = {
  id: 'audio-objects-en-4',
  categoryId: 'toddler-audio-en',
  name: 'What do we hear? 4',
  description: 'Listen and select - with first letter hint',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - Pig (P)
      {
        id: 'q1',
        instruction: 'First letter: P',
        instructionAudio: '/audio/en/word-pig.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-2', image: 'word-pig', label: 'Pig', isCorrect: true },
          { id: 'opt-3', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-4', image: 'word-barvaz', label: 'Duck' },
        ],
      },
      // Question 2 - 4 options - Owl (O)
      {
        id: 'q2',
        instruction: 'First letter: O',
        instructionAudio: '/audio/en/word-owl.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-tsipor', label: 'Bird' },
          { id: 'opt-2', image: 'word-parpar', label: 'Butterfly' },
          { id: 'opt-3', image: 'word-owl', label: 'Owl', isCorrect: true },
          { id: 'opt-4', image: 'word-barvaz', label: 'Duck' },
        ],
      },
      // Question 3 - 9 options - Kangaroo (K)
      {
        id: 'q3',
        instruction: 'First letter: K',
        instructionAudio: '/audio/en/word-kangaroo.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'Lion' },
          { id: 'opt-2', image: 'word-pil', label: 'Elephant' },
          { id: 'opt-3', image: 'word-kanguru', label: 'Kangaroo', isCorrect: true },
          { id: 'opt-4', image: 'word-zebra', label: 'Zebra' },
          { id: 'opt-5', image: 'word-gamal', label: 'Camel' },
          { id: 'opt-6', image: 'word-tigris', label: 'Tiger' },
          { id: 'opt-7', image: 'word-namer', label: 'Leopard' },
          { id: 'opt-8', image: 'word-sus', label: 'Horse' },
          { id: 'opt-9', image: 'word-rabbit', label: 'Rabbit' },
        ],
      },
      // Question 4 - 4 options - Ant (A)
      {
        id: 'q4',
        instruction: 'First letter: A',
        instructionAudio: '/audio/en/word-ant.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-nemala', label: 'Ant', isCorrect: true },
          { id: 'opt-2', image: 'word-dvora', label: 'Bee' },
          { id: 'opt-3', image: 'word-parpar', label: 'Butterfly' },
          { id: 'opt-4', image: 'word-chipooshit', label: 'Beetle' },
        ],
      },
      // Question 5 - 9 options - Telephone (T)
      {
        id: 'q5',
        instruction: 'First letter: T',
        instructionAudio: '/audio/en/word-telephone.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-sefer', label: 'Book' },
          { id: 'opt-2', image: 'word-telephone', label: 'Telephone', isCorrect: true },
          { id: 'opt-3', image: 'word-key', label: 'Key' },
          { id: 'opt-4', image: 'word-kova', label: 'Hat' },
          { id: 'opt-5', image: 'word-delet', label: 'Door' },
          { id: 'opt-6', image: 'word-mita', label: 'Bed' },
          { id: 'opt-7', image: 'word-sandal', label: 'Sandal' },
          { id: 'opt-8', image: 'word-tik', label: 'Bag' },
          { id: 'opt-9', image: 'word-shulchan', label: 'Table' },
        ],
      },
      // Question 6 - 4 options - Fox (F)
      {
        id: 'q6',
        instruction: 'First letter: F',
        instructionAudio: '/audio/en/word-fox.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-zeev', label: 'Wolf' },
          { id: 'opt-2', image: 'word-fox', label: 'Fox', isCorrect: true },
          { id: 'opt-3', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-4', image: 'word-chatul', label: 'Cat' },
        ],
      },
      // Question 7 - 9 options - Violin (V)
      {
        id: 'q7',
        instruction: 'First letter: V',
        instructionAudio: '/audio/en/word-violin.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-2', image: 'word-kochav', label: 'Star' },
          { id: 'opt-3', image: 'word-violin', label: 'Violin', isCorrect: true },
          { id: 'opt-4', image: 'word-telephone', label: 'Telephone' },
          { id: 'opt-5', image: 'word-key', label: 'Key' },
          { id: 'opt-6', image: 'word-sefer', label: 'Book' },
          { id: 'opt-7', image: 'word-delet', label: 'Door' },
          { id: 'opt-8', image: 'word-ner', label: 'Candle' },
          { id: 'opt-9', image: 'word-bayit', label: 'House' },
        ],
      },
      // Question 8 - 4 options - Leaf (L)
      {
        id: 'q8',
        instruction: 'First letter: L',
        instructionAudio: '/audio/en/word-leaf.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-etz', label: 'Tree' },
          { id: 'opt-2', image: 'word-vered', label: 'Flower' },
          { id: 'opt-3', image: 'word-leaf', label: 'Leaf', isCorrect: true },
          { id: 'opt-4', image: 'word-deshe', label: 'Grass' },
        ],
      },
      // Question 9 - 9 options - Ice Cream (I)
      {
        id: 'q9',
        instruction: 'First letter: I',
        instructionAudio: '/audio/en/word-ice-cream.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-uga', label: 'Cake' },
          { id: 'opt-2', image: 'word-ice-cream', label: 'Ice Cream', isCorrect: true },
          { id: 'opt-3', image: 'word-banana', label: 'Banana' },
          { id: 'opt-4', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-5', image: 'word-lechem', label: 'Bread' },
          { id: 'opt-6', image: 'word-limon', label: 'Lemon' },
          { id: 'opt-7', image: 'word-gezer', label: 'Carrot' },
          { id: 'opt-8', image: 'word-tut', label: 'Strawberry' },
          { id: 'opt-9', image: 'word-avatiach', label: 'Watermelon' },
        ],
      },
      // Question 10 - 4 options - Ear (E)
      {
        id: 'q10',
        instruction: 'First letter: E',
        instructionAudio: '/audio/en/word-ear.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-ayin-eye', label: 'Eye' },
          { id: 'opt-2', image: 'word-ozen', label: 'Ear', isCorrect: true },
          { id: 'opt-3', image: 'word-regel', label: 'Foot' },
          { id: 'opt-4', image: 'word-yadayim', label: 'Hands' },
        ],
      },
    ],
  },
};

export default audioObjectsEn4;

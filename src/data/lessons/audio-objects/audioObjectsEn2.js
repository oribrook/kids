// Audio Objects Game 2 - English version
// Listen to the audio and select the matching image
// Shows first letter as hint
// For toddlers ages 3-5

const audioObjectsEn2 = {
  id: 'audio-objects-en-2',
  categoryId: 'toddler-audio-en',
  name: 'What do we hear? 2',
  description: 'Listen and select - with first letter hint',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - Horse (H)
      {
        id: 'q1',
        instruction: 'First letter: H',
        instructionAudio: '/audio/en/word-horse.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-2', image: 'word-sus', label: 'Horse', isCorrect: true },
          { id: 'opt-3', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-4', image: 'word-gamal', label: 'Camel' },
        ],
      },
      // Question 2 - 4 options - Frog (F)
      {
        id: 'q2',
        instruction: 'First letter: F',
        instructionAudio: '/audio/en/word-frog.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-nachash', label: 'Snake' },
          { id: 'opt-2', image: 'word-dag', label: 'Fish' },
          { id: 'opt-3', image: 'word-tsfardea', label: 'Frog', isCorrect: true },
          { id: 'opt-4', image: 'word-dvora', label: 'Bee' },
        ],
      },
      // Question 3 - 9 options - Moon (M)
      {
        id: 'q3',
        instruction: 'First letter: M',
        instructionAudio: '/audio/en/word-moon.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-shemesh', label: 'Sun' },
          { id: 'opt-2', image: 'word-kochav', label: 'Star' },
          { id: 'opt-3', image: 'word-yareach', label: 'Moon', isCorrect: true },
          { id: 'opt-4', image: 'word-geshem', label: 'Rain' },
          { id: 'opt-5', image: 'word-har', label: 'Mountain' },
          { id: 'opt-6', image: 'word-bayit', label: 'House' },
          { id: 'opt-7', image: 'word-etz', label: 'Tree' },
          { id: 'opt-8', image: 'word-vered', label: 'Flower' },
          { id: 'opt-9', image: 'word-deshe', label: 'Grass' },
        ],
      },
      // Question 4 - 4 options - Duck (D)
      {
        id: 'q4',
        instruction: 'First letter: D',
        instructionAudio: '/audio/en/word-duck.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-tarnegol', label: 'Rooster' },
          { id: 'opt-2', image: 'word-barvaz', label: 'Duck', isCorrect: true },
          { id: 'opt-3', image: 'word-tsipor', label: 'Bird' },
          { id: 'opt-4', image: 'word-dag', label: 'Fish' },
        ],
      },
      // Question 5 - 9 options - Lemon (L)
      {
        id: 'q5',
        instruction: 'First letter: L',
        instructionAudio: '/audio/en/word-lemon.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-banana', label: 'Banana' },
          { id: 'opt-3', image: 'word-limon', label: 'Lemon', isCorrect: true },
          { id: 'opt-4', image: 'word-gezer', label: 'Carrot' },
          { id: 'opt-5', image: 'word-avatiach', label: 'Watermelon' },
          { id: 'opt-6', image: 'word-tut', label: 'Strawberry' },
          { id: 'opt-7', image: 'word-melafafon', label: 'Cucumber' },
          { id: 'opt-8', image: 'word-uga', label: 'Cake' },
          { id: 'opt-9', image: 'word-lechem', label: 'Bread' },
        ],
      },
      // Question 6 - 4 options - Rabbit (R)
      {
        id: 'q6',
        instruction: 'First letter: R',
        instructionAudio: '/audio/en/word-rabbit.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-achbar', label: 'Mouse' },
          { id: 'opt-2', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-3', image: 'word-rabbit', label: 'Rabbit', isCorrect: true },
          { id: 'opt-4', image: 'word-kelev', label: 'Dog' },
        ],
      },
      // Question 7 - 9 options - Tiger (T)
      {
        id: 'q7',
        instruction: 'First letter: T',
        instructionAudio: '/audio/en/word-tiger.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'Lion' },
          { id: 'opt-2', image: 'word-pil', label: 'Elephant' },
          { id: 'opt-3', image: 'word-tigris', label: 'Tiger', isCorrect: true },
          { id: 'opt-4', image: 'word-zebra', label: 'Zebra' },
          { id: 'opt-5', image: 'word-gamal', label: 'Camel' },
          { id: 'opt-6', image: 'word-sus', label: 'Horse' },
          { id: 'opt-7', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-8', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-9', image: 'word-namer', label: 'Leopard' },
        ],
      },
      // Question 8 - 4 options - Cake (C)
      {
        id: 'q8',
        instruction: 'First letter: C',
        instructionAudio: '/audio/en/word-cake.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-lechem', label: 'Bread' },
          { id: 'opt-2', image: 'word-uga', label: 'Cake', isCorrect: true },
          { id: 'opt-3', image: 'word-pita', label: 'Pita' },
          { id: 'opt-4', image: 'word-banana', label: 'Banana' },
        ],
      },
      // Question 9 - 9 options - Zebra (Z)
      {
        id: 'q9',
        instruction: 'First letter: Z',
        instructionAudio: '/audio/en/word-zebra-en.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-arye', label: 'Lion' },
          { id: 'opt-2', image: 'word-pil', label: 'Elephant' },
          { id: 'opt-3', image: 'word-sus', label: 'Horse' },
          { id: 'opt-4', image: 'word-gamal', label: 'Camel' },
          { id: 'opt-5', image: 'word-zebra', label: 'Zebra', isCorrect: true },
          { id: 'opt-6', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-7', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-8', image: 'word-tsfardea', label: 'Frog' },
          { id: 'opt-9', image: 'word-nachash', label: 'Snake' },
        ],
      },
      // Question 10 - 4 options - Flower (F)
      {
        id: 'q10',
        instruction: 'First letter: F',
        instructionAudio: '/audio/en/word-flower.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-etz', label: 'Tree' },
          { id: 'opt-2', image: 'word-vered', label: 'Flower', isCorrect: true },
          { id: 'opt-3', image: 'word-deshe', label: 'Grass' },
          { id: 'opt-4', image: 'word-har', label: 'Mountain' },
        ],
      },
    ],
  },
};

export default audioObjectsEn2;

// Audio Objects Game - English version
// Listen to the audio and select the matching image
// For toddlers ages 3-5

const audioObjectsEn = {
  id: 'audio-objects-en',
  categoryId: 'toddler-audio-en',
  name: 'What do we hear?',
  description: 'Listen and select the matching image',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - Dog
      {
        id: 'q1',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-dog.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog', isCorrect: true },
          { id: 'opt-2', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-3', image: 'word-dag', label: 'Fish' },
          { id: 'opt-4', image: 'word-tapuach', label: 'Apple' },
        ],
      },
      // Question 2 - 4 options - Cat
      {
        id: 'q2',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-cat.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-2', image: 'word-chatul', label: 'Cat', isCorrect: true },
          { id: 'opt-3', image: 'bird', label: 'Bird' },
          { id: 'opt-4', image: 'word-sus', label: 'Horse' },
        ],
      },
      // Question 3 - 9 options - Apple
      {
        id: 'q3',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-apple.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-2', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-3', image: 'word-tapuach', label: 'Apple', isCorrect: true },
          { id: 'opt-4', image: 'word-banana', label: 'Banana' },
          { id: 'opt-5', image: 'word-bayit', label: 'House' },
          { id: 'opt-6', image: 'word-dag', label: 'Fish' },
          { id: 'opt-7', image: 'word-sus', label: 'Horse' },
          { id: 'opt-8', image: 'word-delet', label: 'Door' },
          { id: 'opt-9', image: 'word-limon', label: 'Lemon' },
        ],
      },
      // Question 4 - 4 options - Ball
      {
        id: 'q4',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-ball.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-kadur', label: 'Ball', isCorrect: true },
          { id: 'opt-2', image: 'word-kochav', label: 'Star' },
          { id: 'opt-3', image: 'word-shemesh', label: 'Sun' },
          { id: 'opt-4', image: 'word-yareach', label: 'Moon' },
        ],
      },
      // Question 5 - 9 options - Elephant
      {
        id: 'q5',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-elephant.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-2', image: 'word-pil', label: 'Elephant', isCorrect: true },
          { id: 'opt-3', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-4', image: 'word-banana', label: 'Banana' },
          { id: 'opt-5', image: 'word-bayit', label: 'House' },
          { id: 'opt-6', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-7', image: 'word-sus', label: 'Horse' },
          { id: 'opt-8', image: 'word-arye', label: 'Lion' },
          { id: 'opt-9', image: 'word-zebra', label: 'Zebra' },
        ],
      },
      // Question 6 - 4 options - Fish
      {
        id: 'q6',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-fish.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'bird', label: 'Bird' },
          { id: 'opt-2', image: 'word-tsfardea', label: 'Frog' },
          { id: 'opt-3', image: 'word-dag', label: 'Fish', isCorrect: true },
          { id: 'opt-4', image: 'word-nachash', label: 'Snake' },
        ],
      },
      // Question 7 - 9 options - Sun
      {
        id: 'q7',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-sun.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-yareach', label: 'Moon' },
          { id: 'opt-2', image: 'word-kochav', label: 'Star' },
          { id: 'opt-3', image: 'word-geshem', label: 'Rain' },
          { id: 'opt-4', image: 'word-shemesh', label: 'Sun', isCorrect: true },
          { id: 'opt-5', image: 'word-har', label: 'Mountain' },
          { id: 'opt-6', image: 'word-bayit', label: 'House' },
          { id: 'opt-7', image: 'word-etz', label: 'Tree' },
          { id: 'opt-8', image: 'flower', label: 'Flower' },
          { id: 'opt-9', image: 'word-deshe', label: 'Grass' },
        ],
      },
      // Question 8 - 4 options - Lion
      {
        id: 'q8',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-lion.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-zebra', label: 'Zebra' },
          { id: 'opt-2', image: 'word-arye', label: 'Lion', isCorrect: true },
          { id: 'opt-3', image: 'word-tigris', label: 'Tiger' },
          { id: 'opt-4', image: 'word-pil', label: 'Elephant' },
        ],
      },
      // Question 9 - 9 options - Star
      {
        id: 'q9',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-star.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-shemesh', label: 'Sun' },
          { id: 'opt-2', image: 'word-yareach', label: 'Moon' },
          { id: 'opt-3', image: 'word-kochav', label: 'Star', isCorrect: true },
          { id: 'opt-4', image: 'word-geshem', label: 'Rain' },
          { id: 'opt-5', image: 'word-har', label: 'Mountain' },
          { id: 'opt-6', image: 'word-bayit', label: 'House' },
          { id: 'opt-7', image: 'word-etz', label: 'Tree' },
          { id: 'opt-8', image: 'word-vered', label: 'Flower' },
          { id: 'opt-9', image: 'word-deshe', label: 'Grass' },
        ],
      },
      // Question 10 - 4 options - Banana
      {
        id: 'q10',
        instruction: 'Listen and pick the picture',
        instructionAudio: '/audio/en/word-banana.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-banana', label: 'Banana', isCorrect: true },
          { id: 'opt-3', image: 'word-limon', label: 'Lemon' },
          { id: 'opt-4', image: 'grapes', label: 'Grapes' },
        ],
      },
    ],
  },
};

export default audioObjectsEn;

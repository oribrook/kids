// Audio Objects Game 3 - English version
// Listen to the audio and select the matching image
// Shows first letter as hint
// For toddlers ages 3-5

const audioObjectsEn3 = {
  id: 'audio-objects-en-3',
  categoryId: 'toddler-audio-en',
  name: 'What do we hear? 3',
  description: 'Listen and select - with first letter hint',
  icon: '🔊',
  type: 'selection',

  questions: {
    easy: [
      // Question 1 - 4 options - Snake (S)
      {
        id: 'q1',
        instruction: 'First letter: S',
        instructionAudio: '/audio/en/word-snake.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-tsfardea', label: 'Frog' },
          { id: 'opt-2', image: 'word-nachash', label: 'Snake', isCorrect: true },
          { id: 'opt-3', image: 'word-dag', label: 'Fish' },
          { id: 'opt-4', image: 'word-dvora', label: 'Bee' },
        ],
      },
      // Question 2 - 4 options - Key (K)
      {
        id: 'q2',
        instruction: 'First letter: K',
        instructionAudio: '/audio/en/word-key.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-delet', label: 'Door' },
          { id: 'opt-2', image: 'word-sefer', label: 'Book' },
          { id: 'opt-3', image: 'word-key', label: 'Key', isCorrect: true },
          { id: 'opt-4', image: 'word-kova', label: 'Hat' },
        ],
      },
      // Question 3 - 9 options - Rainbow (R)
      {
        id: 'q3',
        instruction: 'First letter: R',
        instructionAudio: '/audio/en/word-rainbow.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-shemesh', label: 'Sun' },
          { id: 'opt-2', image: 'word-yareach', label: 'Moon' },
          { id: 'opt-3', image: 'word-kochav', label: 'Star' },
          { id: 'opt-4', image: 'word-rainbow', label: 'Rainbow', isCorrect: true },
          { id: 'opt-5', image: 'word-geshem', label: 'Rain' },
          { id: 'opt-6', image: 'word-etz', label: 'Tree' },
          { id: 'opt-7', image: 'word-har', label: 'Mountain' },
          { id: 'opt-8', image: 'word-vered', label: 'Flower' },
          { id: 'opt-9', image: 'word-bayit', label: 'House' },
        ],
      },
      // Question 4 - 4 options - Bird (B)
      {
        id: 'q4',
        instruction: 'First letter: B',
        instructionAudio: '/audio/en/word-bird.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-parpar', label: 'Butterfly' },
          { id: 'opt-2', image: 'word-tsipor', label: 'Bird', isCorrect: true },
          { id: 'opt-3', image: 'word-dvora', label: 'Bee' },
          { id: 'opt-4', image: 'word-tsfardea', label: 'Frog' },
        ],
      },
      // Question 5 - 9 options - Rocket (R)
      {
        id: 'q5',
        instruction: 'First letter: R',
        instructionAudio: '/audio/en/word-rocket.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-tayas', label: 'Airplane' },
          { id: 'opt-2', image: 'word-traktor', label: 'Tractor' },
          { id: 'opt-3', image: 'word-rocket', label: 'Rocket', isCorrect: true },
          { id: 'opt-4', image: 'word-rakevet', label: 'Train' },
          { id: 'opt-5', image: 'word-sira', label: 'Boat' },
          { id: 'opt-6', image: 'word-kadur', label: 'Ball' },
          { id: 'opt-7', image: 'word-bayit', label: 'House' },
          { id: 'opt-8', image: 'word-kochav', label: 'Star' },
          { id: 'opt-9', image: 'word-shemesh', label: 'Sun' },
        ],
      },
      // Question 6 - 4 options - Grapes (G)
      {
        id: 'q6',
        instruction: 'First letter: G',
        instructionAudio: '/audio/en/word-grapes.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-tapuach', label: 'Apple' },
          { id: 'opt-2', image: 'word-banana', label: 'Banana' },
          { id: 'opt-3', image: 'word-limon', label: 'Lemon' },
          { id: 'opt-4', image: 'word-inab', label: 'Grapes', isCorrect: true },
        ],
      },
      // Question 7 - 9 options - Mouse (M)
      {
        id: 'q7',
        instruction: 'First letter: M',
        instructionAudio: '/audio/en/word-mouse.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-kelev', label: 'Dog' },
          { id: 'opt-2', image: 'word-chatul', label: 'Cat' },
          { id: 'opt-3', image: 'word-achbar', label: 'Mouse', isCorrect: true },
          { id: 'opt-4', image: 'word-rabbit', label: 'Rabbit' },
          { id: 'opt-5', image: 'word-arye', label: 'Lion' },
          { id: 'opt-6', image: 'word-pil', label: 'Elephant' },
          { id: 'opt-7', image: 'word-sus', label: 'Horse' },
          { id: 'opt-8', image: 'word-zebra', label: 'Zebra' },
          { id: 'opt-9', image: 'word-tsfardea', label: 'Frog' },
        ],
      },
      // Question 8 - 4 options - Door (D)
      {
        id: 'q8',
        instruction: 'First letter: D',
        instructionAudio: '/audio/en/word-door.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-bayit', label: 'House' },
          { id: 'opt-2', image: 'word-delet', label: 'Door', isCorrect: true },
          { id: 'opt-3', image: 'word-mita', label: 'Bed' },
          { id: 'opt-4', image: 'word-shulchan', label: 'Table' },
        ],
      },
      // Question 9 - 9 options - Whale (W)
      {
        id: 'q9',
        instruction: 'First letter: W',
        instructionAudio: '/audio/en/word-whale.mp3',
        autoPlayAudio: true,
        optionsGrid9: true,
        options: [
          { id: 'opt-1', image: 'word-dag', label: 'Fish' },
          { id: 'opt-2', image: 'word-whale', label: 'Whale', isCorrect: true },
          { id: 'opt-3', image: 'word-tsfardea', label: 'Frog' },
          { id: 'opt-4', image: 'word-nachash', label: 'Snake' },
          { id: 'opt-5', image: 'word-barvaz', label: 'Duck' },
          { id: 'opt-6', image: 'word-tsipor', label: 'Bird' },
          { id: 'opt-7', image: 'word-dvora', label: 'Bee' },
          { id: 'opt-8', image: 'word-pil', label: 'Elephant' },
          { id: 'opt-9', image: 'word-arye', label: 'Lion' },
        ],
      },
      // Question 10 - 4 options - Hat (H)
      {
        id: 'q10',
        instruction: 'First letter: H',
        instructionAudio: '/audio/en/word-hat.mp3',
        autoPlayAudio: true,
        options: [
          { id: 'opt-1', image: 'word-sandal', label: 'Sandal' },
          { id: 'opt-2', image: 'word-kova', label: 'Hat', isCorrect: true },
          { id: 'opt-3', image: 'word-naal', label: 'Shoe' },
          { id: 'opt-4', image: 'word-garbayim', label: 'Socks' },
        ],
      },
    ],
  },
};

export default audioObjectsEn3;

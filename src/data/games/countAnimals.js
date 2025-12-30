// Game: Count the Animals
// Category: Counting
// Type: Selection - choose the correct number

const countAnimals = {
  id: 'count-animals',
  categoryId: 'counting',
  name: 'סופרים חיות',
  description: 'ספרו את החיות ובחרו את המספר הנכון',
  icon: '🐾',
  type: 'selection',
  difficulty: 1,

  questions: [
    {
      id: 'ca-1',
      instruction: 'כמה דגים יש בתמונה?',
      instructionAudio: '/audio/count-fish.mp3',
      image: 'fish',
      imageCount: 3,
      options: [
        { id: 'opt-1', value: 1, display: '1' },
        { id: 'opt-2', value: 2, display: '2' },
        { id: 'opt-3', value: 3, display: '3' },
        { id: 'opt-4', value: 4, display: '4' },
      ],
      correctAnswer: 3,
    },
    {
      id: 'ca-2',
      instruction: 'כמה פרפרים יש בתמונה?',
      instructionAudio: '/audio/count-butterflies.mp3',
      image: 'butterfly',
      imageCount: 2,
      options: [
        { id: 'opt-1', value: 1, display: '1' },
        { id: 'opt-2', value: 2, display: '2' },
        { id: 'opt-3', value: 3, display: '3' },
        { id: 'opt-4', value: 4, display: '4' },
      ],
      correctAnswer: 2,
    },
    {
      id: 'ca-3',
      instruction: 'כמה ציפורים יש בתמונה?',
      instructionAudio: '/audio/count-birds.mp3',
      image: 'bird',
      imageCount: 5,
      options: [
        { id: 'opt-1', value: 3, display: '3' },
        { id: 'opt-2', value: 4, display: '4' },
        { id: 'opt-3', value: 5, display: '5' },
        { id: 'opt-4', value: 6, display: '6' },
      ],
      correctAnswer: 5,
    },
    {
      id: 'ca-4',
      instruction: 'כמה כלבים יש בתמונה?',
      instructionAudio: '/audio/count-dogs.mp3',
      image: 'dog',
      imageCount: 4,
      options: [
        { id: 'opt-1', value: 2, display: '2' },
        { id: 'opt-2', value: 3, display: '3' },
        { id: 'opt-3', value: 4, display: '4' },
        { id: 'opt-4', value: 5, display: '5' },
      ],
      correctAnswer: 4,
    },
    {
      id: 'ca-5',
      instruction: 'כמה חתולים יש בתמונה?',
      instructionAudio: '/audio/count-cats.mp3',
      image: 'cat',
      imageCount: 1,
      options: [
        { id: 'opt-1', value: 1, display: '1' },
        { id: 'opt-2', value: 2, display: '2' },
        { id: 'opt-3', value: 3, display: '3' },
        { id: 'opt-4', value: 4, display: '4' },
      ],
      correctAnswer: 1,
    },
  ],
};

export default countAnimals;

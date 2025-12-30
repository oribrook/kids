// Game: Count the Shapes
// Category: Counting
// Type: Selection - choose the correct number of shapes

const countShapes = {
  id: 'count-shapes',
  categoryId: 'counting',
  name: 'סופרים צורות',
  description: 'ספרו את הצורות ובחרו את המספר הנכון',
  icon: '🔷',
  type: 'counting',
  difficulty: 1,

  questions: [
    {
      id: 'cs-1',
      instruction: 'כמה עיגולים יש בתמונה?',
      instructionAudio: '/audio/count-circles.mp3',
      image: 'circle',
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
      id: 'cs-2',
      instruction: 'כמה ריבועים יש בתמונה?',
      instructionAudio: '/audio/count-squares.mp3',
      image: 'square',
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
      id: 'cs-3',
      instruction: 'כמה משולשים יש בתמונה?',
      instructionAudio: '/audio/count-triangles.mp3',
      image: 'triangle',
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
      id: 'cs-4',
      instruction: 'כמה כוכבים יש בתמונה?',
      instructionAudio: '/audio/count-stars.mp3',
      image: 'star',
      imageCount: 3,
      options: [
        { id: 'opt-1', value: 2, display: '2' },
        { id: 'opt-2', value: 3, display: '3' },
        { id: 'opt-3', value: 4, display: '4' },
        { id: 'opt-4', value: 5, display: '5' },
      ],
      correctAnswer: 3,
    },
    {
      id: 'cs-5',
      instruction: 'כמה לבבות יש בתמונה?',
      instructionAudio: '/audio/count-hearts.mp3',
      image: 'heart',
      imageCount: 6,
      options: [
        { id: 'opt-1', value: 4, display: '4' },
        { id: 'opt-2', value: 5, display: '5' },
        { id: 'opt-3', value: 6, display: '6' },
        { id: 'opt-4', value: 7, display: '7' },
      ],
      correctAnswer: 6,
    },
  ],
};

export default countShapes;

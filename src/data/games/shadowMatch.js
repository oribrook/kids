// Game: Shadow Match
// Category: Logic
// Type: Selection - match the object to its shadow

const shadowMatch = {
  id: 'shadow-match',
  categoryId: 'logic',
  name: 'התאמת צלליות',
  description: 'מצאו את הצללית המתאימה',
  icon: '🔮',
  type: 'selection',
  difficulty: 1,

  questions: [
    {
      id: 'sm-1',
      instruction: 'מצאו את הצללית של החתול',
      instructionAudio: '/audio/shadow-cat.mp3',
      mainImage: 'cat-color',
      options: [
        { id: 'opt-1', image: 'shadow-dog', label: 'צללית כלב' },
        { id: 'opt-2', image: 'shadow-cat', label: 'צללית חתול', isCorrect: true },
        { id: 'opt-3', image: 'shadow-rabbit', label: 'צללית ארנב' },
      ],
      correctAnswerId: 'opt-2',
    },
    {
      id: 'sm-2',
      instruction: 'מצאו את הצללית של הפיל',
      instructionAudio: '/audio/shadow-elephant.mp3',
      mainImage: 'elephant-color',
      options: [
        { id: 'opt-1', image: 'shadow-elephant', label: 'צללית פיל', isCorrect: true },
        { id: 'opt-2', image: 'shadow-giraffe', label: 'צללית ג׳ירפה' },
        { id: 'opt-3', image: 'shadow-lion', label: 'צללית אריה' },
      ],
      correctAnswerId: 'opt-1',
    },
    {
      id: 'sm-3',
      instruction: 'מצאו את הצללית של הכוכב',
      instructionAudio: '/audio/shadow-star.mp3',
      mainImage: 'star-color',
      options: [
        { id: 'opt-1', image: 'shadow-circle', label: 'צללית עיגול' },
        { id: 'opt-2', image: 'shadow-heart', label: 'צללית לב' },
        { id: 'opt-3', image: 'shadow-star', label: 'צללית כוכב', isCorrect: true },
      ],
      correctAnswerId: 'opt-3',
    },
    {
      id: 'sm-4',
      instruction: 'מצאו את הצללית של המכונית',
      instructionAudio: '/audio/shadow-car.mp3',
      mainImage: 'car-color',
      options: [
        { id: 'opt-1', image: 'shadow-plane', label: 'צללית מטוס' },
        { id: 'opt-2', image: 'shadow-car', label: 'צללית מכונית', isCorrect: true },
        { id: 'opt-3', image: 'shadow-boat', label: 'צללית סירה' },
      ],
      correctAnswerId: 'opt-2',
    },
    {
      id: 'sm-5',
      instruction: 'מצאו את הצללית של הפרח',
      instructionAudio: '/audio/shadow-flower.mp3',
      mainImage: 'flower-color',
      options: [
        { id: 'opt-1', image: 'shadow-tree', label: 'צללית עץ' },
        { id: 'opt-2', image: 'shadow-flower', label: 'צללית פרח', isCorrect: true },
        { id: 'opt-3', image: 'shadow-leaf', label: 'צללית עלה' },
      ],
      correctAnswerId: 'opt-2',
    },
  ],
};

export default shadowMatch;

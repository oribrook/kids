// Game: Story Draw (ציור סיפור)
// Category: toddler-story-draw
// Type: storyDraw - shape-based story drawing canvas
// No questions/scoring - pure creative play for toddlers

const storyDraw = {
  id: 'story-draw',
  categoryId: 'toddler-story-draw',
  name: 'ציור סיפור',
  description: 'צרו סיפור עם צורות ודמויות!',
  icon: '🖌️',
  type: 'selection',
  gameType: 'storyDraw',
  availableIn: ['easy'],
  // No questions - this game type manages its own flow
  questions: { easy: [] },
};

export default storyDraw;

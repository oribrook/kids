// Categories configuration for the kids game platform
// Organized by letter groups (5 letters per category + quiz)

export const categories = [
  {
    id: 'letters-alef-he',
    name: 'אבגדה',
    description: 'אותיות א עד ה',
    icon: 'א',
    color: '#00CEC9',
    backgroundColor: '#E0F7FA',
    games: ['learn-alef', 'learn-bet', 'learn-gimel', 'learn-dalet', 'learn-he', 'quiz-alef-he'],
  },
  {
    id: 'letters-vav-yod',
    name: 'וזחטי',
    description: 'אותיות ו עד י',
    icon: 'ו',
    color: '#6C5CE7',
    backgroundColor: '#EDE7F6',
    games: ['learn-vav', 'learn-zayin', 'learn-chet', 'learn-tet'],
  },
];

export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

export const getCategoryGames = (categoryId) => {
  const category = getCategoryById(categoryId);
  return category ? category.games : [];
};

export default categories;

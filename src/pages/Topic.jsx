import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getTopicById, getCategoriesByTopic, getLanguageForTopic } from '../data/categories';
import { Button } from '../components/common';
import NavHeader from '../components/layout/NavHeader';
import PageDecorations from '../components/layout/PageDecorations';
import styles from './Home.module.css';

function Topic() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = getTopicById(topicId);
  const categories = getCategoriesByTopic(topicId);
  const language = topic ? getLanguageForTopic(topicId) : null;

  if (!topic) {
    return (
      <div className={styles.container}>
        <h1>נושא לא נמצא</h1>
        <Button onClick={() => navigate('/home')}>חזרה לדף הבית</Button>
      </div>
    );
  }

  const handleCategoryClick = (category) => {
    // Single-game categories (all the toddler arcade games) skip the middle
    // page and open the game directly
    if (category.games?.length === 1) {
      navigate(`/game/${category.games[0]}`);
    } else {
      navigate(`/category/${category.id}`);
    }
  };

  const handleBack = () => {
    if (language) {
      navigate(`/language/${language.id}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className={styles.container}>
      <NavHeader
        className={styles.header}
        icon={topic.icon}
        title={topic.name}
        onBack={handleBack}
      />

      {/* Main content */}
      <main className={styles.main}>
        <motion.h1
          className={styles.title}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          בחרו קטגוריה 🎮
        </motion.h1>

        <div className={styles.categories}>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={styles.categoryCard}
              style={{ backgroundColor: category.backgroundColor }}
              onClick={() => handleCategoryClick(category)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon && (
                <span className={styles.categoryIcon}>{category.icon}</span>
              )}
              <h2 className={styles.categoryName}>{category.name}</h2>
              <p className={styles.categoryDescription}>{category.description}</p>
              <div
                className={styles.categoryBar}
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </div>

        {categories.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p>אין קטגוריות זמינות בנושא זה עדיין</p>
          </div>
        )}
      </main>

      <PageDecorations />
    </div>
  );
}

export default Topic;

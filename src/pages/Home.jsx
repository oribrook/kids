import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser, DIFFICULTY_INFO } from '../context/UserContext';
import { Mascot, ScoreDisplay, DifficultySelector } from '../components/common';
import { categories } from '../data/categories';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  const { user, currentDifficulty } = useUser();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.greeting}>
          <Mascot size="small" mood="happy" animate={false} />
          <div className={styles.greetingText}>
            <span className={styles.hello}>שלום,</span>
            <span className={styles.name}>{user.name || 'חבר'}! 👋</span>
          </div>
        </div>
        <ScoreDisplay score={user.totalScore} showMultiplier={false} />
      </header>

      {/* Difficulty Selector */}
      {/* <div className={styles.difficultySection}>
        <DifficultySelector />
        <span className={styles.difficultyLabel}>
          רמה: {DIFFICULTY_INFO[currentDifficulty].label} {DIFFICULTY_INFO[currentDifficulty].icon}
        </span>
      </div> */}

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
              onClick={() => handleCategoryClick(category.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <span className={styles.categoryIcon}>{category.icon}</span> */}
              <h2 className={styles.categoryName}>{category.name}</h2>
              <p className={styles.categoryDescription}>{category.description}</p>
              <div
                className={styles.categoryBar}
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </div>
      </main>

      {/* Decorative elements */}
      <div className={styles.decorations}>
        <div className={`${styles.decoration} ${styles.dec1}`}>✨</div>
        <div className={`${styles.decoration} ${styles.dec2}`}>🌟</div>
        <div className={`${styles.decoration} ${styles.dec3}`}>💫</div>
      </div>
    </div>
  );
}

export default Home;

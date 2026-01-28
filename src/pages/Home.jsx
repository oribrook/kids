import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { Mascot, ScoreDisplay } from '../components/common';
import { languages } from '../data/categories';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleLanguageClick = (languageId) => {
    navigate(`/language/${languageId}`);
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

      {/* Main content */}
      <main className={styles.main}>
        <motion.h1
          className={styles.title}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          בחרו שפה 🌍
        </motion.h1>

        <div className={styles.categories}>
          {languages.map((language, index) => (
            <motion.div
              key={language.id}
              className={styles.categoryCard}
              style={{ backgroundColor: language.backgroundColor }}
              onClick={() => handleLanguageClick(language.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className={styles.categoryName}>{language.name}</h2>
              <p className={styles.categoryDescription}>{language.description}</p>
              <div
                className={styles.categoryBar}
                style={{ backgroundColor: language.color }}
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

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLanguageById, getTopicsByLanguage } from '../data/categories';
import { Button } from '../components/common';
import styles from './Home.module.css';

function Language() {
  const { languageId } = useParams();
  const navigate = useNavigate();
  const language = getLanguageById(languageId);
  const topics = getTopicsByLanguage(languageId);

  if (!language) {
    return (
      <div className={styles.container}>
        <h1>שפה לא נמצאה</h1>
        <Button onClick={() => navigate('/home')}>חזרה לדף הבית</Button>
      </div>
    );
  }

  const handleTopicClick = (topicId) => {
    navigate(`/topic/${topicId}`);
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      {/* Header with back button */}
      <header className={styles.header}>
        <button
          onClick={handleBack}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          →
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '32px' }}>{language.icon}</span>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{language.name}</span>
        </div>
        <div style={{ width: '40px' }} />
      </header>

      {/* Main content */}
      <main className={styles.main}>
        <motion.h1
          className={styles.title}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          בחרו נושא 📚
        </motion.h1>

        <div className={styles.categories}>
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              className={styles.categoryCard}
              style={{ backgroundColor: topic.backgroundColor }}
              onClick={() => handleTopicClick(topic.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className={styles.categoryName}>{topic.name}</h2>
              <p className={styles.categoryDescription}>{topic.description}</p>
              <div
                className={styles.categoryBar}
                style={{ backgroundColor: topic.color }}
              />
            </motion.div>
          ))}
        </div>

        {topics.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p>אין נושאים זמינים בשפה זו עדיין</p>
          </div>
        )}
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

export default Language;

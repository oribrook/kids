import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLanguageById, getTopicsByLanguage, getCategoriesByTopic } from '../data/categories';
import { Button } from '../components/common';
import NavHeader from '../components/layout/NavHeader';
import PageDecorations from '../components/layout/PageDecorations';
import styles from './Home.module.css';

function Language() {
  const { languageId } = useParams();
  const navigate = useNavigate();
  const language = getLanguageById(languageId);
  const topics = getTopicsByLanguage(languageId).filter(t => getCategoriesByTopic(t.id).length > 0);

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
      <NavHeader
        className={styles.header}
        icon={language.icon}
        title={language.name}
        onBack={handleBack}
      />

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

      <PageDecorations />
    </div>
  );
}

export default Language;

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCategoryById, getTopicForCategory } from '../data/categories';
import { getGamesByCategory, getQuestionsForDifficulty } from '../data/games';
import { useUser } from '../context/UserContext';
import { Button } from '../components/common';
import styles from './Category.module.css';

function Category() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const category = getCategoryById(categoryId);
  const games = getGamesByCategory(categoryId);
  const parentTopic = category ? getTopicForCategory(categoryId) : null;

  // Get best score for a game from play history
  const getBestScore = (gameId) => {
    const plays = user.gamesPlayed.filter(p => p.gameId === gameId);
    if (plays.length === 0) return null;
    return plays.reduce((best, play) =>
      play.score > best.score ? play : best
    , plays[0]);
  };

  if (!category) {
    return (
      <div className={styles.notFound}>
        <h1>קטגוריה לא נמצאה</h1>
        <Button onClick={() => navigate('/home')}>חזרה לדף הבית</Button>
      </div>
    );
  }

  const handleGameClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  const handleBack = () => {
    if (parentTopic) {
      navigate(`/topic/${parentTopic.id}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <div
      className={styles.container}
      style={{ background: `linear-gradient(180deg, ${category.backgroundColor} 0%, #FFF 100%)` }}
    >
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.backButton} onClick={handleBack}>
          <span>→</span>
        </button>
        <div className={styles.categoryInfo}>
          <span className={styles.categoryIcon}>{category.icon}</span>
          <h1 className={styles.categoryName}>{category.name}</h1>
        </div>
        <div className={styles.spacer} />
      </header>

      {/* Games list */}
      <main className={styles.main}>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {category.description}
        </motion.p>

        <div className={styles.games}>
          {games.map((game, index) => {
            const bestPlay = getBestScore(game.id);
            const questions = getQuestionsForDifficulty(game);
            const maxScore = questions.length * 16;

            return (
              <motion.div
                key={game.id}
                className={`${styles.gameCard} ${bestPlay ? styles.played : ''}`}
                onClick={() => handleGameClick(game.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className={styles.gameIcon}>{game.icon}</div>
                <div
                  className={styles.playButton}
                  style={{ backgroundColor: category.color }}
                >
                  {bestPlay ? '🔄' : '▶'}
                </div>
              </motion.div>
            );
          })}
        </div>

        {games.length === 0 && (
          <div className={styles.empty}>
            <p>אין משחקים זמינים בקטגוריה זו עדיין</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Category;

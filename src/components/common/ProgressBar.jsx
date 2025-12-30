import { motion } from 'framer-motion';
import styles from './ProgressBar.module.css';

function ProgressBar({
  current,
  total,
  showLabels = true,
  color = '#4ECDC4',
  height = 12
}) {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.container}>
      {showLabels && (
        <div className={styles.labels}>
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className={`${styles.label} ${i < current ? styles.completed : ''} ${i === current - 1 ? styles.current : ''}`}
            >
              {i + 1}
            </span>
          ))}
        </div>
      )}
      <div className={styles.track} style={{ height }}>
        <motion.div
          className={styles.fill}
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;

import { motion } from 'framer-motion';
import styles from './Card.module.css';

function Card({
  children,
  onClick,
  selected = false,
  correct = null,
  disabled = false,
  size = 'medium',
  className = '',
  ...props
}) {
  const getStateClass = () => {
    if (correct === true) return styles.correct;
    if (correct === false) return styles.wrong;
    if (selected) return styles.selected;
    return '';
  };

  return (
    <motion.div
      className={`${styles.card} ${styles[size]} ${getStateClass()} ${disabled ? styles.disabled : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.05, y: -5 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      animate={
        correct === false
          ? { x: [0, -10, 10, -10, 10, 0] }
          : correct === true
          ? { scale: [1, 1.1, 1] }
          : {}
      }
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;

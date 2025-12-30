import { motion } from 'framer-motion';
import styles from './Button.module.css';

function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  icon,
  className = '',
  ...props
}) {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </motion.button>
  );
}

export default Button;

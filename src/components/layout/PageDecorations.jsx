import styles from './layout.module.css';

// Floating ✨🌟💫 background decorations of the navigation pages.
function PageDecorations() {
  return (
    <div className={styles.decorations}>
      <div className={`${styles.decoration} ${styles.dec1}`}>✨</div>
      <div className={`${styles.decoration} ${styles.dec2}`}>🌟</div>
      <div className={`${styles.decoration} ${styles.dec3}`}>💫</div>
    </div>
  );
}

export default PageDecorations;

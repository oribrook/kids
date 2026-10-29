import styles from './layout.module.css';

// Back button + icon + title, used by the Language and Topic pages.
// className = the page's .header class (Home.module.css), so the box looks the same.
function NavHeader({ icon, title, onBack, className }) {
  return (
    <header className={className}>
      <button className={styles.backButton} onClick={onBack}>
        →
      </button>
      <div className={styles.titleRow}>
        <span className={styles.titleIcon}>{icon}</span>
        <span className={styles.titleText}>{title}</span>
      </div>
      <div className={styles.spacer} />
    </header>
  );
}

export default NavHeader;

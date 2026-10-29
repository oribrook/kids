import styles from './icons.module.css';

export default {
  'apple-red': () => (
    <img src="/images/apple.png" alt="apple" className={styles.itemSvg} />
  ),
  grapes: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="40" cy="40" r="12" fill="#9B59B6" />
      <circle cx="60" cy="40" r="12" fill="#9B59B6" />
      <circle cx="30" cy="55" r="12" fill="#8E44AD" />
      <circle cx="50" cy="55" r="12" fill="#9B59B6" />
      <circle cx="70" cy="55" r="12" fill="#8E44AD" />
      <circle cx="40" cy="70" r="12" fill="#9B59B6" />
      <circle cx="60" cy="70" r="12" fill="#9B59B6" />
      <circle cx="50" cy="85" r="10" fill="#8E44AD" />
      <path d="M 50 20 Q 50 10 60 12" stroke="#7ED321" strokeWidth="3" fill="none" />
      <ellipse cx="58" cy="10" rx="8" ry="5" fill="#7ED321" />
    </svg>
  ),
  'ball-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#FF4757" />
      <circle cx="50" cy="50" r="35" fill="#FF6B6B" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-blue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#2980B9" />
      <circle cx="50" cy="50" r="35" fill="#3498DB" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#27AE60" />
      <circle cx="50" cy="50" r="35" fill="#2ECC71" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#F1C40F" />
      <circle cx="50" cy="50" r="35" fill="#FFE66D" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  // Shape icons for pattern and logic games
  // Match pairs game icons
  // ===== Missing shape icons =====
  // ===== Missing ball icons =====
  // ===== Missing star/heart variants =====
  star: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#F1C40F"
      />
      <polygon
        points="50,15 58,40 85,40 64,56 72,82 50,68 28,82 36,56 15,40 42,40"
        fill="#F4D03F"
      />
    </svg>
  ),

  // ===== Match pairs game - Nature icons =====
  flower: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FD79A8" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#FD79A8" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#FD79A8" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#FD79A8" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#FD79A8" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FFE66D" />
    </svg>
  ),
  // ===== Match pairs game - Animals =====
  bird: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="50" rx="30" ry="25" fill="#3498DB" />
      <ellipse cx="50" cy="45" rx="25" ry="20" fill="#5DADE2" />
      <circle cx="35" cy="40" r="8" fill="white" />
      <circle cx="35" cy="40" r="4" fill="#2C3E50" />
      <polygon points="15,45 30,42 30,48" fill="#F39C12" />
      <ellipse cx="70" cy="45" rx="15" ry="8" fill="#2980B9" />
      <path d="M 45 70 L 40 85" stroke="#F39C12" strokeWidth="3" />
      <path d="M 55 70 L 60 85" stroke="#F39C12" strokeWidth="3" />
    </svg>
  ),
  butterfly: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="50" rx="6" ry="30" fill="#2C3E50" />
      <ellipse cx="30" cy="35" rx="20" ry="18" fill="#9B59B6" />
      <ellipse cx="70" cy="35" rx="20" ry="18" fill="#9B59B6" />
      <ellipse cx="30" cy="60" rx="18" ry="15" fill="#8E44AD" />
      <ellipse cx="70" cy="60" rx="18" ry="15" fill="#8E44AD" />
      <ellipse cx="30" cy="35" rx="10" ry="8" fill="#E8DAEF" />
      <ellipse cx="70" cy="35" rx="10" ry="8" fill="#E8DAEF" />
      <circle cx="50" cy="18" r="4" fill="#2C3E50" />
      <path d="M 48 18 Q 42 8 40 5" stroke="#2C3E50" strokeWidth="2" fill="none" />
      <path d="M 52 18 Q 58 8 60 5" stroke="#2C3E50" strokeWidth="2" fill="none" />
    </svg>
  ),
  cat: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="30" ry="28" fill="#E67E22" />
      <ellipse cx="50" cy="50" rx="28" ry="25" fill="#F39C12" />
      <polygon points="25,45 20,15 38,35" fill="#E67E22" />
      <polygon points="75,45 80,15 62,35" fill="#E67E22" />
      <polygon points="28,42 23,20 36,34" fill="#F39C12" />
      <polygon points="72,42 77,20 64,34" fill="#F39C12" />
      <ellipse cx="38" cy="48" rx="6" ry="7" fill="#2ECC71" />
      <ellipse cx="62" cy="48" rx="6" ry="7" fill="#2ECC71" />
      <circle cx="38" cy="48" r="3" fill="#2C3E50" />
      <circle cx="62" cy="48" r="3" fill="#2C3E50" />
      <ellipse cx="50" cy="60" rx="4" ry="3" fill="#FFC0CB" />
      <path d="M 50 63 L 50 67 M 45 65 L 40 63 M 55 65 L 60 63" stroke="#2C3E50" strokeWidth="2" />
    </svg>
  ),
  dog: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="32" ry="30" fill="#8B4513" />
      <ellipse cx="50" cy="50" rx="28" ry="26" fill="#A0522D" />
      <ellipse cx="25" cy="40" rx="12" ry="18" fill="#8B4513" />
      <ellipse cx="75" cy="40" rx="12" ry="18" fill="#8B4513" />
      <circle cx="38" cy="48" r="6" fill="white" />
      <circle cx="62" cy="48" r="6" fill="white" />
      <circle cx="38" cy="48" r="3" fill="#2C3E50" />
      <circle cx="62" cy="48" r="3" fill="#2C3E50" />
      <ellipse cx="50" cy="62" rx="8" ry="6" fill="#2C3E50" />
      <path d="M 50 68 L 50 75 Q 45 80 40 78" stroke="#E74C3C" strokeWidth="4" fill="none" />
    </svg>
  ),

  // ===== Match pairs game - Tools =====
  // ===== Match pairs game - Food =====
  // ===== Match pairs game - Other items =====
  cup: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 25 30 L 30 85 L 70 85 L 75 30 Z" fill="#ECF0F1" />
      <path d="M 28 35 L 32 80 L 68 80 L 72 35 Z" fill="#F8F9F9" />
      <path d="M 75 40 Q 90 40 90 55 Q 90 70 75 70" stroke="#BDC3C7" strokeWidth="5" fill="none" />
    </svg>
  ),
};

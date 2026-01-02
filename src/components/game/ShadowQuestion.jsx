import { motion } from 'framer-motion';
import { Card } from '../common';
import styles from './ShadowQuestion.module.css';

// Main colorful images
const MainImages = {
  'cat-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="60" rx="28" ry="24" fill="#636E72" />
      <circle cx="50" cy="38" r="24" fill="#636E72" />
      <polygon points="25,25 30,50 40,35" fill="#636E72" />
      <polygon points="75,25 70,50 60,35" fill="#636E72" />
      <polygon points="28,28 32,45 38,35" fill="#FD79A8" />
      <polygon points="72,28 68,45 62,35" fill="#FD79A8" />
      <ellipse cx="40" cy="35" rx="6" ry="8" fill="#74B9FF" />
      <ellipse cx="60" cy="35" rx="6" ry="8" fill="#74B9FF" />
      <ellipse cx="40" cy="37" rx="2" ry="5" fill="#2D3436" />
      <ellipse cx="60" cy="37" rx="2" ry="5" fill="#2D3436" />
      <ellipse cx="50" cy="48" rx="5" ry="3" fill="#FD79A8" />
    </svg>
  ),
  'elephant-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="30" fill="#95A5A6" />
      <circle cx="50" cy="35" r="28" fill="#95A5A6" />
      <ellipse cx="20" cy="35" rx="15" ry="20" fill="#95A5A6" />
      <ellipse cx="80" cy="35" rx="15" ry="20" fill="#95A5A6" />
      <ellipse cx="20" cy="35" rx="10" ry="14" fill="#BDC3C7" />
      <ellipse cx="80" cy="35" rx="10" ry="14" fill="#BDC3C7" />
      <path d="M 50 50 Q 45 70 40 85" stroke="#95A5A6" strokeWidth="12" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="32" r="5" fill="white" />
      <circle cx="60" cy="32" r="5" fill="white" />
      <circle cx="42" cy="33" r="3" fill="#2D3436" />
      <circle cx="62" cy="33" r="3" fill="#2D3436" />
    </svg>
  ),
  'star-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#FFE66D"
        stroke="#F5D85E"
        strokeWidth="2"
      />
    </svg>
  ),
  'car-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <rect x="10" y="45" width="80" height="30" rx="8" fill="#FF6B6B" />
      <path d="M 25 45 L 35 25 L 65 25 L 75 45" fill="#FF6B6B" />
      <rect x="38" y="28" width="24" height="15" rx="2" fill="#74B9FF" />
      <circle cx="28" cy="75" r="10" fill="#2D3436" />
      <circle cx="72" cy="75" r="10" fill="#2D3436" />
      <circle cx="28" cy="75" r="5" fill="#95A5A6" />
      <circle cx="72" cy="75" r="5" fill="#95A5A6" />
    </svg>
  ),
  'flower-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <rect x="46" y="60" width="8" height="35" fill="#27AE60" />
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FD79A8" />
      <ellipse cx="75" cy="40" rx="15" ry="18" fill="#FD79A8" transform="rotate(72 75 40)" />
      <ellipse cx="68" cy="65" rx="15" ry="18" fill="#FD79A8" transform="rotate(144 68 65)" />
      <ellipse cx="32" cy="65" rx="15" ry="18" fill="#FD79A8" transform="rotate(-144 32 65)" />
      <ellipse cx="25" cy="40" rx="15" ry="18" fill="#FD79A8" transform="rotate(-72 25 40)" />
      <circle cx="50" cy="45" r="12" fill="#FFE66D" />
    </svg>
  ),
  'dog-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="60" rx="30" ry="25" fill="#A0522D" />
      <circle cx="50" cy="35" r="25" fill="#A0522D" />
      <ellipse cx="25" cy="20" rx="12" ry="18" fill="#8B4513" />
      <ellipse cx="75" cy="20" rx="12" ry="18" fill="#8B4513" />
      <circle cx="40" cy="32" r="6" fill="white" />
      <circle cx="60" cy="32" r="6" fill="white" />
      <circle cx="40" cy="33" r="3" fill="#2D3436" />
      <circle cx="60" cy="33" r="3" fill="#2D3436" />
      <ellipse cx="50" cy="45" rx="8" ry="5" fill="#2D3436" />
    </svg>
  ),
  'giraffe-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="80" rx="20" ry="15" fill="#F39C12" />
      <rect x="45" y="30" width="10" height="50" fill="#F39C12" />
      <circle cx="50" cy="20" r="15" fill="#F39C12" />
      <ellipse cx="35" cy="10" rx="5" ry="10" fill="#E67E22" />
      <ellipse cx="65" cy="10" rx="5" ry="10" fill="#E67E22" />
      <circle cx="45" cy="18" r="3" fill="#2D3436" />
      <circle cx="55" cy="18" r="3" fill="#2D3436" />
      <circle cx="48" cy="40" r="4" fill="#8B4513" />
      <circle cx="52" cy="55" r="3" fill="#8B4513" />
      <circle cx="47" cy="68" r="4" fill="#8B4513" />
    </svg>
  ),
  'heart-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <path d="M 50 85 C 20 55 10 35 25 20 C 40 10 50 25 50 35 C 50 25 60 10 75 20 C 90 35 80 55 50 85" fill="#E74C3C" />
      <ellipse cx="35" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'plane-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="50" rx="40" ry="10" fill="#3498DB" />
      <polygon points="50,20 60,50 50,45 40,50" fill="#2980B9" />
      <polygon points="50,80 60,50 50,55 40,50" fill="#2980B9" />
      <circle cx="50" cy="50" r="6" fill="#ECF0F1" />
    </svg>
  ),
  'tree-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <rect x="42" y="65" width="16" height="30" fill="#8B4513" />
      <ellipse cx="50" cy="40" rx="35" ry="35" fill="#27AE60" />
      <ellipse cx="35" cy="35" rx="8" ry="8" fill="#2ECC71" />
      <ellipse cx="65" cy="38" rx="10" ry="10" fill="#2ECC71" />
      <ellipse cx="50" cy="25" rx="12" ry="12" fill="#2ECC71" />
    </svg>
  ),
  'horse-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="60" rx="30" ry="22" fill="#8B4513" />
      <ellipse cx="30" cy="45" rx="18" ry="22" fill="#A0522D" />
      <ellipse cx="30" cy="30" rx="12" ry="15" fill="#A0522D" />
      <ellipse cx="20" cy="18" rx="5" ry="12" fill="#8B4513" />
      <ellipse cx="35" cy="18" rx="5" ry="12" fill="#8B4513" />
      <circle cx="25" cy="28" r="3" fill="#2D3436" />
      <path d="M 35 80 L 35 95" stroke="#8B4513" strokeWidth="6" />
      <path d="M 65 80 L 65 95" stroke="#8B4513" strokeWidth="6" />
    </svg>
  ),
  'bird-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <ellipse cx="50" cy="50" rx="25" ry="20" fill="#3498DB" />
      <circle cx="35" cy="45" r="12" fill="#5DADE2" />
      <circle cx="30" cy="43" r="4" fill="white" />
      <circle cx="31" cy="44" r="2" fill="#2D3436" />
      <polygon points="18,45 28,42 28,48" fill="#F39C12" />
      <ellipse cx="70" cy="48" rx="18" ry="8" fill="#2980B9" />
      <path d="M 45 68 L 42 80" stroke="#F39C12" strokeWidth="3" />
      <path d="M 55 68 L 58 80" stroke="#F39C12" strokeWidth="3" />
    </svg>
  ),
  'house-color': () => (
    <svg viewBox="0 0 100 100" className={styles.mainSvg}>
      <rect x="20" y="50" width="60" height="45" fill="#E74C3C" />
      <polygon points="50,15 10,55 90,55" fill="#C0392B" />
      <rect x="40" y="65" width="20" height="30" fill="#8B4513" />
      <rect x="25" y="60" width="12" height="12" fill="#87CEEB" />
      <rect x="63" y="60" width="12" height="12" fill="#87CEEB" />
      <circle cx="55" cy="80" r="2" fill="#F1C40F" />
    </svg>
  ),
};

// Shadow silhouettes
const ShadowImages = {
  'shadow-cat': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="28" ry="24" fill="#2D3436" />
      <circle cx="50" cy="38" r="24" fill="#2D3436" />
      <polygon points="25,25 30,50 40,35" fill="#2D3436" />
      <polygon points="75,25 70,50 60,35" fill="#2D3436" />
    </svg>
  ),
  'shadow-dog': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="30" ry="25" fill="#2D3436" />
      <circle cx="50" cy="35" r="25" fill="#2D3436" />
      <ellipse cx="25" cy="20" rx="12" ry="18" fill="#2D3436" />
      <ellipse cx="75" cy="20" rx="12" ry="18" fill="#2D3436" />
    </svg>
  ),
  'shadow-rabbit': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="65" rx="25" ry="22" fill="#2D3436" />
      <circle cx="50" cy="45" r="20" fill="#2D3436" />
      <ellipse cx="38" cy="15" rx="8" ry="25" fill="#2D3436" />
      <ellipse cx="62" cy="15" rx="8" ry="25" fill="#2D3436" />
    </svg>
  ),
  'shadow-elephant': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="30" fill="#2D3436" />
      <circle cx="50" cy="35" r="28" fill="#2D3436" />
      <ellipse cx="20" cy="35" rx="15" ry="20" fill="#2D3436" />
      <ellipse cx="80" cy="35" rx="15" ry="20" fill="#2D3436" />
      <path d="M 50 50 Q 45 70 40 85" stroke="#2D3436" strokeWidth="12" fill="none" strokeLinecap="round" />
    </svg>
  ),
  'shadow-giraffe': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="80" rx="20" ry="15" fill="#2D3436" />
      <rect x="45" y="30" width="10" height="50" fill="#2D3436" />
      <circle cx="50" cy="20" r="15" fill="#2D3436" />
      <ellipse cx="35" cy="10" rx="5" ry="10" fill="#2D3436" />
      <ellipse cx="65" cy="10" rx="5" ry="10" fill="#2D3436" />
    </svg>
  ),
  'shadow-lion': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <circle cx="50" cy="50" r="35" fill="#2D3436" />
      <circle cx="50" cy="50" r="25" fill="#2D3436" />
      <ellipse cx="50" cy="80" rx="15" ry="12" fill="#2D3436" />
    </svg>
  ),
  'shadow-star': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#2D3436"
      />
    </svg>
  ),
  'shadow-circle': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <circle cx="50" cy="50" r="40" fill="#2D3436" />
    </svg>
  ),
  'shadow-heart': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <path d="M 50 85 C 20 55 10 35 25 20 C 40 10 50 25 50 35 C 50 25 60 10 75 20 C 90 35 80 55 50 85" fill="#2D3436" />
    </svg>
  ),
  'shadow-car': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="10" y="45" width="80" height="30" rx="8" fill="#2D3436" />
      <path d="M 25 45 L 35 25 L 65 25 L 75 45" fill="#2D3436" />
      <circle cx="28" cy="75" r="10" fill="#2D3436" />
      <circle cx="72" cy="75" r="10" fill="#2D3436" />
    </svg>
  ),
  'shadow-plane': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="50" rx="40" ry="10" fill="#2D3436" />
      <polygon points="50,20 60,50 50,45 40,50" fill="#2D3436" />
      <polygon points="50,80 60,50 50,55 40,50" fill="#2D3436" />
    </svg>
  ),
  'shadow-boat': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <path d="M 15 60 L 25 80 L 75 80 L 85 60 Z" fill="#2D3436" />
      <rect x="45" y="30" width="10" height="30" fill="#2D3436" />
      <polygon points="55,30 55,55 80,55" fill="#2D3436" />
    </svg>
  ),
  'shadow-flower': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="46" y="60" width="8" height="35" fill="#2D3436" />
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#2D3436" />
      <ellipse cx="75" cy="40" rx="15" ry="18" fill="#2D3436" transform="rotate(72 75 40)" />
      <ellipse cx="68" cy="65" rx="15" ry="18" fill="#2D3436" transform="rotate(144 68 65)" />
      <ellipse cx="32" cy="65" rx="15" ry="18" fill="#2D3436" transform="rotate(-144 32 65)" />
      <ellipse cx="25" cy="40" rx="15" ry="18" fill="#2D3436" transform="rotate(-72 25 40)" />
      <circle cx="50" cy="45" r="12" fill="#2D3436" />
    </svg>
  ),
  'shadow-tree': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="42" y="65" width="16" height="30" fill="#2D3436" />
      <ellipse cx="50" cy="40" rx="35" ry="35" fill="#2D3436" />
    </svg>
  ),
  'shadow-leaf': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <path d="M 50 10 Q 80 30 80 60 Q 80 90 50 90 Q 20 90 20 60 Q 20 30 50 10" fill="#2D3436" />
      <path d="M 50 90 L 50 50" stroke="#636E72" strokeWidth="3" />
    </svg>
  ),
  // ===== Additional shadow silhouettes for medium/hard levels =====
  'shadow-fox': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="28" ry="22" fill="#2D3436" />
      <circle cx="50" cy="38" r="22" fill="#2D3436" />
      <polygon points="25,28 20,8 38,30" fill="#2D3436" />
      <polygon points="75,28 80,8 62,30" fill="#2D3436" />
      <ellipse cx="50" cy="50" rx="8" ry="5" fill="#2D3436" />
    </svg>
  ),
  'shadow-wolf': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="62" rx="30" ry="24" fill="#2D3436" />
      <ellipse cx="45" cy="38" rx="22" ry="20" fill="#2D3436" />
      <polygon points="22,30 15,5 35,28" fill="#2D3436" />
      <polygon points="58,30 65,5 45,28" fill="#2D3436" />
      <ellipse cx="35" cy="48" rx="10" ry="6" fill="#2D3436" />
    </svg>
  ),
  'shadow-horse': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="30" ry="22" fill="#2D3436" />
      <ellipse cx="30" cy="45" rx="18" ry="22" fill="#2D3436" />
      <ellipse cx="30" cy="30" rx="12" ry="15" fill="#2D3436" />
      <ellipse cx="20" cy="18" rx="5" ry="12" fill="#2D3436" />
      <ellipse cx="35" cy="18" rx="5" ry="12" fill="#2D3436" />
      <path d="M 35 80 L 35 95" stroke="#2D3436" strokeWidth="6" />
      <path d="M 65 80 L 65 95" stroke="#2D3436" strokeWidth="6" />
    </svg>
  ),
  'shadow-donkey': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="28" ry="20" fill="#2D3436" />
      <ellipse cx="32" cy="42" rx="16" ry="20" fill="#2D3436" />
      <ellipse cx="32" cy="28" rx="10" ry="14" fill="#2D3436" />
      <ellipse cx="22" cy="10" rx="6" ry="18" fill="#2D3436" />
      <ellipse cx="38" cy="10" rx="6" ry="18" fill="#2D3436" />
      <path d="M 35 78 L 35 95" stroke="#2D3436" strokeWidth="5" />
      <path d="M 65 78 L 65 95" stroke="#2D3436" strokeWidth="5" />
    </svg>
  ),
  'shadow-zebra': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="60" rx="30" ry="22" fill="#2D3436" />
      <ellipse cx="30" cy="45" rx="18" ry="22" fill="#2D3436" />
      <ellipse cx="30" cy="30" rx="12" ry="15" fill="#2D3436" />
      <ellipse cx="22" cy="15" rx="5" ry="15" fill="#2D3436" />
      <ellipse cx="35" cy="15" rx="5" ry="15" fill="#2D3436" />
      <path d="M 35 80 L 35 95" stroke="#2D3436" strokeWidth="6" />
      <path d="M 65 80 L 65 95" stroke="#2D3436" strokeWidth="6" />
    </svg>
  ),
  'shadow-camel': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="65" rx="32" ry="20" fill="#2D3436" />
      <ellipse cx="55" cy="50" rx="12" ry="18" fill="#2D3436" />
      <ellipse cx="25" cy="50" rx="15" ry="20" fill="#2D3436" />
      <ellipse cx="20" cy="30" rx="8" ry="15" fill="#2D3436" />
      <path d="M 30 82 L 30 95" stroke="#2D3436" strokeWidth="5" />
      <path d="M 70 82 L 70 95" stroke="#2D3436" strokeWidth="5" />
    </svg>
  ),
  'shadow-deer': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="62" rx="26" ry="20" fill="#2D3436" />
      <ellipse cx="35" cy="42" rx="14" ry="18" fill="#2D3436" />
      <ellipse cx="35" cy="28" rx="10" ry="12" fill="#2D3436" />
      <path d="M 28 20 Q 20 5 15 2" stroke="#2D3436" strokeWidth="4" fill="none" />
      <path d="M 42 20 Q 50 5 55 2" stroke="#2D3436" strokeWidth="4" fill="none" />
      <path d="M 35 80 L 35 95" stroke="#2D3436" strokeWidth="4" />
      <path d="M 65 80 L 65 95" stroke="#2D3436" strokeWidth="4" />
    </svg>
  ),
  'shadow-diamond': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <polygon points="50,5 95,50 50,95 5,50" fill="#2D3436" />
    </svg>
  ),
  'shadow-helicopter': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="55" rx="30" ry="18" fill="#2D3436" />
      <rect x="75" y="50" width="20" height="8" fill="#2D3436" />
      <ellipse cx="95" cy="50" rx="5" ry="12" fill="#2D3436" />
      <rect x="25" y="35" width="50" height="5" fill="#2D3436" />
      <rect x="48" y="30" width="4" height="10" fill="#2D3436" />
      <path d="M 35 70 L 30 85 L 70 85 L 65 70" fill="#2D3436" />
    </svg>
  ),
  'shadow-bird': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="50" rx="25" ry="18" fill="#2D3436" />
      <circle cx="35" cy="45" r="12" fill="#2D3436" />
      <polygon points="18,45 28,42 28,48" fill="#2D3436" />
      <ellipse cx="72" cy="48" rx="18" ry="8" fill="#2D3436" />
      <path d="M 45 66 L 42 80" stroke="#2D3436" strokeWidth="3" />
      <path d="M 55 66 L 58 80" stroke="#2D3436" strokeWidth="3" />
    </svg>
  ),
  'shadow-bush': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="65" rx="40" ry="28" fill="#2D3436" />
      <ellipse cx="30" cy="55" rx="20" ry="18" fill="#2D3436" />
      <ellipse cx="70" cy="55" rx="20" ry="18" fill="#2D3436" />
      <ellipse cx="50" cy="45" rx="25" ry="20" fill="#2D3436" />
    </svg>
  ),
  'shadow-mushroom': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="40" y="55" width="20" height="35" fill="#2D3436" />
      <ellipse cx="50" cy="40" rx="38" ry="28" fill="#2D3436" />
    </svg>
  ),
  'shadow-sun': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <circle cx="50" cy="50" r="25" fill="#2D3436" />
      <line x1="50" y1="10" x2="50" y2="20" stroke="#2D3436" strokeWidth="6" />
      <line x1="50" y1="80" x2="50" y2="90" stroke="#2D3436" strokeWidth="6" />
      <line x1="10" y1="50" x2="20" y2="50" stroke="#2D3436" strokeWidth="6" />
      <line x1="80" y1="50" x2="90" y2="50" stroke="#2D3436" strokeWidth="6" />
      <line x1="22" y1="22" x2="28" y2="28" stroke="#2D3436" strokeWidth="6" />
      <line x1="72" y1="72" x2="78" y2="78" stroke="#2D3436" strokeWidth="6" />
      <line x1="22" y1="78" x2="28" y2="72" stroke="#2D3436" strokeWidth="6" />
      <line x1="72" y1="28" x2="78" y2="22" stroke="#2D3436" strokeWidth="6" />
    </svg>
  ),
  'shadow-snowflake': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <line x1="50" y1="10" x2="50" y2="90" stroke="#2D3436" strokeWidth="4" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="#2D3436" strokeWidth="4" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#2D3436" strokeWidth="4" />
      <line x1="78" y1="22" x2="22" y2="78" stroke="#2D3436" strokeWidth="4" />
      <circle cx="50" cy="50" r="8" fill="#2D3436" />
    </svg>
  ),
  'shadow-asterisk': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <line x1="50" y1="15" x2="50" y2="85" stroke="#2D3436" strokeWidth="8" />
      <line x1="15" y1="50" x2="85" y2="50" stroke="#2D3436" strokeWidth="8" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#2D3436" strokeWidth="8" />
      <line x1="78" y1="22" x2="22" y2="78" stroke="#2D3436" strokeWidth="8" />
    </svg>
  ),
  'shadow-butterfly': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="50" rx="5" ry="28" fill="#2D3436" />
      <ellipse cx="30" cy="38" rx="20" ry="18" fill="#2D3436" />
      <ellipse cx="70" cy="38" rx="20" ry="18" fill="#2D3436" />
      <ellipse cx="30" cy="62" rx="18" ry="15" fill="#2D3436" />
      <ellipse cx="70" cy="62" rx="18" ry="15" fill="#2D3436" />
    </svg>
  ),
  'shadow-bat': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <circle cx="50" cy="45" r="15" fill="#2D3436" />
      <path d="M 35 45 Q 10 30 5 55 Q 15 50 25 55 Q 20 60 15 70 Q 30 55 35 55" fill="#2D3436" />
      <path d="M 65 45 Q 90 30 95 55 Q 85 50 75 55 Q 80 60 85 70 Q 70 55 65 55" fill="#2D3436" />
      <polygon points="42,35 50,25 58,35" fill="#2D3436" />
    </svg>
  ),
  'shadow-eagle': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <ellipse cx="50" cy="50" rx="15" ry="12" fill="#2D3436" />
      <circle cx="50" cy="38" r="10" fill="#2D3436" />
      <polygon points="40,38 50,30 50,42" fill="#2D3436" />
      <path d="M 35 48 Q 5 35 10 60 Q 25 50 35 55" fill="#2D3436" />
      <path d="M 65 48 Q 95 35 90 60 Q 75 50 65 55" fill="#2D3436" />
      <path d="M 45 60 L 42 75" stroke="#2D3436" strokeWidth="3" />
      <path d="M 55 60 L 58 75" stroke="#2D3436" strokeWidth="3" />
    </svg>
  ),
  'shadow-house': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="20" y="50" width="60" height="45" fill="#2D3436" />
      <polygon points="50,15 10,55 90,55" fill="#2D3436" />
    </svg>
  ),
  'shadow-castle': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="20" y="40" width="60" height="55" fill="#2D3436" />
      <rect x="15" y="30" width="15" height="65" fill="#2D3436" />
      <rect x="70" y="30" width="15" height="65" fill="#2D3436" />
      <rect x="40" y="25" width="20" height="70" fill="#2D3436" />
      <rect x="15" y="20" width="10" height="15" fill="#2D3436" />
      <rect x="75" y="20" width="10" height="15" fill="#2D3436" />
      <rect x="45" y="15" width="10" height="15" fill="#2D3436" />
    </svg>
  ),
  'shadow-tent': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <polygon points="50,15 10,85 90,85" fill="#2D3436" />
    </svg>
  ),
  'shadow-barn': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="15" y="45" width="70" height="50" fill="#2D3436" />
      <polygon points="50,15 10,50 90,50" fill="#2D3436" />
      <rect x="35" y="60" width="30" height="35" fill="#2D3436" />
    </svg>
  ),
  'shadow-tower': () => (
    <svg viewBox="0 0 100 100" className={styles.shadowSvg}>
      <rect x="35" y="30" width="30" height="65" fill="#2D3436" />
      <polygon points="50,10 30,35 70,35" fill="#2D3436" />
      <rect x="30" y="25" width="10" height="15" fill="#2D3436" />
      <rect x="60" y="25" width="10" height="15" fill="#2D3436" />
    </svg>
  ),
};

function ShadowQuestion({ question, selectedAnswer, showFeedback, isCorrect, onAnswer }) {
  const MainImage = MainImages[question.mainImage];

  return (
    <div className={styles.container}>
      {/* Main colored image */}
      <motion.div
        className={styles.mainImageWrapper}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {MainImage && <MainImage />}
      </motion.div>

      {/* Shadow options */}
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          const isThisCorrect = option.isCorrect;
          const ShadowImage = ShadowImages[option.image];

          let cardState = null;
          if (showFeedback && isSelected) {
            cardState = isThisCorrect;
          }

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                size="large"
                selected={isSelected && !showFeedback}
                correct={cardState}
                onClick={() => onAnswer(option.id)}
                disabled={showFeedback}
              >
                {ShadowImage && <ShadowImage />}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ShadowQuestion;

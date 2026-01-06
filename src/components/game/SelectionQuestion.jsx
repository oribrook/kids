import { motion } from 'framer-motion';
import { Card } from '../common';
import styles from './SelectionQuestion.module.css';

// Color item icons
const ItemIcons = {
  'apple-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#FF4757" />
      <ellipse cx="50" cy="50" rx="30" ry="32" fill="#FF6B6B" />
      <path d="M 50 18 Q 55 10 65 15" stroke="#7ED321" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="12" rx="10" ry="6" fill="#7ED321" />
    </svg>
  ),
  'apple-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#27AE60" />
      <ellipse cx="50" cy="50" rx="30" ry="32" fill="#2ECC71" />
      <path d="M 50 18 Q 55 10 65 15" stroke="#27AE60" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="12" rx="10" ry="6" fill="#27AE60" />
    </svg>
  ),
  'apple-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#F1C40F" />
      <ellipse cx="50" cy="50" rx="30" ry="32" fill="#FFE66D" />
      <path d="M 50 18 Q 55 10 65 15" stroke="#7ED321" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="12" rx="10" ry="6" fill="#7ED321" />
    </svg>
  ),
  banana: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 20 70 Q 30 20 70 25 Q 85 30 80 45 Q 75 60 50 65 Q 25 70 20 70" fill="#F1C40F" />
      <path d="M 25 65 Q 35 30 68 32 Q 78 35 75 45 Q 70 55 50 60 Q 30 65 25 65" fill="#FFE66D" />
      <ellipse cx="75" cy="30" rx="5" ry="8" fill="#8B7355" />
    </svg>
  ),
  strawberry: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 15 L 30 30 Q 20 50 25 70 Q 35 90 50 95 Q 65 90 75 70 Q 80 50 70 30 Z" fill="#FF4757" />
      <path d="M 50 15 L 35 28 Q 25 48 30 68 Q 40 85 50 88 Q 55 75 50 50 Q 48 30 50 15" fill="#FF6B6B" />
      <ellipse cx="50" cy="12" rx="15" ry="8" fill="#7ED321" />
      <circle cx="35" cy="45" r="3" fill="#FFE66D" />
      <circle cx="50" cy="55" r="3" fill="#FFE66D" />
      <circle cx="65" cy="50" r="3" fill="#FFE66D" />
      <circle cx="45" cy="70" r="3" fill="#FFE66D" />
      <circle cx="58" cy="72" r="3" fill="#FFE66D" />
    </svg>
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
  orange: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="55" r="38" fill="#FF9500" />
      <circle cx="50" cy="50" r="32" fill="#FFA726" />
      <ellipse cx="50" cy="18" rx="6" ry="4" fill="#7ED321" />
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
  'flower-pink': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FD79A8" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#FD79A8" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#FD79A8" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#FD79A8" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#FD79A8" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FFE66D" />
    </svg>
  ),
  'flower-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FFE66D" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#FFE66D" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#FFE66D" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#FFE66D" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#FFE66D" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FF9500" />
    </svg>
  ),
  'flower-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#FF6B6B" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#FF6B6B" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#FF6B6B" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#FF6B6B" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#FF6B6B" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FFE66D" />
    </svg>
  ),
  'flower-purple': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="25" rx="15" ry="18" fill="#A29BFE" />
      <ellipse cx="75" cy="45" rx="15" ry="18" fill="#A29BFE" transform="rotate(72 75 45)" />
      <ellipse cx="65" cy="75" rx="15" ry="18" fill="#A29BFE" transform="rotate(144 65 75)" />
      <ellipse cx="35" cy="75" rx="15" ry="18" fill="#A29BFE" transform="rotate(-144 35 75)" />
      <ellipse cx="25" cy="45" rx="15" ry="18" fill="#A29BFE" transform="rotate(-72 25 45)" />
      <circle cx="50" cy="50" r="12" fill="#FFE66D" />
    </svg>
  ),
  sun: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="25" fill="#FFE66D" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={50 + 30 * Math.cos(angle * Math.PI / 180)}
          y1={50 + 30 * Math.sin(angle * Math.PI / 180)}
          x2={50 + 45 * Math.cos(angle * Math.PI / 180)}
          y2={50 + 45 * Math.sin(angle * Math.PI / 180)}
          stroke="#FFE66D"
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  ),
  tree: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="42" y="65" width="16" height="30" fill="#8B4513" />
      <ellipse cx="50" cy="40" rx="35" ry="35" fill="#27AE60" />
      <ellipse cx="35" cy="35" rx="8" ry="8" fill="#2ECC71" />
      <ellipse cx="65" cy="38" rx="10" ry="10" fill="#2ECC71" />
      <ellipse cx="50" cy="25" rx="12" ry="12" fill="#2ECC71" />
    </svg>
  ),
  heart: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 85 C 20 55 10 35 25 20 C 40 10 50 25 50 35 C 50 25 60 10 75 20 C 90 35 80 55 50 85" fill="#FF6B6B" />
      <ellipse cx="35" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  cloud: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="35" cy="55" rx="25" ry="20" fill="white" stroke="#E0E0E0" strokeWidth="2" />
      <ellipse cx="60" cy="50" rx="30" ry="25" fill="white" stroke="#E0E0E0" strokeWidth="2" />
      <ellipse cx="75" cy="60" rx="20" ry="15" fill="white" stroke="#E0E0E0" strokeWidth="2" />
    </svg>
  ),
  // Shape icons for pattern and logic games
  'circle-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#E74C3C" />
      <circle cx="50" cy="50" r="32" fill="#EC7063" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-blue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#2980B9" />
      <circle cx="50" cy="50" r="32" fill="#3498DB" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#27AE60" />
      <circle cx="50" cy="50" r="32" fill="#2ECC71" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-yellow': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#F1C40F" />
      <circle cx="50" cy="50" r="32" fill="#F4D03F" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'square-blue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#2980B9" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#3498DB" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'square-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#27AE60" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#2ECC71" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'square-black': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#2D3436" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#636E72" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  ),
  'triangle-orange': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon points="50,10 90,85 10,85" fill="#E67E22" />
      <polygon points="50,22 80,78 20,78" fill="#F39C12" />
      <polygon points="35,35 50,35 42,50" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'star-yellow': () => (
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
  'heart-red': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 88 C 20 58 5 38 22 20 C 38 5 50 22 50 32 C 50 22 62 5 78 20 C 95 38 80 58 50 88" fill="#E74C3C" />
      <path d="M 50 78 C 28 55 18 40 30 28 C 40 18 50 30 50 38" fill="#EC7063" />
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  // Match pairs game icons
  bone: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="20" cy="25" rx="12" ry="10" fill="#F5DEB3" />
      <ellipse cx="20" cy="75" rx="12" ry="10" fill="#F5DEB3" />
      <ellipse cx="80" cy="25" rx="12" ry="10" fill="#F5DEB3" />
      <ellipse cx="80" cy="75" rx="12" ry="10" fill="#F5DEB3" />
      <rect x="15" y="35" width="70" height="30" rx="10" fill="#F5DEB3" />
      <rect x="20" y="40" width="60" height="20" rx="8" fill="#FFF8DC" />
    </svg>
  ),
  carrot: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon points="50,95 30,30 70,30" fill="#E67E22" />
      <polygon points="50,85 35,35 65,35" fill="#F39C12" />
      <ellipse cx="45" cy="20" rx="5" ry="15" fill="#27AE60" />
      <ellipse cx="50" cy="18" rx="5" ry="18" fill="#2ECC71" />
      <ellipse cx="55" cy="20" rx="5" ry="15" fill="#27AE60" />
    </svg>
  ),
  cheese: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon points="10,80 90,80 90,40 50,20" fill="#F1C40F" />
      <polygon points="10,80 50,20 50,80" fill="#F4D03F" />
      <circle cx="30" cy="60" r="8" fill="#E67E22" />
      <circle cx="60" cy="55" r="6" fill="#E67E22" />
      <circle cx="75" cy="70" r="5" fill="#E67E22" />
      <circle cx="45" cy="75" r="4" fill="#E67E22" />
    </svg>
  ),
  'fish-food': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="50" rx="35" ry="25" fill="#3498DB" />
      <polygon points="85,50 100,35 100,65" fill="#3498DB" />
      <circle cx="30" cy="45" r="5" fill="#2D3436" />
      <circle cx="32" cy="43" r="2" fill="white" />
      <path d="M 35 55 Q 45 60 55 55" stroke="#2D3436" strokeWidth="2" fill="none" />
      <ellipse cx="50" cy="35" rx="8" ry="3" fill="#2980B9" />
    </svg>
  ),
  nest: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="70" rx="40" ry="20" fill="#8B4513" />
      <ellipse cx="50" cy="65" rx="35" ry="15" fill="#A0522D" />
      <ellipse cx="50" cy="60" rx="28" ry="12" fill="#D2691E" />
      <ellipse cx="40" cy="50" rx="10" ry="12" fill="#F5F5DC" />
      <ellipse cx="55" cy="48" rx="10" ry="12" fill="#FFFAF0" />
      <ellipse cx="48" cy="45" rx="10" ry="12" fill="#FFF8DC" />
    </svg>
  ),
  doghouse: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="15" y="45" width="70" height="50" fill="#8B4513" />
      <polygon points="50,15 10,50 90,50" fill="#A0522D" />
      <ellipse cx="50" cy="75" rx="15" ry="18" fill="#2D3436" />
      <rect x="20" y="50" width="60" height="40" fill="#D2691E" />
    </svg>
  ),
  fishbowl: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="38" ry="35" fill="#87CEEB" stroke="#B0C4DE" strokeWidth="3" />
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#B0E0E6" />
      <ellipse cx="40" cy="60" rx="12" ry="8" fill="#FF6B6B" />
      <polygon points="52,60 62,55 62,65" fill="#FF6B6B" />
      <circle cx="35" cy="57" r="3" fill="#2D3436" />
    </svg>
  ),
  cave: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="85" rx="45" ry="15" fill="#696969" />
      <path d="M 10 85 Q 10 30 50 20 Q 90 30 90 85" fill="#808080" />
      <ellipse cx="50" cy="75" rx="25" ry="20" fill="#2D3436" />
      <ellipse cx="50" cy="80" rx="20" ry="15" fill="#1a1a1a" />
    </svg>
  ),
  water: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="50" rx="40" ry="40" fill="#3498DB" />
      <ellipse cx="50" cy="45" rx="35" ry="35" fill="#5DADE2" />
      <path d="M 25 40 Q 35 35 45 40 Q 55 45 65 40" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M 30 55 Q 40 50 50 55 Q 60 60 70 55" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
    </svg>
  ),
  house: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="20" y="45" width="60" height="50" fill="#E74C3C" />
      <polygon points="50,10 10,50 90,50" fill="#C0392B" />
      <rect x="40" y="60" width="20" height="35" fill="#8B4513" />
      <rect x="25" y="55" width="15" height="15" fill="#87CEEB" />
      <rect x="60" y="55" width="15" height="15" fill="#87CEEB" />
      <circle cx="55" cy="78" r="2" fill="#F1C40F" />
    </svg>
  ),

  // ===== Missing shape icons =====
  'circle-purple': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#8E44AD" />
      <circle cx="50" cy="50" r="32" fill="#9B59B6" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-orange': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#E67E22" />
      <circle cx="50" cy="50" r="32" fill="#F39C12" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'circle-lightblue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#5DADE2" />
      <circle cx="50" cy="50" r="32" fill="#85C1E9" />
      <ellipse cx="38" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'rectangle-green': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="25" width="80" height="50" rx="8" fill="#27AE60" />
      <rect x="18" y="32" width="64" height="36" rx="4" fill="#2ECC71" />
      <rect x="20" y="34" width="20" height="12" rx="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'diamond-purple': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon points="50,5 95,50 50,95 5,50" fill="#8E44AD" />
      <polygon points="50,15 85,50 50,85 15,50" fill="#9B59B6" />
      <polygon points="35,40 50,40 42,52" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  'square-orange': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#E67E22" />
      <rect x="18" y="18" width="64" height="64" rx="4" fill="#F39C12" />
      <rect x="20" y="20" width="20" height="15" rx="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),

  // ===== Missing ball icons =====
  'ball-lightblue': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#5DADE2" />
      <circle cx="50" cy="50" r="35" fill="#85C1E9" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-purple': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#8E44AD" />
      <circle cx="50" cy="50" r="35" fill="#9B59B6" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
  'ball-orange': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="40" fill="#E67E22" />
      <circle cx="50" cy="50" r="35" fill="#F39C12" />
      <ellipse cx="35" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),

  // ===== Missing star/heart variants =====
  'star-orange': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <polygon
        points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
        fill="#E67E22"
      />
      <polygon
        points="50,15 58,40 85,40 64,56 72,82 50,68 28,82 36,56 15,40 42,40"
        fill="#F39C12"
      />
    </svg>
  ),
  'heart-pink': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 88 C 20 58 5 38 22 20 C 38 5 50 22 50 32 C 50 22 62 5 78 20 C 95 38 80 58 50 88" fill="#E91E63" />
      <path d="M 50 78 C 28 55 18 40 30 28 C 40 18 50 30 50 38" fill="#F48FB1" />
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />
    </svg>
  ),
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
  honey: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="70" rx="35" ry="25" fill="#F39C12" />
      <ellipse cx="50" cy="65" rx="30" ry="20" fill="#F1C40F" />
      <rect x="30" y="20" width="40" height="40" rx="5" fill="#D4AC0D" />
      <rect x="35" y="25" width="30" height="30" rx="3" fill="#F4D03F" />
      <ellipse cx="50" cy="18" rx="15" ry="5" fill="#8B4513" />
    </svg>
  ),
  savanna: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="0" y="60" width="100" height="40" fill="#D4AC0D" />
      <rect x="0" y="55" width="100" height="10" fill="#F4D03F" />
      <circle cx="80" cy="25" r="15" fill="#F39C12" />
      <rect x="45" y="40" width="6" height="35" fill="#8B4513" />
      <ellipse cx="48" cy="35" rx="20" ry="12" fill="#27AE60" />
      <ellipse cx="35" cy="38" rx="8" ry="5" fill="#2ECC71" />
      <ellipse cx="60" cy="38" rx="8" ry="5" fill="#2ECC71" />
    </svg>
  ),
  river: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 0 30 Q 25 40 50 30 Q 75 20 100 30 L 100 70 Q 75 80 50 70 Q 25 60 0 70 Z" fill="#3498DB" />
      <path d="M 0 35 Q 25 45 50 35 Q 75 25 100 35 L 100 65 Q 75 75 50 65 Q 25 55 0 65 Z" fill="#5DADE2" />
      <path d="M 20 45 Q 35 40 50 45" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 50 55 Q 65 50 80 55" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  ),
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
  moon: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="50" cy="50" r="38" fill="#F4D03F" />
      <circle cx="35" cy="50" r="30" fill="#2C3E50" />
      <circle cx="60" cy="35" r="5" fill="#F7DC6F" opacity="0.5" />
      <circle cx="70" cy="55" r="3" fill="#F7DC6F" opacity="0.5" />
    </svg>
  ),
  rain: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="35" cy="35" rx="20" ry="15" fill="#85C1E9" />
      <ellipse cx="55" cy="30" rx="25" ry="20" fill="#AED6F1" />
      <ellipse cx="70" cy="38" rx="18" ry="12" fill="#85C1E9" />
      <line x1="30" y1="55" x2="25" y2="75" stroke="#3498DB" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="55" x2="45" y2="75" stroke="#3498DB" strokeWidth="3" strokeLinecap="round" />
      <line x1="70" y1="55" x2="65" y2="75" stroke="#3498DB" strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="65" x2="35" y2="85" stroke="#3498DB" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="65" x2="55" y2="85" stroke="#3498DB" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  wind: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 10 35 Q 40 35 50 25 Q 60 15 70 25" stroke="#85C1E9" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 15 50 Q 45 50 60 50 Q 80 50 85 40" stroke="#AED6F1" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 10 65 Q 30 65 45 65 Q 65 65 70 75" stroke="#85C1E9" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  rainbow: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 10 80 Q 10 20 50 20 Q 90 20 90 80" stroke="#E74C3C" strokeWidth="8" fill="none" />
      <path d="M 18 80 Q 18 28 50 28 Q 82 28 82 80" stroke="#F39C12" strokeWidth="8" fill="none" />
      <path d="M 26 80 Q 26 36 50 36 Q 74 36 74 80" stroke="#F1C40F" strokeWidth="8" fill="none" />
      <path d="M 34 80 Q 34 44 50 44 Q 66 44 66 80" stroke="#2ECC71" strokeWidth="8" fill="none" />
      <path d="M 42 80 Q 42 52 50 52 Q 58 52 58 80" stroke="#3498DB" strokeWidth="8" fill="none" />
    </svg>
  ),
  snow: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <line x1="50" y1="10" x2="50" y2="90" stroke="#AED6F1" strokeWidth="4" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="#AED6F1" strokeWidth="4" />
      <line x1="22" y1="22" x2="78" y2="78" stroke="#AED6F1" strokeWidth="4" />
      <line x1="78" y1="22" x2="22" y2="78" stroke="#AED6F1" strokeWidth="4" />
      <circle cx="50" cy="50" r="8" fill="#E8F6F3" />
      <circle cx="50" cy="20" r="4" fill="#D5F5E3" />
      <circle cx="50" cy="80" r="4" fill="#D5F5E3" />
      <circle cx="20" cy="50" r="4" fill="#D5F5E3" />
      <circle cx="80" cy="50" r="4" fill="#D5F5E3" />
    </svg>
  ),
  shell: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="40" ry="35" fill="#A0522D" />
      <ellipse cx="50" cy="50" rx="35" ry="30" fill="#D2691E" />
      <path d="M 20 55 Q 50 30 80 55" stroke="#8B4513" strokeWidth="3" fill="none" />
      <path d="M 25 60 Q 50 40 75 60" stroke="#8B4513" strokeWidth="3" fill="none" />
      <path d="M 30 65 Q 50 50 70 65" stroke="#8B4513" strokeWidth="3" fill="none" />
    </svg>
  ),
  leaf: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 50 90 Q 20 60 30 30 Q 50 10 70 30 Q 80 60 50 90" fill="#27AE60" />
      <path d="M 50 85 Q 30 60 38 35 Q 50 20 62 35 Q 70 60 50 85" fill="#2ECC71" />
      <path d="M 50 85 L 50 30" stroke="#1E8449" strokeWidth="3" fill="none" />
      <path d="M 50 50 L 35 40" stroke="#1E8449" strokeWidth="2" fill="none" />
      <path d="M 50 60 L 65 50" stroke="#1E8449" strokeWidth="2" fill="none" />
    </svg>
  ),

  // ===== Match pairs game - Animals =====
  mouse: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="30" ry="25" fill="#95A5A6" />
      <ellipse cx="50" cy="50" rx="25" ry="20" fill="#BDC3C7" />
      <ellipse cx="30" cy="35" rx="12" ry="15" fill="#BDC3C7" />
      <ellipse cx="70" cy="35" rx="12" ry="15" fill="#BDC3C7" />
      <ellipse cx="30" cy="35" rx="8" ry="10" fill="#FFC0CB" />
      <ellipse cx="70" cy="35" rx="8" ry="10" fill="#FFC0CB" />
      <circle cx="40" cy="50" r="4" fill="#2C3E50" />
      <circle cx="60" cy="50" r="4" fill="#2C3E50" />
      <ellipse cx="50" cy="58" rx="5" ry="3" fill="#FFC0CB" />
      <path d="M 50 61 L 50 65" stroke="#2C3E50" strokeWidth="2" />
      <path d="M 80 55 Q 95 50 95 60" stroke="#BDC3C7" strokeWidth="4" fill="none" />
    </svg>
  ),
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
  hammer: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="45" y="40" width="10" height="50" rx="2" fill="#8B4513" />
      <rect x="47" y="45" width="6" height="42" fill="#A0522D" />
      <rect x="25" y="15" width="50" height="25" rx="4" fill="#7F8C8D" />
      <rect x="30" y="18" width="40" height="19" rx="2" fill="#95A5A6" />
    </svg>
  ),
  knife: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="45" y="55" width="10" height="35" rx="2" fill="#8B4513" />
      <rect x="47" y="58" width="6" height="30" fill="#A0522D" />
      <path d="M 45 55 L 50 10 L 55 55 Z" fill="#BDC3C7" />
      <path d="M 48 52 L 50 15 L 52 52 Z" fill="#ECF0F1" />
    </svg>
  ),
  brush: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="45" y="10" width="10" height="45" rx="2" fill="#8B4513" />
      <rect x="47" y="12" width="6" height="40" fill="#A0522D" />
      <rect x="40" y="55" width="20" height="10" rx="2" fill="#7F8C8D" />
      <rect x="38" y="65" width="24" height="25" rx="2" fill="#E74C3C" />
      <rect x="40" y="68" width="20" height="20" fill="#EC7063" />
      <line x1="44" y1="70" x2="44" y2="86" stroke="#C0392B" strokeWidth="2" />
      <line x1="50" y1="70" x2="50" y2="86" stroke="#C0392B" strokeWidth="2" />
      <line x1="56" y1="70" x2="56" y2="86" stroke="#C0392B" strokeWidth="2" />
    </svg>
  ),
  pen: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="45" y="15" width="10" height="60" rx="2" fill="#3498DB" />
      <rect x="47" y="18" width="6" height="55" fill="#5DADE2" />
      <polygon points="45,75 50,95 55,75" fill="#2C3E50" />
      <rect x="43" y="15" width="14" height="8" rx="1" fill="#2980B9" />
      <ellipse cx="50" cy="12" rx="5" ry="3" fill="#F1C40F" />
    </svg>
  ),
  scissors: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="30" cy="75" rx="12" ry="15" fill="#7F8C8D" stroke="#5D6D7E" strokeWidth="2" />
      <ellipse cx="70" cy="75" rx="12" ry="15" fill="#7F8C8D" stroke="#5D6D7E" strokeWidth="2" />
      <ellipse cx="30" cy="75" rx="6" ry="8" fill="white" />
      <ellipse cx="70" cy="75" rx="6" ry="8" fill="white" />
      <path d="M 30 60 L 50 40 L 50 10" stroke="#BDC3C7" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M 70 60 L 50 40" stroke="#BDC3C7" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="40" r="5" fill="#E74C3C" />
    </svg>
  ),
  ruler: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="20" y="30" width="60" height="40" rx="3" fill="#F4D03F" />
      <rect x="25" y="35" width="50" height="30" fill="#F7DC6F" />
      <line x1="30" y1="35" x2="30" y2="50" stroke="#2C3E50" strokeWidth="2" />
      <line x1="40" y1="35" x2="40" y2="45" stroke="#2C3E50" strokeWidth="1" />
      <line x1="50" y1="35" x2="50" y2="50" stroke="#2C3E50" strokeWidth="2" />
      <line x1="60" y1="35" x2="60" y2="45" stroke="#2C3E50" strokeWidth="1" />
      <line x1="70" y1="35" x2="70" y2="50" stroke="#2C3E50" strokeWidth="2" />
    </svg>
  ),
  spoon: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="47" y="50" width="6" height="40" rx="2" fill="#BDC3C7" />
      <ellipse cx="50" cy="30" rx="18" ry="22" fill="#95A5A6" />
      <ellipse cx="50" cy="28" rx="14" ry="18" fill="#BDC3C7" />
    </svg>
  ),

  // ===== Match pairs game - Food =====
  bread: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="55" rx="38" ry="30" fill="#D4AC0D" />
      <ellipse cx="50" cy="50" rx="35" ry="26" fill="#F4D03F" />
      <path d="M 25 45 Q 50 35 75 45" stroke="#D4AC0D" strokeWidth="3" fill="none" />
      <path d="M 30 55 Q 50 48 70 55" stroke="#D4AC0D" strokeWidth="2" fill="none" />
    </svg>
  ),
  fruit: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <circle cx="35" cy="60" r="22" fill="#E74C3C" />
      <circle cx="35" cy="55" r="18" fill="#EC7063" />
      <circle cx="65" cy="55" r="20" fill="#F39C12" />
      <circle cx="65" cy="50" r="16" fill="#F5B041" />
      <ellipse cx="50" cy="25" rx="8" ry="5" fill="#27AE60" />
      <path d="M 50 30 L 50 40" stroke="#27AE60" strokeWidth="3" />
    </svg>
  ),

  // ===== Match pairs game - Other items =====
  bag: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="20" y="35" width="60" height="55" rx="5" fill="#8E44AD" />
      <rect x="25" y="40" width="50" height="45" rx="3" fill="#9B59B6" />
      <path d="M 35 35 Q 35 15 50 15 Q 65 15 65 35" stroke="#8E44AD" strokeWidth="6" fill="none" />
    </svg>
  ),
  hat: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="75" rx="45" ry="12" fill="#2C3E50" />
      <ellipse cx="50" cy="70" rx="30" ry="8" fill="#34495E" />
      <rect x="30" y="30" width="40" height="40" rx="5" fill="#2C3E50" />
      <rect x="33" y="33" width="34" height="35" rx="3" fill="#34495E" />
      <rect x="35" y="55" width="30" height="8" fill="#E74C3C" />
    </svg>
  ),
  stone: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="60" rx="38" ry="28" fill="#7F8C8D" />
      <ellipse cx="50" cy="55" rx="32" ry="22" fill="#95A5A6" />
      <ellipse cx="40" cy="50" rx="8" ry="5" fill="#BDC3C7" />
    </svg>
  ),
  bottle: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="35" y="30" width="30" height="60" rx="5" fill="#3498DB" />
      <rect x="38" y="35" width="24" height="52" rx="3" fill="#5DADE2" />
      <rect x="40" y="15" width="20" height="18" rx="2" fill="#2980B9" />
      <ellipse cx="50" cy="13" rx="8" ry="4" fill="#1A5276" />
    </svg>
  ),
  cup: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <path d="M 25 30 L 30 85 L 70 85 L 75 30 Z" fill="#ECF0F1" />
      <path d="M 28 35 L 32 80 L 68 80 L 72 35 Z" fill="#F8F9F9" />
      <path d="M 75 40 Q 90 40 90 55 Q 90 70 75 70" stroke="#BDC3C7" strokeWidth="5" fill="none" />
    </svg>
  ),
  pool: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="60" rx="42" ry="25" fill="#2980B9" />
      <ellipse cx="50" cy="55" rx="38" ry="20" fill="#3498DB" />
      <ellipse cx="50" cy="50" rx="32" ry="15" fill="#5DADE2" />
      <path d="M 30 50 Q 40 45 50 50 Q 60 55 70 50" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  ),
  fountain: () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <ellipse cx="50" cy="80" rx="40" ry="12" fill="#7F8C8D" />
      <ellipse cx="50" cy="75" rx="35" ry="8" fill="#3498DB" />
      <rect x="45" y="50" width="10" height="25" fill="#95A5A6" />
      <path d="M 50 50 Q 45 30 50 20 Q 55 30 50 50" fill="#5DADE2" />
      <path d="M 50 35 Q 35 45 30 60" stroke="#5DADE2" strokeWidth="3" fill="none" />
      <path d="M 50 35 Q 65 45 70 60" stroke="#5DADE2" strokeWidth="3" fill="none" />
    </svg>
  ),

  // ===== Hebrew Letter Icons =====
  'letter-alef': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">א</text>
    </svg>
  ),
  'letter-bet': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ב</text>
    </svg>
  ),
  'letter-gimel': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ג</text>
    </svg>
  ),
  'letter-dalet': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ד</text>
    </svg>
  ),
  'letter-he': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ה</text>
    </svg>
  ),
  'letter-vav': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ו</text>
    </svg>
  ),
  'letter-zayin': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ז</text>
    </svg>
  ),
  'letter-chet': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ח</text>
    </svg>
  ),
  'letter-tet': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ט</text>
    </svg>
  ),
  'letter-yod': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">י</text>
    </svg>
  ),
  'letter-kaf': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">כ</text>
    </svg>
  ),
  'letter-lamed': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ל</text>
    </svg>
  ),
  'letter-mem': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">מ</text>
    </svg>
  ),
  'letter-nun': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">נ</text>
    </svg>
  ),
  'letter-samech': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ס</text>
    </svg>
  ),
  'letter-ayin': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ע</text>
    </svg>
  ),
  'letter-peh': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">פ</text>
    </svg>
  ),
  'letter-tsade': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">צ</text>
    </svg>
  ),
  'letter-qof': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ק</text>
    </svg>
  ),
  'letter-resh': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ר</text>
    </svg>
  ),
  'letter-shin': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ש</text>
    </svg>
  ),
  'letter-tav': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
    <rect x="10" y="10" width="80" height="80" rx="12" fill="#00CEC9" />
      <text x="50" y="72" textAnchor="middle" fontSize="55" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold">ת</text>
    </svg>
  ),

  // ===== Word Image Icons (for letters games) =====
  'word-naalayim': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Shoes / נעליים */}
      <ellipse cx="30" cy="60" rx="22" ry="12" fill="#E74C3C" />
      <ellipse cx="30" cy="55" rx="18" ry="8" fill="#C0392B" />
      <ellipse cx="70" cy="60" rx="22" ry="12" fill="#E74C3C" />
      <ellipse cx="70" cy="55" rx="18" ry="8" fill="#C0392B" />
      <ellipse cx="30" cy="50" rx="10" ry="6" fill="#2C3E50" />
      <ellipse cx="70" cy="50" rx="10" ry="6" fill="#2C3E50" />
    </svg>
  ),
  'word-bayit': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* House / בית - reuse existing house icon style */}
      <rect x="20" y="45" width="60" height="50" fill="#E74C3C" />
      <polygon points="50,10 10,50 90,50" fill="#C0392B" />
      <rect x="40" y="60" width="20" height="35" fill="#8B4513" />
      <rect x="25" y="55" width="15" height="15" fill="#87CEEB" />
      <rect x="60" y="55" width="15" height="15" fill="#87CEEB" />
      <circle cx="55" cy="78" r="2" fill="#F1C40F" />
    </svg>
  ),
  'word-shemesh': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Sun / שמש - reuse sun style */}
      <circle cx="50" cy="50" r="25" fill="#FFE66D" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={50 + 30 * Math.cos(angle * Math.PI / 180)}
          y1={50 + 30 * Math.sin(angle * Math.PI / 180)}
          x2={50 + 45 * Math.cos(angle * Math.PI / 180)}
          y2={50 + 45 * Math.sin(angle * Math.PI / 180)}
          stroke="#FFE66D"
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  ),
  'word-kelev': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Dog / כלב */}
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
  'word-tapuach': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Apple / תפוח */}
      <ellipse cx="50" cy="55" rx="35" ry="38" fill="#FF4757" />
      <ellipse cx="50" cy="50" rx="30" ry="32" fill="#FF6B6B" />
      <path d="M 50 18 Q 55 10 65 15" stroke="#7ED321" strokeWidth="4" fill="none" />
      <ellipse cx="60" cy="12" rx="10" ry="6" fill="#7ED321" />
    </svg>
  ),
  'word-banana': () => (
    <img src="/images/word-banana.png" alt="בננה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-aba': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Dad / אבא - man face */}
      <circle cx="50" cy="45" r="30" fill="#FDBF60" />
      <circle cx="50" cy="42" r="27" fill="#FFD89B" />
      <circle cx="38" cy="40" r="4" fill="#2C3E50" />
      <circle cx="62" cy="40" r="4" fill="#2C3E50" />
      <path d="M 42 55 Q 50 62 58 55" stroke="#2C3E50" strokeWidth="3" fill="none" />
      <rect x="25" y="18" width="50" height="12" rx="3" fill="#5D4E37" />
      <rect x="20" y="25" width="60" height="8" rx="2" fill="#5D4E37" />
    </svg>
  ),
  'word-ima': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Mom / אמא - woman face */}
      <circle cx="50" cy="48" r="28" fill="#FDBF60" />
      <circle cx="50" cy="45" r="25" fill="#FFD89B" />
      <circle cx="40" cy="42" r="3" fill="#2C3E50" />
      <circle cx="60" cy="42" r="3" fill="#2C3E50" />
      <path d="M 44 55 Q 50 60 56 55" stroke="#E74C3C" strokeWidth="3" fill="none" />
      <path d="M 22 35 Q 25 15 50 12 Q 75 15 78 35" stroke="#5D4E37" strokeWidth="12" fill="none" />
      <ellipse cx="22" cy="45" rx="8" ry="12" fill="#5D4E37" />
      <ellipse cx="78" cy="45" rx="8" ry="12" fill="#5D4E37" />
    </svg>
  ),
  'word-mamtak': () => (
    <img src="/images/word-mamtak.png" alt="ממתק" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-sababa': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Thumbs up / סבבה */}
      <ellipse cx="50" cy="60" rx="20" ry="25" fill="#FDBF60" />
      <rect x="35" y="70" width="30" height="25" rx="5" fill="#FDBF60" />
      <ellipse cx="50" cy="35" rx="12" ry="20" fill="#FFD89B" />
      <ellipse cx="50" cy="30" rx="10" ry="15" fill="#FDBF60" />
    </svg>
  ),
  'word-avatiach': () => (
    <img src="/images/word-avatiach.png" alt="אבטיח" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-avatiach-slice': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Watermelon slice / אבטיח */}
      <path d="M 15 75 C 15 45 35 20 50 20 C 65 20 85 45 85 75 Z" fill="#E53935" />
      <path d="M 15 75 C 15 78 30 82 50 82 C 70 82 85 78 85 75" fill="#E53935" />
      <path d="M 12 77 C 12 80 28 85 50 85 C 72 85 88 80 88 77 L 85 75 C 85 78 70 82 50 82 C 30 82 15 78 15 75 Z" fill="#43A047" />
      <path d="M 10 80 C 10 83 27 88 50 88 C 73 88 90 83 90 80 L 88 77 C 88 80 72 85 50 85 C 28 85 12 80 12 77 Z" fill="#2E7D32" />
      <ellipse cx="35" cy="50" rx="4" ry="6" fill="#2D3436" />
      <ellipse cx="50" cy="42" rx="4" ry="6" fill="#2D3436" />
      <ellipse cx="65" cy="50" rx="4" ry="6" fill="#2D3436" />
      <ellipse cx="40" cy="65" rx="4" ry="5" fill="#2D3436" />
      <ellipse cx="55" cy="62" rx="4" ry="5" fill="#2D3436" />
      <ellipse cx="70" cy="68" rx="3" ry="4" fill="#2D3436" />
      <ellipse cx="30" cy="62" rx="3" ry="4" fill="#2D3436" />
    </svg>
  ),
  'word-kiseh': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Chair / כיסא */}
      {/* Backrest */}
      <rect x="22" y="12" width="56" height="35" rx="4" fill="#5D4037" />
      <rect x="26" y="16" width="48" height="27" rx="2" fill="#8D6E63" />
      {/* Seat */}
      <rect x="18" y="47" width="64" height="12" rx="3" fill="#5D4037" />
      <rect x="22" y="49" width="56" height="8" rx="2" fill="#6D4C41" />
      {/* Front legs */}
      <rect x="22" y="59" width="8" height="32" rx="2" fill="#5D4037" />
      <rect x="70" y="59" width="8" height="32" rx="2" fill="#5D4037" />
      {/* Back legs (shorter, behind) */}
      <rect x="26" y="47" width="6" height="18" rx="1" fill="#4E342E" />
      <rect x="68" y="47" width="6" height="18" rx="1" fill="#4E342E" />
    </svg>
  ),
  'word-avokado': () => (
    <img src="/images/word-avokado.png" alt="אבוקדו" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-ochel': () => (
    <img src="/images/word-ochel.png" alt="אוכל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-ozen': () => (
    <img src="/images/word-ozen.png" alt="אוזן" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-esh': () => (
    <img src="/images/word-esh.png" alt="אש" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // ===== Letter Bet Game Word Icons (placeholder - replace with PNGs) =====
  'word-balon': () => (
    <img src="/images/word-balon.png" alt="בלון" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-bamba': () => (
    <img src="/images/word-bamba.png" alt="במבה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-barvaz': () => (
    <img src="/images/word-barvaz.png" alt="ברווז" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-beigale': () => (
    <img src="/images/word-beigale.png" alt="בייגלה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-gamal': () => (
    <img src="/images/word-gamal.png" alt="גמל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-gina': () => (
    <img src="/images/word-gina.png" alt="גינה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-garbayim': () => (
    <img src="/images/word-garbayim.png" alt="גרביים" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-gezer': () => (
    <img src="/images/word-gezer.png" alt="גזר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-geshem': () => (
    <img src="/images/word-geshem.png" alt="גשם" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kof': () => (
    <img src="/images/word-kof.png" alt="קוף" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-mita': () => (
    <img src="/images/word-mita.png" alt="מיטה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter Dalet (ד) words
  'word-delet': () => (
    <img src="/images/word-delet.png" alt="דלת" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-dag': () => (
    <img src="/images/word-dag.png" alt="דג" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-dvora': () => (
    <img src="/images/word-dvora.png" alt="דבורה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-degel': () => (
    <img src="/images/word-degel.png" alt="דגל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-deshe': () => (
    <img src="/images/word-deshe.png" alt="דשא" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-dinozaur': () => (
    <img src="/images/word-dinozaur.png" alt="דינוזאור" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-daf': () => (
    <img src="/images/word-daf.png" alt="דף" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-dvash': () => (
    <img src="/images/word-dvash.png" alt="דבש" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-arye': () => (
    <img src="/images/word-arye.png" alt="אריה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ה (He) words - Q1 intro words use question mark placeholder
  'word-hayeled': () => (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="50" r="45" fill="#9b59b6" />
      <text x="50" y="68" textAnchor="middle" fontSize="50" fontWeight="bold" fill="white">?</text>
    </svg>
  ),
  'word-hatzipor': () => (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="50" r="45" fill="#3498db" />
      <text x="50" y="68" textAnchor="middle" fontSize="50" fontWeight="bold" fill="white">?</text>
    </svg>
  ),
  'word-habayit': () => (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="50" r="45" fill="#e74c3c" />
      <text x="50" y="68" textAnchor="middle" fontSize="50" fontWeight="bold" fill="white">?</text>
    </svg>
  ),
  'word-habanana': () => (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="50" r="45" fill="#f39c12" />
      <text x="50" y="68" textAnchor="middle" fontSize="50" fontWeight="bold" fill="white">?</text>
    </svg>
  ),
  // Letter ה (He) words - non-Q1 words with actual images
  'word-har': () => (
    <img src="/images/word-har.png" alt="הר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-havdala': () => (
    <img src="/images/word-havdala.png" alt="הבדלה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ו (Vav) words
  'word-vilon': () => (
    <img src="/images/word-vilon.png" alt="וילון" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-veterinar': () => (
    <img src="/images/word-veterinar.png" alt="ווטרינר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-vered': () => (
    <img src="/images/word-vered.png" alt="ורד" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-varod': () => (
    <img src="/images/word-varod.png" alt="ורוד" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-waffle': () => (
    <img src="/images/word-waffle.png" alt="וופל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'vav-two-ways': () => (
    <img src="/images/vav-two-ways.png" alt="ו" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ז (Zayin) words
  'word-zanav': () => (
    <img src="/images/word-zanav.png" alt="זנב" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-zchuchit': () => (
    <img src="/images/word-zchuchit.png" alt="זכוכית" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-zeev': () => (
    <img src="/images/word-zeev.png" alt="זאב" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-zebra': () => (
    <img src="/images/word-zebra.png" alt="זברה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Zayin permutations (different writing styles)
  'zayin-option-1': () => (
    <img src="/images/zayin-option-1.png" alt="ז" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'zayin-option-2': () => (
    <img src="/images/zayin-option-2.png" alt="ז" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'zayin-option-3': () => (
    <img src="/images/zayin-option-3.png" alt="ז" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'zayin-option-4': () => (
    <img src="/images/zayin-option-4.png" alt="ז" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'zayin-option-5': () => (
    <img src="/images/zayin-option-5.png" alt="ז" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ח (Chet) words
  'word-chatul': () => (
    <img src="/images/word-chatul.png" alt="חתול" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-chamesh': () => (
    <img src="/images/word-chamesh.png" alt="חמש" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-chevel': () => (
    <img src="/images/word-chevel.png" alt="חבל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-chagav': () => (
    <img src="/images/word-chagav.png" alt="חגב" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-chavita': () => (
    <img src="/images/word-chavita.png" alt="חביתה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-chipooshit': () => (
    <img src="/images/word-chipooshit.png" alt="חיפושית" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
};

function SelectionQuestion({
  question,
  selectedAnswer,
  showFeedback,
  isCorrect,
  onAnswer,
  // Multi-select props
  multiSelectState,
  onMultiSelectAnswer,
  // Intro multi-select props
  onIntroMultiSelectAnswer,
}) {
  // Support for question image (used in letters games to show word image)
  const QuestionImage = question.questionImage ? ItemIcons[question.questionImage] : null;

  // Check if this is a multi-select question
  const isMultiSelect = question.multiSelect === true;

  // Check if this is an intro multi-select question (all options correct, plays word audio)
  const isIntroMultiSelect = question.isIntroMultiSelect === true;

  // Check if we have 9 options (for quiz-style 3x3 grid)
  const hasNineOptions = question.options.length === 9;

  // Determine the options container class
  const getOptionsClass = () => {
    if (isMultiSelect || isIntroMultiSelect) return styles.optionsMultiSelect;
    if (hasNineOptions) return styles.optionsGrid9;
    return styles.options;
  };

  return (
    <div className={styles.container}>
      {/* Optional question image display */}
      {QuestionImage && (
        <motion.div
          className={styles.questionImageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.questionImage}>
            <QuestionImage />
          </div>
        </motion.div>
      )}

      <div className={getOptionsClass()}>
        {question.options.map((option, index) => {
          const ItemIcon = ItemIcons[option.image];
          const isThisCorrect = option.isCorrect;

          // Intro multi-select mode (all correct, plays word audio on click)
          if (isIntroMultiSelect) {
            const optionState = multiSelectState?.[option.id];
            const isCorrectFound = optionState === 'correct';

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  size="large"
                  selected={false}
                  correct={isCorrectFound ? true : null}
                  onClick={() => onIntroMultiSelectAnswer(option.id, option.optionAudio)}
                  disabled={false}
                >
                  {ItemIcon ? (
                    <ItemIcon />
                  ) : (
                    <span className={styles.placeholder}>{option.label}</span>
                  )}
                  {/* Checkmark overlay for selected items */}
                  {isCorrectFound && (
                    <div className={styles.checkmark}>✓</div>
                  )}
                </Card>
              </motion.div>
            );
          }

          // Multi-select mode
          if (isMultiSelect) {
            const optionState = multiSelectState?.[option.id];
            const isSelected = optionState === 'selected';
            const isCorrectFound = optionState === 'correct';
            const isWrong = optionState === 'wrong';
            const isDisabled = isCorrectFound || isWrong;

            let cardCorrectState = null;
            if (isCorrectFound) cardCorrectState = true;
            if (isWrong) cardCorrectState = false;

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  size="large"
                  selected={isSelected}
                  correct={cardCorrectState}
                  onClick={() => onMultiSelectAnswer(option.id, isThisCorrect)}
                  disabled={isDisabled}
                >
                  {ItemIcon ? (
                    <ItemIcon />
                  ) : (
                    <span className={styles.placeholder}>{option.label}</span>
                  )}
                  {/* Checkmark overlay for correct selections */}
                  {isCorrectFound && (
                    <div className={styles.checkmark}>✓</div>
                  )}
                </Card>
              </motion.div>
            );
          }

          // Standard single-select mode
          const isSelected = selectedAnswer === option.id;
          let cardState = null;
          if (showFeedback && isSelected) {
            cardState = isThisCorrect;
          }

          // Use smaller cards for 9-option grids
          const cardSize = hasNineOptions ? 'large' : 'xlarge';

          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                size={cardSize}
                selected={isSelected && !showFeedback}
                correct={cardState}
                onClick={() => onAnswer(option.id)}
                disabled={showFeedback}
              >
                {ItemIcon ? (
                  <ItemIcon />
                ) : (
                  <span className={styles.placeholder}>{option.label}</span>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectionQuestion;

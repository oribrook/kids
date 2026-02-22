import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';
import { useUser } from '../../context/UserContext';
import { Button } from '../common';
import GameComplete from './GameComplete';
import styles from './MemoryCardGame.module.css';

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Calculate stars based on moves and number of pairs
 */
function calculateStars(moves, pairs) {
  const ratio = moves / pairs;
  if (ratio <= 1.5) return 3;
  if (ratio <= 2.5) return 2;
  return 1;
}

/**
 * MemoryCardGame - Classic flip-and-match memory card game
 *
 * Phases:
 * 1. select-size - User picks grid size (4x4 or 6x6)
 * 2. playing - The actual card matching game
 * 3. complete - Shows results with stars
 */
function MemoryCardGame({ game, onClose }) {
  const { playInstruction, playCorrect, playWrong, playComplete, stopInstruction } = useAudio();
  const { addScore, recordGamePlayed } = useUser();

  const [phase, setPhase] = useState('select-size');
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairIds, setMatchedPairIds] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [gridSize, setGridSize] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [stars, setStars] = useState(0);

  const completedRef = useRef(false);

  /**
   * Start game with selected grid size
   */
  const startGame = useCallback((sizeConfig) => {
    const { size, pairs } = sizeConfig;
    setGridSize(sizeConfig);

    // Pick random items from pool
    const shuffledPool = shuffleArray(game.itemPool);
    const selectedItems = shuffledPool.slice(0, pairs);

    // Create pairs - each item appears twice
    const cardPairs = [];
    selectedItems.forEach((item, idx) => {
      cardPairs.push({
        cardIndex: idx * 2,
        pairId: item.id,
        char: item.char,
        name: item.name,
        audio: item.audio,
      });
      cardPairs.push({
        cardIndex: idx * 2 + 1,
        pairId: item.id,
        char: item.char,
        name: item.name,
        audio: item.audio,
      });
    });

    setCards(shuffleArray(cardPairs));
    setFlippedIndices([]);
    setMatchedPairIds(new Set());
    setMoves(0);
    setIsLocked(false);
    completedRef.current = false;
    setPhase('playing');
  }, [game.itemPool]);

  /**
   * Handle card click
   */
  const handleCardClick = useCallback((index) => {
    if (isLocked) return;
    if (flippedIndices.includes(index)) return;
    if (matchedPairIds.has(cards[index].pairId)) return;

    // Stop any currently playing audio and play this card's audio
    stopInstruction();
    playInstruction(cards[index].audio);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newFlipped;

      if (cards[first].pairId === cards[second].pairId) {
        // Match found!
        setTimeout(() => {
          playCorrect();
        }, 400);
        const newMatched = new Set(matchedPairIds);
        newMatched.add(cards[first].pairId);
        setMatchedPairIds(newMatched);
        setFlippedIndices([]);

        // Check if game complete
        if (newMatched.size === gridSize.pairs) {
          // Small delay before showing completion
          setTimeout(() => {
            if (!completedRef.current) {
              completedRef.current = true;
              const finalMoves = moves + 1; // current move counts
              const gameStars = calculateStars(finalMoves, gridSize.pairs);
              setStars(gameStars);
              const score = gameStars * 16;
              addScore(score);
              recordGamePlayed(game.id, score, gameStars);
              playComplete();
              setPhase('complete');
            }
          }, 800);
        }
      } else {
        // No match - flip back after delay
        setIsLocked(true);
        setTimeout(() => {
          playWrong();
        }, 400);
        setTimeout(() => {
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1300);
      }
    }
  }, [isLocked, flippedIndices, matchedPairIds, cards, gridSize, moves, game.id,
      playInstruction, stopInstruction, playCorrect, playWrong, playComplete, addScore, recordGamePlayed]);

  /**
   * Handle clicking an already-matched card (replay audio)
   */
  const handleMatchedCardClick = useCallback((index) => {
    stopInstruction();
    playInstruction(cards[index].audio);
  }, [cards, playInstruction, stopInstruction]);

  /**
   * Determine grid columns based on size
   */
  const getGridCols = () => {
    if (!gridSize) return 4;
    return gridSize.size === 36 ? 6 : 4;
  };

  // Size selection phase
  if (phase === 'select-size') {
    return (
      <div className={styles.container}>
        <div className={styles.sizeSelection}>
          <h2 className={styles.sizeTitle}>בחרו גודל</h2>
          <p className={styles.sizeSubtitle}>כמה קלפים?</p>
          <div className={styles.sizeButtons}>
            {game.gridSizes.map((sizeConfig) => (
              <motion.button
                key={sizeConfig.size}
                className={styles.sizeButton}
                onClick={() => startGame(sizeConfig)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={styles.sizeLabel}>{sizeConfig.label}</span>
                <span className={styles.sizeCount}>{sizeConfig.size} קלפים</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Completion phase
  if (phase === 'complete') {
    return (
      <GameComplete
        score={stars * 16}
        maxScore={48}
        stars={stars}
        onPlayAgain={onClose}
      />
    );
  }

  // Playing phase
  return (
    <div className={styles.container}>
      {/* Header with moves counter */}
      <div className={styles.gameHeader}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        <div className={styles.movesCounter}>
          <span className={styles.movesLabel}>מהלכים:</span>
          <span className={styles.movesValue}>{moves}</span>
        </div>
        <div className={styles.pairsCounter}>
          <span className={styles.pairsLabel}>זוגות:</span>
          <span className={styles.pairsValue}>{matchedPairIds.size}/{gridSize.pairs}</span>
        </div>
      </div>

      {/* Card grid */}
      <div
        className={styles.grid}
        style={{ '--grid-cols': getGridCols() }}
      >
        {cards.map((card, index) => {
          const isFlipped = flippedIndices.includes(index);
          const isMatched = matchedPairIds.has(card.pairId);
          const showFace = isFlipped || isMatched;

          return (
            <motion.div
              key={index}
              className={`${styles.card} ${showFace ? styles.cardFlipped : ''} ${isMatched ? styles.cardMatched : ''}`}
              onClick={() => {
                if (isMatched) {
                  handleMatchedCardClick(index);
                } else {
                  handleCardClick(index);
                }
              }}
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardBack}>
                  <span className={styles.cardBackIcon}>?</span>
                </div>
                <div className={styles.cardFace}>
                  <span className={styles.cardChar}>{card.char}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default MemoryCardGame;

import { useState, useCallback } from 'react';
import { useUser } from '../../context/UserContext';
import { useAudio } from '../../hooks/useAudio';
import styles from './JigsawPuzzle.module.css';

// Puzzle definitions - each is a themed set of emojis
const PUZZLES = [
  {
    id: 1, name: 'חיות', gridSize: 2,
    pieces: ['🐶', '🐱', '🐰', '🐻'],
  },
  {
    id: 2, name: 'פירות', gridSize: 2,
    pieces: ['🍎', '🍌', '🍇', '🍊'],
  },
  {
    id: 3, name: 'כלי תחבורה', gridSize: 2,
    pieces: ['🚗', '🚌', '✈️', '🚢'],
  },
  {
    id: 4, name: 'אוכל', gridSize: 3,
    pieces: ['🍕', '🍔', '🌮', '🍩', '🍦', '🧁', '🥤', '🍿', '🎂'],
  },
  {
    id: 5, name: 'טבע', gridSize: 3,
    pieces: ['🌸', '🌻', '🌈', '⭐', '🌙', '☀️', '🌊', '🍀', '🦋'],
  },
  {
    id: 6, name: 'חיות ים', gridSize: 3,
    pieces: ['🐠', '🐙', '🦀', '🐬', '🐳', '🦈', '🐡', '🦑', '🐚'],
  },
];

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function JigsawPuzzle({ game, onClose }) {
  const [phase, setPhase] = useState('waiting'); // waiting | playing | complete
  const [currentPuzzleIdx, setCurrentPuzzleIdx] = useState(0);
  const [board, setBoard] = useState([]); // slots - null or piece emoji
  const [trayPieces, setTrayPieces] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [stars, setStars] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const { addScore, recordGamePlayed } = useUser();
  const { playCorrect, playWrong, playComplete } = useAudio();

  const puzzle = PUZZLES[currentPuzzleIdx];

  const startPuzzle = useCallback((puzzleIdx) => {
    const p = PUZZLES[puzzleIdx];
    setBoard(new Array(p.pieces.length).fill(null));
    setTrayPieces(shuffleArray(p.pieces.map((emoji, idx) => ({ emoji, correctIdx: idx, id: idx }))));
    setSelectedPiece(null);
    setWrongAttempts(0);
    setPhase('playing');
    setCurrentPuzzleIdx(puzzleIdx);
  }, []);

  const handlePieceClick = useCallback((piece) => {
    setSelectedPiece(piece.id === selectedPiece ? null : piece.id);
  }, [selectedPiece]);

  const handleSlotClick = useCallback((slotIdx) => {
    if (selectedPiece === null) return;
    if (board[slotIdx] !== null) return;

    const piece = trayPieces.find(p => p.id === selectedPiece);
    if (!piece) return;

    if (piece.correctIdx === slotIdx) {
      // Correct placement!
      playCorrect();
      const newBoard = [...board];
      newBoard[slotIdx] = piece.emoji;
      setBoard(newBoard);
      setTrayPieces(prev => prev.filter(p => p.id !== piece.id));
      setSelectedPiece(null);

      // Check if puzzle complete
      if (newBoard.every(slot => slot !== null)) {
        const newCompleted = completedCount + 1;
        setCompletedCount(newCompleted);
        const gameStars = wrongAttempts === 0 ? 3 : wrongAttempts <= 3 ? 2 : 1;
        setStars(gameStars);

        // If completed all puzzles or enough
        if (newCompleted >= PUZZLES.length) {
          setTimeout(() => {
            setPhase('complete');
            playComplete();
            addScore(gameStars * 16);
            recordGamePlayed(game.id, gameStars * 16, gameStars);
          }, 500);
        } else {
          setTimeout(() => {
            setPhase('complete');
            playComplete();
            addScore(gameStars * 8);
          }, 500);
        }
      }
    } else {
      // Wrong placement
      playWrong();
      setWrongAttempts(prev => prev + 1);
    }
  }, [selectedPiece, board, trayPieces, wrongAttempts, completedCount, playCorrect, playWrong, playComplete, addScore, recordGamePlayed, game.id]);

  const handleNextPuzzle = () => {
    const nextIdx = (currentPuzzleIdx + 1) % PUZZLES.length;
    startPuzzle(nextIdx);
  };

  const handleStart = () => {
    startPuzzle(0);
  };

  const handlePlayAgain = () => {
    setCompletedCount(0);
    setPhase('waiting');
  };

  const gridSize = puzzle.gridSize;
  const slotSize = Math.min(80, (Math.min(window.innerWidth, window.innerHeight) - 80) / gridSize - 12);

  return (
    <div className={styles.container}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        {phase === 'playing' && (
          <div className={styles.puzzleInfo}>🧩 {puzzle.name}</div>
        )}
      </div>

      {phase === 'playing' && (
        <div className={styles.gameArea}>
          <div className={styles.puzzleTitle}>סדרו את החלקים!</div>

          {/* Puzzle board */}
          <div
            className={styles.puzzleBoard}
            style={{
              gridTemplateColumns: `repeat(${gridSize}, ${slotSize}px)`,
              gridTemplateRows: `repeat(${gridSize}, ${slotSize}px)`,
            }}
          >
            {board.map((slot, idx) => (
              <div
                key={idx}
                className={`${styles.puzzleSlot} ${slot ? styles.puzzleSlotFilled : ''} ${selectedPiece !== null && !slot ? styles.puzzleSlotHover : ''}`}
                style={{ width: slotSize, height: slotSize }}
                onClick={() => handleSlotClick(idx)}
              >
                {slot ? (
                  <span className={styles.slotContent}>{slot}</span>
                ) : (
                  <span style={{ fontSize: 12, opacity: 0.4 }}>{idx + 1}</span>
                )}
              </div>
            ))}
          </div>

          {/* Pieces tray */}
          <div className={styles.piecesTray}>
            {trayPieces.map(piece => (
              <div
                key={piece.id}
                className={`${styles.puzzlePiece} ${selectedPiece === piece.id ? styles.puzzlePieceSelected : ''}`}
                onClick={() => handlePieceClick(piece)}
              >
                {piece.emoji}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Start overlay */}
      {phase === 'waiting' && (
        <div className={styles.startOverlay}>
          <div className={styles.startIcon}>🧩</div>
          <div className={styles.startText}>!פאזל</div>
          <div className={styles.startSubtext}>בחרו חלק ולחצו על המקום הנכון</div>
          <button className={styles.startBtn} onClick={handleStart}>
            !התחילו 🎯
          </button>
        </div>
      )}

      {/* Complete overlay */}
      {phase === 'complete' && (
        <div className={styles.completeOverlay}>
          <div className={styles.completeText}>!כל הכבוד 🎉</div>
          <div className={styles.completeStars}>
            {[1, 2, 3].map(s => (
              <span key={s} style={{ opacity: s <= stars ? 1 : 0.3 }}>⭐</span>
            ))}
          </div>
          {currentPuzzleIdx < PUZZLES.length - 1 && (
            <button className={styles.completeBtn} onClick={handleNextPuzzle}>➡️ פאזל הבא</button>
          )}
          <button className={styles.completeBtn} onClick={handlePlayAgain}>🔄 מההתחלה</button>
          <button className={styles.completeBtnSecondary} onClick={onClose}>🏠 חזרה</button>
        </div>
      )}
    </div>
  );
}

export default JigsawPuzzle;

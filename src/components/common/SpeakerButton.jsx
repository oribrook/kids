import styles from './SpeakerButton.module.css';

// Small round speaker icon under a card - previews the word audio without selecting the card.
function SpeakerButton({ audio, label, onPlay }) {
  return (
    <button
      className={styles.speakerButton}
      onClick={(e) => {
        e.stopPropagation();
        onPlay(audio);
      }}
      aria-label={`השמע ${label}`}
    >
      <svg viewBox="0 0 24 24" className={styles.speakerIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </button>
  );
}

export default SpeakerButton;

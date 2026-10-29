import styles from './icons.module.css';

export default {
  // ===== English Word Icons (only those without PNG equivalents) =====
  'word-airplane': () => (
    <svg viewBox="0 0 100 100" className={styles.itemSvg}>
      {/* Airplane */}
      <ellipse cx="50" cy="50" rx="35" ry="8" fill="#3498DB" />
      <polygon points="15,50 25,35 35,50" fill="#2980B9" />
      <polygon points="40,50 50,25 60,50" fill="#3498DB" />
      <polygon points="75,50 85,45 85,55" fill="#2980B9" />
      <rect x="70" y="47" width="15" height="6" fill="#3498DB" />
      <circle cx="25" cy="50" r="3" fill="#ECF0F1" />
      <circle cx="35" cy="50" r="3" fill="#ECF0F1" />
      <circle cx="45" cy="50" r="3" fill="#ECF0F1" />
    </svg>
  ),

  // HIJK English words
  'word-ice-cream': () => (
    <img src="/images/word-ice-cream.png" alt="Ice cream" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-igloo': () => (
    <img src="/images/word-igloo.png" alt="Igloo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-insect': () => (
    <img src="/images/word-insect.png" alt="Insect" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-juice': () => (
    <img src="/images/word-juice.png" alt="Juice" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-jelly': () => (
    <img src="/images/word-jelly.png" alt="Jelly" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kite': () => (
    <img src="/images/word-kite.png" alt="Kite" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-key': () => (
    <img src="/images/word-key.png" alt="Key" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kafe': () => (
    <img src="/images/word-kafe.png" alt="קפה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kaki': () => (
    <img src="/images/word-kaki.png" alt="קקי" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kedem': () => (
    <img src="/images/word-kedem.png" alt="קֶדֶם" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-ketssef': () => (
    <img src="/images/word-ketssef.png" alt="קצף" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kasda': () => (
    <img src="/images/word-kasda.png" alt="קסדה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // ===== English LMNOP Words =====
  'word-leaf': () => (
    <img src="/images/word-leaf.png" alt="Leaf" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-nest': () => (
    <img src="/images/word-nest.png" alt="Nest" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-nose': () => (
    <img src="/images/word-nose.png" alt="Nose" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-nut': () => (
    <img src="/images/word-nut.png" alt="Nut" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-orange': () => (
    <img src="/images/word-orange.png" alt="Orange" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-owl': () => (
    <img src="/images/word-owl.png" alt="Owl" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-octopus': () => (
    <img src="/images/word-octopus.png" alt="Octopus" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-pig': () => (
    <img src="/images/word-pig.png" alt="Pig" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-pizza': () => (
    <img src="/images/word-pizza.png" alt="Pizza" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-pineapple': () => (
    <img src="/images/word-pineapple.png" alt="Pineapple" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // ===== English QRST Words =====
  'word-queen': () => (
    <img src="/images/word-queen.png" alt="Queen" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-question': () => (
    <img src="/images/word-question.png" alt="Question" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-quilt': () => (
    <img src="/images/word-quilt.png" alt="Quilt" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-rabbit': () => (
    <img src="/images/word-rabbit.png" alt="Rabbit" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-rainbow': () => (
    <img src="/images/word-rainbow.png" alt="Rainbow" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-rocket': () => (
    <img src="/images/word-rocket.png" alt="Rocket" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-sun': () => (
    <img src="/images/word-sun.png" alt="Sun" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // ===== English UV Words =====
  'word-umbrella': () => (
    <img src="/images/word-umbrella.png" alt="Umbrella" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-unicorn': () => (
    <img src="/images/word-unicorn.png" alt="Unicorn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-uniform': () => (
    <img src="/images/word-uniform.png" alt="Uniform" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-violin': () => (
    <img src="/images/word-violin.png" alt="Violin" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-volcano': () => (
    <img src="/images/word-volcano.png" alt="Volcano" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-van': () => (
    <img src="/images/word-van.png" alt="Van" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // WXYZ words
  'word-watermelon': () => (
    <img src="/images/word-watermelon.png" alt="Watermelon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-whale': () => (
    <img src="/images/word-whale.png" alt="Whale" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-window': () => (
    <img src="/images/word-window.png" alt="Window" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-xylophone': () => (
    <img src="/images/word-xylophone.png" alt="Xylophone" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-fox': () => (
    <img src="/images/word-fox.png" alt="Fox" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yellow': () => (
    <img src="/images/word-yellow.png" alt="Yellow" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yogurt': () => (
    <img src="/images/word-yogurt.png" alt="Yogurt" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yarn': () => (
    <img src="/images/word-yarn.png" alt="Yarn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-zoo': () => (
    <img src="/images/word-zoo.png" alt="Zoo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-zero': () => (
    <img src="/images/word-zero.png" alt="Zero" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
};

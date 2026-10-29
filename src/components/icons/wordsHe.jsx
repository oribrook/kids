import styles from './icons.module.css';

export default {
  // ===== Word Image Icons (for letters games) =====
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
    <img src="/images/word-kelev.png" alt="כלב" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tapuach': () => (
    <img src="/images/word-tapuach.png" alt="תפוח" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-banana': () => (
    <img src="/images/word-banana.png" alt="בננה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-mamtak': () => (
    <img src="/images/word-mamtak.png" alt="ממתק" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-avatiach': () => (
    <img src="/images/word-avatiach.png" alt="אבטיח" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
  // Tet (ט) words
  'word-telephone': () => (
    <img src="/images/word-telephone.png" alt="טלפון" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tabaat': () => (
    <img src="/images/word-tabaat.png" alt="טבעת" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tayas': () => (
    <img src="/images/word-tayas.png" alt="טייס" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tavos': () => (
    <img src="/images/word-tavos.png" alt="טווס" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tigris': () => (
    <img src="/images/word-tigris.png" alt="טיגריס" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-traktor': () => (
    <img src="/images/word-traktor.png" alt="טרקטור" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Yod (י) words
  'word-yadayim': () => (
    <img src="/images/word-yadayim.png" alt="ידיים" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yareach': () => (
    <img src="/images/word-yareach.png" alt="ירח" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yahalom': () => (
    <img src="/images/word-yahalom.png" alt="יהלום" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yoga': () => (
    <img src="/images/word-yoga.png" alt="יוגה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yom-huledet': () => (
    <img src="/images/word-yom-huledet.png" alt="יום-הולדת" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-yayin': () => (
    <img src="/images/word-yayin.png" alt="יין" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter כ words
  'word-kadur': () => (
    <img src="/images/word-kadur.png" alt="כדור" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kochav': () => (
    <img src="/images/word-kochav.png" alt="כוכב" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kova': () => (
    <img src="/images/word-kova.png" alt="כובע" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ל words
  'word-lev': () => (
    <img src="/images/word-lev.png" alt="לב" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-limon': () => (
    <img src="/images/word-limon.png" alt="לימון" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-lechem': () => (
    <img src="/images/word-lechem.png" alt="לחם" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-leitzan': () => (
    <img src="/images/word-leitzan.png" alt="ליצן" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter מ words
  'word-melafafon': () => (
    <img src="/images/word-melafafon.png" alt="מלפפון" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-marak': () => (
    <img src="/images/word-marak.png" alt="מרק" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-madregot': () => (
    <img src="/images/word-madregot.png" alt="מדרגות" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-milky': () => (
    <img src="/images/word-milky.png" alt="מילקי" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-mazleg': () => (
    <img src="/images/word-mazleg.png" alt="מזלג" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter נ words
  'word-ner': () => (
    <img src="/images/word-ner.png" alt="נר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-nachash': () => (
    <img src="/images/word-nachash.png" alt="נחש" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-naal': () => (
    <img src="/images/word-naal.png" alt="נעל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-namer': () => (
    <img src="/images/word-namer.png" alt="נמר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-notza': () => (
    <img src="/images/word-notza.png" alt="נוצה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-nemala': () => (
    <img src="/images/word-nemala.png" alt="נמלה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ס words
  'word-sus': () => (
    <img src="/images/word-sus.png" alt="סוס" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-sefer': () => (
    <img src="/images/word-sefer.png" alt="ספר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-sabon': () => (
    <img src="/images/word-sabon.png" alt="סבון" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-sira': () => (
    <img src="/images/word-sira.png" alt="סירה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-salat': () => (
    <img src="/images/word-salat.png" alt="סלט" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-sandal': () => (
    <img src="/images/word-sandal.png" alt="סנדל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ע words
  'word-etz': () => (
    <img src="/images/word-etz.png" alt="עץ" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-ayin-eye': () => (
    <img src="/images/word-ayin-eye.png" alt="עין" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-uga': () => (
    <img src="/images/word-uga.png" alt="עוגה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-et': () => (
    <img src="/images/word-et.png" alt="עט" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-achbar': () => (
    <img src="/images/word-achbar.png" alt="עכבר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-akavish': () => (
    <img src="/images/word-akavish.png" alt="עכביש" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter פ words
  'word-pita': () => (
    <img src="/images/word-pita.png" alt="פיתה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-pil': () => (
    <img src="/images/word-pil.png" alt="פיל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-pilpel': () => (
    <img src="/images/word-pilpel.png" alt="פילפל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-para': () => (
    <img src="/images/word-para.png" alt="פרה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-pergola': () => (
    <img src="/images/word-pergola.png" alt="פרגולה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-parpar': () => (
    <img src="/images/word-parpar.png" alt="פרפר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter צ words
  'word-tsipor': () => (
    <img src="/images/word-tsipor.png" alt="ציפור" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tsfardea': () => (
    <img src="/images/word-tsfardea.png" alt="צפרדע" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tsvayim': () => (
    <img src="/images/word-tsvayim.png" alt="צבעים" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tsdafa': () => (
    <img src="/images/word-tsdafa.png" alt="צדפה" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tschok': () => (
    <img src="/images/word-tschok.png" alt="צחוק" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tsantsenet': () => (
    <img src="/images/word-tsantsenet.png" alt="צנצנת" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ק words
  'word-kidush': () => (
    <img src="/images/word-kidush.png" alt="קידוש" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-kanguru': () => (
    <img src="/images/word-kanguru.png" alt="קנגרו" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ר words
  'word-raashan': () => (
    <img src="/images/word-raashan.png" alt="רעשן" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-regel': () => (
    <img src="/images/word-regel.png" alt="רגל" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-rofe': () => (
    <img src="/images/word-rofe.png" alt="רופא" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-rakevet': () => (
    <img src="/images/word-rakevet.png" alt="רכבת" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-reshet': () => (
    <img src="/images/word-reshet.png" alt="רשת" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-rakdanit': () => (
    <img src="/images/word-rakdanit.png" alt="רקדנית" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ש words
  'word-shachor': () => (
    <img src="/images/word-shachor.png" alt="שחור" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-sheva': () => (
    <img src="/images/word-sheva.png" alt="שבע" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-shablul': () => (
    <img src="/images/word-shablul.png" alt="שבלול" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-shulchan': () => (
    <img src="/images/word-shulchan.png" alt="שולחן" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-shofar': () => (
    <img src="/images/word-shofar.png" alt="שופר" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-shalosh': () => (
    <img src="/images/word-shalosh.png" alt="שלוש" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  // Letter ת words
  'word-tinok': () => (
    <img src="/images/word-tinok.png" alt="תינוק" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tik': () => (
    <img src="/images/word-tik.png" alt="תיק" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tut': () => (
    <img src="/images/word-tut.png" alt="תות" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tarnegol': () => (
    <img src="/images/word-tarnegol.png" alt="תרנגול" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
  'word-tesha': () => (
    <img src="/images/word-tesha.png" alt="תשע" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ),
};

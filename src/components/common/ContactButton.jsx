import { useState } from 'react';
import styles from './ContactButton.module.css';

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.floatingButton}
        onClick={() => setIsOpen(true)}
        aria-label="צרו קשר"
        title="צרו קשר"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.headerEmoji}>👨‍👩‍👧</span>
              <h2 className={styles.title}>הודעה להורים</h2>
            </div>

            <p className={styles.message}>
              נשמח לשמוע מכם! אם יש לכם רעיונות לשיפור, משוב, דיווח על בעיה, או כל שאלה — אנחנו כאן.
              <br />
              צרו איתנו קשר באחת הדרכים הבאות:
            </p>

            <div className={styles.contactMethods}>
              <a
                href="https://t.me/ori_br"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.telegramButton}
              >
                <svg className={styles.telegramIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                שלחו הודעה בטלגרם
              </a>

              <a
                href="mailto:brook.ori@gmail.com"
                className={styles.emailButton}
              >
                <svg className={styles.emailIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                brook.ori@gmail.com
              </a>
            </div>

            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              סגור ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactButton;

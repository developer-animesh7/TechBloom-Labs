import { useEffect, useRef } from 'react';
import { CONTACT_EMAIL } from '../../data/company.js';

/**
 * Premium centered submission status modal for TechBloom Labs.
 * Supports:
 * 1. Career-specific application success ('Internship' or 'Job') with resume email instructions.
 * 2. General inquiry success.
 * 3. Error state with retry option.
 *
 * Accessible focus management, keyboard Escape listener, subtle animated SVG status ring,
 * and dark-glass TechBloom aesthetic.
 */
export default function SubmissionStatusModal({
  isOpen,
  status = 'success',
  isCareerApplication = false,
  title,
  message,
  onClose,
  onRetry
}) {
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current = document.activeElement;
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
      if (previouslyFocusedRef.current && typeof previouslyFocusedRef.current.focus === 'function') {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSuccess = status === 'success';
  const heading =
    title ||
    (isSuccess
      ? isCareerApplication
        ? 'Application Received'
        : 'Message Sent Successfully'
      : 'Message Could Not Be Sent');

  return (
    <div
      className="submission-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        className={`submission-modal-box submission-modal-box--${status}${
          isCareerApplication ? ' submission-modal-box--career' : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="submission-modal-title"
        aria-describedby="submission-modal-desc"
      >
        <button
          type="button"
          className="submission-modal-close-icon"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="submission-modal-content">
          <div
            className={`submission-modal-icon-wrap submission-modal-icon-wrap--${status}`}
            aria-hidden="true"
          >
            {isSuccess ? (
              <svg
                className="submission-modal-svg submission-modal-svg--success"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle
                  className="submission-modal-ring"
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#0C7A5E"
                  strokeWidth="2.5"
                />
                <circle
                  className="submission-modal-glow-ring"
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#3ED0A2"
                  strokeWidth="2.5"
                />
                <path
                  className="submission-modal-checkmark"
                  d="M19 33.5L28 42.5L45 22.5"
                  stroke="#3ED0A2"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="submission-modal-svg submission-modal-svg--error"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle
                  className="submission-modal-ring-error"
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#C93B2B"
                  strokeWidth="2.5"
                />
                <path
                  className="submission-modal-cross"
                  d="M23 23L41 41M41 23L23 41"
                  stroke="#FF6B6B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          <h2 className="submission-modal-title" id="submission-modal-title">
            {heading}
          </h2>

          {isSuccess && isCareerApplication ? (
            <div className="submission-modal-career-wrap">
              <p className="submission-modal-desc" id="submission-modal-desc">
                Thank you for your interest in joining TechBloom Labs.
              </p>
              <div className="submission-modal-career-note">
                <p className="submission-modal-career-lead">
                  For Internship and Job applications, please send your latest resume/CV to:
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="submission-modal-career-email"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="submission-modal-career-sub">
                  Please send your latest resume/CV to {CONTACT_EMAIL} to complete your application. Your application will be reviewed after the required resume is received.
                </p>
              </div>
            </div>
          ) : (
            <p className="submission-modal-desc" id="submission-modal-desc">
              {message ||
                (isSuccess
                  ? 'Thank you for contacting TechBloom Labs. Your message has been received.'
                  : 'Something went wrong while sending your message. Please try again.')}
            </p>
          )}

          <div className="submission-modal-actions">
            {isSuccess && isCareerApplication ? (
              <>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="btn btn--primary submission-modal-btn submission-modal-btn--email"
                >
                  Email Your Resume &rarr;
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="btn btn--secondary submission-modal-btn"
                  onClick={onClose}
                >
                  Close
                </button>
              </>
            ) : !isSuccess && onRetry ? (
              <>
                <button
                  type="button"
                  className="btn btn--secondary submission-modal-btn"
                  onClick={() => {
                    onClose();
                    onRetry();
                  }}
                >
                  Try Again
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="btn btn--primary submission-modal-btn"
                  onClick={onClose}
                >
                  Close
                </button>
              </>
            ) : (
              <button
                ref={closeButtonRef}
                type="button"
                className="btn btn--primary submission-modal-btn"
                onClick={onClose}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

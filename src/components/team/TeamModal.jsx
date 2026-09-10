import { useEffect } from 'react';
import ArrowIcon from '../common/ArrowIcon.jsx';

/**
 * Accessible detail modal for Our Team profiles.
 * Strictly presents only verified, approved data from the data layer.
 * Does not invent biographies, affiliations, or unverified claims.
 */
export default function TeamModal({ person, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!person) return null;

  const profileLink = person.profileUrl || person.linkedin;
  const linkText = person.profileUrl ? 'View Research Profile' : 'View LinkedIn Profile';

  return (
    <div
      className="team-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-name"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="team-modal-box">
        <button
          type="button"
          className="team-modal-close"
          onClick={onClose}
          aria-label="Close profile details"
        >
          ×
        </button>

        <span className="team-modal-tag">{person.category || 'Team Profile'}</span>
        <h3 className="team-modal-name" id="team-modal-name">{person.name}</h3>
        
        <p className="team-modal-sub">
          {person.role}
          {person.affiliation && person.affiliation !== person.role ? ` · ${person.affiliation}` : ''}
        </p>

        {person.summary && (
          <p className="team-modal-bio">{person.summary}</p>
        )}

        {person.domain && (
          <p className="team-modal-domain">
            <strong>Domain Focus:</strong> {person.domain}
          </p>
        )}

        {person.chips && person.chips.length > 0 && (
          <div className="team-modal-chips">
            {person.chips.map((chip, idx) => (
              <span key={idx} className="chip chip--sm">{chip}</span>
            ))}
          </div>
        )}

        {profileLink && (
          <div className="team-modal-action">
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
            >
              <span>{linkText}</span>
              <ArrowIcon size={12} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

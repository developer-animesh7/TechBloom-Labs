import ArrowIcon from '../common/ArrowIcon.jsx';

/**
 * Clean typographic execution card for core Engineering Team members.
 * Strictly presents verified title, domain focus, and verified LinkedIn URL.
 * Does not generate artificial portraits.
 */
export default function EngineerCard({ engineer, onSelect }) {
  return (
    <div
      className="team-engineer-card"
      onClick={() => onSelect(engineer)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(engineer);
        }
      }}
      aria-label={`View details for ${engineer.name}`}
    >
      <div className="team-engineer-card__header">
        <span className="team-engineer-card__num">{engineer.num}</span>
        <span className="team-engineer-card__initials">{engineer.initials}</span>
      </div>

      <div className="team-engineer-card__content">
        <h4 className="team-engineer-card__name">{engineer.name}</h4>
        <p className="team-engineer-card__role">{engineer.role}</p>
        {engineer.domain && (
          <span className="team-engineer-card__domain">{engineer.domain}</span>
        )}
      </div>

      {engineer.linkedin && (
        <div className="team-engineer-card__foot">
          <a
            href={engineer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-engineer-card__link"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${engineer.name} LinkedIn Profile (opens in a new tab)`}
          >
            <span>LinkedIn Profile</span>
            <ArrowIcon size={12} />
          </a>
        </div>
      )}
    </div>
  );
}

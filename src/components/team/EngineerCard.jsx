import ArrowIcon from '../common/ArrowIcon.jsx';

/**
 * Uniform card component for Leadership & Engineering Team members.
 * Renders portrait image when provided (Bhabani, Sreyan, Tanisha),
 * or reflows cleanly as a compact text-led card when no photo is set (Animesh, Amitava, Soumosish).
 */
export default function EngineerCard({ engineer, onSelect }) {
  const slug = (engineer.name || '').toLowerCase().includes('bhabani')
    ? 'bhabani'
    : (engineer.name || '').toLowerCase().includes('sreyan')
      ? 'sreyan'
      : (engineer.name || '').toLowerCase().includes('tanisha')
        ? 'tanisha'
        : 'text-card';

  const hasPhoto = Boolean(engineer.portrait);

  return (
    <article
      className={`team-engineer-card team-engineer-card--${slug} ${!hasPhoto ? 'team-engineer-card--text-only' : ''}`}
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
      {hasPhoto && (
        <div className="team-engineer-card__media">
          <img
            src={engineer.portrait}
            alt={engineer.portraitAlt || `${engineer.name}, ${engineer.role}`}
            className={`team-engineer-card__img team-engineer-card__img--${slug}`}
            loading="eager"
            decoding="sync"
          />
        </div>
      )}

      <div className="team-engineer-card__content">
        <div className="team-engineer-card__meta">
          <span className="team-engineer-card__num">{engineer.num}</span>
          <span className="badge badge--sm">Head</span>
        </div>
        <h4 className="team-engineer-card__name">{engineer.name}</h4>
        <p className="team-engineer-card__role">{engineer.role}</p>
        {engineer.domain && (
          <span className="team-engineer-card__domain">{engineer.domain}</span>
        )}
      </div>

      {engineer.linkedin ? (
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
      ) : (
        <div className="team-engineer-card__foot team-engineer-card__foot--empty" aria-hidden="true" />
      )}
    </article>
  );
}

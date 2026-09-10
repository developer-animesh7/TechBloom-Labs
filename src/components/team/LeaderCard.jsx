/**
 * Compact editorial leadership card.
 * Standardized executive presentation with uniform dimensions,
 * controlled image container, and wrapped role badge.
 */
export default function LeaderCard({ leader, index, onSelect }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className="team-leadership-card"
      onClick={() => onSelect(leader)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(leader);
        }
      }}
      aria-label={`View details for ${leader.name}`}
    >
      <div className="team-leadership-card__media">
        <img
          src={leader.portrait}
          alt={leader.portraitAlt || `${leader.name}, ${leader.role} at TechBloom Labs`}
          className={`team-leadership-card__img team-leadership-card__img--${index}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="team-leadership-card__body">
        <div className="team-leadership-card__meta">
          <span className="team-leadership-card__index">{num}</span>
          <span className="team-leadership-card__tag">Leadership</span>
        </div>

        <h3 className="team-leadership-card__name">{leader.name}</h3>

        <div className="team-leadership-card__role-wrap">
          <div className="team-leadership-card__role-badge">
            <span className="team-leadership-card__role-dot" aria-hidden="true">●</span>
            <span className="team-leadership-card__role-text">{leader.role}</span>
          </div>
        </div>
      </div>
    </article>
  );
}


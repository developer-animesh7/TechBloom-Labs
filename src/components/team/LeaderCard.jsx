/**
 * Compact editorial leadership card.
 * Clean, structured presentation of executive leadership.
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
      <div className="team-leadership-card__top">
        <span className="team-leadership-card__index">{num}</span>
        <span className="badge badge--open">{leader.role}</span>
      </div>

      <div className="team-leadership-card__media">
        <img
          src={leader.portrait}
          alt={leader.portraitAlt || `${leader.name}, ${leader.role} at TechBloom Labs`}
          className="team-leadership-card__img"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="team-leadership-card__body">
        <h3 className="team-leadership-card__name">{leader.name}</h3>
        {leader.summary && (
          <p className="team-leadership-card__summary">{leader.summary}</p>
        )}
        {leader.chips && leader.chips.length > 0 && (
          <div className="team-leadership-card__chips">
            {leader.chips.map((chip, idx) => (
              <span key={idx} className="chip chip--sm">{chip}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

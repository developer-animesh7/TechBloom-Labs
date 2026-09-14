/**
 * Visual profile card for Top World-Class Mentors.
 * Displays portrait, name, role/affiliation, and location.
 * NO LinkedIn profile links or buttons are rendered.
 */
export default function MentorCard({ mentor, onSelect }) {
  // Mandatory safeguard: Strip academic/professional prefixes from displayed name
  const cleanName = (mentor.name || '')
    .replace(/^(prof\.|dr\.|prof\s+dr\.|professor)\s+/i, '')
    .trim();

  // Combine affiliation and role cleanly if both exist and differ (e.g., PurplleCow · CEO)
  const roleText = mentor.affiliation && mentor.affiliation !== mentor.role
    ? `${mentor.affiliation} · ${mentor.role}`
    : mentor.role;

  return (
    <article
      className="team-mentor-card"
      onClick={() => onSelect(mentor)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(mentor);
        }
      }}
      aria-label={`View details for mentor ${cleanName}`}
    >
      <div className="team-mentor-card__media">
        <img
          src={mentor.portrait}
          alt={mentor.portraitAlt || `${cleanName}, Mentor at TechBloom Labs`}
          className={`team-mentor-card__img team-mentor-card__img--${mentor.id.toLowerCase()}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="team-mentor-card__info">
        <div className="team-mentor-card__meta">
          <span className="team-mentor-card__index">{mentor.num}</span>
          <span className="badge badge--sm">Mentor</span>
          {mentor.location ? (
            <span className="team-mentor-card__location">{mentor.location}</span>
          ) : null}
        </div>

        <h3 className="team-mentor-card__name">{cleanName}</h3>
        <p className="team-mentor-card__role">{roleText}</p>
      </div>
    </article>
  );
}

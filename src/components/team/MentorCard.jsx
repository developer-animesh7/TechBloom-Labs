/**
 * Visual profile card for Top World-Class Mentors.
 * Displays portrait, name, role/affiliation, and location.
 * NO LinkedIn profile links or buttons are rendered.
 */
export default function MentorCard({ mentor, onSelect }) {
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
      aria-label={`View details for mentor ${mentor.name}`}
    >
      <div className="team-mentor-card__media">
        <img
          src={mentor.portrait}
          alt={mentor.portraitAlt || `${mentor.name}, Mentor at TechBloom Labs`}
          className={`team-mentor-card__img team-mentor-card__img--${mentor.id.toLowerCase()}`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="team-mentor-card__info">
        <div className="team-mentor-card__meta">
          <span className="team-mentor-card__index">{mentor.num}</span>
          <span className="badge badge--sm">Mentor</span>
          {mentor.location && (
            <span className="team-mentor-card__location">{mentor.location}</span>
          )}
        </div>

        <h3 className="team-mentor-card__name">{mentor.name}</h3>
        <p className="team-mentor-card__role">{mentor.role}</p>
        
        {mentor.affiliation && mentor.affiliation !== mentor.role && (
          <p className="team-mentor-card__aff">{mentor.affiliation}</p>
        )}
      </div>
    </article>
  );
}

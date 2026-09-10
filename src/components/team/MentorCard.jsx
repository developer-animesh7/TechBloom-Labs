import ArrowIcon from '../common/ArrowIcon.jsx';

/**
 * Large visual profile card for Top World-Class Mentors.
 * Incorporates high-impact portrait area, role/affiliation typography,
 * hover elevation and profile interaction.
 */
export default function MentorCard({ mentor, onSelect }) {
  const profileLink = mentor.profileUrl || mentor.linkedin;
  const linkText = mentor.profileUrl ? 'Profile' : 'LinkedIn';

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
        {mentor.portrait ? (
          <img
            src={mentor.portrait}
            alt={mentor.portraitAlt || `${mentor.name}, Mentor at TechBloom Labs`}
            className="team-mentor-card__img"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="team-mentor-card__placeholder" aria-hidden="true">
            <span className="team-mentor-card__initials">
              {mentor.initials || mentor.name.split(' ').map(n => n[0]).join('')}
            </span>
            <span className="team-mentor-card__placeholder-label">Advisory Mentor</span>
          </div>
        )}
      </div>

      <div className="team-mentor-card__info">
        <div className="team-mentor-card__meta">
          <span className="team-mentor-card__index">{mentor.num}</span>
          <span className="badge badge--sm">Mentor</span>
        </div>

        <h3 className="team-mentor-card__name">{mentor.name}</h3>
        <p className="team-mentor-card__role">{mentor.role}</p>
        
        {mentor.affiliation && mentor.affiliation !== mentor.role && (
          <p className="team-mentor-card__aff">{mentor.affiliation}</p>
        )}

        <div className="team-mentor-card__foot">
          {profileLink ? (
            <a
              href={profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="team-mentor-card__link"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${mentor.name} ${linkText} (opens in a new tab)`}
            >
              <span>{linkText}</span>
              <ArrowIcon size={12} />
            </a>
          ) : (
            <span className="team-mentor-card__link team-mentor-card__link--static">
              <span>{mentor.affiliation || 'Industry Advisory'}</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

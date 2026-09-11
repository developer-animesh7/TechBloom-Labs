import { Link } from 'react-router-dom';
import ArrowIcon from '../common/ArrowIcon.jsx';
import Reveal from '../common/Reveal.jsx';
import { getCategory } from '../../data/projects.js';

/**
 * Compact horizontal editorial project card.
 * Designed for quick scanning: small visual, clear title, short summary,
 * technology metadata, and subtle CTA leading to /projects/:slug.
 */
export default function ProjectCard({ project, to, delay = 0 }) {
  const category = getCategory(project.category);
  const destination = to || `/projects/${project.id}`;

  // Technology / category metadata
  const techString = project.stack && project.stack.length > 0
    ? project.stack.slice(0, 3).join(' · ')
    : category?.name || 'Technology';

  return (
    <Reveal as="li" className="project-item" delay={delay}>
      <Link
        to={destination}
        className="project-item__link"
        aria-label={`View product details for ${project.title}`}
      >
        <div className="project-item__media">
          {project.image ? (
            <img
              src={project.image}
              alt={project.alt || `${project.title} visualization`}
              className="project-item__img"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className="project-item__plate"
              style={{ '--plate-accent': category?.accent || 'var(--accent)' }}
              aria-hidden="true"
            >
              <span className="project-item__plate-tag">{category?.short || 'Platform'}</span>
            </div>
          )}
        </div>

        <div className="project-item__content">
          <div className="project-item__top">
            <h3 className="project-item__title">{project.title}</h3>
            <span className="project-item__badge">{category?.short || category?.name}</span>
          </div>

          <p className="project-item__summary">{project.summary}</p>

          <div className="project-item__footer">
            <span className="project-item__tech">{techString}</span>
            <span className="project-item__cta">
              <span>View Product</span>
              <ArrowIcon size={13} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

import { Link } from 'react-router-dom';
import ArrowIcon from '../common/ArrowIcon.jsx';
import Reveal from '../common/Reveal.jsx';
import { getCategory } from '../../data/projects.js';

const STATUS_LABEL = {
  open: 'Open for students',
  review: 'In review',
  active: 'Under way'
};

const STATUS_TONE = {
  open: 'badge--open',
  review: 'badge--review',
  active: 'badge--live'
};

/**
 * Project card with support for direct URL navigation or modal callback.
 */
export default function ProjectCard({ project, layout = 'standard', onOpen, to, delay = 0 }) {
  const category = getCategory(project.category);
  const destination = to || `/projects/${project.id}`;

  const content = (
    <>
      {project.image ? (
        <span className="pcard__media media media--16x9">
          <img src={project.image} alt={project.alt || ''} loading="lazy" decoding="async" />
        </span>
      ) : (
        <span
          className="pcard__plate"
          style={{ '--plate-accent': category?.accent }}
          aria-hidden="true"
        >
          <span className="pcard__plate-num t-num">{project.number}</span>
        </span>
      )}

      <span className="pcard__body">
        <span className="pcard__top">
          <span className="tag" style={{ '--tag-color': category?.accent }}>
            {category?.short}
          </span>
          <span className="pcard__num t-mono">{project.number}</span>
        </span>

        <span className="pcard__title t-h3">{project.title}</span>
        <span className="pcard__summary t-body">{project.summary}</span>

        <span className="pcard__reveal">
          <span className="pcard__meta">
            <span className="t-label">{project.duration}</span>
            <span className="t-label">{project.mode}</span>
            {project.stack?.length ? (
              <span className="t-label">{project.stack.slice(0, 3).join(' · ')}</span>
            ) : null}
          </span>
        </span>

        <span className="pcard__foot">
          <span className={`badge ${STATUS_TONE[project.status] || ''}`}>
            {STATUS_LABEL[project.status] || project.status}
          </span>
          <span className="pcard__cta link">
            View project
            <ArrowIcon size={16} shift={false} />
          </span>
        </span>
      </span>
    </>
  );

  return (
    <Reveal as="li" className={`pcard pcard--${layout}`} delay={delay}>
      {onOpen ? (
        <button
          type="button"
          className="pcard__hit"
          onClick={() => onOpen(project)}
          aria-label={`Open details for ${project.title}`}
        >
          {content}
        </button>
      ) : (
        <Link to={destination} className="pcard__hit" aria-label={`View project details for ${project.title}`}>
          {content}
        </Link>
      )}
    </Reveal>
  );
}

import Button from '../common/Button.jsx';
import { Check, Info } from '../../assets/icons/index.jsx';
import { getCategory } from '../../data/projects.js';

/**
 * Project detail shown inside the modal. Reads as a brief, not a product page:
 * what it is, what it covers, what it is built with, and how to ask about it.
 */
export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  const category = getCategory(project.category);

  return (
    <>
      {project.image ? (
        <div className="modal__media">
          <img src={project.image} alt={project.alt || ''} loading="lazy" decoding="async" />
        </div>
      ) : null}

      <div className="pdetail">
        <div className="pdetail__lead">
          <span className="tag" style={{ '--tag-color': category?.accent }}>
            {category?.name}
          </span>
          <p className="t-lead">{project.summary}</p>
        </div>

        <div className="pdetail__grid">
          <div>
            <h3 className="t-label">Scope</h3>
            <ul className="ticks">
              {project.scope?.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="speclist">
            <div className="speclist__row">
              <dt>Duration</dt>
              <dd>{project.duration}</dd>
            </div>
            <div className="speclist__row">
              <dt>Mode</dt>
              <dd>{project.mode}</dd>
            </div>
            <div className="speclist__row">
              <dt>Mentorship</dt>
              <dd>{project.mentorship}</dd>
            </div>
            {project.stack?.length ? (
              <div className="speclist__row">
                <dt>Technology</dt>
                <dd>{project.stack.join(', ')}</dd>
              </div>
            ) : null}
            <div className="speclist__row">
              <dt>Domain</dt>
              <dd>{category?.name}</dd>
            </div>
          </dl>
        </div>

        {project.note ? (
          <p className="note">
            <Info size={18} />
            <span>{project.note}</span>
          </p>
        ) : null}

        <p className="t-xs">
          Project concept offered through TechBloom Labs. Scope is agreed with the assigned mentor before
          work begins.
        </p>

        <div className="actions">
          <Button
            to={`/contact?intent=research-project&project=${encodeURIComponent(project.title)}`}
            arrow
            onClick={onClose}
          >
            Enquire about this project
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Back to projects
          </Button>
        </div>
      </div>
    </>
  );
}

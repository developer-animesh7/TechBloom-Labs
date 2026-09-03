import Reveal from '../common/Reveal.jsx';
import { Mentor } from '../../assets/icons/index.jsx';
import { getCategory } from '../../data/projects.js';

/**
 * One expert entry. Displays structural reference codes and domain focus
 * from existing project data without inventing identities.
 */
export default function FacultyCard({ person, delay = 0 }) {
  const category = getCategory(person.category);
  const verified = Boolean(person.name);

  return (
    <Reveal as="li" className="fcard" delay={delay}>
      <div className="fcard__head">
        <span className="monogram" aria-hidden="true">
          {person.ref.replace(/^[FE]-/, '')}
        </span>
        <div>
          <p className="t-label">{person.ref}</p>
          <h3 className="fcard__name t-h4">{verified ? person.name : 'Profile pending verification'}</h3>
        </div>
      </div>

      <dl className="fcard__spec">
        <div>
          <dt className="t-label">Field</dt>
          <dd>
            <span className="tag" style={{ '--tag-color': category?.accent }}>
              {person.field}
            </span>
          </dd>
        </div>
        <div>
          <dt className="t-label">Research area</dt>
          <dd className="t-sm">{person.research}</dd>
        </div>
        <div>
          <dt className="t-label">Institution</dt>
          <dd className="t-sm">{person.institution || 'Published after verification'}</dd>
        </div>
      </dl>

      <ul className="fcard__tags">
        {person.expertise.map((item) => (
          <li key={item} className="chip chip--static">
            {item}
          </li>
        ))}
      </ul>

      <footer className="fcard__foot">
        <span className="t-xs">
          {person.projects} active {person.projects === 1 ? 'project' : 'projects'}
        </span>
        {person.mentoring ? (
          <span className="badge badge--open">
            <Mentor size={14} /> Mentorship Open
          </span>
        ) : (
          <span className="badge">Project Guidance</span>
        )}
      </footer>
    </Reveal>
  );
}

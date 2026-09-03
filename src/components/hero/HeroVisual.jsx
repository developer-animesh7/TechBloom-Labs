import { Badge, Document, Mentor } from '../../assets/icons/index.jsx';
import { projectDomainCount } from '../../data/projects.js';

/**
 * Hero visual: an art-directed pathway composition with two overlaid data
 * panels. Layered rather than a single flat banner image.
 */
export default function HeroVisual() {
  return (
    <div className="hero__visual">
      <figure className="hero__frame">
        <img
          src="/images/hero/hero-main.svg"
          alt="Pathway map showing a student connecting to mentors, faculty, labs, projects, an internship and a career outcome"
          width="960"
          height="1120"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </figure>

      <div className="hero__panel hero__panel--top">
        <p className="t-label">Live opportunity</p>
        <p className="t-h4">Research project intake is open</p>
        <ul className="hero__panel-meta">
          <li>
            <Mentor size={16} /> Faculty mentorship
          </li>
          <li>
            <Badge size={16} /> Certificate on completion
          </li>
        </ul>
      </div>

      <div className="hero__panel hero__panel--bottom">
        <div className="metric">
          <span className="metric__value">{projectDomainCount}</span>
          <span className="metric__label">Project domains</span>
        </div>
        <p className="t-xs">
          <Document size={15} /> Agriculture, livestock genetics, pharma, healthcare, infrastructure,
          AI, data, security, biotech and software.
        </p>
      </div>
    </div>
  );
}

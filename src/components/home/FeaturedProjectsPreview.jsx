import { Link } from 'react-router-dom';
import Section from '../layout/Section.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Reveal from '../common/Reveal.jsx';
import Button from '../common/Button.jsx';
import ArrowIcon from '../common/ArrowIcon.jsx';
import { projects } from '../../data/projects.js';

/**
 * Compact Featured Projects Preview for the homepage.
 * Strictly 3 compact, stylish, editorial cards with direct navigation to /projects/:slug.
 */
export default function FeaturedProjectsPreview() {
  // Select 3 diverse, real projects from existing data
  const featured = projects.slice(0, 3);

  return (
    <Section tone="paper" size="lg" ruled labelledBy="featured-projects-title">
      <PageContainer>
        <SectionHeading
          number="04"
          eyebrow="Selected Projects"
          id="featured-projects-title"
          title="Engineered for Real-World Impact"
          lead="Explore active software frameworks and domain systems. High-reliability technology architectures engineered for scalability and practical deployment."
          aside={
            <Button to="/projects" arrow>
              View All Projects
            </Button>
          }
        />

        <div className="compact-projects-grid" style={{ marginTop: 'var(--s-5)' }}>
          {featured.map((project, idx) => (
            <Reveal key={project.id} className="compact-project-card" delay={idx * 80}>
              <div className="compact-project-card__top">
                <span className="compact-project-card__domain">{project.domain}</span>
                <span className="compact-project-card__mode t-xs">{project.mode}</span>
              </div>

              <h3 className="compact-project-card__title t-h4">
                <Link to={`/projects/${project.id}`} className="compact-project-card__link">
                  {project.title}
                </Link>
              </h3>

              <p className="compact-project-card__blurb t-sm">{project.blurb}</p>

              <div className="compact-project-card__footer">
                <Link to={`/projects/${project.id}`} className="link link--subtle">
                  <span>Explore Project</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--s-6)' }}>
          <Button to="/projects" variant="primary" arrow>
            View All Projects
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
}

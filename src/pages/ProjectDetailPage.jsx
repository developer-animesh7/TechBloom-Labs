import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import { getProject, getCategory } from '../data/projects.js';
import { companyName } from '../data/company.js';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title}: ${companyName}`;
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const category = getCategory(project.category);

  // Map project category to contact interest
  const categoryToInterest = {
    'ai-ml': 'technology-project',
    agriculture: 'agriculture-project',
    livestock: 'research-project',
    pharma: 'pharmaceutical-project',
    healthcare: 'healthcare-project',
    infrastructure: 'infrastructure-project',
    cybersecurity: 'technology-project',
    biotech: 'research-project',
    'data-science': 'technology-project',
    software: 'software-development'
  };

  const contactInterest = categoryToInterest[project.category] || 'technology-project';

  return (
    <article className="project-detail-page">
      {/* 1. Header: Project Eyebrow, Title, Short Introduction */}
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <div style={{ marginBottom: 'var(--s-4)' }}>
            <Link to="/projects" className="link link--back">
              ← Back to Our Products
            </Link>
          </div>

          <div className="cluster" style={{ marginBottom: 'var(--s-2)', alignItems: 'center', gap: '10px' }}>
            <span className="tag" style={{ '--tag-color': category?.accent }}>
              {category?.name || project.category}
            </span>
            <span className="badge badge--open">Active Platform</span>
            <span className="badge badge--sm">{project.duration}</span>
          </div>

          <Reveal as="h1" className="t-h1 page-head__title">
            {project.title}
          </Reveal>

          <Reveal as="p" className="t-lead" delay={80}>
            {project.summary}
          </Reveal>
        </PageContainer>
      </Section>

      {/* 2. Structured Project Depth: Overview, Challenge, Solution, Tech, Impact */}
      <Section tone="paper" size="lg" ruled>
        <PageContainer>
          {project.image && (
            <Reveal className="project-detail__media" delay={100}>
              <img
                src={project.image}
                alt={project.alt || `${project.title} system visual`}
                loading="eager"
                decoding="async"
              />
            </Reveal>
          )}

          <div className="project-detail__grid">
            <div className="project-detail__main">
              {/* SECTION: OVERVIEW */}
              <section className="project-detail__section" aria-labelledby="section-overview">
                <span className="t-label t-mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>01 / Overview</span>
                <h2 className="t-h3" id="section-overview" style={{ margin: '6px 0 var(--s-3)' }}>
                  Platform Overview
                </h2>
                <p className="t-body" style={{ color: 'var(--text-2)', lineHeight: 1.7 }}>
                  {project.summary} Engineered under TechBloom Labs domain practices, this initiative pairs technical rigor with scalable architectural design, delivering maintainable software systems and actionable domain telemetry.
                </p>

                <div className="project-detail__specs-bar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', padding: '18px', background: 'var(--paper-sunk)', borderRadius: 'var(--r-md)', border: '1px solid var(--line)', margin: 'var(--s-4) 0 var(--s-5)' }}>
                  <div>
                    <span className="t-xs t-mono" style={{ color: 'var(--text-3)', display: 'block', textTransform: 'uppercase' }}>Cycle</span>
                    <span className="t-body t-bold">{project.duration}</span>
                  </div>
                  <div>
                    <span className="t-xs t-mono" style={{ color: 'var(--text-3)', display: 'block', textTransform: 'uppercase' }}>Delivery Mode</span>
                    <span className="t-body t-bold">{project.mode}</span>
                  </div>
                  <div>
                    <span className="t-xs t-mono" style={{ color: 'var(--text-3)', display: 'block', textTransform: 'uppercase' }}>Advisory</span>
                    <span className="t-body t-bold">{project.mentorship || 'Technical Lead & Advisory'}</span>
                  </div>
                </div>
              </section>

              <Divider style={{ margin: 'var(--s-5) 0' }} />

              {/* SECTION: CHALLENGE */}
              <section className="project-detail__section" aria-labelledby="section-challenge">
                <span className="t-label t-mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>02 / Challenge</span>
                <h2 className="t-h3" id="section-challenge" style={{ margin: '6px 0 var(--s-3)' }}>
                  Domain Challenge & Problem Space
                </h2>
                <p className="t-body" style={{ color: 'var(--text-2)', lineHeight: 1.7 }}>
                  In {category?.name || 'this industry discipline'}, operational operations often suffer from fragmented record-keeping, disparate data silos, manual coordination bottlenecks, and unverified data integrity. This project addresses the critical demand for unified, reliable, and real-time operational workflows.
                </p>
              </section>

              <Divider style={{ margin: 'var(--s-5) 0' }} />

              {/* SECTION: SOLUTION */}
              <section className="project-detail__section" aria-labelledby="section-solution">
                <span className="t-label t-mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>03 / Solution</span>
                <h2 className="t-h3" id="section-solution" style={{ margin: '6px 0 var(--s-3)' }}>
                  Architectural Solution & Modules
                </h2>
                <p className="t-body" style={{ color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 'var(--s-3)' }}>
                  TechBloom Labs architects a modular, resilient platform structured around the following core operational capabilities:
                </p>
                <ul className="project-detail__scope-list">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="project-detail__scope-item">
                      <span className="project-detail__scope-num">{String(idx + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {project.note && (
                  <div className="callout" style={{ marginTop: 'var(--s-4)', padding: 'var(--s-4)', background: 'var(--paper-sunk)', borderRadius: 'var(--r-md)', borderLeft: '3px solid var(--accent)' }}>
                    <p className="t-sm">
                      <strong>Specification Note:</strong> {project.note}
                    </p>
                  </div>
                )}
              </section>

              <Divider style={{ margin: 'var(--s-5) 0' }} />

              {/* SECTION: IMPACT / OUTCOME */}
              <section className="project-detail__section" aria-labelledby="section-impact">
                <span className="t-label t-mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>04 / Impact</span>
                <h2 className="t-h3" id="section-impact" style={{ margin: '6px 0 var(--s-3)' }}>
                  Impact & Verified Outcome
                </h2>
                <p className="t-body" style={{ color: 'var(--text-2)', lineHeight: 1.7 }}>
                  Provides automated visibility across mission-critical workflows, standardized data governance across lifecycle records, and high-reliability platform execution ready for integration with enterprise environments.
                </p>
              </section>

              <div style={{ marginTop: 'var(--s-6)' }}>
                <Link to="/projects" className="link link--back">
                  ← Back to Our Products
                </Link>
              </div>
            </div>

            {/* SIDEBAR: TECHNOLOGIES & CONSULTATION ACTION */}
            <aside className="project-detail__sidebar">
              <div className="project-detail__card card">
                <h3 className="t-h4" style={{ marginBottom: 'var(--s-3)' }}>
                  Technology & Capabilities
                </h3>
                <div className="cluster cluster--sm" style={{ marginBottom: 'var(--s-4)' }}>
                  {project.stack?.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {category?.examples && (
                  <div style={{ marginBottom: 'var(--s-4)' }}>
                    <span className="t-xs t-mono" style={{ color: 'var(--text-3)', display: 'block', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Domain Competencies
                    </span>
                    <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                      {category.examples.slice(0, 4).map((ex) => (
                        <li key={ex}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <Divider style={{ margin: 'var(--s-4) 0' }} />

                <h3 className="t-h4" style={{ marginBottom: 'var(--s-2)' }}>
                  Initiate a Discussion
                </h3>
                <p className="t-sm" style={{ marginBottom: 'var(--s-4)', color: 'var(--ink-soft)' }}>
                  Connect directly with our engineering team to review system architecture, technical roadmaps, or custom deployment options.
                </p>

                <Button
                  to={`/contact?interest=${contactInterest}&project=${encodeURIComponent(project.title)}`}
                  variant="primary"
                  arrow
                  style={{ width: '100%' }}
                >
                  Discuss This Product
                </Button>
              </div>
            </aside>
          </div>
        </PageContainer>
      </Section>
    </article>
  );
}

import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import { getProject, getCategory, proposalSteps } from '../data/projects.js';
import { companyName } from '../data/company.js';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${companyName}`;
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
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <div style={{ marginBottom: 'var(--s-4)' }}>
            <Link to="/projects" className="link link--back">
              ← Back to All Projects
            </Link>
          </div>

          <div className="cluster" style={{ marginBottom: 'var(--s-2)', alignItems: 'center' }}>
            <span className="tag" style={{ '--tag-color': category?.accent }}>
              {category?.name || project.category}
            </span>
            <span className="t-mono t-sm">Project #{project.number}</span>
            <span className="badge badge--open">
              {project.status === 'open' ? 'Open for Participation' : project.status}
            </span>
          </div>

          <Reveal as="h1" className="t-h1 page-head__title">
            {project.title}
          </Reveal>

          <Reveal as="p" className="t-lead" delay={80}>
            {project.summary}
          </Reveal>

          <div className="project-detail__strip" style={{ marginTop: 'var(--s-5)' }}>
            <div className="project-detail__spec">
              <span className="t-label">Duration</span>
              <span className="t-body t-bold">{project.duration}</span>
            </div>
            <div className="project-detail__spec">
              <span className="t-label">Mode</span>
              <span className="t-body t-bold">{project.mode}</span>
            </div>
            <div className="project-detail__spec">
              <span className="t-label">Mentorship</span>
              <span className="t-body t-bold">{project.mentorship}</span>
            </div>
          </div>
        </PageContainer>
      </Section>

      <Section tone="paper" size="lg" ruled>
        <PageContainer>
          <div className="project-detail__grid">
            <div className="project-detail__main">
              <h2 className="t-h3" style={{ marginBottom: 'var(--s-4)' }}>
                Scope & Capabilities
              </h2>
              <ul className="project-detail__scope-list">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="project-detail__scope-item">
                    <span className="project-detail__scope-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {project.note && (
                <div className="callout" style={{ marginTop: 'var(--s-6)', padding: 'var(--s-4)', background: 'var(--sunk)', borderRadius: 'var(--r-md)', borderLeft: '3px solid var(--accent)' }}>
                  <p className="t-sm">
                    <strong>Note:</strong> {project.note}
                  </p>
                </div>
              )}

              <div style={{ marginTop: 'var(--s-7)' }}>
                <h3 className="t-h3" style={{ marginBottom: 'var(--s-4)' }}>
                  Project Lifecycle & Review Stages
                </h3>
                <div className="process-timeline">
                  {proposalSteps.slice(0, 4).map((step) => (
                    <div key={step.step} className="process-timeline__item">
                      <div className="process-timeline__badge">
                        <span>{step.step}</span>
                      </div>
                      <h4 className="t-h4">{step.title}</h4>
                      <p className="t-sm">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="project-detail__sidebar">
              <div className="project-detail__card card">
                <h3 className="t-h4" style={{ marginBottom: 'var(--s-3)' }}>
                  Technologies & Tools
                </h3>
                <div className="cluster cluster--sm" style={{ marginBottom: 'var(--s-5)' }}>
                  {project.stack?.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <Divider style={{ margin: 'var(--s-4) 0' }} />

                <h3 className="t-h4" style={{ marginBottom: 'var(--s-2)' }}>
                  Interested in Working on This?
                </h3>
                <p className="t-sm" style={{ marginBottom: 'var(--s-4)', color: 'var(--ink-soft)' }}>
                  Submit an expression of interest to join this project under assigned faculty mentorship.
                </p>

                <Button
                  to={`/contact?interest=${contactInterest}&project=${encodeURIComponent(project.title)}`}
                  variant="primary"
                  arrow
                  style={{ width: '100%' }}
                >
                  Discuss This Project
                </Button>
              </div>
            </aside>
          </div>
        </PageContainer>
      </Section>
    </article>
  );
}

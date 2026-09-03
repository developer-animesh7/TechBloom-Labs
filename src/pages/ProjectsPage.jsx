import { useState, useMemo, useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import CustomProject from '../components/projects/CustomProject.jsx';
import { projects, projectCategories } from '../data/projects.js';
import { companyName } from '../data/company.js';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI / ML' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'livestock', label: 'Animal Genetics' },
  { id: 'pharma', label: 'Pharmaceutical' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'biotech', label: 'Biotechnology' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'software', label: 'Software Development' }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = `Projects — ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            Research & Engineering Portfolio
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Project Concepts Across <em>Ten</em> Disciplines.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            These are active project concepts and architecture frameworks available through TechBloom Labs.
            Work directly with faculty researchers and domain advisors to build real-world systems.
          </Reveal>
        </PageContainer>
      </Section>

      <Section tone="paper" size="lg" ruled labelledBy="projects-archive-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Project Discovery"
            id="projects-archive-title"
            title="Explore Real-World Concepts"
            lead="Filter by domain to inspect scope, technical stack, mentorship model, and timeline."
          />

          {/* Filter Bar */}
          <div className="filter-bar" role="tablist" aria-label="Project domains">
            {FILTERS.map((item) => {
              const active = selectedCategory === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`filter-tab${active ? ' is-active' : ''}`}
                  onClick={() => setSelectedCategory(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <Divider style={{ margin: 'var(--s-4) 0 var(--s-6)' }} />

          {/* Projects Grid */}
          <ul className="project-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout={index === 0 && selectedCategory === 'all' ? 'feature' : 'standard'}
                to={`/projects/${project.id}`}
                delay={Math.min(index * 50, 300)}
              />
            ))}
          </ul>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--s-7) 0' }}>
              <p className="t-lead">No projects currently listed in this category.</p>
            </div>
          )}
        </PageContainer>
      </Section>

      {/* Propose your own project */}
      <CustomProject />
    </>
  );
}

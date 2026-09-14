import { useState, useMemo, useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import CustomProject from '../components/projects/CustomProject.jsx';
import { projects } from '../data/projects.js';
import { companyName } from '../data/company.js';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'ai-robotics', label: 'AI & Robotics' },
  { id: 'finance-fintech', label: 'Finance & FinTech' },
  { id: 'education-edtech', label: 'Education & EdTech' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'restaurant-food', label: 'Restaurant & Food' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'ai-innovation', label: 'AI & Innovation' },
  { id: 'travel-tourism', label: 'Travel & Tourism' }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    document.title = `Our Products: ${companyName}`;
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
            Product Portfolio & Technology Architectures
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Engineered Technology Products
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            Explore software platforms, autonomous systems, and domain-specific technology products engineered by TechBloom Labs across eleven key disciplines.
          </Reveal>
        </PageContainer>
      </Section>

      <Section tone="paper" size="lg" ruled labelledBy="products-archive-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Our Products Directory"
            id="products-archive-title"
            title="Engineered Technology Products"
            lead="Filter by domain to inspect technical capabilities, platform architectures, and verified implementations."
          />

          {/* Filter Bar */}
          <div className="filter-bar" role="tablist" aria-label="Product categories">
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

          <Divider style={{ margin: 'var(--s-4) 0 var(--s-5)' }} />

          {/* Responsive Editorial Product Card Grid */}
          <ul className="product-card-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                to={`/projects/${project.id}`}
                delay={Math.min(index * 40, 200)}
              />
            ))}
          </ul>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--s-7) 0' }}>
              <p className="t-lead">No products currently listed in this category.</p>
            </div>
          )}
        </PageContainer>
      </Section>

      {/* Custom Technology Solutions */}
      <CustomProject />
    </>
  );
}

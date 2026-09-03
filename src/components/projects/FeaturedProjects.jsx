import { useMemo, useState } from 'react';
import Button from '../common/Button.jsx';
import Modal from '../common/Modal.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import ProjectDetail from './ProjectDetail.jsx';
import { projectCategories, projects } from '../../data/projects.js';

const FEATURED_COUNT = 8;

/**
 * Research and projects. Category filter drives the showcase; the first two
 * results take the large feature treatment, the third goes wide, the rest are
 * standard — so the layout stays editorial at every filter state.
 */
export default function FeaturedProjects() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(null);

  const usedCategories = useMemo(() => {
    const counts = new Map();
    projects.forEach((project) => {
      counts.set(project.category, (counts.get(project.category) || 0) + 1);
    });
    return projectCategories
      .filter((category) => counts.has(category.id))
      .map((category) => ({ ...category, count: counts.get(category.id) }));
  }, []);

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  const visible = showAll || filter !== 'all' ? filtered : filtered.slice(0, FEATURED_COUNT);

  const layoutFor = (project, index) => {
    if (project.feature === 'primary' && index < 2) return 'feature';
    if (project.feature === 'wide' || (index === 2 && filter === 'all')) return 'wide';
    return 'standard';
  };

  return (
    <Section id="projects" tone="paper" size="lg" ruled labelledBy="projects-title">
      <PageContainer>
        <SectionHeading
          number="07"
          eyebrow="Research & Projects"
          id="projects-title"
          title="Featured research projects."
          lead="Real projects across ten domains — from crop planning and livestock genetics to pharmaceutical workflow, infrastructure delivery and applied AI."
          aside={
            <Button variant="secondary" size="sm" onClick={() => setShowAll((value) => !value)} arrow>
              {showAll ? 'Show featured only' : 'See All Projects'}
            </Button>
          }
        />

        <Reveal className="pfilter" variant="fade">
          <div className="pfilter__scroll" role="group" aria-label="Filter projects by domain">
            <button
              type="button"
              className="chip"
              aria-pressed={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All
              <span className="chip__count">{projects.length}</span>
            </button>

            {usedCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className="chip"
                aria-pressed={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.short}
                <span className="chip__count">{category.count}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <p className="t-sm pfilter__status" role="status" aria-live="polite">
          Showing {visible.length} of {projects.length} project concepts
        </p>

        <ul className="pgrid">
          {visible.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              layout={layoutFor(project, index)}
              onOpen={setActive}
              delay={Math.min(index * 60, 300)}
            />
          ))}
        </ul>

        <Modal
          open={Boolean(active)}
          onClose={() => setActive(null)}
          eyebrow={`Project ${active?.number || ''}`}
          title={active?.title || ''}
          wide
        >
          <ProjectDetail project={active} onClose={() => setActive(null)} />
        </Modal>
      </PageContainer>
    </Section>
  );
}

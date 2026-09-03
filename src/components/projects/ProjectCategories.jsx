import { useState } from 'react';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import { DomainIcon } from '../../assets/icons/index.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import { countByCategory, projectCategories } from '../../data/projects.js';

/**
 * Domain index. An editorial list rather than a card grid: hovering or focusing
 * a row raises its examples, so the breadth of TechBloom Labs is readable at a glance.
 */
export default function ProjectCategories() {
  /* On small screens every row starts collapsed, so the list stays scannable. */
  const isCompact = useMediaQuery('(max-width: 767px)');
  const [openId, setOpenId] = useState(projectCategories[0]?.id);
  const activeId = isCompact ? openId : openId || projectCategories[0]?.id;

  return (
    <Section id="project-domains" tone="sunk" size="lg" labelledBy="domains-title">
      <PageContainer>
        <SectionHeading
          number="07.2"
          eyebrow="Project Domains"
          id="domains-title"
          titleNode={
            <>
              Ten domains. Far beyond <em>software</em> alone.
            </>
          }
          lead="TechBloom Labs projects run in laboratories, on farms, across construction sites, inside pharmaceutical workflow and through healthcare operations — as well as in code."
        />

        <ul className="domains">
          {projectCategories.map((category, index) => {
            const isOpen = activeId === category.id;
            const count = countByCategory(category.id);

            return (
              <Reveal
                as="li"
                className={`domain${isOpen ? ' is-open' : ''}`}
                key={category.id}
                delay={Math.min(index * 45, 270)}
                style={{ '--domain-accent': category.accent }}
              >
                <button
                  type="button"
                  className="domain__hit"
                  aria-expanded={isOpen}
                  aria-controls={`domain-panel-${category.id}`}
                  onClick={() => setOpenId(isOpen ? '' : category.id)}
                  onMouseEnter={isCompact ? undefined : () => setOpenId(category.id)}
                  onFocus={isCompact ? undefined : () => setOpenId(category.id)}
                >
                  <span className="domain__index t-mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="domain__icon" aria-hidden="true">
                    <DomainIcon name={category.icon} size={20} />
                  </span>
                  <span className="domain__name t-h3">{category.name}</span>
                  <span className="domain__count t-label">
                    {count} {count === 1 ? 'project' : 'projects'}
                  </span>
                </button>

                <div className="domain__panel" id={`domain-panel-${category.id}`} hidden={!isOpen}>
                  <p className="t-body">{category.blurb}</p>
                  <ul className="domain__examples">
                    {category.examples.map((example) => (
                      <li key={example} className="chip chip--static">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </PageContainer>
    </Section>
  );
}

import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import { opportunities, opportunityTypes } from '../data/opportunities.js';
import { companyName } from '../data/company.js';

export default function OpportunitiesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.title = `Opportunities: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    return opportunities.filter((item) => {
      const matchType = selectedType === 'all' || item.type === selectedType;
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.domain.toLowerCase().includes(query.toLowerCase()) ||
        item.summary.toLowerCase().includes(query.toLowerCase());
      return matchType && matchQuery;
    });
  }, [selectedType, query]);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            Unified Opportunity Discovery
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            All Ecosystem Pathways in <em>One</em> Place.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            Explore internships, research initiatives, guided project concepts, and faculty mentorship openings across the TechBloom Labs ecosystem.
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/career-paths" variant="ghost" arrow>
              Explore Career Paths
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      <Section tone="paper" size="lg" ruled labelledBy="opportunities-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Explore Openings"
            id="opportunities-title"
            title="Search Pathways & Positions"
            lead="Filter by opportunity format or search by domain keywords."
          />

          {/* Filter & Search Bar */}
          <div className="opportunities-controls">
            <div className="filter-bar" role="tablist" aria-label="Opportunity types">
              {opportunityTypes.map((tab) => {
                const active = selectedType === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`filter-tab${active ? ' is-active' : ''}`}
                    onClick={() => setSelectedType(tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="opportunities-search">
              <input
                type="search"
                placeholder="Search by domain, topic, or keyword…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input input--search"
                aria-label="Search opportunities"
              />
            </div>
          </div>

          <Divider style={{ margin: 'var(--s-4) 0 var(--s-6)' }} />

          {/* Opportunities Cards Grid */}
          <div className="opportunities-grid">
            {filtered.map((item, index) => (
              <Reveal key={item.id} className="opportunity-card card" delay={Math.min(index * 50, 300)}>
                <div className="opportunity-card__header">
                  <span className="badge badge--open">{item.typeLabel}</span>
                  <span className="chip chip--sm">{item.domain}</span>
                </div>

                <h3 className="opportunity-card__title t-h3">
                  {item.title}
                </h3>

                <p className="opportunity-card__summary t-body">
                  {item.summary}
                </p>

                <div className="opportunity-card__meta t-sm">
                  <span><strong>Duration:</strong> {item.duration}</span>
                  <span><strong>Mode:</strong> {item.mode}</span>
                  <span><strong>Lead:</strong> {item.lead}</span>
                </div>

                <div className="opportunity-card__foot">
                  <Link to={item.to} className="btn btn--sm btn--primary">
                    <span>Explore Opportunity</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--s-7) 0' }}>
              <p className="t-lead">No opportunities match your current filter criteria.</p>
              <Button onClick={() => { setSelectedType('all'); setQuery(''); }} variant="secondary" size="sm" style={{ marginTop: 'var(--s-4)' }}>
                Reset Filters
              </Button>
            </div>
          )}
        </PageContainer>
      </Section>
    </>
  );
}

import { useMemo, useRef, useState } from 'react';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import InternshipCard from './InternshipCard.jsx';
import FeeNotice from './FeeNotice.jsx';
import { ArrowUpRight, Filter } from '../../assets/icons/index.jsx';
import { featuredPrograms, filterGroups, internships } from '../../data/internships.js';
import { projectCategories } from '../../data/projects.js';

const DURATIONS = [
  { id: 'all', label: 'Any duration' },
  { id: '2', label: '2 months' },
  { id: '6', label: '6 months' }
];

const MODES = [
  { id: 'all', label: 'Any mode' },
  { id: 'Online', label: 'Online' },
  { id: 'Hybrid', label: 'Hybrid' },
  { id: 'Offline', label: 'Offline' }
];

const DIFFICULTY = [
  { id: 'all', label: 'Any level' },
  { id: 'Beginner', label: 'Beginner' },
  { id: 'Intermediate', label: 'Intermediate' },
  { id: 'Advanced', label: 'Advanced' }
];

/**
 * Internship Hub. The filter bar is real: it narrows the example listings on the
 * client. The two featured programs set duration and scroll to the results.
 */
export default function InternshipHub() {
  const [domain, setDomain] = useState('all');
  const [duration, setDuration] = useState('all');
  const [mode, setMode] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const listRef = useRef(null);

  const domains = useMemo(() => {
    const used = new Set(internships.map((item) => item.category));
    return projectCategories.filter((category) => used.has(category.id));
  }, []);

  const results = useMemo(
    () =>
      internships.filter(
        (item) =>
          (domain === 'all' || item.category === domain) &&
          (duration === 'all' || item.months === duration) &&
          (mode === 'all' || item.mode === mode) &&
          (difficulty === 'all' || item.difficulty === difficulty)
      ),
    [domain, duration, mode, difficulty]
  );

  const browse = (months) => {
    setDuration(months);
    setDomain('all');
    setMode('all');
    setDifficulty('all');
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const reset = () => {
    setDomain('all');
    setDuration('all');
    setMode('all');
    setDifficulty('all');
  };

  return (
    <Section id="internships" tone="paper" size="lg" ruled labelledBy="internships-title">
      <PageContainer>
        <SectionHeading
          number="04"
          eyebrow="Internship Hub"
          id="internships-title"
          title="Find something worth applying for."
          lead="Filter by what matters to you, then read exactly what a program includes before you apply."
        />

        <div className="programs">
          {featuredPrograms.map((program, index) => (
            <Reveal key={program.id} delay={index * 90}>
              <InternshipCard
                program={program}
                onBrowse={browse}
                tone={program.id === 'six-month' ? 'dark' : 'light'}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="fee-notice-wrap" variant="fade">
          <FeeNotice />
        </Reveal>

        <div className="hub" ref={listRef}>
          <div className="hub__bar">
            <p className="hub__bar-title t-label">
              <Filter size={15} /> Filter opportunities
            </p>

            <div className="hub__filters">
              <label className="hub__filter">
                <span className="t-label">Domain</span>
                <select className="select" value={domain} onChange={(e) => setDomain(e.target.value)}>
                  <option value="all">All domains</option>
                  {domains.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.short}
                    </option>
                  ))}
                </select>
              </label>

              <label className="hub__filter">
                <span className="t-label">Duration</span>
                <select className="select" value={duration} onChange={(e) => setDuration(e.target.value)}>
                  {DURATIONS.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="hub__filter">
                <span className="t-label">Mode</span>
                <select className="select" value={mode} onChange={(e) => setMode(e.target.value)}>
                  {MODES.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="hub__filter">
                <span className="t-label">Difficulty</span>
                <select
                  className="select"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  {DIFFICULTY.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <ul className="hub__dimensions" aria-label="Every listing states">
              {filterGroups.map((group) => (
                <li key={group.id} className="chip chip--static">
                  {group.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hub__results">
            <p className="hub__count t-sm" role="status" aria-live="polite">
              {results.length} example {results.length === 1 ? 'program' : 'programs'}
              {results.length !== internships.length ? ' match your filters' : ''}
            </p>

            {results.length === 0 ? (
              <div className="empty-state">
                <p className="t-h4">No program matches those filters yet.</p>
                <p className="t-sm">
                  Programs open in cohorts across ten domains. Clear the filters, or tell us what you
                  are looking for and we will point you to the closest fit.
                </p>
                <div className="actions">
                  <Button variant="secondary" size="sm" onClick={reset}>
                    Clear filters
                  </Button>
                  <Button to="/contact?intent=internship" size="sm" arrow>
                    Ask about a program
                  </Button>
                </div>
              </div>
            ) : (
              <ul className="listings">
                {results.map((item, index) => (
                  <Reveal as="li" className="listing" key={item.id} delay={Math.min(index * 50, 250)}>
                    <div className="listing__main">
                      <p className="t-label">
                        {item.type} · {item.lead}
                      </p>
                      <h3 className="listing__title t-h4">{item.title}</h3>
                      <p className="t-sm">{item.eligibility}</p>
                      <ul className="listing__skills">
                        {item.skills.map((skill) => (
                          <li key={skill} className="chip chip--static">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <dl className="listing__meta">
                      <div>
                        <dt className="t-label">Duration</dt>
                        <dd>{item.months} months</dd>
                      </div>
                      <div>
                        <dt className="t-label">Program fee</dt>
                        <dd>{item.fee}</dd>
                      </div>
                      <div>
                        <dt className="t-label">Mode</dt>
                        <dd>{item.mode}</dd>
                      </div>
                      <div>
                        <dt className="t-label">Location</dt>
                        <dd>{item.location}</dd>
                      </div>
                      <div>
                        <dt className="t-label">Level</dt>
                        <dd>{item.difficulty}</dd>
                      </div>
                      <div>
                        <dt className="t-label">Deadline</dt>
                        <dd>{item.deadline}</dd>
                      </div>
                    </dl>

                    <div className="listing__action">
                      <Button
                        to={`/contact?intent=internship&program=${encodeURIComponent(item.title)}`}
                        variant="secondary"
                        size="sm"
                      >
                        Enquire
                        <ArrowUpRight size={15} />
                      </Button>
                    </div>
                  </Reveal>
                ))}
              </ul>
            )}

            <p className="t-xs hub__disclosure">
              Example listings shown to demonstrate the browsing experience. Live intake dates,
              eligibility and fees are confirmed per program.
            </p>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

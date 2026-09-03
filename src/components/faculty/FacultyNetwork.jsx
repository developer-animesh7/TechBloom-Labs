import { useMemo, useState } from 'react';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import FacultyCard from './FacultyCard.jsx';
import { Check, Info } from '../../assets/icons/index.jsx';
import { experts, expertsPlaceholderNote } from '../../data/experts.js';

const expertProfileFields = [
  'Field of specialization',
  'Research area',
  'Core expertise',
  'Mentorship availability'
];

/**
 * Experts network. Filter by field, or narrow to profiles currently mentoring.
 */
export default function FacultyNetwork() {
  const [field, setField] = useState('all');
  const [mentoringOnly, setMentoringOnly] = useState(false);

  const fields = useMemo(() => [...new Set(experts.map((person) => person.field))].sort(), []);

  const results = useMemo(
    () =>
      experts.filter(
        (person) =>
          (field === 'all' || person.field === field) && (!mentoringOnly || person.mentoring)
      ),
    [field, mentoringOnly]
  );

  return (
    <Section id="experts" tone="paper" size="lg" ruled labelledBy="experts-title">
      <PageContainer>
        <SectionHeading
          number="09"
          eyebrow="Experts Network"
          id="experts-title"
          title="Meet the specialists behind the projects."
          lead="Every profile states its field, research area, expertise and whether that mentor is currently taking students or mentees."
          aside={
            <ul className="ticks">
              {expertProfileFields.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          }
        />

        <Reveal className="fbar" variant="fade">
          <label className="fbar__field">
            <span className="t-label">Field</span>
            <select className="select" value={field} onChange={(event) => setField(event.target.value)}>
              <option value="all">All fields</option>
              {fields.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="fbar__check">
            <input
              type="checkbox"
              checked={mentoringOnly}
              onChange={(event) => setMentoringOnly(event.target.checked)}
            />
            <span className="t-sm">Mentorship open only</span>
          </label>

          <span className="fbar__count t-mono">
            {results.length} of {experts.length}
          </span>
        </Reveal>

        <ul className="fgrid">
          {results.map((person, index) => (
            <FacultyCard
              key={person.ref}
              person={person}
              delay={Math.min(index * 60, 300)}
            />
          ))}
        </ul>

        <Reveal variant="fade">
          <p className="note">
            <Info size={18} />
            <span>{expertsPlaceholderNote}</span>
          </p>
        </Reveal>
      </PageContainer>
    </Section>
  );
}

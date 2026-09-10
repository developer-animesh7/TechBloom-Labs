import PageContainer from '../layout/PageContainer.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Reveal from '../common/Reveal.jsx';
import { approvedAboutCopy, approachPillars } from '../../data/about.js';

export default function StrategicApproach() {
  return (
    <section className="about-approach" aria-labelledby="about-approach-title">
      <PageContainer>
        <SectionHeading
          number="01"
          eyebrow="Strategic Approach"
          id="about-approach-title"
          title="Global Vision With Strong Engineering Rigor"
          lead={approvedAboutCopy.strategicApproach}
        />

        <div className="approach-pillars-grid">
          {approachPillars.map((pillar, idx) => (
            <Reveal className="approach-pillar-card" key={pillar.num} delay={idx * 100}>
              <div className="approach-pillar-card__top">
                <span className="approach-pillar-card__num">{pillar.num}</span>
                <span className="badge badge--sm">Core Pillar</span>
              </div>
              <h3 className="approach-pillar-card__title">{pillar.title}</h3>
              <p className="approach-pillar-card__body">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

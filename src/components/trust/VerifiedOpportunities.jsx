import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import TrustItem from './TrustItem.jsx';
import { Info } from '../../assets/icons/index.jsx';
import { trustPillars } from '../../data/support.js';

export default function VerifiedOpportunities() {
  return (
    <Section id="verified" tone="paper" size="lg" ruled labelledBy="verified-title">
      <PageContainer>
        <SectionHeading
          number="13"
          eyebrow="Verified Opportunities"
          id="verified-title"
          title="Built around opportunities you can trust."
          lead="Verification, clear fees and a support channel — the parts that decide whether an opportunity is worth your time."
        />

        <ul className="tpillars">
          {trustPillars.map((pillar, index) => (
            <TrustItem
              key={pillar.id}
              pillar={pillar}
              index={index}
              delay={Math.min(index * 70, 300)}
            />
          ))}
        </ul>

        <Reveal variant="fade">
          <p className="note">
            <Info size={18} />
            <span>
              Security measures reduce risk; no platform can promise absolute security. Verification
              covers identity and affiliation, not the outcome of any individual project or internship.
            </span>
          </p>
          <div style={{ marginTop: 'var(--s-4)' }}>
            <Button to="/opportunities" variant="primary" arrow>
              Explore Opportunities
            </Button>
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  );
}

import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import EcosystemItem from './EcosystemItem.jsx';
import { ecosystemPillars } from '../../data/company.js';

/**
 * The ecosystem: one platform, multiple pathways.
 * `id="opportunities"` — this is where the Opportunities nav link lands.
 */
export default function Ecosystem() {
  return (
    <Section id="opportunities" tone="paper" size="lg" ruled labelledBy="eco-title">
      <PageContainer>
        <SectionHeading
          number="03"
          eyebrow="The TechBloom Labs Ecosystem"
          id="eco-title"
          title="One platform. Multiple pathways."
          lead="Four ways in — faculty, research and projects, internships, and career direction."
        />

        <ul className="eco">
          {ecosystemPillars.map((pillar, index) => (
            <EcosystemItem pillar={pillar} index={index} key={pillar.id} />
          ))}
        </ul>
      </PageContainer>
    </Section>
  );
}

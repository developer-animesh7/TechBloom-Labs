import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import { howItWorksStages } from '../../data/company.js';

/**
 * How TechBloom Labs works. A single progression with a continuous spine, not four
 * repeated cards: each stage indents further along the line as it advances.
 */
export default function HowItWorks() {
  return (
    <Section id="how-it-works" tone="ink" size="lg" labelledBy="how-title">
      <PageContainer>
        <SectionHeading
          number="02"
          eyebrow="How TechBloom Labs Works"
          id="how-title"
          title="From learning to opportunity."
          lead="Four stages, in the order a student actually moves through them."
        />

        <ol className="flowline">
          {howItWorksStages.map((stage, index) => (
            <Reveal
              as="li"
              className="flowline__stage"
              key={stage.step}
              delay={index * 90}
              style={{ '--stage-index': index }}
            >
              <div className="flowline__head">
                <span className="flowline__num marker">{stage.step}</span>
                <span className="flowline__dot" aria-hidden="true" />
                <h3 className="flowline__title t-h3">{stage.title}</h3>
              </div>
              <p className="flowline__body t-body">{stage.body}</p>
            </Reveal>
          ))}
        </ol>
      </PageContainer>
    </Section>
  );
}

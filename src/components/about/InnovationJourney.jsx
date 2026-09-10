import PageContainer from '../layout/PageContainer.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Reveal from '../common/Reveal.jsx';
import { approvedAboutCopy, innovationJourneyStages } from '../../data/about.js';

export default function InnovationJourney() {
  return (
    <section className="about-journey" aria-labelledby="about-journey-title">
      <PageContainer>
        <SectionHeading
          number="02"
          eyebrow="Lifecycle Execution"
          id="about-journey-title"
          title="From Concept to Continuous Evolution"
          lead={approvedAboutCopy.lifecycleExecution}
        />

        <div className="journey-pipeline">
          {innovationJourneyStages.map((stage, idx) => (
            <Reveal className="journey-stage" key={stage.num} delay={idx * 60}>
              <div className="journey-stage__node" aria-hidden="true">
                {stage.num}
              </div>
              <div className="journey-stage__card">
                <span className="journey-stage__label">{stage.label}</span>
                <h3 className="journey-stage__name">{stage.name}</h3>
                <p className="journey-stage__body">{stage.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

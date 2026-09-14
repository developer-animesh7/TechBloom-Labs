import Reveal from '../common/Reveal.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import { journeySteps } from '../../data/company.js';
import { JOURNEY_ICONS } from './JourneyIcons.jsx';

/**
 * JourneySteps — 4 Core Pillars: Research, Industry, Innovation, Impact.
 * Displays bespoke technical SVG icons as the primary visual representation
 * accompanied by editorial sequence numbers, concept labels, and descriptions.
 */
export default function JourneySteps() {
  return (
    <section className="journey" id="journey" aria-label="Core Capabilities: Research, Industry, Innovation, Impact">
      <PageContainer>
        <ol className="journey__rail">
          {journeySteps.map((step, index) => {
            const IconComponent = JOURNEY_ICONS[step.step] || JOURNEY_ICONS['01'];
            return (
              <Reveal as="li" className="journey__step" key={step.title} delay={index * 80}>
                <div className="journey__header">
                  <span className="journey__num marker">{step.step}</span>
                  <span className="journey__node" aria-hidden="true" />
                </div>

                <div className="journey__icon-box" aria-hidden="true">
                  <IconComponent className="journey__icon" />
                </div>

                <div className="journey__content">
                  <h3 className="journey__label">{step.title}</h3>
                  <p className="journey__body t-sm">{step.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </PageContainer>
    </section>
  );
}

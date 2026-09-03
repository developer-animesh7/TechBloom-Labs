import Reveal from '../common/Reveal.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import { journeySteps } from '../../data/company.js';

/**
 * The signature Discover → Connect → Experience → Bloom rail.
 * Horizontal on desktop with connecting nodes; compact editorial on mobile.
 */
export default function JourneySteps() {
  return (
    <div className="journey" id="journey">
      <PageContainer>
        <ol className="journey__rail">
          {journeySteps.map((step, index) => (
            <Reveal as="li" className="journey__step" key={step.title} delay={index * 80}>
              <span className="journey__node" aria-hidden="true" />
              <div className="journey__head">
                <span className="journey__num marker">{step.step}</span>
                <h3 className="journey__title t-h4">{step.title}</h3>
              </div>
              <p className="journey__body t-sm">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </PageContainer>
    </div>
  );
}

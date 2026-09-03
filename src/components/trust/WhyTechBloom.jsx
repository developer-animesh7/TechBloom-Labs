import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import { whyQuestions } from '../../data/support.js';

/**
 * Why TechBloom Labs. An editorial contrast: the one question a syllabus answers,
 * set against the five it does not.
 */
export default function WhyTechBloom() {
  return (
    <Section id="why" tone="ink" size="lg" labelledBy="why-title">
      <PageContainer>
        <SectionHeading
          number="14"
          eyebrow="Why TechBloom Labs"
          id="why-title"
          titleNode={
            <>
              Education gives you knowledge. TechBloom Labs turns it into <em>experience</em>.
            </>
          }
        />

        <div className="why">
          <Reveal className="why__left">
            <p className="t-label">Traditional education answers</p>
            <p className="why__question t-display">
              &ldquo;What should I learn?&rdquo;
            </p>
          </Reveal>

          <Reveal className="why__right" delay={110}>
            <p className="t-label">TechBloom Labs also helps answer</p>
            <ul className="why__list">
              {whyQuestions.map((question, index) => (
                <li key={question}>
                  <span className="why__num t-mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="why__text t-h3">{question}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}

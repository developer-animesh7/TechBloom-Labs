import Reveal from '../common/Reveal.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import { trustHighlights } from '../../data/support.js';

/**
 * Trust strip below the hero. Qualitative statements only — no invented counts.
 */
export default function TrustStrip() {
  return (
    <Section tone="paper" className="trust-strip" label="What TechBloom Labs provides">
      <PageContainer>
        <ul className="trust-strip__list">
          {trustHighlights.map((item, index) => (
            <Reveal as="li" className="trust-strip__item" key={item.title} delay={index * 60}>
              <h3 className="t-h4">{item.title}</h3>
              <p className="t-sm">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </PageContainer>
    </Section>
  );
}

import Reveal from '../common/Reveal.jsx';

export default function InnovationBelief() {
  return (
    <section className="about-manifesto" aria-label="Core Belief Manifesto">
      <div className="about-manifesto__bg" aria-hidden="true" />
      <div className="about-manifesto__inner">
        <Reveal>
          <span className="about-manifesto__label">
            Our Central Belief
          </span>
        </Reveal>

        <Reveal delay={80}>
          <blockquote className="about-manifesto__statement">
            At TechBloom Labs, we believe innovation is not just about adopting new technology—it is about creating products that{' '}
            <strong>make a measurable difference</strong>,{' '}
            <strong>empower people and organizations</strong>, and{' '}
            <strong>shape the future</strong>.
          </blockquote>
        </Reveal>

        <Reveal delay={140}>
          <div className="about-manifesto__signature">
            TechBloom Labs · Purpose-Driven Innovation
          </div>
        </Reveal>
      </div>
    </section>
  );
}

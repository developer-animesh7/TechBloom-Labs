import Section from '../layout/Section.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Reveal from '../common/Reveal.jsx';
import Button from '../common/Button.jsx';
import GridField from '../../assets/illustrations/GridField.jsx';

/**
 * Signature Brand Manifesto Section.
 * Dominant Statement: "WHERE RESEARCH MEETS REAL-WORLD INNOVATION."
 * High typographic hierarchy, clean editorial rhythm, zero clutter.
 */
export default function BrandManifesto() {
  const pillars = [
    {
      num: '01',
      title: 'Ten Domain Frameworks',
      desc: 'Precision agriculture, pharmaceutical workflows, veterinary data, healthcare systems, and applied AI systems built with domain rigor.'
    },
    {
      num: '02',
      title: 'Expert-Guided Discipline',
      desc: 'Collaborative problem formulation under domain researchers and specialists, establishing high standards from inception.'
    },
    {
      num: '03',
      title: 'Practical Implementation',
      desc: 'From concept design toward practical, real-world technology systems that address authentic institutional and industry needs.'
    }
  ];

  return (
    <Section tone="ink" size="lg" className="manifesto" labelledBy="manifesto-statement">
      <GridField className="manifesto__grid" id="manifesto" cell={64} />

      <PageContainer>
        <div className="manifesto__inner">
          <Reveal as="p" className="manifesto__eyebrow t-label" variant="fade">
            Our Guiding Principle
          </Reveal>

          <Reveal as="h2" className="manifesto__statement" id="manifesto-statement" delay={60}>
            WHERE RESEARCH MEETS <em>REAL-WORLD</em> INNOVATION.
          </Reveal>

          <Reveal as="p" className="manifesto__lead t-lead" delay={120}>
            TechBloom Labs operates as a collaborative bridge between academic inquiry and practical application.
            We connect students, domain researchers, and real datasets to develop technology frameworks with measurable real-world relevance.
          </Reveal>

          <div className="manifesto__pillars" style={{ marginTop: 'var(--s-7)' }}>
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.num} className="manifesto__pillar" delay={180 + idx * 80}>
                <span className="manifesto__num t-mono">{pillar.num}</span>
                <h3 className="manifesto__pillar-title t-h4">{pillar.title}</h3>
                <p className="manifesto__pillar-desc t-body">{pillar.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="manifesto__action" delay={340} style={{ marginTop: 'var(--s-6)' }}>
            <Button to="/about" variant="bright" arrow>
              Explore TechBloom Labs
            </Button>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}

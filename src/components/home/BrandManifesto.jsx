import Section from '../layout/Section.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Reveal from '../common/Reveal.jsx';
import Button from '../common/Button.jsx';
import GridField from '../../assets/illustrations/GridField.jsx';
import { MANIFESTO_ICONS } from './ManifestoIcons.jsx';

/**
 * Signature Brand Manifesto Section.
 * Headline: "ENGINEERING IDEAS INTO WHAT'S NEXT."
 * Product engineering positioning with 3 progressive pillars:
 * 01 Technology Architecture → 02 Product Engineering → 03 Continuous Evolution.
 */
export default function BrandManifesto() {
  const pillars = [
    {
      num: '01',
      title: 'TECHNOLOGY ARCHITECTURE',
      desc: 'Designing robust technical foundations for intelligent, scalable systems.'
    },
    {
      num: '02',
      title: 'PRODUCT ENGINEERING',
      desc: 'Turning ideas and requirements into reliable, production-ready digital products.'
    },
    {
      num: '03',
      title: 'CONTINUOUS EVOLUTION',
      desc: 'Improving products and systems through iteration, engineering discipline, and real-world learning.'
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
            ENGINEERING IDEAS <em>INTO WHAT'S NEXT.</em>
          </Reveal>

          <Reveal as="p" className="manifesto__lead t-lead" delay={120}>
            We turn complex requirements into thoughtfully engineered digital products and technology systems. From early technical direction to product development and deployment, our work focuses on building reliable solutions that are designed to evolve with real-world needs.
          </Reveal>

          <div className="manifesto__pillars" style={{ marginTop: 'var(--s-7)' }}>
            {pillars.map((pillar, idx) => {
              const IconComponent = MANIFESTO_ICONS[pillar.num];
              return (
                <Reveal key={pillar.num} className="manifesto__pillar" delay={180 + idx * 80}>
                  <div className="manifesto__pillar-header">
                    <span className="manifesto__num t-mono">{pillar.num}</span>
                  </div>

                  <div className="manifesto__icon-box" aria-hidden="true">
                    <IconComponent className="manifesto-icon-svg" />
                  </div>

                  <div className="manifesto__pillar-content">
                    <h3 className="manifesto__pillar-title">{pillar.title}</h3>
                    <p className="manifesto__pillar-desc t-body">{pillar.desc}</p>
                  </div>
                </Reveal>
              );
            })}
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

import { useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import Button from '../components/common/Button.jsx';
import {
  researchStatement,
  researchIntro,
  researchAreas,
  researchWorkflow,
  studentInvolvement
} from '../data/research.js';
import { companyName } from '../data/company.js';

export default function ResearchPage() {
  useEffect(() => {
    document.title = `Research & Innovation: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            Research & Project Ecosystem
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            {researchStatement}
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            {researchIntro}
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/contact?interest=research-project" variant="primary" arrow>
              Propose a Research Initiative
            </Button>
            <Button to="/faculty" variant="ghost">
              Meet Faculty Researchers
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      {/* Research Domains */}
      <Section tone="paper" size="lg" ruled labelledBy="research-areas-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Key Initiatives"
            id="research-areas-title"
            title="Active Research Domains"
            lead="Explore interdisciplinary research vectors bridging computational theory, data architecture, and physical domains."
          />

          <Divider style={{ margin: 'var(--s-4) 0 var(--s-6)' }} />

          <div className="research-grid">
            {researchAreas.map((area, idx) => (
              <Reveal key={area.id} className="research-card card" delay={Math.min(idx * 60, 300)}>
                <h3 className="research-card__title t-h3">{area.title}</h3>
                <p className="research-card__summary t-body">{area.summary}</p>
                <div className="cluster cluster--sm" style={{ marginTop: 'var(--s-3)' }}>
                  {area.domains.map((dom) => (
                    <span key={dom} className="chip chip--sm">
                      {dom}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Research Workflow */}
      <Section tone="sunk" size="lg" ruled labelledBy="research-flow-title">
        <PageContainer>
          <SectionHeading
            number="02"
            eyebrow="Methodology"
            id="research-flow-title"
            title="The Research & Project Lifecycle"
            lead="How ideas progress from exploratory questions to evaluated architectures."
          />

          <Divider style={{ margin: 'var(--s-4) 0 var(--s-6)' }} />

          <div className="process-timeline">
            {researchWorkflow.map((flow, idx) => (
              <Reveal key={flow.step} className="process-timeline__item" delay={idx * 60}>
                <div className="process-timeline__badge">
                  <span>{flow.step}</span>
                </div>
                <h4 className="t-h4">{flow.title}</h4>
                <p className="t-sm">{flow.body}</p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Student & Faculty Involvement */}
      <Section tone="paper" size="lg" ruled labelledBy="involvement-title">
        <PageContainer>
          <SectionHeading
            number="03"
            eyebrow="Student & Faculty Collaboration"
            id="involvement-title"
            title="Meaningful Research Experience"
            lead="Students participate in real research projects guided by verified faculty advisors."
          />

          <div className="grid grid--2" style={{ marginTop: 'var(--s-5)' }}>
            {studentInvolvement.map((item, idx) => (
              <Reveal key={item.title} className="involvement-card card" delay={idx * 70}>
                <h3 className="t-h4" style={{ marginBottom: 'var(--s-2)' }}>{item.title}</h3>
                <p className="t-body">{item.description}</p>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--s-7)' }}>
            <Button to="/contact?interest=research-project" variant="primary" arrow>
              Propose a Research Initiative
            </Button>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

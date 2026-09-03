import { useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import ImageReveal from '../components/common/ImageReveal.jsx';
import Button from '../components/common/Button.jsx';
import Leadership from '../components/about/Leadership.jsx';
import HowItWorks from '../components/about/HowItWorks.jsx';
import Ecosystem from '../components/ecosystem/Ecosystem.jsx';
import { mission, vision, aboutIntro, tagline, primaryStatement, companyName } from '../data/company.js';

export default function AboutPage() {
  useEffect(() => {
    document.title = `About — ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            {tagline}
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Where Academic Knowledge Becomes <em>Meaningful</em> Experience.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            {aboutIntro}
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/services" variant="primary" arrow>
              Explore Services
            </Button>
            <Button to="/contact" variant="ghost">
              Connect With Us
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      <Section tone="paper" size="lg" ruled labelledBy="about-philosophy">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Our Philosophy"
            id="about-philosophy"
            title="A Bridge Between Classroom Syllabus and Real-World Impact"
            lead={primaryStatement}
          />

          <Divider className="about__rule" />

          <div className="about__body">
            <div className="about__media">
              <ImageReveal
                src="/images/about/about-main.svg"
                alt="Students, mentors and researchers working together across project plans"
                ratio="4x3"
                caption="Mentorship and applied project development"
              />
            </div>

            <div className="about__statements">
              <Reveal className="about__statement">
                <p className="t-label">{mission.label}</p>
                <p className="t-h3">{mission.body}</p>
              </Reveal>

              <Reveal className="about__statement" delay={90}>
                <p className="t-label">{vision.label}</p>
                <p className="t-h3">{vision.body}</p>
              </Reveal>

              <Reveal delay={150}>
                <ImageReveal
                  src="/images/about/research-lab.svg"
                  alt="Research environment with structured lab notebooks and equipment"
                  ratio="16x9"
                />
              </Reveal>
            </div>
          </div>
        </PageContainer>
      </Section>

      <HowItWorks />

      <Ecosystem />

      <section id="leadership">
        <Leadership />
      </section>

      <Section tone="paper" size="default" ruled>
        <PageContainer>
          <div className="align-center" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <Reveal as="h2" className="t-h2">
              Ready to Join the TechBloom Labs Ecosystem?
            </Reveal>
            <Reveal as="p" className="t-lead" delay={80}>
              Whether you are a student looking for a guided project, a faculty researcher seeking collaborators, or an organization building software, we welcome you.
            </Reveal>
            <Reveal className="cluster cluster--center" delay={120} style={{ justifyContent: 'center', marginTop: 'var(--s-5)' }}>
              <Button to="/projects" variant="primary" arrow>
                Explore Projects
              </Button>
              <Button to="/contact" variant="ghost">
                Discuss an Initiative
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

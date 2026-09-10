import { useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import CareerPathExplorer from '../components/careers/CareerPathExplorer.jsx';
import { companyName, tagline } from '../data/company.js';

export default function CareerPathsPage() {
  useEffect(() => {
    document.title = `Career Paths: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            Interactive Progression Roadmaps
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Map Your Journey from <em>Curriculum</em> to Career.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            A degree gives you the foundation, but real-world careers require progressive projects,
            targeted skills, and applied internships. Select your parameters below to generate a tailored four-year roadmap.
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/contact?interest=career-guidance" variant="primary" arrow>
              Speak with a Career Advisor
            </Button>
            <Button to="/internships" variant="ghost">
              Browse Matching Internships
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      {/* Main Interactive Career Path Explorer */}
      <CareerPathExplorer />

      {/* Mentorship & Guidance CTA */}
      <Section tone="paper" size="default" ruled>
        <PageContainer>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <Reveal as="h2" className="t-h2">
              Need Personalized Career Guidance?
            </Reveal>
            <Reveal as="p" className="t-lead" delay={80}>
              Connect with experienced faculty and domain mentors who can help evaluate your portfolio, recommend project topics, and plan your career trajectory.
            </Reveal>
            <Reveal className="actions" delay={120} style={{ justifyContent: 'center' }}>
              <Button to="/contact?interest=career-guidance" variant="primary" arrow>
                Book a Guidance Session
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

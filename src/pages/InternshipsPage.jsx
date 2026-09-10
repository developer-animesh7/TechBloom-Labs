import { useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import InternshipHub from '../components/internships/InternshipHub.jsx';
import ApplicationSystem from '../components/applications/ApplicationSystem.jsx';
import ApplicationTracking from '../components/applications/ApplicationTracking.jsx';
import { companyName, tagline } from '../data/company.js';

export default function InternshipsPage() {
  useEffect(() => {
    document.title = `Internships — ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            Structured Internship Programs
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Internships Designed for <em>Real</em> Project Work.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            Choose between focused 2-month and extended 6-month programs with dedicated mentorship,
            practical project milestones, and verified completion certificates.
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/contact?interest=Internship" variant="primary" arrow>
              Apply for an Internship
            </Button>
            <Button to="/projects" variant="ghost">
              Explore Technology Projects
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      {/* Main Internship Hub (Featured 2m/6m Programs + Filterable Listings) */}
      <InternshipHub />

      {/* 8-Step Application Process */}
      <ApplicationSystem />

      {/* Application Tracking Preview */}
      <ApplicationTracking />

      {/* Final Application CTA */}
      <Section tone="paper" size="default" ruled>
        <PageContainer>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <Reveal as="h2" className="t-h2">
              Ready to Advance Your Practical Skills?
            </Reveal>
            <Reveal as="p" className="t-lead" delay={80}>
              Applications are reviewed continuously. Submit your interest and connect with domain advisors.
            </Reveal>
            <Reveal className="actions" delay={120} style={{ justifyContent: 'center' }}>
              <Button to="/contact?interest=Internship" variant="primary" arrow>
                Start Your Application
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

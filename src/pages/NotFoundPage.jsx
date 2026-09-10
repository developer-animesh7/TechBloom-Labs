import { useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import { companyName } from '../data/company.js';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = `404 — Page Not Found: ${companyName}`;
  }, []);

  return (
    <Section tone="sunk" className="page-head" size="lg" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <PageContainer>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <Reveal as="p" className="t-label">
            Error 404
          </Reveal>
          <Reveal as="h1" className="t-h1" delay={50} style={{ marginBottom: 'var(--s-3)' }}>
            Page Not Found
          </Reveal>
          <Reveal as="p" className="t-lead" delay={100}>
            The destination you requested does not exist or has been relocated within the TechBloom Labs ecosystem.
          </Reveal>
          <Reveal className="cluster cluster--center" delay={150} style={{ justifyContent: 'center', marginTop: 'var(--s-5)' }}>
            <Button to="/" variant="primary" arrow>
              Return to Homepage
            </Button>
            <Button to="/projects" variant="ghost">
              Browse Projects
            </Button>
            <Button to="/services" variant="ghost">
              View Services
            </Button>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}

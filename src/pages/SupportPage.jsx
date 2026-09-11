import { useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import Support from '../components/support/Support.jsx';
import VerifiedOpportunities from '../components/trust/VerifiedOpportunities.jsx';
import { companyName, tagline, CONTACT_EMAIL } from '../data/company.js';

export default function SupportPage() {
  useEffect(() => {
    document.title = `Support: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            Participant & Partner Assistance
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Help, Guidance & <em>Resolution.</em>
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            Have questions about your application, program fees, product mentorship, or certificates?
            Select an issue category below to open a ticket or contact our support coordinators.
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/contact" variant="ghost" arrow>
              Direct Contact Form
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      {/* Main Support Component with 8 Categories & Modal Ticket Form */}
      <Support />

      {/* Trust & Verification Pillars */}
      <VerifiedOpportunities />

      {/* Final Support CTA */}
      <Section tone="paper" size="default" ruled>
        <PageContainer>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <Reveal as="h2" className="t-h2">
              Still Need Help?
            </Reveal>
            <Reveal as="p" className="t-lead" delay={80}>
              Our coordination team is available to assist with onboarding, institutional inquiries, and partner integration. You can also write directly to{' '}
              <a className="link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>.
            </Reveal>
            <Reveal className="actions" delay={120} style={{ justifyContent: 'center' }}>
              <Button to="/contact" variant="primary" arrow>
                Contact the Team
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

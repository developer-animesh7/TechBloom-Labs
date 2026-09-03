import { useEffect } from 'react';
import Button from '../components/common/Button.jsx';
import Reveal from '../components/common/Reveal.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Section from '../components/layout/Section.jsx';
import { Info } from '../assets/icons/index.jsx';
import { address, companyName } from '../data/company.js';

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'This page describes, in plain terms, what TechBloom Labs collects through this website and how it is used.',
    sections: [
      {
        heading: 'What this site collects',
        body:
          'The pages here are static. There is no analytics script, no advertising pixel and no tracking cookie. Nothing is stored about a visit.'
      },
      {
        heading: 'What you send us',
        body:
          'The contact, project proposal and support forms only use what you type. No delivery backend is connected to this site yet, so submissions are prepared as a message for you to send rather than transmitted automatically.'
      },
      {
        heading: 'How enquiry details are used',
        body:
          'Details you send are used to answer your enquiry and to match you with the right faculty member, program or project. They are not sold or shared for marketing.'
      },
      {
        heading: 'Your choices',
        body:
          'You can ask what enquiry details are held, ask for a correction, or ask for them to be deleted. Contact us at the registered office below.'
      }
    ]
  },
  terms: {
    title: 'Terms of Use',
    intro: 'These terms describe how the information on this website should be read.',
    sections: [
      {
        heading: 'Programs and applications',
        body:
          'TechBloom Labs operates structured research, internship, and engineering programs. TechBloom Labs does not operate subscriptions, memberships, or recurring plans. All participation details are reviewed through formal application.'
      },
      {
        heading: 'Project concepts',
        body:
          'Projects listed on this site are concepts available to work on through TechBloom Labs. They are not deployed commercial products, and descriptions make no claim of medical, veterinary or regulatory efficacy.'
      },
      {
        heading: 'Team and mentors',
        body:
          'Advisor and mentor profiles reflect verified academic and industry appointments. Names, institutions, and affiliations are published in accordance with verified institutional records.'
      },
      {
        heading: 'Interface previews',
        body:
          'Application tracking, dashboards and ticket references illustrate how the product behaves. They are not connected to live data on this site.'
      }
    ]
  }
};

/**
 * Placeholder legal pages so no footer link is dead. Content is deliberately
 * factual about this build and marked as needing review before publication.
 */
export default function LegalPage({ kind = 'privacy' }) {
  const content = CONTENT[kind] || CONTENT.privacy;

  useEffect(() => {
    document.title = `${content.title} — ${companyName}`;
    return () => {
      document.title = 'TechBloom Labs — Where Learning Meets Opportunity';
    };
  }, [content.title]);

  return (
    <>
      <Section tone="sunk" size="default" className="page-head">
        <PageContainer width="tight">
          <Reveal as="p" className="t-label" variant="fade">
            Legal
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            {content.title}
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            {content.intro}
          </Reveal>
        </PageContainer>
      </Section>

      <Section size="default">
        <PageContainer width="tight">
          <p className="note">
            <Info size={18} />
            <span>
              <strong>Draft for review.</strong> This wording describes how the current website
              behaves. It has not been reviewed by a legal advisor and should be replaced with
              approved policy text before publication.
            </span>
          </p>

          <div className="legal">
            {content.sections.map((section) => (
              <Reveal className="legal__block" key={section.heading}>
                <h2 className="t-h3">{section.heading}</h2>
                <p className="t-body">{section.body}</p>
              </Reveal>
            ))}

            <Reveal className="legal__block">
              <h2 className="t-h3">Contact</h2>
              <address className="t-body">
                {companyName}
                <br />
                {address.street}
                <br />
                {address.city}
                <br />
                {address.region}
              </address>
            </Reveal>
          </div>

          <div className="actions">
            <Button to="/" variant="secondary" arrow>
              Back to home
            </Button>
            <Button to="/contact">Contact TechBloom Labs</Button>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Contact from '../components/contact/Contact.jsx';
import Reveal from '../components/common/Reveal.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import Section from '../components/layout/Section.jsx';
import { INTEREST_OPTIONS } from '../components/contact/ContactForm.jsx';
import { companyName, tagline } from '../data/company.js';
import { readIntent } from '../utils/navigation.js';

/**
 * Dedicated contact route.
 * Supports query parameters:
 * ?interest=... or ?intent=... to preselect the inquiry category.
 * ?program=... or ?project=... to carry context into the message.
 */
export default function ContactPage() {
  const { search } = useLocation();

  const { interest, context } = useMemo(() => {
    const params = new URLSearchParams(search);
    const param = readIntent(search).toLowerCase();

    const typeParam = (params.get('type') || '').toLowerCase();
    let careerInterest = '';
    if (typeParam === 'internship') careerInterest = 'Internship';
    else if (typeParam === 'job') careerInterest = 'Job';
    else if (typeParam === 'general' || typeParam === 'career') careerInterest = 'General Inquiry';

    // Flexible matching: check slug, exact value, or partial match (e.g. 'agriculture' -> 'Agriculture Project')
    const match =
      INTEREST_OPTIONS.find((option) => option.slug === param) ||
      INTEREST_OPTIONS.find((option) => option.value.toLowerCase() === param) ||
      INTEREST_OPTIONS.find((option) => param && option.slug.includes(param)) ||
      INTEREST_OPTIONS.find((option) => param && option.value.toLowerCase().includes(param));

    return {
      interest: careerInterest || match?.value || '',
      context: params.get('program') || params.get('project') || ''
    };
  }, [search]);

  useEffect(() => {
    document.title = `Contact: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section tone="sunk" className="page-head" size="default">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            {tagline}
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Let&rsquo;s Work Together.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            Have an inquiry about technology solutions, software engineering, enterprise partnerships,
            or research collaboration? Reach out directly using the form below.
          </Reveal>
        </PageContainer>
      </Section>

      <Contact initialInterest={interest} contextNote={context} />
    </>
  );
}

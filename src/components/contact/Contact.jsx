import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import ContactForm, { INTEREST_OPTIONS } from './ContactForm.jsx';
import { Mail, Phone, Pin } from '../../assets/icons/index.jsx';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  address,
  companyName,
  leadership
} from '../../data/company.js';

const QUICK_INTENTS = ['technology-project', 'software-development', 'research-project', 'partnership', 'general-inquiry'];

/**
 * Contact section.
 *
 * On the home page (`compact`) it presents the company detail and routes to the
 * dedicated page. On /contact it renders the full form alongside the details.
 */
export default function Contact({ compact = false, initialInterest = '', contextNote = '' }) {
  const quick = INTEREST_OPTIONS.filter((option) => QUICK_INTENTS.includes(option.slug));

  return (
    <Section id="contact" tone="paper" size="lg" ruled={compact} labelledBy="contact-title">
      <PageContainer>
        <SectionHeading
          number={compact ? '16' : '01'}
          eyebrow="Contact"
          id="contact-title"
          titleNode={
            <>
              Let&rsquo;s build the next <em>opportunity</em> together.
            </>
          }
          lead={
            compact
              ? 'Tell us about your project, technology requirements, or partnership goals. Our engineering and advisory team will connect with you promptly.'
              : 'Connect with our team to discuss custom technology development, applied AI solutions, enterprise architectures, or technical partnerships.'
          }
        />

        <div className={`contact${compact ? ' contact--compact' : ''}`}>
          <div className="contact__panel">
            <Reveal className="contact__block">
              <p className="t-label">Registered office</p>
              <p className="contact__company t-h3">{companyName}</p>
              <address className="contact__address t-body">
                <Pin size={17} />
                <span>
                  {address.street}
                  <br />
                  {address.city}
                  <br />
                  {address.region}
                </span>
              </address>
            </Reveal>

            <Reveal className="contact__block" delay={80}>
              <p className="t-label">Leadership</p>
              <dl className="contact__leaders">
                {leadership.map((person) => (
                  <div key={person.name}>
                    <dt className="t-sm">{person.role}</dt>
                    <dd className="t-h4">{person.name}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="contact__block" delay={140}>
              <p className="t-label">Reach us</p>
              <ul className="contact__channels">
                <li>
                  <Mail size={17} />
                  {CONTACT_EMAIL ? (
                    <a className="link" href={`mailto:${CONTACT_EMAIL}`}>
                      {CONTACT_EMAIL}
                    </a>
                  ) : (
                    <span className="t-sm">
                      Email address to be published. Use the form and it routes to the team once the
                      address is configured.
                    </span>
                  )}
                </li>
                {CONTACT_PHONE ? (
                  <li>
                    <Phone size={17} />
                    <a className="link" href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
                      {CONTACT_PHONE}
                    </a>
                  </li>
                ) : null}
              </ul>
            </Reveal>

            {compact ? (
              <Reveal className="contact__block" delay={200}>
                <p className="t-label">Start with</p>
                <ul className="cluster cluster--sm">
                  {quick.map((option) => (
                    <li key={option.slug}>
                      <Link className="chip" to={`/contact?intent=${option.slug}`}>
                        {option.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="actions">
                  <Button to="/contact" arrow>
                    Open the contact form
                  </Button>
                </div>
              </Reveal>
            ) : null}
          </div>

          {!compact ? (
            <div className="contact__form">
              <ContactForm initialInterest={initialInterest} contextNote={contextNote} />
            </div>
          ) : null}
        </div>
      </PageContainer>
    </Section>
  );
}

import Divider from '../common/Divider.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import Button from '../common/Button.jsx';
import { chiefAdvisorHead, chiefMarketingAdviser } from '../../data/company.js';
import { testimonials } from '../../data/testimonials.js';

/**
 * Leadership section on About page.
 * Displays Chief Advisor & Head and Chief Marketing Adviser with compact, refined cards.
 */
export default function Leadership() {
  return (
    <Section tone="sunk" size="default" id="leadership" labelledBy="leadership-title">
      <PageContainer>
        <SectionHeading
          number="01.2"
          eyebrow="Leadership"
          id="leadership-title"
          title="The People Behind TechBloom Labs"
          lead="TechBloom Labs is guided by distinguished academic leadership and strategic marketing advisory."
          aside={
            <Button to="/experts" arrow>
              Meet Our Team
            </Button>
          }
        />

        <Divider className="leaders__rule" />

        <div className="team-leadership-grid">
          {/* Profile 01: Prof. Dr. Himadri Nath Saha */}
          <Reveal className="team-lead-card">
            <div className="team-lead-card__media">
              <img
                src={chiefAdvisorHead.portrait}
                alt={chiefAdvisorHead.portraitAlt}
                className="team-lead-card__img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="team-lead-card__body">
              <span className="badge badge--open">{chiefAdvisorHead.role}</span>
              <h3 className="team-lead-card__name">{chiefAdvisorHead.name}</h3>
              <p className="team-lead-card__summary">{chiefAdvisorHead.summary}</p>
              <div className="team-lead-card__chips">
                <span className="chip chip--sm">Ph.D. in Engineering (Jadavpur Univ.)</span>
                <span className="chip chip--sm">Senior Member IEEE</span>
              </div>
            </div>
          </Reveal>

          {/* Profile 02: Prof. Bhabani Prasad Roy */}
          <Reveal className="team-lead-card" delay={100}>
            <div className="team-lead-card__media">
              <img
                src={chiefMarketingAdviser.portrait}
                alt={chiefMarketingAdviser.portraitAlt}
                className="team-lead-card__img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="team-lead-card__body">
              <span className="badge badge--open">{chiefMarketingAdviser.role}</span>
              <h3 className="team-lead-card__name">{chiefMarketingAdviser.name}</h3>
              <p className="team-lead-card__summary">{chiefMarketingAdviser.summary}</p>
              <div className="team-lead-card__chips">
                <span className="chip chip--sm">Chief Marketing Adviser</span>
                <span className="chip chip--sm">Strategic Advisory</span>
              </div>
            </div>
          </Reveal>
        </div>

        {testimonials.length > 0 && (
          <ul className="leaders__quotes" style={{ marginTop: 'var(--s-5)' }}>
            {testimonials.map((item) => (
              <li key={item.id}>
                <blockquote className="t-h3 t-serif">{item.quote}</blockquote>
                <p className="t-sm">
                  {item.name} — {item.role}
                  {item.affiliation ? `, ${item.affiliation}` : ''}
                </p>
              </li>
            ))}
          </ul>
        )}
      </PageContainer>
    </Section>
  );
}

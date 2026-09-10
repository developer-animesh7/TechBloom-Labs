import { Link } from 'react-router-dom';
import Section from '../layout/Section.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Reveal from '../common/Reveal.jsx';
import Button from '../common/Button.jsx';
import ArrowIcon from '../common/ArrowIcon.jsx';
import { chiefAdvisorHead, chiefMarketingAdviser } from '../../data/company.js';

/**
 * Compact Our Team Preview for the homepage.
 * Intentional, refined presentation featuring strictly the 2 leadership profiles:
 * Prof. Dr. Himadri Nath Saha (Chief Advisor & Head) and Prof. Bhabani Prasad Roy (Chief Marketing Adviser).
 */
export default function ExpertsPreview() {
  return (
    <Section tone="paper" size="lg" ruled labelledBy="team-preview-title">
      <PageContainer>
        <SectionHeading
          number="05"
          eyebrow="Our Team"
          id="team-preview-title"
          title="Leadership & Core Advisory"
          lead="Distinguished technical and research expertise, combined with strategic leadership, steering TechBloom Labs technology initiatives."
          aside={
            <Button to="/experts" arrow>
              Meet Our Team
            </Button>
          }
        />

        <div className="team-leadership-grid" style={{ marginTop: 'var(--s-5)' }}>
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
              <h3 className="team-lead-card__name">
                {chiefAdvisorHead.name}
              </h3>
              <p className="team-lead-card__summary">
                {chiefAdvisorHead.summary}
              </p>

              <div className="team-lead-card__chips">
                <span className="chip chip--sm">Ph.D. in Engineering (Jadavpur Univ.)</span>
                <span className="chip chip--sm">Senior Member IEEE</span>
                <span className="chip chip--sm">Fellow IEI & IETE</span>
              </div>

              <div style={{ marginTop: 'var(--s-3)' }}>
                <Link to="/experts" className="link link--subtle">
                  <span>View Full Profile</span>
                  <ArrowIcon size={14} />
                </Link>
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
              <h3 className="team-lead-card__name">
                {chiefMarketingAdviser.name}
              </h3>
              <p className="team-lead-card__summary">
                {chiefMarketingAdviser.summary}
              </p>

              <div className="team-lead-card__chips">
                <span className="chip chip--sm">Chief Marketing Adviser</span>
                <span className="chip chip--sm">Strategic Initiatives</span>
                <span className="chip chip--sm">Institutional Outreach</span>
              </div>

              <div style={{ marginTop: 'var(--s-3)' }}>
                <Link to="/experts" className="link link--subtle">
                  <span>View Profile</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--s-5)' }}>
          <Button to="/experts" variant="primary" arrow>
            Meet Our Team
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
}

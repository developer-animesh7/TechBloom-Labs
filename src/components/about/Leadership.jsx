import { Link } from 'react-router-dom';
import Divider from '../common/Divider.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import Button from '../common/Button.jsx';
import ArrowIcon from '../common/ArrowIcon.jsx';
import { chiefAdvisorHead, chiefMarketingAdviser, mentors } from '../../data/company.js';

/**
 * About page People section:
 * Renders senior leadership (Prof. Dr. Himadri Nath Saha & Prof. Bhabani Prasad Roy)
 * and Top World-Class Mentors (Avnish Kumar, Soummyo Priyo Chattopadhyay, Phillip G. Bradford)
 * with direct CTA to the complete Our Team page (/experts).
 *
 * NOTE: Sreyan Saha and Tanisha Saha are exclusively rendered on /experts and
 * are strictly omitted from the About page preview per project specification.
 */
export default function Leadership() {
  return (
    <Section tone="sunk" size="default" id="leadership" labelledBy="about-people-title">
      <PageContainer>
        <SectionHeading
          number="03"
          eyebrow="Our People"
          id="about-people-title"
          title="Leadership & Mentorship"
          lead="TechBloom Labs is guided by distinguished academic leadership and top world-class industry mentors."
          aside={
            <Button to="/experts" arrow>
              Meet Our Team
            </Button>
          }
        />

        <Divider className="leaders__rule" />

        {/* 1. Senior Leadership Subsection */}
        <div className="about-people-subhead">
          <h3 className="team-subhead__title">Leadership</h3>
          <span className="team-subhead__count">02 PROFILES</span>
        </div>

        <div className="team-leadership-grid" style={{ marginBottom: 'clamp(28px, 4vw, 44px)' }}>
          {/* Profile 01: Prof. Dr. Himadri Nath Saha */}
          <Reveal className="team-lead-card team-lead-card--himadri">
            <div className="team-lead-card__media">
              <img
                src={chiefAdvisorHead.portrait}
                alt={chiefAdvisorHead.portraitAlt}
                className="team-lead-card__img team-lead-card__img--himadri"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="team-lead-card__body">
              <span className="badge badge--open">{chiefAdvisorHead.role}</span>
              <h4 className="team-lead-card__name">{chiefAdvisorHead.name}</h4>
              <p className="team-lead-card__summary">{chiefAdvisorHead.summary}</p>
              <div className="team-lead-card__chips">
                <span className="chip chip--sm">Ph.D. in Engineering (Jadavpur Univ.)</span>
                <span className="chip chip--sm">Senior Member IEEE</span>
              </div>
              <div className="team-lead-card__cta">
                <Link to="/experts" className="link link--subtle">
                  <span>View Full Profile</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Profile 02: Prof. Bhabani Prasad Roy */}
          <Reveal className="team-lead-card team-lead-card--bhabani" delay={100}>
            <div className="team-lead-card__media">
              <img
                src={chiefMarketingAdviser.portrait}
                alt={chiefMarketingAdviser.portraitAlt}
                className="team-lead-card__img team-lead-card__img--bhabani"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="team-lead-card__body">
              <span className="badge badge--open">{chiefMarketingAdviser.role}</span>
              <h4 className="team-lead-card__name">{chiefMarketingAdviser.name}</h4>
              <p className="team-lead-card__summary">{chiefMarketingAdviser.summary}</p>
              <div className="team-lead-card__chips">
                <span className="chip chip--sm">Chief Marketing Adviser</span>
                <span className="chip chip--sm">Strategic Advisory</span>
              </div>
              <div className="team-lead-card__cta">
                <Link to="/experts" className="link link--subtle">
                  <span>View Full Profile</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. Mentors Subsection */}
        <div className="about-people-subhead" style={{ marginTop: 'clamp(24px, 3.5vw, 36px)' }}>
          <h3 className="team-subhead__title">Mentors</h3>
          <span className="team-subhead__count">{String(mentors.length).padStart(2, '0')} MENTORS</span>
        </div>

        <div className="mentors-grid" style={{ marginBottom: 'clamp(32px, 4.5vw, 48px)' }}>
          {mentors.map((mentor, idx) => (
            <Reveal className="mentor-card" key={mentor.id} delay={idx * 60}>
              <div className="mentor-card__header">
                <span className="mentor-card__num">{mentor.num}</span>
                <span className="badge badge--sm">Mentor</span>
              </div>
              <h4 className="mentor-card__name">
                {mentor.profileUrl || mentor.linkedin ? (
                  <a
                    href={mentor.profileUrl || mentor.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                    aria-label={`${mentor.name} profile (opens in a new tab)`}
                  >
                    {mentor.name}
                  </a>
                ) : (
                  mentor.name
                )}
              </h4>
              <p className="mentor-card__role">
                {mentor.affiliation && mentor.affiliation !== mentor.role
                  ? `${mentor.affiliation} · ${mentor.role}`
                  : mentor.role}
              </p>

              {mentor.profileUrl && (
                <a
                  href={mentor.profileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mentor-card__link"
                  aria-label={`${mentor.name} profile (opens in a new tab)`}
                >
                  <span>Profile</span>
                  <ArrowIcon size={12} />
                </a>
              )}
            </Reveal>
          ))}
        </div>

        {/* 3. Section CTA leading to full /experts page */}
        <div className="align-center" style={{ textAlign: 'center', marginTop: 'var(--s-5)' }}>
          <Button to="/experts" variant="primary" arrow>
            Meet Our Team
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
}

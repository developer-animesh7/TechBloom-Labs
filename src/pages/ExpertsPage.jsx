import { useEffect } from 'react';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import { chiefAdvisorHead, chiefMarketingAdviser, mentors, engineeringTeam, companyName } from '../data/company.js';
import { Award, Document, Check } from '../assets/icons/index.jsx';

/**
 * Our Team Page — Dedicated editorial presentation of TechBloom Labs team hierarchy:
 * 1. Leadership (Prof. Dr. Himadri Nath Saha & Prof. Bhabani Prasad Roy)
 * 2. Top World-Class Mentors (AWS, Deloitte Canada, Computer Science academia)
 * 3. Engineering Team (Clean, technical typographic presentation — NO photos)
 */
export default function ExpertsPage() {
  useEffect(() => {
    document.title = `Our Team — ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Page Header */}
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            TechBloom Labs
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Our <em>Team</em>.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            Guided by distinguished academic leadership, top world-class industry mentors, and a dedicated AI engineering team bridging foundational research and practical implementation.
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/contact" variant="primary" arrow>
              Connect With Our Team
            </Button>
            <Button to="/projects" variant="ghost">
              Explore Project Concepts
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      {/* 2. Main Team Section */}
      <Section tone="paper" size="lg" ruled labelledBy="team-main-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Our Team"
            id="team-main-title"
            title="People Shaping Real-World Innovation"
            lead="A structured hierarchy of executive advisory, elite industry mentorship, and core engineering talent."
          />

          {/* ================================================================
              SUBSECTION 1: LEADERSHIP
              ================================================================ */}
          <div style={{ marginTop: 'var(--s-6)' }}>
            <div className="team-subhead">
              <h2 className="team-subhead__title">Leadership</h2>
              <span className="team-subhead__count">02 PROFILES</span>
            </div>

            <div className="team-leadership-grid">
              {/* Profile 01: Prof. Dr. Himadri Nath Saha */}
              <article className="team-lead-card">
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
                    <span className="chip chip--sm">Fellow IEI & IETE</span>
                  </div>

                  {/* Concise Credential Details */}
                  <div style={{ marginTop: 'var(--s-3)', paddingTop: 'var(--s-3)', borderTop: '1px solid var(--line)' }}>
                    <ul className="expert-list">
                      <li>
                        <Check size={14} />
                        <span><strong>Academic:</strong> Head of Dept., Computer Science, SNEC, Calcutta Univ.</span>
                      </li>
                      <li>
                        <Award size={14} />
                        <span><strong>Honors:</strong> Infosys Gold Faculty Award, IEM Best Faculty Award</span>
                      </li>
                      <li>
                        <Document size={14} />
                        <span><strong>Publications:</strong> Author of Database Management System textbook</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              {/* Profile 02: Prof. Bhabani Prasad Roy */}
              <article className="team-lead-card">
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
                    <span className="chip chip--sm">Institutional Outreach</span>
                  </div>

                  <div style={{ marginTop: 'var(--s-3)', paddingTop: 'var(--s-3)', borderTop: '1px solid var(--line)' }}>
                    <ul className="expert-list">
                      <li>
                        <Check size={14} />
                        <span><strong>Scope:</strong> Market direction & institutional collaborations</span>
                      </li>
                      <li>
                        <Check size={14} />
                        <span><strong>Engagement:</strong> Academic governance and program strategy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* ================================================================
              SUBSECTION 2: TOP WORLD-CLASS MENTORS
              ================================================================ */}
          <div style={{ marginTop: 'var(--s-4)' }}>
            <div className="team-subhead">
              <h2 className="team-subhead__title">Top World-Class Mentors</h2>
              <span className="team-subhead__count">03 MENTORS</span>
            </div>

            <div className="mentors-grid">
              {mentors.map((mentor) => (
                <div className="mentor-card" key={mentor.id}>
                  <div className="mentor-card__header">
                    <span className="mentor-card__num">{mentor.num}</span>
                    <span className="badge badge--sm">Mentor</span>
                  </div>
                  <h3 className="mentor-card__name">{mentor.name}</h3>
                  <p className="mentor-card__role">{mentor.role}</p>

                  {mentor.linkedin && (
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mentor-card__link"
                      aria-label={`${mentor.name} LinkedIn profile (opens in a new tab)`}
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowIcon size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================================================================
              SUBSECTION 3: ENGINEERING TEAM (NO PHOTOS)
              ================================================================ */}
          <div style={{ marginTop: 'var(--s-4)' }}>
            <div className="team-subhead">
              <h2 className="team-subhead__title">Engineering Team</h2>
              <span className="team-subhead__count">03 ENGINEERS</span>
            </div>

            <div className="engineering-grid">
              {engineeringTeam.map((member) => (
                <div className="engineer-card" key={member.id}>
                  <div className="engineer-card__head">
                    <div className="engineer-card__badge" aria-hidden="true">
                      {member.initials}
                    </div>
                    <span className="engineer-card__index">{member.num}</span>
                  </div>
                  <h3 className="engineer-card__name">{member.name}</h3>
                  <p className="engineer-card__role">{member.role}</p>
                  <span className="engineer-card__domain">{member.domain}</span>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </Section>

      {/* 3. Collaboration CTA */}
      <Section tone="sunk" size="default" ruled>
        <PageContainer>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <Reveal as="h2" className="t-h2">
              Collaborate With Our Team
            </Reveal>
            <Reveal as="p" className="t-lead" delay={80}>
              Whether you are an institution seeking research guidance, a domain specialist interested in mentorship, or an engineer building systems, connect with TechBloom Labs.
            </Reveal>
            <Reveal className="actions" delay={120} style={{ justifyContent: 'center', marginTop: 'var(--s-4)' }}>
              <Button to="/contact" variant="primary" arrow>
                Contact Our Team
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

import { useEffect, useState } from 'react';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import MentorCard from '../components/team/MentorCard.jsx';
import EngineerCard from '../components/team/EngineerCard.jsx';
import TeamModal from '../components/team/TeamModal.jsx';
import {
  mentors,
  engineeringTeam,
  companyName,
  CONTACT_EMAIL
} from '../data/company.js';

/**
 * Our Team Page (/experts)
 * Exact two-section layout:
 * 1. Our Mentors (6 mentors in 2 rows x 3 cards)
 * 2. Our Leadership & Engineering Team (6 members in 2 rows x 3 cards)
 */
export default function ExpertsPage() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    document.title = `Our Team: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  const formattedMentors = mentors.map((m) => ({
    ...m,
    category: 'Mentor'
  }));

  const formattedTeam = engineeringTeam.map((e) => ({
    ...e,
    category: 'Leadership & Engineering Team'
  }));

  return (
    <div className="team-page">
      {/* ====================================================================
          1. HERO / INTRODUCTION
          ==================================================================== */}
      <header className="team-hero" aria-labelledby="team-hero-title">
        <div className="team-hero__inner">
          <Reveal>
            <div className="team-hero__kicker">
              <span className="team-hero__pulse" aria-hidden="true" />
              <span>People Behind the Vision</span>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="team-hero__title" id="team-hero-title">
              Our <em>Team</em>.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="team-hero__lead">
              A multidisciplinary directory of distinguished academic leadership, elite industry mentors, and specialized AI engineers collaborating to solve meaningful real-world challenges.
            </p>
          </Reveal>

          <Reveal className="team-hero__actions" delay={180}>
            <Button
              variant="primary"
              arrow
              onClick={() => {
                document.getElementById('mentors')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Mentors
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                document.getElementById('leadership-engineering')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Leadership & Engineering
            </Button>
          </Reveal>
        </div>
      </header>

      {/* ====================================================================
          2. SECTION 01: OUR MENTORS (6 Mentors, 3 Columns x 2 Rows)
          ==================================================================== */}
      <section className="team-section team-section--paper" id="mentors" aria-labelledby="team-mentors-title">
        <PageContainer>
          <div className="team-section__header">
            <div>
              <span className="team-section__kicker">01 / Guidance</span>
              <h2 className="team-section__title" id="team-mentors-title">Our Mentors</h2>
            </div>
            <div className="team-section__aside">
              <span className="team-section__count">{String(formattedMentors.length).padStart(2, '0')} Mentors</span>
              <span className="team-section__hint">Click any profile to view details</span>
            </div>
          </div>

          <div className="team-mentors-grid">
            {formattedMentors.map((mentor, idx) => (
              <Reveal key={mentor.id} delay={idx * 60}>
                <MentorCard
                  mentor={mentor}
                  onSelect={(p) => setSelectedPerson(p)}
                />
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          3. SECTION 02: OUR LEADERSHIP & ENGINEERING TEAM (6 Members, 3 Columns x 2 Rows)
          ==================================================================== */}
      <section className="team-section team-section--sunk" id="leadership-engineering" aria-labelledby="team-leadership-eng-title">
        <PageContainer>
          <div className="team-section__header">
            <div>
              <span className="team-section__kicker">02 / Execution</span>
              <h2 className="team-section__title" id="team-leadership-eng-title">Our Leadership & Engineering Team</h2>
            </div>
            <div className="team-section__aside">
              <span className="team-section__count">{String(formattedTeam.length).padStart(2, '0')} Members</span>
              <span className="team-section__hint">Turning research into scalable systems</span>
            </div>
          </div>

          <div className="team-engineers-grid">
            {formattedTeam.map((member, idx) => (
              <Reveal key={member.id} delay={idx * 60}>
                <EngineerCard
                  engineer={member}
                  onSelect={(p) => setSelectedPerson(p)}
                />
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          4. SECTION 03: COLLABORATION / CONTACT CTA
          ==================================================================== */}
      <section className="team-section team-section--paper" aria-labelledby="team-cta-title">
        <PageContainer>
          <div className="team-cta-box">
            <Reveal>
              <span className="team-cta-box__kicker">Build What Matters</span>
              <h2 className="team-cta-box__title" id="team-cta-title">
                Have an idea, research challenge, or technology opportunity?
              </h2>
              <p className="team-cta-box__lead">
                Let's build something meaningful. Connect directly with our team to discuss initiative roadmaps, guided project concepts, or research translation.
              </p>
            </Reveal>

            <Reveal className="team-cta-box__actions" delay={80}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn btn--primary"
                aria-label={`Email TechBloom Labs team at ${CONTACT_EMAIL}`}
              >
                <span>{CONTACT_EMAIL}</span>
                <ArrowIcon size={14} />
              </a>
              <Button to="/contact" variant="ghost">
                Discuss an Initiative
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Detail Modal */}
      {selectedPerson && (
        <TeamModal
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
        />
      )}
    </div>
  );
}

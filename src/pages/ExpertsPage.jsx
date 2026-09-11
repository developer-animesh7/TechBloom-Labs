import { useEffect, useState } from 'react';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import MentorCard from '../components/team/MentorCard.jsx';
import LeaderCard from '../components/team/LeaderCard.jsx';
import EngineerCard from '../components/team/EngineerCard.jsx';
import TeamModal from '../components/team/TeamModal.jsx';
import {
  chiefAdvisorHead,
  chiefMarketingAdviser,
  directorAI,
  directorWeb,
  mentors,
  engineeringTeam,
  companyName,
  CONTACT_EMAIL
} from '../data/company.js';

/**
 * Our Team Page (/experts)
 * Redesigned according to the structural hierarchy and information architecture
 * inspired by the reference:
 * 1. Introduction / Hero
 * 2. Section 01 / Guidance — Our Mentors (Large visual portrait cards)
 * 3. Section 02 / Leadership — Executive Leadership (Compact editorial profile cards)
 * 4. Section 03 / Execution — Core Engineering Team (Typographic execution cards)
 * 5. Section 04 / Collaboration CTA ("Build What Matters")
 *
 * Fully integrated with TechBloom Labs design tokens, colors, light/dark balance,
 * and strict verified data integrity.
 */
export default function ExpertsPage() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    document.title = `Our Team: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  // Formatted leadership team with chips and categories for modal/display
  const leadersList = [
    {
      ...chiefAdvisorHead,
      category: 'Senior Advisory',
      chips: ['Ph.D. in Engineering (Jadavpur Univ.)', 'Senior Member IEEE']
    },
    {
      ...chiefMarketingAdviser,
      category: 'Strategic Advisory',
      chips: ['Chief Marketing Adviser', 'Strategic Advisory']
    },
    {
      ...directorAI,
      category: 'Innovation Leadership',
      chips: ['DIRECTOR OF AI AND INNOVATION', 'AI Architecture']
    },
    {
      ...directorWeb,
      category: 'Engineering Leadership',
      chips: ['Director of Web Development', 'Web Architecture']
    }
  ];

  // Formatted mentors with categories
  const formattedMentors = mentors.map((m) => ({
    ...m,
    category: 'Mentor'
  }));

  // Formatted engineers with categories
  const formattedEngineers = engineeringTeam.map((e) => ({
    ...e,
    category: 'Engineering Team'
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
                document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Meet Leadership
            </Button>
          </Reveal>
        </div>
      </header>

      {/* ====================================================================
          2. SECTION 01: OUR MENTORS (LARGE VISUAL CARDS)
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
              <Reveal key={mentor.id} delay={idx * 80}>
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
          3. SECTION 02: LEADERSHIP (COMPACT EDITORIAL CARDS)
          ==================================================================== */}
      <section className="team-section team-section--sunk" id="leadership" aria-labelledby="team-leadership-title">
        <PageContainer>
          <div className="team-section__header">
            <div>
              <span className="team-section__kicker">02 / Leadership</span>
              <h2 className="team-section__title" id="team-leadership-title">Our Leadership</h2>
            </div>
            <div className="team-section__aside">
              <span className="team-section__count">04 Profiles</span>
              <span className="team-section__hint">Strategy · Innovation · Growth · Technology</span>
            </div>
          </div>

          <div className="team-leaders-grid">
            {leadersList.map((leader, idx) => (
              <Reveal key={leader.name} delay={idx * 60}>
                <LeaderCard
                  leader={leader}
                  index={idx}
                  onSelect={(p) => setSelectedPerson(p)}
                />
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          4. SECTION 03: ENGINEERING TEAM (EXECUTION PANEL)
          ==================================================================== */}
      <section className="team-section team-section--paper" id="engineering" aria-labelledby="team-engineers-title">
        <PageContainer>
          <div className="team-section__header">
            <div>
              <span className="team-section__kicker">03 / Execution</span>
              <h2 className="team-section__title" id="team-engineers-title">Our Engineering Team</h2>
            </div>
            <div className="team-section__aside">
              <span className="team-section__count">03 Profiles</span>
              <span className="team-section__hint">Turning research into scalable systems</span>
            </div>
          </div>

          <div className="team-engineering-panel">
            <div className="team-engineers-grid">
              {formattedEngineers.map((engineer, idx) => (
                <Reveal key={engineer.id} delay={idx * 70}>
                  <EngineerCard
                    engineer={engineer}
                    onSelect={(p) => setSelectedPerson(p)}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          5. SECTION 04: COLLABORATION / CONTACT CTA
          ==================================================================== */}
      <section className="team-section team-section--sunk" aria-labelledby="team-cta-title">
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

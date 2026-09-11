import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import CareersHeroVisual from '../components/careers/CareersHeroVisual.jsx';
import { companyName } from '../data/company.js';

export default function CareersPage() {
  useEffect(() => {
    document.title = `Careers: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  const scrollToOpportunities = (e) => {
    e.preventDefault();
    document.getElementById('opportunities-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhyJoin = (e) => {
    e.preventDefault();
    document.getElementById('why-join-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whyJoinCards = [
    {
      num: '01',
      title: 'Build Real Products',
      body: 'Work on technology that is designed around meaningful real-world problems and enterprise systems.'
    },
    {
      num: '02',
      title: 'Learn Through Engineering',
      body: 'Develop practical capabilities by working across software, AI, cloud, data, and product engineering.'
    },
    {
      num: '03',
      title: 'Research Meets Industry',
      body: 'Explore ideas where scientific research becomes useful technology, scalable products, and real impact.'
    },
    {
      num: '04',
      title: 'Work Across Disciplines',
      body: 'Collaborate across engineering, AI architectures, research methodologies, and product thinking.'
    },
    {
      num: '05',
      title: 'Grow With Responsibility',
      body: 'Take ownership, contribute architectural ideas, and grow through meaningful technical work.'
    }
  ];

  const capabilityAreas = [
    { num: '01', label: 'Software Engineering' },
    { num: '02', label: 'AI & Machine Learning' },
    { num: '03', label: 'Data & Analytics' },
    { num: '04', label: 'Cloud Engineering' },
    { num: '05', label: 'Cybersecurity' },
    { num: '06', label: 'Product Engineering' },
    { num: '07', label: 'Research & Innovation' },
    { num: '08', label: 'Web Development' },
    { num: '09', label: 'Digital Transformation' }
  ];

  const lookingForQualities = [
    {
      num: '01',
      title: 'Curiosity & First Principles',
      body: 'Driven to understand complex technical systems from first principles rather than repeating recipes.'
    },
    {
      num: '02',
      title: 'Analytical Problem Solving',
      body: 'Methodical approach to breaking down engineering challenges, edge cases, and system dynamics.'
    },
    {
      num: '03',
      title: 'Technical Ownership',
      body: 'Commitment to high quality, readable code, architectural discipline, and maintainable software.'
    },
    {
      num: '04',
      title: 'Willingness to Learn',
      body: 'Eager to absorb new domain knowledge, emerging frameworks, tools, and cross-disciplinary concepts.'
    },
    {
      num: '05',
      title: 'Thoughtful Communication',
      body: 'Clear articulation of technical ideas, code trade-offs, architecture decisions, and design intent.'
    },
    {
      num: '06',
      title: 'Collaborative Mindset',
      body: 'Thriving in multidisciplinary teams across research, software engineering, and product delivery.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Choose an Opportunity',
      body: 'Select an internship, job pathway, or open career inquiry based on your skills and goals.'
    },
    {
      step: '02',
      title: 'Tell Us About Yourself',
      body: 'Share your background, technical interests, and experience through our simple application form.'
    },
    {
      step: '03',
      title: 'Start the Conversation',
      body: 'Our engineering team reviews your profile and reaches out directly to discuss potential pathways.'
    }
  ];

  return (
    <div className="careers-page">
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section className="careers-hero" aria-label="Careers Hero">
        <PageContainer>
          <div className="careers-hero__grid">
            <Reveal className="careers-hero__copy">
              <div className="careers-hero__kicker">
                <span className="careers-hero__pulse" />
                <span>CAREERS AT TECHBLOOM LABS</span>
              </div>
              <h1 className="careers-hero__title">
                Build <em>What Matters.</em>
              </h1>
              <p className="careers-hero__lead">
                Join TechBloom Labs to work across software engineering, applied AI, cloud, data, cybersecurity, product development, and research-driven technology.
              </p>
              <div className="careers-hero__actions">
                <a href="#opportunities-section" onClick={scrollToOpportunities} className="btn btn--primary">
                  <span>Explore Opportunities</span>
                  <ArrowIcon size={14} />
                </a>
                <a href="#why-join-section" onClick={scrollToWhyJoin} className="btn btn--ghost">
                  <span>Why Join Us</span>
                </a>
              </div>
            </Reveal>

            <Reveal className="careers-hero__visual-col" delay={120}>
              <CareersHeroVisual />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          2. SECTION 01: WHY JOIN US
          ==================================================================== */}
      <section id="why-join-section" className="careers-section careers-section--paper" aria-labelledby="why-title">
        <PageContainer>
          <div className="careers-section__header">
            <span className="careers-section__kicker">01 / Value & Culture</span>
            <h2 className="careers-section__title" id="why-title">Why Join Us</h2>
            <p className="careers-section__lead">
              We build technology that solves real-world challenges. Here is what defines our engineering culture.
            </p>
          </div>

          <div className="careers-why-grid-container">
            <div className="careers-why-row-top">
              {whyJoinCards.slice(0, 3).map((item, idx) => (
                <Reveal key={item.num} delay={idx * 60}>
                  <div className="careers-why-card">
                    <span className="careers-why-card__num">{item.num}</span>
                    <h3 className="careers-why-card__title">{item.title}</h3>
                    <p className="careers-why-card__body">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="careers-why-row-bottom">
              {whyJoinCards.slice(3).map((item, idx) => (
                <Reveal key={item.num} delay={(idx + 3) * 60}>
                  <div className="careers-why-card">
                    <span className="careers-why-card__num">{item.num}</span>
                    <h3 className="careers-why-card__title">{item.title}</h3>
                    <p className="careers-why-card__body">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          3. SECTION 02: PATHWAYS & OPPORTUNITIES
          ==================================================================== */}
      <section id="opportunities-section" className="careers-section careers-section--sunk" aria-labelledby="opp-title">
        <PageContainer>
          <div className="careers-section__header">
            <span className="careers-section__kicker">02 / Pathways</span>
            <h2 className="careers-section__title" id="opp-title">Explore Opportunities</h2>
            <p className="careers-section__lead">
              Discover pathways to contribute across engineering, applied AI, software development, and research initiatives.
            </p>
          </div>

          <div className="careers-opp-grid">
            {/* Internship Card */}
            <Reveal delay={60}>
              <div className="careers-opp-card">
                <div className="careers-opp-card__top">
                  <span className="badge badge--sm">INTERNSHIP</span>
                </div>
                <h3 className="careers-opp-card__title">Internship Opportunities</h3>
                <p className="careers-opp-card__body">
                  Explore practical opportunities to work on technology, AI, software, research, and product-focused initiatives.
                </p>
                <div className="careers-opp-card__foot">
                  <Link to="/contact?type=internship" className="btn btn--primary">
                    <span>Apply for Internship</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Job Opportunities Card */}
            <Reveal delay={120}>
              <div className="careers-opp-card">
                <div className="careers-opp-card__top">
                  <span className="badge badge--sm">FULL-TIME & ROLE-BASED</span>
                </div>
                <h3 className="careers-opp-card__title">Job Opportunities</h3>
                <p className="careers-opp-card__body">
                  Explore opportunities to contribute to software engineering, AI, cloud, data, cybersecurity, product development, and technology initiatives.
                </p>
                <div className="careers-opp-card__foot">
                  <Link to="/contact?type=job" className="btn btn--primary">
                    <span>Apply for a Job</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Open Application Box */}
          <Reveal delay={180}>
            <div className="careers-open-box">
              <div className="careers-open-box__text">
                <span className="careers-section__kicker" style={{ marginBottom: 4 }}>03 / OPEN APPLICATION</span>
                <h3 className="careers-open-box__title">Don't see the right opportunity?</h3>
                <p className="careers-open-box__body">
                  We welcome thoughtful applications from people who believe they can contribute meaningfully to what we are building.
                </p>
              </div>
              <div className="careers-open-box__action">
                <Link to="/contact?type=general" className="btn btn--ghost">
                  <span>Start a Conversation</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* ====================================================================
          4. SECTION 03: AREAS OF OPPORTUNITY (CAPABILITIES)
          ==================================================================== */}
      <section className="careers-section careers-section--paper" aria-labelledby="areas-title">
        <PageContainer>
          <div className="careers-section__header">
            <span className="careers-section__kicker">04 / Capabilities</span>
            <h2 className="careers-section__title" id="areas-title">Where You Can Contribute</h2>
            <p className="careers-section__lead">
              Our engineering initiatives span multiple technical domains. Opportunities may vary by project, team needs, and availability.
            </p>
          </div>

          <div className="careers-areas-grid">
            {capabilityAreas.map((item, idx) => (
              <Reveal key={item.label} delay={idx * 30}>
                <div className="careers-area-tile">
                  <div className="careers-area-tile__left">
                    <span className="careers-area-tile__num">{item.num}</span>
                    <span className="careers-area-tile__label">{item.label}</span>
                  </div>
                  <span className="careers-area-tile__arrow">
                    <ArrowIcon size={12} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          5. SECTION 04: WHO WE'RE LOOKING FOR
          ==================================================================== */}
      <section className="careers-section careers-section--sunk" aria-labelledby="looking-title">
        <PageContainer>
          <div className="careers-section__header">
            <span className="careers-section__kicker">05 / Qualities</span>
            <h2 className="careers-section__title" id="looking-title">Who We’re Looking For</h2>
            <p className="careers-section__lead">
              We value individuals who combine technical discipline with curiosity, ownership, and a desire to build software that scales.
            </p>
          </div>

          <div className="careers-qualities-grid">
            {lookingForQualities.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 40}>
                <div className="careers-quality-card">
                  <span className="careers-quality-card__num">{item.num}</span>
                  <h3 className="careers-quality-card__title">{item.title}</h3>
                  <p className="careers-quality-card__body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          6. SECTION 05: APPLICATION PROCESS
          ==================================================================== */}
      <section className="careers-section careers-section--paper" aria-labelledby="process-title">
        <PageContainer>
          <div className="careers-section__header">
            <span className="careers-section__kicker">06 / Process</span>
            <h2 className="careers-section__title" id="process-title">Application Process</h2>
            <p className="careers-section__lead">
              A straightforward process designed to connect you directly with our engineering and product teams.
            </p>
          </div>

          <div className="careers-process-grid">
            {steps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 80}>
                <div className="careers-process-card">
                  <span className="careers-process-card__step">{item.step}</span>
                  <h3 className="careers-process-card__title">{item.title}</h3>
                  <p className="careers-process-card__body">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ====================================================================
          7. FOOTER CTA SECTION
          ==================================================================== */}
      <section className="careers-section careers-section--paper" aria-labelledby="careers-cta-title">
        <PageContainer>
          <div className="careers-cta-box">
            <Reveal>
              <span className="careers-cta-box__kicker">Take the Next Step</span>
              <h2 className="careers-cta-box__title" id="careers-cta-title">
                Let's Build What Matters.
              </h2>
              <p className="careers-cta-box__lead">
                Tell us what you can contribute and where you want to grow. Connect directly with our team to start a conversation.
              </p>
            </Reveal>

            <Reveal className="careers-cta-box__actions" delay={80}>
              <a href="#opportunities-section" onClick={scrollToOpportunities} className="btn btn--primary">
                <span>Explore Opportunities</span>
                <ArrowIcon size={14} />
              </a>
              <Link to="/contact?type=general" className="btn btn--ghost">
                <span>Start a Conversation</span>
              </Link>
            </Reveal>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

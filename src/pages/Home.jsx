import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/hero/Hero.jsx';
import JourneySteps from '../components/hero/JourneySteps.jsx';
import BrandManifesto from '../components/home/BrandManifesto.jsx';
import TrustStrip from '../components/ecosystem/TrustStrip.jsx';
import FeaturedProjectsPreview from '../components/home/FeaturedProjectsPreview.jsx';
import ExpertsPreview from '../components/home/ExpertsPreview.jsx';
import FinalCTA from '../components/cta/FinalCTA.jsx';

import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import ImageReveal from '../components/common/ImageReveal.jsx';

import { aboutIntro, mission, vision, companyName, tagline } from '../data/company.js';
import { services } from '../data/services.js';

/**
 * Homepage — Curated Editorial Overview of TechBloom Labs.
 * Features concise previews with direct navigation to dedicated pages.
 */
export default function Home() {
  useEffect(() => {
    document.title = 'TechBloom Labs: Where Learning Meets Opportunity';
    window.scrollTo(0, 0);
  }, []);

  // Show 3-4 highlighted service categories on the homepage
  const previewServices = services.slice(0, 4);

  return (
    <>
      {/* 1. Hero & Journey Steps */}
      <Hero>
        <JourneySteps />
      </Hero>

      {/* 2. Redesigned Signature Brand Manifesto */}
      <BrandManifesto />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. About Preview */}
      <Section tone="paper" size="lg" ruled labelledBy="about-preview-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="About TechBloom Labs"
            id="about-preview-title"
            titleNode={
              <>
                Where scientific research translates into <em>scalable</em> technology.
              </>
            }
            lead={aboutIntro}
            aside={
              <Button to="/about" arrow>
                Explore About
              </Button>
            }
          />

          <Divider className="about__rule" />

          <div className="about__body">
            <div className="about__media">
              <ImageReveal
                src="/images/about/about-main.svg"
                alt="Applied engineering and research planning in practice"
                ratio="4x3"
                caption="Research & engineering in practice"
              />
            </div>

            <div className="about__statements">
              <Reveal className="about__statement">
                <p className="t-label">{mission.label}</p>
                <p className="t-h3">{mission.body}</p>
              </Reveal>

              <Reveal className="about__statement" delay={90}>
                <p className="t-label">{vision.label}</p>
                <p className="t-h3">{vision.body}</p>
              </Reveal>

              {/* Refined Technology & Applied Research Visual Card (Fills right-side empty space) */}
              <Reveal delay={120}>
                <div className="mission-framework-card">
                  <div className="mission-framework-card__image">
                    <img
                      src="/images/about/research-lab.svg"
                      alt="Research workstation, laboratory notebooks, and instrumentation"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <div className="mission-framework-card__points">
                    <div className="mission-framework-point">
                      <span className="mission-framework-point__num">01</span>
                      <span className="mission-framework-point__label">Scientific Research</span>
                    </div>
                    <div className="mission-framework-point">
                      <span className="mission-framework-point__num">02</span>
                      <span className="mission-framework-point__label">Applied Engineering</span>
                    </div>
                    <div className="mission-framework-point">
                      <span className="mission-framework-point__num">03</span>
                      <span className="mission-framework-point__label">Scalable Solutions</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div style={{ marginTop: 'var(--s-4)' }}>
                <Button to="/about" variant="secondary" arrow>
                  Explore About
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </Section>

      {/* 5. Services Preview */}
      <Section tone="sunk" size="lg" ruled labelledBy="services-preview-title">
        <PageContainer>
          <SectionHeading
            number="02"
            eyebrow="Core Services"
            id="services-preview-title"
            title="Specialized Engineering & Technology Solutions"
            lead="From agricultural data models and pharmaceutical workflows to enterprise software and applied AI, we translate research rigor into reliable real-world systems."
            aside={
              <Button to="/services" arrow>
                View All Services
              </Button>
            }
          />

          <Divider style={{ margin: 'var(--s-4) 0 var(--s-5)' }} />

          <div className="editorial-services">
            {previewServices.map((svc) => (
              <article key={svc.id} className="service-row">
                <div className="service-row__num">
                  <span>{svc.number}</span>
                </div>
                <div className="service-row__main">
                  <h3 className="service-row__title t-h3">{svc.title}</h3>
                  <p className="service-row__blurb t-body">{svc.blurb}</p>
                  <ul className="service-row__caps">
                    {svc.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="chip chip--sm">
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-row__action">
                  <Link to={`/contact?interest=${svc.intent}`} className="btn btn--sm btn--primary service-row__btn">
                    <span>Discuss Project</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--s-6)' }}>
            <Button to="/services" variant="primary" arrow>
              View All Services
            </Button>
          </div>
        </PageContainer>
      </Section>

      {/* 6. Selected Projects Preview (2-3 compact cards) */}
      <FeaturedProjectsPreview />

      {/* 7. Experts Preview (3-4 compact verified cards) */}
      <ExpertsPreview />

      {/* 8. Final Call to Action */}
      <FinalCTA />
    </>
  );
}

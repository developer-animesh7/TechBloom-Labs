import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/layout/Section.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Reveal from '../components/common/Reveal.jsx';
import Divider from '../components/common/Divider.jsx';
import Button from '../components/common/Button.jsx';
import ArrowIcon from '../components/common/ArrowIcon.jsx';
import { services, servicesProcess, servicesIntro } from '../data/services.js';
import { companyName, tagline } from '../data/company.js';

export default function ServicesPage() {

  useEffect(() => {
    document.title = `Services: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Section tone="sunk" className="page-head" size="lg">
        <PageContainer>
          <Reveal as="p" className="t-label" variant="fade">
            Capabilities & Domain Solutions
          </Reveal>
          <Reveal as="h1" className="t-h1 page-head__title">
            Where Research Meets <em>Real-World</em> Innovation.
          </Reveal>
          <Reveal as="p" className="t-lead" delay={80}>
            {servicesIntro}
          </Reveal>
          <Reveal className="actions" delay={120}>
            <Button to="/contact?interest=technology-project" variant="primary" arrow>
              Discuss a Project
            </Button>
            <Button to="/projects" variant="ghost">
              Browse Our Products
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      {/* Editorial Service Rows */}
      <Section tone="paper" size="lg" ruled labelledBy="services-list-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Specialized Capabilities"
            id="services-list-title"
            title="Strategic Engineering & Advisory Practices"
            lead="Explore our core service practices. Each capability combines deep domain expertise with structured execution to solve complex organizational challenges."
          />

          <Divider className="services__rule" />

          <div className="editorial-services">
            {services.map((svc) => (
              <article
                key={svc.id}
                className="service-card"
              >
                <div className="service-card__top">
                  <div className="service-card__number-badge">
                    <span className="service-card__num">{svc.number}</span>
                    <span className="service-card__tag">Service</span>
                  </div>
                  <span className="service-card__pulse" aria-hidden="true" />
                </div>

                <h2 className="service-card__title">
                  {svc.title}
                </h2>

                <div className="service-card__desc">
                  {svc.lines.map((line, idx) => (
                    <p key={idx} className="service-card__line">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="service-card__cta">
                  <Link
                    to={`/contact?interest=${svc.intent}`}
                    className="btn btn--sm btn--primary service-card__btn"
                  >
                    <span>Discuss a Project</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* 5-Step Process */}
      <Section tone="sunk" size="lg" ruled labelledBy="process-title">
        <PageContainer>
          <SectionHeading
            number="02"
            eyebrow="Delivery Model"
            id="process-title"
            title="How TechBloom Labs Delivers"
            lead="From problem formulation through architectural design, engineering development, and scalable deployment."
          />

          <Divider />

          <div className="process-timeline">
            {servicesProcess.map((proc, index) => (
              <Reveal
                key={proc.step}
                className="process-timeline__item"
                delay={index * 60}
              >
                <div className="process-timeline__badge">
                  <span>{proc.step}</span>
                </div>
                <h3 className="process-timeline__heading t-h4">
                  {proc.title}
                </h3>
                <p className="process-timeline__body t-sm">
                  {proc.body}
                </p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Final Services CTA */}
      <Section tone="paper" size="default" ruled>
        <PageContainer>
          <div className="services-cta-banner">
            <Reveal as="p" className="t-label">
              Custom Engineering & Research Partnerships
            </Reveal>
            <Reveal as="h2" className="t-h2" delay={60}>
              Have a Project in Mind?
            </Reveal>
            <Reveal as="p" className="t-lead" delay={100}>
              Connect with our team to discuss project requirements, research scopes, and technical architecture.
            </Reveal>
            <Reveal className="actions" delay={140}>
              <Button to="/contact?interest=technology-project" variant="primary" arrow>
                Start a Conversation
              </Button>
            </Reveal>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}

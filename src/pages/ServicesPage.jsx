import { useEffect, useState } from 'react';
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
  const [activeRow, setActiveRow] = useState(null);

  useEffect(() => {
    document.title = `Services — ${companyName}`;
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
              Browse Project Concepts
            </Button>
          </Reveal>
        </PageContainer>
      </Section>

      {/* Editorial Service Rows */}
      <Section tone="paper" size="lg" ruled labelledBy="services-list-title">
        <PageContainer>
          <SectionHeading
            number="01"
            eyebrow="Specialized Domains"
            id="services-list-title"
            title="Ten Engineering & Research Practices"
            lead="Explore our domain-specific capabilities. Each practice pairs technical rigor with clear operational workflows."
          />

          <Divider className="services__rule" />

          <div className="editorial-services">
            {services.map((svc, index) => {
              const isHovered = activeRow === svc.id;
              return (
                <article
                  key={svc.id}
                  className={`service-row${isHovered ? ' is-hovered' : ''}`}
                  onMouseEnter={() => setActiveRow(svc.id)}
                  onMouseLeave={() => setActiveRow(null)}
                >
                  <div className="service-row__num">
                    <span>{svc.number}</span>
                  </div>

                  <div className="service-row__main">
                    <h2 className="service-row__title t-h3">
                      {svc.title}
                    </h2>
                    <p className="service-row__blurb t-body">
                      {svc.blurb}
                    </p>

                    {svc.disclaimer && (
                      <p className="service-row__disclaimer t-xs">
                        * {svc.disclaimer}
                      </p>
                    )}

                    <ul className="service-row__caps">
                      {svc.capabilities.map((cap) => (
                        <li key={cap} className="chip chip--sm">
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-row__action">
                    <Link
                      to={`/contact?interest=${svc.intent}`}
                      className="btn btn--sm btn--primary service-row__btn"
                    >
                      <span>Discuss a Project</span>
                      <ArrowIcon size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
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
            lead="From problem formulation through architectural design and mentor-guided development."
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

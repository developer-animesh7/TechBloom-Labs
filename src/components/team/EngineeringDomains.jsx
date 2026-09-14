import { useState } from 'react';
import Reveal from '../common/Reveal.jsx';

/**
 * Domain-specific technical SVG icons.
 * Crisp, clean, minimal, without emojis or stock illustrations.
 */
function DomainIcon({ id, size = 20 }) {
  switch (id) {
    case 'domain-web-app':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="20" height="18" rx="3" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="10" cy="6" r="1" fill="currentColor" />
          <line x1="7" y1="14" x2="17" y2="14" />
          <line x1="7" y1="17" x2="13" y2="17" />
        </svg>
      );

    case 'domain-software-dev':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );

    case 'domain-cybersecurity':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="2.2" />
          <path d="M12 13.2v3.3" />
        </svg>
      );

    case 'domain-ai-innovation':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="4.5" r="2.5" />
          <circle cx="4.5" cy="18" r="2.5" />
          <circle cx="19.5" cy="18" r="2.5" />
          <circle cx="12" cy="12.5" r="2" />
          <line x1="12" y1="7" x2="12" y2="10.5" />
          <line x1="6.5" y1="16.3" x2="10.3" y2="13.7" />
          <line x1="17.5" y1="16.3" x2="13.7" y2="13.7" />
        </svg>
      );

    case 'domain-robotics-iot':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <circle cx="9" cy="9.5" r="1.5" fill="currentColor" />
          <circle cx="15" cy="9.5" r="1.5" fill="currentColor" />
          <path d="M8.5 15h7" />
          <line x1="12" y1="1" x2="12" y2="4" />
          <circle cx="12" cy="1" r="1" fill="currentColor" />
          <line x1="1" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="23" y2="12" />
        </svg>
      );

    default:
      return null;
  }
}

/**
 * Interactive domain row representing an engineering discipline.
 * Smoothly reveals assigned team members on click.
 */
function DomainRow({ domain, isOpen, onToggle }) {
  const panelId = `domain-panel-${domain.id}`;
  const headerId = `domain-header-${domain.id}`;

  return (
    <article className={`eng-domain-row ${isOpen ? 'eng-domain-row--open' : ''}`}>
      <button
        type="button"
        id={headerId}
        className="eng-domain-row__header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${domain.title} discipline: click to ${isOpen ? 'collapse' : 'reveal'} ${domain.members.length} team members`}
      >
        <div className="eng-domain-row__header-left">
          <span className="eng-domain-row__num" aria-hidden="true">
            {domain.num}
          </span>
          <span className="eng-domain-row__icon-wrap">
            <DomainIcon id={domain.id} size={20} />
          </span>
          <h3 className="eng-domain-row__title">{domain.title}</h3>
        </div>

        <div className="eng-domain-row__header-right">
          <span className="eng-domain-row__count" aria-hidden="true">
            {domain.members.length} {domain.members.length === 1 ? 'Specialist' : 'Engineers'}
          </span>
          <span className="eng-domain-row__toggle-badge" aria-hidden="true">
            <span className="eng-domain-row__glyph">{isOpen ? '−' : '+'}</span>
          </span>
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={`eng-domain-row__panel ${isOpen ? 'eng-domain-row__panel--open' : ''}`}
      >
        <div className="eng-domain-row__panel-inner">
          <div className="eng-domain-tree">
            <div className="eng-domain-tree__caption">
              <span className="eng-domain-tree__tag">Assigned Engineering Team</span>
            </div>
            <ul className="eng-domain-tree__list" role="list">
              {domain.members.map((name, idx) => {
                const isLast = idx === domain.members.length - 1;
                return (
                  <li key={name} className="eng-domain-tree__item">
                    <span className="eng-domain-tree__branch" aria-hidden="true">
                      {isLast ? '└──' : '├──'}
                    </span>
                    <span className="eng-domain-tree__node-dot" aria-hidden="true" />
                    <span className="eng-domain-tree__name">{name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * Development & Engineering Component
 * Replaces the conventional photo card grid with an interactive,
 * domain-based technical architecture layout + standalone People & Culture section.
 */
export default function EngineeringDomains({ domains = [], peopleLead = null }) {
  // Allow multiple domains to be expanded simultaneously for optimal workflow
  const [openIds, setOpenIds] = useState(new Set());

  const handleToggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="eng-dev-section">
      {/* 1. Five Interactive Engineering Domains */}
      <div className="eng-domains-panel" role="region" aria-label="Technical Domains Directory">
        <div className="eng-domains-list">
          {domains.map((domain, idx) => (
            <Reveal key={domain.id} delay={idx * 50}>
              <DomainRow
                domain={domain}
                isOpen={openIds.has(domain.id)}
                onToggle={() => handleToggle(domain.id)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* 2. Standalone People & Culture Leadership */}
      {peopleLead && (
        <Reveal delay={280}>
          <div className="team-people-culture">
            <div className="team-people-culture__header">
              <span className="team-people-culture__kicker">Organizational Leadership</span>
              <h3 className="team-people-culture__title">People & Culture</h3>
              <p className="team-people-culture__lead">
                Championing engineering talent, cultural integrity, and institutional growth across global initiatives.
              </p>
            </div>

            <div className="team-people-culture__card">
              <div className="team-people-culture__media">
                <img
                  src={peopleLead.portrait}
                  alt={peopleLead.portraitAlt || `${peopleLead.name}, ${peopleLead.role}`}
                  className="team-people-culture__img"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="team-people-culture__info">
                <div className="team-people-culture__badge-row">
                  <span className="badge badge--sm">People & Culture</span>
                  <span className="team-people-culture__entity">TechBloom Labs</span>
                </div>
                <h4 className="team-people-culture__name">{peopleLead.name}</h4>
                <p className="team-people-culture__role">{peopleLead.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}

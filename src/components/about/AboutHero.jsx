import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal.jsx';
import Button from '../common/Button.jsx';
import ArrowIcon from '../common/ArrowIcon.jsx';
import {
  approvedAboutCopy,
  globalNodes,
  coreCapabilities,
  impactStripMetrics
} from '../../data/about.js';

export default function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="about-hero__container">
        <div className="about-hero__grid">
          {/* ================================================================
              LEFT: PRIMARY EDITORIAL CONTENT
              ================================================================ */}
          <div className="about-hero__editorial">
            <Reveal>
              <div className="about-hero__eyebrow">
                <span className="about-hero__pulse" aria-hidden="true" />
                <span>About Us</span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="about-hero__title" id="about-hero-title">
                Building Technology That <em>Matters</em>.
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <span className="about-hero__tagline-badge">
                Ideas · Products · Impact
              </span>
            </Reveal>

            <div className="about-hero__narrative">
              <Reveal delay={140}>
                <p className="about-hero__lead">
                  {approvedAboutCopy.leadStatement}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p className="about-hero__body">
                  {approvedAboutCopy.decadeHistory}
                </p>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <div className="about-hero__sub-bar" aria-label="Core Philosophy">
                <span>People</span>
                <span>Technology</span>
                <span>A Brighter Tomorrow</span>
              </div>
            </Reveal>

            <Reveal className="about-hero__actions" delay={260}>
              <Button to="/services" variant="primary" arrow>
                Explore Services
              </Button>
              <Button to="/contact" variant="ghost">
                Connect With Us
              </Button>
            </Reveal>
          </div>

          {/* ================================================================
              RIGHT: VISUAL STORYTELLING CANVAS (GLOBAL VENTURE + CAPABILITIES)
              ================================================================ */}
          <div className="about-hero__visual">
            <Reveal className="about-canvas-card" delay={120}>
              <div className="about-canvas-card__header">
                <span className="about-canvas-card__badge">
                  Indo–US–Canadian Venture
                </span>
                <span className="about-canvas-card__script">
                  Innovation Without Borders
                </span>
              </div>

              {/* Global Network Map Visualization */}
              <div className="about-map-container" aria-hidden="true">
                <svg
                  className="about-map-svg"
                  viewBox="0 0 800 460"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3ED0A2" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3ED0A2" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="arc-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3ED0A2" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#EEF3F0" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#3ED0A2" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="arc-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3ED0A2" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0C7A5E" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* Stylized World Continents Background (Subtle abstract grid) */}
                  <g opacity="0.16" stroke="rgba(238, 243, 240, 0.4)" strokeWidth="0.8" strokeDasharray="3 3">
                    <circle cx="400" cy="230" r="180" />
                    <circle cx="400" cy="230" r="120" />
                    <circle cx="400" cy="230" r="60" />
                    <line x1="100" y1="230" x2="700" y2="230" />
                    <line x1="400" y1="50" x2="400" y2="410" />
                    <path d="M160 140 Q 240 100, 320 150 T 480 180" />
                    <path d="M520 220 Q 600 210, 680 270" />
                  </g>

                  {/* Simplified Landmass Geometries */}
                  <g fill="rgba(238, 243, 240, 0.07)" stroke="rgba(238, 243, 240, 0.12)" strokeWidth="1">
                    {/* North America */}
                    <path d="M120 100 L 220 70 L 310 110 L 290 190 L 240 270 L 180 250 L 150 170 Z" />
                    {/* South America */}
                    <path d="M250 280 L 300 310 L 280 400 L 240 420 L 220 340 Z" />
                    {/* Europe & Africa */}
                    <path d="M370 120 L 460 110 L 480 170 L 460 250 L 420 370 L 360 270 L 350 180 Z" />
                    {/* Asia & India */}
                    <path d="M490 100 L 680 90 L 740 180 L 690 280 L 610 320 L 560 260 L 530 190 Z" />
                    {/* Australia */}
                    <path d="M640 330 L 720 320 L 730 380 L 660 390 Z" />
                  </g>

                  {/* Glowing Connection Arcs between Canada, USA, and India */}
                  {/* Canada (250, 130) to USA (230, 200) */}
                  <path
                    d="M 250 130 Q 260 165, 230 200"
                    stroke="url(#arc-gradient-1)"
                    strokeWidth="2"
                    fill="none"
                    className="map-arc-path"
                  />
                  {/* USA (230, 200) to India (600, 250) across globe */}
                  <path
                    d="M 230 200 Q 420 70, 600 250"
                    stroke="url(#arc-gradient-1)"
                    strokeWidth="2.4"
                    fill="none"
                    className="map-arc-path"
                  />
                  {/* Canada (250, 130) to India (600, 250) */}
                  <path
                    d="M 250 130 Q 430 40, 600 250"
                    stroke="url(#arc-gradient-2)"
                    strokeWidth="1.8"
                    fill="none"
                    strokeDasharray="4 4"
                  />

                  {/* Canada Hub (x: 250, y: 130) */}
                  <circle cx="250" cy="130" r="14" fill="url(#hub-glow)" />
                  <circle cx="250" cy="130" r="8" className="map-ping-circle" stroke="#3ED0A2" strokeWidth="1.5" fill="none" />
                  <circle cx="250" cy="130" r="5" fill="#3ED0A2" />
                  <text x="250" y="112" textAnchor="middle" fill="#EEF3F0" fontSize="12" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.05em">
                    CANADA
                  </text>

                  {/* USA Hub (x: 230, y: 200) */}
                  <circle cx="230" cy="200" r="14" fill="url(#hub-glow)" />
                  <circle cx="230" cy="200" r="8" className="map-ping-circle" stroke="#3ED0A2" strokeWidth="1.5" fill="none" />
                  <circle cx="230" cy="200" r="5" fill="#3ED0A2" />
                  <text x="195" y="205" textAnchor="end" fill="#EEF3F0" fontSize="12" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.05em">
                    USA
                  </text>

                  {/* India Hub (x: 600, y: 250) */}
                  <circle cx="600" cy="250" r="16" fill="url(#hub-glow)" />
                  <circle cx="600" cy="250" r="9" className="map-ping-circle" stroke="#3ED0A2" strokeWidth="1.5" fill="none" />
                  <circle cx="600" cy="250" r="6" fill="#3ED0A2" />
                  <text x="600" y="278" textAnchor="middle" fill="#EEF3F0" fontSize="12" fontWeight="700" fontFamily="var(--font-mono)" letterSpacing="0.05em">
                    INDIA
                  </text>
                </svg>
              </div>

              {/* Regional Focus Strip */}
              <div className="global-nodes-grid">
                {globalNodes.map((node) => (
                  <div className="global-node-item" key={node.id}>
                    <div className="global-node-item__top">
                      <span className="global-node-item__flag" role="img" aria-label={node.country}>
                        {node.flag}
                      </span>
                      <span className="global-node-item__name">{node.country}</span>
                    </div>
                    <span className="global-node-item__role">{node.role}</span>
                    <p className="global-node-item__focus">{node.focus}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Capabilities Rail (Derived cleanly from approved copy) */}
            <Reveal className="about-capabilities-card" delay={180}>
              <div className="about-capabilities-card__head">
                <h2 className="about-capabilities-card__title">
                  Core Expertise & Capabilities
                </h2>
                <Link to="/services" className="link link--subtle" style={{ fontSize: '0.75rem' }}>
                  <span>View Domain Frameworks</span>
                  <ArrowIcon size={12} />
                </Link>
              </div>

              <div className="capabilities-chip-grid">
                {coreCapabilities.map((item) => (
                  <div className="capability-chip" key={item.id}>
                    <span
                      className={`capability-chip__dot capability-chip__dot--${item.tone}`}
                      aria-hidden="true"
                    />
                    <div className="capability-chip__content">
                      <span className="capability-chip__name">{item.title}</span>
                      <span className="capability-chip__sub">{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ====================================================================
          FULL-WIDTH BOTTOM IMPACT & METRICS STRIP
          ==================================================================== */}
      <div className="about-impact-strip" style={{ marginTop: 'clamp(44px, 6vw, 72px)' }}>
        <div className="about-hero__container">
          <div className="about-impact-strip__grid">
            {/* Metric 1: 10+ Years */}
            <div className="about-impact-item">
              <span className="about-impact-item__stat">{impactStripMetrics[0].stat}</span>
              <span className="about-impact-item__title">{impactStripMetrics[0].label}</span>
              <span className="about-impact-item__sub">{impactStripMetrics[0].sub}</span>
            </div>

            {/* Metric 2: Global Collaboration */}
            <div className="about-impact-item">
              <span className="about-impact-item__title" style={{ fontSize: '1.1rem', marginTop: '4px' }}>
                {impactStripMetrics[1].title}
              </span>
              <span className="about-impact-item__sub">{impactStripMetrics[1].sub}</span>
            </div>

            {/* Metric 3: Products Across Domains */}
            <div className="about-impact-item">
              <span className="about-impact-item__title" style={{ fontSize: '1.1rem', marginTop: '4px' }}>
                {impactStripMetrics[2].title}
              </span>
              <span className="about-impact-item__sub">{impactStripMetrics[2].sub}</span>
            </div>

            {/* Metric 4: Future Ready */}
            <div className="about-impact-item">
              <span className="about-impact-item__title" style={{ fontSize: '1.1rem', marginTop: '4px' }}>
                {impactStripMetrics[3].title}
              </span>
              <span className="about-impact-item__sub">{impactStripMetrics[3].sub}</span>
            </div>

            {/* Script Accent */}
            <div className="about-impact-strip__script" aria-hidden="true">
              Let&rsquo;s Build What Matters.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

/**
 * HeroVisual — Enterprise Technology & Product Engineering Command Canvas.
 * Art-directed live architectural network illustrating the end-to-end flow:
 * RESEARCH → INNOVATION → ENGINEERING → PRODUCT → DEPLOYMENT → INDUSTRY IMPACT.
 */
export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="hero-system" aria-label="Enterprise Product Engineering System Architecture">
      {/* Top Floating Telemetry Panel (Panel A) */}
      <div className="hero-panel hero-panel--top">
        <div className="hero-panel__eyebrow">
          <span className="hero-panel__label">SYSTEM STATUS</span>
          <span className="hero-panel__status">
            <span className="hero-panel__status-dot" aria-hidden="true" />
            ACTIVE
          </span>
        </div>
        <h2 className="hero-panel__title">Product Pipeline</h2>
        <div className="hero-panel__flow">
          <span>Research</span>
          <span aria-hidden="true">→</span>
          <span>Engineering</span>
          <span aria-hidden="true">→</span>
          <span>Deploy</span>
        </div>
      </div>

      {/* Main Command & Architecture Frame */}
      <div className="hero-system__canvas">
        {/* Technical Header Bar */}
        <div className="hero-system__bar">
          <div className="hero-system__bar-right">
            <span className="hero-system__bar-tag">PRODUCT ARCHITECTURE</span>
            <span className="hero-system__bar-sep" aria-hidden="true">·</span>
            <span className="hero-system__bar-pipeline">RESEARCH → ENGINEERING → IMPACT</span>
          </div>
        </div>

        {/* Central Architecture SVG Graph */}
        <div className="hero-system__svg-wrap">
          <svg
            className="hero-system__svg"
            viewBox="0 0 540 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Fine technical background grid */}
              <pattern id="sys-grid-pat" width="27" height="27" patternUnits="userSpaceOnUse">
                <path d="M 27 0 L 0 0 0 27" fill="none" stroke="rgba(52, 211, 153, 0.05)" strokeWidth="1" />
                <circle cx="27" cy="0" r="1" fill="rgba(52, 211, 153, 0.18)" />
              </pattern>

              {/* Node glow filters */}
              <filter id="glow-emerald" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="packet-glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="2.5" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Ambient radial lighting */}
              <radialGradient id="grad-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="grad-top" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Canvas Background Grid */}
            <rect width="540" height="650" fill="url(#sys-grid-pat)" />

            {/* Ambient System Glows */}
            <circle cx="270" cy="72" r="70" fill="url(#grad-top)" />
            <circle cx="270" cy="280" r="110" fill="url(#grad-core)" />
            <circle cx="270" cy="490" r="75" fill="url(#grad-top)" />

            {/* ==============================================================
                CONNECTION PATHWAYS (Primary Circuit Tracks)
                ============================================================== */}
            {/* 1. Research → AI */}
            <path
              id="path-res-ai"
              d="M 270 90 C 270 125, 125 125, 125 155"
              className="hero-path"
            />
            {/* 2. Research → Data */}
            <path
              id="path-res-data"
              d="M 270 90 C 270 125, 415 125, 415 155"
              className="hero-path"
            />

            {/* AI <-> Data Telemetry Cross Bridge */}
            <line
              id="path-bridge-top"
              x1="205"
              y1="174"
              x2="335"
              y2="174"
              className="hero-path hero-path--dashed"
            />

            {/* 3. AI → Engineering */}
            <path
              id="path-ai-eng"
              d="M 125 193 C 125 230, 240 230, 240 258"
              className="hero-path"
            />
            {/* 4. Data → Engineering */}
            <path
              id="path-data-eng"
              d="M 415 193 C 415 230, 300 230, 300 258"
              className="hero-path"
            />

            {/* 5. Engineering → Software */}
            <path
              id="path-eng-soft"
              d="M 240 302 C 240 338, 125 338, 125 365"
              className="hero-path"
            />
            {/* 6. Engineering → Cloud */}
            <path
              id="path-eng-cloud"
              d="M 300 302 C 300 338, 415 338, 415 365"
              className="hero-path"
            />

            {/* Software <-> Cloud Interconnect */}
            <line
              id="path-bridge-bot"
              x1="205"
              y1="384"
              x2="335"
              y2="384"
              className="hero-path hero-path--dashed"
            />

            {/* 7. Software → Product */}
            <path
              id="path-soft-prod"
              d="M 125 403 C 125 440, 240 440, 240 470"
              className="hero-path"
            />
            {/* 8. Cloud → Product */}
            <path
              id="path-cloud-prod"
              d="M 415 403 C 415 440, 300 440, 300 470"
              className="hero-path"
            />

            {/* 9. Product → Deployment */}
            <line
              id="path-prod-deploy"
              x1="270"
              y1="508"
              x2="270"
              y2="536"
              className="hero-path"
            />

            {/* 10. Deployment → Impact */}
            <line
              id="path-deploy-impact"
              x1="270"
              y1="562"
              x2="270"
              y2="600"
              className="hero-path"
            />

            {/* ==============================================================
                LIVE DATA PACKETS (Smooth animated telemetry movement)
                ============================================================== */}
            {/* Left Stream: Research → AI → Engineering */}
            <circle r="3.2" fill="#34d399" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" repeatCount="indefinite">
                <mpath href="#path-res-ai" />
              </animateMotion>
            </circle>
            <circle r="3.2" fill="#34d399" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite">
                <mpath href="#path-ai-eng" />
              </animateMotion>
            </circle>

            {/* Right Stream: Research → Data → Engineering */}
            <circle r="3.2" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" begin="0.6s" repeatCount="indefinite">
                <mpath href="#path-res-data" />
              </animateMotion>
            </circle>
            <circle r="3.2" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" begin="1.8s" repeatCount="indefinite">
                <mpath href="#path-data-eng" />
              </animateMotion>
            </circle>

            {/* Downstream: Engineering → Software → Product */}
            <circle r="3.2" fill="#34d399" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" begin="0.4s" repeatCount="indefinite">
                <mpath href="#path-eng-soft" />
              </animateMotion>
            </circle>
            <circle r="3.2" fill="#34d399" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" begin="1.6s" repeatCount="indefinite">
                <mpath href="#path-soft-prod" />
              </animateMotion>
            </circle>

            {/* Downstream: Engineering → Cloud → Product */}
            <circle r="3.2" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" begin="1.0s" repeatCount="indefinite">
                <mpath href="#path-eng-cloud" />
              </animateMotion>
            </circle>
            <circle r="3.2" fill="#38bdf8" filter="url(#packet-glow)">
              <animateMotion dur="2.4s" begin="2.2s" repeatCount="indefinite">
                <mpath href="#path-cloud-prod" />
              </animateMotion>
            </circle>

            {/* Final Execution: Product → Deploy → Impact */}
            <circle r="2.8" fill="#34d399" filter="url(#packet-glow)">
              <animateMotion dur="1.2s" begin="0.3s" repeatCount="indefinite">
                <mpath href="#path-prod-deploy" />
              </animateMotion>
            </circle>
            <circle r="2.8" fill="#34d399" filter="url(#packet-glow)">
              <animateMotion dur="1.2s" begin="0.9s" repeatCount="indefinite">
                <mpath href="#path-deploy-impact" />
              </animateMotion>
            </circle>

            {/* ==============================================================
                SYSTEM GRAPH NODES
                ============================================================== */}

            {/* NODE 1: RESEARCH */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('research')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect x="195" y="52" width="150" height="38" rx="8" className="hero-node__rect" />
              <circle cx="212" cy="71" r="3.5" fill="#34d399" />
              <text x="275" y="68" textAnchor="middle" className="hero-node__title" fontSize="11.5">
                RESEARCH
              </text>
              <text x="275" y="80" textAnchor="middle" className="hero-node__sub">
                DISCOVERY & INQUIRY
              </text>
            </g>

            {/* NODE 2: AI SYSTEMS */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('ai')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect x="45" y="155" width="160" height="38" rx="8" className="hero-node__rect" />
              <circle cx="65" cy="174" r="3.5" fill="#34d399" />
              <text x="130" y="171" textAnchor="middle" className="hero-node__title" fontSize="11">
                AI SYSTEMS
              </text>
              <text x="130" y="183" textAnchor="middle" className="hero-node__sub">
                INTELLIGENT MODELS
              </text>
            </g>

            {/* NODE 3: DATA ENGINE */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('data')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect x="335" y="155" width="160" height="38" rx="8" className="hero-node__rect" />
              <circle cx="355" cy="174" r="3.5" fill="#38bdf8" />
              <text x="420" y="171" textAnchor="middle" className="hero-node__title" fontSize="11">
                DATA ENGINE
              </text>
              <text x="420" y="183" textAnchor="middle" className="hero-node__sub">
                STRUCTURED TELEMETRY
              </text>
            </g>

            {/* NODE 4: ENGINEERING (CENTRAL NEXUS CORE) */}
            <g
              className="hero-node hero-node--core"
              onMouseEnter={() => setActiveNode('engineering')}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Outer pulsing indicator ring */}
              <circle cx="270" cy="280" r="28" fill="none" stroke="rgba(52, 211, 153, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
              <rect x="175" y="258" width="190" height="44" rx="9" className="hero-node__rect" />
              <circle cx="196" cy="280" r="4.5" fill="#34d399" filter="url(#glow-emerald)" />
              <text x="276" y="277" textAnchor="middle" className="hero-node__title" fontSize="12">
                ENGINEERING
              </text>
              <text x="276" y="290" textAnchor="middle" className="hero-node__sub">
                ARCHITECTURE & SYSTEMS
              </text>
            </g>

            {/* NODE 5: SOFTWARE SYSTEMS */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('software')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect x="45" y="365" width="160" height="38" rx="8" className="hero-node__rect" />
              <circle cx="65" cy="384" r="3.5" fill="#34d399" />
              <text x="130" y="381" textAnchor="middle" className="hero-node__title" fontSize="11">
                SOFTWARE
              </text>
              <text x="130" y="393" textAnchor="middle" className="hero-node__sub">
                FULL-STACK PLATFORMS
              </text>
            </g>

            {/* NODE 6: CLOUD RUNTIME */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('cloud')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect x="335" y="365" width="160" height="38" rx="8" className="hero-node__rect" />
              <circle cx="355" cy="384" r="3.5" fill="#38bdf8" />
              <text x="420" y="381" textAnchor="middle" className="hero-node__title" fontSize="11">
                CLOUD INFRA
              </text>
              <text x="420" y="393" textAnchor="middle" className="hero-node__sub">
                SCALABLE RUNTIME
              </text>
            </g>

            {/* NODE 7: PRODUCT PLATFORM */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('product')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect x="185" y="470" width="170" height="38" rx="8" className="hero-node__rect" />
              <circle cx="204" cy="489" r="3.5" fill="#34d399" />
              <text x="275" y="486" textAnchor="middle" className="hero-node__title" fontSize="11">
                PRODUCT
              </text>
              <text x="275" y="498" textAnchor="middle" className="hero-node__sub">
                INTEGRATED SOLUTIONS
              </text>
            </g>

            {/* NODE 8: DEPLOYMENT */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('deploy')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <rect x="215" y="536" width="110" height="26" rx="6" className="hero-node__rect" />
              <circle cx="228" cy="549" r="2.8" fill="#34d399" />
              <text x="272" y="553" textAnchor="middle" className="hero-node__title" fontSize="9.5">
                DEPLOY
              </text>
            </g>

            {/* NODE 9: INDUSTRY IMPACT TARGET */}
            <g
              className="hero-node"
              onMouseEnter={() => setActiveNode('impact')}
              onMouseLeave={() => setActiveNode(null)}
            >
              <circle cx="270" cy="600" r="5" fill="#10b981" filter="url(#glow-emerald)" />
              <circle cx="270" cy="600" r="12" fill="none" stroke="rgba(52, 211, 153, 0.45)" strokeWidth="1" />
              <text x="270" y="621" textAnchor="middle" className="hero-node__title" fontSize="10" fill="#34d399">
                INDUSTRY IMPACT
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Bottom Floating Technology Stack Panel (Panel B) */}
      <div className="hero-panel hero-panel--bottom">
        <div className="hero-panel__eyebrow">
          <span className="hero-panel__label">TECHNOLOGY STACK</span>
        </div>
        <div className="hero-panel__chips">
          <span className="hero-panel__chip">AI & ML</span>
          <span className="hero-panel__chip">DATA</span>
          <span className="hero-panel__chip">CLOUD</span>
          <span className="hero-panel__chip">SOFTWARE</span>
          <span className="hero-panel__chip">SECURITY</span>
          <span className="hero-panel__chip">DIGITAL</span>
        </div>
        <p className="hero-panel__footer-text">
          Enterprise Architecture · Deployment Ready
        </p>
      </div>
    </div>
  );
}

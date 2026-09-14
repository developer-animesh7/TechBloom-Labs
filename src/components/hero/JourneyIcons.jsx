import React from 'react';

/**
 * Technical SVG Icons for the 4 Homepage Pillars:
 * 01 — RESEARCH: Scientific Discovery / Precision Reticle / Focus Orbital
 * 02 — INDUSTRY: Enterprise Connected Infrastructure / Architecture Bus
 * 03 — INNOVATION: Neural Intelligence Spark / Converging Circuit Nexus
 * 04 — IMPACT: Concentric Wave Target / Upward Measurable Outcome
 */

export function ResearchIcon({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`journey-icon-svg journey-icon-svg--research ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Outer discovery orbit */}
      <circle
        cx="16"
        cy="16"
        r="11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.45"
        strokeDasharray="2.5 3"
        className="anim-orbit"
      />
      {/* Inner focus optical ring */}
      <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Precision reticle crosshairs */}
      <line x1="16" y1="2.5" x2="16" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="26.5" x2="16" y2="29.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.5" y1="16" x2="5.5" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26.5" y1="16" x2="29.5" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Central discovery node */}
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      {/* Orbiting research telemetry satellite */}
      <circle cx="23.8" cy="8.2" r="2.2" fill="#38bdf8" className="anim-node-pulse" />
      <circle cx="8.2" cy="23.8" r="1.4" fill="currentColor" strokeOpacity="0.8" />
    </svg>
  );
}

export function IndustryIcon({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`journey-icon-svg journey-icon-svg--industry ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Enterprise foundation structure */}
      <rect x="4" y="19" width="10" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(52, 211, 153, 0.05)" />
      <rect x="18" y="19" width="10" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(52, 211, 153, 0.05)" />
      {/* Upper enterprise command tier */}
      <rect x="11" y="4" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(52, 211, 153, 0.08)" />
      {/* Interconnect data architecture bus */}
      <path d="M16 12v4M9 16h14M9 16v3M23 16v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="anim-line-flow" />
      {/* Telemetry nodes */}
      <circle cx="16" cy="16" r="1.6" fill="#38bdf8" />
      <circle cx="9" cy="23.5" r="1.2" fill="currentColor" />
      <circle cx="23" cy="23.5" r="1.2" fill="currentColor" />
      {/* Architectural internal bars */}
      <line x1="14" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.75" />
      <line x1="6.5" y1="23.5" x2="11.5" y2="23.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="20.5" y1="23.5" x2="25.5" y2="23.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  );
}

export function InnovationIcon({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`journey-icon-svg journey-icon-svg--innovation ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Circuit bus lines extending out */}
      <path d="M16 3v4.5M16 24.5v4.5M3 16h4.5M24.5 16H29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.8 6.8l3.2 3.2M22 22l3.2 3.2M6.8 25.2l3.2-3.2M22 10l3.2-3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.45" />
      {/* Micro circuit pads */}
      <circle cx="16" cy="3" r="1.2" fill="currentColor" />
      <circle cx="16" cy="29" r="1.2" fill="currentColor" />
      <circle cx="3" cy="16" r="1.2" fill="currentColor" />
      <circle cx="29" cy="16" r="1.2" fill="currentColor" />
      {/* Central neural intelligence spark diamond */}
      <path
        d="M16 8.5L18.4 13.6L23.5 16L18.4 18.4L16 23.5L13.6 18.4L8.5 16L13.6 13.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="rgba(52, 211, 153, 0.14)"
        className="anim-spark-pulse"
      />
      {/* Core glowing node */}
      <circle cx="16" cy="16" r="2.2" fill="#34d399" className="anim-spark-core" />
    </svg>
  );
}

export function ImpactIcon({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`journey-icon-svg journey-icon-svg--impact ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Concentric outward resonance wave fronts */}
      <path d="M5.5 11.5A13 13 0 0 1 26.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35" className="anim-ripple-outer" />
      <path d="M8.5 14.5A9 9 0 0 1 23.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.65" className="anim-ripple-mid" />
      <path d="M11.5 17.5A5 5 0 0 1 20.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Grounding target base */}
      <circle cx="16" cy="23.5" r="3.2" stroke="currentColor" strokeWidth="1.5" fill="rgba(52, 211, 153, 0.08)" />
      <circle cx="16" cy="23.5" r="1.5" fill="#34d399" />
      {/* Ascending delivery vector */}
      <path d="M16 20.5V5M12.5 8.5L16 5l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="anim-vector-rise" />
      <circle cx="16" cy="5" r="1.2" fill="#38bdf8" />
    </svg>
  );
}

export const JOURNEY_ICONS = {
  '01': ResearchIcon,
  '02': IndustryIcon,
  '03': InnovationIcon,
  '04': ImpactIcon
};

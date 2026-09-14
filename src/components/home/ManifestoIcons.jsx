import React from 'react';

/**
 * Technical SVG Icons for the 3 Manifesto Pillars:
 * 01 — TECHNOLOGY ARCHITECTURE: System Layers & Foundation Bus
 * 02 — PRODUCT ENGINEERING: Modular Chassis & Integrated Engineering Core
 * 03 — CONTINUOUS EVOLUTION: Iterative Orbital Progression & Evolving Nodes
 */

export function TechArchitectureIcon({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`manifesto-icon-svg manifesto-icon-svg--arch ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Foundation & Layer Plates */}
      <rect x="4" y="19" width="20" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="rgba(52, 211, 153, 0.08)" />
      <rect x="6" y="12" width="16" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="rgba(52, 211, 153, 0.14)" className="anim-arch-mid" />
      <rect x="8.5" y="5" width="11" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="rgba(52, 211, 153, 0.2)" />
      {/* Vertical architectural interconnect bus pins */}
      <line x1="10" y1="9.5" x2="10" y2="12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="18" y1="9.5" x2="18" y2="12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="8" y1="16.5" x2="8" y2="19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="20" y1="16.5" x2="20" y2="19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Architecture telemetry nodes */}
      <circle cx="14" cy="7.25" r="1.1" fill="#38bdf8" />
      <circle cx="14" cy="14.25" r="1.2" fill="#34d399" />
      <circle cx="14" cy="21.25" r="1.1" fill="#38bdf8" />
    </svg>
  );
}

export function ProductEngineeringIcon({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`manifesto-icon-svg manifesto-icon-svg--eng ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Main product module chassis */}
      <rect x="5" y="5" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" fill="rgba(52, 211, 153, 0.05)" />
      {/* Internal integrated component block */}
      <rect x="9.5" y="9.5" width="9" height="9" rx="1.8" stroke="currentColor" strokeWidth="1.3" fill="rgba(52, 211, 153, 0.16)" className="anim-eng-core" />
      {/* Precision corner ticks / alignment guides */}
      <path d="M5 9h3M5 19h3M23 9h-3M23 19h-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9 5v3M19 5v3M9 23v-3M19 23v-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Central processor / engineering nexus */}
      <circle cx="14" cy="14" r="1.8" fill="#34d399" />
      <circle cx="7" cy="14" r="1" fill="#38bdf8" />
      <circle cx="21" cy="14" r="1" fill="#38bdf8" />
    </svg>
  );
}

export function ContinuousEvolutionIcon({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`manifesto-icon-svg manifesto-icon-svg--evo ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Iterative circular progression loop */}
      <g className="anim-evo-spin">
        <path
          d="M14 4a10 10 0 0 1 9.5 7M23.5 11l-3.5-1M23.5 11V7"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 24a10 10 0 0 1-9.5-7M4.5 17l3.5 1M4.5 17v4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Inner orbit and evolving node core */}
      <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" strokeOpacity="0.45" />
      <circle cx="14" cy="14" r="2.2" fill="#34d399" className="anim-evo-pulse" />
      {/* Triad orbital learning checkpoints */}
      <circle cx="14" cy="4" r="1.4" fill="#38bdf8" />
      <circle cx="22.5" cy="19" r="1.4" fill="currentColor" />
      <circle cx="5.5" cy="19" r="1.4" fill="currentColor" />
    </svg>
  );
}

export const MANIFESTO_ICONS = {
  '01': TechArchitectureIcon,
  '02': ProductEngineeringIcon,
  '03': ContinuousEvolutionIcon
};

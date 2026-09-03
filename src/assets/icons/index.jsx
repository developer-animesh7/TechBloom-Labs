/* ==========================================================================
   Icons — one coherent set: 1.6px stroke, 24px box, round caps, no fills.
   Every icon is decorative by default (aria-hidden) unless given a `title`.
   ========================================================================== */

function Svg({ children, size = 20, title, strokeWidth = 1.6, viewBox = '0 0 24 24', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const ArrowRight = (props) => (
  <Svg {...props}>
    <path d="M4 12h15" />
    <path d="M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowUpRight = (props) => (
  <Svg {...props}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

export const ArrowDown = (props) => (
  <Svg {...props}>
    <path d="M12 4v15" />
    <path d="M6 13l6 6 6-6" />
  </Svg>
);

export const ChevronDown = (props) => (
  <Svg {...props}>
    <path d="M5 9l7 7 7-7" />
  </Svg>
);

export const Check = (props) => (
  <Svg {...props}>
    <path d="M4 12.5l5 5L20 6.5" />
  </Svg>
);

export const Close = (props) => (
  <Svg {...props}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </Svg>
);

export const Info = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6" />
    <path d="M12 7.6v.6" />
  </Svg>
);

export const Alert = (props) => (
  <Svg {...props}>
    <path d="M12 4l9 16H3z" />
    <path d="M12 10v5" />
    <path d="M12 17.8v.4" />
  </Svg>
);

export const Mentor = (props) => (
  <Svg {...props}>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M3.5 20c0-3.3 2.5-5.6 5.5-5.6s5.5 2.3 5.5 5.6" />
    <path d="M16.5 5.5h4.2" />
    <path d="M16.5 9.5h4.2" />
    <path d="M16.5 13.5h2.6" />
  </Svg>
);

export const Flask = (props) => (
  <Svg {...props}>
    <path d="M9 3h6" />
    <path d="M10 3v6L5.6 17.4A2.4 2.4 0 0 0 7.8 21h8.4a2.4 2.4 0 0 0 2.2-3.6L14 9V3" />
    <path d="M7.4 15h9.2" />
  </Svg>
);

export const Calendar = (props) => (
  <Svg {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.4" />
    <path d="M3.5 10h17" />
    <path d="M8 3.5v3" />
    <path d="M16 3.5v3" />
    <path d="M8 14h3" />
  </Svg>
);

export const Compass = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5.2-5.2 2 2-5.2z" />
  </Svg>
);

export const Network = (props) => (
  <Svg {...props}>
    <circle cx="5" cy="6" r="2.2" />
    <circle cx="5" cy="18" r="2.2" />
    <circle cx="19" cy="12" r="2.2" />
    <path d="M7 7.2l9.2 3.6" />
    <path d="M7 16.8l9.2-3.6" />
  </Svg>
);

export const Pulse = (props) => (
  <Svg {...props}>
    <path d="M3 12h3.5l2-5 3 10 2.5-5H21" />
  </Svg>
);

export const Vial = (props) => (
  <Svg {...props}>
    <path d="M9 3h6" />
    <path d="M10 3.5v14.6a2.9 2.9 0 0 0 4 0V3.5" />
    <path d="M10 12h4" />
  </Svg>
);

export const Leaf = (props) => (
  <Svg {...props}>
    <path d="M5 19c0-7.2 5-13 15-13 0 8.4-5.4 13-10.4 13H5z" />
    <path d="M5 19c3.6-3.6 7.4-6.2 11.6-8" />
  </Svg>
);

export const Lineage = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="5" r="2.2" />
    <circle cx="6" cy="19" r="2.2" />
    <circle cx="18" cy="19" r="2.2" />
    <path d="M12 7.2v3.6" />
    <path d="M6 16.8v-2.4h12v2.4" />
    <path d="M12 10.8v3.6" />
  </Svg>
);

export const Structure = (props) => (
  <Svg {...props}>
    <path d="M4 20V8l8-4 8 4v12" />
    <path d="M4 13h16" />
    <path d="M12 4.4V20" />
    <path d="M4 20h16" />
  </Svg>
);

export const Braces = (props) => (
  <Svg {...props}>
    <path d="M9 4c-2.4 0-2 3.4-2 5s-1.6 3-3 3c1.4 0 3 1.4 3 3s-.4 5 2 5" />
    <path d="M15 4c2.4 0 2 3.4 2 5s1.6 3 3 3c-1.4 0-3 1.4-3 3s.4 5-2 5" />
  </Svg>
);

export const Chart = (props) => (
  <Svg {...props}>
    <path d="M4 4v16h16" />
    <path d="M8 16v-4" />
    <path d="M12 16V8" />
    <path d="M16 16v-6" />
  </Svg>
);

export const Shield = (props) => (
  <Svg {...props}>
    <path d="M12 3l7.5 2.6v5.6c0 4.8-3.2 8.2-7.5 9.8-4.3-1.6-7.5-5-7.5-9.8V5.6z" />
    <path d="M9 12.2l2.2 2.2L15.4 10" />
  </Svg>
);

export const Helix = (props) => (
  <Svg {...props}>
    <path d="M8 3c0 6 8 12 8 18" />
    <path d="M16 3c0 6-8 12-8 18" />
    <path d="M9.4 7.5h5.2" />
    <path d="M9.4 16.5h5.2" />
  </Svg>
);

export const Badge = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="9.5" r="5.5" />
    <path d="M9.6 9.6l1.8 1.8 3.2-3.4" />
    <path d="M8.4 14.6L7 21l5-2.4L17 21l-1.4-6.4" />
  </Svg>
);

export const Award = Badge;

export const Building = (props) => (
  <Svg {...props}>
    <path d="M4 21V6l7-3v18" />
    <path d="M11 10h9v11" />
    <path d="M7 9h1" />
    <path d="M7 13h1" />
    <path d="M15 14h2" />
    <path d="M4 21h16" />
  </Svg>
);

export const Receipt = (props) => (
  <Svg {...props}>
    <path d="M6 3h12v18l-3-1.8-3 1.8-3-1.8L6 21z" />
    <path d="M9.5 8.5h5" />
    <path d="M9.5 12.5h5" />
  </Svg>
);

export const Lock = (props) => (
  <Svg {...props}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.4" />
    <path d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5" />
    <path d="M12 14.4v2.2" />
  </Svg>
);

export const Lifebuoy = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.6" />
    <path d="M14.6 9.4L18.4 5.6" />
    <path d="M9.4 14.6L5.6 18.4" />
    <path d="M14.6 14.6l3.8 3.8" />
    <path d="M9.4 9.4L5.6 5.6" />
  </Svg>
);

export const Document = (props) => (
  <Svg {...props}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6" />
    <path d="M9 16h4" />
  </Svg>
);

export const Idea = (props) => (
  <Svg {...props}>
    <path d="M9 17h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 1 3.4 10.9c-.5.4-.9 1-.9 1.6H9.5c0-.6-.4-1.2-.9-1.6A6 6 0 0 1 12 3z" />
  </Svg>
);

export const Pin = (props) => (
  <Svg {...props}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const Mail = (props) => (
  <Svg {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
    <path d="M4 7l8 6 8-6" />
  </Svg>
);

export const Phone = (props) => (
  <Svg {...props}>
    <path d="M7 3.5h3l1.6 4-2 1.4a10.5 10.5 0 0 0 5.5 5.5l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 5 5.7 2 2 0 0 1 7 3.5z" />
  </Svg>
);

export const Filter = (props) => (
  <Svg {...props}>
    <path d="M4 6h16" />
    <path d="M7 12h10" />
    <path d="M10 18h4" />
  </Svg>
);

/* Domain icon lookup used by data-driven components. */
export const domainIcons = {
  network: Network,
  pulse: Pulse,
  vial: Vial,
  leaf: Leaf,
  lineage: Lineage,
  structure: Structure,
  braces: Braces,
  chart: Chart,
  shield: Shield,
  helix: Helix,
  mentor: Mentor,
  flask: Flask,
  calendar: Calendar,
  compass: Compass,
  badge: Badge,
  building: Building,
  receipt: Receipt,
  lock: Lock,
  lifebuoy: Lifebuoy,
  document: Document,
  idea: Idea
};

export function DomainIcon({ name, ...rest }) {
  const Icon = domainIcons[name] || Network;
  return <Icon {...rest} />;
}

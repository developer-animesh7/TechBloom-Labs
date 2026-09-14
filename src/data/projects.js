/* ==========================================================================
   Projects & Technology Products — Official Product Portfolio
   Canonical data source for TechBloom Labs product catalogue.
   Strictly covers the 11 approved product domains and engineered products.
   ========================================================================== */

export const projectCategories = [
  {
    id: 'healthcare',
    number: '01',
    name: 'Healthcare',
    short: 'Healthcare',
    accent: 'var(--accent)',
    blurb: 'Digital health platforms, clinical workflow coordination, and patient information management.',
    examples: [
      'Patient health records',
      'Clinical workflow coordination',
      'Appointment scheduling',
      'Medical resource management'
    ]
  },
  {
    id: 'agriculture',
    number: '02',
    name: 'Agriculture',
    short: 'Agriculture',
    accent: 'var(--accent-bright)',
    blurb: 'Smart agricultural platforms, field telemetry, crop planning, and harvest analytics.',
    examples: [
      'Crop planning and calendars',
      'Field activity management',
      'Irrigation and soil telemetry',
      'Harvest yield tracking'
    ]
  },
  {
    id: 'ai-robotics',
    number: '03',
    name: 'AI & Robotics',
    short: 'AI & Robotics',
    accent: 'var(--accent)',
    blurb: 'Intelligent robotics, autonomous telemetry, hardware integration, and motion automation.',
    examples: [
      'Robotic motion planning',
      'Autonomous telemetry',
      'Hardware interface drivers',
      'Kinematics simulation'
    ]
  },
  {
    id: 'finance-fintech',
    number: '04',
    name: 'Finance & FinTech',
    short: 'Finance & FinTech',
    accent: 'var(--accent-bright)',
    blurb: 'Financial technology platforms, ledger management, transaction auditing, and payment workflows.',
    examples: [
      'Double-entry ledgers',
      'Payment reconciliation',
      'Transaction auditing',
      'Financial risk analytics'
    ]
  },
  {
    id: 'education-edtech',
    number: '05',
    name: 'Education & EdTech',
    short: 'Education & EdTech',
    accent: 'var(--accent)',
    blurb: 'Interactive learning systems, modular curriculum delivery, and student progress tracking.',
    examples: [
      'Modular course authoring',
      'Student progress tracking',
      'Interactive assessments',
      'Cohort learning analytics'
    ]
  },
  {
    id: 'e-commerce',
    number: '06',
    name: 'E-Commerce',
    short: 'E-Commerce',
    accent: 'var(--accent-bright)',
    blurb: 'Digital commerce architectures, catalog management, inventory tracking, and checkout workflows.',
    examples: [
      'Multi-channel product catalogs',
      'Real-time inventory levels',
      'Order fulfillment queues',
      'Checkout and payments'
    ]
  },
  {
    id: 'restaurant-food',
    number: '07',
    name: 'Restaurant & Food',
    short: 'Restaurant & Food',
    accent: 'var(--accent)',
    blurb: 'Restaurant management platforms, table reservation coordination, and kitchen order dispatch.',
    examples: [
      'Table reservation maps',
      'Kitchen order ticketing',
      'Menu availability tracking',
      'Dining shift analytics'
    ]
  },
  {
    id: 'real-estate',
    number: '08',
    name: 'Real Estate',
    short: 'Real Estate',
    accent: 'var(--accent-bright)',
    blurb: 'Property technology platforms, construction site coordination, and asset milestone tracking.',
    examples: [
      'Property asset records',
      'Site contractor scheduling',
      'Material deliveries',
      'Milestone governance'
    ]
  },
  {
    id: 'cybersecurity',
    number: '09',
    name: 'Cybersecurity',
    short: 'Cybersecurity',
    accent: 'var(--accent)',
    blurb: 'Security operations platforms, vulnerability monitoring, and team awareness workflows.',
    examples: [
      'Vulnerability monitoring',
      'Endpoint event telemetry',
      'Incident response tasks',
      'Security awareness records'
    ]
  },
  {
    id: 'ai-innovation',
    number: '10',
    name: 'AI & Innovation',
    short: 'AI & Innovation',
    accent: 'var(--accent-bright)',
    blurb: 'Applied neural architectures, vector search, predictive modeling, and knowledge extraction.',
    examples: [
      'Neural document analysis',
      'Vector semantic search',
      'Knowledge extraction',
      'Model evaluation harnesses'
    ]
  },
  {
    id: 'travel-tourism',
    number: '11',
    name: 'Travel & Tourism',
    short: 'Travel & Tourism',
    accent: 'var(--accent)',
    blurb: 'Travel planning platforms, destination discovery guides, and itinerary booking coordination.',
    examples: [
      'Interactive destination guides',
      'Dynamic itinerary builder',
      'Traveler reservation records',
      'Trip notification dispatch'
    ]
  }
];

export const projects = [
  {
    id: 'healthsync',
    slug: 'healthsync',
    number: '01',
    name: 'HealthSync',
    title: 'HealthSync',
    category: 'healthcare',
    feature: 'primary',
    status: 'active',
    duration: '6 months',
    mode: 'Online / Hybrid',
    image: '/images/projects/healthcare.svg',
    alt: 'Healthcare coordination board with appointment queue and operational telemetry',
    summary:
      'A digital healthcare platform designed to organize patient records, clinical appointment scheduling, and care team resource coordination.',
    description:
      'A digital healthcare platform designed to organize patient records, clinical appointment scheduling, and care team resource coordination.',
    scope: [
      'Patient records and clinical history organization',
      'Clinical appointment and consultation scheduling',
      'Medical resource allocation and department coordination',
      'Operational healthcare reporting and telemetry'
    ],
    capabilities: [
      'Patient records and clinical history organization',
      'Clinical appointment and consultation scheduling',
      'Medical resource allocation and department coordination',
      'Operational healthcare reporting and telemetry'
    ],
    stack: ['React', 'Express', 'MongoDB', 'REST API'],
    techStack: ['React', 'Express', 'MongoDB', 'REST API'],
    mentorship: 'Healthcare Engineering Lead',
    note: 'Service coordination software. It does not diagnose, advise, or make autonomous medical decisions.'
  },
  {
    id: 'agriflow',
    slug: 'agriflow',
    number: '02',
    name: 'AgriFlow',
    title: 'AgriFlow',
    category: 'agriculture',
    feature: 'primary',
    status: 'active',
    duration: '6 months',
    mode: 'Hybrid',
    image: '/images/projects/agriculture.svg',
    alt: 'Field rows with an irrigation line and monitoring sensor nodes',
    summary:
      'A smart agriculture platform for managing crop activities, field operations, irrigation records, and harvest information.',
    description:
      'A smart agriculture platform for managing crop activities, field operations, irrigation records, and harvest information.',
    scope: [
      'Crop planning and seasonal production calendars',
      'Field activity logs and farm operation tracking',
      'Irrigation records and soil telemetry monitoring',
      'Harvest metrics and agricultural yield analytics'
    ],
    capabilities: [
      'Crop planning and seasonal production calendars',
      'Field activity logs and farm operation tracking',
      'Irrigation records and soil telemetry monitoring',
      'Harvest metrics and agricultural yield analytics'
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Charting'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Charting'],
    mentorship: 'Agriculture Technology Lead'
  },
  {
    id: 'robocore',
    slug: 'robocore',
    number: '03',
    name: 'RoboCore',
    title: 'RoboCore',
    category: 'ai-robotics',
    feature: 'primary',
    status: 'active',
    duration: '6 months',
    mode: 'Research / Hybrid',
    image: '/images/projects/robotics.svg',
    alt: 'Robotic arm kinematic joints with trajectory coordinates and actuator telemetry panel',
    summary:
      'An intelligent robotic control and simulation platform for autonomous motion telemetry, robotic kinematics, and real-time hardware interfacing.',
    description:
      'An intelligent robotic control and simulation platform for autonomous motion telemetry, robotic kinematics, and real-time hardware interfacing.',
    scope: [
      'Robotic motion trajectory planning and execution',
      'Autonomous sensor feedback and telemetry streams',
      'Hardware interface drivers and edge messaging',
      'Kinematics simulation and operational diagnostics'
    ],
    capabilities: [
      'Robotic motion trajectory planning and execution',
      'Autonomous sensor feedback and telemetry streams',
      'Hardware interface drivers and edge messaging',
      'Kinematics simulation and operational diagnostics'
    ],
    stack: ['Python', 'ROS', 'PyTorch', 'OpenCV', 'C++'],
    techStack: ['Python', 'ROS', 'PyTorch', 'OpenCV', 'C++'],
    mentorship: 'Robotics & AI Engineering Lead'
  },
  {
    id: 'fincore',
    slug: 'fincore',
    number: '04',
    name: 'FinCore',
    title: 'FinCore',
    category: 'finance-fintech',
    feature: 'standard',
    status: 'active',
    duration: '6 months',
    mode: 'Online',
    image: '/images/projects/finance.svg',
    alt: 'Financial technology ledger dashboard with transaction reconciliation table and settlement liquidity telemetry',
    summary:
      'A financial technology platform providing secure ledger management, automated payment reconciliation, and financial analytics workflows.',
    description:
      'A financial technology platform providing secure ledger management, automated payment reconciliation, and financial analytics workflows.',
    scope: [
      'Double-entry ledger accounting and audit trails',
      'Automated transaction and settlement reconciliation',
      'Transaction verification and risk detection rules',
      'Financial reporting dashboards and cash flow telemetry'
    ],
    capabilities: [
      'Double-entry ledger accounting and audit trails',
      'Automated transaction and settlement reconciliation',
      'Transaction verification and risk detection rules',
      'Financial reporting dashboards and cash flow telemetry'
    ],
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'REST API'],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'REST API'],
    mentorship: 'FinTech Engineering Lead'
  },
  {
    id: 'learngrid',
    slug: 'learngrid',
    number: '05',
    name: 'LearnGrid',
    title: 'LearnGrid',
    category: 'education-edtech',
    feature: 'standard',
    status: 'active',
    duration: '4 months',
    mode: 'Online',
    image: '/images/projects/edtech.svg',
    alt: 'Interactive learning management curriculum architecture with course module units and student cohort mastery tracking',
    summary:
      'An interactive learning management system designed for modular curriculum delivery, student progress tracking, and outcome assessment.',
    description:
      'An interactive learning management system designed for modular curriculum delivery, student progress tracking, and outcome assessment.',
    scope: [
      'Modular syllabus authoring and lesson structuring',
      'Student enrollment, attendance, and milestone tracking',
      'Interactive quiz evaluation and assignment submissions',
      'Cohort performance analytics and learning outcomes'
    ],
    capabilities: [
      'Modular syllabus authoring and lesson structuring',
      'Student enrollment, attendance, and milestone tracking',
      'Interactive quiz evaluation and assignment submissions',
      'Cohort performance analytics and learning outcomes'
    ],
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    mentorship: 'EdTech Advisory Lead'
  },
  {
    id: 'commercehub',
    slug: 'commercehub',
    number: '06',
    name: 'CommerceHub',
    title: 'CommerceHub',
    category: 'e-commerce',
    feature: 'standard',
    status: 'active',
    duration: '6 months',
    mode: 'Online / Hybrid',
    image: '/images/projects/ecommerce.svg',
    alt: 'Digital commerce architecture with product catalog inventory tracking, checkout pipeline and fulfillment dispatch queue',
    summary:
      'A modular digital commerce platform featuring inventory tracking, multi-channel product catalog management, and checkout workflows.',
    description:
      'A modular digital commerce platform featuring inventory tracking, multi-channel product catalog management, and checkout workflows.',
    scope: [
      'Multi-category product catalog and variant handling',
      'Real-time inventory thresholds and warehouse status',
      'Cart, payment processing, and checkout pipelines',
      'Order fulfillment queues and customer notifications'
    ],
    capabilities: [
      'Multi-category product catalog and variant handling',
      'Real-time inventory thresholds and warehouse status',
      'Cart, payment processing, and checkout pipelines',
      'Order fulfillment queues and customer notifications'
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
    mentorship: 'Commerce Architecture Lead'
  },
  {
    id: 'tableflow',
    slug: 'tableflow',
    number: '07',
    name: 'TableFlow',
    title: 'TableFlow',
    category: 'restaurant-food',
    feature: 'standard',
    status: 'active',
    duration: '4 months',
    mode: 'Hybrid',
    image: '/images/projects/restaurant.svg',
    alt: 'Restaurant operations floor plan map with real-time table status and kitchen display ticket queue',
    summary:
      'A digital restaurant operations platform managing table reservations, kitchen order ticketing, and dining floor workflow.',
    description:
      'A digital restaurant operations platform managing table reservations, kitchen order ticketing, and dining floor workflow.',
    scope: [
      'Table reservations and interactive floor layout status',
      'Digital kitchen display system and ticket dispatch',
      'Live menu availability and item lifecycle tracking',
      'Daily shift analytics and dining revenue summaries'
    ],
    capabilities: [
      'Table reservations and interactive floor layout status',
      'Digital kitchen display system and ticket dispatch',
      'Live menu availability and item lifecycle tracking',
      'Daily shift analytics and dining revenue summaries'
    ],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'WebSocket'],
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'WebSocket'],
    mentorship: 'FoodTech Systems Lead'
  },
  {
    id: 'estateflow',
    slug: 'estateflow',
    number: '08',
    name: 'EstateFlow',
    title: 'EstateFlow',
    category: 'real-estate',
    feature: 'standard',
    status: 'active',
    duration: '6 months',
    mode: 'Hybrid',
    image: '/images/projects/infrastructure.svg',
    alt: 'Construction structural frame, site cranes, and progress milestone schedule',
    summary:
      'A property technology and construction management platform for site coordination, milestone tracking, and contractor operations.',
    description:
      'A property technology and construction management platform for site coordination, milestone tracking, and contractor operations.',
    scope: [
      'Property asset records and developmental site logs',
      'Contractor task scheduling and milestone governance',
      'Material delivery tracking and inspection signoffs',
      'Project progress dashboards and documented handovers'
    ],
    capabilities: [
      'Property asset records and developmental site logs',
      'Contractor task scheduling and milestone governance',
      'Material delivery tracking and inspection signoffs',
      'Project progress dashboards and documented handovers'
    ],
    stack: ['Vue', 'Laravel', 'MySQL', 'Gantt Visualisation'],
    techStack: ['Vue', 'Laravel', 'MySQL', 'Gantt Visualisation'],
    mentorship: 'PropTech Engineering Lead'
  },
  {
    id: 'cyberguard',
    slug: 'cyberguard',
    number: '09',
    name: 'CyberGuard',
    title: 'CyberGuard',
    category: 'cybersecurity',
    feature: 'standard',
    status: 'active',
    duration: '6 months',
    mode: 'Online',
    image: '/images/projects/cybersecurity.svg',
    alt: 'Alert queue, network segments and vulnerability workflow lanes',
    summary:
      'A security operations workspace providing real-time vulnerability tracking, network segment monitoring, and security awareness modules.',
    description:
      'A security operations workspace providing real-time vulnerability tracking, network segment monitoring, and security awareness modules.',
    scope: [
      'Vulnerability ingestion, scoring, and workflow queues',
      'Network endpoint telemetry and segment monitoring',
      'Incident response coordination and resolution logs',
      'Team security training modules and awareness records'
    ],
    capabilities: [
      'Vulnerability ingestion, scoring, and workflow queues',
      'Network endpoint telemetry and segment monitoring',
      'Incident response coordination and resolution logs',
      'Team security training modules and awareness records'
    ],
    stack: ['Python', 'Elasticsearch', 'React', 'Docker'],
    techStack: ['Python', 'Elasticsearch', 'React', 'Docker'],
    mentorship: 'Cybersecurity Operations Lead'
  },
  {
    id: 'nova-ai',
    slug: 'nova-ai',
    number: '10',
    name: 'NovaAI',
    title: 'NovaAI',
    category: 'ai-innovation',
    feature: 'wide',
    status: 'active',
    duration: '6 months',
    mode: 'Research',
    image: '/images/projects/ai-ml.svg',
    alt: 'Neural network layers with attention matrix and extracted knowledge fields',
    summary:
      'A neural document analysis and knowledge discovery engine with vector search, structured data extraction, and semantic summarization.',
    description:
      'A neural document analysis and knowledge discovery engine with vector search, structured data extraction, and semantic summarization.',
    scope: [
      'Document ingestion and semantic vector indexing',
      'Contextual multi-hop search and field extraction',
      'Source-attributed knowledge summarization',
      'Model accuracy evaluation and benchmark reporting'
    ],
    capabilities: [
      'Document ingestion and semantic vector indexing',
      'Contextual multi-hop search and field extraction',
      'Source-attributed knowledge summarization',
      'Model accuracy evaluation and benchmark reporting'
    ],
    stack: ['Python', 'PyTorch', 'Vector Search', 'FastAPI'],
    techStack: ['Python', 'PyTorch', 'Vector Search', 'FastAPI'],
    mentorship: 'Applied AI Research Lead'
  },
  {
    id: 'travelflow',
    slug: 'travelflow',
    number: '11',
    name: 'TravelFlow',
    title: 'TravelFlow',
    category: 'travel-tourism',
    feature: 'standard',
    status: 'active',
    duration: '4 months',
    mode: 'Online',
    image: '/images/projects/travel.svg',
    alt: 'Travel itinerary planner map with destination waypoints, booking reservation coordination and departure schedule',
    summary:
      'A travel discovery and itinerary management system for booking coordination, destination guides, and tour schedule tracking.',
    description:
      'A travel discovery and itinerary management system for booking coordination, destination guides, and tour schedule tracking.',
    scope: [
      'Destination guide directory and interactive point-of-interest mapping',
      'Dynamic itinerary builder with automated route scheduling',
      'Traveler booking status and reservation coordination',
      'Travel document aggregation and departure alert notifications'
    ],
    capabilities: [
      'Destination guide directory and interactive point-of-interest mapping',
      'Dynamic itinerary builder with automated route scheduling',
      'Traveler booking status and reservation coordination',
      'Travel document aggregation and departure alert notifications'
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
    mentorship: 'Travel Technology Lead'
  }
];

export const proposalSteps = [
  { step: '01', title: 'Problem & Specification Formulation', body: 'Define domain, challenge statement, functional specifications, and technical objectives.' },
  { step: '02', title: 'Technical Feasibility Review', body: 'Architectural scope, engineering complexity, and domain requirements are evaluated.' },
  { step: '03', title: 'Technical & Domain Lead Assignment', body: 'Matched with senior technical advisors and specialized engineering talent.' },
  { step: '04', title: 'System Architecture & Milestone Scoping', body: 'Specifications, system interfaces, security standards, and milestones are agreed.' },
  { step: '05', title: 'Agile Engineering & Development', body: 'Iterative implementation proceeds with rigorous review cycles and milestone tracking.' },
  { step: '06', title: 'Quality Assurance & Evaluation', body: 'Deliverables are tested, validated, and evaluated against performance benchmarks.' },
  { step: '07', title: 'Deployment & Verified Handover', body: 'Final deliverable deployment, technical documentation, and verified handover.' }
];

export const projectDomainCount = projectCategories.length;

export function countByCategory(categoryId) {
  return projects.filter((project) => project.category === categoryId).length;
}

export function getCategory(categoryId) {
  return projectCategories.find((category) => category.id === categoryId);
}

const LEGACY_ID_MAP = {
  'smart-agriculture': 'agriflow',
  'healthcare-services': 'healthsync',
  'infrastructure-pm': 'estateflow',
  'ai-research-assistant': 'nova-ai',
  'security-operations': 'cyberguard',
  'enterprise-workflow': 'commercehub',
  'animal-genetics': 'agriflow',
  'pharma-workflow': 'healthsync',
  'data-intelligence': 'fincore',
  'lab-workflow': 'healthsync'
};

export function getProject(slugOrId) {
  if (!slugOrId) return null;
  const clean = slugOrId.toLowerCase().trim();
  const mapped = LEGACY_ID_MAP[clean] || clean;
  return (
    projects.find((p) => p.id === mapped) ||
    projects.find((p) => p.slug === mapped) ||
    projects.find((p) => (p.name || p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === mapped) ||
    projects.find((p) => p.id === clean) ||
    null
  );
}

export default {
  projectCategories,
  projects,
  proposalSteps,
  projectDomainCount,
  countByCategory,
  getCategory,
  getProject
};

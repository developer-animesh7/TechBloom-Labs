/* ==========================================================================
   Projects — domains and project concepts.
   These are project concepts offered through TechBloom Labs, not shipped products.
   ========================================================================== */

export const projectCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    short: 'AI / ML',
    accent: 'var(--dom-ai)',
    icon: 'network',
    blurb: 'Applied intelligence for documents, prediction, vision and decision support.',
    examples: [
      'Intelligent document analysis',
      'Predictive analytics',
      'Computer vision',
      'AI-assisted decision systems'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Technology',
    short: 'Healthcare',
    accent: 'var(--dom-health)',
    icon: 'pulse',
    blurb: 'Service coordination, patient workflow and clinical data organisation.',
    examples: [
      'Healthcare service management',
      'Patient workflow systems',
      'Clinical data analytics',
      'Appointment coordination',
      'Medical resource management'
    ]
  },
  {
    id: 'pharma',
    name: 'Pharmaceutical Technology',
    short: 'Pharma',
    accent: 'var(--dom-pharma)',
    icon: 'vial',
    blurb: 'Research workflow, batch records, laboratory operations and quality control.',
    examples: [
      'Pharmaceutical research workflow',
      'Drug inventory and batch management',
      'Laboratory research management',
      'Pharma supply-chain analytics',
      'Drug discovery data management',
      'Quality-control workflow software'
    ]
  },
  {
    id: 'agriculture',
    name: 'Agriculture Technology',
    short: 'Agriculture',
    accent: 'var(--dom-agri)',
    icon: 'leaf',
    blurb: 'Crop planning, field operations, irrigation records and farm analytics.',
    examples: [
      'Crop planning',
      'Farm activity management',
      'Irrigation records',
      'Soil information',
      'Crop monitoring',
      'Harvest tracking',
      'Agricultural analytics'
    ]
  },
  {
    id: 'livestock',
    name: 'Animal Genetics & Livestock Management',
    short: 'Animal Genetics',
    accent: 'var(--dom-livestock)',
    icon: 'lineage',
    blurb: 'Animal profiles, lineage records, breeding history and research data.',
    examples: [
      'Animal profile management',
      'Breed information',
      'Genetics records',
      'Lineage tracking',
      'Breeding records',
      'Health and event records',
      'Research data organisation'
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Construction Technology',
    short: 'Infrastructure',
    accent: 'var(--dom-infra)',
    icon: 'structure',
    blurb: 'Project planning, site coordination, materials and progress reporting.',
    examples: [
      'Project planning',
      'Site management',
      'Contractor coordination',
      'Material tracking',
      'Milestone management',
      'Progress reporting',
      'Project analytics'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    short: 'Cybersecurity',
    accent: 'var(--dom-cyber)',
    icon: 'shield',
    blurb: 'Monitoring, awareness, vulnerability workflow and security analytics.',
    examples: [
      'Security monitoring',
      'Awareness platforms',
      'Vulnerability workflow management',
      'Security analytics'
    ]
  },
  {
    id: 'biotech',
    name: 'Biotechnology',
    short: 'Biotechnology',
    accent: 'var(--dom-biotech)',
    icon: 'helix',
    blurb: 'Laboratory workflow, experiment tracking and research data structure.',
    examples: ['Laboratory workflow management', 'Research data organisation', 'Experiment tracking']
  },
  {
    id: 'data-science',
    name: 'Data Science',
    short: 'Data Science',
    accent: 'var(--dom-data)',
    icon: 'chart',
    blurb: 'Business analytics, forecasting, dashboards and research analytics.',
    examples: ['Business analytics', 'Forecasting', 'Dashboards', 'Research analytics']
  },
  {
    id: 'software',
    name: 'Software Development',
    short: 'Software',
    accent: 'var(--dom-software)',
    icon: 'braces',
    blurb: 'Workflow automation, collaboration, documents and operational tooling.',
    examples: [
      'Workflow automation',
      'Team collaboration',
      'Document management',
      'Task management',
      'Reporting and notifications'
    ]
  }
];

/* status: open | review | active — the state of the project concept itself */
export const projects = [
  {
    id: 'smart-agriculture',
    number: '01',
    title: 'Smart Agriculture Management Platform',
    category: 'agriculture',
    feature: 'primary',
    status: 'open',
    duration: '6 months',
    mode: 'Hybrid',
    image: '/images/projects/agriculture.svg',
    alt: 'Field rows with an irrigation line and monitoring sensor nodes',
    summary:
      'A management platform for crop planning, field activity, irrigation records and harvest tracking — so a farm can see its own season clearly.',
    scope: [
      'Crop planning and seasonal calendars',
      'Farm activity management',
      'Irrigation records and soil information',
      'Crop monitoring and harvest tracking',
      'Resource management',
      'Agricultural analytics'
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Charting'],
    mentorship: 'Faculty-led with domain review'
  },
  {
    id: 'animal-genetics',
    number: '02',
    title: 'Animal Genetics & Livestock Management',
    category: 'livestock',
    feature: 'primary',
    status: 'open',
    duration: '6 months',
    mode: 'Offline / Hybrid',
    image: '/images/projects/animal-genetics.svg',
    alt: 'Lineage chart with animal record cards and a trait marker strip',
    summary:
      'Structured records for animal profiles, breed information, lineage and breeding history, built so research data stays traceable across generations.',
    scope: [
      'Animal profile management',
      'Breed information and genetics records',
      'Lineage tracking',
      'Breeding records',
      'Health and event history tracking',
      'Livestock management and research data organisation'
    ],
    stack: ['Django', 'PostgreSQL', 'Graph visualisation'],
    mentorship: 'Faculty-led',
    note: 'Records and reporting only. The project makes no veterinary or genetic health claims.'
  },
  {
    id: 'pharma-workflow',
    number: '03',
    title: 'Pharmaceutical Research Workflow',
    category: 'pharma',
    feature: 'wide',
    status: 'review',
    duration: '6 months',
    mode: 'Research',
    image: '/images/projects/pharmaceutical.svg',
    alt: 'Vial batches, a molecular diagram and a quality-control matrix',
    summary:
      'Workflow software for laboratory research operations: batch and inventory records, research stages and quality-control documentation.',
    scope: [
      'Laboratory workflow',
      'Research records',
      'Batch management',
      'Inventory workflow',
      'Quality-control documentation',
      'Pharmaceutical research data management'
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Role-based access'],
    mentorship: 'Faculty and industry mentor',
    note: 'Documentation and workflow only. No claims are made about medical efficacy.'
  },
  {
    id: 'healthcare-services',
    number: '04',
    title: 'Healthcare Services Management',
    category: 'healthcare',
    feature: 'standard',
    status: 'open',
    duration: '2 or 6 months',
    mode: 'Online',
    image: '/images/projects/healthcare.svg',
    alt: 'Coordination board with workflow stages and an operational signal chart',
    summary:
      'Coordination software for appointments, service management and medical resource scheduling, with operational reporting for service teams.',
    scope: [
      'Appointment workflow',
      'Service management',
      'Operational records',
      'Resource coordination',
      'Reporting'
    ],
    stack: ['React', 'Express', 'MongoDB'],
    mentorship: 'Faculty-led',
    note: 'Service coordination software. It does not diagnose, advise or make medical decisions.'
  },
  {
    id: 'infrastructure-pm',
    number: '05',
    title: 'Infrastructure Project Management',
    category: 'infrastructure',
    feature: 'standard',
    status: 'active',
    duration: '6 months',
    mode: 'Hybrid',
    image: '/images/projects/infrastructure.svg',
    alt: 'Structural frame, tower crane and milestone schedule bars',
    summary:
      'Planning and tracking for construction work: sites, contractors, materials, milestones and documented progress in one place.',
    scope: [
      'Project planning',
      'Site management',
      'Contractor coordination',
      'Task management and material tracking',
      'Milestones and documentation',
      'Progress reports'
    ],
    stack: ['Vue', 'Laravel', 'MySQL', 'Gantt visualisation'],
    mentorship: 'Industry mentor'
  },
  {
    id: 'ai-research-assistant',
    number: '06',
    title: 'AI Research Assistant',
    category: 'ai-ml',
    feature: 'standard',
    status: 'open',
    duration: '2 or 6 months',
    mode: 'Online',
    image: '/images/projects/ai-ml.svg',
    alt: 'Neural network layers with an attention grid and extracted document fields',
    summary:
      'Research discovery and analysis support: document organisation, structured extraction and summaries that trace back to their source.',
    scope: [
      'Research discovery',
      'Document organisation',
      'Knowledge workflows',
      'Analysis assistance',
      'Evaluation harness'
    ],
    stack: ['Python', 'PyTorch', 'Vector search', 'FastAPI'],
    mentorship: 'Faculty-led research'
  },
  {
    id: 'enterprise-workflow',
    number: '07',
    title: 'Enterprise Workflow Platform',
    category: 'software',
    feature: 'standard',
    status: 'open',
    duration: '2 months',
    mode: 'Online',
    image: '/images/projects/software.svg',
    alt: 'Task columns, approval branches and automation rules',
    summary:
      'A configurable workflow engine: task stages, approvals, automation rules, documents and notifications for operating teams.',
    scope: [
      'Task management',
      'Workflow automation',
      'Team collaboration',
      'Document management',
      'Reporting and notifications'
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Queue worker'],
    mentorship: 'Industry mentor'
  },
  {
    id: 'data-intelligence',
    number: '08',
    title: 'Data Intelligence Platform',
    category: 'data-science',
    feature: 'standard',
    status: 'review',
    duration: '6 months',
    mode: 'Hybrid',
    image: '/images/projects/data-science.svg',
    alt: 'Forecast curve, distribution bars and a cohort matrix',
    summary:
      'Analytics and forecasting over operational data, with dashboards and cohort views for teams that need to see a trend early.',
    scope: [
      'Analytics',
      'Dashboards',
      'Reporting',
      'Forecasting',
      'Data-driven insights'
    ],
    stack: ['Python', 'Pandas', 'DuckDB', 'Plotting'],
    mentorship: 'Faculty and industry mentor'
  },
  {
    id: 'security-operations',
    number: '09',
    title: 'Security Monitoring & Awareness Workspace',
    category: 'cybersecurity',
    feature: 'standard',
    status: 'open',
    duration: '2 or 6 months',
    mode: 'Online',
    image: '/images/projects/cybersecurity.svg',
    alt: 'Alert queue, network segments and vulnerability workflow lanes',
    summary:
      'Vulnerability workflow, monitoring views and an awareness module that turns findings into training for the teams involved.',
    scope: [
      'Security monitoring',
      'Vulnerability workflow management',
      'Awareness and training modules',
      'Security analytics'
    ],
    stack: ['Python', 'Elastic', 'React'],
    mentorship: 'Industry mentor'
  },
  {
    id: 'lab-workflow',
    number: '10',
    title: 'Laboratory Experiment Tracking',
    category: 'biotech',
    feature: 'standard',
    status: 'open',
    duration: '2 months',
    mode: 'Offline / Hybrid',
    summary:
      'Experiment tracking for a working lab: protocols, runs, samples and results, organised so a result can be found again months later.',
    scope: [
      'Laboratory workflow management',
      'Experiment and run tracking',
      'Sample and protocol records',
      'Research data organisation'
    ],
    stack: ['Django', 'PostgreSQL', 'File storage'],
    mentorship: 'Faculty-led'
  },
  {
    id: 'digital-operations',
    number: '11',
    title: 'Digital Operations Management Platform',
    category: 'software',
    feature: 'standard',
    status: 'active',
    duration: '6 months',
    mode: 'Hybrid',
    summary:
      'Operational backbone for a multi-team organisation: request intake, assignment, service levels, documents and reporting.',
    scope: [
      'Request intake and assignment',
      'Task and document management',
      'Service-level tracking',
      'Notifications',
      'Operational reporting'
    ],
    stack: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis'],
    mentorship: 'Industry mentor'
  },
  {
    id: 'clinical-analytics',
    number: '12',
    title: 'Clinical Data Analytics Views',
    category: 'healthcare',
    feature: 'standard',
    status: 'review',
    duration: '6 months',
    mode: 'Research',
    summary:
      'Analytical views over de-identified operational healthcare data: throughput, resource use and service patterns over time.',
    scope: [
      'Operational data modelling',
      'Throughput and utilisation views',
      'Trend analysis',
      'Report generation'
    ],
    stack: ['Python', 'SQL', 'Dashboarding'],
    mentorship: 'Faculty-led research',
    note: 'Operational analytics only. No diagnostic or treatment claims are made.'
  }
];

/* Steps shown in the Custom Engineering Solutions section. */
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

export function getProject(slugOrId) {
  if (!slugOrId) return null;
  const clean = slugOrId.toLowerCase().trim();
  return (
    projects.find((p) => p.id === clean) ||
    projects.find((p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === clean) ||
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

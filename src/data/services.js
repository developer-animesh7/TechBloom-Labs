/* ==========================================================================
   Services — comprehensive domain offerings and engineering solutions.
   Configured for editorial service rows with direct inquiries into Contact.
   ========================================================================== */

export const servicesIntro =
  'TechBloom Labs engineers software systems, research frameworks, and domain-specific operational platforms. From agriculture data models and pharmaceutical workflows to enterprise software and applied AI, we translate research rigor into reliable real-world systems.';

export const services = [
  {
    number: '01',
    id: 'software-dev',
    title: 'Technology & Software Development',
    blurb:
      'Custom software solutions, workflow engines, operational platforms, and robust digital products built for scale and long-term maintainability.',
    capabilities: [
      'Custom web & mobile applications',
      'Workflow automation platforms',
      'Operational dashboards & tooling',
      'API integrations & microservices'
    ],
    intent: 'software-development',
    accent: 'var(--dom-software)'
  },
  {
    number: '02',
    id: 'research-dev',
    title: 'Research & Project Development',
    blurb:
      'Structured technical and academic support for student, academic, research, and organizational initiatives requiring rigorous design and execution.',
    capabilities: [
      'Project scope formulation',
      'Academic research frameworks',
      'Feasibility evaluation & tracking',
      'Guided milestone management'
    ],
    intent: 'research-project',
    accent: 'var(--dom-ai)'
  },
  {
    number: '03',
    id: 'agritech',
    title: 'Agriculture Technology',
    blurb:
      'Digital agriculture management systems, crop seasonal workflows, field activity tracking, and comprehensive agricultural data platforms.',
    capabilities: [
      'Crop planning & harvest cycles',
      'Soil records & irrigation tracking',
      'Farm activity management',
      'Agricultural operational analytics'
    ],
    intent: 'agriculture-project',
    accent: 'var(--dom-agri)'
  },
  {
    number: '04',
    id: 'livestock-systems',
    title: 'Animal Genetics & Livestock Systems',
    blurb:
      'High-integrity animal profiles, lineage tracking, breeding records, livestock management workflows, and longitudinal research data organization.',
    capabilities: [
      'Animal profile & identification records',
      'Lineage tracking & breeding history',
      'Herd management workflows',
      'Research data categorization'
    ],
    intent: 'research-project',
    accent: 'var(--dom-livestock)',
    disclaimer: 'Records and reporting software only. Makes no veterinary or genetic health claims.'
  },
  {
    number: '05',
    id: 'pharma-tech',
    title: 'Pharmaceutical Technology',
    blurb:
      'Pharmaceutical research workflow systems, laboratory records, drug inventory management, batch records, and quality-control documentation.',
    capabilities: [
      'Laboratory research workflow software',
      'Batch management & traceability',
      'Quality-control audit documentation',
      'Inventory & compound workflow tracking'
    ],
    intent: 'pharmaceutical-project',
    accent: 'var(--dom-pharma)',
    disclaimer: 'Documentation and operational software only. No medical efficacy claims.'
  },
  {
    number: '06',
    id: 'healthcare-tech',
    title: 'Healthcare Technology',
    blurb:
      'Service coordination software, appointment scheduling, departmental operational systems, and administrative throughput reporting.',
    capabilities: [
      'Service coordination & scheduling',
      'Patient workflow administration',
      'Medical resource scheduling',
      'Operational capacity reporting'
    ],
    intent: 'healthcare-project',
    accent: 'var(--dom-health)',
    disclaimer: 'Service coordination software only. Does not diagnose, treat, or advise.'
  },
  {
    number: '07',
    id: 'infrastructure-tech',
    title: 'Infrastructure Project Management',
    blurb:
      'Comprehensive project planning, construction site coordination, contractor task tracking, materials management, milestones, and documentation.',
    capabilities: [
      'Site coordination & contractor workflows',
      'Milestone tracking & Gantt schedules',
      'Material inventory & procurement logs',
      'Progress reporting & compliance audits'
    ],
    intent: 'infrastructure-project',
    accent: 'var(--dom-infra)'
  },
  {
    number: '08',
    id: 'ai-data-science',
    title: 'AI / ML & Data Science',
    blurb:
      'Applied artificial intelligence, predictive modeling workflows, computer vision pipelines, and research-oriented data intelligence solutions.',
    capabilities: [
      'Applied deep learning & NLP',
      'Predictive analytics & forecasting',
      'Computer vision inspection workflows',
      'Cohort & statistical trend modeling'
    ],
    intent: 'technology-project',
    accent: 'var(--dom-ai)'
  },
  {
    number: '09',
    id: 'cybersecurity-ops',
    title: 'Cybersecurity',
    blurb:
      'Security workflow systems, monitoring dashboards, vulnerability remediation queues, and interactive awareness training modules.',
    capabilities: [
      'Security monitoring interface design',
      'Vulnerability workflow tracking',
      'Security awareness & training platforms',
      'Security telemetry & analytics'
    ],
    intent: 'technology-project',
    accent: 'var(--dom-cyber)'
  },
  {
    number: '10',
    id: 'custom-solutions',
    title: 'Custom Technology Solutions',
    blurb:
      'Tailored architectural consulting, cross-domain platform integration, bespoke database modeling, and specialized organizational tooling.',
    capabilities: [
      'Multi-tenant architecture design',
      'Legacy modernization & migration',
      'High-throughput data ingestion',
      'Custom organizational portals'
    ],
    intent: 'technology-project',
    accent: 'var(--dom-software)'
  }
];

export const servicesProcess = [
  {
    step: '01',
    title: 'Discovery & Needs Assessment',
    body: 'We map requirements, operational constraints, user personas, and technical feasibility.'
  },
  {
    step: '02',
    title: 'Architecture & System Design',
    body: 'We design data models, interface blueprints, security boundaries, and modular components.'
  },
  {
    step: '03',
    title: 'Expert & Mentor Matching',
    body: 'Projects are paired with seasoned faculty advisors and technical leads.'
  },
  {
    step: '04',
    title: 'Agile Implementation',
    body: 'Sprint-based engineering with transparent progress tracking, demos, and code reviews.'
  },
  {
    step: '05',
    title: 'Review, Delivery & Documentation',
    body: 'Thorough testing, operational documentation, and formal handover or deployment.'
  }
];

export default { servicesIntro, services, servicesProcess };

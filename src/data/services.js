/* ==========================================================================
   Services — Official Client Services & Practices
   Canonical data source for all TechBloom Labs services.
   Strictly incorporates verified client-provided titles and descriptions.
   ========================================================================== */

export const servicesIntro =
  'TechBloom Labs provides expert consulting, research and development, product development, market research, digital transformation, and professional training solutions to solve complex organizational challenges and drive sustainable growth.';

export const services = [
  {
    number: '01',
    id: 'consulting-services',
    title: 'Consulting Services',
    blurb:
      'We provide expert consulting to help organizations solve complex business challenges. Our team develops practical strategies aligned with your goals and market needs. We focus on improving efficiency, performance, and long-term growth. From planning to implementation, we support you at every stage.',
    lines: [
      'We provide expert consulting to help organizations solve complex business challenges.',
      'Our team develops practical strategies aligned with your goals and market needs.',
      'We focus on improving efficiency, performance, and long-term growth.',
      'From planning to implementation, we support you at every stage.'
    ],
    intent: 'consulting-services',
    accent: 'var(--accent)'
  },
  {
    number: '02',
    id: 'research-development',
    title: 'Research & Development',
    blurb:
      'Our Research & Development services transform ideas into innovative and practical solutions. We conduct in-depth research to identify opportunities, technologies, and emerging trends. Our experts develop, test, and refine solutions to meet specific industry requirements. We help businesses stay competitive through continuous',
    lines: [
      'Our Research & Development services transform ideas into innovative and practical solutions.',
      'We conduct in-depth research to identify opportunities, technologies, and emerging trends.',
      'Our experts develop, test, and refine solutions to meet specific industry requirements.',
      'We help businesses stay competitive through continuous'
    ],
    intent: 'research-development',
    accent: 'var(--accent-bright)'
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
    lines: [
      'Crop planning & harvest cycles',
      'Soil records & irrigation tracking',
      'Farm activity management',
      'Agricultural operational analytics'
    ],
    intent: 'agriculture-project',
    accent: 'var(--accent)'
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
    lines: [
      'Animal profile & identification records',
      'Lineage tracking & breeding history',
      'Herd management workflows',
      'Research data categorization'
    ],
    intent: 'research-project',
    accent: 'var(--accent-bright)',
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
    lines: [
      'Laboratory research workflow software',
      'Batch management & traceability',
      'Quality-control audit documentation',
      'Inventory & compound workflow tracking'
    ],
    intent: 'pharmaceutical-project',
    accent: 'var(--accent)',
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
    lines: [
      'Service coordination & scheduling',
      'Patient workflow administration',
      'Medical resource scheduling',
      'Operational capacity reporting'
    ],
    intent: 'healthcare-project',
    accent: 'var(--accent-bright)',
    disclaimer: 'Service coordination software only. Does not diagnose, treat, or advise.'
  },
  {
    number: '07',
    id: 'product-building-development',
    title: 'Product Building & Development',
    blurb:
      'We turn innovative ideas into market-ready products through structured development and execution. Our team supports product design, prototyping, testing, and continuous improvement. We combine customer insights, technology, and business strategy to build valuable solutions. From concept to launch, we help transform ideas into successful products.',
    lines: [
      'We turn innovative ideas into market-ready products through structured development and execution.',
      'Our team supports product design, prototyping, testing, and continuous improvement.',
      'We combine customer insights, technology, and business strategy to build valuable solutions.',
      'From concept to launch, we help transform ideas into successful products.'
    ],
    intent: 'product-building-development',
    accent: 'var(--accent)'
  },
  {
    number: '08',
    id: 'market-research-analysis',
    title: 'Market Research & Analysis',
    blurb:
      'We provide comprehensive market research to help businesses make informed decisions. Our services include customer analysis, competitor research, industry trends, and market opportunities. We convert data and insights into clear, actionable business recommendations. Our research helps organizations reduce risks and identify profitable growth opportunities.',
    lines: [
      'We provide comprehensive market research to help businesses make informed decisions.',
      'Our services include customer analysis, competitor research, industry trends, and market opportunities.',
      'We convert data and insights into clear, actionable business recommendations.',
      'Our research helps organizations reduce risks and identify profitable growth opportunities.'
    ],
    intent: 'market-research-analysis',
    accent: 'var(--accent-bright)'
  },
  {
    number: '09',
    id: 'digital-transformation-services',
    title: 'Digital Transformation Services',
    blurb:
      'We help organizations modernize their processes, systems, and business operations. Our team identifies areas where digital technologies can improve efficiency and productivity. We support organizations in adopting innovative tools, platforms, and technology-driven workflows. Our solutions enable businesses to become more agile, connected, and future-ready.',
    lines: [
      'We help organizations modernize their processes, systems, and business operations.',
      'Our team identifies areas where digital technologies can improve efficiency and productivity.',
      'We support organizations in adopting innovative tools, platforms, and technology-driven workflows.',
      'Our solutions enable businesses to become more agile, connected, and future-ready.'
    ],
    intent: 'digital-transformation-services',
    accent: 'var(--accent)'
  },
  {
    number: '10',
    id: 'training-professional-development',
    title: 'Training & Professional Development',
    blurb:
      'We deliver specialized training programs to build practical skills and professional capabilities. Our programs cover technical, managerial, entrepreneurial, and industry-specific areas. Training is designed using interactive, practical, and outcome-focused learning methods. We empower individuals and teams to perform better and adapt to changing industry demands.',
    lines: [
      'We deliver specialized training programs to build practical skills and professional capabilities.',
      'Our programs cover technical, managerial, entrepreneurial, and industry-specific areas.',
      'Training is designed using interactive, practical, and outcome-focused learning methods.',
      'We empower individuals and teams to perform better and adapt to changing industry demands.'
    ],
    intent: 'training-professional-development',
    accent: 'var(--accent-bright)'
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
    title: 'Technical & Domain Advisory',
    body: 'Initiatives are guided by specialized engineering leads and senior domain advisors.'
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

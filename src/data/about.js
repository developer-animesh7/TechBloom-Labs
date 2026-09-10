/* ==========================================================================
   About Page Data — TechBloom Labs
   Source of truth for corporate narrative, global perspective, capabilities,
   innovation journey, and core beliefs.
   ========================================================================== */

export const approvedAboutCopy = {
  fullText:
    'TechBloom Labs is an Indo–US–Canadian venture dedicated to building innovative, technology-driven products that solve meaningful real-world problems across diverse domains. For over a decade, we have brought together expertise in technology, research, product development, artificial intelligence, digital transformation, and emerging technologies to transform ideas into impactful solutions. Our approach combines global vision with strong engineering and research capabilities, enabling us to explore opportunities across sectors and build products that are scalable, intelligent, and user-centric. At TechBloom Labs, we believe innovation is not just about adopting new technology—it is about creating products that make a measurable difference, empower people and organizations, and shape the future. From concept and research to product design, development, deployment, and continuous evolution, we work with a long-term entrepreneurial mindset to imagine, build, and scale products that matter.',

  leadStatement:
    'TechBloom Labs is an Indo–US–Canadian venture dedicated to building innovative, technology-driven products that solve meaningful real-world problems across diverse domains.',

  decadeHistory:
    'For over a decade, we have brought together expertise in technology, research, product development, artificial intelligence, digital transformation, and emerging technologies to transform ideas into impactful solutions.',

  strategicApproach:
    'Our approach combines global vision with strong engineering and research capabilities, enabling us to explore opportunities across sectors and build products that are scalable, intelligent, and user-centric.',

  centralBelief:
    'At TechBloom Labs, we believe innovation is not just about adopting new technology—it is about creating products that make a measurable difference, empower people and organizations, and shape the future.',

  lifecycleExecution:
    'From concept and research to product design, development, deployment, and continuous evolution, we work with a long-term entrepreneurial mindset to imagine, build, and scale products that matter.',

  supportingStatement:
    'Bridging academia and industry to develop real-world solutions through research, collaboration, and talent.'
};

/* Global collaboration nodes representing the Indo-US-Canadian venture */
export const globalNodes = [
  {
    id: 'in',
    code: 'IND',
    country: 'India',
    flag: '🇮🇳',
    role: 'Engineering & Product Scale',
    coords: { x: 71, y: 52 },
    focus: 'Core engineering, distributed systems, and scalable product architecture'
  },
  {
    id: 'us',
    code: 'USA',
    country: 'USA',
    flag: '🇺🇸',
    role: 'Strategy & Technology Reach',
    coords: { x: 23, y: 38 },
    focus: 'Global strategy, enterprise partnerships, and advanced technology adoption'
  },
  {
    id: 'ca',
    code: 'CAN',
    country: 'Canada',
    flag: '🇨🇦',
    role: 'Research & Applied Innovation',
    coords: { x: 24, y: 25 },
    focus: 'Applied AI research, institutional collaboration, and emerging technology frameworks'
  }
];

/* Core capability indicators derived explicitly from approved copy */
export const coreCapabilities = [
  {
    id: 'tech',
    title: 'Technology',
    subtitle: 'Robust, modern architectures',
    tone: 'emerald'
  },
  {
    id: 'research',
    title: 'Research',
    subtitle: 'Rigorous scientific inquiry',
    tone: 'teal'
  },
  {
    id: 'product',
    title: 'Product Development',
    subtitle: 'User-centric software & tools',
    tone: 'blue'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    subtitle: 'Applied models & intelligence',
    tone: 'violet'
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    subtitle: 'Modernizing complex systems',
    tone: 'amber'
  },
  {
    id: 'emerging',
    title: 'Emerging Technologies',
    subtitle: 'Next-generation frontiers',
    tone: 'rose'
  }
];

/* Bottom impact & metrics strip inspired by reference */
export const impactStripMetrics = [
  {
    id: 'decade',
    stat: '10+',
    label: 'Years of Innovation',
    sub: 'For over a decade of domain leadership'
  },
  {
    id: 'global',
    icon: 'globe',
    title: 'Global Collaboration',
    sub: 'India · USA · Canada'
  },
  {
    id: 'impact',
    icon: 'spark',
    title: 'Products Across Domains',
    sub: 'From Ideas to Impact'
  },
  {
    id: 'future',
    icon: 'target',
    title: 'Future Ready',
    sub: 'Scaling for a Better Tomorrow'
  }
];

/* Architectural approach pillars (Scalable, Intelligent, User-Centric) */
export const approachPillars = [
  {
    num: '01',
    title: 'Scalable Products',
    body: 'Engineered from the foundation to expand gracefully across enterprise environments, demanding workloads, and multi-region deployments.'
  },
  {
    num: '02',
    title: 'Intelligent Systems',
    body: 'Infused with purposeful artificial intelligence, predictive modeling, and data-driven insights to solve high-complexity domain problems.'
  },
  {
    num: '03',
    title: 'User-Centric Experience',
    body: 'Designed around genuine human needs and operational realities to deliver intuitive, reliable, and deeply impactful user workflows.'
  }
];

/* End-to-end 6-stage innovation journey explicitly named in text */
export const innovationJourneyStages = [
  {
    num: '01',
    name: 'Concept',
    label: 'Stage 01',
    body: 'Identifying meaningful real-world challenges and formulating high-value product hypotheses.'
  },
  {
    num: '02',
    name: 'Research',
    label: 'Stage 02',
    body: 'Rigorous investigation into algorithmic feasibility, domain constraints, and technical architecture.'
  },
  {
    num: '03',
    name: 'Product Design',
    label: 'Stage 03',
    body: 'Designing user-centric interfaces, interactive prototypes, and modular system blueprints.'
  },
  {
    num: '04',
    name: 'Development',
    label: 'Stage 04',
    body: 'Robust engineering implementation using modern stacks, clean code, and enterprise-grade testing.'
  },
  {
    num: '05',
    name: 'Deployment',
    label: 'Stage 05',
    body: 'Production delivery, secure cloud infrastructure provisioning, and initial stakeholder rollout.'
  },
  {
    num: '06',
    name: 'Continuous Evolution',
    label: 'Stage 06',
    body: 'Ongoing optimization, performance monitoring, and iterative feature scaling with an entrepreneurial mindset.'
  }
];

export default {
  approvedAboutCopy,
  globalNodes,
  coreCapabilities,
  impactStripMetrics,
  approachPillars,
  innovationJourneyStages
};

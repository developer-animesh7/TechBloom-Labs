/* ==========================================================================
   Company — single source of truth for identity and contact detail.
   ========================================================================== */

const env = import.meta.env ?? {};

export const companyName = 'TechBloom Labs';
export const tagline = 'Where Learning Meets Opportunity';
export const primaryStatement = 'WHERE RESEARCH MEETS REAL-WORLD INNOVATION.';
export const brandSignature = ['RESEARCH', 'INDUSTRY', 'INNOVATION', 'IMPACT'];
export const website = 'https://discover-bloom.preview.static.emergentagent.com/';

export const address = {
  street: '305 Jessore Road',
  city: 'Kolkata 700089',
  region: 'West Bengal, India',
  oneLine: '305 Jessore Road, Kolkata 700089, West Bengal, India'
};

export const chiefAdvisorHead = {
  name: 'Prof. Dr. Himadri Nath Saha',
  displayName: 'Dr. Himadri Nath Saha',
  role: 'Chief Advisor & Head',
  fullRole: 'Chief Advisor & Head — TechBloom Labs',
  initials: 'HS',
  portrait: '/images/leadership/himadri-nath-saha.jpg',
  portraitAlt: 'Prof. Dr. Himadri Nath Saha, Chief Advisor & Head at TechBloom Labs',
  summary:
    'Senior academician, engineer, and advisor with extensive contributions to computer science education, distributed systems research, and industry-academia programs.',
  education: [
    'Bachelor of Engineering — Jadavpur University',
    'Master of Engineering — Indian Institute of Engineering, Science and Technology (IIEST, Shibpur)',
    'Master of Business Administration',
    'Ph.D. in Engineering — Jadavpur University'
  ],
  appointments: [
    'Head of the Department, Computer Science, SNEC, Calcutta University'
  ],
  awards: [
    'Gold Faculty Award — Infosys Technology Limited, 2013',
    'Outstanding Contribution Award — Infosys Technology Limited, 2011',
    'Best Innovative Faculty — Infosys Technology Limited, 2012',
    'Best Faculty Award — Institute of Engineering & Management, 2011'
  ],
  fellowships: [
    'Fellow of Institution of Engineers India (IEI)',
    'Fellow of Institution of Electronics and Telecommunications Engineers (IETE)',
    'Senior Member of IEEE'
  ],
  publications: [
    'Author of Database Management System textbook'
  ],
  contributions: [
    'Academic and research collaborations across engineering disciplines',
    'International conference chairing and technical program committee involvement',
    'Curriculum instruction across algorithms, database systems, and networking',
    'Hands-on Internet of Things (IoT) workshops and visiting-professor engagements'
  ]
};

export const chiefMarketingAdviser = {
  name: 'Prof. Bhabani Prasad Roy',
  displayName: 'Prof. Bhabani Prasad Roy',
  role: 'Chief Marketing Adviser',
  fullRole: 'Chief Marketing Adviser — TechBloom Labs',
  initials: 'BR',
  portrait: '/images/leadership/Bhabani Prasad Roy.png',
  portraitAlt: 'Prof. Bhabani Prasad Roy, Chief Marketing Adviser at TechBloom Labs',
  summary: 'Chief Marketing Adviser guiding outreach, institutional initiatives, and market strategy at TechBloom Labs.'
};

// Aliases for compatibility
export const chiefExecutive = chiefAdvisorHead;
export const chiefAdvisor = chiefMarketingAdviser;

export const directorAI = {
  name: 'Sreyan Saha',
  displayName: 'Sreyan Saha',
  role: 'DIRECTOR OF AI AND INNOVATION',
  fullRole: 'DIRECTOR OF AI AND INNOVATION — TechBloom Labs',
  initials: 'SS',
  portrait: '/images/leadership/Sreyan Saha.jpeg',
  portraitAlt: 'Sreyan Saha, DIRECTOR OF AI AND INNOVATION at TechBloom Labs'
};

export const directorWeb = {
  name: 'Tanisha Saha',
  displayName: 'Tanisha Saha',
  role: 'Director of Web Development',
  fullRole: 'Director of Web Development — TechBloom Labs',
  initials: 'TS',
  portrait: '/images/leadership/Tanisha Saha.jpeg',
  portraitAlt: 'Tanisha Saha, Director of Web Development at TechBloom Labs'
};

export const leadership = [
  chiefAdvisorHead,
  chiefMarketingAdviser,
  directorAI,
  directorWeb
];

/* --------------------------------------------------------------------------
   Top World-Class Mentors (Strictly verified profiles without placeholder data)
   -------------------------------------------------------------------------- */
export const mentors = [
  {
    id: 'M-01',
    num: '01',
    name: 'Avnish Kumar',
    role: 'AWS Engineer',
    affiliation: 'AWS',
    portrait: '/images/leadership/Avnish%20Kumar.png',
    portraitAlt: 'Avnish Kumar, AWS Engineer and Mentor at TechBloom Labs',
    linkedin: 'https://www.linkedin.com/in/avnish-kumar-40a54328/'
  },
  {
    id: 'M-02',
    num: '02',
    name: 'Soummyo Priyo Chattopadhyay',
    role: 'Deloitte Canada',
    affiliation: 'Deloitte Canada',
    initials: 'SC'
  },
  {
    id: 'M-03',
    num: '03',
    name: 'Phillip G. Bradford',
    role: 'Associate Professor-in-Residence, Computer Science',
    affiliation: 'University of Connecticut',
    portrait: '/images/leadership/Phillip%20G.%20Bradford.png',
    portraitAlt: 'Phillip G. Bradford, Associate Professor-in-Residence, Computer Science and Mentor at TechBloom Labs',
    profileUrl: 'https://stamford.uconn.edu/person/phillip-g-bradford/'
  }
];

/* --------------------------------------------------------------------------
   Engineering Team (Strictly typographic/technical — no photos)
   -------------------------------------------------------------------------- */
export const engineeringTeam = [
  {
    id: 'ENG-01',
    num: '01',
    name: 'Animesh Patra',
    role: 'Software Development Engineer — AI',
    initials: 'AP',
    domain: 'Artificial Intelligence & Systems',
    linkedin: 'https://www.linkedin.com/in/animesh-patra2004/'
  },
  {
    id: 'ENG-02',
    num: '02',
    name: 'Amitava Giri',
    role: 'AI & Cloud Engineer',
    initials: 'AG',
    domain: 'Cloud Architecture & Intelligence',
    linkedin: 'https://www.linkedin.com/in/amitava-giri/'
  },
  {
    id: 'ENG-03',
    num: '03',
    name: 'Soumosish Jana',
    role: 'Full Stack Engineer — AI',
    initials: 'SJ',
    domain: 'Full Stack Applications & AI',
    linkedin: 'https://www.linkedin.com/in/soumosish-jana-a28050342/'
  }
];

/* --------------------------------------------------------------------------
   Contact destination.
   When set, every form composes its message to it.
   -------------------------------------------------------------------------- */
export const CONTACT_EMAIL = env.VITE_CONTACT_EMAIL || 'contact@techbloomlabs.com';
export const CONTACT_PHONE = env.VITE_CONTACT_PHONE || '';
export const CONTACT_ENDPOINT = env.VITE_CONTACT_ENDPOINT || '';
export const SITE_URL = env.VITE_SITE_URL || website;

/* Social profiles render only when a URL exists. */
export const socialProfiles = [
  { label: 'LinkedIn', url: '' },
  { label: 'X', url: '' },
  { label: 'YouTube', url: '' }
].filter((profile) => profile.url);

export const mission = {
  label: 'Our Mission',
  body:
    'Engineer and scale transformative software, AI systems, and technology products by bridging advanced academic research with rigorous industry execution.'
};

export const vision = {
  label: 'Our Vision',
  body:
    'A world-class technology company delivering scalable digital solutions, high-impact enterprise products, and intelligent infrastructure across global industries.'
};

export const aboutIntro =
  'TechBloom Labs is an Indo–US–Canadian technology venture dedicated to building innovative, technology-driven products and solutions. Combining scientific research with modern software engineering, we build robust AI architectures, cloud platforms, and specialized industry systems.';

export const heroCopy =
  'TechBloom Labs is a technology and product engineering company. We combine advanced research, software craftsmanship, and applied AI to architect, deploy, and scale enterprise-grade digital products and solutions.';

export default {
  companyName,
  tagline,
  primaryStatement,
  brandSignature,
  website,
  address,
  chiefExecutive,
  chiefAdvisor,
  leadership,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ENDPOINT,
  SITE_URL,
  socialProfiles,
  mission,
  vision,
  aboutIntro,
  heroCopy
};

/* --------------------------------------------------------------------------
   Brand journey — the signature four stages, used by JourneySteps.jsx
   -------------------------------------------------------------------------- */
export const journeySteps = [
  { step: '01', title: 'Research', body: 'Pioneering scientific discovery and applied research capabilities.' },
  { step: '02', title: 'Industry', body: 'Translating complex domain requirements into strategic technical roadmaps.' },
  { step: '03', title: 'Innovation', body: 'Architecting intelligent software, AI models, and scalable infrastructure.' },
  { step: '04', title: 'Impact', body: 'Deploying enterprise technology solutions that deliver measurable real-world value.' }
];

/* --------------------------------------------------------------------------
   How TechBloom Labs works
   -------------------------------------------------------------------------- */
export const howItWorksStages = [
  {
    step: '01',
    title: 'Discover',
    body:
      'Explore verified experts, project concepts, internships and specialized technical services based on interests and skills.'
  },
  {
    step: '02',
    title: 'Connect',
    body:
      'Find domain experts, researchers and advisors that match your project and research goals.'
  },
  {
    step: '03',
    title: 'Experience',
    body:
      'Gain practical experience through guided projects, real-world concepts, and structured internship programs.'
  },
  {
    step: '04',
    title: 'Bloom',
    body:
      'Build your portfolio, strengthen capabilities, earn certificates, and advance toward engineering, research, or higher studies.'
  }
];

/* --------------------------------------------------------------------------
   Ecosystem pillars — one platform, multiple pathways
   -------------------------------------------------------------------------- */
export const ecosystemPillars = [
  {
    id: 'services',
    label: 'Services & Solutions',
    weight: 'primary',
    icon: 'wrench',
    body:
      'Explore our full suite of technical, research, agriculture, and healthcare systems built with domain rigor.',
    cta: 'View All Services',
    to: '/services'
  },
  {
    id: 'experts',
    label: 'Experts Network',
    weight: 'primary',
    icon: 'mentor',
    body:
      'Discover domain researchers, professors and specialists across AI, data science, cybersecurity, life sciences and engineering.',
    cta: 'Explore Experts',
    to: '/experts'
  },
  {
    id: 'projects',
    label: 'Project Concepts',
    weight: 'primary',
    icon: 'flask',
    body:
      'Real-world project frameworks across ten domains. Join active concepts under expert mentorship or propose your own.',
    cta: 'Explore Projects',
    to: '/projects'
  },
  {
    id: 'internships',
    label: 'Internships',
    weight: 'secondary',
    icon: 'calendar',
    body:
      'Structured 2-month and 6-month programs offering mentor guidance, hands-on project work, and verified completion credentials.',
    cta: 'Explore Internships',
    to: '/internships'
  }
];

/* --------------------------------------------------------------------------
   Final call to action
   -------------------------------------------------------------------------- */
export const finalCTA = {
  heading: 'Build Scalable Technology With Us.',
  lines: [
    'Research provides the foundation.',
    'Engineering delivers the capability.',
    'Innovation shapes the architecture.',
    'Industry collaboration drives real-world impact.',
    'TechBloom Labs builds the technology that scales.'
  ]
};

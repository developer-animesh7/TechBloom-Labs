/* --------------------------------------------------------------------------
   Company meta & primary identification
   -------------------------------------------------------------------------- */
export const companyName = 'TechBloom Labs';
export const tagline = 'Enterprise Product Engineering & Research Venture';

/* Environment configuration wrapper for safety */
const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};

export const website = 'https://techbloomlabs.com';

export const primaryStatement =
  'Translating scientific discovery into enterprise software architectures, applied AI, and scalable digital products.';

export const brandSignature = ['RESEARCH', 'INDUSTRY', 'INNOVATION', 'IMPACT'];

export const address = {
  headquarters: 'Salt Lake Sector V, Kolkata, West Bengal, India',
  usHub: 'University of Connecticut, Stamford, CT, USA',
  canadaHub: 'Trinity Western University, Langley, BC, Canada'
};

/* --------------------------------------------------------------------------
   Executive Leadership (Approved Data Model)
   -------------------------------------------------------------------------- */
export const chiefExecutive = {
  name: 'Prof. Bhabani Prasad Roy',
  role: 'Chief Marketing Adviser',
  summary:
    'Guiding market positioning, enterprise partnerships, and commercial translation across global technology ecosystems.',
  portrait: '/images/leadership/Bhabani%20Prasad%20Roy.png',
  portraitAlt: 'Prof. Bhabani Prasad Roy, Chief Marketing Adviser at TechBloom Labs'
};

export const chiefAdvisor = {
  name: 'Prof. Dr. Himadri Nath Saha',
  role: 'SNEC',
  summary:
    'Leading academic collaboration, systems research, and research-to-product incubation across AI and engineering domains.',
  portrait: '/images/leadership/himadri-nath-saha.jpg',
  portraitAlt: 'Prof. Dr. Himadri Nath Saha, SNEC'
};

export const chiefAdvisorHead = chiefAdvisor;
export const chiefMarketingAdviser = chiefExecutive;

export const directorAI = {
  name: 'Sreyan Saha',
  role: 'Director of AI & Innovation',
  summary:
    'Architecting intelligent AI systems, neural research pipelines, and domain-adapted machine learning models.',
  portrait: '/images/leadership/Sreyan%20Saha.jpeg',
  portraitAlt: 'Sreyan Saha, Director of AI & Innovation at TechBloom Labs'
};

export const directorWeb = {
  name: 'Tanisha Saha',
  role: 'Director of Web Development',
  summary:
    'Engineering high-performance enterprise web architectures, accessible UI systems, and robust platform frameworks.',
  portrait: '/images/leadership/Tanisha%20Saha.jpeg',
  portraitAlt: 'Tanisha Saha, Director of Web Development at TechBloom Labs'
};

export const leadership = [
  chiefAdvisor,
  chiefExecutive,
  directorAI,
  directorWeb
];

/* --------------------------------------------------------------------------
   Top World-Class Mentors (Exactly 6 Mentors)
   -------------------------------------------------------------------------- */
export const mentors = [
  {
    id: 'M-01',
    num: '01',
    name: 'Dr. Phillip G. Bradford',
    role: 'Associate Professor-in-Residence, Computer Science',
    affiliation: 'Associate Professor-in-Residence, Computer Science',
    location: 'USA',
    portrait: '/images/leadership/Phillip%20G.%20Bradford.png',
    portraitAlt: 'Dr. Phillip G. Bradford, Associate Professor-in-Residence, Computer Science'
  },
  {
    id: 'M-02',
    num: '02',
    name: 'Avnish Kumar',
    role: 'Amazon Engineer (AWS)',
    affiliation: 'Amazon Engineer (AWS)',
    location: 'US',
    portrait: '/images/leadership/Avnish%20Kumar.png',
    portraitAlt: 'Avnish Kumar, Amazon Engineer (AWS)'
  },
  {
    id: 'M-03',
    num: '03',
    name: 'Dr. Andrew J. Park',
    role: 'Trinity Western University',
    affiliation: 'Trinity Western University',
    location: 'Canada',
    portrait: '/images/leadership/Andrew%20J.%20Park.png',
    portraitAlt: 'Dr. Andrew J. Park, Trinity Western University'
  },
  {
    id: 'M-04',
    num: '04',
    name: 'Saptarshi Banerjee',
    role: 'Amazon Engineer (AWS)',
    affiliation: 'Amazon Engineer (AWS)',
    location: 'US',
    portrait: '/images/leadership/Saptarshi%20Banerjee%20.png',
    portraitAlt: 'Saptarshi Banerjee, Amazon Engineer (AWS)'
  },
  {
    id: 'M-05',
    num: '05',
    name: 'Soummyo Priyo Chattopadhyay',
    role: 'Deloitte Canada',
    affiliation: 'Deloitte Canada',
    portrait: '/images/leadership/Soummyo%20Priyo%20Chattopadhyay.jpeg',
    portraitAlt: 'Soummyo Priyo Chattopadhyay, Deloitte Canada'
  },
  {
    id: 'M-06',
    num: '06',
    name: 'Prof. Dr. Himadri Nath Saha',
    role: 'SNEC',
    affiliation: 'SNEC',
    location: 'India',
    portrait: '/images/leadership/himadri-nath-saha.jpg',
    portraitAlt: 'Prof. Dr. Himadri Nath Saha, SNEC'
  }
];

/* --------------------------------------------------------------------------
   Our Leadership & Engineering Team (Exactly 6 Members)
   -------------------------------------------------------------------------- */
export const engineeringTeam = [
  {
    id: 'LEAD-01',
    num: '01',
    name: 'Prof. Bhabani Prasad Roy',
    role: 'Chief Marketing Adviser',
    portrait: '/images/leadership/Bhabani%20Prasad%20Roy.png',
    portraitAlt: 'Prof. Bhabani Prasad Roy, Chief Marketing Adviser'
  },
  {
    id: 'LEAD-02',
    num: '02',
    name: 'Sreyan Saha',
    role: 'Director of AI and Innovation',
    portrait: '/images/leadership/Sreyan%20Saha.jpeg',
    portraitAlt: 'Sreyan Saha, Director of AI and Innovation'
  },
  {
    id: 'LEAD-03',
    num: '03',
    name: 'Tanisha Saha',
    role: 'Director of Web Development',
    portrait: '/images/leadership/Tanisha%20Saha.jpeg',
    portraitAlt: 'Tanisha Saha, Director of Web Development'
  },
  {
    id: 'ENG-01',
    num: '04',
    name: 'Animesh Patra',
    role: 'Software Development Engineer: AI',
    domain: 'Artificial Intelligence & Systems',
    portrait: '/images/leadership/Animesh%20patra.jpg',
    portraitAlt: 'Animesh Patra, Software Development Engineer: AI',
    linkedin: 'https://www.linkedin.com/in/animesh-patra2004/'
  },
  {
    id: 'ENG-02',
    num: '05',
    name: 'Amitava Giri',
    role: 'AI & Cloud Engineer',
    domain: 'Cloud Architecture & Intelligence',
    portrait: '/images/leadership/Amitava%20Giri.png',
    portraitAlt: 'Amitava Giri, AI & Cloud Engineer',
    linkedin: 'https://www.linkedin.com/in/amitava-giri/'
  },
  {
    id: 'ENG-03',
    num: '06',
    name: 'Soumosish Jana',
    role: 'Full Stack Engineer: AI',
    domain: 'Full Stack Applications & AI',
    portrait: '/images/leadership/soumosish%20Jana.png',
    portraitAlt: 'Soumosish Jana, Full Stack Engineer: AI',
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

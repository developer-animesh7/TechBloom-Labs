/* ==========================================================================
   Internships — featured programs, example listings, filters.
   Focuses on program structure, eligibility, benefits, and mentorship.
   Zero public pricing / fee figures.
   ========================================================================== */

export const programBenefits = [
  'Expert / Industry Mentorship',
  'Guided Real-World Project',
  'Internship Certificate on Completion',
  'Performance Evaluation & Feedback',
  'Professional Guidance'
];

export const featuredPrograms = [
  {
    id: 'two-month',
    label: 'Focused',
    duration: '2-Month Internship',
    months: '2',
    description:
      'A focused internship experience designed to help students gain practical exposure and complete a meaningful technology or research project.',
    benefits: programBenefits,
    cta: 'Browse 2-month programs'
  },
  {
    id: 'six-month',
    label: 'Extended',
    duration: '6-Month Internship',
    months: '6',
    description:
      'An extended internship designed for deeper project execution, comprehensive mentorship and rigorous portfolio preparation.',
    benefits: programBenefits,
    cta: 'Browse 6-month programs'
  }
];

/* Filter dimensions presented in the Internship Hub. */
export const filterGroups = [
  { id: 'domain', label: 'Domain' },
  { id: 'duration', label: 'Duration' },
  { id: 'location', label: 'Location' },
  { id: 'mode', label: 'Mode' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'skills', label: 'Skills' },
  { id: 'difficulty', label: 'Difficulty' },
  { id: 'deadline', label: 'Deadline' }
];

/* Example listings used to demonstrate the browsing experience. */
export const internships = [
  {
    id: 'ip-ai-2m',
    title: 'AI Research Internship',
    category: 'ai-ml',
    months: '2',
    mode: 'Online',
    location: 'Remote',
    eligibility: 'B.Tech / B.Sc / M.Tech · Year 2 onwards',
    skills: ['Python', 'ML basics'],
    difficulty: 'Intermediate',
    deadline: 'Rolling',
    type: 'Research',
    lead: 'Expert-led'
  },
  {
    id: 'ip-data-2m',
    title: 'Data Science Project Internship',
    category: 'data-science',
    months: '2',
    mode: 'Online',
    location: 'Remote',
    eligibility: 'Any UG degree · Year 2 onwards',
    skills: ['Python', 'SQL', 'Statistics'],
    difficulty: 'Beginner',
    deadline: 'Rolling',
    type: 'Guided project',
    lead: 'Industry mentor'
  },
  {
    id: 'ip-software-2m',
    title: 'Software Engineering Internship',
    category: 'software',
    months: '2',
    mode: 'Online',
    location: 'Remote',
    eligibility: 'B.Tech / BCA / MCA · Year 2 onwards',
    skills: ['JavaScript', 'Git', 'APIs'],
    difficulty: 'Beginner',
    deadline: 'Rolling',
    type: 'Guided project',
    lead: 'Expert-led'
  },
  {
    id: 'ip-health-2m',
    title: 'Healthcare Operations Internship',
    category: 'healthcare',
    months: '2',
    mode: 'Hybrid',
    location: 'Kolkata + Remote',
    eligibility: 'Any UG degree · Year 2 onwards',
    skills: ['Process mapping', 'Reporting'],
    difficulty: 'Beginner',
    deadline: 'Rolling',
    type: 'Applied project',
    lead: 'Industry mentor'
  },
  {
    id: 'ip-biotech-2m',
    title: 'Laboratory Informatics Internship',
    category: 'biotech',
    months: '2',
    mode: 'Offline',
    location: 'Kolkata',
    eligibility: 'B.Sc / B.Tech Biotechnology · Year 2 onwards',
    skills: ['Lab methods', 'Documentation'],
    difficulty: 'Beginner',
    deadline: 'Rolling',
    type: 'Research',
    lead: 'Expert-led'
  },
  {
    id: 'ip-agri-6m',
    title: 'Agriculture Technology Internship',
    category: 'agriculture',
    months: '6',
    mode: 'Hybrid',
    location: 'Kolkata + Remote',
    eligibility: 'B.Tech / B.Sc Agriculture · Year 3 onwards',
    skills: ['Web development', 'Data modelling'],
    difficulty: 'Intermediate',
    deadline: 'Cohort based',
    type: 'Applied project',
    lead: 'Expert-led'
  },
  {
    id: 'ip-cyber-6m',
    title: 'Cybersecurity Internship',
    category: 'cybersecurity',
    months: '6',
    mode: 'Online',
    location: 'Remote',
    eligibility: 'B.Tech / BCA / MCA · Year 3 onwards',
    skills: ['Networking', 'Linux', 'Scripting'],
    difficulty: 'Advanced',
    deadline: 'Cohort based',
    type: 'Industry',
    lead: 'Industry mentor'
  },
  {
    id: 'ip-pharma-6m',
    title: 'Pharmaceutical Research Workflow Internship',
    category: 'pharma',
    months: '6',
    mode: 'Offline',
    location: 'Kolkata',
    eligibility: 'B.Pharm / M.Pharm / Biotechnology · Year 3 onwards',
    skills: ['Lab process', 'Documentation'],
    difficulty: 'Intermediate',
    deadline: 'Cohort based',
    type: 'Research',
    lead: 'Expert-led'
  },
  {
    id: 'ip-livestock-6m',
    title: 'Livestock Data Systems Internship',
    category: 'livestock',
    months: '6',
    mode: 'Hybrid',
    location: 'West Bengal + Remote',
    eligibility: 'Veterinary / Agriculture / CS · Year 3 onwards',
    skills: ['Databases', 'Record design'],
    difficulty: 'Intermediate',
    deadline: 'Cohort based',
    type: 'Research',
    lead: 'Expert-led'
  },
  {
    id: 'ip-infra-6m',
    title: 'Infrastructure Project Management Internship',
    category: 'infrastructure',
    months: '6',
    mode: 'Offline',
    location: 'Kolkata',
    eligibility: 'B.Tech Civil / Architecture · Year 3 onwards',
    skills: ['Scheduling', 'Reporting'],
    difficulty: 'Intermediate',
    deadline: 'Cohort based',
    type: 'Industry',
    lead: 'Industry mentor'
  }
];

/* Application system — the eight steps of applying. */
export const applicationSteps = [
  { step: '01', title: 'Find an internship', body: 'Filter by domain, duration, mode, skills and deadline.' },
  { step: '02', title: 'Open the opportunity details', body: 'Read the scope, mentorship and what the program includes.' },
  { step: '03', title: 'Check eligibility', body: 'Degree, year, skills and prerequisites are stated up front.' },
  { step: '04', title: 'Apply using your TechBloom Labs profile', body: 'One profile carries across every application.' },
  { step: '05', title: 'Submit additional questions or documents', body: 'Program-specific questions and attachments in one step.' },
  { step: '06', title: 'Review application requirements', body: 'Program prerequisites, preferences and scheduling are reviewed.' },
  { step: '07', title: 'Receive application confirmation', body: 'A record of what was submitted, and when.' },
  { step: '08', title: 'Track it from your dashboard', body: 'Follow the status without having to ask.' }
];

/* Example application records — interface illustration only. */
export const trackedApplications = [
  { id: 'app-1', title: 'AI Research Internship', duration: '2 Months', status: 'Under Review' },
  { id: 'app-2', title: 'Data Science Project', duration: '2 Months', status: 'Selected' },
  { id: 'app-3', title: 'Cybersecurity Internship', duration: '6 Months', status: 'Submitted' }
];

export const statusFlow = ['Submitted', 'Under Review', 'Shortlisted', 'Interview', 'Selected'];

export default {
  programBenefits,
  featuredPrograms,
  filterGroups,
  internships,
  applicationSteps,
  trackedApplications,
  statusFlow
};

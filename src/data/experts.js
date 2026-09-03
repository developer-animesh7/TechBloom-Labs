/* ==========================================================================
   Experts — structural profiles based on existing project data.
   No credentials, institutions, or affiliations are invented. Each entry
   carries a structural reference code; names and affiliations appear only
   after verification.
   ========================================================================== */

export const expertsPlaceholderNote =
  'Expert identities and institutional affiliations are published only after verification. Entries below show the structure of a profile using reference codes.';

export const facultyPlaceholderNote = expertsPlaceholderNote;

export const experts = [
  {
    ref: 'E-01',
    name: '',
    field: 'AI & Machine Learning',
    category: 'ai-ml',
    research: 'Applied deep learning, document understanding',
    institution: '',
    expertise: ['NLP', 'Computer vision', 'Model evaluation'],
    projects: 3,
    mentoring: true
  },
  {
    ref: 'E-02',
    name: '',
    field: 'Data Science',
    category: 'data-science',
    research: 'Forecasting and decision analytics',
    institution: '',
    expertise: ['Time series', 'Experiment design', 'Visualisation'],
    projects: 2,
    mentoring: true
  },
  {
    ref: 'E-03',
    name: '',
    field: 'Cybersecurity',
    category: 'cybersecurity',
    research: 'Network monitoring and vulnerability workflow',
    institution: '',
    expertise: ['Threat detection', 'Secure design', 'Log analytics'],
    projects: 2,
    mentoring: true
  },
  {
    ref: 'E-04',
    name: '',
    field: 'Software Engineering',
    category: 'software',
    research: 'Distributed systems, workflow automation',
    institution: '',
    expertise: ['API architecture', 'State management', 'Testing'],
    projects: 3,
    mentoring: true
  },
  {
    ref: 'E-05',
    name: '',
    field: 'Healthcare Technology',
    category: 'healthcare',
    research: 'Operational efficiency and referral coordination',
    institution: '',
    expertise: ['Audit workflows', 'Queue modelling', 'Compliance'],
    projects: 1,
    mentoring: true
  },
  {
    ref: 'E-06',
    name: '',
    field: 'Biotechnology & Life Sciences',
    category: 'biotech',
    research: 'Laboratory informatics and sample tracking',
    institution: '',
    expertise: ['Bio-data storage', 'Batch pipelines', 'QC schemas'],
    projects: 1,
    mentoring: false
  },
  {
    ref: 'E-07',
    name: '',
    field: 'Agriculture Technology',
    category: 'agriculture',
    research: 'Telemetry, crop cycle and harvest scheduling',
    institution: '',
    expertise: ['Field telemetry', 'Advisory engines', 'Soil metrics'],
    projects: 2,
    mentoring: true
  },
  {
    ref: 'E-08',
    name: '',
    field: 'Animal Genetics & Livestock',
    category: 'livestock',
    research: 'Pedigree tracking and breed performance records',
    institution: '',
    expertise: ['Genealogy graphs', 'Health event logs', 'Yield models'],
    projects: 1,
    mentoring: true
  },
  {
    ref: 'E-09',
    name: '',
    field: 'Pharmaceutical Technology',
    category: 'pharma',
    research: 'Batch manufacturing records and QA audits',
    institution: '',
    expertise: ['GxP compliance', 'Audit trails', 'Formulation tracking'],
    projects: 1,
    mentoring: false
  },
  {
    ref: 'E-10',
    name: '',
    field: 'Infrastructure Management',
    category: 'infrastructure',
    research: 'Civil project scheduling and milestone tracking',
    institution: '',
    expertise: ['Resource leveling', 'Risk logs', 'Inspection workflows'],
    projects: 1,
    mentoring: true
  }
];

export const faculty = experts;

export default { experts, faculty, expertsPlaceholderNote, facultyPlaceholderNote };

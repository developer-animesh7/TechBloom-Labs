/* ==========================================================================
   Career paths — powers the Career Path Explorer.
   The roadmap is generated in the browser by combining a specialisation track
   with a selected interest and the student's current year.
   ========================================================================== */

export const tracks = {
  'ai-ml': {
    label: 'AI / Machine Learning',
    years: [
      ['Python', 'Git', 'Mathematics for ML', 'Mini projects'],
      ['Data structures', 'ML fundamentals', 'Scikit-learn', 'First research project'],
      ['Deep learning', 'Model evaluation', 'Internship', 'Major project'],
      ['Portfolio and papers', 'ML system design', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Research Assistant']
  },
  'data-science': {
    label: 'Data Science & Analytics',
    years: [
      ['Python', 'SQL', 'Statistics', 'Spreadsheet analysis'],
      ['Data wrangling', 'Visualisation', 'Probability', 'Analytics project'],
      ['Forecasting', 'Experiment design', 'Internship', 'Domain analytics project'],
      ['Case-study portfolio', 'Business communication', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Data Analyst', 'Data Scientist', 'Business Intelligence Analyst', 'Research Analyst']
  },
  software: {
    label: 'Software Engineering',
    years: [
      ['One language in depth', 'Git', 'Computer fundamentals', 'Mini projects'],
      ['Data structures and algorithms', 'Databases', 'Web or app development', 'Team project'],
      ['System design basics', 'Testing and code review', 'Internship', 'Major project'],
      ['Portfolio and open source', 'Interview preparation', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Software Engineer', 'Backend Developer', 'Frontend Developer', 'Product Engineer']
  },
  cybersecurity: {
    label: 'Cybersecurity',
    years: [
      ['Networking fundamentals', 'Linux', 'Python scripting', 'Home lab setup'],
      ['Operating systems and protocols', 'Web security basics', 'Capture-the-flag practice', 'Security project'],
      ['Threat detection', 'Vulnerability workflow', 'Internship', 'Security major project'],
      ['Certification preparation', 'Reporting and documentation', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Security Analyst', 'SOC Analyst', 'Application Security Engineer', 'Security Researcher']
  },
  healthcare: {
    label: 'Healthcare Technology',
    years: [
      ['Healthcare systems overview', 'Process mapping', 'Records and spreadsheets', 'Observation study'],
      ['Health data structures', 'Workflow design', 'Reporting basics', 'Coordination project'],
      ['Operational analytics', 'Service quality methods', 'Internship', 'Applied major project'],
      ['Portfolio of process work', 'Domain communication', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Healthcare Operations Analyst', 'Health Informatics Associate', 'Service Coordinator', 'Product Analyst']
  },
  pharma: {
    label: 'Pharmaceutical Technology',
    years: [
      ['Pharmaceutical fundamentals', 'Laboratory practice', 'Documentation discipline', 'Lab records project'],
      ['Analysis methods', 'Quality concepts', 'Inventory and batch records', 'Lab workflow project'],
      ['Research workflow management', 'Quality-control processes', 'Internship', 'Research major project'],
      ['Research portfolio', 'Regulatory awareness', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Research Associate', 'Quality Assurance Associate', 'Laboratory Data Coordinator', 'Regulatory Affairs Trainee']
  },
  agriculture: {
    label: 'Agriculture Technology',
    years: [
      ['Crop science fundamentals', 'Field observation methods', 'Record keeping', 'Season study project'],
      ['Soil and irrigation data', 'Farm activity systems', 'Basic programming', 'Crop monitoring project'],
      ['Agricultural analytics', 'Sensor and field data', 'Internship', 'Farm platform project'],
      ['Portfolio of field work', 'Extension and reporting', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Agri-Tech Associate', 'Farm Data Analyst', 'Agricultural Research Assistant', 'Field Operations Coordinator']
  },
  livestock: {
    label: 'Animal Genetics & Livestock Systems',
    years: [
      ['Animal science fundamentals', 'Record keeping methods', 'Breed and lineage basics', 'Herd observation project'],
      ['Genetics fundamentals', 'Data structures for records', 'Event and health logging', 'Lineage records project'],
      ['Breeding record systems', 'Research data organisation', 'Internship', 'Livestock data platform project'],
      ['Research portfolio', 'Documentation and reporting', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Livestock Data Associate', 'Animal Research Assistant', 'Breeding Records Coordinator', 'Agri Research Analyst']
  },
  infrastructure: {
    label: 'Infrastructure & Construction Technology',
    years: [
      ['Construction fundamentals', 'Drawing and measurement', 'Site safety awareness', 'Site study project'],
      ['Estimation and scheduling', 'Materials management', 'Project documentation', 'Planning project'],
      ['Project controls and milestones', 'Contractor coordination', 'Internship', 'Project management major work'],
      ['Portfolio of project work', 'Reporting and analytics', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Project Engineer', 'Planning Engineer', 'Site Coordinator', 'Construction Technology Analyst']
  },
  biotech: {
    label: 'Biotechnology',
    years: [
      ['Biology and chemistry core', 'Laboratory techniques', 'Documentation discipline', 'Lab notebook practice'],
      ['Molecular methods', 'Experiment design', 'Data recording systems', 'Lab project'],
      ['Research methods', 'Laboratory informatics', 'Internship', 'Research major project'],
      ['Research portfolio', 'Publication and presentation', 'Placement preparation', 'Higher studies options']
    ],
    careers: ['Research Associate', 'Laboratory Analyst', 'Bioinformatics Trainee', 'Quality Analyst']
  }
};

export const degrees = [
  { id: 'btech-cse', label: 'B.Tech Computer Science', tracks: ['ai-ml', 'software', 'data-science', 'cybersecurity'] },
  { id: 'btech-it', label: 'B.Tech Information Technology', tracks: ['ai-ml', 'data-science', 'software', 'cybersecurity'] },
  { id: 'btech-ece', label: 'B.Tech Electronics / ECE', tracks: ['ai-ml', 'software', 'data-science', 'infrastructure'] },
  { id: 'btech-civil', label: 'B.Tech Civil / Architecture', tracks: ['infrastructure', 'data-science', 'software'] },
  { id: 'bca-mca', label: 'BCA / MCA', tracks: ['software', 'data-science', 'cybersecurity', 'ai-ml'] },
  { id: 'bsc-cs', label: 'B.Sc Computer Science', tracks: ['software', 'ai-ml', 'data-science', 'cybersecurity'] },
  { id: 'bsc-agri', label: 'B.Sc / B.Tech Agriculture', tracks: ['agriculture', 'livestock', 'data-science'] },
  { id: 'vet-animal', label: 'Veterinary / Animal Science', tracks: ['livestock', 'agriculture', 'data-science'] },
  { id: 'bpharm', label: 'B.Pharm / M.Pharm', tracks: ['pharma', 'biotech', 'data-science'] },
  { id: 'bsc-biotech', label: 'B.Sc / B.Tech Biotechnology', tracks: ['biotech', 'pharma', 'data-science'] },
  { id: 'health-admin', label: 'Healthcare / Hospital Administration', tracks: ['healthcare', 'data-science', 'software'] },
  {
    id: 'other',
    label: 'Other / Not listed yet',
    tracks: [
      'software', 'data-science', 'ai-ml', 'healthcare', 'agriculture',
      'infrastructure', 'pharma', 'biotech', 'livestock', 'cybersecurity'
    ]
  }
];

export const interests = [
  {
    id: 'research',
    label: 'Research and publishing',
    add: [
      'Read one paper a week',
      'Join a faculty research project',
      'Write and submit a paper',
      'Prepare higher studies applications'
    ],
    careers: ['Research Assistant', 'Higher studies (M.Tech / M.S. / Ph.D.)']
  },
  {
    id: 'building',
    label: 'Building products',
    add: [
      'Ship one small tool',
      'Build a project with real users',
      'Take a project end to end in an internship',
      'Publish a portfolio of shipped work'
    ],
    careers: ['Product Engineer', 'Founding Engineer']
  },
  {
    id: 'analysis',
    label: 'Analysis and decision-making',
    add: [
      'Learn spreadsheet analysis properly',
      'Run a small data study',
      'Own a reporting workstream in an internship',
      'Build a case-study portfolio'
    ],
    careers: ['Analyst', 'Technology Consultant']
  },
  {
    id: 'field',
    label: 'Field and applied work',
    add: [
      'Complete one structured field observation',
      'Collect and organise primary data',
      'Take an on-site internship',
      'Document field outcomes as evidence'
    ],
    careers: ['Field Operations Associate', 'Applied Research Associate']
  },
  {
    id: 'teaching',
    label: 'Teaching and mentoring',
    add: [
      'Explain a topic publicly once a month',
      'Mentor a first-year student',
      'Run a study group or workshop',
      'Build a teaching portfolio'
    ],
    careers: ['Teaching Assistant', 'Academic career track']
  }
];

export const studyYears = [
  { id: '1', label: 'Year 1' },
  { id: '2', label: 'Year 2' },
  { id: '3', label: 'Year 3' },
  { id: '4', label: 'Year 4 / Final year' },
  { id: 'pg', label: 'Postgraduate' }
];

export const yearLabels = ['Year 1', 'Year 2', 'Year 3', 'Year 4'];

/* Example pathway shown before a roadmap is generated. */
export const examplePathway = ['B.Tech IT', 'AI / ML', 'Projects', 'Internship', 'AI Engineer / Data Scientist / Research'];

export const exampleRoadmap = [
  { year: 'Year 1', items: ['Python', 'Git', 'Fundamentals', 'Mini projects'] },
  { year: 'Year 2', items: ['Data Structures', 'ML Basics', 'Research Project'] },
  { year: 'Year 3', items: ['Advanced ML', 'Internship', 'Major Project'] },
  { year: 'Year 4', items: ['Portfolio', 'Placement Prep', 'Higher Studies'] }
];

/**
 * Build a year-by-year roadmap from the selected degree, specialisation track,
 * interest and current year. Pure function — no side effects, no network.
 */
export function buildRoadmap({ degreeId, trackId, interestId, yearId }) {
  const degree = degrees.find((item) => item.id === degreeId);
  const resolvedTrackId = trackId || degree?.tracks?.[0];
  const track = tracks[resolvedTrackId];

  if (!track) return null;

  const interest = interests.find((item) => item.id === interestId);
  const currentYearIndex = yearId === 'pg' ? 3 : Math.max(0, Number(yearId || 1) - 1);

  const years = track.years.map((items, index) => {
    const extra = interest?.add?.[index] ? [interest.add[index]] : [];
    return {
      year: yearLabels[index],
      items: [...items, ...extra],
      state: index < currentYearIndex ? 'past' : index === currentYearIndex ? 'current' : 'ahead'
    };
  });

  const careers = [...new Set([...(track.careers || []), ...(interest?.careers || [])])];

  return {
    degreeLabel: degree?.label || 'Your degree',
    trackLabel: track.label,
    interestLabel: interest?.label || '',
    yearLabel: studyYears.find((item) => item.id === yearId)?.label || '',
    years,
    careers,
    pathway: [degree?.label, track.label, 'Projects', 'Internship', careers.slice(0, 3).join(' / ')].filter(Boolean)
  };
}

export default {
  tracks,
  degrees,
  interests,
  studyYears,
  yearLabels,
  examplePathway,
  exampleRoadmap,
  buildRoadmap
};

/* ==========================================================================
   Opportunities — consolidated discovery dataset spanning internships,
   research initiatives, project concepts, and faculty mentorship tracks.
   ========================================================================== */

export const opportunityTypes = [
  { id: 'all', label: 'All Opportunities' },
  { id: 'internship', label: 'Internships' },
  { id: 'research', label: 'Research Projects' },
  { id: 'project', label: 'Project Concepts' },
  { id: 'mentorship', label: 'Mentorship' }
];

export const opportunities = [
  {
    id: 'opp-1',
    type: 'internship',
    typeLabel: 'Internship',
    title: 'AI Research & Engineering Internship',
    domain: 'AI / Machine Learning',
    category: 'ai-ml',
    duration: '2 or 6 Months',
    mode: 'Online / Hybrid',
    lead: 'Faculty-led',
    summary: 'Develop document intelligence pipelines and machine learning evaluation harnesses with faculty guidance.',
    to: '/internships'
  },
  {
    id: 'opp-2',
    type: 'research',
    typeLabel: 'Research Initiative',
    title: 'Precision Agriculture Informatics',
    domain: 'Agriculture Technology',
    category: 'agriculture',
    duration: '6 Months',
    mode: 'Hybrid',
    lead: 'Faculty & Domain Advisor',
    summary: 'Design seasonal crop telemetry models, irrigation records, and farm workflow data systems.',
    to: '/research'
  },
  {
    id: 'opp-3',
    type: 'project',
    typeLabel: 'Project Concept',
    title: 'Pharmaceutical Laboratory Workflow System',
    domain: 'Pharmaceutical Technology',
    category: 'pharma',
    duration: 'Flexible / Semester',
    mode: 'Research Mode',
    lead: 'Faculty-led',
    summary: 'Build batch record management and laboratory quality-control documentation software.',
    to: '/projects/pharma-workflow'
  },
  {
    id: 'opp-4',
    type: 'mentorship',
    typeLabel: 'Mentorship',
    title: 'Data Science & Decision Analytics Mentorship',
    domain: 'Data Science',
    category: 'data-science',
    duration: 'Ongoing',
    mode: 'Online',
    lead: 'Senior Faculty Advisor (F-02)',
    summary: 'One-on-one and cohort guidance through forecasting methodologies and real-world cohort analysis.',
    to: '/faculty'
  },
  {
    id: 'opp-5',
    type: 'internship',
    typeLabel: 'Internship',
    title: 'Livestock Data Systems & Lineage Internship',
    domain: 'Animal Genetics',
    category: 'livestock',
    duration: '6 Months',
    mode: 'Hybrid',
    lead: 'Faculty-led',
    summary: 'Structured records for animal profiles, breed lineage tracking, and longitudinal research data.',
    to: '/internships'
  },
  {
    id: 'opp-6',
    type: 'research',
    typeLabel: 'Research Initiative',
    title: 'Healthcare Logistics & Capacity Analytics',
    domain: 'Healthcare Technology',
    category: 'healthcare',
    duration: '6 Months',
    mode: 'Online',
    lead: 'Faculty Research Group',
    summary: 'Analyze operational throughput and service coordination models for outpatient workflows.',
    to: '/research'
  },
  {
    id: 'opp-7',
    type: 'project',
    typeLabel: 'Project Concept',
    title: 'Infrastructure Progress & Site Management',
    domain: 'Infrastructure',
    category: 'infrastructure',
    duration: '6 Months',
    mode: 'Hybrid',
    lead: 'Industry & Faculty Mentor',
    summary: 'Coordinate construction milestones, material tracking, and contractor progress reporting.',
    to: '/projects/infrastructure-pm'
  },
  {
    id: 'opp-8',
    type: 'mentorship',
    typeLabel: 'Mentorship',
    title: 'Cybersecurity Threat Detection & Architecture',
    domain: 'Cybersecurity',
    category: 'cybersecurity',
    duration: 'Semester Program',
    mode: 'Online',
    lead: 'Security Advisor (F-03)',
    summary: 'Structured mentorship covering vulnerability workflow systems, logging pipelines, and secure design.',
    to: '/faculty'
  }
];

export default { opportunityTypes, opportunities };

/* ==========================================================================
   Research — ecosystem areas, workflow methodology, and mentorship structure.
   Preserves research concepts without fabricating publications or achievements.
   ========================================================================== */

export const researchStatement = 'WHERE RESEARCH MEETS REAL-WORLD INNOVATION.';

export const researchIntro =
  'TechBloom Labs operates as a collaborative bridge between academic inquiry and practical application. Students and researchers work alongside faculty advisors on structured problem formulations, domain datasets, and real-world system designs.';

export const researchAreas = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    summary: 'Document intelligence, computer vision pipelines, predictive models, and structured evaluation harnesses.',
    domains: ['Natural Language Processing', 'Computer Vision', 'Predictive Modeling', 'Evaluation Frameworks']
  },
  {
    id: 'agritech',
    title: 'Precision Agriculture & Sensor Informatics',
    summary: 'Soil telemetry records, crop planning systems, irrigation data pipelines, and agricultural analytics.',
    domains: ['Field Activity Records', 'Crop Lifecycle Monitoring', 'Irrigation Telemetry', 'Yield Analytics']
  },
  {
    id: 'genetics-livestock',
    title: 'Animal Genetics & Lineage Data Systems',
    summary: 'Longitudinal lineage recording, breed trait organization, herd health event tracking, and data integrity.',
    domains: ['Lineage Graph Structures', 'Breed Records', 'Breeding History', 'Research Data Integrity']
  },
  {
    id: 'pharma-workflows',
    title: 'Pharmaceutical Laboratory Informatics',
    summary: 'Batch traceability protocols, compound tracking, lab experiment workflows, and quality-control systems.',
    domains: ['Batch Management', 'Quality-Control Records', 'Laboratory Workflows', 'Audit Documentation']
  },
  {
    id: 'healthcare-systems',
    title: 'Healthcare Operations & Service Logistics',
    summary: 'Operational capacity modeling, appointment coordination pipelines, and clinical resource workflows.',
    domains: ['Service Scheduling', 'Queue Management', 'Resource Optimization', 'Throughput Analytics']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Telemetry Analytics',
    summary: 'Vulnerability remediation queues, security event telemetry, log analytics, and interactive awareness.',
    domains: ['Telemetry Interfaces', 'Vulnerability Workflows', 'Awareness Workspaces', 'Log Pipelines']
  }
];

export const researchWorkflow = [
  {
    step: '01',
    title: 'Problem Formulation',
    body: 'Academic problem statements are framed around real-world domain friction and concrete operational constraints.'
  },
  {
    step: '02',
    title: 'Domain Data & Architecture',
    body: 'Data models, schema designs, and algorithmic frameworks are established with strict integrity standards.'
  },
  {
    step: '03',
    title: 'Faculty Mentorship',
    body: 'Students collaborate with verified academic researchers and domain advisors for weekly guidance and peer review.'
  },
  {
    step: '04',
    title: 'Iterative Implementation',
    body: 'Solutions are engineered through measurable milestones, reproducible codebases, and rigorous evaluation.'
  },
  {
    step: '05',
    title: 'Dissemination & Portfolio',
    body: 'Outcomes are synthesized into comprehensive documentation, project portfolios, and potential research publications.'
  }
];

export const studentInvolvement = [
  {
    title: 'Hands-on Problem Solving',
    description: 'Work directly on real-world datasets and architectures instead of isolated academic toy problems.'
  },
  {
    title: 'Direct Faculty Guidance',
    description: 'Learn research methodologies, paper analysis, and critical thinking from verified university faculty.'
  },
  {
    title: 'Verifiable Proof of Work',
    description: 'Build a public portfolio with traceable code, architecture diagrams, and evaluated project outcomes.'
  },
  {
    title: 'Pathway to Higher Studies',
    description: 'Strong foundation for graduate studies, research fellowships, and competitive engineering careers.'
  }
];

export default {
  researchStatement,
  researchIntro,
  researchAreas,
  researchWorkflow,
  studentInvolvement
};

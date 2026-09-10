/* ==========================================================================
   Support — ticket categories and the trust pillars behind an opportunity.
   ========================================================================== */

export const supportCategories = [
  { id: 'payment', label: 'Payment Issue', body: 'A program-fee payment did not go through, or was charged twice.' },
  { id: 'application', label: 'Application Problem', body: 'An application will not submit, or shows the wrong information.' },
  { id: 'internship', label: 'Internship Query', body: 'Questions about scope, duration, mode or eligibility.' },
  { id: 'project', label: 'Project / Research Help', body: 'Guidance on a project, its scope or its review.' },
  { id: 'mentor', label: 'Faculty / Mentor Issue', body: 'Difficulty reaching a mentor, or a mismatch in guidance.' },
  { id: 'account', label: 'Account Problem', body: 'Sign-in, profile or verification trouble.' },
  { id: 'certificate', label: 'Certificate Issue', body: 'A certificate is missing, delayed or incorrect.' },
  { id: 'other', label: 'Other', body: 'Anything that does not fit the categories above.' }
];

export const exampleTicketId = '#TB1024';

export const supportPromise =
  'Every issue can become a trackable support ticket — such as #TB1024 — with the full conversation history kept in one place.';

/* Verified opportunities — trust pillars. Deliberately worded without
   absolute guarantees. */
export const trustPillars = [
  {
    id: 'faculty',
    icon: 'badge',
    title: 'Verified Faculty',
    body: 'Identity and institutional affiliation checked before a profile is published.'
  },
  {
    id: 'organizations',
    icon: 'building',
    title: 'Verified Organizations',
    body: 'Partners reviewed before they can post opportunities.'
  },
  {
    id: 'fees',
    icon: 'receipt',
    title: 'Transparent Engagements',
    body: 'Project scopes, milestones, and commercial terms are clearly defined prior to engagement.'
  },
  {
    id: 'applications',
    icon: 'lock',
    title: 'Enterprise Data Security',
    body: 'Client, partner, and proprietary technical data is safeguarded with robust security standards.'
  },
  {
    id: 'support',
    icon: 'lifebuoy',
    title: 'Dedicated Support',
    body: 'A clear channel to get help when something goes wrong.'
  }
];

/* Trust highlights shown near the hero. No numerical claims. */
export const trustHighlights = [
  { title: 'Research Rigor', body: 'Scientific discovery translated into scalable software' },
  { title: 'Enterprise Engineering', body: 'Robust cloud, AI, and digital architectures' },
  { title: 'Specialized Domains', body: 'Proven technology frameworks across 10 sectors' },
  { title: 'Technical Leadership', body: 'Advisory guidance from distinguished technologists' }
];

/* Why TechBloom Labs — the questions a syllabus does not answer. */
export const whyQuestions = [
  'Who should I learn from?',
  'What should I build?',
  'Where can I gain experience?',
  'Which internship should I pursue?',
  'What career could this lead to?'
];

export default {
  supportCategories,
  exampleTicketId,
  supportPromise,
  trustPillars,
  trustHighlights,
  whyQuestions
};

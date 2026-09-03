/* ==========================================================================
   Submission layer — deliberately isolated from every form component.
   Connecting a real email service later means editing this file only.

   Resolution order:
   1. VITE_CONTACT_ENDPOINT set → POST JSON, report the real result.
   2. VITE_CONTACT_EMAIL set    → compose a message in the user's mail client.
   3. Neither set               → report honestly that delivery is not wired up.

   Nothing here ever claims a message was delivered when it was not.
   ========================================================================== */

import { CONTACT_EMAIL, CONTACT_ENDPOINT } from '../data/company.js';

export const RESULT = {
  SUCCESS: 'success',
  COMPOSED: 'composed',
  NOT_CONFIGURED: 'not-configured',
  ERROR: 'error'
};

const LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  organization: 'Organization / Institution',
  interest: 'Interest',
  message: 'Message',
  category: 'Category',
  title: 'Project title',
  domain: 'Domain',
  problem: 'Problem statement',
  idea: 'Idea',
  outcome: 'Expected outcome',
  duration: 'Duration',
  skills: 'Skills and technologies',
  attachment: 'Attachment'
};

/** Render a readable plain-text body from any form payload. */
export function formatMessage(payload, { heading = 'TechBloom Labs enquiry' } = {}) {
  const lines = [heading, '='.repeat(heading.length), ''];

  Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '' || value === false) return;
    const label = LABELS[key] || key;
    lines.push(`${label}: ${value}`);
  });

  return lines.join('\n');
}

function buildMailto(payload, subject, heading) {
  const body = encodeURIComponent(formatMessage(payload, { heading }));
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Submit a form payload.
 * @returns {Promise<{ result: string, detail?: string, mailto?: string, text?: string }>}
 */
export async function submitForm(payload, { subject = 'TechBloom Labs enquiry', heading, formType = 'contact' } = {}) {
  const headingText = heading || subject;

  // Keep the submitting state visible long enough to read, without pretending.
  await wait(500);

  if (CONTACT_ENDPOINT) {
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType, subject, ...payload })
      });

      if (!response.ok) {
        return { result: RESULT.ERROR, detail: `Endpoint responded with ${response.status}.` };
      }
      return { result: RESULT.SUCCESS };
    } catch (error) {
      return { result: RESULT.ERROR, detail: error?.message || 'Network request failed.' };
    }
  }

  if (CONTACT_EMAIL) {
    const mailto = buildMailto(payload, subject, headingText);
    if (typeof window !== 'undefined') window.location.href = mailto;
    return { result: RESULT.COMPOSED, mailto };
  }

  return {
    result: RESULT.NOT_CONFIGURED,
    text: formatMessage(payload, { heading: headingText })
  };
}

/** Copy helper used by the not-configured state. */
export async function copyText(text) {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    return false;
  }
  return false;
}

export default submitForm;

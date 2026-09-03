/* ==========================================================================
   Validation — pure functions, no DOM, no framework.
   Messages are written to be read by a person, not a parser.
   ========================================================================== */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_PATTERN = /^[+()\-\s0-9]{7,20}$/;

export function isBlank(value) {
  return !value || String(value).trim().length === 0;
}

export function validateRequired(value, label = 'This field') {
  if (isBlank(value)) return `${label} is required.`;
  return '';
}

export function validateName(value) {
  if (isBlank(value)) return 'Please enter your full name.';
  if (String(value).trim().length < 2) return 'Please enter at least two characters.';
  return '';
}

export function validateEmail(value) {
  if (isBlank(value)) return 'Please enter your email address.';
  if (!EMAIL_PATTERN.test(String(value).trim())) {
    return 'That email address does not look complete — check for a missing @ or domain.';
  }
  return '';
}

export function validatePhone(value) {
  if (isBlank(value)) return '';
  if (!PHONE_PATTERN.test(String(value).trim())) {
    return 'Use digits, spaces, brackets, + or - only.';
  }
  return '';
}

export function validateMessage(value, min = 12) {
  if (isBlank(value)) return 'Please tell us what you need.';
  if (String(value).trim().length < min) {
    return `A little more detail helps — at least ${min} characters.`;
  }
  return '';
}

export function validateSelect(value, label = 'an option') {
  if (isBlank(value)) return `Please choose ${label}.`;
  return '';
}

export function validateConsent(checked) {
  if (!checked) return 'Please confirm before sending.';
  return '';
}

/** Optional attachment guard: type and size are checked before anything else. */
export function validateAttachment(file, { maxMB = 10, accept = [] } = {}) {
  if (!file) return '';
  if (file.size > maxMB * 1024 * 1024) return `Please keep the file under ${maxMB} MB.`;
  if (accept.length) {
    const name = file.name.toLowerCase();
    const allowed = accept.some((ext) => name.endsWith(ext));
    if (!allowed) return `Accepted formats: ${accept.join(', ')}.`;
  }
  return '';
}

/**
 * Run a field-name → validator map over values.
 * @returns {{ errors: Record<string,string>, isValid: boolean, firstField: string }}
 */
export function runValidators(values, validators) {
  const errors = {};

  Object.entries(validators).forEach(([field, validator]) => {
    const message = validator(values[field], values);
    if (message) errors[field] = message;
  });

  const fields = Object.keys(errors);

  return {
    errors,
    isValid: fields.length === 0,
    firstField: fields[0] || ''
  };
}

export default {
  isBlank,
  validateRequired,
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
  validateSelect,
  validateConsent,
  validateAttachment,
  runValidators
};

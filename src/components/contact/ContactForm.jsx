import { useEffect, useRef, useState } from 'react';
import Button from '../common/Button.jsx';
import FormField from './FormField.jsx';
import FormStatus from './FormStatus.jsx';
import {
  runValidators,
  validateAttachment,
  validateConsent,
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
  validateSelect
} from '../../utils/validation.js';
import { submitForm } from '../../utils/submitForm.js';

export const INTEREST_OPTIONS = [
  { value: '', label: 'Select an option' },
  { value: 'Internship', label: 'Internship', slug: 'internship' },
  { value: 'Research Project', label: 'Research Project', slug: 'research-project' },
  { value: 'Faculty / Mentorship', label: 'Faculty / Mentorship', slug: 'faculty-mentorship' },
  { value: 'Partnership', label: 'Partnership', slug: 'partnership' },
  { value: 'Technology Project', label: 'Technology Project', slug: 'technology-project' },
  { value: 'Agriculture Project', label: 'Agriculture Project', slug: 'agriculture-project' },
  { value: 'Pharmaceutical Project', label: 'Pharmaceutical Project', slug: 'pharmaceutical-project' },
  { value: 'Healthcare Project', label: 'Healthcare Project', slug: 'healthcare-project' },
  { value: 'Infrastructure Project', label: 'Infrastructure Project', slug: 'infrastructure-project' },
  { value: 'Software Development', label: 'Software Development', slug: 'software-development' },
  { value: 'Career Guidance', label: 'Career Guidance', slug: 'career-guidance' },
  { value: 'General Inquiry', label: 'General Inquiry', slug: 'general-inquiry' },
  { value: 'Other', label: 'Other', slug: 'other' }
];

const ACCEPTED = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg'];

const VALIDATORS = {
  name: (value) => validateName(value),
  email: (value) => validateEmail(value),
  phone: (value) => validatePhone(value),
  interest: (value) => validateSelect(value, 'what you are interested in'),
  message: (value) => validateMessage(value, 15),
  consent: (value) => validateConsent(value)
};

/**
 * Contact form. Full client-side validation with per-field errors, a visible
 * submitting state and result states that describe exactly what happened.
 *
 * @param {string} initialInterest preselected value from ?intent=
 * @param {string} contextNote     appended to the message, e.g. a program name
 */
export default function ContactForm({ initialInterest = '', contextNote = '' }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: initialInterest,
    message: contextNote ? `Regarding: ${contextNote}\n\n` : '',
    consent: false
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const statusRef = useRef(null);

  useEffect(() => {
    if (initialInterest) setValues((prev) => ({ ...prev, interest: initialInterest }));
  }, [initialInterest]);

  const update = (field) => (event) => {
    const next = field === 'consent' ? event.target.checked : event.target.value;
    setValues((prev) => ({ ...prev, [field]: next }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const blur = (field) => () => {
    const validator = VALIDATORS[field];
    if (!validator) return;
    setErrors((prev) => ({ ...prev, [field]: validator(values[field], values) }));
  };

  const onFileChange = (event) => {
    const selected = event.target.files?.[0] || null;
    const message = validateAttachment(selected, { maxMB: 10, accept: ACCEPTED });
    setErrors((prev) => ({ ...prev, attachment: message }));
    setFile(message ? null : selected);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { errors: found, isValid, firstField } = runValidators(values, VALIDATORS);

    /* Re-check the attachment from the file itself, not from previous state. */
    const attachmentError = validateAttachment(file, { maxMB: 10, accept: ACCEPTED });
    if (attachmentError) found.attachment = attachmentError;
    setErrors(found);

    if (!isValid || attachmentError) {
      document.getElementById(`contact-${firstField || 'attachment'}`)?.focus();
      return;
    }

    setLoading(true);
    setResult(null);

    const response = await submitForm(
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        organization: values.organization,
        interest: values.interest,
        message: values.message,
        attachment: file ? `${file.name} (attach manually)` : ''
      },
      {
        subject: `TechBloom Labs enquiry — ${values.interest}`,
        heading: 'TechBloom Labs contact enquiry',
        formType: 'contact'
      }
    );

    setLoading(false);
    setResult(response);
    window.setTimeout(() => statusRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
  };

  return (
    <form className="form contact-form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        <FormField
          id="contact-name"
          name="name"
          label="Full name"
          value={values.name}
          onChange={update('name')}
          onBlur={blur('name')}
          error={errors.name}
          autoComplete="name"
          required
        />
        <FormField
          id="contact-email"
          name="email"
          label="Email address"
          type="email"
          value={values.email}
          onChange={update('email')}
          onBlur={blur('email')}
          error={errors.email}
          autoComplete="email"
          required
        />
        <FormField
          id="contact-phone"
          name="phone"
          label="Phone number"
          type="tel"
          inputMode="tel"
          value={values.phone}
          onChange={update('phone')}
          onBlur={blur('phone')}
          error={errors.phone}
          autoComplete="tel"
          optional
        />
        <FormField
          id="contact-organization"
          name="organization"
          label="Organization / Institution"
          value={values.organization}
          onChange={update('organization')}
          autoComplete="organization"
          optional
        />
        <FormField
          id="contact-interest"
          name="interest"
          label="I am interested in"
          type="select"
          value={values.interest}
          onChange={update('interest')}
          onBlur={blur('interest')}
          error={errors.interest}
          options={INTEREST_OPTIONS.map(({ value, label }) => ({ value, label }))}
          required
          full
        />
        <FormField
          id="contact-message"
          name="message"
          label="Message"
          type="textarea"
          rows={7}
          value={values.message}
          onChange={update('message')}
          onBlur={blur('message')}
          error={errors.message}
          help="What you are working on, what you need, and any timing that matters."
          required
          full
        />
        <FormField
          id="contact-attachment"
          name="attachment"
          label="Attachment"
          type="file"
          accept={ACCEPTED.join(',')}
          onChange={onFileChange}
          error={errors.attachment}
          fileName={file?.name}
          help={`Optional. ${ACCEPTED.join(', ')} up to 10 MB. Attach it to the email draft when prompted.`}
          optional
          full
        />
      </div>

      <div className={`check${errors.consent ? ' has-error' : ''}`}>
        <input
          id="contact-consent"
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={update('consent')}
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
        />
        <label htmlFor="contact-consent">
          I agree that TechBloom Labs may use the details above to respond to this enquiry.
        </label>
        {errors.consent ? (
          <p className="field__error" id="contact-consent-error" style={{ display: 'flex' }}>
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div ref={statusRef}>
        <FormStatus
          state={result?.result}
          detail={result?.detail}
          text={result?.text}
          subject={`TechBloom Labs enquiry — ${values.interest}`}
        />
      </div>

      <div className="actions">
        <Button type="submit" loading={loading} loadingLabel="Sending…" arrow>
          Send Message
        </Button>
        <p className="t-xs">Fields marked * are required.</p>
      </div>
    </form>
  );
}

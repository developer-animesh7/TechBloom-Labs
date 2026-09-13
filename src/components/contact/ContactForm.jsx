import { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../common/Button.jsx';
import FormField from './FormField.jsx';
import SubmissionStatusModal from './SubmissionStatusModal.jsx';
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

export const INTEREST_OPTIONS = [
  { value: '', label: 'Select an option' },
  { value: 'Consulting Services', label: 'Consulting Services', slug: 'consulting-services' },
  { value: 'Research & Development', label: 'Research & Development', slug: 'research-development' },
  { value: 'Product Building & Development', label: 'Product Building & Development', slug: 'product-building-development' },
  { value: 'Market Research & Analysis', label: 'Market Research & Analysis', slug: 'market-research-analysis' },
  { value: 'Digital Transformation Services', label: 'Digital Transformation Services', slug: 'digital-transformation-services' },
  { value: 'Training & Professional Development', label: 'Training & Professional Development', slug: 'training-professional-development' },
  { value: 'Internship Application', label: 'Internship Application', slug: 'internship' },
  { value: 'Job Application', label: 'Job Application', slug: 'job' },
  { value: 'General Career Inquiry', label: 'General Career Inquiry', slug: 'career' },
  { value: 'Research Project', label: 'Research Project', slug: 'research-project' },
  { value: 'Faculty / Mentorship', label: 'Faculty / Mentorship', slug: 'faculty-mentorship' },
  { value: 'Partnership', label: 'Partnership', slug: 'partnership' },
  { value: 'Technology Project', label: 'Technology Project', slug: 'technology-project' },
  { value: 'Career Guidance', label: 'Career Guidance', slug: 'career-guidance' },
  { value: 'General Inquiry', label: 'General Inquiry', slug: 'general-inquiry' },
  { value: 'Other', label: 'Other', slug: 'other' }
];

const ACCEPTED = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg'];
const FORMSPREE_ID = 'mdeobzno';

const VALIDATORS = {
  name: (value) => validateName(value),
  email: (value) => validateEmail(value),
  phone: (value) => validatePhone(value),
  interest: (value) => validateSelect(value, 'what you are interested in'),
  message: (value) => validateMessage(value, 15),
  consent: (value) => validateConsent(value)
};

/**
 * Contact form with official Formspree React integration (useForm).
 * Drives UI state directly via submitting, succeeded, and errors.
 * Renders a premium SubmissionStatusModal confirmation without redirecting.
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

  // Official Formspree React Hook
  const [state, handleSubmit, reset] = useForm(FORMSPREE_ID);

  // Premium Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    if (initialInterest) setValues((prev) => ({ ...prev, interest: initialInterest }));
  }, [initialInterest]);

  // Handle Formspree submission lifecycle
  useEffect(() => {
    if (state.succeeded) {
      setModalStatus('success');
      setModalMessage('Thank you for contacting TechBloom Labs. Your message has been received.');
      setModalOpen(true);
      // Reset form values cleanly on confirmed Formspree success
      setValues({
        name: '',
        email: '',
        phone: '',
        organization: '',
        interest: initialInterest || '',
        message: '',
        consent: false
      });
      setFile(null);
      setErrors({});
      const fileInput = document.getElementById('contact-attachment');
      if (fileInput) fileInput.value = '';
    } else if (state.errors) {
      const formErrors = typeof state.errors.getFormErrors === 'function' ? state.errors.getFormErrors() : [];
      const allFieldErrors = typeof state.errors.getAllFieldErrors === 'function' ? state.errors.getAllFieldErrors() : [];
      const attachmentErrors = typeof state.errors.getFieldErrors === 'function' ? state.errors.getFieldErrors('attachment') : [];

      // Extract all error messages and codes
      const allMessages = [
        ...formErrors.map((e) => (typeof e === 'string' ? e : e?.message || '')),
        ...attachmentErrors.map((e) => (typeof e === 'string' ? e : e?.message || '')),
        ...allFieldErrors.flatMap(([_, errs]) => errs.map((e) => (typeof e === 'string' ? e : e?.message || '')))
      ].filter(Boolean);

      const allCodes = [
        ...formErrors.map((e) => e?.code || ''),
        ...attachmentErrors.map((e) => e?.code || ''),
        ...allFieldErrors.flatMap(([_, errs]) => errs.map((e) => e?.code || ''))
      ].filter(Boolean);

      const isFileRelated =
        attachmentErrors.length > 0 ||
        allCodes.some((code) => ['NO_FILE_UPLOADS', 'FILES_TOO_BIG', 'TOO_MANY_FILES'].includes(code)) ||
        allMessages.some((msg) => {
          const lower = msg.toLowerCase();
          return (
            lower.includes('file') ||
            lower.includes('upload') ||
            lower.includes('attachment') ||
            lower.includes('size') ||
            lower.includes('multipart') ||
            lower.includes('not permitted') ||
            lower.includes('too big')
          );
        });

      let displayMessage = '';
      if (isFileRelated) {
        displayMessage = 'Unable to attach this file. Please choose another file and try again.';
      } else if (allMessages.length > 0) {
        displayMessage = allMessages.join(' ');
      } else {
        displayMessage = 'Something went wrong while sending your message. Please try again.';
      }

      setModalStatus('error');
      setModalMessage(displayMessage);
      setModalOpen(true);
    }
  }, [state.succeeded, state.errors, initialInterest]);

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

  const onFileRemove = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFile(null);
    setErrors((prev) => ({ ...prev, attachment: '' }));
    const fileInput = document.getElementById('contact-attachment');
    if (fileInput) fileInput.value = '';
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { errors: found, isValid, firstField } = runValidators(values, VALIDATORS);

    /* Re-check attachment */
    const attachmentError = validateAttachment(file, { maxMB: 10, accept: ACCEPTED });
    if (attachmentError) found.attachment = attachmentError;
    setErrors(found);

    if (!isValid || attachmentError) {
      document.getElementById(`contact-${firstField || 'attachment'}`)?.focus();
      return;
    }

    const submission = new FormData(event.currentTarget);
    submission.set('name', values.name.trim());
    submission.set('email', values.email.trim());
    if (values.phone?.trim()) submission.set('phone', values.phone.trim());
    else submission.delete('phone');
    if (values.organization?.trim()) submission.set('organization', values.organization.trim());
    else submission.delete('organization');
    submission.set('interest', values.interest);
    submission.set('message', values.message.trim());
    submission.set('_subject', `TechBloom Labs enquiry — ${values.interest || 'General'}`);
    if (file instanceof File) {
      submission.set('attachment', file, file.name);
    } else {
      submission.delete('attachment');
    }

    try {
      await handleSubmit(submission);
    } catch (err) {
      setModalStatus('error');
      setModalMessage(
        'Network error or server unavailable. Please check your connection and try again.'
      );
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    reset();
  };

  const handleRetry = () => {
    setModalOpen(false);
    reset();
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    submitBtn?.focus();
  };

  const isSubmitting = state.submitting;

  return (
    <>
      <form
        className="form contact-form"
        onSubmit={onSubmit}
        encType="multipart/form-data"
        noValidate
      >
        {/* Hidden subject for Formspree email notification */}
        <input
          type="hidden"
          name="_subject"
          value={`TechBloom Labs enquiry — ${values.interest || 'General'}`}
        />

        <div className="form__grid">
          <div>
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
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="field__error"
              style={{ display: 'flex' }}
            />
          </div>

          <div>
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="field__error"
              style={{ display: 'flex' }}
            />
          </div>

          <div>
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
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
              className="field__error"
              style={{ display: 'flex' }}
            />
          </div>

          <div>
            <FormField
              id="contact-organization"
              name="organization"
              label="Organization / Institution"
              value={values.organization}
              onChange={update('organization')}
              autoComplete="organization"
              optional
            />
            <ValidationError
              prefix="Organization"
              field="organization"
              errors={state.errors}
              className="field__error"
              style={{ display: 'flex' }}
            />
          </div>

          <div className="field--full">
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
            <ValidationError
              prefix="Interest"
              field="interest"
              errors={state.errors}
              className="field__error"
              style={{ display: 'flex' }}
            />
          </div>

          <div className="field--full">
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="field__error"
              style={{ display: 'flex' }}
            />
          </div>

          <FormField
            id="contact-attachment"
            name="attachment"
            label="Attachment"
            type="file"
            accept={ACCEPTED.join(',')}
            onChange={onFileChange}
            onClear={onFileRemove}
            error={errors.attachment}
            fileName={file?.name}
            help={`Optional. ${ACCEPTED.join(', ')} up to 10 MB.`}
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

        <div className="actions">
          <Button
            type="submit"
            loading={isSubmitting}
            loadingLabel="Sending…"
            disabled={isSubmitting}
            arrow
          >
            Send Message
          </Button>
          <p className="t-xs">Fields marked * are required.</p>
        </div>
      </form>

      {/* Premium Centered Confirmation & Error Modal */}
      <SubmissionStatusModal
        isOpen={modalOpen}
        status={modalStatus}
        message={modalMessage}
        onClose={handleCloseModal}
        onRetry={handleRetry}
      />
    </>
  );
}

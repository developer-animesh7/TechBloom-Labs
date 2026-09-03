import { useState } from 'react';
import { Alert, Check, Info } from '../../assets/icons/index.jsx';
import { RESULT, copyText } from '../../utils/submitForm.js';
import { CONTACT_EMAIL } from '../../data/company.js';

/**
 * Result panel for every form on the site.
 *
 * The states map one-to-one onto what actually happened:
 *   success        — an endpoint accepted the submission
 *   composed       — a message was opened in the visitor's mail client
 *   not-configured — no delivery route exists yet, so we say so and offer the
 *                    drafted message to copy. Nothing pretends to have sent.
 *   error          — the attempt failed
 */
export default function FormStatus({ state, detail, text, subject }) {
  const [copied, setCopied] = useState(false);

  if (!state) return null;

  const onCopy = async () => {
    const ok = await copyText(text || '');
    setCopied(ok);
  };

  if (state === RESULT.SUCCESS) {
    return (
      <div className="form-status form-status--success is-shown" role="status" aria-live="polite">
        <Check size={18} />
        <span>
          <strong>Thank you. Your message has been received.</strong>
          We will get back to you at the address you provided.
        </span>
      </div>
    );
  }

  if (state === RESULT.COMPOSED) {
    return (
      <div className="form-status form-status--success is-shown" role="status" aria-live="polite">
        <Check size={18} />
        <span>
          <strong>Your message is ready to send.</strong>
          We opened a draft to {CONTACT_EMAIL} in your email client with everything filled in. Send it
          from there and it reaches us directly.
        </span>
      </div>
    );
  }

  if (state === RESULT.NOT_CONFIGURED) {
    return (
      <div className="form-status form-status--info is-shown" role="status" aria-live="polite">
        <Info size={18} />
        <span>
          <strong>Your details passed validation — but nothing has been sent.</strong>
          No delivery address or form endpoint is connected to this site yet, so this form cannot
          transmit your message. Copy the draft below and send it through your own email, or set
          <code> VITE_CONTACT_EMAIL</code> to connect the form.
          {text ? (
            <>
              <button type="button" className="link" onClick={onCopy}>
                {copied ? 'Copied to clipboard' : 'Copy my message'}
              </button>
              <textarea className="textarea form-status__draft" readOnly value={text} rows={8} aria-label={`Drafted message: ${subject || 'enquiry'}`} />
            </>
          ) : null}
        </span>
      </div>
    );
  }

  return (
    <div className="form-status form-status--error is-shown" role="alert">
      <Alert size={18} />
      <span>
        <strong>Something went wrong. Please try again or contact us directly.</strong>
        {detail ? `Details: ${detail}` : 'The submission did not complete.'}
      </span>
    </div>
  );
}

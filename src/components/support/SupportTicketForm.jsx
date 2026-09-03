import { useState } from 'react';
import Button from '../common/Button.jsx';
import FormField from '../contact/FormField.jsx';
import FormStatus from '../contact/FormStatus.jsx';
import { Info } from '../../assets/icons/index.jsx';
import { supportCategories } from '../../data/support.js';
import { runValidators, validateEmail, validateMessage, validateSelect } from '../../utils/validation.js';
import { submitForm } from '../../utils/submitForm.js';

const VALIDATORS = {
  email: (value) => validateEmail(value),
  category: (value) => validateSelect(value, 'a category'),
  message: (value) => validateMessage(value, 15)
};

/**
 * Support request form. It never claims a ticket was created — no ticketing
 * backend is connected, and the copy says so before the visitor submits.
 */
export default function SupportTicketForm({ initialCategory = '', onClose }) {
  const [values, setValues] = useState({
    email: '',
    category: initialCategory,
    reference: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const update = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const blur = (field) => () => {
    const validator = VALIDATORS[field];
    if (!validator) return;
    setErrors((prev) => ({ ...prev, [field]: validator(values[field], values) }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { errors: found, isValid, firstField } = runValidators(values, VALIDATORS);
    setErrors(found);

    if (!isValid) {
      document.getElementById(`support-${firstField}`)?.focus();
      return;
    }

    setLoading(true);
    setResult(null);

    const response = await submitForm(values, {
      subject: `Support request: ${values.category}`,
      heading: 'TechBloom Labs support request',
      formType: 'support'
    });

    setLoading(false);
    setResult(response);
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="note">
        <Info size={18} />
        <span>
          <strong>No ticket is created on this site.</strong> A ticketing backend is not connected
          here, so submitting this form does not open <code>#TB1024</code> or anything like it. It
          prepares your request so it can be sent to the team.
        </span>
      </p>

      <div className="form__grid">
        <FormField
          id="support-email"
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
          id="support-category"
          name="category"
          label="Category"
          type="select"
          value={values.category}
          onChange={update('category')}
          onBlur={blur('category')}
          error={errors.category}
          required
          options={[
            { value: '', label: 'Select a category' },
            ...supportCategories.map((category) => ({ value: category.label, label: category.label }))
          ]}
        />
        <FormField
          id="support-reference"
          name="reference"
          label="Application or program reference"
          value={values.reference}
          onChange={update('reference')}
          optional
          placeholder="e.g. AI Research Internship"
          full
        />
        <FormField
          id="support-message"
          name="message"
          label="What happened?"
          type="textarea"
          rows={5}
          value={values.message}
          onChange={update('message')}
          onBlur={blur('message')}
          error={errors.message}
          help="Dates, amounts and what you expected all help us resolve it faster."
          required
          full
        />
      </div>

      <FormStatus
        state={result?.result}
        detail={result?.detail}
        text={result?.text}
        subject={`Support request: ${values.category}`}
      />

      <div className="actions">
        <Button type="submit" loading={loading} loadingLabel="Preparing…" arrow>
          Submit request
        </Button>
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

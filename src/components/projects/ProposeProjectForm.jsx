import { useState } from 'react';
import Button from '../common/Button.jsx';
import FormField from '../contact/FormField.jsx';
import FormStatus from '../contact/FormStatus.jsx';
import { projectCategories } from '../../data/projects.js';
import { runValidators, validateEmail, validateMessage, validateName, validateRequired, validateSelect } from '../../utils/validation.js';
import { submitForm } from '../../utils/submitForm.js';

const EMPTY = {
  name: '',
  email: '',
  title: '',
  domain: '',
  problem: '',
  outcome: '',
  duration: '',
  skills: ''
};

const VALIDATORS = {
  name: (value) => validateName(value),
  email: (value) => validateEmail(value),
  title: (value) => validateRequired(value, 'A project title'),
  domain: (value) => validateSelect(value, 'a domain'),
  problem: (value) => validateMessage(value, 20),
  outcome: (value) => validateRequired(value, 'An expected outcome')
};

/**
 * Project proposal form. Collects exactly what a feasibility review needs.
 * Submission goes through utils/submitForm, which never claims false delivery.
 */
export default function ProposeProjectForm({ onClose }) {
  const [values, setValues] = useState(EMPTY);
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
    const message = validator(values[field], values);
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { errors: found, isValid, firstField } = runValidators(values, VALIDATORS);
    setErrors(found);

    if (!isValid) {
      document.getElementById(`proposal-${firstField}`)?.focus();
      return;
    }

    setLoading(true);
    setResult(null);

    const response = await submitForm(values, {
      subject: `Project proposal: ${values.title}`,
      heading: 'TechBloom Labs project proposal',
      formType: 'project-proposal'
    });

    setLoading(false);
    setResult(response);
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <p className="t-sm">
        Tell us about your technical requirements. Our engineering team will conduct an architectural feasibility assessment with roadmap recommendations and milestone scoping.
      </p>

      <div className="form__grid">
        <FormField
          id="proposal-name"
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
          id="proposal-email"
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
          id="proposal-title"
          name="title"
          label="Project title"
          value={values.title}
          onChange={update('title')}
          onBlur={blur('title')}
          error={errors.title}
          placeholder="e.g. Irrigation scheduling for smallholder farms"
          required
          full
        />
        <FormField
          id="proposal-domain"
          name="domain"
          label="Domain"
          type="select"
          value={values.domain}
          onChange={update('domain')}
          onBlur={blur('domain')}
          error={errors.domain}
          required
          options={[
            { value: '', label: 'Select a domain' },
            ...projectCategories.map((category) => ({ value: category.name, label: category.name })),
            { value: 'Other', label: 'Other' }
          ]}
        />
        <FormField
          id="proposal-duration"
          name="duration"
          label="Preferred duration"
          type="select"
          value={values.duration}
          onChange={update('duration')}
          options={[
            { value: '', label: 'No preference' },
            { value: '2 months', label: '2 months' },
            { value: '6 months', label: '6 months' },
            { value: 'Longer', label: 'Longer / to be discussed' }
          ]}
        />
        <FormField
          id="proposal-problem"
          name="problem"
          label="Problem statement and idea"
          type="textarea"
          rows={5}
          value={values.problem}
          onChange={update('problem')}
          onBlur={blur('problem')}
          error={errors.problem}
          help="What problem is it, who has it, and what is your approach?"
          required
          full
        />
        <FormField
          id="proposal-outcome"
          name="outcome"
          label="Expected outcome"
          value={values.outcome}
          onChange={update('outcome')}
          onBlur={blur('outcome')}
          error={errors.outcome}
          placeholder="e.g. A working prototype and a short technical report"
          required
        />
        <FormField
          id="proposal-skills"
          name="skills"
          label="Skills and technologies"
          value={values.skills}
          onChange={update('skills')}
          optional
          placeholder="e.g. Python, PostgreSQL, field data collection"
        />
      </div>

      <FormStatus
        state={result?.result}
        detail={result?.detail}
        text={result?.text}
        subject={`Project proposal: ${values.title}`}
      />

      <div className="actions">
        <Button type="submit" loading={loading} loadingLabel="Submitting…" arrow>
          Submit proposal
        </Button>
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

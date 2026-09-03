import { Info } from '../../assets/icons/index.jsx';

/**
 * Program structure notice. Mentorship, milestones, and credentials.
 */
export default function FeeNotice() {
  return (
    <p className="note fee-notice">
      <Info size={18} />
      <span>
        <strong>Structured programs.</strong> Each internship pathway is tailored by mentor availability, specialisation, and institutional objectives.
      </span>
    </p>
  );
}

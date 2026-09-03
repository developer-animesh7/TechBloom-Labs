import Button from '../common/Button.jsx';
import { Check } from '../../assets/icons/index.jsx';

/**
 * Featured program treatment for the 2-month and 6-month internships.
 * Focused on program structure, mentorship, and practical benefits.
 * Zero pricing figures.
 */
export default function InternshipCard({ program, onBrowse, tone = 'light' }) {
  return (
    <article className={`program program--${tone}`}>
      <header className="program__head">
        <span className="badge badge--open">{program.label}</span>
        <h3 className="program__title t-h3">{program.duration}</h3>
      </header>

      <p className="program__body t-body" style={{ marginTop: 'var(--s-3)' }}>
        {program.description}
      </p>

      <ul className="ticks program__list">
        {program.benefits.map((benefit) => (
          <li key={benefit}>
            <Check size={16} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <footer className="program__foot">
        <Button
          variant={tone === 'dark' ? 'bright' : 'primary'}
          onClick={() => onBrowse(program.months)}
          arrow
        >
          {program.cta}
        </Button>
      </footer>
    </article>
  );
}

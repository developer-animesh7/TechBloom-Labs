import Reveal from '../common/Reveal.jsx';
import { supportCategories } from '../../data/support.js';

/**
 * Support categories as a selectable list. The chosen category is passed up so
 * the ticket form opens already set to the right one.
 */
export default function SupportCategories({ selectedId, onSelect }) {
  return (
    <ul className="scats" role="list">
      {supportCategories.map((category, index) => (
        <Reveal as="li" key={category.id} delay={Math.min(index * 50, 280)}>
          <button
            type="button"
            className={`scat${selectedId === category.id ? ' is-active' : ''}`}
            aria-pressed={selectedId === category.id}
            onClick={() => onSelect(category.id)}
          >
            <span className="scat__index t-mono">{String(index + 1).padStart(2, '0')}</span>
            <span className="scat__text">
              <span className="scat__title t-h4">{category.label}</span>
              <span className="scat__body t-sm">{category.body}</span>
            </span>
          </button>
        </Reveal>
      ))}
    </ul>
  );
}

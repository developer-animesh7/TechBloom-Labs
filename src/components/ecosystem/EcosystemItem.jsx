import { Link } from 'react-router-dom';
import ArrowIcon from '../common/ArrowIcon.jsx';
import Reveal from '../common/Reveal.jsx';
import { DomainIcon } from '../../assets/icons/index.jsx';

/**
 * One ecosystem pillar with direct route navigation.
 */
export default function EcosystemItem({ pillar, index }) {
  const target = pillar.to || (pillar.section ? `/${pillar.section}` : '/');

  return (
    <Reveal
      as="li"
      className={`eco__item eco__item--${pillar.weight}`}
      delay={index * 80}
    >
      <div className="eco__top">
        <span className="eco__icon" aria-hidden="true">
          <DomainIcon name={pillar.icon} size={22} />
        </span>
        <span className="eco__index t-mono">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3 className="eco__title t-h3">{pillar.label}</h3>
      <p className="eco__body t-body">{pillar.body}</p>

      {pillar.pathway ? <p className="eco__pathway t-mono">{pillar.pathway}</p> : null}

      <Link to={target} className="link eco__cta">
        {pillar.cta}
        <ArrowIcon size={16} />
      </Link>
    </Reveal>
  );
}

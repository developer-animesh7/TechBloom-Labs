import Reveal from '../common/Reveal.jsx';
import { DomainIcon } from '../../assets/icons/index.jsx';

/**
 * One verification pillar. Index is shown so the five read as a checked list
 * rather than five equal cards.
 */
export default function TrustItem({ pillar, index, delay = 0 }) {
  return (
    <Reveal as="li" className="tpillar" delay={delay}>
      <span className="tpillar__index t-mono">{String(index + 1).padStart(2, '0')}</span>
      <span className="tpillar__icon" aria-hidden="true">
        <DomainIcon name={pillar.icon} size={20} />
      </span>
      <div className="tpillar__text">
        <h3 className="t-h4">{pillar.title}</h3>
        <p className="t-sm">{pillar.body}</p>
      </div>
    </Reveal>
  );
}

import Reveal from '../common/Reveal.jsx';
import { ArrowRight, Check } from '../../assets/icons/index.jsx';

/**
 * Year-by-year roadmap. Used for both the worked example and the generated
 * result, so the two always read identically.
 *
 * @param {{year: string, items: string[], state?: 'past'|'current'|'ahead'}[]} years
 */
export default function CareerRoadmap({ years, careers, pathway, generated = false }) {
  return (
    <div className={`roadmap${generated ? ' roadmap--generated' : ''}`}>
      {pathway?.length ? (
        <ol className="roadmap__pathway" aria-label="Pathway">
          {pathway.map((node, index) => (
            <li key={`${node}-${index}`}>
              <span>{node}</span>
              {index < pathway.length - 1 ? <ArrowRight size={15} aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      ) : null}

      <ol className="roadmap__years">
        {years.map((year, index) => (
          <Reveal
            as="li"
            className={`roadmap__year${year.state ? ` is-${year.state}` : ''}`}
            key={year.year}
            delay={Math.min(index * 70, 280)}
          >
            <div className="roadmap__year-head">
              <h4 className="t-h4">{year.year}</h4>
              {year.state === 'current' ? <span className="badge badge--open">You are here</span> : null}
            </div>
            <ul className="roadmap__items">
              {year.items.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>

      {careers?.length ? (
        <div className="roadmap__careers">
          <h4 className="t-label">Where this can lead</h4>
          <ul className="cluster cluster--sm">
            {careers.map((career) => (
              <li key={career} className="chip chip--static">
                {career}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

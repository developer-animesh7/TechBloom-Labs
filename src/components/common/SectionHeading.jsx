import Reveal from './Reveal.jsx';

/**
 * The section header pattern used site-wide:
 * numbered eyebrow + rule, headline, optional lead and aside.
 *
 * @param {string} number   e.g. '01'
 * @param {string} eyebrow  e.g. 'About TechBloom Labs'
 * @param {string} title    headline text (may include <em> via `titleNode`)
 * @param {node}   titleNode overrides `title` when the headline needs markup
 * @param {node}   lead     supporting statement
 * @param {node}   aside    right-hand column (CTA, metric, note)
 * @param {number} level    heading level, keeps the document outline correct
 */
export default function SectionHeading({
  number,
  eyebrow,
  title,
  titleNode,
  lead,
  aside,
  level = 2,
  align = 'split',
  id
}) {
  const Tag = `h${Math.min(Math.max(level, 2), 4)}`;
  const single = align === 'single' || !lead && !aside;

  return (
    <header className="sec-head">
      {(number || eyebrow) && (
        <Reveal className="sec-head__eyebrow" variant="fade">
          <span className="sec-head__num">
            {number ? `${number} — ` : ''}
            {eyebrow}
          </span>
        </Reveal>
      )}

      <div className={`sec-head__body${single ? ' sec-head__body--single' : ''}`}>
        <Reveal>
          <Tag className="t-h2" id={id}>
            {titleNode || title}
          </Tag>
        </Reveal>

        {(lead || aside) && (
          <Reveal delay={90} className="sec-head__aside">
            {lead ? <p className="t-lead">{lead}</p> : null}
            {aside}
          </Reveal>
        )}
      </div>
    </header>
  );
}

/**
 * Section wrapper: owns vertical rhythm, surface colour and the anchor id that
 * navigation scrolls to. Every homepage block is rendered through this.
 *
 * @param {'paper'|'raise'|'sunk'|'tint'|'ink'} tone
 */
export default function Section({
  id,
  tone = 'paper',
  size = 'default',
  ruled = false,
  flushTop = false,
  flushBottom = false,
  label,
  labelledBy,
  as: Tag = 'section',
  className = '',
  children
}) {
  const classes = [
    'section',
    size === 'lg' ? 'section--lg' : '',
    tone === 'ink' ? 'section--ink on-ink' : '',
    tone === 'sunk' ? 'section--sunk' : '',
    tone === 'tint' ? 'section--tint' : '',
    tone === 'raise' ? 'section--paper' : '',
    ruled ? 'section--ruled' : '',
    flushTop ? 'section--flush-top' : '',
    flushBottom ? 'section--flush-bottom' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag id={id} className={classes} aria-label={label} aria-labelledby={labelledBy}>
      {children}
    </Tag>
  );
}

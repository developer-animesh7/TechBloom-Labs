import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon.jsx';

/**
 * One button for the whole site.
 *
 * Renders as <button>, <a> or react-router <Link> depending on the props, so a
 * CTA is always the correct element for what it does.
 *
 * @param {'primary'|'secondary'|'ink'|'bright'|'on-ink'} variant
 */
export default function Button({
  children,
  variant = 'primary',
  size,
  to,
  href,
  onClick,
  type = 'button',
  arrow = false,
  arrowDirection = 'right',
  loading = false,
  loadingLabel = 'Sending…',
  disabled = false,
  block = false,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    variant === 'secondary' ? 'btn--secondary' : '',
    variant === 'ink' ? 'btn--ink' : '',
    variant === 'bright' ? 'btn--bright' : '',
    variant === 'on-ink' ? 'btn--on-ink' : '',
    size === 'sm' ? 'btn--sm' : '',
    block ? 'btn--block' : '',
    loading ? 'is-loading' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      {loading ? <span className="btn__spinner" aria-hidden="true" /> : null}
      <span>{loading ? loadingLabel : children}</span>
      {arrow && !loading ? (
        <span className="btn__icon">
          <ArrowIcon direction={arrowDirection} shift={false} size={17} />
        </span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {inner}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:|^mailto:|^tel:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {inner}
    </button>
  );
}

import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Close, Pin, Mail } from '../../assets/icons/index.jsx';
import BloomMark from '../../assets/illustrations/BloomMark.jsx';
import NavCTA from '../navigation/NavCTA.jsx';
import { mobileNav, legalNav } from '../../data/navigation.js';
import { companyName, address, CONTACT_EMAIL } from '../../data/company.js';

const FOCUSABLE = 'a[href], button:not([disabled])';

/**
 * Full-screen navigation drawer for tablet and mobile.
 * Locks page scroll, traps focus, closes on Escape, and closes on route change.
 */
export default function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();
  const panelRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    previousFocus.current = document.activeElement;
    document.body.classList.add('is-locked');

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const nodes = panelRef.current?.querySelectorAll(FOCUSABLE);
      if (!nodes?.length) return;

      const list = Array.from(nodes);
      const first = list[0];
      const last = list[list.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector(FOCUSABLE)?.focus();
    }, 60);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('is-locked');
      if (previousFocus.current instanceof HTMLElement) previousFocus.current.focus();
    };
  }, [open, onClose]);

  const isLinkActive = (to) => {
    if (to === '/') return pathname === '/';
    return pathname === to || pathname.startsWith(to + '/');
  };

  return (
    <div
      className={`nav-drawer${open ? ' is-open' : ''}`}
      id="mobile-menu"
      ref={panelRef}
      aria-hidden={open ? undefined : true}
      inert={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="nav-drawer__top">
        <Link to="/" className="brand" onClick={onClose} aria-label={`${companyName} home`}>
          <BloomMark size={30} />
          <span className="brand__text">
            Tech<span>Bloom</span> <span className="brand__sub">Labs</span>
          </span>
        </Link>
        <button type="button" className="nav-drawer__close" onClick={onClose} aria-label="Close menu">
          <Close size={18} />
        </button>
      </div>

      <div className="nav-drawer__body">
        <nav aria-label="Mobile primary">
          <ul className="nav-drawer__list">
            {mobileNav.map((item, index) => {
              const active = isLinkActive(item.to);
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    tabIndex={open ? 0 : -1}
                    onClick={onClose}
                    className={active ? 'is-current' : ''}
                  >
                    <i>{String(index + 1).padStart(2, '0')}</i>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <span className="nav-drawer__group-label">Legal & Terms</span>
          <div className="nav-drawer__sub">
            {legalNav.map((item) => (
              <Link key={item.label} to={item.to} tabIndex={open ? 0 : -1} onClick={onClose}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="nav-drawer__foot">
        <NavCTA variant="bright" size="md" onClick={onClose} />
        <p className="nav-drawer__meta">
          <Pin size={15} /> {address.street}, {address.city}, {address.region}
        </p>
        <p className="nav-drawer__meta" style={{ marginTop: '4px' }}>
          <Mail size={15} />{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{ color: 'var(--accent-bright)', textDecoration: 'none' }}
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}

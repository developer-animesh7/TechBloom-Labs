import { Link, useLocation } from 'react-router-dom';
import { primaryNav } from '../../data/navigation.js';

/**
 * Clean, simplified desktop navigation: strictly Home, About, Services, Projects, Experts.
 * Real URLs for every destination with active route detection.
 */
export default function NavLinks() {
  const { pathname } = useLocation();

  const isLinkActive = (to) => {
    if (to === '/') return pathname === '/';
    return pathname === to || pathname.startsWith(to + '/');
  };

  return (
    <nav className="nav nav--desktop" aria-label="Primary">
      {primaryNav.map((item) => {
        const active = isLinkActive(item.to);
        return (
          <Link
            key={item.label}
            to={item.to}
            className={`nav__link${active ? ' is-current' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

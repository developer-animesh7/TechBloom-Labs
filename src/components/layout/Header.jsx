import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BloomMark from '../../assets/illustrations/BloomMark.jsx';
import NavLinks from '../navigation/NavLinks.jsx';
import NavCTA from '../navigation/NavCTA.jsx';
import ScrollProgress from '../navigation/ScrollProgress.jsx';
import MobileMenu from './MobileMenu.jsx';
import { companyName } from '../../data/company.js';

/**
 * Sticky header shared across all pages.
 * Over the dark hero (home) it starts light-on-dark; once scrolled or on dedicated routes
 * it remains crisp and solid.
 */
export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const classes = [
    'site-header',
    isHome ? 'on-ink' : 'site-header--solid',
    scrolled ? 'is-scrolled' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={classes}>
        <div className="site-header__inner">
          <Link
            to="/"
            className="brand"
            aria-label={`${companyName} home`}
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }
              setMenuOpen(false);
            }}
          >
            <BloomMark size={30} />
            <span className="brand__text">
              Tech<span>Bloom</span> <span className="brand__sub">Labs</span>
            </span>
          </Link>

          <NavLinks />

          <div className="site-header__actions">
            <NavCTA className="btn--nav" variant={isHome && !scrolled ? 'on-ink' : 'primary'} />
            <button
              type="button"
              className="burger"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="burger__lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
        <ScrollProgress />
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

import { Link } from 'react-router-dom';
import BloomMark from '../../assets/illustrations/BloomMark.jsx';
import PageContainer from './PageContainer.jsx';
import { footerNav } from '../../data/navigation.js';
import { companyName, tagline, address, CONTACT_EMAIL } from '../../data/company.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <PageContainer>
        {/* Editorial closing statement */}
        <div className="site-footer__marquee" aria-label="Brand Signature">
          <p className="site-footer__headline">
            RESEARCH · INDUSTRY · INNOVATION · IMPACT
          </p>
        </div>

        <div className="site-footer__grid">
          {/* Brand header: Logo + Gradient tagline */}
          <div className="site-footer__brand">
            <Link to="/" className="brand on-ink" aria-label={`${companyName} home`}>
              <BloomMark size={32} />
              <span className="brand__text">
                Tech<span>Bloom</span> <span className="brand__sub">Labs</span>
              </span>
            </Link>
            <p className="site-footer__tagline">{tagline}.</p>
          </div>

          {/* Navigation columns: Company, Explore, Support, Legal */}
          <div className="site-footer__nav-cols">
            {footerNav.map((column) => (
              <nav className="footer-col" key={column.title} aria-label={column.title}>
                <h2 className="footer-col__title">{column.title}</h2>
                <ul>
                  {column.links.map((item) => (
                    <li key={`${column.title}-${item.label}`}>
                      <Link to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Contact & Address block: placed after navigation on mobile */}
          <div className="site-footer__contact">
            <address className="site-footer__addr">
              <span className="site-footer__addr-line">{address.street}</span>
              <span className="site-footer__addr-line">{address.city}</span>
              <span className="site-footer__addr-line">{address.region}</span>
              <a
                className="site-footer__email-link"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="site-footer__bottom">
          <p>
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}

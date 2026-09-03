import { Link } from 'react-router-dom';
import BloomMark from '../../assets/illustrations/BloomMark.jsx';
import PageContainer from './PageContainer.jsx';
import { footerNav, legalNav } from '../../data/navigation.js';
import { companyName, tagline, address, leadership } from '../../data/company.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <PageContainer>
        {/* Editorial closing statement */}
        <div className="site-footer__marquee" aria-label="Brand Signature">
          <p className="site-footer__headline">
            DISCOVER. CONNECT. EXPERIENCE. BLOOM.
          </p>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="brand on-ink" aria-label={`${companyName} home`}>
              <BloomMark size={32} />
              <span className="brand__text">
                Tech<span>Bloom</span> <span className="brand__sub">Labs</span>
              </span>
            </Link>
            <p className="t-sm site-footer__tagline">{tagline}.</p>
            <address className="site-footer__addr">
              {address.street}
              <br />
              {address.city}
              <br />
              {address.region}
            </address>
          </div>

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
        </div>

        <div className="site-footer__leadership-section">
          <h3 className="site-footer__leadership-title">Leadership</h3>
          <dl className="site-footer__leaders">
            {leadership.map((person) => (
              <div className="site-footer__leader" key={person.name}>
                <dt>{person.role}</dt>
                <dd>{person.name}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {year} {companyName}. All rights reserved.
          </p>
          <nav className="site-footer__legal" aria-label="Legal">
            {legalNav.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </PageContainer>
    </footer>
  );
}

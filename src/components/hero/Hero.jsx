import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import GridField from '../../assets/illustrations/GridField.jsx';
import HeroVisual from './HeroVisual.jsx';
import { tagline, heroCopy } from '../../data/company.js';
import { goToSection } from '../../utils/navigation.js';

/**
 * Hero. Asymmetric editorial grid: statement on the left, layered visual on the
 * right, journey rail directly beneath.
 */
export default function Hero({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const jump = (section) => () => goToSection(section, { navigate, pathname });

  return (
    <section className="hero section--ink on-ink" id="home">
      <GridField className="hero__grid" id="hero" cell={56} />

      <PageContainer className="hero__inner">
        <div className="hero__copy">
          <Reveal as="p" className="hero__eyebrow t-label" variant="fade">
            {tagline}
          </Reveal>

          <Reveal as="h1" className="hero__title t-display" delay={60}>
            Where research meets <em>real-world</em> innovation.
          </Reveal>

          <Reveal as="p" className="hero__lead t-lead" delay={140}>
            {heroCopy}
          </Reveal>

          <Reveal className="hero__actions actions" delay={210}>
            <Button variant="bright" to="/projects" arrow>
              Explore Our Products
            </Button>
            <Button variant="on-ink" to="/experts" arrow>
              Meet Our Team
            </Button>
          </Reveal>
        </div>

        <Reveal className="hero__media" variant="fade" delay={120}>
          <HeroVisual />
        </Reveal>
      </PageContainer>

      {children}
    </section>
  );
}

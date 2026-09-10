import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import GridField from '../../assets/illustrations/GridField.jsx';
import { brandSignature, finalCTA } from '../../data/company.js';
import { goToSection } from '../../utils/navigation.js';

/**
 * Closing section before the footer. Restates the journey and hands off to the
 * three real destinations: opportunities, career paths, contact.
 */
export default function FinalCTA() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const jump = (section) => () => goToSection(section, { navigate, pathname });

  return (
    <Section tone="ink" size="lg" className="final" labelledBy="final-title">
      <GridField className="final__grid" id="final" cell={64} />

      <PageContainer>
        <div className="final__inner">
          <Reveal as="h2" className="final__heading t-h1" id="final-title">
            {finalCTA.heading}
          </Reveal>

          <Reveal className="final__lines" delay={90}>
            {finalCTA.lines.map((line) => (
              <p className="t-lead" key={line}>
                {line}
              </p>
            ))}
          </Reveal>

          <Reveal className="final__signature" delay={140} aria-hidden="true">
            {brandSignature.map((word, idx) => (
              <span key={word}>
                {word}
                {idx < brandSignature.length - 1 && <span className="final__sep" style={{ opacity: 0.4, margin: '0 8px' }}>·</span>}
              </span>
            ))}
          </Reveal>
          <p className="sr-only">Research · Industry · Innovation · Impact</p>

          <Reveal className="final__actions actions" delay={200}>
            <Button variant="bright" to="/projects" arrow>
              Explore Projects
            </Button>
            <Button variant="on-ink" to="/experts" arrow>
              Meet Our Team
            </Button>
            <Button variant="on-ink" to="/contact">
              Contact TechBloom Labs
            </Button>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}

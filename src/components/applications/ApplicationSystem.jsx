import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import ApplicationSteps from './ApplicationSteps.jsx';
import { Document, Info } from '../../assets/icons/index.jsx';

export default function ApplicationSystem() {
  return (
    <Section id="applications" tone="sunk" size="lg" labelledBy="apply-title">
      <PageContainer>
        <SectionHeading
          number="05"
          eyebrow="Application System"
          id="apply-title"
          title="Apply without the confusion."
          lead="Create your TechBloom Labs profile once. Use it for every application."
        />

        <div className="apply">
          <ApplicationSteps />

          <Reveal className="apply__aside" delay={120}>
            <div className="apply__card">
              <p className="t-label">
                <Document size={15} /> One profile
              </p>
              <p className="t-h4">
                Your degree, year, skills, projects and documents stay in one place.
              </p>
              <p className="t-sm">
                Each application adds only what that specific program needs — the rest is already
                there.
              </p>
            </div>

            <p className="note">
              <Info size={18} />
              <span>
                <strong>Interface preview.</strong> Profiles and applications are not connected to a
                live backend on this site, so nothing here submits an application or takes a payment.
              </span>
            </p>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  );
}

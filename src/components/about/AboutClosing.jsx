import PageContainer from '../layout/PageContainer.jsx';
import Reveal from '../common/Reveal.jsx';
import Button from '../common/Button.jsx';

export default function AboutClosing() {
  return (
    <section className="about-closing" aria-labelledby="about-closing-title">
      <PageContainer>
        <div className="about-closing__container">
          <Reveal>
            <span className="about-closing__eyebrow">Our Approach</span>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="about-closing__headline" id="about-closing-title">
              Imagine. Build. Scale.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="about-closing__sub">
              Products that matter.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="about-closing__body">
              Guided by a long-term entrepreneurial mindset, TechBloom Labs transforms complex challenges across diverse sectors into scalable, intelligent, and user-centric solutions.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="cluster cluster--center" style={{ justifyContent: 'center', gap: 'var(--s-4)' }}>
              <Button to="/services" variant="primary" arrow>
                Explore Services
              </Button>
              <Button to="/projects" variant="secondary">
                View Projects
              </Button>
              <Button to="/experts" variant="ghost">
                Meet Our Team
              </Button>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}

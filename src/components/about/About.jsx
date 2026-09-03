import Divider from '../common/Divider.jsx';
import ImageReveal from '../common/ImageReveal.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import { aboutIntro, mission, vision } from '../../data/company.js';

export default function About() {
  return (
    <Section id="about" tone="paper" size="lg" ruled labelledBy="about-title">
      <PageContainer>
        <SectionHeading
          number="01"
          eyebrow="About TechBloom Labs"
          id="about-title"
          titleNode={
            <>
              Where academic knowledge becomes <em>meaningful</em> experience.
            </>
          }
          lead={aboutIntro}
        />

        <Divider className="about__rule" />

        <div className="about__body">
          <div className="about__media">
            <ImageReveal
              src="/images/about/about-main.svg"
              alt="A shared study table with a laptop showing analysis, review notes and a wall of planning cards"
              ratio="4x3"
              caption="Mentorship in practice"
            />
          </div>

          <div className="about__statements">
            <Reveal className="about__statement">
              <p className="t-label">{mission.label}</p>
              <p className="t-h3">{mission.body}</p>
            </Reveal>

            <Reveal className="about__statement" delay={90}>
              <p className="t-label">{vision.label}</p>
              <p className="t-h3">{vision.body}</p>
            </Reveal>

            <Reveal delay={150}>
              <ImageReveal
                src="/images/about/research-lab.svg"
                alt="Research workstation with a microscope, specimen slides and an observation log"
                ratio="16x9"
              />
            </Reveal>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

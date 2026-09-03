import { useState } from 'react';
import Button from '../common/Button.jsx';
import Modal from '../common/Modal.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import ProposeProjectForm from './ProposeProjectForm.jsx';
import { Idea } from '../../assets/icons/index.jsx';
import { proposalSteps } from '../../data/projects.js';

/**
 * Choose Your Own Project. The seven-step review process is shown as a timeline,
 * and the CTA opens a real proposal form.
 */
export default function CustomProject() {
  const [open, setOpen] = useState(false);

  return (
    <Section id="propose-project" tone="paper" size="lg" ruled labelledBy="propose-title">
      <PageContainer>
        <SectionHeading
          number="08"
          eyebrow="Choose Your Own Project"
          id="propose-title"
          titleNode={
            <>
              Have an idea? Don&rsquo;t choose from our list. <em>Build your own.</em>
            </>
          }
          lead="Propose your own project — title, domain, problem statement, idea, expected outcome, duration, skills and technologies. TechBloom Labs presents the workflow for feasibility review, mentor matching, guidance, tracking and certification."
          aside={
            <Button onClick={() => setOpen(true)} arrow>
              Propose Your Project
            </Button>
          }
        />

        <div className="propose">
          <ol className="timeline">
            {proposalSteps.map((step, index) => (
              <Reveal
                as="li"
                className="timeline__item"
                key={step.step}
                delay={Math.min(index * 70, 350)}
              >
                <span className="timeline__num t-mono">{step.step}</span>
                <span className="timeline__dot" aria-hidden="true" />
                <div className="timeline__text">
                  <h3 className="t-h4">{step.title}</h3>
                  <p className="t-sm">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="propose__aside" delay={120}>
            <div className="propose__card">
              <span className="propose__icon" aria-hidden="true">
                <Idea size={22} />
              </span>
              <p className="t-h4">The idea does not have to be finished.</p>
              <p className="t-sm">
                A clear problem and an honest first approach are enough to start a feasibility review.
                Scope is shaped together with the mentor who takes it on.
              </p>
              <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
                Start a proposal
              </Button>
            </div>
          </Reveal>
        </div>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          eyebrow="Choose Your Own Project"
          title="Propose your project"
          labelledBy="propose-modal-title"
        >
          <ProposeProjectForm onClose={() => setOpen(false)} />
        </Modal>
      </PageContainer>
    </Section>
  );
}

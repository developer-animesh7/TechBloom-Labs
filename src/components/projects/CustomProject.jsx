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
          number="02"
          eyebrow="Custom Solutions"
          id="propose-title"
          titleNode={
            <>
              Have a custom technical challenge? <em>Engineer with TechBloom Labs.</em>
            </>
          }
          lead="Propose a custom technology solution — specify domain requirements, problem statement, technical stack, and target deliverables. TechBloom Labs provides structured feasibility analysis, technical lead assignment, architectural design, and production delivery."
          aside={
            <Button onClick={() => setOpen(true)} arrow>
              Propose a Project
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
              <p className="t-h4">From concept to scalable implementation.</p>
              <p className="t-sm">
                A well-defined business or technical challenge is enough to start architectural evaluation.
                Technical scope and interface contracts are finalized together with our domain engineering team.
              </p>
              <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
                Start a Proposal
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

import { useState } from 'react';
import Button from '../common/Button.jsx';
import Modal from '../common/Modal.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import SupportCategories from './SupportCategories.jsx';
import SupportTicketForm from './SupportTicketForm.jsx';
import { Lifebuoy } from '../../assets/icons/index.jsx';
import { exampleTicketId, supportCategories, supportPromise } from '../../data/support.js';

export default function Support() {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  const selectedLabel = supportCategories.find((category) => category.id === selected)?.label || '';

  const choose = (id) => {
    setSelected(id);
    setOpen(true);
  };

  return (
    <Section id="support" tone="sunk" size="lg" labelledBy="support-title">
      <PageContainer>
        <SectionHeading
          number="15"
          eyebrow="Help & Support"
          id="support-title"
          titleNode={
            <>
              Need help? We&rsquo;ve <em>got you.</em>
            </>
          }
          lead={`Pick the category closest to your problem. ${supportPromise}`}
          aside={
            <Button onClick={() => setOpen(true)} arrow>
              Open a Support Ticket
            </Button>
          }
        />

        <div className="support">
          <SupportCategories selectedId={selected} onSelect={choose} />

          <Reveal className="support__aside" delay={120}>
            <div className="support__card">
              <span className="support__icon" aria-hidden="true">
                <Lifebuoy size={22} />
              </span>
              <p className="t-label">Ticket format</p>
              <p className="support__ticket t-h3">{exampleTicketId}</p>
              <p className="t-sm">
                A reference like this keeps every reply, document and status change attached to the
                same conversation.
              </p>
              <p className="t-xs">
                Shown as an example of the format. Ticketing is not connected on this site, so nothing
                here creates a real ticket.
              </p>
            </div>
          </Reveal>
        </div>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          eyebrow="Help & Support"
          title={selectedLabel ? `Support request — ${selectedLabel}` : 'Open a support request'}
          labelledBy="support-modal-title"
        >
          <SupportTicketForm initialCategory={selectedLabel} onClose={() => setOpen(false)} />
        </Modal>
      </PageContainer>
    </Section>
  );
}

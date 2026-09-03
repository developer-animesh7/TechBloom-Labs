import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import { Info } from '../../assets/icons/index.jsx';
import { statusFlow, trackedApplications } from '../../data/internships.js';

function statusTone(status) {
  if (status === 'Selected') return 'badge--open';
  if (status === 'Under Review') return 'badge--review';
  return '';
}

/**
 * Application tracking, shown as a product preview rather than a dashboard:
 * three example records above the status progression they move through.
 */
export default function ApplicationTracking() {
  return (
    <Section id="tracking" tone="ink" size="lg" labelledBy="tracking-title">
      <PageContainer>
        <SectionHeading
          number="06"
          eyebrow="Application Tracking"
          id="tracking-title"
          title="Never wonder what happened."
          lead="Get notified every time your status changes."
        />

        <ul className="tracking">
          {trackedApplications.map((item, index) => {
            const stepIndex = statusFlow.indexOf(item.status);

            return (
              <Reveal as="li" className="tracking__row" key={item.id} delay={index * 90}>
                <div className="tracking__head">
                  <h3 className="t-h4">{item.title}</h3>
                  <p className="t-label">
                    {item.duration} · {item.fee} program fee
                  </p>
                </div>

                <span className={`badge ${statusTone(item.status)}`}>{item.status}</span>

                <ol className="tracking__flow" aria-label={`Status: ${item.status}`}>
                  {statusFlow.map((status, position) => (
                    <li
                      key={status}
                      className={`tracking__stage${position <= stepIndex ? ' is-done' : ''}${
                        position === stepIndex ? ' is-current' : ''
                      }`}
                    >
                      <span className="tracking__dot" aria-hidden="true" />
                      <span className="tracking__label t-xs">{status}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            );
          })}
        </ul>

        <Reveal variant="fade">
          <p className="note tracking__note">
            <Info size={18} />
            <span>
              <strong>Example records.</strong> These illustrate how tracking reads once an
              application exists. No live application data is connected to this page.
            </span>
          </p>
        </Reveal>
      </PageContainer>
    </Section>
  );
}

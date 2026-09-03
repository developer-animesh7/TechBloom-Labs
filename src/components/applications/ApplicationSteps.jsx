import Reveal from '../common/Reveal.jsx';
import { applicationSteps } from '../../data/internships.js';

/**
 * The eight-step application flow as a numbered spine. A workflow illustration,
 * deliberately not a dashboard.
 */
export default function ApplicationSteps() {
  return (
    <ol className="steps">
      {applicationSteps.map((item, index) => (
        <Reveal as="li" className="steps__item" key={item.step} delay={Math.min(index * 60, 320)}>
          <span className="steps__num marker--plate marker">{item.step}</span>
          <div className="steps__text">
            <h3 className="t-h4">{item.title}</h3>
            <p className="t-sm">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

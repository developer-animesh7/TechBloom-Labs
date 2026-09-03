import { useMemo, useRef, useState } from 'react';
import Button from '../common/Button.jsx';
import Reveal from '../common/Reveal.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Section from '../layout/Section.jsx';
import CareerRoadmap from './CareerRoadmap.jsx';
import { buildRoadmap, degrees, exampleRoadmap, examplePathway, interests, studyYears, tracks } from '../../data/careerPaths.js';

/**
 * Career Path Explorer. The roadmap is generated in the browser from the
 * selections — real logic over real data, no server and no invented outcomes.
 */
export default function CareerPathExplorer() {
  const [degreeId, setDegreeId] = useState('');
  const [trackId, setTrackId] = useState('');
  const [interestId, setInterestId] = useState('');
  const [yearId, setYearId] = useState('');
  const [roadmap, setRoadmap] = useState(null);
  const resultRef = useRef(null);

  const degree = degrees.find((item) => item.id === degreeId);
  const availableTracks = useMemo(
    () => (degree ? degree.tracks.map((id) => ({ id, label: tracks[id].label })) : []),
    [degree]
  );

  const onDegreeChange = (event) => {
    setDegreeId(event.target.value);
    setTrackId('');
  };

  const build = () => {
    const next = buildRoadmap({ degreeId, trackId, interestId, yearId });
    setRoadmap(next);
    window.setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  const reset = () => {
    setDegreeId('');
    setTrackId('');
    setInterestId('');
    setYearId('');
    setRoadmap(null);
  };

  return (
    <Section id="career-paths" tone="ink" size="lg" labelledBy="career-title">
      <PageContainer>
        <SectionHeading
          number="10"
          eyebrow="Career Path Explorer"
          id="career-title"
          title="See where your learning can take you."
          lead="Select your degree, specialisation, interests and current year — TechBloom Labs builds a year-by-year roadmap with the careers it can lead to."
        />

        <div className="career">
          <Reveal className="career__panel">
            <div className="career__fields">
              <label className="field">
                <span className="field__label">Degree</span>
                <select className="select" value={degreeId} onChange={onDegreeChange}>
                  <option value="">Select your degree</option>
                  {degrees.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field__label">Specialisation</span>
                <select
                  className="select"
                  value={trackId}
                  onChange={(event) => setTrackId(event.target.value)}
                  disabled={!degreeId}
                >
                  <option value="">{degreeId ? 'Select a specialisation' : 'Choose a degree first'}</option>
                  {availableTracks.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field__label">What interests you most</span>
                <select
                  className="select"
                  value={interestId}
                  onChange={(event) => setInterestId(event.target.value)}
                >
                  <option value="">No preference</option>
                  {interests.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field__label">Current year</span>
                <select className="select" value={yearId} onChange={(event) => setYearId(event.target.value)}>
                  <option value="">Select your year</option>
                  {studyYears.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="actions">
              <Button variant="bright" onClick={build} disabled={!degreeId} arrow>
                Build My Roadmap
              </Button>
              {roadmap ? (
                <Button variant="on-ink" onClick={reset}>
                  Start again
                </Button>
              ) : null}
            </div>

            {!degreeId ? (
              <p className="t-xs">Pick a degree to enable the roadmap. Everything runs in your browser.</p>
            ) : null}
          </Reveal>

          <div className="career__result" ref={resultRef}>
            {roadmap ? (
              <>
                <div className="career__result-head">
                  <p className="t-label">Your roadmap</p>
                  <h3 className="t-h3">
                    {roadmap.degreeLabel} · {roadmap.trackLabel}
                  </h3>
                  {roadmap.interestLabel ? (
                    <p className="t-sm">Weighted toward {roadmap.interestLabel.toLowerCase()}.</p>
                  ) : null}
                </div>
                <CareerRoadmap
                  years={roadmap.years}
                  careers={roadmap.careers}
                  pathway={roadmap.pathway}
                  generated
                />
              </>
            ) : (
              <>
                <div className="career__result-head">
                  <p className="t-label">Example · B.Tech IT with AI / ML</p>
                  <h3 className="t-h3">A four-year shape, not a rulebook.</h3>
                </div>
                <CareerRoadmap years={exampleRoadmap} pathway={examplePathway} />
              </>
            )}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}

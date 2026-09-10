import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero.jsx';
import StrategicApproach from '../components/about/StrategicApproach.jsx';
import InnovationBelief from '../components/about/InnovationBelief.jsx';
import InnovationJourney from '../components/about/InnovationJourney.jsx';
import Leadership from '../components/about/Leadership.jsx';
import AboutClosing from '../components/about/AboutClosing.jsx';
import { companyName } from '../data/company.js';

export default function AboutPage() {
  useEffect(() => {
    document.title = `About: ${companyName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* 1. Primary Editorial Hero + Global Network Composition + Capabilities + Impact Strip */}
      <AboutHero />

      {/* 2. Strategic Approach: Scalable, Intelligent, User-Centric */}
      <StrategicApproach />

      {/* 3. Central Belief & Innovation Manifesto */}
      <InnovationBelief />

      {/* 4. End-to-End Innovation Journey: Concept to Continuous Evolution */}
      <InnovationJourney />

      {/* 5. Executive Leadership Roster */}
      <section id="leadership">
        <Leadership />
      </section>

      {/* 6. Closing Philosophy: Imagine. Build. Scale. Products That Matter */}
      <AboutClosing />
    </div>
  );
}

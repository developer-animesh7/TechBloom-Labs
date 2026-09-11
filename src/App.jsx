import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

import Home from './pages/Home.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ExpertsPage from './pages/ExpertsPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import InternshipsPage from './pages/InternshipsPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

/** Send every route change to the top, except in-page section jumps. */
function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    if (hash || state?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash, state]);

  return null;
}

/**
 * Application shell: skip link, header, routed page, footer.
 * Clean, simplified multi-page architecture.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollToTop />
      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage kind="privacy" />} />
          <Route path="/terms" element={<LegalPage kind="terms" />} />
          
          {/* Backwards compatibility redirects */}
          <Route path="/faculty" element={<Navigate to="/experts" replace />} />
          <Route path="/career-paths" element={<Navigate to="/projects" replace />} />
          <Route path="/research" element={<Navigate to="/about" replace />} />
          <Route path="/opportunities" element={<Navigate to="/projects" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

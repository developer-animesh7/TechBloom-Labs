import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

/* Stylesheet order matters: tokens, then base, then type, motion, components,
   sections, and finally responsive overrides. */
import './styles/variables.css';
import './styles/globals.css';
import './styles/typography.css';
import './styles/animations.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/about.css';
import './styles/team.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

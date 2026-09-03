# TechBloom Labs

**Where Learning Meets Opportunity.**

Corporate web platform for TechBloom Labs — an ecosystem connecting students, researchers, mentors, and organizations through real-world projects, internships, mentorship, and domain engineering.

- **Positioning:** *Where research meets real-world innovation.*
- **Address:** 305 Jessore Road, Kolkata 700089, West Bengal, India
- **Contact:** animeshpatra7908@gmail.com
- **Leadership:**
  - **Prof. Dr. Himadri Nath Saha** — Chief Advisor & Head
  - **Prof. Bhabani Prasad Roy** — Chief Marketing Adviser

---

## Tech Stack

Built with modern web standards:
- **Core:** React 19 + Vite + React Router 7
- **Styling:** Modular Vanilla CSS with comprehensive token system and fluid typography
- **Typography:** Space Grotesk, Inter, and Newsreader (Google Fonts)
- **Asset Pipeline:** Local optimized SVG and raster imagery with strict responsive layout

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview production bundle
```

---

## Site Architecture

- **Home (`/`)**: Curated overview featuring signature brand manifesto (*"WHERE RESEARCH MEETS REAL-WORLD INNOVATION"*), compact journey rail, mission framework, core services preview, featured projects, and leadership preview.
- **About (`/about`)**: Vision, mission, technology framework, and leadership profiles.
- **Services (`/services`)**: Ten domain frameworks across precision agriculture, pharmaceutical intelligence, veterinary informatics, applied AI, and enterprise software.
- **Projects (`/projects`)**: Curated project portfolio with domain filtering.
- **Project Detail (`/projects/:slug`)**: Full project specifications, problem formulation, architecture overview, and inquiry actions.
- **Our Team (`/experts`)**:
  - Leadership: Prof. Dr. Himadri Nath Saha & Prof. Bhabani Prasad Roy
  - World-Class Mentors: Avnish Kumar, Soummyo Priyo Chattopadhyay, Phillip G. Bradford
  - Engineering Team: Animesh Patra, Amitava Giri, Soumosish Jana
- **Contact (`/contact`)**: Centralized contact interface routed to `animeshpatra7908@gmail.com`.
- **Support (`/support`)**: Support issue triage and ticket drafting.
- **Privacy Policy (`/privacy`)** & **Terms of Use (`/terms`)**: Transparent legal disclaimers and data handling principles.

---

## Configuration

Environment variables can be specified in `.env` (refer to `.env.example`):
- `VITE_CONTACT_EMAIL`: Official contact destination (defaults to `animeshpatra7908@gmail.com`).
- `VITE_CONTACT_ENDPOINT`: Optional network endpoint for handling JSON form submissions.
- `VITE_SITE_URL`: Base URL for Open Graph and metadata generation.

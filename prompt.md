# Praneesha Portfolio Website — Project Brief & Implementation Plan

## 1. Goal

Create a polished, responsive personal portfolio website for **Bheemarasetty Praneesha**, a Software Development Engineer Intern. The site should present her technical skills, professional experience, selected projects, education, and contact links in a memorable, recruiter-friendly format.

### Required Reference Files

- **Resume source of truth:** `PraneeshaResumeUpdated.pdf`
- **Figma theme reference:** https://www.figma.com/community/file/1092351809477351862/portfolio-template

Use `PraneeshaResumeUpdated.pdf` as the source of truth for all portfolio content. Do not repeat an internship project in both Experience and Projects.

## 2. Required Stack

- React with Vite
- Tailwind CSS
- React Router for page navigation
- JavaScript (not TypeScript) unless changed later
- Lucide React icons
- No heavy UI component library; build reusable components with Tailwind

## 3. Visual Theme

Follow this Figma portfolio template as the primary visual direction: https://www.figma.com/community/file/1092351809477351862/portfolio-template

- Clean, editorial, modern, and minimal—not a generic developer dashboard
- Warm off-white or light-neutral page background with near-black text
- A restrained accent colour for buttons, links, tags, focus states, and hover effects
- Oversized, confident display headings with a readable sans-serif body font
- Generous whitespace, consistent grid alignment, and strong visual hierarchy
- Large visual project cards with image areas, project metadata, technology tags, and links
- Simple sticky navigation and clear contact/resume calls to action
- Smooth, subtle hover states, image scale effects, and section reveal animations
- Respect `prefers-reduced-motion`; motion must never block usability
- Accessible contrast, visible keyboard focus, semantic landmarks, and keyboard-friendly navigation

## 4. Site Pages

### Home (`/`)

Build a single-scroll landing page with these sections, in order:

1. **Navigation**
   - Name/wordmark on the left
   - Links: About, Experience, Projects, Education, Contact
   - Resume download button
   - Mobile menu

2. **Hero**
   - Name: Bheemarasetty Praneesha
   - Role: Software Development Engineer Intern
   - Short value statement based on the resume
   - Primary CTA: View Projects
   - Secondary CTA: Download Resume
   - GitHub and LinkedIn links

3. **About**
   - Brief professional introduction
   - Focus on full-stack development, AI-powered applications, and data engineering

4. **Technical Skills**
   - Languages
   - Backend & Web
   - AI & Data
   - Databases & Tools
   - Core CS foundations
   - Present as readable groups or refined tag lists, not an overwhelming wall of badges

5. **Experience**
   - HashedIn by Deloitte — Software Development Engineer Intern
   - Aspire InfoLabs Pvt. Ltd. — SDE Trainee Intern
   - a-hub, Andhra University — Front-end Developer Intern
   - DEVMEUP Virtual Internship — Web Development Intern
   - AICTE Virtual Internship — Web Development Intern
   - Include relevant outcomes and live links such as FixMyMill and Study Tracker within the relevant experience card only

6. **Featured Projects**
   - AI-Powered CCTV Video Search — B.Tech Final-Year Project
     - GitHub: https://github.com/Praneesha18/cctv-4-2-project
     - Highlight React, Node.js, FastAPI/PyTorch, CLIP, Qdrant, MongoDB, Docker, semantic video search, and natural-language queries
   - Varahi Pickles — Personal Project
     - Highlight React.js, Chakra UI, responsive product showcase, gallery, WhatsApp contact, and JSON-server-backed product data
   - Do not duplicate FixMyMill, Study Tracker, or AICTE work in this section.

7. **Education**
   - B.Tech, Computer Science & Systems Engineering — Andhra University College of Engineering, CGPA 8.77/10, 2022–2026
   - Class XII, AP Board — 97.8%, 2020–2022
   - Class X, SSC — 10/10, 2019–2020

8. **Contact**
   - Email, LinkedIn, GitHub, location (Bengaluru, Karnataka)
   - Clear call to action for opportunities and collaboration

9. **Footer**
   - Name, copyright year, social links, and back-to-top action

### Projects (`/projects`)

- Full presentation of the two selected projects
- Project cards with image/visual area, description, responsibility, technology stack, GitHub link, and live-site link where available
- Add an empty-state-safe design for a missing live demo rather than inventing a URL

### Resume (`/resume`)

- Resume overview with skills, experience highlights, and education snapshot
- Visible button to download the supplied PDF
- Optional embedded PDF preview only if it performs well on mobile

## 5. Content & Links

- LinkedIn: https://www.linkedin.com/in/praneesha-bheemarasetty-7815523a1/
- GitHub profile: https://github.com/Praneesha18
- CCTV project repository: https://github.com/Praneesha18/cctv-4-2-project
- FixMyMill: https://www.matricservices.in/
- Study Tracker: https://study-tracker-app-e37o.vercel.app/
- Email: pranesha182004@gmail.com
- Phone: +91 9392356950

Use external links safely with `target="_blank"` and `rel="noreferrer"`.

## 6. Folder Structure

```text
portfolio_website/
├── public/
│   ├── images/
│   └── resume/
│       └── PraneeshaResumeUpdated.pdf
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── Education.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── SectionHeading.jsx
│   │       ├── ProjectCard.jsx
│   │       └── ExperienceCard.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Resume.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── prompt.md
└── README.md
```

## 7. Implementation Sequence

1. Initialize Vite, React, Tailwind CSS, React Router, and Lucide React.
2. Configure global fonts, colour tokens, spacing, and responsive container utilities.
3. Create the shared layout, navigation, footer, buttons, and section-heading components.
4. Add a structured `portfolioData.js` file so content is separate from presentation.
5. Build the Home page sections in visual order.
6. Build the Projects and Resume pages.
7. Add project visuals, responsive states, and lightweight motion.
8. Test navigation, links, resume download, mobile layouts, accessibility, and production build.

## 8. Acceptance Criteria

- The site runs locally and has a successful production build.
- It is responsive from mobile to large desktop screens.
- The Home page clearly communicates Praneesha's role, skills, work, projects, education, and contact options.
- The supplied Figma-inspired visual theme is applied consistently.
- Links work, the resume downloads, and no projects are duplicated between Experience and Projects.
- The UI is accessible, polished, and ready for deployment.

## 9. Implementation Log

**Completed — 2 August 2026**

- Initialized the requested React + Vite + Tailwind + React Router + Lucide stack in this folder.
- Added responsive Home, Projects, and Resume routes, a sticky responsive navigation menu, footer, reusable buttons, project cards, experience cards, and section headings.
- Built the editorial warm-neutral visual system with accessible focus states, reduced-motion support, keyboard navigation, responsive grids, and original CSS project visuals.
- Structured résumé-derived content in `src/data/portfolioData.js`; FixMyMill and Study Tracker appear only in Experience, while the selected-project pages feature only CCTV Video Search and Varahi Pickles.
- Copied the supplied résumé to `public/resume/PraneeshaResumeUpdated.pdf` and wired all resume-download calls to it.
- Added verified external profile, repository, project, email, and contact links with safe new-tab attributes where appropriate.
- Added project documentation in `README.md`.
- Production build verified successfully with `npm run build`; the generated site bundle and downloadable résumé are present in `dist/`.
- **Fix — 2 August 2026:** Corrected the `build` command from `vite` (which starts a development server) to `vite build`; configured local serve commands to bind to `0.0.0.0` for reliable browser access.
- **Fix — 2 August 2026:** Replaced unsupported Lucide social-brand icon imports, which were preventing Vite from compiling the site.
- **Fix — 2 August 2026:** Updated the route scroll effect to use an explicit block body, preventing the browser's `scrollTo` return value from being misinterpreted as a React effect cleanup function.

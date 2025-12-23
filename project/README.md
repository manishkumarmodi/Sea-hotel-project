# Sea Breeze Hotel

A Vite + React + TypeScript experience that showcases Sea Breeze Hotel's oceanfront hospitality. The single-page app highlights signature suites, curated amenities, guest testimonials, and booking CTAs through a responsive, motion-rich UI built with Tailwind CSS.

## Highlights
- Immersive full-screen hero with animated wave motif and clear booking/action CTAs
- Responsive navigation with mobile drawer, sticky positioning, and router-aware link states
- Curated room grid with amenity pills, nightly pricing, and quick links to the booking flow
- Highlights section that surfaces spa, dining, and concierge differentiators using iconography
- Auto-advancing testimonial carousel with manual controls for social proof
- Routed pages for About, Rooms, Restaurant, Spa, Gallery, Contact, and Booking experiences

## Tech Stack
- React 18 with TypeScript + StrictMode
- Vite 5 for dev server, bundling, and lightning-fast HMR
- Tailwind CSS 3 with PostCSS + autoprefixer for utility-first styling
- React Router 7 for client-side routing
- lucide-react icon library for consistent line icons
- ESLint 9 for static analysis and quality gates

## Getting Started
Prerequisites: Node.js 18+ and npm 9+.

```bash
git clone <repo-url>
cd project
npm install
npm run dev
```

Visit the printed localhost URL (default `http://localhost:5173`) to explore the experience.

## Available Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Launches the Vite dev server with HMR. |
| `npm run build` | Produces an optimized production bundle in `dist/`. |
| `npm run preview` | Serves the production build locally for smoke testing. |
| `npm run lint` | Runs ESLint across the TypeScript/JSX source. |

## Project Structure
```
project/
├── src/
│   ├── components/        # Hero, highlights, featured rooms, testimonials, navbar, footer
│   ├── pages/             # Routed views: Home, About, Rooms, Booking, Gallery, Restaurant, Spa, Contact
│   ├── App.tsx            # Router shell with global layout
│   ├── main.tsx           # React entry point + StrictMode
│   └── index.css          # Tailwind layers and custom styles
├── public/ (via Vite)     # Static assets served as-is
├── package.json           # Scripts and dependency manifest
├── tailwind.config.js     # Tailwind theme setup
└── vite.config.ts         # Vite + React plugin configuration
```

## Customization Ideas
1. Hook up real booking data or a headless CMS for rooms and testimonials.
2. Add form handling + validation on the booking/contact flows (Formik/React Hook Form).
3. Integrate analytics and performance tooling before shipping to production.

## License
Specify your preferred license (e.g., MIT, Apache-2.0) if you plan to distribute the project publicly.

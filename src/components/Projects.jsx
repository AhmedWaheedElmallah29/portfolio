import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { PROJECT_LINKS } from '../constants/links'

// ── Icons ──────────────────────────────────────────────
const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

// ── Data ──────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'barebite',
    number: '01',
    featured: true,
    title: 'Bare Bite',
    tagline: 'Full-Stack E-commerce Platform',
    description:
      'A complete multi-language e-commerce platform for a home-based cookie business, built with Next.js 16, React 19, Tailwind CSS v4, and Supabase. Covers both a polished customer storefront and a feature-rich admin dashboard with real-time analytics, order management, and financial reporting.',
    highlights: [
      { icon: '🌍', text: 'Multi-language support with custom i18n switcher' },
      { icon: '📊', text: 'Real-time analytics, sales charts & expense tracking' },
      { icon: '📦', text: 'QR-code based delivery confirmation system' },
      { icon: '🎨', text: 'Framer Motion animations & optimized image loading' },
    ],
    tech: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Supabase', 'Framer Motion', 'Recharts', 'next-intl'],
    live: PROJECT_LINKS.barebite.live,
    github: PROJECT_LINKS.barebite.github,
  },
  {
    id: 'streamify',
    number: '02',
    featured: false,
    title: 'Streamify',
    tagline: 'Real-Time Chat & Video App',
    description:
      'A real-time social platform for messaging and video calling with a full friend-request system, secure JWT auth in HTTP-only cookies, and Stream SDK integration for live chat and video calls.',
    highlights: [
      { icon: '💬', text: 'Real-time messaging with typing indicators & read receipts' },
      { icon: '📹', text: 'Video & audio calling via Stream Video SDK' },
      { icon: '🔐', text: 'XSS-safe JWT auth with HTTP-only cookies' },
    ],
    tech: ['React 19', 'Node.js', 'MongoDB', 'Stream SDK', 'Zustand', 'JWT'],
    live: PROJECT_LINKS.streamify.live,
    github: PROJECT_LINKS.streamify.github,
  },
  {
    id: 'ieee',
    number: '03',
    featured: false,
    title: 'IEEE SHA Branch',
    tagline: 'Official Organization Website',
    description:
      'The official website for the IEEE El-Shorouk Academy Student Branch, built to represent the branch\'s activities, events, and team to the public.',
    highlights: [],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
    live: PROJECT_LINKS.ieee.live,
    github: PROJECT_LINKS.ieee.github,
  },
  {
    id: 'water',
    number: '04',
    featured: false,
    title: 'Water Tracker',
    tagline: 'Hydration Analytics App',
    description:
      'A hydration tracking app with dashboard analytics, history tracking, secure authentication via Clerk, and full CRUD functionality with real-time optimistic UI updates deployed on Vercel serverless.',
    highlights: [],
    tech: ['React', 'Vite', 'Clerk', 'Express.js', 'MongoDB Atlas'],
    live: PROJECT_LINKS.water.live,
    github: PROJECT_LINKS.water.github,
  },
  {
    id: 'ecommerce',
    number: '05',
    featured: false,
    title: 'E-Commerce SPA',
    tagline: 'Responsive Shopping Platform',
    description:
      'A responsive e-commerce single-page application with shopping cart functionality, global state management via Context API, and dynamic product data fetched via REST APIs.',
    highlights: [],
    tech: ['React', 'Vite', 'Context API', 'Formik', 'Axios', 'Mantine UI'],
    live: PROJECT_LINKS.ecommerce.live,
    github: PROJECT_LINKS.ecommerce.github,
  },
]

// ── ProjectCard ────────────────────────────────────────
function ProjectCard({ project }) {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    cardRef.current.style.background = `
      radial-gradient(circle at ${x}% ${y}%, rgba(59,130,246,0.06) 0%, var(--clr-bg-card) 60%)
    `
  }
  const onMouseLeave = () => {
    cardRef.current.style.background = ''
  }

  return (
    <article
      ref={cardRef}
      className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`}
      id={`project-${project.id}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-card-inner">
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          {project.featured && (
            <span className="project-badge project-badge--featured">Featured</span>
          )}
        </div>

        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>

          <p className="project-description">{project.description}</p>

          {project.highlights.length > 0 && (
            <div className="project-highlights">
              {project.highlights.map(({ icon, text }) => (
                <div key={text} className="highlight-item">
                  <span className="hi-icon">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          )}

          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          <div className="project-actions">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <ExternalIcon /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                <GitHubIcon /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-card-glow" aria-hidden="true" />
    </article>
  )
}

// ── Projects Section ────────────────────────────────────
export default function Projects() {
  useReveal()

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

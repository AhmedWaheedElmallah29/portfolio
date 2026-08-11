import { useReveal } from '../hooks/useReveal'

const SERVICES = [
  {
    icon: '🛒',
    title: 'E-commerce Systems',
    desc: 'Product catalogs, cart flows, order tracking, admin dashboards',
  },
  {
    icon: '⚡',
    title: 'Real-Time Applications',
    desc: 'Chat systems, live notifications, video calling integrations',
  },
  {
    icon: '📊',
    title: 'Admin Dashboards',
    desc: 'Role-based access, analytics, reporting, internal tools',
  },
  {
    icon: '🔌',
    title: 'API Development',
    desc: 'REST APIs, third-party SDK integration, auth systems',
  },
]

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function About() {
  useReveal()

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">About</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text reveal">
            <p className="about-lead">
              I'm a <span className="highlight">Full-Stack Developer</span> and Computer
              Science student with hands-on experience building complete, production-grade
              web applications — not just frontend interfaces, but full systems with
              authentication, databases, real-time features, and admin dashboards.
            </p>
            <p>
              My stack centers on <span className="code-inline">React</span>,{' '}
              <span className="code-inline">Next.js</span>,{' '}
              <span className="code-inline">Node.js</span>,{' '}
              <span className="code-inline">Express</span>,{' '}
              <span className="code-inline">MongoDB</span>, and{' '}
              <span className="code-inline">Supabase</span>. I've shipped projects ranging
              from a full e-commerce platform with an internal admin dashboard, to a
              real-time chat &amp; video calling app integrated with third-party SDKs.
            </p>
            <p>
              I also served as a{' '}
              <span className="highlight">Frontend Instructor at IEEE</span>, teaching HTML,
              CSS, JavaScript, and React — which sharpened both my technical depth and my
              ability to communicate complex ideas clearly.
            </p>
            <div className="about-links">
              <a
                href="https://github.com/AhmedWaheedElmallah29"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-waheed-elmallah-19966a300"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          {/* Services card */}
          <div className="about-card reveal">
            <div className="card-glow" aria-hidden="true" />
            <div className="about-services">
              <h3 className="services-title">What I Build</h3>
              <ul className="services-list" role="list">
                {SERVICES.map(({ icon, title, desc }) => (
                  <li key={title} className="service-item">
                    <div className="service-icon" aria-hidden="true">{icon}</div>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

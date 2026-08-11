import { useReveal } from '../hooks/useReveal'

const TIMELINE = [
  {
    id: 'ieee',
    date: '2025',
    role: 'Frontend Instructor & Core Member',
    org: 'IEEE El-Shorouk Academy Student Branch',
    details: [
      'Delivered comprehensive frontend training covering HTML, CSS, JavaScript, and React',
      'Mentored junior members and helped solve technical challenges',
      'Progressed from MERN Stack trainee → Frontend Instructor',
    ],
  },
]

const CERTS = [
  {
    id: 'best-member',
    icon: '🏆',
    title: 'Best Member Award',
    subtitle: 'IEEE El-Shorouk Academy Student Branch · 2025',
    detail: null,
  },
  {
    id: 'react-course',
    icon: '⚛️',
    title: 'The Ultimate React Course',
    subtitle: 'Udemy · Jonas Schmedtmann · 84 hours',
    detail: 'React, Next.js, Redux Toolkit, React Query, Supabase',
  },
  {
    id: 'mern',
    icon: '🟢',
    title: 'MERN Stack Workshop',
    subtitle: 'IEEE El-Shorouk Academy · 60 training hours · Aug 2025',
    detail: null,
  },
  {
    id: 'frontend-prog',
    icon: '🎨',
    title: 'Front-End Development Training Program',
    subtitle: 'OrbScope Academy · 2025',
    detail: null,
  },
  {
    id: 'field',
    icon: '🏗️',
    title: 'Field Training Program',
    subtitle: 'OrbScope Academy · 2025',
    detail: null,
  },
]

export default function Experience() {
  useReveal()

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">// 04. experience</span>
          <h2 className="section-title">Journey So Far</h2>
        </div>

        <div className="exp-grid">
          {/* Timeline */}
          <div className="exp-col reveal">
            <h3 className="exp-col-title">Experience</h3>
            <div className="timeline">
              {TIMELINE.map(({ id, date, role, org, details }) => (
                <div key={id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-date">{date}</span>
                    <h4 className="timeline-role">{role}</h4>
                    <p className="timeline-org">{org}</p>
                    <ul className="timeline-details">
                      {details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="exp-col reveal">
            <h3 className="exp-col-title">Certifications</h3>
            <div className="certs-list">
              {CERTS.map(({ id, icon, title, subtitle, detail }) => (
                <div key={id} className="cert-card">
                  <div className="cert-icon" aria-hidden="true">{icon}</div>
                  <div className="cert-content">
                    <strong>{title}</strong>
                    <span>{subtitle}</span>
                    {detail && <small>{detail}</small>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

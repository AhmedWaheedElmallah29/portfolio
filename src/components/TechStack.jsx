import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const STACK_CATEGORIES = [
  {
    dot: 'category-dot--frontend',
    label: 'Frontend',
    chips: [
      { icon: '⚛️', label: 'React.js' },
      { icon: '▲',  label: 'Next.js' },
      { icon: 'JS', label: 'JavaScript ES6+' },
      { icon: '🎨', label: 'Tailwind CSS' },
      { icon: '🔴', label: 'Redux Toolkit' },
      { icon: '🔗', label: 'Context API' },
      { icon: '📡', label: 'React Query' },
      { icon: '⚡', label: 'Vite' },
    ],
  },
  {
    dot: 'category-dot--backend',
    label: 'Backend',
    chips: [
      { icon: '🟢', label: 'Node.js' },
      { icon: '🚀', label: 'Express.js' },
      { icon: '🍃', label: 'MongoDB' },
      { icon: '🔶', label: 'Mongoose' },
      { icon: '⚡', label: 'Supabase' },
      { icon: '🔁', label: 'REST APIs' },
      { icon: '🔐', label: 'JWT Auth' },
    ],
  },
  {
    dot: 'category-dot--tools',
    label: 'Tools & Deployment',
    chips: [
      { icon: '🐙', label: 'Git / GitHub' },
      { icon: '▲',  label: 'Vercel' },
      { icon: '🌐', label: 'Netlify' },
      { icon: '📮', label: 'Postman' },
      { icon: '📋', label: 'Notion' },
    ],
  },
]

function TechChip({ icon, label }) {
  const chipRef = useRef(null)

  const onMouseMove = (e) => {
    const rect = chipRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 12
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 12
    chipRef.current.style.transform = `translateY(-2px) rotateX(${-y}deg) rotateY(${x}deg)`
  }
  const onMouseLeave = () => {
    chipRef.current.style.transform = ''
  }

  return (
    <div
      ref={chipRef}
      className="tech-chip"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <span className="tech-icon">{icon}</span>
      {label}
    </div>
  )
}

export default function TechStack() {
  useReveal()

  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">My Toolkit</h2>
        </div>

        <div className="stack-categories">
          {STACK_CATEGORIES.map(({ dot, label, chips }) => (
            <div key={label} className="stack-category reveal">
              <div className="stack-category-label">
                <span className={`category-dot ${dot}`} />
                {label}
              </div>
              <div className="tech-grid">
                {chips.map((chip) => (
                  <TechChip key={chip.label} icon={chip.icon} label={chip.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

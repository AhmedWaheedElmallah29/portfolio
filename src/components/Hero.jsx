import { useEffect, useRef } from 'react'
import { useCounter } from '../hooks/useCounter'
import heroBg from '../assets/hero_bg.png'
import ahmedPhoto from '../assets/ahmed.jpg'

const PARTICLE_COUNT = 25
const PARTICLE_COLORS = ['#9b87f5', '#c4b5fd', '#f4a261', '#ffffff']

function Particles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const x     = Math.random() * 100
      const dur   = 12 + Math.random() * 16
      const delay = Math.random() * 12
      const size  = 1 + Math.random() * 2
      const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
      p.style.cssText = `
        left: ${x}%;
        bottom: -10px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        opacity: 0.3;
        animation-duration: ${dur}s;
        animation-delay: -${delay}s;
      `
      container.appendChild(p)
      particles.push(p)
    }
    return () => particles.forEach((p) => p.remove())
  }, [])

  return <div ref={containerRef} className="hero-particles" aria-hidden="true" />
}

function StatCounter({ target, suffix = '', label }) {
  const ref = useCounter(target)
  return (
    <div className="stat-item">
      <span className="stat-number" ref={ref}>0</span>
      {suffix && <span className="stat-suffix">{suffix}</span>}
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    const el = document.querySelector('#projects')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }
  const scrollToContact = (e) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <img src={heroBg} alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      {/* Subtle Particles */}
      <Particles />

      {/* Two-column layout */}
      <div className="hero-inner">
        {/* Left — Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Freelance &amp; Collaboration
          </div>

          <h1 className="hero-title">
            <span className="hero-title-name">Ahmed Elmallah</span>
            <span className="hero-title-role">
              Full-Stack <span className="gradient-text">Developer</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Building scalable, production-ready web applications with the{' '}
            <strong>MERN stack</strong> and <strong>Next.js</strong> — from
            real-time chat systems to full e-commerce platforms with admin
            dashboards.
          </p>

          <div className="hero-actions">
            <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" onClick={scrollToContact} className="btn btn-ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero-stats">
            <StatCounter target={5}   label="Live Projects" />
            <div className="stat-divider" aria-hidden="true" />
            <StatCounter target={144} suffix="+" label="Training Hours" />
            <div className="stat-divider" aria-hidden="true" />
            <StatCounter target={5}   label="Certifications" />
          </div>
        </div>

        {/* Right — Photo */}
        <div className="hero-photo-col">
          <div className="hero-photo-wrap">
            <div className="hero-photo-border" aria-hidden="true" />
            <img
              src={ahmedPhoto}
              alt="Ahmed Elmallah — Full-Stack Developer"
              className="hero-photo"
            />
            <div className="hero-photo-badge">
              <span className="hero-photo-badge-dot" />
              <span className="hero-photo-badge-text">Open to Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

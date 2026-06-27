import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { projects } from '../data';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 20);
    setRotateY((centerX - x) / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        ref={cardRef}
        className="project-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Mockup */}
        <div className="project-mockup">
          <div
            className="project-mockup-bg"
            style={{ background: project.gradient }}
          >
            <div style={{ color: 'rgba(255,255,255,0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              {project.icon}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>
                {project.title}
              </span>
            </div>
          </div>
          <div className="browser-frame">
            <div className="browser-dot" style={{ background: '#FF5F57' }} />
            <div className="browser-dot" style={{ background: '#FFBD2E' }} />
            <div className="browser-dot" style={{ background: '#28CA41' }} />
            <span
              className="mono"
              style={{
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.4)',
                marginLeft: '0.75rem',
              }}
            >
              {project.liveUrl.replace('https://', '')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--color-text)',
              }}
            >
              {project.title}
            </h3>
            <span
              className="mono"
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
              }}
            >
              #{String(project.id).padStart(2, '0')}
            </span>
          </div>

          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginBottom: '1rem',
            }}
          >
            {project.description}
          </p>

          {/* Key features */}
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
            {project.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.8rem',
                  lineHeight: 1.6,
                  paddingLeft: '1rem',
                  position: 'relative',
                  marginBottom: '0.25rem',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  ▸
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {project.tech.map((t) => (
              <span
                key={t}
                className="mono"
                style={{
                  fontSize: '0.7rem',
                  padding: '0.3rem 0.6rem',
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  color: 'var(--color-accent)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
            <a
              href="https://github.com/AhmedWaheedElmallah29"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <SiGithub size={15} />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <ScrollReveal>
        <div className="accent-line" />
        <p className="mono" style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          03. Work
        </p>
        <h2 className="section-title">
          Featured Projects
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          marginTop: '2.5rem',
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { personalInfo, aboutStrengths as strengths } from '../data';

export default function About() {
  return (
    <section id="about" className="section">
      <ScrollReveal>
        <div className="accent-line" />
        <p className="mono" style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          01. About Me
        </p>
        <h2 className="section-title">
          Who I Am
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          marginTop: '2.5rem',
        }}
        className="about-grid"
      >
        {/* Summary */}
        <ScrollReveal delay={0.1}>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              maxWidth: '600px',
            }}
          >
            {personalInfo.about}
          </p>
        </ScrollReveal>

        {/* Core Strengths */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {strengths.map((s, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.1}>
              <motion.div
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  cursor: 'default',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                <div style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }}>
                  {s.icon}
                </div>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                  {s.text}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

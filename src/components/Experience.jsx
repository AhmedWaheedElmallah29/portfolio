import ScrollReveal from './ScrollReveal';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <ScrollReveal>
        <div className="accent-line" />
        <p className="mono" style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          04. Experience
        </p>
        <h2 className="section-title">
          Where I've Worked
        </h2>
      </ScrollReveal>

      <div className="timeline" style={{ marginTop: '2.5rem', maxWidth: '700px' }}>
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'var(--color-accent-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                    }}
                  >
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                      }}
                    >
                      {exp.title}
                    </h3>
                    {exp.org && (
                      <p
                        style={{
                          color: 'var(--color-accent)',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {exp.org}
                      </p>
                    )}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        paddingLeft: '1rem',
                        position: 'relative',
                        marginBottom: '0.35rem',
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
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

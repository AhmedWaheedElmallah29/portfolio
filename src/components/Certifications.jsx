import ScrollReveal from './ScrollReveal';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <ScrollReveal>
        <div className="accent-line" />
        <p className="mono" style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          05. Achievements
        </p>
        <h2 className="section-title">
          Certifications & Awards
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginTop: '2.5rem',
        }}
      >
        {certifications.map((cert, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="cert-card">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--color-accent-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  marginBottom: '1rem',
                }}
              >
                {cert.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: '0.25rem',
                  lineHeight: 1.3,
                }}
              >
                {cert.title}
              </h3>

              {cert.detail && (
                <p
                  className="mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-accent)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {cert.detail}
                </p>
              )}

              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.25rem',
                }}
              >
                {cert.issuer}
              </p>

              <p
                className="mono"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                {cert.year}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

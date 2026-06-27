import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { categories } from '../data';

export default function TechStack() {
  return (
    <section id="skills" className="section">
      <ScrollReveal>
        <div className="accent-line" />
        <p className="mono" style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
          02. Skills
        </p>
        <h2 className="section-title">
          Tech Stack
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2.5rem',
        }}
      >
        {categories.map((cat, catIdx) => (
          <ScrollReveal key={cat.title} delay={catIdx * 0.1}>
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '16px',
                padding: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  marginBottom: '1rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + skillIdx * 0.05, duration: 0.3 }}
                  >
                    {skill.icon && (
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        {skill.icon}
                      </span>
                    )}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

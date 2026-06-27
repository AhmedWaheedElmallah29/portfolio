import { Mail, Heart } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '2.5rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        {/* Social links */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="https://github.com/AhmedWaheedElmallah29"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="mailto:ahmedwaheedelmallah@gmail.com"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.color = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          Built with <Heart size={12} style={{ color: 'var(--color-accent)' }} /> by Ahmed Waheed Elmallah ·{' '}
          <span className="mono">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

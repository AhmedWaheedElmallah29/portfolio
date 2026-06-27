import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Eye, Mail } from 'lucide-react';

import { personalInfo } from '../data';

function TypingAnimation({ text, speed = 80 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      {!done && <span className="typing-cursor" />}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient mesh background */}
      <div className="gradient-mesh" />
      <div className="grid-pattern" />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '900px',
        }}
      >
        {/* Greeting tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            padding: '0.5rem 1.25rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '999px',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span style={{ color: 'var(--color-accent)' }}>{'>'}</span> Hello, I'm
        </motion.div>

        {/* Name */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typing subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            marginTop: '0.75rem',
            marginBottom: '1.5rem',
          }}
        >
          <TypingAnimation text={personalInfo.title} speed={80} />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Eye size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div className="scroll-indicator" style={{ color: 'var(--color-text-muted)' }}>
          <ArrowDown size={22} />
        </div>
      </motion.div>
    </section>
  );
}

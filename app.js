/* app.js — Ahmed Elmallah Portfolio */

/* ── Cursor Glow ── */
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
});

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
}, { passive: true });

/* ── Hamburger ── */
const hamburger = document.getElementById('hamburger-btn');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ── Active nav link ── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

/* ── Reveal on scroll ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ── Animated counters ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.round(current);
  }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

/* ── Hero Particles ── */
const particleContainer = document.getElementById('hero-particles');
const PARTICLE_COUNT = 40;

function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  const x = Math.random() * 100;
  const dur = 8 + Math.random() * 12;
  const delay = Math.random() * 10;
  const size = 1 + Math.random() * 3;
  const colors = ['#3b82f6','#8b5cf6','#06b6d4','#22c55e'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  p.style.cssText = `
    left: ${x}%;
    bottom: -10px;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    box-shadow: 0 0 ${size * 3}px ${color};
    animation-duration: ${dur}s;
    animation-delay: -${delay}s;
  `;
  particleContainer.appendChild(p);
}
for (let i = 0; i < PARTICLE_COUNT; i++) createParticle();

/* ── Smooth scroll for all hash links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── Tech chip tilt on hover ── */
document.querySelectorAll('.tech-chip').forEach(chip => {
  chip.addEventListener('mousemove', (e) => {
    const rect = chip.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width * 12;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height * 12;
    chip.style.transform = `translateY(-2px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });
  chip.addEventListener('mouseleave', () => {
    chip.style.transform = '';
  });
});

/* ── Project card shine effect ── */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
    card.style.background = `
      radial-gradient(circle at ${x}% ${y}%, rgba(59,130,246,0.06) 0%, var(--clr-bg-card) 60%)
    `;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

/* ── Typing effect for hero role (subtle) ── */
(function typingEffect() {
  const el = document.querySelector('.hero-title-role');
  if (!el) return;
  const text = el.textContent;
  // We just add a blinking cursor after page load
  const cursor = document.createElement('span');
  cursor.textContent = '|';
  cursor.style.cssText = 'color: var(--clr-primary); animation: dot-blink 0.8s step-end infinite; margin-left: 2px;';
  // Only show cursor briefly then remove
  el.appendChild(cursor);
  setTimeout(() => cursor.remove(), 3500);
})();

/* ── Ensure page starts at top on reload ── */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

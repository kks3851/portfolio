/* ============================================================
   KARAN SHAH PORTFOLIO — main.js
   ============================================================ */

// ── REVEAL ON SCROLL ──────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal:not(.visible)');
        let delay = 0;
        siblings.forEach((el) => {
          if (el === entry.target || !entry.target.parentElement.contains(el)) return;
        });

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 0);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

// Stagger groups
function observeWithStagger() {
  const groups = document.querySelectorAll('.section, .hero-content');
  groups.forEach((group) => {
    const reveals = group.querySelectorAll('.reveal');
    reveals.forEach((el, idx) => {
      // Only override delay if no existing one
      if (!el.style.transitionDelay) {
        el.style.transitionDelay = `${idx * 0.08}s`;
      }
      observer.observe(el);
    });
  });

  // Hero elements - trigger immediately since they're above fold
  const heroReveals = document.querySelectorAll('.hero-content .reveal');
  heroReveals.forEach((el) => {
    setTimeout(() => el.classList.add('visible'), 100);
  });
}

observeWithStagger();

// ── COMPETENCY BARS ───────────────────────────────────────────
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.competency-fill').forEach((fill) => {
          const w = fill.style.width;
          fill.style.width = '0';
          requestAnimationFrame(() => {
            setTimeout(() => { fill.style.width = w; }, 50);
          });
        });
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.competency-strip').forEach((el) => barObserver.observe(el));

// ── NAV SCROLL EFFECT ─────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
  }
});

// ── ACTIVE NAV LINK ───────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--text-primary)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach((s) => sectionObserver.observe(s));

// ── MOBILE MENU ───────────────────────────────────────────────
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = burger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ── SMOOTH SCROLL POLYFILL ────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

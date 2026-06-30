// ENZO SPERDUTI — PORTFOLIO INTERACTIONS

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll-triggered reveals
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // Houston ground-control clock
  const timeEl = document.getElementById('localTime');
  if (timeEl) {
    const updateClock = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Chicago',
      }).format(now);
      timeEl.textContent = formatted;
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

});

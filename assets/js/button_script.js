document.addEventListener('DOMContentLoaded', () => {

  document.body.classList.add('js-ready');

  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    const mobileNav = window.matchMedia('(max-width: 640px)');
    let isOpen = false;

    const syncNavigation = () => {
      if (mobileNav.matches) {
        siteNav.hidden = !isOpen;
        siteNav.inert = !isOpen;
      } else {
        isOpen = false;
        siteNav.hidden = false;
        siteNav.inert = false;
      }

      siteNav.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    navToggle.addEventListener('click', () => {
      isOpen = !isOpen;
      syncNavigation();
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        isOpen = false;
        syncNavigation();
      });
    });

    mobileNav.addEventListener('change', syncNavigation);
    syncNavigation();
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

});

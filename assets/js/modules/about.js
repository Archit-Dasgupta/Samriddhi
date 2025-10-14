const observerOptions = {
  threshold: 0.15,
};

const initFadeIns = () => {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealEls.forEach((el) => observer.observe(el));
};

const initAnchorHints = () => {
  const sectionLinks = document.querySelectorAll('.about-subnav a');
  if (!sectionLinks.length) return;

  sectionLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      const section = document.getElementById(targetId);
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      section.classList.add('pulse');
      window.setTimeout(() => section.classList.remove('pulse'), 800);
    });
  });
};

export const initAbout = () => {
  initFadeIns();
  initAnchorHints();
};

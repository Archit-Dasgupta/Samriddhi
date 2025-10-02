import { $, $$ } from './common.js';

const getSlidesPerView = () => {
  if (window.matchMedia('(min-width: 1024px)').matches) return 3;
  if (window.matchMedia('(min-width: 768px)').matches) return 2;
  return 1;
};

export const initHome = () => {
  const btn = $('#btnStart');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }

  const viewport = $('.testimonial-window');
  const track = viewport ? $('.testimonial-track', viewport) : null;
  const cards = track ? $$('.testimonial-card', track) : [];
  const prevBtn = $('.carousel-btn[data-dir="prev"]');
  const nextBtn = $('.carousel-btn[data-dir="next"]');
  const dotsHost = $('.carousel-dots');

  if (!viewport || !track || cards.length === 0 || !prevBtn || !nextBtn || !dotsHost) {
    return;
  }

  let index = 0;
  let maxIndex = Math.max(0, cards.length - getSlidesPerView());
  let autoTimer;
  let scrollTimer;

  const stopAuto = () => {
    if (autoTimer) {
      window.clearInterval(autoTimer);
      autoTimer = undefined;
    }
  };

  const startAuto = () => {
    stopAuto();
    if (maxIndex === 0) return;
    autoTimer = window.setInterval(() => {
      const nextIndex = index >= maxIndex ? 0 : index + 1;
      goTo(nextIndex, { restartAuto: false });
    }, 6000);
  };

  const syncButtons = () => {
    const controlsDisabled = maxIndex === 0;
    prevBtn.disabled = controlsDisabled || index <= 0;
    nextBtn.disabled = controlsDisabled || index >= maxIndex;
  };

  const syncDots = () => {
    const dots = Array.from(dotsHost.querySelectorAll('button'));
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
      dot.setAttribute('aria-selected', dotIndex === index ? 'true' : 'false');
    });
    dotsHost.classList.toggle('hidden', maxIndex === 0);
  };

  const renderDots = () => {
    dotsHost.innerHTML = '';
    if (maxIndex === 0) {
      syncDots();
      return;
    }

    for (let i = 0; i <= maxIndex; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsHost.append(dot);
    }

    syncDots();
  };

  const goTo = (targetIndex, { smooth = true, restartAuto = true } = {}) => {
    const safeIndex = Math.max(0, Math.min(targetIndex, maxIndex));
    const card = cards[safeIndex];
    if (!card) return;

    index = safeIndex;
    viewport.scrollTo({ left: card.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    syncDots();
    syncButtons();

    if (restartAuto) {
      startAuto();
    }
  };

  const updateMetrics = ({ restart = true } = {}) => {
    const slidesPerView = getSlidesPerView();
    maxIndex = Math.max(0, cards.length - slidesPerView);
    if (index > maxIndex) index = maxIndex;
    renderDots();
    goTo(index, { smooth: false, restartAuto: false });
    syncButtons();
    if (restart) {
      if (maxIndex === 0) stopAuto();
      else startAuto();
    }
  };

  const updateIndexFromScroll = () => {
    const { scrollLeft } = viewport;
    let nearestIndex = index;
    let minDistance = Number.POSITIVE_INFINITY;
    cards.forEach((card, cardIndex) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = Math.min(cardIndex, maxIndex);
      }
    });
    if (nearestIndex !== index) {
      index = nearestIndex;
      syncDots();
      syncButtons();
    }
  };

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  viewport.addEventListener('pointerenter', stopAuto);
  viewport.addEventListener('pointerleave', startAuto);
  viewport.addEventListener('focusin', stopAuto);
  viewport.addEventListener('focusout', startAuto);

  viewport.addEventListener('scroll', () => {
    stopAuto();
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      updateIndexFromScroll();
      startAuto();
    }, 120);
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => updateMetrics(), 150);
  });

  updateMetrics({ restart: false });
  goTo(0, { smooth: false, restartAuto: false });
  startAuto();
};

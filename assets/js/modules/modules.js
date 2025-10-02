import { $, $$, COURSE_STATE, COURSE_PROGRESS } from './common.js';
import { modulesData } from './course-data.js';

const YT_EMBED = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&playsinline=1';

const TYPE_META = {
  video: { icon: '▶', label: 'Short video' },
  reading: { icon: '📘', label: 'Quick tip' },
  quiz: { icon: '📝', label: 'Knowledge check' },
};

const refreshSectionHeights = () => {
  $$('.module-sec:not(.collapsed) .items').forEach((items) => {
    items.style.maxHeight = `${items.scrollHeight}px`;
  });
  $$('.item-details.open').forEach((details) => {
    details.style.maxHeight = `${details.scrollHeight}px`;
  });
};

const stopMedia = (details) => {
  const iframe = details.querySelector('iframe');
  if (iframe) {
    iframe.src = 'about:blank';
    iframe.remove();
  }
};

const closeAllDetails = () => {
  $$('.item-row.active').forEach((row) => {
    row.classList.remove('active');
    row.setAttribute('aria-expanded', 'false');
  });

  $$('.item-details.open').forEach((details) => {
    details.classList.remove('open');
    details.style.maxHeight = '0px';
    stopMedia(details);
  });

  requestAnimationFrame(refreshSectionHeights);
};

const toggleItem = (row) => {
  const details = row.nextElementSibling;
  if (!details) return;
  const isOpen = details.classList.contains('open');

  if (isOpen) {
    details.classList.remove('open');
    details.style.maxHeight = '0px';
    row.classList.remove('active');
    row.setAttribute('aria-expanded', 'false');
    stopMedia(details);
    return;
  }

  closeAllDetails();

  details.classList.add('open');
  row.classList.add('active');
  row.setAttribute('aria-expanded', 'true');

  const holder = details.querySelector('.holder');
  if (!holder) return;
  holder.innerHTML = '';

  const kind = row.dataset.type;
  const moduleIndex = Number(row.dataset.mi);
  const itemIndex = Number(row.dataset.ii);
  localStorage.setItem(COURSE_STATE, JSON.stringify({ moduleIndex, itemIndex }));

  if (kind === 'video') {
    const iframe = document.createElement('iframe');
    iframe.className = 'yt';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.src = YT_EMBED;
    holder.appendChild(iframe);
  } else {
    holder.innerHTML = '<div class="reading-card">This short read gives you practical steps you can try today. Keep a notebook handy to write what matters most for your work.</div>';
  }

  details.style.maxHeight = `${details.scrollHeight}px`;
  requestAnimationFrame(refreshSectionHeights);
  details.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const setSectionExpanded = (section, expand) => {
  const btn = section.querySelector('.collapse-btn');
  const items = section.querySelector('.items');
  if (!btn || !items) return;

  section.classList.toggle('collapsed', !expand);
  btn.setAttribute('aria-expanded', String(expand));
  const arrow = btn.querySelector('.arrow');
  if (arrow) arrow.style.transform = expand ? 'rotate(0deg)' : 'rotate(-90deg)';

  if (expand) {
    items.style.maxHeight = `${items.scrollHeight}px`;
  } else {
    items.style.maxHeight = '0px';
    closeAllDetails();
  }
};

const renderModules = () => {
  const host = $('#moduleList');
  if (!host) return;

  host.innerHTML = '';
  let totalMinutes = 0;
  let doneCount = 0;
  const state = JSON.parse(localStorage.getItem(COURSE_STATE) || '{"moduleIndex":0,"itemIndex":0}');

  modulesData.forEach((module, moduleIndex) => {
    totalMinutes += module.minutes;

    const section = document.createElement('section');
    section.className = 'module-sec';
    section.innerHTML = `
      <div class="sec-head">
        <button class="collapse-btn" type="button" data-i="${moduleIndex}" aria-expanded="true" aria-controls="items-${moduleIndex}">
          <span class="arrow" aria-hidden="true"></span>
          <div class="sec-text">
            <span class="sec-title">${moduleIndex + 1}. ${module.title}</span>
            <span class="sec-summary">${module.summary}</span>
          </div>
          <span class="sec-time">${module.minutes} min</span>
        </button>
      </div>
      <div class="items" id="items-${moduleIndex}" role="list"></div>
    `;

    host.appendChild(section);

    const itemsContainer = section.querySelector('.items');
    module.items.forEach((item, itemIndex) => {
      const meta = TYPE_META[item.type] || TYPE_META.reading;
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'item-row';
      row.dataset.type = item.type;
      row.dataset.mi = String(moduleIndex);
      row.dataset.ii = String(itemIndex);
      row.setAttribute('role', 'listitem');
      row.innerHTML = `
        <span class="item-leading">
          <span class="item-icon" aria-hidden="true">${meta.icon}</span>
          <span class="item-text">
            <span class="it-title">${item.title}</span>
            <span class="it-label">${meta.label}</span>
          </span>
        </span>
        <span class="item-trail">
          <span class="it-duration">${item.mins} min</span>
          <span class="item-action">${item.type === 'quiz' ? 'Start quiz' : 'Open lesson'}</span>
        </span>
      `;

      if (item.quizId) {
        row.dataset.quizid = item.quizId;
        row.classList.add('is-quiz');
      }

      if (moduleIndex < state.moduleIndex || (moduleIndex === state.moduleIndex && itemIndex < state.itemIndex)) {
        doneCount++;
        row.classList.add('completed');
      }

      if (item.type !== 'quiz') {
        const detailsId = `detail-${moduleIndex}-${itemIndex}`;
        const details = document.createElement('div');
        details.className = 'item-details';
        details.id = detailsId;
        details.setAttribute('role', 'region');
        details.setAttribute('aria-live', 'polite');
        details.innerHTML = '<div class="holder"></div>';
        row.setAttribute('aria-expanded', 'false');
        row.setAttribute('aria-controls', detailsId);
        itemsContainer.appendChild(row);
        itemsContainer.appendChild(details);
      } else {
        row.addEventListener('click', () => {
          localStorage.setItem(COURSE_STATE, JSON.stringify({ moduleIndex, itemIndex }));
          if (item.quizId) {
            window.location.href = `quiz.html?id=${item.quizId}`;
          }
        });
        row.setAttribute('aria-label', `${item.title}. Opens quiz in a new page.`);
        itemsContainer.appendChild(row);
        return;
      }

      row.addEventListener('click', () => toggleItem(row));
    });

    const btn = section.querySelector('.collapse-btn');
    btn?.addEventListener('click', () => {
      const expand = section.classList.contains('collapsed');
      setSectionExpanded(section, expand);
    });

    setSectionExpanded(section, true);
  });

  const totalEl = $('#totalLen');
  if (totalEl) totalEl.textContent = `${totalMinutes}m`;

  const totalItems = modulesData.reduce((acc, module) => acc + module.items.length, 0);
  const pct = Math.min(1, doneCount / totalItems);
  localStorage.setItem(COURSE_PROGRESS, String(pct));

  requestAnimationFrame(() => {
    refreshSectionHeights();
    if (state) {
      const targetRow = document.querySelector(`[data-mi='${state.moduleIndex}'][data-ii='${state.itemIndex}']`);
      if (targetRow && targetRow.dataset.type !== 'quiz') {
        toggleItem(targetRow);
      }
    }
  });
};

export const initModules = () => {
  if (!$('#page-modules')) return;
  renderModules();
  window.addEventListener('resize', () => {
    refreshSectionHeights();
  });
};

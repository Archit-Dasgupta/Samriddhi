import { $, $$, COURSE_STATE, COURSE_PROGRESS } from './common.js';
import { modulesData } from './course-data.js';

const TYPE_META = {
  video: { icon: '▶', label: 'Short video' },
  reading: { icon: '📘', label: 'Quick tip' },
  quiz: { icon: '📝', label: 'Knowledge check' },
};

const getItemData = (moduleIndex, itemIndex) => {
  const module = modulesData[moduleIndex];
  if (!module) return null;
  return module.items[itemIndex] || null;
};

const buildVideoSrc = (item) => {
  if (!item) return '';
  if (item.videoUrl) {
    const joiner = item.videoUrl.includes('?') ? '&' : '?';
    return `${item.videoUrl}${joiner}autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;
  }
  if (item.videoId) {
    return `https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;
  }
  return '';
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
  const itemData = getItemData(moduleIndex, itemIndex);
  localStorage.setItem(COURSE_STATE, JSON.stringify({ moduleIndex, itemIndex }));

  if (kind === 'video') {
    const src = buildVideoSrc(itemData);
    if (src) {
      const shell = document.createElement('div');
      shell.className = 'video-shell';

      const iframe = document.createElement('iframe');
      iframe.className = 'yt';
      iframe.setAttribute('allow', 'autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');
      iframe.title = `${itemData?.title || 'Course'} video lesson`;
      iframe.src = src;

      const controls = document.createElement('div');
      controls.className = 'video-controls';

      const fsBtn = document.createElement('button');
      fsBtn.type = 'button';
      fsBtn.className = 'video-control';
      fsBtn.innerHTML = '<span aria-hidden="true">⤢</span><span class="label">Full screen</span>';
      fsBtn.addEventListener('click', () => {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen().catch(() => {
            if (shell.requestFullscreen) shell.requestFullscreen().catch(() => {});
          });
        } else if (shell.requestFullscreen) {
          shell.requestFullscreen().catch(() => {});
        }
      });

      controls.appendChild(fsBtn);

      const autoplayHint = document.createElement('span');
      autoplayHint.className = 'video-hint';
      autoplayHint.textContent = 'Playing automatically — unmute if you need sound.';
      controls.appendChild(autoplayHint);

      shell.appendChild(iframe);
      shell.appendChild(controls);
      holder.appendChild(shell);

      const note = document.createElement('p');
      note.className = 'video-note';
      note.textContent = 'Find a quiet spot, keep your phone steady, and pause to practice each step before continuing.';
      holder.appendChild(note);
    } else {
      holder.innerHTML = '<div class="reading-card">This video will be available soon. Meanwhile, review the safety checklist in your notes.</div>';
    }
  } else {
    const copy = itemData?.copy
      || 'This short read gives you practical steps you can try today. Keep a notebook handy to write what matters most for your work.';
    holder.innerHTML = `<div class="reading-card">${copy}</div>`;
  }

  requestAnimationFrame(() => {
    details.style.maxHeight = `${details.scrollHeight}px`;
    refreshSectionHeights();
  });
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
  let firstAvailableSelector = '';
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
    if (module.highlight && itemsContainer) {
      const callout = document.createElement('div');
      callout.className = 'module-callout';
      callout.setAttribute('role', 'presentation');
      callout.innerHTML = `
        <span class="callout-badge">${module.highlight.badge}</span>
        <div class="callout-body">
          <p class="callout-text">${module.highlight.text}</p>
          <ul class="callout-list">
            ${module.highlight.tips.map((tip) => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      `;
      itemsContainer.appendChild(callout);
    }
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

      const isCompleted = moduleIndex < state.moduleIndex || (moduleIndex === state.moduleIndex && itemIndex < state.itemIndex);
      if (isCompleted) {
        doneCount++;
        row.classList.add('completed');
      }

      if (!isCompleted && !firstAvailableSelector && item.type !== 'quiz') {
        firstAvailableSelector = `[data-mi='${moduleIndex}'][data-ii='${itemIndex}']`;
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
        if (item.videoId) {
          row.dataset.videoid = item.videoId;
        }
        if (item.videoUrl) {
          row.dataset.videourl = item.videoUrl;
        }
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

  const progressValue = $('#progressValue');
  if (progressValue) {
    progressValue.textContent = `${Math.round(pct * 100)}% complete`;
  }
  const progressBar = $('#progressBar');
  if (progressBar) {
    const percent = Math.round(pct * 100);
    progressBar.style.width = `${percent}%`;
    progressBar.parentElement?.setAttribute('aria-valuenow', String(percent));
  }

  const resumeBtn = $('#btnResumeLesson');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      const stored = JSON.parse(localStorage.getItem(COURSE_STATE) || '{"moduleIndex":0,"itemIndex":0}');
      let selector = `[data-mi='${stored.moduleIndex}'][data-ii='${stored.itemIndex}']`;
      let targetRow = document.querySelector(selector);
      if (!targetRow || targetRow.dataset.type === 'quiz') {
        selector = firstAvailableSelector;
        targetRow = selector ? document.querySelector(selector) : host.querySelector('.item-row');
      }
      if (!targetRow) return;
      targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (targetRow.dataset.type === 'quiz') {
        targetRow.click();
      } else {
        toggleItem(targetRow);
      }
    });
  }

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

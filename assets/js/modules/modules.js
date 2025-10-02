import { $, $$, COURSE_STATE, COURSE_PROGRESS } from './common.js';

const YT_EMBED = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&playsinline=1';

const modulesData = [
  { title: 'Introduction to Tailoring', minutes: 65, items: [
    { type: 'video', title: 'Welcome & safety', mins: 6 },
    { type: 'video', title: 'Understanding your machine', mins: 12 },
    { type: 'quiz', title: 'Checkpoint Quiz 1', mins: 5, quizId: 'q1' },
    { type: 'video', title: 'Threads & needles', mins: 10 },
    { type: 'reading', title: 'Finding fabric locally', mins: 6 },
    { type: 'video', title: 'Your first stitch', mins: 10 },
    { type: 'video', title: 'Care & maintenance', mins: 16 },
  ] },
  { title: 'Business Basics', minutes: 35, items: [
    { type: 'video', title: 'Pricing a blouse', mins: 12 },
    { type: 'quiz', title: 'Checkpoint Quiz 2', mins: 5, quizId: 'q2' },
    { type: 'video', title: 'Managing orders', mins: 8 },
    { type: 'reading', title: 'Keeping a cashbook', mins: 10 },
  ] },
];

const quizBanks = {
  q1: [
    { q: 'Best way to record daily cash?', opts: ['Memory', 'Cashbook', 'Bank passbook'], ans: 1 },
    { q: 'What goes into blouse price?', opts: ['Thread only', 'Fabric only', 'All materials & time'], ans: 2 },
    { q: 'Service the machine?', opts: ['Never', 'When broken', 'Regularly as per manual'], ans: 2 },
  ],
  q2: [
    { q: 'Why keep a cashbook?', opts: ['Decoration', 'Track income & expense', 'Only to show bank'], ans: 1 },
    { q: 'Working capital example?', opts: ['Daily cash for orders', 'Buying a shop', 'Buying land'], ans: 0 },
    { q: 'If income ₹15k, safe EMI share ~', opts: ['10%', '35%', '80%'], ans: 1 },
  ],
};

const closeAllDetails = () => {
  $$('.item-details.open').forEach((details) => {
    details.classList.remove('open');
    const iframe = details.querySelector('iframe');
    if (iframe) {
      iframe.src = 'about:blank';
      iframe.remove();
    }
  });
};

const toggleItem = (row) => {
  const details = row.nextElementSibling;
  if (!details) return;
  if (details.classList.contains('open')) {
    details.classList.remove('open');
    const iframe = details.querySelector('iframe');
    if (iframe) {
      iframe.src = 'about:blank';
      iframe.remove();
    }
    return;
  }
  closeAllDetails();
  details.classList.add('open');
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
  } else if (kind === 'quiz') {
    const quizId = row.dataset.quizid;
    const qs = quizBanks[quizId] || [];
    const form = document.createElement('div');
    form.innerHTML = qs.map((question, qi) => `
      <div class='card' style='margin:8px 0'>
        <div style='font-weight:700;margin-bottom:6px'>${qi + 1}. ${question.q}</div>
        ${question.opts.map((opt, oi) => `<label style="display:flex;gap:8px;align-items:center;margin:4px 0"><input type="radio" name="${quizId}_q${qi}" value="${oi}"/> <span>${opt}</span></label>`).join('')}
      </div>
    `).join('');
    const submit = document.createElement('button');
    submit.className = 'btn primary';
    submit.textContent = 'Submit quiz';
    const result = document.createElement('span');
    result.className = 'muted';
    result.style.marginLeft = '8px';
    holder.appendChild(form);
    holder.appendChild(submit);
    holder.appendChild(result);
    submit.addEventListener('click', () => {
      let score = 0;
      qs.forEach((question, qi) => {
        const sel = holder.querySelector(`input[name='${quizId}_q${qi}']:checked`);
        if (sel && Number(sel.value) === question.ans) score++;
      });
      result.innerHTML = score === qs.length
        ? `<span class='ok'>Perfect! ${score}/${qs.length}</span>`
        : `<span class='err'>Score: ${score}/${qs.length}</span>`;
      localStorage.setItem(`sam_quiz_${quizId}`, String(score));
    });
  } else {
    holder.innerHTML = '<div class="muted">Reading: short tips and checklists (placeholder).</div>';
  }
  details.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        <div>
          <button class="collapse-btn" data-i="${moduleIndex}" aria-expanded="true" aria-controls="items-${moduleIndex}">▾</button>
          <span class="sec-title">${moduleIndex + 1}. ${module.title}</span>
        </div>
        <span class="muted">${module.minutes}m</span>
      </div>
      <div class="items" id="items-${moduleIndex}"></div>
    `;
    host.appendChild(section);
    const itemsContainer = section.querySelector('.items');
    module.items.forEach((item, itemIndex) => {
      const row = document.createElement('div');
      row.className = 'item-row';
      row.dataset.type = item.type;
      row.dataset.mi = String(moduleIndex);
      row.dataset.ii = String(itemIndex);
      if (item.quizId) row.dataset.quizid = item.quizId;
      row.innerHTML = `
        <div class="left">
          <button class="play-btn ghost-icon" title="Open">${item.type === 'video' ? '▶' : (item.type === 'quiz' ? '📝' : '📄')}</button>
          <div class="it-title">${item.title}</div>
        </div>
        <div class="right">
          <span class="muted">${item.mins}m</span>
        </div>
      `;
      const details = document.createElement('div');
      details.className = 'item-details';
      details.innerHTML = '<div class="holder"></div>';
      itemsContainer.appendChild(row);
      itemsContainer.appendChild(details);

      row.addEventListener('click', (event) => {
        if (event.target.closest('.ghost-icon') && !event.target.classList.contains('play-btn')) return;
        toggleItem(row);
      });

      if (moduleIndex < state.moduleIndex || (moduleIndex === state.moduleIndex && itemIndex < state.itemIndex)) {
        doneCount++;
      }
    });
  });

  const totalEl = $('#totalLen');
  if (totalEl) totalEl.textContent = `${totalMinutes}m`;

  $$('.collapse-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const index = event.currentTarget.getAttribute('data-i');
      const box = document.querySelector(`#items-${index}`);
      if (!box) return;
      const hidden = box.classList.toggle('hidden');
      event.currentTarget.textContent = hidden ? '▸' : '▾';
      event.currentTarget.setAttribute('aria-expanded', String(!hidden));
      if (hidden) closeAllDetails();
    });
  });

  const totalItems = modulesData.reduce((acc, module) => acc + module.items.length, 0);
  const pct = Math.min(1, doneCount / totalItems);
  localStorage.setItem(COURSE_PROGRESS, String(pct));

  if (state) {
    const targetRow = document.querySelector(`[data-mi='${state.moduleIndex}'][data-ii='${state.itemIndex}']`);
    if (targetRow) toggleItem(targetRow);
  }
};

export const initModules = () => {
  if (!$('#page-modules')) return;
  renderModules();
};

const modulesData = [
  {
    id: 'module-1',
    title: 'Foundations of Green Finance',
    summary: 'Understand the fundamentals and align on why it matters.',
    meta: '3 items • 26 min',
    lessons: [
      {
        id: 'lesson-intro',
        type: 'video',
        title: 'Welcome to Samriddhi',
        durationLabel: 'Video • 08:20',
        durationSeconds: 500,
        description:
          'Get oriented to the Samriddhi experience and see how this pathway will elevate your green finance capability.',
        transcript:
          'Welcome to Samriddhi. In this orientation we share how climate-first finance is reshaping client expectations, the structure of this program, and the tools you will use to measure progress.',
        moduleTitle: 'Module 1',
        video: {
          src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          download: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          captions: 'assets/captions/lesson-intro.vtt'
        }
      },
      {
        id: 'quiz-orientation',
        type: 'quiz',
        title: 'Orientation pulse check',
        durationLabel: 'Quiz • 3 questions',
        description:
          'Validate your understanding of the program structure and commitments before you dive deeper.',
        moduleTitle: 'Module 1',
        quiz: {
          id: 'quiz-orientation',
          questions: [
            {
              id: 'q1',
              prompt: 'What is the primary objective of the Green Finance Foundations course?',
              options: [
                'To memorise regulatory policies verbatim',
                'To build practical, climate-ready banking capabilities',
                'To replace traditional investment products entirely'
              ],
              answerIndex: 1,
              explanation:
                'The program equips you with applied skills to lead climate-ready banking conversations and offerings.'
            },
            {
              id: 'q2',
              prompt: 'How is your progress through the program tracked?',
              options: ['Only by quizzes', 'By lesson completion, quizzes, and saved notes', 'Progress is not tracked'],
              answerIndex: 1,
              explanation:
                'Progress reflects completed videos, quizzes, and the personal notes you retain for each lesson.'
            },
            {
              id: 'q3',
              prompt: 'When should you capture personal notes?',
              options: [
                'Only after finishing the entire course',
                'Whenever an insight or client idea appears during a lesson',
                'Notes are optional and not supported'
              ],
              answerIndex: 1,
              explanation: 'Use notes in the moment to cement ideas and plan action with your teams.'
            }
          ]
        }
      },
      {
        id: 'lesson-strategy',
        type: 'video',
        title: 'Framing the green finance landscape',
        durationLabel: 'Video • 09:10',
        durationSeconds: 550,
        description:
          'Explore how regulatory momentum and client demand create opportunity for sustainable finance innovation.',
        transcript:
          'We map the global policy shifts, capital allocation trends, and client expectations influencing sustainable finance strategies. Use this lens to position your bank ahead of change.',
        moduleTitle: 'Module 1',
        video: {
          src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          download: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          captions: 'assets/captions/lesson-strategy.vtt'
        }
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Designing transition-ready portfolios',
    summary: 'Apply frameworks and client plays that deliver measurable impact.',
    meta: '3 items • 24 min',
    lessons: [
      {
        id: 'lesson-portfolio',
        type: 'video',
        title: 'Assessing portfolio emissions exposure',
        durationLabel: 'Video • 07:45',
        durationSeconds: 465,
        description:
          'Learn how to evaluate financed emissions and surface client risks and opportunities with confidence.',
        transcript:
          'In this lesson we break down portfolio emissions baselines, prioritise sectors for transition, and identify key client conversations to pursue.',
        moduleTitle: 'Module 2',
        video: {
          src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          download: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          captions: 'assets/captions/lesson-portfolio.vtt'
        }
      },
      {
        id: 'quiz-transition',
        type: 'quiz',
        title: 'Scenario planning knowledge check',
        durationLabel: 'Quiz • 3 questions',
        description: 'Check your understanding of transition planning and coaching moments.',
        moduleTitle: 'Module 2',
        quiz: {
          id: 'quiz-transition',
          questions: [
            {
              id: 'q1',
              prompt: 'Which metric best captures financed emissions trends over time?',
              options: ['Portfolio loan growth', 'Emissions intensity per financed rupee', 'Branch network expansion'],
              answerIndex: 1,
              explanation:
                'Emissions intensity helps you track if portfolio carbon impact improves relative to lending volume.'
            },
            {
              id: 'q2',
              prompt: 'When a client resists change due to perceived cost, what should you do first?',
              options: [
                'Escalate immediately to leadership',
                'Use scenario analysis to model financial and climate outcomes',
                'Pause the relationship until regulations mandate action'
              ],
              answerIndex: 1,
              explanation:
                'Scenario modelling builds confidence by pairing risk mitigation with commercial upside.'
            },
            {
              id: 'q3',
              prompt: 'How can you bring your coach into the process?',
              options: [
                'Share progress and blockers through the in-app notes feature',
                'Wait until the end of the program to request feedback',
                'Coaches are optional and not integrated'
              ],
              answerIndex: 0,
              explanation:
                'Regularly summarise wins and gaps via notes so your coach can guide next steps quickly.'
            }
          ]
        }
      },
      {
        id: 'lesson-impact',
        type: 'video',
        title: 'Tracking climate impact with clients',
        durationLabel: 'Video • 08:10',
        durationSeconds: 490,
        description:
          'Translate transition plans into measurable scorecards that motivate clients and teams.',
        transcript:
          'We explore how to design simple scorecards, align stakeholders, and report progress that earns trust and unlocks new business.',
        moduleTitle: 'Module 2',
        video: {
          src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          download: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          captions: 'assets/captions/lesson-impact.vtt'
        }
      }
    ]
  }
];

const elements = {
  lessonContainer: document.querySelector('[data-module-container]'),
  lessonList: document.getElementById('lessonList'),
  collapseAll: document.querySelector('[data-collapse-all]'),
  search: document.getElementById('lessonSearch'),
  headerProgressContainer: document.querySelector('.course-header .progress'),
  headerProgressBar: document.querySelector('.course-header .progress__bar'),
  headerProgressText: document.querySelector('.course-header__progress-label'),
  progressCount: document.querySelector('[data-progress-count]'),
  progressTotal: document.querySelector('[data-progress-total]'),
  playerCard: document.querySelector('[data-player-card]'),
  mediaWrapper: document.querySelector('[data-media-wrapper]'),
  player: document.getElementById('lessonPlayer'),
  playerSource: document.querySelector('#lessonPlayer source'),
  captionTrack: document.getElementById('captionTrack'),
  fallback: document.querySelector('.player-card__fallback'),
  retryButton: document.querySelector('[data-retry]'),
  downloadLink: document.querySelector('[data-download]'),
  typeChip: document.querySelector('[data-lesson-type-chip]'),
  durationChip: document.querySelector('[data-lesson-duration]'),
  title: document.querySelector('[data-lesson-title]'),
  description: document.querySelector('[data-lesson-description]'),
  markComplete: document.querySelector('[data-mark-complete]'),
  watchLater: document.querySelector('[data-watch-later]'),
  transcriptToggle: document.querySelector('[data-toggle-transcript]'),
  transcriptClose: document.querySelector('[data-close-transcript]'),
  transcriptPanel: document.querySelector('[data-transcript]'),
  transcriptBody: document.querySelector('[data-transcript-content]'),
  captionsToggle: document.querySelector('[data-toggle-captions]'),
  upNextCard: document.querySelector('[data-up-next]'),
  upNextMeta: document.querySelector('[data-up-next-meta]'),
  suggestNext: document.querySelector('[data-suggest-next]'),
  quizPanel: document.querySelector('[data-quiz-panel]'),
  notesForm: document.querySelector('[data-notes-form]'),
  noteTextarea: document.getElementById('noteText'),
  addTimecode: document.querySelector('[data-add-timecode]'),
  notesList: document.querySelector('[data-notes-list]'),
  notesCount: document.querySelector('[data-notes-count]'),
  notesStatus: document.querySelector('[data-notes-status]'),
  actionComplete: document.querySelector('[data-action-complete]'),
  actionWatchLater: document.querySelector('[data-action-watchlater]'),
  actionNext: document.querySelector('[data-action-next]'),
  downloadGuide: document.querySelector('[data-download-guide]'),
  downloadTranscript: document.querySelector('[data-download-transcript]'),
  mobileBar: document.querySelector('[data-mobile-progress]'),
  mobileLabel: document.querySelector('[data-mobile-progress-label]'),
  mobileDetail: document.querySelector('[data-mobile-progress-detail]'),
  mobilePrimary: document.querySelector('[data-mobile-primary]'),
  mobileList: document.querySelector('[data-mobile-open-list]'),
  menuToggle: document.querySelector('.course-header__menu'),
  lessonOverlay: document.querySelector('[data-lesson-overlay]'),
  ariaUpdates: document.querySelector('[data-aria-updates]'),
  toastStack: document.querySelector('[data-toast-stack]')
};

const totalItems = modulesData.reduce((count, module) => count + module.lessons.length, 0);
const typeTokens = {
  video: { label: 'Video', icon: '▶' },
  quiz: { label: 'Quiz', icon: '❓' }
};

let currentLessonId = null;
let pendingResumeTime = null;
let lastSavedTime = 0;
let noteStatusTimeout = null;

const STORAGE_PREFIX = 'samriddhi.';
const state = loadState();
const lessonMap = new Map();
const orderedLessonIds = [];
const moduleProgressMap = new Map();
let focusedLessonId = null;

function storageKey(segment) {
  return `${STORAGE_PREFIX}${segment}`;
}

function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function loadState() {
  return {
    lastLessonId: localStorage.getItem(storageKey('lastLessonId')),
    watchLater: readJSON(storageKey('watchLater'), []),
    completedQuizzes: readJSON(storageKey('completedQuizzes'), [])
  };
}

function saveState(key, value) {
  try {
    localStorage.setItem(storageKey(key), JSON.stringify(value));
  } catch (error) {
    console.error('Unable to save state', error);
  }
}

function setPrimitive(key, value) {
  try {
    localStorage.setItem(storageKey(key), String(value));
  } catch (error) {
    console.error('Unable to save primitive', error);
  }
}

function getPlayback(lessonId) {
  const raw = localStorage.getItem(storageKey(`playback.${lessonId}`));
  return raw ? Number(raw) : 0;
}

function savePlayback(lessonId, seconds) {
  try {
    localStorage.setItem(storageKey(`playback.${lessonId}`), String(seconds));
  } catch (error) {
    console.error('Unable to persist playback', error);
  }
}

function toggleComplete(lessonId) {
  const key = storageKey(`completed.${lessonId}`);
  const current = localStorage.getItem(key) === 'true';
  localStorage.setItem(key, String(!current));
  return !current;
}

function setComplete(lessonId, value) {
  localStorage.setItem(storageKey(`completed.${lessonId}`), String(value));
  return value;
}

function isLessonComplete(lessonId) {
  return localStorage.getItem(storageKey(`completed.${lessonId}`)) === 'true';
}

function toggleWatchLater(lessonId) {
  const current = new Set(state.watchLater);
  if (current.has(lessonId)) {
    current.delete(lessonId);
  } else {
    current.add(lessonId);
  }
  state.watchLater = Array.from(current);
  saveState('watchLater', state.watchLater);
  return state.watchLater.includes(lessonId);
}

function saveNote(lessonId, note) {
  const keySegment = `notes.${lessonId}`;
  const notes = readJSON(storageKey(keySegment), []);
  notes.push(note);
  saveState(keySegment, notes);
  return notes;
}

function getNotes(lessonId) {
  return readJSON(storageKey(`notes.${lessonId}`), []);
}

function markQuizComplete(quizId) {
  if (!state.completedQuizzes.includes(quizId)) {
    state.completedQuizzes.push(quizId);
    saveState('completedQuizzes', state.completedQuizzes);
  }
}

function isQuizComplete(quizId) {
  return state.completedQuizzes.includes(quizId);
}

function saveQuizAnswers(quizId, answers) {
  saveState(`answers.${quizId}`, answers);
}

function getQuizAnswers(quizId) {
  return readJSON(storageKey(`answers.${quizId}`), []);
}

function getProgress() {
  let completed = 0;
  const moduleStats = new Map();
  modulesData.forEach((module) => {
    let moduleCompleted = 0;
    module.lessons.forEach((lesson) => {
      let done = false;
      if (lesson.type === 'video' && isLessonComplete(lesson.id)) {
        done = true;
      }
      if (lesson.type === 'quiz' && isQuizComplete(lesson.quiz.id)) {
        done = true;
      }
      if (done) {
        moduleCompleted += 1;
        completed += 1;
      }
    });
    moduleStats.set(module.id, {
      completed: moduleCompleted,
      total: module.lessons.length,
      percent: module.lessons.length
        ? Math.round((moduleCompleted / module.lessons.length) * 100)
        : 0
    });
  });
  const percent = totalItems === 0 ? 0 : Math.round((completed / totalItems) * 100);
  return { completed, total: totalItems, percent, modules: moduleStats };
}

function mmss(seconds) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
}

function parseTimecode(value) {
  const [mins, secs] = value.split(':').map(Number);
  if (Number.isNaN(mins) || Number.isNaN(secs)) return 0;
  return mins * 60 + secs;
}

function renderModules() {
  elements.progressTotal.textContent = totalItems;
  modulesData.forEach((module, moduleIndex) => {
    const moduleBlock = document.createElement('section');
    moduleBlock.className = 'module-block';
    moduleBlock.setAttribute('aria-expanded', 'true');
    moduleBlock.dataset.moduleId = module.id;

    const trigger = document.createElement('button');
    trigger.className = 'module-block__trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-controls', `${module.id}-list`);
    trigger.setAttribute('aria-expanded', 'true');

    const label = document.createElement('div');
    label.className = 'module-block__label';
    const title = document.createElement('h3');
    title.textContent = module.title;
    const meta = document.createElement('span');
    meta.className = 'module-block__meta';
    meta.textContent = module.meta || `${module.lessons.length} items`;
    const progressRow = document.createElement('div');
    progressRow.className = 'module-block__progress';
    const progressText = document.createElement('span');
    progressText.textContent = `0 / ${module.lessons.length} complete`;
    const progressBar = document.createElement('div');
    progressBar.className = 'module-block__progress-bar';
    const progressFill = document.createElement('span');
    progressBar.append(progressFill);
    progressRow.append(progressText, progressBar);
    moduleProgressMap.set(module.id, { text: progressText, fill: progressFill });
    label.append(title, meta, progressRow);

    const chevron = document.createElement('span');
    chevron.className = 'module-block__chevron';
    chevron.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5l6 5-6 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

    trigger.append(label, chevron);
    moduleBlock.append(trigger);

    const list = document.createElement('ul');
    list.id = `${module.id}-list`;
    list.setAttribute('role', 'presentation');

    module.lessons.forEach((lesson, lessonIndex) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.className = 'lesson-item';
      button.type = 'button';
      button.dataset.lessonId = lesson.id;
      button.dataset.lessonType = lesson.type;
      button.dataset.moduleId = module.id;
      button.dataset.moduleTitle = module.title;
      button.dataset.lessonTitle = lesson.title;
      button.dataset.lessonMeta = lesson.durationLabel || '';
      button.dataset.index = `${moduleIndex}-${lessonIndex}`;
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', 'false');
      button.tabIndex = -1;

      const content = document.createElement('div');
      content.className = 'lesson-item__content';

      const typeIcon = document.createElement('span');
      typeIcon.className = 'lesson-item__type';
      typeIcon.setAttribute('aria-hidden', 'true');
      typeIcon.textContent = typeTokens[lesson.type]?.icon || '•';

      const info = document.createElement('div');
      info.className = 'lesson-item__info';
      const strong = document.createElement('strong');
      strong.textContent = lesson.title;
      const metaLine = document.createElement('span');
      metaLine.textContent = lesson.durationLabel || '';
      info.append(strong, metaLine);

      content.append(typeIcon, info);

      const badges = document.createElement('div');
      badges.className = 'lesson-item__badges';
      const typeChip = document.createElement('span');
      typeChip.className = `chip chip--${lesson.type}`;
      typeChip.textContent = `${typeTokens[lesson.type].icon} ${typeTokens[lesson.type].label}`;
      const statusComplete = document.createElement('span');
      statusComplete.className = 'lesson-item__status';
      statusComplete.hidden = true;
      statusComplete.dataset.state = 'complete';
      statusComplete.textContent = '✔';
      statusComplete.setAttribute('role', 'img');
      statusComplete.setAttribute('aria-label', 'Completed');
      const statusLater = document.createElement('span');
      statusLater.className = 'lesson-item__status';
      statusLater.hidden = true;
      statusLater.dataset.state = 'later';
      statusLater.textContent = '⏱';
      statusLater.setAttribute('role', 'img');
      statusLater.setAttribute('aria-label', 'Saved for later');
      badges.append(typeChip, statusComplete, statusLater);

      button.append(content, badges);
      item.append(button);
      list.append(item);

      lessonMap.set(lesson.id, {
        lesson,
        button,
        moduleBlock,
        module,
        statusComplete,
        statusLater,
        typeIcon
      });
      orderedLessonIds.push(lesson.id);

      button.addEventListener('click', () => selectLesson(lesson.id, { focus: false, announce: true }));
      button.addEventListener('keydown', handleLessonKeydown);
      button.addEventListener('focus', () => {
        focusedLessonId = lesson.id;
      });
    });

    moduleBlock.append(list);
    elements.lessonContainer.append(moduleBlock);

    trigger.addEventListener('click', () => {
      const expanded = moduleBlock.getAttribute('aria-expanded') === 'true';
      moduleBlock.setAttribute('aria-expanded', String(!expanded));
      trigger.setAttribute('aria-expanded', String(!expanded));
      list.hidden = expanded;
    });
  });

  // set initial focusable item
  const firstButton = elements.lessonContainer.querySelector('.lesson-item');
  if (firstButton) {
    firstButton.tabIndex = 0;
  }
}

function refreshAllLessonBadges() {
  lessonMap.forEach((value) => {
    updateLessonBadges(value.lesson.id);
  });
}

function selectLesson(lessonId, options = {}) {
  const entry = lessonMap.get(lessonId);
  if (!entry) return;

  const { lesson, button, module } = entry;
  currentLessonId = lessonId;
  focusedLessonId = lessonId;
  updateActiveLesson(button, options.focus !== false);
  ensureLessonVisible(button);
  setPrimitive('lastLessonId', lessonId);
  if (options.announce) {
    announce(`${lesson.title} from ${module.title}`);
  }

  if (lesson.type === 'video') {
    renderVideoLesson(lesson, options.scroll !== false);
  } else if (lesson.type === 'quiz') {
    renderQuizLesson(lesson);
  }

  loadNotesForLesson(lessonId);
  updateActionButtons();
  updateLessonBadges(lessonId);
  updateProgressUI();
  updateMobileBar();
  hideUpNextCard();

  if (isMobileViewport()) {
    closeLessonList();
  }
}

function updateActiveLesson(activeButton, shouldFocus = true) {
  elements.lessonContainer.querySelectorAll('.lesson-item').forEach((button) => {
    const isActive = button === activeButton;
    button.setAttribute('aria-current', isActive ? 'true' : 'false');
    button.setAttribute('aria-selected', String(isActive));
    button.tabIndex = isActive ? 0 : -1;
    if (!isActive) {
      button.classList.remove('focus-ring');
    }
  });
  if (shouldFocus) {
    activeButton.focus();
  }
}

function ensureLessonVisible(button) {
  const container = elements.lessonList;
  if (!container) return;
  const { top, bottom } = button.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  if (top < containerRect.top || bottom > containerRect.bottom) {
    button.scrollIntoView({ block: 'nearest' });
  }
}

function isMobileViewport() {
  return window.matchMedia('(max-width: 1024px)').matches;
}

function openLessonList() {
  elements.lessonList.dataset.open = 'true';
  elements.menuToggle?.setAttribute('aria-expanded', 'true');
  elements.lessonOverlay?.removeAttribute('hidden');
  document.body.classList.add('body--locked');
}

function closeLessonList() {
  elements.lessonList.dataset.open = 'false';
  elements.menuToggle?.setAttribute('aria-expanded', 'false');
  elements.lessonOverlay?.setAttribute('hidden', '');
  document.body.classList.remove('body--locked');
}

function showUpNextCard(nextLessonId) {
  const entry = nextLessonId ? lessonMap.get(nextLessonId) : null;
  if (!entry) {
    hideUpNextCard();
    return;
  }
  const { lesson } = entry;
  const detail = lesson.durationLabel || typeTokens[lesson.type]?.label || '';
  elements.upNextMeta.textContent = detail ? `${lesson.title} • ${detail}` : lesson.title;
  elements.suggestNext.dataset.nextLesson = nextLessonId;
  elements.upNextCard.hidden = false;
}

function hideUpNextCard() {
  elements.upNextCard.hidden = true;
  elements.suggestNext.removeAttribute('data-next-lesson');
}

function showToast(message) {
  if (!elements.toastStack) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  elements.toastStack.append(toast);
  const dismiss = () => {
    toast.style.animation = 'toast-in .25s ease reverse';
    const removeTimer = setTimeout(() => toast.remove(), 250);
    toast.addEventListener(
      'animationend',
      () => {
        clearTimeout(removeTimer);
        toast.remove();
      },
      { once: true }
    );
  };
  setTimeout(dismiss, 2200);
}

function getVisibleLessonButtons() {
  return Array.from(elements.lessonContainer.querySelectorAll('.lesson-item')).filter((button) => {
    const listItem = button.closest('li');
    const moduleBlock = button.closest('.module-block');
    return !(listItem?.hidden || moduleBlock?.hidden);
  });
}

function handleLessonKeydown(event) {
  const button = event.currentTarget;
  const lessonId = button.dataset.lessonId;
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    const visibleButtons = getVisibleLessonButtons();
    const currentIndex = visibleButtons.indexOf(button);
    if (currentIndex === -1) return;
    const lastIndex = visibleButtons.length - 1;
    const nextIndex =
      event.key === 'ArrowDown'
        ? currentIndex === lastIndex
          ? 0
          : currentIndex + 1
        : currentIndex === 0
        ? lastIndex
        : currentIndex - 1;
    const nextButton = visibleButtons[nextIndex];
    if (nextButton) {
      nextButton.focus();
      focusedLessonId = nextButton.dataset.lessonId;
    }
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    selectLesson(lessonId, { focus: false, announce: true });
  }
}

function renderVideoLesson(lesson, shouldScroll = true) {
  elements.quizPanel.hidden = true;
  elements.playerCard.hidden = false;
  elements.addTimecode.disabled = false;
  elements.addTimecode.removeAttribute('aria-disabled');
  clearFallback();

  elements.typeChip.textContent = `${typeTokens.video.icon} ${typeTokens.video.label}`;
  elements.typeChip.className = 'chip chip--video';
  elements.durationChip.textContent = lesson.durationLabel || '';
  elements.title.textContent = lesson.title;
  elements.description.textContent = lesson.description;

  elements.player.pause();
  elements.playerSource.src = lesson.video.src;
  elements.player.dataset.lessonId = lesson.id;
  pendingResumeTime = getPlayback(lesson.id);
  lastSavedTime = pendingResumeTime || 0;
  elements.captionTrack.src = lesson.video.captions || '';
  const downloadHref = lesson.video.download || lesson.video.src || '#';
  elements.downloadLink.href = downloadHref;
  elements.downloadLink.setAttribute('download', `${lesson.title}.mp4`);
  elements.downloadTranscript.href = lesson.video.captions || '#';
  elements.downloadTranscript.setAttribute('download', `${lesson.title}.vtt`);
  renderTranscriptContent(lesson.transcript || 'Transcript not available.');
  toggleTranscriptPanel(false);
  elements.captionsToggle.textContent = 'Captions';
  hideUpNextCard();

  elements.player.load();
  elements.player.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });

  if (shouldScroll) {
    document.getElementById('playerArea')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderTranscriptContent(transcript) {
  elements.transcriptBody.innerHTML = '';
  const lines = transcript.split('\n').map((line) => line.trim()).filter(Boolean);
  if (!lines.length) {
    const empty = document.createElement('p');
    empty.className = 'transcript-line';
    empty.textContent = transcript;
    elements.transcriptBody.append(empty);
    return;
  }
  lines.forEach((line) => {
    const paragraph = document.createElement('p');
    paragraph.className = 'transcript-line';
    const regex = /\[(\d{1,2}:\d{2})\]/g;
    let lastIndex = 0;
    let match;
    let hasMatch = false;
    while ((match = regex.exec(line)) !== null) {
      hasMatch = true;
      const before = line.slice(lastIndex, match.index);
      if (before) {
        paragraph.append(document.createTextNode(before));
      }
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = `[${match[1]}]`;
      button.addEventListener('click', () => {
        if (!elements.playerCard.hidden) {
          elements.player.currentTime = parseTimecode(match[1]);
          elements.player.focus();
        }
      });
      paragraph.append(button);
      lastIndex = regex.lastIndex;
    }
    const remaining = line.slice(lastIndex);
    if (remaining) {
      paragraph.append(document.createTextNode(remaining));
    }
    if (!hasMatch) {
      paragraph.textContent = line;
    }
    elements.transcriptBody.append(paragraph);
  });
}

function toggleTranscriptPanel(force) {
  const isOpen = elements.transcriptPanel.classList.contains('is-open');
  const shouldOpen = typeof force === 'boolean' ? force : !isOpen;
  if (shouldOpen) {
    elements.transcriptPanel.classList.add('is-open');
    elements.transcriptPanel.setAttribute('aria-hidden', 'false');
    elements.transcriptToggle.textContent = 'Hide transcript';
    elements.transcriptToggle.setAttribute('aria-expanded', 'true');
  } else {
    elements.transcriptPanel.classList.remove('is-open');
    elements.transcriptPanel.setAttribute('aria-hidden', 'true');
    elements.transcriptToggle.textContent = 'Show transcript';
    elements.transcriptToggle.setAttribute('aria-expanded', 'false');
  }
}

function renderQuizLesson(lesson) {
  elements.player.pause();
  elements.playerCard.hidden = true;
  elements.quizPanel.hidden = false;
  elements.addTimecode.disabled = true;
  elements.addTimecode.setAttribute('aria-disabled', 'true');
  elements.typeChip.textContent = `${typeTokens.quiz.icon} ${typeTokens.quiz.label}`;
  elements.typeChip.className = 'chip chip--quiz';
  elements.durationChip.textContent = lesson.durationLabel || '';
  elements.title.textContent = lesson.title;
  elements.description.textContent = lesson.description;
  elements.downloadLink.href = '#';
  elements.downloadLink.removeAttribute('download');
  elements.downloadTranscript.href = '#';
  elements.downloadTranscript.removeAttribute('download');
  toggleTranscriptPanel(false);
  hideUpNextCard();

  const quizId = lesson.quiz.id;
  const savedAnswers = getQuizAnswers(quizId);
  const isComplete = isQuizComplete(quizId);
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  heading.textContent = lesson.title;
  const intro = document.createElement('p');
  intro.textContent = lesson.description;
  container.append(heading, intro);

  const form = document.createElement('form');
  form.className = 'quiz-form';
  form.dataset.quizId = quizId;
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'btn';
  submitButton.textContent = 'Check answers';
  submitButton.disabled = true;

  lesson.quiz.questions.forEach((question, index) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'quiz-question';
    fieldset.dataset.questionId = question.id;

    const legend = document.createElement('legend');
    legend.textContent = `${index + 1}. ${question.prompt}`;
    fieldset.append(legend);

    const optionsList = document.createElement('div');
    optionsList.className = 'quiz-options';

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = question.id;
      input.value = optionIndex;
      input.required = true;
      if (savedAnswers[index] === optionIndex) {
        input.checked = true;
      }
      if (isComplete) {
        input.disabled = true;
      }
      label.append(input, document.createTextNode(option));
      optionsList.append(label);

      input.addEventListener('change', () => {
        updateSubmitState(form, submitButton, lesson.quiz.questions.length);
      });
    });

    const feedback = document.createElement('p');
    feedback.className = 'quiz-feedback';
    feedback.hidden = true;
    fieldset.append(optionsList, feedback);
    form.append(fieldset);
  });

  const actions = document.createElement('div');
  actions.className = 'quiz-actions';
  actions.append(submitButton);

  const completeButton = document.createElement('button');
  completeButton.type = 'button';
  completeButton.className = 'btn btn--ghost';
  completeButton.textContent = isComplete ? 'Quiz completed' : 'Mark quiz complete';
  completeButton.disabled = !isComplete;
  completeButton.setAttribute('aria-disabled', String(completeButton.disabled));
  actions.append(completeButton);

  const initialAnswersFilled = savedAnswers.length === lesson.quiz.questions.length;
  if (initialAnswersFilled) {
    const results = gradeQuiz(savedAnswers, lesson.quiz.questions);
    revealQuizFeedback(form, lesson.quiz.questions, savedAnswers, results, { lock: true });
    submitButton.disabled = isComplete;
    if (!isComplete) {
      completeButton.disabled = false;
      completeButton.removeAttribute('aria-disabled');
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answers = collectQuizAnswers(form, lesson.quiz.questions);
    if (answers.includes(-1)) return;
    saveQuizAnswers(quizId, answers);
    const results = gradeQuiz(answers, lesson.quiz.questions);
    revealQuizFeedback(form, lesson.quiz.questions, answers, results, { lock: true });
    submitButton.disabled = true;
    completeButton.disabled = false;
    completeButton.removeAttribute('aria-disabled');
    announce('Quiz checked. Review feedback before marking complete.');
  });

  completeButton.addEventListener('click', () => {
    markQuizComplete(quizId);
    updateLessonBadges(lesson.id);
    updateProgressUI();
    updateMobileBar();
    updateActionButtons();
    completeButton.textContent = 'Quiz completed';
    completeButton.disabled = true;
    completeButton.setAttribute('aria-disabled', 'true');
    showToast('Quiz completed');
    announce('Quiz completed. Moving to the next item.');
    const next = getNextItem(lesson.id);
    if (next) {
      selectLesson(next.id, { focus: true, announce: true });
    }
  });

  container.append(form, actions);
  elements.quizPanel.replaceChildren(container);
  updateSubmitState(form, submitButton, lesson.quiz.questions.length);
  document.getElementById('playerArea')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateSubmitState(form, submitButton, questionCount) {
  const answered = Array.from(form.querySelectorAll('fieldset')).filter((fieldset) =>
    fieldset.querySelector('input:checked')
  ).length;
  submitButton.disabled = answered !== questionCount;
}

function collectQuizAnswers(form, questions) {
  return questions.map((question) => {
    const selected = form.querySelector(`input[name="${question.id}"]:checked`);
    return selected ? Number(selected.value) : -1;
  });
}

function gradeQuiz(answers, questions) {
  return questions.map((question, index) => answers[index] === question.answerIndex);
}

function revealQuizFeedback(form, questions, answers, results, options = {}) {
  const lockInputs = options.lock || false;
  questions.forEach((question, index) => {
    const fieldset = form.querySelector(`[data-question-id="${question.id}"]`);
    const selectedValue = answers[index];
    fieldset.querySelectorAll('label').forEach((label, optionIndex) => {
      label.dataset.state = '';
      const input = label.querySelector('input');
      if (input) {
        input.checked = optionIndex === selectedValue;
        if (lockInputs) {
          input.disabled = true;
        }
      }
      if (optionIndex === question.answerIndex) {
        label.dataset.state = 'correct';
      }
      if (optionIndex === selectedValue && optionIndex !== question.answerIndex) {
        label.dataset.state = 'incorrect';
      }
    });
    const feedback = fieldset.querySelector('.quiz-feedback');
    feedback.textContent = results[index] ? 'Great job—this is correct.' : question.explanation;
    feedback.hidden = false;
  });
}

function renderFallback() {
  elements.playerCard.querySelector('.player-card__fallback').hidden = false;
  elements.player.classList.add('hidden');
}

function clearFallback() {
  elements.player.classList.remove('hidden');
  elements.playerCard.querySelector('.player-card__fallback').hidden = true;
}

function handleLoadedMetadata() {
  clearFallback();
  if (typeof pendingResumeTime === 'number' && pendingResumeTime > 0 && pendingResumeTime < elements.player.duration) {
    elements.player.currentTime = pendingResumeTime;
    showToast(`Resumed at ${mmss(pendingResumeTime)}`);
    announce(`Resumed playback at ${mmss(pendingResumeTime)}.`);
  }
  pendingResumeTime = null;
  elements.player.play().catch(() => {
    // Ignore autoplay restrictions
  });
}

function handleTimeUpdate() {
  if (!currentLessonId) return;
  if (!elements.player.duration || Number.isNaN(elements.player.duration)) return;
  if (elements.player.currentTime - lastSavedTime >= 5) {
    savePlayback(currentLessonId, elements.player.currentTime);
    lastSavedTime = elements.player.currentTime;
  }
  const progress = elements.player.currentTime / elements.player.duration;
  if (progress >= 0.95 && !isLessonComplete(currentLessonId)) {
    setComplete(currentLessonId, true);
    updateLessonBadges(currentLessonId);
    updateProgressUI();
    updateMobileBar();
    updateActionButtons();
  }
}

function handleEnded() {
  if (!currentLessonId) return;
  setComplete(currentLessonId, true);
  updateLessonBadges(currentLessonId);
  updateProgressUI();
  updateMobileBar();
  updateActionButtons();
  const next = getNextItem(currentLessonId);
  if (next) {
    showUpNextCard(next.id);
  }
  showToast('Lesson completed');
  announce('Lesson completed. Choose the next item to continue.');
}

function handleVideoError() {
  renderFallback();
  announce('The video could not load. Use retry or download to continue offline.');
}

function updateLessonBadges(lessonId) {
  const entry = lessonMap.get(lessonId);
  if (!entry) return;
  const { lesson, statusComplete, statusLater } = entry;
  const complete =
    (lesson.type === 'video' && isLessonComplete(lesson.id)) ||
    (lesson.type === 'quiz' && isQuizComplete(lesson.quiz.id));
  statusComplete.hidden = !complete;
  if (!complete) {
    statusComplete.removeAttribute('title');
  } else {
    statusComplete.title = 'Completed';
  }

  const later = state.watchLater.includes(lesson.id);
  statusLater.hidden = !later;
  if (!later) {
    statusLater.removeAttribute('title');
  } else {
    statusLater.title = 'In watch later list';
  }
}

function updateActionButtons() {
  const entry = currentLessonId ? lessonMap.get(currentLessonId) : null;
  const lesson = entry?.lesson;
  const lessonType = lesson?.type;
  const videoComplete = lessonType === 'video' && lesson ? isLessonComplete(lesson.id) : false;
  const quizComplete = lessonType === 'quiz' && lesson ? isQuizComplete(lesson.quiz.id) : false;
  const isLater = currentLessonId ? state.watchLater.includes(currentLessonId) : false;
  const nextItem = lesson ? getNextItem(lesson.id) : null;

  if (!lesson) {
    elements.markComplete.disabled = true;
    elements.markComplete.setAttribute('aria-disabled', 'true');
    elements.actionComplete.disabled = true;
    elements.actionComplete.setAttribute('aria-disabled', 'true');
    elements.watchLater.disabled = true;
    elements.watchLater.setAttribute('aria-disabled', 'true');
    elements.actionWatchLater.disabled = true;
    elements.actionWatchLater.setAttribute('aria-disabled', 'true');
    elements.actionNext.disabled = true;
    elements.actionNext.setAttribute('aria-disabled', 'true');
    return;
  }

  if (lessonType === 'quiz') {
    elements.markComplete.textContent = quizComplete ? 'Quiz completed' : 'Complete quiz to progress';
    elements.markComplete.disabled = true;
    elements.markComplete.setAttribute('aria-disabled', 'true');
    elements.markComplete.setAttribute('aria-pressed', String(quizComplete));
    elements.actionComplete.textContent = elements.markComplete.textContent;
    elements.actionComplete.disabled = true;
    elements.actionComplete.setAttribute('aria-disabled', 'true');
  } else {
    elements.markComplete.disabled = false;
    elements.markComplete.removeAttribute('aria-disabled');
    elements.actionComplete.disabled = false;
    elements.actionComplete.removeAttribute('aria-disabled');
    elements.markComplete.textContent = videoComplete ? 'Mark incomplete' : 'Mark complete';
    elements.markComplete.setAttribute('aria-pressed', String(videoComplete));
    elements.actionComplete.textContent = elements.markComplete.textContent;
  }

  elements.watchLater.disabled = false;
  elements.watchLater.removeAttribute('aria-disabled');
  elements.watchLater.textContent = isLater ? 'Remove from watch later' : 'Watch later';
  elements.watchLater.setAttribute('aria-pressed', String(isLater));
  elements.actionWatchLater.disabled = false;
  elements.actionWatchLater.removeAttribute('aria-disabled');
  elements.actionWatchLater.textContent = elements.watchLater.textContent;
  elements.actionWatchLater.setAttribute('aria-pressed', String(isLater));

  if (nextItem) {
    elements.actionNext.disabled = false;
    elements.actionNext.removeAttribute('aria-disabled');
    elements.actionNext.textContent = `Play next: ${nextItem.lesson?.title ?? 'Next item'}`;
    elements.actionNext.dataset.nextLesson = nextItem.id;
  } else {
    elements.actionNext.disabled = true;
    elements.actionNext.setAttribute('aria-disabled', 'true');
    elements.actionNext.textContent = 'No next item';
    elements.actionNext.removeAttribute('data-next-lesson');
  }
}

function updateProgressUI() {
  const { completed, total, percent, modules } = getProgress();
  elements.headerProgressBar.style.width = `${percent}%`;
  elements.headerProgressContainer?.setAttribute('aria-valuenow', String(percent));
  elements.headerProgressContainer?.setAttribute('aria-valuetext', `${percent}% complete`);
  elements.headerProgressText.innerHTML = `<strong>${completed} of ${total}</strong> • ${percent}% complete`;
  elements.progressCount.textContent = completed;
  elements.progressTotal.textContent = total;
  elements.mobileLabel.textContent = `${percent}% complete`;
  elements.mobileDetail.textContent = `${completed} of ${total} items`;

  moduleProgressMap.forEach((refs, moduleId) => {
    const stat = modules.get(moduleId);
    if (!stat) return;
    refs.text.textContent = `${stat.completed} / ${stat.total} complete`;
    const width = stat.total ? Math.round((stat.completed / stat.total) * 100) : 0;
    refs.fill.style.width = `${width}%`;
  });
}

function updateMobileBar() {
  const entry = currentLessonId ? lessonMap.get(currentLessonId) : null;
  const lesson = entry?.lesson;
  const isComplete = lesson
    ? lesson.type === 'video'
      ? isLessonComplete(lesson.id)
      : lesson.type === 'quiz'
        ? isQuizComplete(lesson.quiz.id)
        : false
    : false;
  const nextItem = lesson ? getNextItem(lesson.id) : null;

  if (isComplete && nextItem) {
    elements.mobilePrimary.textContent = `Next: ${nextItem.lesson?.title ?? 'Next item'}`;
    elements.mobilePrimary.dataset.nextLesson = nextItem.id;
  } else if (lesson) {
    elements.mobilePrimary.textContent = `${isComplete ? 'Review' : 'Resume'}: ${lesson.title}`;
    if (isComplete && nextItem) {
      elements.mobilePrimary.dataset.nextLesson = nextItem.id;
    } else {
      elements.mobilePrimary.removeAttribute('data-next-lesson');
    }
  } else {
    elements.mobilePrimary.textContent = 'Resume lesson';
    elements.mobilePrimary.removeAttribute('data-next-lesson');
  }
}

function loadNotesForLesson(lessonId) {
  const notes = getNotes(lessonId);
  renderNotes(notes);
  if (elements.notesStatus) {
    elements.notesStatus.hidden = true;
  }
}

function renderNotes(notes) {
  elements.notesList.innerHTML = '';
  elements.notesCount.textContent = notes.length;
  if (!notes.length) {
    const empty = document.createElement('p');
    empty.className = 'notes-list__empty';
    empty.textContent = 'No notes yet for this lesson.';
    elements.notesList.append(empty);
    return;
  }
  notes.forEach((note) => {
    const card = document.createElement('article');
    card.className = 'note-card';
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = note.time ? `[${note.time}]` : 'View note';
    button.dataset.seek = note.seconds ?? '';
    button.disabled = note.seconds == null || Number.isNaN(note.seconds);
    button.setAttribute('aria-label', note.time ? `Jump to ${note.time}` : 'View note');
    const text = document.createElement('p');
    text.textContent = note.text;
    card.append(button, text);
    elements.notesList.append(card);

    button.addEventListener('click', () => {
      if (note.seconds != null && !Number.isNaN(note.seconds)) {
        elements.player.currentTime = note.seconds;
        elements.player.focus();
      }
    });
  });
}

function addNote(event) {
  event.preventDefault();
  if (!currentLessonId) return;
  const text = elements.noteTextarea.value.trim();
  if (!text) return;
  const seconds = elements.playerCard.hidden ? null : elements.player.currentTime;
  const note = {
    time: seconds != null ? mmss(seconds) : '',
    seconds,
    text
  };
  const notes = saveNote(currentLessonId, note);
  elements.noteTextarea.value = '';
  renderNotes(notes);
  if (elements.notesStatus) {
    elements.notesStatus.hidden = false;
    elements.notesStatus.textContent = 'Saved';
    clearTimeout(noteStatusTimeout);
    noteStatusTimeout = setTimeout(() => {
      elements.notesStatus.hidden = true;
    }, 1000);
  }
  showToast('Note saved');
  announce('Note saved');
}

function insertTimecode() {
  if (!currentLessonId || elements.playerCard.hidden) return;
  const timecode = mmss(elements.player.currentTime);
  elements.noteTextarea.value = `[${timecode}] ${elements.noteTextarea.value}`.trim();
  elements.noteTextarea.focus();
}

function getNextItem(lessonId) {
  if (!orderedLessonIds.length) return null;
  const index = lessonId ? orderedLessonIds.indexOf(lessonId) : -1;
  const nextIndex = index >= 0 && index < orderedLessonIds.length - 1 ? index + 1 : index === -1 ? 0 : null;
  if (nextIndex == null) return null;
  const nextId = orderedLessonIds[nextIndex];
  return { id: nextId, lesson: lessonMap.get(nextId)?.lesson || null };
}

function getPreviousItem(lessonId) {
  if (!orderedLessonIds.length) return null;
  const index = lessonId ? orderedLessonIds.indexOf(lessonId) : 0;
  const prevIndex = index > 0 ? index - 1 : null;
  if (prevIndex == null) return null;
  const prevId = orderedLessonIds[prevIndex];
  return { id: prevId, lesson: lessonMap.get(prevId)?.lesson || null };
}

function getNextLessonId(lessonId) {
  const next = getNextItem(lessonId);
  return next ? next.id : null;
}

function getPreviousLessonId(lessonId) {
  const prev = getPreviousItem(lessonId);
  return prev ? prev.id : null;
}

function announce(message) {
  if (elements.ariaUpdates) {
    elements.ariaUpdates.textContent = '';
    window.requestAnimationFrame(() => {
      elements.ariaUpdates.textContent = message;
    });
  }
}

function filterLessons(term) {
  const query = term.trim().toLowerCase();
  let firstMatch = null;
  elements.lessonContainer.querySelectorAll('.module-block').forEach((moduleBlock) => {
    const buttons = Array.from(moduleBlock.querySelectorAll('.lesson-item'));
    const trigger = moduleBlock.querySelector('.module-block__trigger');
    const list = moduleBlock.querySelector('ul');
    let hasMatch = false;
    buttons.forEach((button) => {
      const entry = lessonMap.get(button.dataset.lessonId);
      const haystack = [
        entry?.lesson.title || '',
        entry?.lesson.durationLabel || '',
        entry?.lesson.type || '',
        typeTokens[entry?.lesson.type || 'video']?.label || ''
      ]
        .join(' ')
        .toLowerCase();
      const match = !query || haystack.includes(query);
      button.closest('li').hidden = !match;
      if (match) {
        hasMatch = true;
        if (!firstMatch) {
          firstMatch = button;
        }
      }
    });
    if (query) {
      moduleBlock.hidden = !hasMatch;
      if (hasMatch) {
        moduleBlock.setAttribute('aria-expanded', 'true');
        trigger?.setAttribute('aria-expanded', 'true');
        if (list) list.hidden = false;
      } else {
        moduleBlock.setAttribute('aria-expanded', 'false');
        trigger?.setAttribute('aria-expanded', 'false');
        if (list) list.hidden = true;
      }
    } else {
      moduleBlock.hidden = false;
      const expanded = moduleBlock.getAttribute('aria-expanded') === 'true';
      if (list) list.hidden = !expanded;
    }
  });

  if (query && firstMatch) {
    firstMatch.focus();
    focusedLessonId = firstMatch.dataset.lessonId;
  }
}

function collapseAllModules() {
  elements.lessonContainer.querySelectorAll('.module-block').forEach((moduleBlock) => {
    const trigger = moduleBlock.querySelector('.module-block__trigger');
    const list = moduleBlock.querySelector('ul');
    moduleBlock.setAttribute('aria-expanded', 'false');
    trigger?.setAttribute('aria-expanded', 'false');
    if (list) list.hidden = true;
  });
}

function expandAllModules() {
  elements.lessonContainer.querySelectorAll('.module-block').forEach((moduleBlock) => {
    const trigger = moduleBlock.querySelector('.module-block__trigger');
    const list = moduleBlock.querySelector('ul');
    moduleBlock.setAttribute('aria-expanded', 'true');
    trigger?.setAttribute('aria-expanded', 'true');
    if (list) list.hidden = false;
  });
}

function handleCollapseAll() {
  const collapsed = elements.lessonContainer.querySelector('.module-block[aria-expanded="true"]');
  if (collapsed) {
    collapseAllModules();
    elements.collapseAll.textContent = 'Expand all';
  } else {
    expandAllModules();
    elements.collapseAll.textContent = 'Collapse all';
  }
}

function handleMarkComplete() {
  if (!currentLessonId) return;
  const completed = toggleComplete(currentLessonId);
  updateLessonBadges(currentLessonId);
  updateActionButtons();
  updateProgressUI();
  updateMobileBar();
  showToast(completed ? 'Lesson marked complete' : 'Lesson marked incomplete');
  announce(completed ? 'Lesson marked complete' : 'Lesson marked incomplete');
  if (completed) {
    const next = getNextItem(currentLessonId);
    if (next) {
      showUpNextCard(next.id);
    }
  } else {
    hideUpNextCard();
  }
}

function handleWatchLater() {
  if (!currentLessonId) return;
  const inWatchLater = toggleWatchLater(currentLessonId);
  updateLessonBadges(currentLessonId);
  updateActionButtons();
  showToast(inWatchLater ? 'Added to watch later' : 'Removed from watch later');
  announce(inWatchLater ? 'Added to watch later list' : 'Removed from watch later list');
}

function handleSuggestNext() {
  const nextLesson = elements.suggestNext.dataset.nextLesson;
  if (nextLesson) {
    selectLesson(nextLesson, { focus: true, announce: true });
  }
}

function handleMobilePrimary() {
  const nextLesson = elements.mobilePrimary.dataset.nextLesson;
  if (nextLesson) {
    selectLesson(nextLesson, { focus: true, announce: true });
  } else if (currentLessonId) {
    selectLesson(currentLessonId, { focus: true, announce: true });
  } else if (orderedLessonIds.length) {
    selectLesson(orderedLessonIds[0], { focus: true, announce: true });
  }
}

function handleKeyboardShortcuts(event) {
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
  if (event.key === 'j' || event.key === 'J') {
    if (!elements.playerCard.hidden) {
      elements.player.currentTime = Math.max(elements.player.currentTime - 10, 0);
    }
  }
  if (event.key === 'k' || event.key === 'K') {
    if (!elements.playerCard.hidden && elements.player.duration) {
      elements.player.currentTime = Math.min(
        elements.player.currentTime + 10,
        elements.player.duration
      );
    }
  }
  if (event.key === 'm' || event.key === 'M') {
    if (!elements.playerCard.hidden) {
      elements.player.muted = !elements.player.muted;
    }
  }
  if (event.key === 'n' || event.key === 'N') {
    const next = getNextItem(currentLessonId);
    if (next) {
      selectLesson(next.id, { focus: true, announce: true });
    }
  }
  if (event.key === 'p' || event.key === 'P') {
    const previous = getPreviousItem(currentLessonId);
    if (previous) {
      selectLesson(previous.id, { focus: true, announce: true });
    }
  }
  if (event.key === 't' || event.key === 'T') {
    event.preventDefault();
    toggleTranscriptPanel();
  }
  if (event.key === '/') {
    event.preventDefault();
    elements.search.focus();
  }
}

function initTranscriptControls() {
  elements.transcriptToggle.addEventListener('click', () => {
    toggleTranscriptPanel();
  });
  elements.transcriptClose.addEventListener('click', () => {
    toggleTranscriptPanel(false);
  });
}

function initAccordionSections() {
  document.querySelectorAll('[data-accordion-section]').forEach((section) => {
    const toggle = section.querySelector('.right-rail__toggle');
    const body = section.querySelector('.right-rail__body');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
    });
  });
}

function initMenuToggle() {
  if (elements.menuToggle) {
    elements.menuToggle.addEventListener('click', () => {
      const expanded = elements.menuToggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeLessonList();
      } else {
        openLessonList();
      }
    });
  }
  if (elements.mobileList) {
    elements.mobileList.addEventListener('click', () => {
      openLessonList();
    });
  }
  if (elements.lessonOverlay) {
    elements.lessonOverlay.addEventListener('click', () => {
      closeLessonList();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && elements.lessonList.dataset.open === 'true') {
      closeLessonList();
    }
  });
}

function initCaptionsToggle() {
  elements.captionsToggle.addEventListener('click', () => {
    const showing = elements.captionTrack.mode === 'showing';
    elements.captionTrack.mode = showing ? 'disabled' : 'showing';
    elements.captionsToggle.textContent = showing ? 'Captions' : 'Captions on';
  });
}

function initDownloadLinks() {
  elements.downloadGuide.setAttribute('href', '#');
  elements.downloadTranscript.setAttribute('href', '#');
}

function init() {
  renderModules();
  refreshAllLessonBadges();
  initTranscriptControls();
  initAccordionSections();
  initMenuToggle();
  initCaptionsToggle();
  initDownloadLinks();

  elements.lessonList.dataset.open = elements.lessonList.dataset.open || 'false';
  elements.lessonOverlay?.setAttribute('hidden', '');

  elements.player.addEventListener('timeupdate', handleTimeUpdate);
  elements.player.addEventListener('ended', handleEnded);
  elements.player.addEventListener('error', handleVideoError);

  elements.retryButton.addEventListener('click', () => {
    if (!currentLessonId) return;
    const entry = lessonMap.get(currentLessonId);
    if (entry?.lesson.type === 'video') {
      renderVideoLesson(entry.lesson);
    }
  });

  elements.markComplete.addEventListener('click', handleMarkComplete);
  elements.watchLater.addEventListener('click', handleWatchLater);
  elements.actionComplete.addEventListener('click', handleMarkComplete);
  elements.actionWatchLater.addEventListener('click', handleWatchLater);
  elements.actionNext.addEventListener('click', () => {
    const next = getNextItem(currentLessonId);
    if (next) selectLesson(next.id, { focus: true, announce: true });
  });
  elements.suggestNext.addEventListener('click', handleSuggestNext);
  elements.mobilePrimary.addEventListener('click', handleMobilePrimary);

  elements.notesForm.addEventListener('submit', addNote);
  elements.addTimecode.addEventListener('click', insertTimecode);

  elements.search.addEventListener('input', (event) => filterLessons(event.target.value));
  elements.collapseAll.addEventListener('click', handleCollapseAll);

  document.addEventListener('keydown', handleKeyboardShortcuts);

  elements.progressTotal.textContent = totalItems;
  updateProgressUI();

  const initialLesson = state.lastLessonId && lessonMap.has(state.lastLessonId)
    ? state.lastLessonId
    : orderedLessonIds[0];
  if (initialLesson) {
    selectLesson(initialLesson, { focus: false, announce: false, scroll: false });
  }
}

if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}

export { loadState, saveState, toggleComplete, toggleWatchLater, saveNote, getProgress, getNextItem };

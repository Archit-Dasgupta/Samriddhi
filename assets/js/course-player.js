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
  suggestNext: document.querySelector('[data-suggest-next]'),
  quizPanel: document.querySelector('[data-quiz-panel]'),
  notesForm: document.querySelector('[data-notes-form]'),
  noteTextarea: document.getElementById('noteText'),
  addTimecode: document.querySelector('[data-add-timecode]'),
  notesList: document.querySelector('[data-notes-list]'),
  actionComplete: document.querySelector('[data-action-complete]'),
  actionWatchLater: document.querySelector('[data-action-watchlater]'),
  actionNext: document.querySelector('[data-action-next]'),
  downloadGuide: document.querySelector('[data-download-guide]'),
  downloadTranscript: document.querySelector('[data-download-transcript]'),
  mobileBar: document.querySelector('[data-mobile-progress]'),
  mobileLabel: document.querySelector('[data-mobile-progress-label]'),
  mobileDetail: document.querySelector('[data-mobile-progress-detail]'),
  mobilePrimary: document.querySelector('[data-mobile-primary]'),
  menuToggle: document.querySelector('.course-header__menu'),
  ariaUpdates: document.querySelector('[data-aria-updates]')
};

const totalItems = modulesData.reduce((count, module) => count + module.lessons.length, 0);
const typeTokens = {
  video: { label: 'Video', icon: '▶' },
  quiz: { label: 'Quiz', icon: '❓' }
};

let currentLessonId = null;
let pendingResumeTime = null;
let lastSavedTime = 0;

const state = loadState();
const lessonMap = new Map();
const orderedLessonIds = [];

function loadState() {
  let watchLater = [];
  let completedQuizzes = [];
  try {
    watchLater = JSON.parse(localStorage.getItem('samriddhi.watchLater') || '[]');
  } catch (error) {
    watchLater = [];
  }
  try {
    completedQuizzes = JSON.parse(localStorage.getItem('samriddhi.completedQuizzes') || '[]');
  } catch (error) {
    completedQuizzes = [];
  }
  return {
    lastLessonId: localStorage.getItem('samriddhi.lastLessonId'),
    watchLater,
    completedQuizzes
  };
}

function saveState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Unable to save state', error);
  }
}

function getPlayback(lessonId) {
  const raw = localStorage.getItem(`samriddhi.playback.${lessonId}`);
  return raw ? Number(raw) : 0;
}

function savePlayback(lessonId, seconds) {
  try {
    localStorage.setItem(`samriddhi.playback.${lessonId}`, String(seconds));
  } catch (error) {
    console.error('Unable to persist playback', error);
  }
}

function toggleComplete(lessonId) {
  const key = `samriddhi.completed.${lessonId}`;
  const current = localStorage.getItem(key) === 'true';
  localStorage.setItem(key, String(!current));
  return !current;
}

function setComplete(lessonId, value) {
  localStorage.setItem(`samriddhi.completed.${lessonId}`, String(value));
  return value;
}

function isLessonComplete(lessonId) {
  return localStorage.getItem(`samriddhi.completed.${lessonId}`) === 'true';
}

function toggleWatchLater(lessonId) {
  const current = new Set(state.watchLater);
  if (current.has(lessonId)) {
    current.delete(lessonId);
  } else {
    current.add(lessonId);
  }
  state.watchLater = Array.from(current);
  saveState('samriddhi.watchLater', state.watchLater);
  return state.watchLater.includes(lessonId);
}

function saveNote(lessonId, note) {
  const key = `samriddhi.notes.${lessonId}`;
  let notes = [];
  try {
    notes = JSON.parse(localStorage.getItem(key) || '[]');
  } catch (error) {
    notes = [];
  }
  notes.push(note);
  saveState(key, notes);
  return notes;
}

function getNotes(lessonId) {
  try {
    return JSON.parse(localStorage.getItem(`samriddhi.notes.${lessonId}`) || '[]');
  } catch (error) {
    return [];
  }
}

function markQuizComplete(quizId) {
  if (!state.completedQuizzes.includes(quizId)) {
    state.completedQuizzes.push(quizId);
    saveState('samriddhi.completedQuizzes', state.completedQuizzes);
  }
}

function isQuizComplete(quizId) {
  return state.completedQuizzes.includes(quizId);
}

function getProgress() {
  let completed = 0;
  modulesData.forEach((module) => {
    module.lessons.forEach((lesson) => {
      if (lesson.type === 'video' && isLessonComplete(lesson.id)) {
        completed += 1;
      }
      if (lesson.type === 'quiz' && isQuizComplete(lesson.quiz.id)) {
        completed += 1;
      }
    });
  });
  const percent = totalItems === 0 ? 0 : Math.round((completed / totalItems) * 100);
  return { completed, percent };
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
    const summary = document.createElement('span');
    summary.textContent = module.meta;
    label.append(title, summary);

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
      button.dataset.index = `${moduleIndex}-${lessonIndex}`;
      button.role = 'option';
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', 'false');
      button.tabIndex = -1;

      const info = document.createElement('div');
      info.className = 'lesson-item__info';
      const strong = document.createElement('strong');
      strong.innerHTML = `<span aria-hidden="true">${typeTokens[lesson.type].icon}</span> ${lesson.title}`;
      const meta = document.createElement('span');
      meta.textContent = lesson.durationLabel;
      info.append(strong, meta);

      const badges = document.createElement('div');
      badges.className = 'lesson-item__badges';
      const typeChip = document.createElement('span');
      typeChip.className = `chip chip--${lesson.type}`;
      typeChip.textContent = `${typeTokens[lesson.type].icon} ${typeTokens[lesson.type].label}`;
      badges.append(typeChip);

      button.append(info, badges);
      item.append(button);
      list.append(item);

      lessonMap.set(lesson.id, { lesson, button, moduleBlock, module });
      orderedLessonIds.push(lesson.id);

      button.addEventListener('click', () => selectLesson(lesson.id, { focus: false, announce: true }));
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectLesson(lesson.id, { focus: false, announce: true });
        }
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
  updateActiveLesson(button, options.focus !== false);
  currentLessonId = lessonId;
  localStorage.setItem('samriddhi.lastLessonId', lessonId);
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

  if (window.matchMedia('(max-width: 1024px)').matches) {
    elements.lessonList.dataset.open = 'false';
    elements.menuToggle?.setAttribute('aria-expanded', 'false');
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

function renderVideoLesson(lesson, shouldScroll = true) {
  elements.quizPanel.hidden = true;
  elements.playerCard.hidden = false;
  elements.addTimecode.disabled = false;
  elements.addTimecode.removeAttribute('aria-disabled');
  clearFallback();

  elements.typeChip.textContent = `${typeTokens.video.icon} ${typeTokens.video.label}`;
  elements.typeChip.className = 'chip chip--video';
  elements.durationChip.textContent = lesson.durationLabel;
  elements.title.textContent = lesson.title;
  elements.description.textContent = lesson.description;

  elements.player.pause();
  elements.playerSource.src = lesson.video.src;
  elements.player.dataset.lessonId = lesson.id;
  pendingResumeTime = getPlayback(lesson.id);
  lastSavedTime = pendingResumeTime || 0;
  elements.captionTrack.src = lesson.video.captions || '';
  elements.downloadLink.href = lesson.video.download;
  elements.downloadLink.setAttribute('download', `${lesson.title}.mp4`);
  elements.downloadTranscript.href = lesson.video.captions || '#';
  elements.downloadTranscript.setAttribute('download', `${lesson.title}.vtt`);
  elements.transcriptBody.textContent = lesson.transcript;

  elements.player.load();
  elements.player.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });

  if (shouldScroll) {
    document.getElementById('playerArea')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderQuizLesson(lesson) {
  elements.player.pause();
  elements.playerCard.hidden = true;
  elements.quizPanel.hidden = false;
  elements.addTimecode.disabled = true;
  elements.addTimecode.setAttribute('aria-disabled', 'true');

  const quizId = lesson.quiz.id;
  const isComplete = isQuizComplete(quizId);
  const container = document.createElement('div');
  container.innerHTML = '';
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
      label.append(input, document.createTextNode(option));
      optionsList.append(label);

      input.addEventListener('change', () => {
        updateSubmitState(form, submitButton);
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
  completeButton.disabled = true;
  completeButton.setAttribute('aria-disabled', 'true');
  if (isComplete) {
    completeButton.disabled = true;
  }
  actions.append(completeButton);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const results = gradeQuiz(form, lesson.quiz.questions);
    revealQuizFeedback(form, lesson.quiz.questions, results);
    completeButton.disabled = isQuizComplete(quizId);
    completeButton.setAttribute('aria-disabled', String(completeButton.disabled));
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
    announce('Quiz completed. Moving to the next item.');
    const nextLesson = getNextLessonId(lesson.id);
    if (nextLesson) {
      selectLesson(nextLesson, { focus: true, announce: true });
    }
  });

  container.append(form, actions);
  elements.quizPanel.replaceChildren(container);
  document.getElementById('playerArea')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateSubmitState(form, submitButton) {
  const allAnswered = Array.from(form.querySelectorAll('fieldset')).every((fieldset) =>
    fieldset.querySelector('input:checked')
  );
  submitButton.disabled = !allAnswered;
}

function gradeQuiz(form, questions) {
  const results = new Map();
  questions.forEach((question) => {
    const selected = form.querySelector(`input[name="${question.id}"]:checked`);
    const value = selected ? Number(selected.value) : -1;
    results.set(question.id, value === question.answerIndex);
  });
  return results;
}

function revealQuizFeedback(form, questions, results) {
  questions.forEach((question) => {
    const fieldset = form.querySelector(`[data-question-id="${question.id}"]`);
    const selectedValue = Number(
      (form.querySelector(`input[name="${question.id}"]:checked`) || {}).value
    );
    fieldset.querySelectorAll('label').forEach((label) => {
      label.dataset.state = '';
    });
    const labels = fieldset.querySelectorAll('label');
    labels.forEach((label, index) => {
      if (index === question.answerIndex) {
        label.dataset.state = 'correct';
      }
      if (index === selectedValue && index !== question.answerIndex) {
        label.dataset.state = 'incorrect';
      }
    });
    const feedback = fieldset.querySelector('.quiz-feedback');
    feedback.textContent = results.get(question.id)
      ? 'Great job—this is correct.'
      : question.explanation;
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
    elements.suggestNext.hidden = !getNextLessonId(currentLessonId);
  }
}

function handleEnded() {
  if (!currentLessonId) return;
  setComplete(currentLessonId, true);
  updateLessonBadges(currentLessonId);
  updateProgressUI();
  updateMobileBar();
  updateActionButtons();
  const nextLesson = getNextLessonId(currentLessonId);
  if (nextLesson) {
    elements.suggestNext.hidden = false;
    elements.suggestNext.dataset.nextLesson = nextLesson;
  }
}

function handleVideoError() {
  renderFallback();
  announce('The video could not load. Use retry or download to continue offline.');
}

function updateLessonBadges(lessonId) {
  const entry = lessonMap.get(lessonId);
  if (!entry) return;
  const { button, lesson } = entry;
  const badges = button.querySelector('.lesson-item__badges');
  badges.querySelectorAll('.chip--status').forEach((chip) => chip.remove());

  if (lesson.type === 'video' && isLessonComplete(lesson.id)) {
    const chip = document.createElement('span');
    chip.className = 'chip chip--done chip--status';
    chip.textContent = '✔ Complete';
    badges.append(chip);
  }
  if (state.watchLater.includes(lesson.id)) {
    const chip = document.createElement('span');
    chip.className = 'chip chip--later chip--status';
    chip.textContent = '⏱ Watch later';
    badges.append(chip);
  }
  if (lesson.type === 'quiz' && isQuizComplete(lesson.quiz.id)) {
    const chip = document.createElement('span');
    chip.className = 'chip chip--done chip--status';
    chip.textContent = '✔ Complete';
    badges.append(chip);
  }
}

function updateActionButtons() {
  const entry = currentLessonId ? lessonMap.get(currentLessonId) : null;
  const lessonType = entry?.lesson.type;
  const isComplete = currentLessonId && lessonType === 'video' ? isLessonComplete(currentLessonId) : false;
  const isQuizCompleteState = entry?.lesson.type === 'quiz' ? isQuizComplete(entry.lesson.quiz.id) : false;
  const isLater = currentLessonId ? state.watchLater.includes(currentLessonId) : false;

  if (lessonType === 'quiz') {
    elements.markComplete.textContent = isQuizCompleteState ? 'Quiz completed' : 'Complete quiz to progress';
    elements.markComplete.disabled = true;
    elements.markComplete.setAttribute('aria-pressed', String(isQuizCompleteState));
    elements.markComplete.setAttribute('aria-disabled', 'true');
    elements.actionComplete.textContent = elements.markComplete.textContent;
    elements.actionComplete.disabled = true;
    elements.actionComplete.setAttribute('aria-disabled', 'true');
  } else {
    elements.markComplete.disabled = false;
    elements.markComplete.removeAttribute('aria-disabled');
    elements.actionComplete.disabled = false;
    elements.actionComplete.removeAttribute('aria-disabled');
    elements.markComplete.textContent = isComplete ? 'Mark incomplete' : 'Mark complete';
    elements.markComplete.setAttribute('aria-pressed', String(isComplete));
    elements.actionComplete.textContent = elements.markComplete.textContent;
  }

  elements.watchLater.textContent = isLater ? 'Remove from watch later' : 'Watch later';
  elements.watchLater.setAttribute('aria-pressed', String(isLater));
  elements.actionWatchLater.textContent = elements.watchLater.textContent;
  elements.actionWatchLater.setAttribute('aria-pressed', String(isLater));
  const nextLessonCandidate = getNextLessonId(currentLessonId);
  let showNext = false;
  if (entry) {
    if (entry.lesson.type === 'video' && isLessonComplete(entry.lesson.id)) {
      showNext = true;
    }
    if (entry.lesson.type === 'quiz' && isQuizComplete(entry.lesson.quiz.id)) {
      showNext = true;
    }
  }
  const nextLesson = showNext ? nextLessonCandidate : null;
  elements.suggestNext.hidden = !nextLesson;
  if (nextLesson) {
    elements.suggestNext.dataset.nextLesson = nextLesson;
    elements.actionNext.disabled = false;
    elements.actionNext.removeAttribute('aria-disabled');
  } else {
    elements.actionNext.disabled = true;
    elements.actionNext.setAttribute('aria-disabled', 'true');
  }
}

function updateProgressUI() {
  const { completed, percent } = getProgress();
  elements.headerProgressBar.style.width = `${percent}%`;
  elements.headerProgressContainer?.setAttribute('aria-valuenow', String(percent));
  elements.headerProgressContainer?.setAttribute('aria-valuetext', `${percent}% complete`);
  elements.headerProgressText.innerHTML = `<strong>${percent}%</strong> complete`;
  elements.progressCount.textContent = completed;
  elements.progressTotal.textContent = totalItems;
  elements.mobileLabel.textContent = `${percent}% complete`;
  elements.mobileDetail.textContent = `${completed} of ${totalItems} items`;
}

function updateMobileBar() {
  const entry = currentLessonId ? lessonMap.get(currentLessonId) : null;
  let showNext = false;
  if (entry) {
    if (entry.lesson.type === 'video' && isLessonComplete(entry.lesson.id)) {
      showNext = true;
    }
    if (entry.lesson.type === 'quiz' && isQuizComplete(entry.lesson.quiz.id)) {
      showNext = true;
    }
  }
  const nextLesson = showNext ? getNextLessonId(currentLessonId) : null;
  if (nextLesson) {
    const nextEntry = lessonMap.get(nextLesson);
    elements.mobilePrimary.textContent = `Next: ${nextEntry.lesson.title}`;
    elements.mobilePrimary.dataset.nextLesson = nextLesson;
  } else if (currentLessonId && entry) {
    elements.mobilePrimary.textContent = `Resume: ${entry.lesson.title}`;
    elements.mobilePrimary.removeAttribute('data-next-lesson');
  } else {
    elements.mobilePrimary.textContent = 'Resume lesson';
    elements.mobilePrimary.removeAttribute('data-next-lesson');
  }
}

function loadNotesForLesson(lessonId) {
  const notes = getNotes(lessonId);
  renderNotes(notes);
}

function renderNotes(notes) {
  elements.notesList.innerHTML = '';
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
    button.textContent = note.time ? `[${note.time}] Jump to time` : 'View note';
    button.dataset.seek = note.seconds ?? '';
    button.disabled = !note.seconds;
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
}

function insertTimecode() {
  if (!currentLessonId || elements.playerCard.hidden) return;
  const timecode = mmss(elements.player.currentTime);
  elements.noteTextarea.value = `[${timecode}] ${elements.noteTextarea.value}`.trim();
  elements.noteTextarea.focus();
}

function getNextLessonId(lessonId) {
  if (!lessonId) return orderedLessonIds[0];
  const index = orderedLessonIds.indexOf(lessonId);
  if (index >= 0 && index < orderedLessonIds.length - 1) {
    return orderedLessonIds[index + 1];
  }
  return null;
}

function getPreviousLessonId(lessonId) {
  if (!lessonId) return orderedLessonIds[0];
  const index = orderedLessonIds.indexOf(lessonId);
  if (index > 0) {
    return orderedLessonIds[index - 1];
  }
  return null;
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
  elements.lessonContainer.querySelectorAll('.module-block').forEach((moduleBlock) => {
    const buttons = Array.from(moduleBlock.querySelectorAll('.lesson-item'));
    let hasMatch = false;
    buttons.forEach((button) => {
      const lessonId = button.dataset.lessonId;
      const entry = lessonMap.get(lessonId);
      const text = `${entry.lesson.title} ${entry.lesson.durationLabel} ${entry.lesson.type}`.toLowerCase();
      const match = !query || text.includes(query);
      button.closest('li').hidden = !match;
      if (match) {
        hasMatch = true;
      }
    });
    moduleBlock.hidden = !hasMatch;
    if (query && hasMatch) {
      const trigger = moduleBlock.querySelector('.module-block__trigger');
      const list = moduleBlock.querySelector('ul');
      moduleBlock.setAttribute('aria-expanded', 'true');
      trigger?.setAttribute('aria-expanded', 'true');
      if (list) list.hidden = false;
    }
    if (!query) {
      moduleBlock.hidden = false;
    }
  });
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
  announce(completed ? 'Lesson marked complete' : 'Lesson marked incomplete');
}

function handleWatchLater() {
  if (!currentLessonId) return;
  const inWatchLater = toggleWatchLater(currentLessonId);
  updateLessonBadges(currentLessonId);
  updateActionButtons();
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
    const next = getNextLessonId(currentLessonId);
    if (next) {
      selectLesson(next, { focus: true, announce: true });
    }
  }
  if (event.key === 'p' || event.key === 'P') {
    const previous = getPreviousLessonId(currentLessonId);
    if (previous) {
      selectLesson(previous, { focus: true, announce: true });
    }
  }
}

function initTranscriptControls() {
  elements.transcriptToggle.addEventListener('click', () => {
    const isHidden = elements.transcriptPanel.hasAttribute('hidden');
    if (isHidden) {
      elements.transcriptPanel.removeAttribute('hidden');
    } else {
      elements.transcriptPanel.setAttribute('hidden', '');
    }
  });
  elements.transcriptClose.addEventListener('click', () => {
    elements.transcriptPanel.setAttribute('hidden', '');
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
  if (!elements.menuToggle) return;
  elements.menuToggle.addEventListener('click', () => {
    const expanded = elements.menuToggle.getAttribute('aria-expanded') === 'true';
    elements.menuToggle.setAttribute('aria-expanded', String(!expanded));
    elements.lessonList.dataset.open = String(!expanded);
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
    const next = getNextLessonId(currentLessonId);
    if (next) selectLesson(next, { focus: true, announce: true });
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

export { loadState, saveState, toggleComplete, toggleWatchLater, saveNote, getProgress };

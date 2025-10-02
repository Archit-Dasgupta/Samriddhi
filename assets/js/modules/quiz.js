import { $, COURSE_STATE } from './common.js';
import { modulesData, quizBanks } from './course-data.js';

const findQuizMeta = (quizId) => {
  for (let moduleIndex = 0; moduleIndex < modulesData.length; moduleIndex += 1) {
    const module = modulesData[moduleIndex];
    for (let itemIndex = 0; itemIndex < module.items.length; itemIndex += 1) {
      const item = module.items[itemIndex];
      if (item.quizId === quizId) {
        return { module, moduleIndex, item, itemIndex };
      }
    }
  }
  return null;
};

const renderQuiz = (quizId) => {
  const host = $('#quizHost');
  if (!host) return;

  const quiz = quizBanks[quizId];
  const meta = findQuizMeta(quizId);

  if (!quiz || !meta) {
    host.innerHTML = `
      <div class="card quiz-card">
        <h1 class="quiz-title">Quiz not found</h1>
        <p class="quiz-intro">The quiz you tried to open is not available. Please return to the programme page.</p>
        <a class="btn primary" href="modules.html">Back to programmes</a>
      </div>
    `;
    return;
  }

  const { module, moduleIndex, item, itemIndex } = meta;
  const saved = localStorage.getItem(`sam_quiz_${quizId}`);
  const savedScore = saved ? Number(saved) : null;

  host.innerHTML = `
    <div class="card quiz-card">
      <a class="back-link" href="modules.html">← Back to programmes</a>
      <h1 class="quiz-title">${item.title}</h1>
      <p class="quiz-intro">${module.title} • ${quiz.length} quick questions. Read each option aloud if needed and pick the answer that feels right for your work.</p>
      <form id="quizForm" class="quiz-form"></form>
      <div class="quiz-result" id="quizResult" aria-live="polite"></div>
    </div>
  `;

  const form = $('#quizForm');
  if (!form) return;

  form.innerHTML = quiz.map((question, qi) => {
    const name = `${quizId}_q${qi}`;
    return `
      <fieldset class="quiz-question" aria-describedby="${name}_hint">
        <legend><span class="q-number">${qi + 1}.</span> ${question.q}</legend>
        <p class="q-hint" id="${name}_hint">Choose one answer.</p>
        ${question.opts.map((opt, oi) => {
          const inputId = `${name}_${oi}`;
          return `
            <label class="quiz-option" for="${inputId}">
              <input type="radio" id="${inputId}" name="${name}" value="${oi}" required>
              <span>${opt}</span>
            </label>
          `;
        }).join('')}
      </fieldset>
    `;
  }).join('');

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.className = 'btn primary wide';
  submit.textContent = 'Check my answers';
  form.appendChild(submit);

  const result = $('#quizResult');

  if (savedScore !== null) {
    result.innerHTML = `<p class="quiz-note">Your last score was <strong>${savedScore}/${quiz.length}</strong>. You can try again to improve.</p>`;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    quiz.forEach((question, qi) => {
      const name = `${quizId}_q${qi}`;
      const choice = form.querySelector(`input[name='${name}']:checked`);
      if (choice && Number(choice.value) === question.ans) {
        score += 1;
      }
    });

    localStorage.setItem(`sam_quiz_${quizId}`, String(score));
    localStorage.setItem(COURSE_STATE, JSON.stringify({ moduleIndex, itemIndex }));

    const message = score === quiz.length
      ? `<div class="quiz-success">Excellent! You scored ${score}/${quiz.length}. Keep going.</div>`
      : `<div class="quiz-try">You scored ${score}/${quiz.length}. Review the lesson and try again.</div>`;

    if (result) {
      result.innerHTML = message;
    }
  });
};

export const initQuiz = () => {
  const params = new URLSearchParams(window.location.search);
  const quizId = params.get('id');
  if (!quizId) {
    const host = $('#quizHost');
    if (host) {
      host.innerHTML = `
        <div class="card quiz-card">
          <h1 class="quiz-title">No quiz selected</h1>
          <p class="quiz-intro">Please open a quiz from the programme list.</p>
          <a class="btn primary" href="modules.html">View programmes</a>
        </div>
      `;
    }
    return;
  }

  renderQuiz(quizId);
};

import { $, getSession, LIT_SCORE, LIT_LEVEL, COURSE_PROGRESS } from './common.js';

const refreshDashboard = (isNewUser) => {
  const progress = Math.round((Number(localStorage.getItem(COURSE_PROGRESS) || 0)) * 100);
  const score = Number(localStorage.getItem(LIT_SCORE) || 0);
  const level = localStorage.getItem(LIT_LEVEL) || '—';

  const bar = $('#progBar');
  if (bar) bar.style.width = `${progress}%`;
  const pctNode = $('#progPct');
  if (pctNode) pctNode.textContent = `${progress}%`;
  const levelNode = $('#litLevel');
  if (levelNode) levelNode.textContent = level;
  const scoreNode = $('#litScore');
  if (scoreNode) scoreNode.textContent = Number.isNaN(score) ? '0' : String(score);

  const needsTest = isNewUser || !localStorage.getItem(LIT_LEVEL);
  const resumeBtn = $('#btnResume');
  const exploreLink = $('#btnExplorePrograms');
  const lockMsg = $('#lockMsg');
  resumeBtn?.classList.toggle('locked', needsTest);
  exploreLink?.classList.toggle('locked', needsTest);
  if (lockMsg) lockMsg.textContent = needsTest ? 'Complete the Financial Literacy Test to unlock Programs.' : '';
};

export const initDashboard = () => {
  if (!$('#page-dashboard')) return;
  const session = getSession();
  if (!session) {
    window.location.href = 'login.html';
    return;
  }

  const isNewUser = sessionStorage.getItem('sam_new_user') === '1';
  refreshDashboard(isNewUser);
  if (isNewUser) sessionStorage.removeItem('sam_new_user');

  const testBtn = $('#btnTakeTest');
  if (testBtn) {
    testBtn.addEventListener('click', () => {
      window.location.href = 'lit.html';
    });
  }

  const resumeBtn = $('#btnResume');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      if (resumeBtn.classList.contains('locked')) return;
      window.location.href = 'modules.html';
    });
  }

  const exploreLink = $('#btnExplorePrograms');
  if (exploreLink) {
    exploreLink.addEventListener('click', (event) => {
      if (exploreLink.classList.contains('locked')) {
        event.preventDefault();
      }
    });
  }
};

import { $, getSession, LIT_SCORE, LIT_LEVEL, COURSE_PROGRESS } from './common.js';
import { registerTranslations, getCurrentLanguage, onLanguageChange } from './i18n.js';

const dashboardTranslations = {
  'dashboard.title': {
    mr: 'तुमच्या डॅशबोर्डवर स्वागत आहे',
    en: 'Welcome to your dashboard',
  },
  'dashboard.copy': {
    mr: 'योग्य कौशल्ये आणि सुरक्षित वित्त पर्यायांसह स्थिर उत्पन्न तयार करूया.',
    en: 'Let’s build steady income with the right skills and safer finance.',
  },
  'dashboard.progressBar': {
    mr: { attrs: { title: 'कोर्स प्रगती', 'aria-label': 'कोर्स प्रगती' } },
    en: { attrs: { title: 'Course progress', 'aria-label': 'Course progress' } },
  },
  'dashboard.progressLabel': {
    mr: 'प्रगती',
    en: 'Progress',
  },
  'dashboard.literacyLabel': {
    mr: 'साक्षरता',
    en: 'Literacy',
  },
  'dashboard.litDenominator': {
    mr: '१०',
    en: '10',
  },
  'dashboard.takeTest': {
    mr: 'आर्थिक साक्षरता चाचणी द्या',
    en: 'Take Financial Literacy Test',
  },
  'dashboard.resume': {
    mr: 'कोर्स पुन्हा सुरू करा',
    en: 'Resume Course',
  },
  'dashboard.explore': {
    mr: 'कार्यक्रम पाहा',
    en: 'Explore Programs',
  },
  'dashboard.banking': {
    mr: 'बँकिंग',
    en: 'Banking',
  },
  'dashboard.toolkits': {
    mr: 'साधनपेटी',
    en: 'Toolkits',
  },
};

registerTranslations(dashboardTranslations);

const levelLabels = {
  Beginner: {
    mr: 'नवशिक्या',
    en: 'Beginner',
  },
  Intermediate: {
    mr: 'मध्यम',
    en: 'Intermediate',
  },
  Advanced: {
    mr: 'उच्च',
    en: 'Advanced',
  },
};

const lockedMessage = {
  mr: 'कार्यक्रम अनलॉक करण्यासाठी आर्थिक साक्षरता चाचणी पूर्ण करा.',
  en: 'Complete the Financial Literacy Test to unlock Programs.',
};

const toLocalizedDigits = (value, lang) => {
  const str = String(value);
  if (lang !== 'mr') return str;
  return str
    .replace(/0/g, '०')
    .replace(/1/g, '१')
    .replace(/2/g, '२')
    .replace(/3/g, '३')
    .replace(/4/g, '४')
    .replace(/5/g, '५')
    .replace(/6/g, '६')
    .replace(/7/g, '७')
    .replace(/8/g, '८')
    .replace(/9/g, '९');
};

const formatPercent = (value, lang) => `${toLocalizedDigits(value, lang)}%`;

const resolveLevel = (level, lang) => {
  const entry = levelLabels[level];
  if (!entry) return level;
  return entry[lang] ?? entry.en;
};

const refreshDashboard = (isNewUser) => {
  const lang = getCurrentLanguage();
  const progress = Math.round((Number(localStorage.getItem(COURSE_PROGRESS) || 0)) * 100);
  const score = Number(localStorage.getItem(LIT_SCORE) || 0);
  const level = localStorage.getItem(LIT_LEVEL) || '—';

  const bar = $('#progBar');
  if (bar) bar.style.width = `${progress}%`;
  const pctNode = $('#progPct');
  if (pctNode) {
    pctNode.dataset.value = String(progress);
    pctNode.textContent = formatPercent(progress, lang);
  }
  const levelNode = $('#litLevel');
  if (levelNode) {
    levelNode.dataset.level = level;
    levelNode.textContent = level === '—' ? '—' : resolveLevel(level, lang);
  }
  const scoreNode = $('#litScore');
  if (scoreNode) {
    scoreNode.dataset.score = Number.isNaN(score) ? '0' : String(score);
    const safeScore = Number.isNaN(score) ? 0 : score;
    scoreNode.textContent = toLocalizedDigits(safeScore, lang);
  }
  const denom = document.querySelector('[data-i18n="dashboard.litDenominator"]');
  if (denom) {
    denom.dataset.value = '10';
    denom.textContent = toLocalizedDigits(10, lang);
  }

  const needsTest = isNewUser || !localStorage.getItem(LIT_LEVEL);
  const resumeBtn = $('#btnResume');
  const exploreLink = $('#btnExplorePrograms');
  const lockMsg = $('#lockMsg');
  resumeBtn?.classList.toggle('locked', needsTest);
  exploreLink?.classList.toggle('locked', needsTest);
  if (lockMsg) {
    if (needsTest) {
      lockMsg.dataset.status = 'locked';
      lockMsg.textContent = lockedMessage[lang] ?? lockedMessage.en;
    } else {
      lockMsg.textContent = '';
      delete lockMsg.dataset.status;
    }
  }
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

  onLanguageChange(() => refreshDashboard(false));

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

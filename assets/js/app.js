import { getSession, updateHeaderAuthState } from './modules/common.js';
import { initAuth } from './modules/auth.js';
import { initHome } from './modules/home.js';
import { initDashboard } from './modules/dashboard.js';
import { initLiteracy } from './modules/literacy.js';
import { initModules } from './modules/modules.js';
import { initBanking } from './modules/banking.js';
import { initToolkits } from './modules/toolkits.js';
import { initProfile } from './modules/profile.js';
import {
  initLanguage,
  registerTranslations,
  toggleLanguage,
  getCurrentLanguage,
  onLanguageChange,
} from './modules/i18n.js';

const partialFallbacks = {
  'partials/header.html': `
<header class="topbar">
  <div class="topbar-inner">
    <a class="brand-left" href="home.html">
      <span class="logo-square" aria-hidden="true">
        <img src="img/logo.svg" alt="">
      </span>
      <span class="brand-copy">
        <span class="brand-strong">Samriddhi</span>
      </span>
    </a>
    <button class="hamb" id="hamb" aria-expanded="false" aria-label="Menu" data-i18n="header.menu">☰</button>
    <nav class="nav-right" id="navRight">
      <a class="nav-link" data-route="home" href="home.html" data-i18n="header.nav.home">Home</a>
      <a class="nav-link" data-route="modules" href="modules.html" data-i18n="header.nav.modules">Programs</a>
      <a class="nav-link" data-route="banking" href="banking.html" data-i18n="header.nav.banking">Banking <span class="chip-new">COMING SOON</span></a>
      <a class="nav-link" data-route="toolkits" href="toolkits.html" data-i18n="header.nav.toolkit">Toolkit</a>
      <a id="navProfile" class="nav-link hidden" data-route="profile" href="profile.html" data-i18n="header.nav.profile">Profile</a>
      <button id="btnToggleLang" type="button" class="btn ghost small" aria-label="Switch language to Marathi" aria-pressed="false" data-active-lang="en" data-i18n="lang.toggle.label">मराठी</button>
      <button id="btnOpenLogin" type="button" class="btn login-pill" data-i18n="header.nav.login">Login / Register</button>
    </nav>
  </div>
</header>
`.trim(),
  'partials/footer.html': '<footer class="tiny muted center">© Samriddhi</footer>',
};

const loadPartial = async (selector, url) => {
  const host = document.querySelector(selector);
  if (!host) return;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    host.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
    const fallback = partialFallbacks[url];
    if (fallback) host.innerHTML = fallback;
  }
};

const setActiveNav = (route) => {
  document.querySelectorAll('#navRight .nav-link').forEach((link) => {
    const match = link.dataset.route === route;
    link.classList.toggle('active', match);
    if (match) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
};

const setupHeader = (page) => {
  const hamb = document.querySelector('#hamb');
  const navRight = document.querySelector('#navRight');
  hamb?.addEventListener('click', () => {
    const open = navRight?.classList.toggle('open');
    if (hamb) hamb.setAttribute('aria-expanded', String(Boolean(open)));
  });

  document.querySelectorAll('#navRight .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navRight?.classList.remove('open');
      if (hamb) hamb.setAttribute('aria-expanded', 'false');
    });
  });

  const loginBtn = document.querySelector('#btnOpenLogin');
  loginBtn?.addEventListener('click', () => {
    window.location.href = 'login.html';
  });

  const langToggle = document.querySelector('#btnToggleLang');
  if (langToggle) {
    const syncToggleState = (lang) => {
      langToggle.setAttribute('aria-pressed', lang === 'mr' ? 'true' : 'false');
      langToggle.dataset.activeLang = lang;
      langToggle.dataset.nextLang = lang === 'mr' ? 'en' : 'mr';
    };
    syncToggleState(getCurrentLanguage());
    onLanguageChange(syncToggleState);
    langToggle.addEventListener('click', () => toggleLanguage());
  }

  registerTranslations({
    'header.menu': {
      mr: { attrs: { 'aria-label': 'मेन्यू' } },
      en: { attrs: { 'aria-label': 'Menu' } },
    },
    'header.nav.home': {
      mr: 'मुख्यपृष्ठ',
      en: 'Home',
    },
    'header.nav.modules': {
      mr: 'कार्यक्रम',
      en: 'Programs',
    },
    'header.nav.banking': {
      mr: 'बँकिंग <span class="chip-new">लवकरच येत आहे</span>',
      en: 'Banking <span class="chip-new">COMING SOON</span>',
    },
    'header.nav.toolkit': {
      mr: 'साधनपेटी',
      en: 'Toolkit',
    },
    'header.nav.profile': {
      mr: 'प्रोफाइल',
      en: 'Profile',
    },
    'header.nav.login': {
      mr: 'लॉगिन / नोंदणी',
      en: 'Login/Register',
    },
    'lang.toggle.label': {
      mr: { text: 'English', attrs: { 'aria-label': 'भाषा इंग्रजीवर स्विच करा' } },
      en: { text: 'मराठी', attrs: { 'aria-label': 'Switch language to Marathi' } },
    },
  });

  setActiveNav(page);
  updateHeaderAuthState(getSession());
};

const initializePage = (page) => {
  switch (page) {
    case 'home':
      initHome();
      break;
    case 'login':
    case 'password':
    case 'create':
      initAuth(page);
      break;
    case 'dashboard':
      initDashboard();
      break;
    case 'lit':
      initLiteracy();
      break;
    case 'modules':
      initModules();
      break;
    case 'banking':
    case 'deposits':
    case 'open-account':
    case 'loan':
    case 'savings-guide':
      initBanking(page);
      break;
    case 'toolkits':
      initToolkits();
      break;
    case 'profile':
      initProfile();
      break;
    default:
      break;
  }
};

const init = async () => {
  const page = document.body.dataset.page || 'home';
  initLanguage();
  await Promise.all([
    loadPartial('#header-placeholder', 'partials/header.html'),
    loadPartial('#footer-placeholder', 'partials/footer.html'),
  ]);
  setupHeader(page);
  initializePage(page);
};

document.addEventListener('DOMContentLoaded', init);

import { getSession, updateHeaderAuthState } from './modules/common.js';
import { initAuth } from './modules/auth.js';
import { initHome } from './modules/home.js';
import { initDashboard } from './modules/dashboard.js';
import { initLiteracy } from './modules/literacy.js';
import { initModules } from './modules/modules.js';
import { initBanking } from './modules/banking.js';
import { initToolkits } from './modules/toolkits.js';
import { initProfile } from './modules/profile.js';

const loadPartial = async (selector, url) => {
  const host = document.querySelector(selector);
  if (!host) return;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    host.innerHTML = await response.text();
  } catch (err) {
    console.error(err);
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
    case 'open-account':
    case 'loan':
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
  await Promise.all([
    loadPartial('#header-placeholder', 'partials/header.html'),
    loadPartial('#footer-placeholder', 'partials/footer.html'),
  ]);
  setupHeader(page);
  initializePage(page);
};

document.addEventListener('DOMContentLoaded', init);

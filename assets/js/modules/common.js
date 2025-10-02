export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

export const ACC_KEY = 'sam_accounts';
export const SESS_KEY = 'sam_session';
export const LIT_SCORE = 'sam_fin_score';
export const LIT_LEVEL = 'sam_fin_level';
export const COURSE_STATE = 'sam_course_state';
export const COURSE_PROGRESS = 'sam_course_progress';

const DEMO_SALT = 'samriddhi';

export const hash = (value) => btoa(unescape(encodeURIComponent(`${DEMO_SALT}|${value}`)));

export const getAccounts = () => JSON.parse(localStorage.getItem(ACC_KEY) || '{}');
export const setAccounts = (accounts) => localStorage.setItem(ACC_KEY, JSON.stringify(accounts));

export const getSession = () => JSON.parse(localStorage.getItem(SESS_KEY) || 'null');
export const setSession = (session) => localStorage.setItem(SESS_KEY, JSON.stringify(session));
export const clearSession = () => localStorage.removeItem(SESS_KEY);

export const updateHeaderAuthState = (session) => {
  const loginBtn = document.querySelector('#btnOpenLogin');
  const profileLink = document.querySelector('#navProfile');
  if (!loginBtn || !profileLink) return;
  const isLoggedIn = Boolean(session);
  profileLink.classList.toggle('hidden', !isLoggedIn);
  loginBtn.classList.toggle('hidden', isLoggedIn);
};

export const formatINR = (value) => `₹${Math.round(Number(value) || 0).toLocaleString('en-IN')}`;

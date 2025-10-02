import { $ } from './common.js';

export const initHome = () => {
  const btn = $('#btnStart');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
};

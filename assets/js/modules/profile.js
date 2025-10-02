import { $, getSession, setSession, getAccounts, setAccounts, clearSession, hash, updateHeaderAuthState, LIT_SCORE, LIT_LEVEL, COURSE_PROGRESS } from './common.js';

const loadProfileUI = (session) => {
  const phoneField = $('#prof_phone');
  if (phoneField) phoneField.value = session.phone || '';
  const name = $('#prof_name');
  const city = $('#prof_city');
  const job = $('#prof_job');
  const lang = $('#prof_lang');
  if (name) name.value = session.name || '';
  if (city) city.value = session.city || '';
  if (job) job.value = session.job || '';
  if (lang) lang.value = session.lang || 'English';

  const score = localStorage.getItem(LIT_SCORE) || '0';
  const level = localStorage.getItem(LIT_LEVEL) || '—';
  const pct = Math.round((Number(localStorage.getItem(COURSE_PROGRESS) || 0)) * 100);
  const litNode = $('#prof_lit');
  const progNode = $('#prof_prog');
  if (litNode) litNode.textContent = `${level} (${score}/10)`;
  if (progNode) progNode.textContent = `${pct}%`;
};

export const initProfile = () => {
  if (!$('#page-profile')) return;
  const session = getSession();
  if (!session) {
    window.location.href = 'login.html';
    return;
  }
  loadProfileUI(session);

  const saveBtn = $('#prof_save');
  const logoutBtn = $('#prof_logout');
  const msg = $('#prof_msg');

  saveBtn?.addEventListener('click', () => {
    const accounts = getAccounts();
    const phone = session.phone;
    const updated = {
      ...accounts[phone],
      name: ($('#prof_name')?.value || '').trim(),
      city: ($('#prof_city')?.value || '').trim(),
      job: ($('#prof_job')?.value || '').trim(),
      lang: $('#prof_lang')?.value || 'English',
    };
    const newPassword = ($('#prof_pw')?.value || '').trim();
    if (newPassword) {
      updated.pw = hash(newPassword);
    }
    accounts[phone] = updated;
    setAccounts(accounts);
    const sessionUpdate = { ...session, ...updated };
    delete sessionUpdate.pw;
    setSession(sessionUpdate);
    Object.assign(session, sessionUpdate);
    const pwField = $('#prof_pw');
    if (pwField) pwField.value = '';
    if (msg) msg.innerHTML = '<span class="ok">Saved.</span>';
  });

  logoutBtn?.addEventListener('click', () => {
    clearSession();
    updateHeaderAuthState(null);
    localStorage.removeItem('sam_tmp_phone');
    sessionStorage.removeItem('sam_new_user');
    window.location.href = 'home.html';
  });
};

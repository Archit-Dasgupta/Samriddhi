import { $, getAccounts, setAccounts, setSession, hash, updateHeaderAuthState } from './common.js';

const TMP_PHONE_KEY = 'sam_tmp_phone';

const sanitizePhone = (value) => (value || '').replace(/\D/g, '');

const redirect = (url) => {
  window.location.href = url;
};

const buildSessionFromAccount = (phone, account) => ({
  phone,
  name: account.name || '',
  city: account.city || '',
  lang: account.lang || 'English',
  job: account.job || ''
});

export const initAuth = (page) => {
  if (page === 'login') {
    const proceedBtn = $('#btnProceedPhone');
    const input = $('#phoneNumber');
    if (!proceedBtn || !input) return;
    proceedBtn.addEventListener('click', () => {
      const phone = sanitizePhone(input.value);
      const msg = $('#login_msg');
      if (phone.length !== 10) {
        if (msg) msg.textContent = 'Enter a valid 10-digit number.';
        return;
      }
      localStorage.setItem(TMP_PHONE_KEY, phone);
      const accounts = getAccounts();
      if (accounts[phone]) {
        redirect('password.html');
      } else {
        redirect('create.html');
      }
    });
  }

  if (page === 'password') {
    const btn = $('#btnLogin');
    const input = $('#login_pass');
    if (!btn || !input) return;
    const phone = localStorage.getItem(TMP_PHONE_KEY) || '';
    const msg = $('#pass_msg');
    if (!phone) {
      redirect('login.html');
      return;
    }
    btn.addEventListener('click', () => {
      const accounts = getAccounts();
      const account = accounts[phone];
      if (!account) {
        if (msg) msg.textContent = 'Account not found.';
        return;
      }
      if (account.pw !== hash(input.value)) {
        if (msg) msg.textContent = 'Wrong password.';
        return;
      }
      const session = buildSessionFromAccount(phone, account);
      setSession(session);
      sessionStorage.removeItem('sam_new_user');
      updateHeaderAuthState(session);
      redirect('dashboard.html');
    });
  }

  if (page === 'create') {
    const btn = $('#btnCreate');
    const phoneField = $('#create_phone');
    if (!btn || !phoneField) return;
    const phone = localStorage.getItem(TMP_PHONE_KEY) || '';
    if (!phone) {
      redirect('login.html');
      return;
    }
    phoneField.value = phone;
    btn.addEventListener('click', () => {
      const name = ($('#create_name')?.value || '').trim();
      const city = ($('#create_city')?.value || '').trim();
      const lang = $('#create_lang')?.value || 'English';
      const job = ($('#create_job')?.value || '').trim();
      const pw = $('#create_pw')?.value || '';
      const cpw = $('#create_cpw')?.value || '';
      const msg = $('#create_msg');
      if (pw.length < 4) {
        if (msg) msg.textContent = 'Password too short.';
        return;
      }
      if (pw !== cpw) {
        if (msg) msg.textContent = 'Passwords do not match.';
        return;
      }
      const accounts = getAccounts();
      accounts[phone] = { name, city, lang, job, pw: hash(pw) };
      setAccounts(accounts);
      const session = buildSessionFromAccount(phone, accounts[phone]);
      setSession(session);
      sessionStorage.setItem('sam_new_user', '1');
      updateHeaderAuthState(session);
      redirect('dashboard.html');
    });
  }
};

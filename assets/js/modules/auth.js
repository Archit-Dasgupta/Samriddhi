import { $, getAccounts, setAccounts, setSession, hash, updateHeaderAuthState } from './common.js';
import { registerTranslations, getCurrentLanguage, onLanguageChange } from './i18n.js';

const authTranslations = {
  'auth.login.eyebrow': {
    mr: 'खाते प्रवेश',
    en: 'Account access',
  },
  'auth.login.title': {
    mr: 'समृद्धीत तुमचे पुन्हा स्वागत आहे',
    en: 'Welcome back to Samriddhi',
  },
  'auth.login.copy': {
    mr: 'तुमचे धडे आणि कोच संभाषणे सुरू ठेवण्यासाठी तुमचा मोबाइल क्रमांक भरा.',
    en: 'Sign in with your mobile number to pick up your lessons and coaching conversations.',
  },
  'auth.login.cc': {
    mr: '+९१',
    en: '+91',
  },
  'auth.login.input': {
    mr: { attrs: { placeholder: '००००००००००', 'aria-label': 'फोन नंबर' } },
    en: { attrs: { placeholder: '0000000000', 'aria-label': 'Phone number' } },
  },
  'auth.login.submit': {
    mr: 'पुढे चला',
    en: 'Continue',
  },
  'auth.login.tip': {
    mr: 'डेमो टिप: या प्रोटोटाइपसाठी कोणताही १० अंकी क्रमांक चालतो.',
    en: 'Demo tip: any 10-digit number works for this prototype.',
  },
  'auth.login.perkProgress': {
    mr: 'तुमची प्रगती क्षणात सर्व उपकरणांवर जतन होते',
    en: 'Syncs your progress across devices instantly',
  },
  'auth.login.perkCoach': {
    mr: 'समृद्धी कोचकडून आवाज सहाय्य अनलॉक होते',
    en: 'Unlocks voice support from your Samriddhi coach',
  },
  'auth.login.perkTools': {
    mr: 'तुमच्या शिवण ध्येयांनुसार वैयक्तिकृत साधने मिळतात',
    en: 'Personalised tools based on your tailoring goals',
  },
  'auth.password.title': {
    mr: 'पासवर्ड भरा',
    en: 'Enter password',
  },
  'auth.password.copy': {
    mr: 'आम्हाला तुमचे खाते सापडले. पुढे जाण्यासाठी पासवर्ड भरा.',
    en: 'We found your account. Enter password to continue.',
  },
  'auth.password.input': {
    mr: { attrs: { placeholder: 'पासवर्ड', 'aria-label': 'पासवर्ड' } },
    en: { attrs: { placeholder: 'Password', 'aria-label': 'Password' } },
  },
  'auth.password.submit': {
    mr: 'लॉगिन',
    en: 'Login',
  },
  'auth.password.back': {
    mr: 'मागे जा',
    en: 'Back',
  },
  'auth.create.title': {
    mr: 'तुमचे खाते तयार करा',
    en: 'Create your account',
  },
  'auth.create.copy': {
    mr: 'तुमची प्रोफाइल पूर्ण करा आणि पासवर्ड निवडा.',
    en: 'Finish setting up your profile and choose a password.',
  },
  'auth.create.phoneLabel': {
    mr: 'फोन (फक्त पाहण्यासाठी)',
    en: 'Phone (read-only)',
  },
  'auth.create.phoneValue': {
    mr: { attrs: { 'aria-label': 'फोन नंबर' } },
    en: { attrs: { 'aria-label': 'Phone number' } },
  },
  'auth.create.nameLabel': {
    mr: 'नाव',
    en: 'Name',
  },
  'auth.create.nameInput': {
    mr: { attrs: { placeholder: 'तुमचे नाव' } },
    en: { attrs: { placeholder: 'Your name' } },
  },
  'auth.create.cityLabel': {
    mr: 'गाव / शहर',
    en: 'Village / City',
  },
  'auth.create.cityInput': {
    mr: { attrs: { placeholder: 'तुमचे गाव' } },
    en: { attrs: { placeholder: 'Your town' } },
  },
  'auth.create.languageLabel': {
    mr: 'भाषा',
    en: 'Language',
  },
  'auth.create.languageSelect': {
    mr: { attrs: { 'aria-label': 'भाषा निवडा' } },
    en: { attrs: { 'aria-label': 'Choose language' } },
  },
  'auth.create.langEnglish': {
    mr: 'इंग्रजी',
    en: 'English',
  },
  'auth.create.langHindi': {
    mr: 'हिंदी',
    en: 'Hindi',
  },
  'auth.create.langMarathi': {
    mr: 'मराठी',
    en: 'Marathi',
  },
  'auth.create.occupationLabel': {
    mr: 'व्यवसाय',
    en: 'Occupation',
  },
  'auth.create.occupationInput': {
    mr: { attrs: { placeholder: 'उदा., टेलर' } },
    en: { attrs: { placeholder: 'e.g., Tailor' } },
  },
  'auth.create.passwordLabel': {
    mr: 'पासवर्ड',
    en: 'Password',
  },
  'auth.create.passwordInput': {
    mr: { attrs: { placeholder: 'किमान ४ अक्षरे' } },
    en: { attrs: { placeholder: 'At least 4 characters' } },
  },
  'auth.create.confirmLabel': {
    mr: 'पासवर्ड पुष्टी करा',
    en: 'Confirm password',
  },
  'auth.create.confirmInput': {
    mr: { attrs: { placeholder: 'पासवर्ड पुन्हा लिहा' } },
    en: { attrs: { placeholder: 'Re-enter password' } },
  },
  'auth.create.submit': {
    mr: 'खाते तयार करा',
    en: 'Create account',
  },
  'auth.create.back': {
    mr: 'मागे जा',
    en: 'Back',
  },
};

registerTranslations(authTranslations);

const authMessages = {
  login: {
    invalidPhone: {
      mr: 'कृपया वैध १० अंकी क्रमांक भरा.',
      en: 'Enter a valid 10-digit number.',
    },
  },
  password: {
    accountMissing: {
      mr: 'खाते सापडले नाही.',
      en: 'Account not found.',
    },
    wrongPassword: {
      mr: 'चुकीचा पासवर्ड.',
      en: 'Wrong password.',
    },
  },
  create: {
    shortPassword: {
      mr: 'पासवर्ड किमान ४ अक्षरी असावा.',
      en: 'Password too short.',
    },
    mismatchPassword: {
      mr: 'पासवर्ड जुळत नाहीत.',
      en: 'Passwords do not match.',
    },
  },
};

const resolveAuthMessage = (scope, key, lang = getCurrentLanguage()) => {
  const entry = authMessages[scope]?.[key];
  if (!entry) return '';
  return entry[lang] ?? entry.en ?? '';
};

const bindInlineMessage = (node, scope) => {
  if (!node) return () => {};
  const sync = (lang = getCurrentLanguage()) => {
    const key = node.dataset.msgKey;
    if (!key) return;
    const text = resolveAuthMessage(scope, key, lang);
    node.textContent = text;
  };
  onLanguageChange((lang) => sync(lang));
  return (key) => {
    if (!node) return;
    if (!key) {
      node.textContent = '';
      delete node.dataset.msgKey;
      return;
    }
    node.dataset.msgKey = key;
    sync();
  };
};

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
    const msg = $('#login_msg');
    const setMessage = bindInlineMessage(msg, 'login');
    proceedBtn.addEventListener('click', () => {
      const phone = sanitizePhone(input.value);
      if (phone.length !== 10) {
        setMessage('invalidPhone');
        return;
      }
      setMessage(null);
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
    const setMessage = bindInlineMessage(msg, 'password');
    if (!phone) {
      redirect('login.html');
      return;
    }
    btn.addEventListener('click', () => {
      const accounts = getAccounts();
      const account = accounts[phone];
      if (!account) {
        setMessage('accountMissing');
        return;
      }
      if (account.pw !== hash(input.value)) {
        setMessage('wrongPassword');
        return;
      }
      setMessage(null);
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
    const msg = $('#create_msg');
    const setMessage = bindInlineMessage(msg, 'create');
    btn.addEventListener('click', () => {
      const name = ($('#create_name')?.value || '').trim();
      const city = ($('#create_city')?.value || '').trim();
      const lang = $('#create_lang')?.value || 'English';
      const job = ($('#create_job')?.value || '').trim();
      const pw = $('#create_pw')?.value || '';
      const cpw = $('#create_cpw')?.value || '';
      if (pw.length < 4) {
        setMessage('shortPassword');
        return;
      }
      if (pw !== cpw) {
        setMessage('mismatchPassword');
        return;
      }
      setMessage(null);
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

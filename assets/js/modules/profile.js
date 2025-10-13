import { $, getSession, setSession, getAccounts, setAccounts, clearSession, hash, updateHeaderAuthState, LIT_SCORE, LIT_LEVEL, COURSE_PROGRESS } from './common.js';
import { registerTranslations, getCurrentLanguage, onLanguageChange } from './i18n.js';

const profileTranslations = {
  'profile.eyebrow': {
    mr: 'वैयक्तिक केंद्र',
    en: 'Personal hub',
  },
  'profile.title': {
    mr: 'तुमचा समृद्धी अनुभव सुसंगत करा',
    en: 'Tailor your Samriddhi experience',
  },
  'profile.copy': {
    mr: 'योग्य भाषा समर्थन, किंमत साधने आणि वित्त सल्ला मिळत राहण्यासाठी तुमची माहिती अद्यतनित करा.',
    en: 'Refresh your details to keep receiving the right language support, pricing tools and financing suggestions.',
  },
  'profile.phoneLabel': {
    mr: 'फोन (फक्त पाहण्यासाठी)',
    en: 'Phone (read-only)',
  },
  'profile.phoneValue': {
    mr: { attrs: { 'aria-label': 'फोन नंबर' } },
    en: { attrs: { 'aria-label': 'Phone number' } },
  },
  'profile.nameLabel': {
    mr: 'नाव',
    en: 'Name',
  },
  'profile.nameInput': {
    mr: { attrs: { placeholder: 'तुमचे नाव' } },
    en: { attrs: { placeholder: 'Your name' } },
  },
  'profile.cityLabel': {
    mr: 'गाव / शहर',
    en: 'Village / City',
  },
  'profile.cityInput': {
    mr: { attrs: { placeholder: 'तुमचे गाव' } },
    en: { attrs: { placeholder: 'Your town' } },
  },
  'profile.occupationLabel': {
    mr: 'व्यवसाय',
    en: 'Occupation',
  },
  'profile.occupationInput': {
    mr: { attrs: { placeholder: 'उदा., टेलर' } },
    en: { attrs: { placeholder: 'e.g., Tailor' } },
  },
  'profile.languageLabel': {
    mr: 'भाषा',
    en: 'Language',
  },
  'profile.languageSelect': {
    mr: { attrs: { 'aria-label': 'भाषा निवडा' } },
    en: { attrs: { 'aria-label': 'Choose language' } },
  },
  'profile.langEnglish': {
    mr: 'इंग्रजी',
    en: 'English',
  },
  'profile.langHindi': {
    mr: 'हिंदी',
    en: 'Hindi',
  },
  'profile.langMarathi': {
    mr: 'मराठी',
    en: 'Marathi',
  },
  'profile.passwordLabel': {
    mr: 'पासवर्ड बदला',
    en: 'Change password',
  },
  'profile.passwordInput': {
    mr: { attrs: { placeholder: 'नवीन पासवर्ड' } },
    en: { attrs: { placeholder: 'New password' } },
  },
  'profile.save': {
    mr: 'बदल जतन करा',
    en: 'Save changes',
  },
  'profile.logout': {
    mr: 'लॉग आऊट',
    en: 'Log out',
  },
  'profile.summary.chip': {
    mr: 'तुमची प्रगती कथा',
    en: 'Your growth story',
  },
  'profile.summary.title': {
    mr: 'प्रगतीचा झटपट आढावा',
    en: 'Progress snapshot',
  },
  'profile.summary.copy': {
    mr: 'उच्चस्तरीय साधनपेट्या, बँक ऑफर्स आणि भाषाविषयक टिपा अनलॉक करण्यासाठी प्रोफाइल पूर्ण करा.',
    en: 'Complete your profile to unlock advanced toolkits, bank offers and language specific tips.',
  },
  'profile.summary.literacy': {
    mr: 'साक्षरता ट्रॅक',
    en: 'Literacy track',
  },
  'profile.summary.progress': {
    mr: 'कोर्स प्रगती',
    en: 'Course progress',
  },
};

registerTranslations(profileTranslations);

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

const inlineMessages = {
  saved: {
    mr: 'जतन झाले.',
    en: 'Saved.',
  },
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

const syncProfileStats = () => {
  const lang = getCurrentLanguage();
  const litNode = $('#prof_lit');
  const progNode = $('#prof_prog');
  if (litNode) {
    const level = litNode.dataset.level || '—';
    const score = Number(litNode.dataset.score || 0);
    if (level === '—') {
      litNode.textContent = '—';
    } else {
      const levelText = levelLabels[level]?.[lang] ?? level;
      litNode.textContent = `${levelText} (${toLocalizedDigits(score, lang)}/${toLocalizedDigits(10, lang)})`;
    }
  }
  if (progNode) {
    const pct = Number(progNode.dataset.progress || 0);
    progNode.textContent = `${toLocalizedDigits(pct, lang)}%`;
  }
};

const resolveInlineMessage = (key, lang = getCurrentLanguage()) => {
  const entry = inlineMessages[key];
  if (!entry) return '';
  return entry[lang] ?? entry.en ?? '';
};

const bindStatusMessage = (node) => {
  if (!node) return () => {};
  onLanguageChange(() => {
    if (!node.dataset.status) return;
    const text = resolveInlineMessage(node.dataset.status);
    node.innerHTML = text ? `<span class="ok">${text}</span>` : '';
  });
  return (status) => {
    if (!status) {
      node.textContent = '';
      delete node.dataset.status;
      return;
    }
    node.dataset.status = status;
    const text = resolveInlineMessage(status);
    node.innerHTML = text ? `<span class="ok">${text}</span>` : '';
  };
};

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

  const score = Number(localStorage.getItem(LIT_SCORE) || 0);
  const level = localStorage.getItem(LIT_LEVEL) || '—';
  const pct = Math.round((Number(localStorage.getItem(COURSE_PROGRESS) || 0)) * 100);
  const litNode = $('#prof_lit');
  const progNode = $('#prof_prog');
  if (litNode) {
    litNode.dataset.level = level;
    litNode.dataset.score = String(score);
  }
  if (progNode) {
    progNode.dataset.progress = String(pct);
  }
  syncProfileStats();
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
  const setMessage = bindStatusMessage(msg);

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
    setMessage('saved');
    syncProfileStats();
  });

  logoutBtn?.addEventListener('click', () => {
    clearSession();
    updateHeaderAuthState(null);
    localStorage.removeItem('sam_tmp_phone');
    sessionStorage.removeItem('sam_new_user');
    window.location.href = 'home.html';
  });

  onLanguageChange(() => {
    syncProfileStats();
  });
};

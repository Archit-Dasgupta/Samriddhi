const STORAGE_KEY = 'samriddhi-lang';
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = new Set(['mr', 'en']);

let currentLang = DEFAULT_LANG;
const translations = {};
const listeners = new Set();

const notifyLanguageChange = () => {
  listeners.forEach((listener) => {
    try {
      listener(currentLang);
    } catch (err) {
      console.error(err);
    }
  });
};

const applyTranslationValue = (el, value) => {
  if (typeof value === 'string') {
    el.innerHTML = value;
    return;
  }
  if (!value || typeof value !== 'object') return;
  if (Object.prototype.hasOwnProperty.call(value, 'text')) {
    el.innerHTML = value.text;
  }
  if (value.attrs && typeof value.attrs === 'object') {
    Object.entries(value.attrs).forEach(([attr, attrValue]) => {
      if (attrValue === null || attrValue === undefined) {
        el.removeAttribute(attr);
      } else {
        el.setAttribute(attr, attrValue);
      }
    });
  }
};

const applyLanguageToDom = () => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = currentLang;
  const body = document.body;
  if (body) body.setAttribute('data-lang', currentLang);
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const entry = translations[key];
    if (!entry) return;
    const value = entry[currentLang];
    if (value === undefined) return;
    applyTranslationValue(el, value);
  });
};

export const initLanguage = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.has(stored)) {
      currentLang = stored;
    }
  } catch (err) {
    // Ignore storage errors (private mode, etc.)
  }
  applyLanguageToDom();
  notifyLanguageChange();
};

export const registerTranslations = (map) => {
  Object.entries(map).forEach(([key, value]) => {
    if (!translations[key]) {
      translations[key] = {};
    }
    translations[key] = { ...translations[key], ...value };
  });
  applyLanguageToDom();
};

export const getCurrentLanguage = () => currentLang;

export const setLanguage = (lang) => {
  if (!SUPPORTED_LANGS.has(lang) || lang === currentLang) return;
  currentLang = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (err) {
    // Ignore storage errors
  }
  applyLanguageToDom();
  notifyLanguageChange();
};

export const toggleLanguage = () => {
  setLanguage(currentLang === 'mr' ? 'en' : 'mr');
};

export const onLanguageChange = (listener) => {
  if (typeof listener !== 'function') {
    return () => {};
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

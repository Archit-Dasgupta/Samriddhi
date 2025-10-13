import { $, $$, LIT_SCORE, LIT_LEVEL } from './common.js';
import { registerTranslations, getCurrentLanguage, onLanguageChange } from './i18n.js';

const litTranslations = {
  'lit.title': {
    mr: 'आर्थिक साक्षरता चाचणी',
    en: 'Financial Literacy Test',
  },
  'lit.copy': {
    mr: 'बचत, व्याज आणि कर्ज यावर १० झटपट प्रश्न. फक्त डेमो साठी.',
    en: '10 quick questions on savings, interest and borrowing. For demo only.',
  },
  'lit.submit': {
    mr: 'सबमिट करा',
    en: 'Submit',
  },
  'lit.reset': {
    mr: 'रीसेट करा',
    en: 'Reset',
  },
  'lit.q1.prompt': {
    mr: 'जर तुम्ही ₹१०० ८% वार्षिक दराने ठेवले तर १ वर्षानंतर साधारण किती मिळेल?',
    en: 'If you deposit ₹100 at 8% yearly, about how much after 1 year?',
  },
  'lit.q1.opt0': {
    mr: '₹१०८',
    en: '₹108',
  },
  'lit.q1.opt1': {
    mr: '₹११८',
    en: '₹118',
  },
  'lit.q1.opt2': {
    mr: '₹१८०',
    en: '₹180',
  },
  'lit.q2.prompt': {
    mr: 'बचत ठेवण्यासाठी कोणते ठिकाण सुरक्षित आहे?',
    en: 'Which is safer place to keep savings?',
  },
  'lit.q2.opt0': {
    mr: 'गाद्याखाली',
    en: 'Under mattress',
  },
  'lit.q2.opt1': {
    mr: 'बँकेचे बचत खाते',
    en: 'Bank savings account',
  },
  'lit.q2.opt2': {
    mr: 'मित्राकडे',
    en: 'Friend',
  },
  'lit.q3.prompt': {
    mr: 'महिन्याच्या उत्पन्नाच्या जास्तीत जास्त किती टक्के ईएमआय असावा (अनुभवी नियम)?',
    en: 'EMI should be at most what % of monthly income (rule of thumb)?',
  },
  'lit.q3.opt0': {
    mr: '३५%',
    en: '35%',
  },
  'lit.q3.opt1': {
    mr: '६०%',
    en: '60%',
  },
  'lit.q3.opt2': {
    mr: '९०%',
    en: '90%',
  },
  'lit.q4.prompt': {
    mr: 'FD चे पूर्ण रूप काय?',
    en: 'What does FD stand for?',
  },
  'lit.q4.opt0': {
    mr: 'फिक्स्ड डिपॉझिट',
    en: 'Fixed Deposit',
  },
  'lit.q4.opt1': {
    mr: 'फास्ट डिपॉझिट',
    en: 'Fast Deposit',
  },
  'lit.q4.opt2': {
    mr: 'फंड डिपॉझिट',
    en: 'Fund Deposit',
  },
  'lit.q5.prompt': {
    mr: 'RD म्हणजे…',
    en: 'RD means…',
  },
  'lit.q5.opt0': {
    mr: 'रिकरिंग डिपॉझिट',
    en: 'Recurring Deposit',
  },
  'lit.q5.opt1': {
    mr: 'रेट डिपॉझिट',
    en: 'Rate Deposit',
  },
  'lit.q5.opt2': {
    mr: 'रेडी डिपॉझिट',
    en: 'Ready Deposit',
  },
  'lit.q6.prompt': {
    mr: 'जोखमीकडे दुर्लक्ष करून नेहमी जास्त व्याज चांगले असते का?',
    en: 'Higher interest always better, regardless of risk?',
  },
  'lit.q6.opt0': {
    mr: 'बरोबर',
    en: 'True',
  },
  'lit.q6.opt1': {
    mr: 'चुकीचे',
    en: 'False',
  },
  'lit.q7.prompt': {
    mr: 'ईएमआय उशिरा भरल्याने क्रेडिट स्कोअरवर परिणाम होतो का?',
    en: 'Late EMI payment affects credit score?',
  },
  'lit.q7.opt0': {
    mr: 'होय',
    en: 'Yes',
  },
  'lit.q7.opt1': {
    mr: 'नाही',
    en: 'No',
  },
  'lit.q8.prompt': {
    mr: 'चक्रवाढ व्याज म्हणजे…',
    en: 'Compound interest means…',
  },
  'lit.q8.opt0': {
    mr: 'व्याजावर व्याज',
    en: 'Interest on interest',
  },
  'lit.q8.opt1': {
    mr: 'फक्त मूळ रक्कमेवर व्याज',
    en: 'Interest only on principal',
  },
  'lit.q8.opt2': {
    mr: 'दररोजचे बँक शुल्क',
    en: 'Daily bank charges',
  },
  'lit.q9.prompt': {
    mr: 'दुकान वाढवण्यासाठी कार्यभांडवल म्हणजे काय?',
    en: 'To grow a shop, which is working capital?',
  },
  'lit.q9.opt0': {
    mr: 'ऑर्डरसाठी दररोजची रोकड',
    en: 'Daily cash for orders',
  },
  'lit.q9.opt1': {
    mr: 'जमीन खरेदी',
    en: 'Buying land',
  },
  'lit.q9.opt2': {
    mr: 'सोने दागिने',
    en: 'Gold jewellery',
  },
  'lit.q10.prompt': {
    mr: 'खर्च नोंदवण्याचा उत्तम मार्ग कोणता?',
    en: 'Best way to track expenses?',
  },
  'lit.q10.opt0': {
    mr: 'स्मृती',
    en: 'Memory',
  },
  'lit.q10.opt1': {
    mr: 'कॅशबुक',
    en: 'Cashbook',
  },
  'lit.q10.opt2': {
    mr: 'उसने पैसे घेणे',
    en: 'Borrowing',
  },
};

registerTranslations(litTranslations);

const litQuestions = [
  { key: 'q1', answer: 0, optionKeys: ['opt0', 'opt1', 'opt2'] },
  { key: 'q2', answer: 1, optionKeys: ['opt0', 'opt1', 'opt2'] },
  { key: 'q3', answer: 0, optionKeys: ['opt0', 'opt1', 'opt2'] },
  { key: 'q4', answer: 0, optionKeys: ['opt0', 'opt1', 'opt2'] },
  { key: 'q5', answer: 0, optionKeys: ['opt0', 'opt1', 'opt2'] },
  { key: 'q6', answer: 1, optionKeys: ['opt0', 'opt1'] },
  { key: 'q7', answer: 0, optionKeys: ['opt0', 'opt1'] },
  { key: 'q8', answer: 0, optionKeys: ['opt0', 'opt1', 'opt2'] },
  { key: 'q9', answer: 0, optionKeys: ['opt0', 'opt1', 'opt2'] },
  { key: 'q10', answer: 1, optionKeys: ['opt0', 'opt1', 'opt2'] },
];

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

const buildResultMessage = (score, level, lang) => {
  const levelText = levelLabels[level]?.[lang] ?? level;
  const denom = toLocalizedDigits(10, lang);
  return lang === 'mr'
    ? `गुण ${toLocalizedDigits(score, lang)}/${denom} • स्तर: ${levelText}`
    : `Score ${score}/10 • Level: ${levelText}`;
};

let currentSelections = {};

const renderLit = () => {
  const host = $('#litForm');
  if (!host) return;
  const savedSelections = { ...currentSelections };
  host.innerHTML = '';
  const lang = getCurrentLanguage();
  litQuestions.forEach((question, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.margin = '8px 0';

    const prompt = document.createElement('strong');
    const numberSpan = document.createElement('span');
    numberSpan.textContent = `${toLocalizedDigits(index + 1, lang)}. `;
    const textSpan = document.createElement('span');
    textSpan.dataset.i18n = `lit.${question.key}.prompt`;
    const promptEntry = litTranslations[`lit.${question.key}.prompt`];
    textSpan.textContent = promptEntry?.[lang] ?? promptEntry?.en ?? '';
    prompt.appendChild(numberSpan);
    prompt.appendChild(textSpan);
    card.appendChild(prompt);

    question.optionKeys.forEach((optKey, optIndex) => {
      const label = document.createElement('label');
      label.style.display = 'flex';
      label.style.gap = '8px';
      label.style.alignItems = 'center';
      label.style.margin = '6px 0';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `lit_${index}`;
      input.value = String(optIndex);
      if (savedSelections[question.key] === String(optIndex)) {
        input.checked = true;
      }
      input.addEventListener('change', () => {
        if (input.checked) {
          currentSelections[question.key] = input.value;
        }
      });

      const span = document.createElement('span');
      span.dataset.i18n = `lit.${question.key}.${optKey}`;
      const optEntry = litTranslations[`lit.${question.key}.${optKey}`];
      span.textContent = optEntry?.[lang] ?? optEntry?.en ?? '';

      label.appendChild(input);
      label.appendChild(span);
      card.appendChild(label);
    });

    host.appendChild(card);
  });
};

const syncResultMessage = () => {
  const msg = $('#litMsg');
  if (!msg || msg.dataset.status !== 'result') return;
  const score = Number(msg.dataset.score || 0);
  const level = msg.dataset.level || 'Beginner';
  const lang = getCurrentLanguage();
  msg.innerHTML = `<span class="ok">${buildResultMessage(score, level, lang)}</span>`;
};

export const initLiteracy = () => {
  if (!$('#page-lit')) return;
  renderLit();

  const submitBtn = $('#litSubmit');
  const resetBtn = $('#litReset');
  const msg = $('#litMsg');

  submitBtn?.addEventListener('click', () => {
    let score = 0;
    litQuestions.forEach((question, index) => {
      const sel = document.querySelector(`input[name='lit_${index}']:checked`);
      if (sel && Number(sel.value) === question.answer) score++;
    });
    let level = 'Beginner';
    if (score >= 8) level = 'Advanced';
    else if (score >= 5) level = 'Intermediate';
    localStorage.setItem(LIT_SCORE, String(score));
    localStorage.setItem(LIT_LEVEL, level);
    if (msg) {
      msg.dataset.status = 'result';
      msg.dataset.score = String(score);
      msg.dataset.level = level;
      syncResultMessage();
    }
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 800);
  });

  resetBtn?.addEventListener('click', () => {
    localStorage.removeItem(LIT_SCORE);
    localStorage.removeItem(LIT_LEVEL);
    if (msg) {
      msg.textContent = '';
      delete msg.dataset.status;
      delete msg.dataset.score;
      delete msg.dataset.level;
    }
    $$("input[name^='lit_']").forEach((input) => {
      input.checked = false;
    });
    currentSelections = {};
  });

  onLanguageChange(() => {
    renderLit();
    syncResultMessage();
  });
};

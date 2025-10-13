import { $$ } from './common.js';
import { registerTranslations } from './i18n.js';

const toolkitTranslations = {
  'toolkits.title': {
    mr: 'साधनपेटी',
    en: 'Toolkits',
  },
  'toolkits.copy': {
    mr: 'तुमचा व्यवसाय ट्रॅक करण्यासाठी सोपे टेम्पलेट डाउनलोड करा.',
    en: 'Download simple templates to track your business.',
  },
  'toolkits.cashbook.title': {
    mr: 'कॅशबुक (XLSX)',
    en: 'Cashbook (XLSX)',
  },
  'toolkits.cashbook.copy': {
    mr: 'दैनंदिन उत्पन्न आणि खर्चाचा मागोवा.',
    en: 'Daily income & expense tracker.',
  },
  'toolkits.pricing.title': {
    mr: 'किंमत कॅल्क्युलेटर (XLSX)',
    en: 'Pricing Calculator (XLSX)',
  },
  'toolkits.pricing.copy': {
    mr: 'ब्लाउज/अल्टरेशन दर अंदाज करा.',
    en: 'Estimate blouse/alteration prices.',
  },
  'toolkits.daily.title': {
    mr: 'दैनिक ट्रॅकर (CSV)',
    en: 'Daily Tracker (CSV)',
  },
  'toolkits.daily.copy': {
    mr: 'ऑर्डर आणि स्थितीचा मागोवा.',
    en: 'Track orders and status.',
  },
  'toolkits.download': {
    mr: 'डाउनलोड',
    en: 'Download',
  },
};

registerTranslations(toolkitTranslations);

const makeBlob = (name) => {
  let mime = 'text/plain';
  if (name.endsWith('.xlsx')) mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  if (name.endsWith('.csv')) mime = 'text/csv';
  const data = `Samriddhi Toolkit - ${name}\nSample data`;
  return URL.createObjectURL(new Blob([data], { type: mime }));
};

export const initToolkits = () => {
  const buttons = $$('#page-toolkits [data-dl]');
  if (!buttons.length) return;
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-dl');
      if (!name) return;
      const link = document.createElement('a');
      link.href = makeBlob(name);
      link.download = name;
      link.click();
    });
  });
};

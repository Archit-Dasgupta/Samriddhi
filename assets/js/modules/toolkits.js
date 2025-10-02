import { $$ } from './common.js';

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

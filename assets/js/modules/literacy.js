import { $, $$, LIT_SCORE, LIT_LEVEL } from './common.js';

const litQs = [
  ['If you deposit ₹100 at 8% yearly, about how much after 1 year?', ['₹108', '₹118', '₹180'], 0],
  ['Which is safer place to keep savings?', ['Under mattress', 'Bank savings account', 'Friend'], 1],
  ['EMI should be at most what % of monthly income (rule of thumb)?', ['35%', '60%', '90%'], 0],
  ['What does FD stand for?', ['Fixed Deposit', 'Fast Deposit', 'Fund Deposit'], 0],
  ['RD means…', ['Recurring Deposit', 'Rate Deposit', 'Ready Deposit'], 0],
  ['Higher interest always better, regardless of risk?', ['True', 'False'], 1],
  ['Late EMI payment affects credit score?', ['Yes', 'No'], 0],
  ['Compound interest means…', ['Interest on interest', 'Interest only on principal', 'Daily bank charges'], 0],
  ['To grow a shop, which is working capital?', ['Daily cash for orders', 'Buying land', 'Gold jewellery'], 0],
  ['Best way to track expenses?', ['Memory', 'Cashbook', 'Borrowing'], 1],
];

const renderLit = () => {
  const host = $('#litForm');
  if (!host) return;
  host.innerHTML = '';
  litQs.forEach((q, qi) => {
    const box = document.createElement('div');
    box.className = 'card';
    box.style.margin = '8px 0';
    box.innerHTML = `<strong>${qi + 1}. ${q[0]}</strong>` + q[1]
      .map((opt, oi) => `
        <label style="display:flex;gap:8px;align-items:center;margin:6px 0">
          <input type="radio" name="lit_${qi}" value="${oi}"/> <span>${opt}</span>
        </label>
      `)
      .join('');
    host.appendChild(box);
  });
};

export const initLiteracy = () => {
  if (!$('#page-lit')) return;
  renderLit();

  const submitBtn = $('#litSubmit');
  const resetBtn = $('#litReset');
  const msg = $('#litMsg');

  submitBtn?.addEventListener('click', () => {
    let score = 0;
    litQs.forEach((q, qi) => {
      const sel = document.querySelector(`input[name='lit_${qi}']:checked`);
      if (sel && Number(sel.value) === q[2]) score++;
    });
    let level = 'Beginner';
    if (score >= 8) level = 'Advanced';
    else if (score >= 5) level = 'Intermediate';
    localStorage.setItem(LIT_SCORE, String(score));
    localStorage.setItem(LIT_LEVEL, level);
    if (msg) msg.innerHTML = `<span class="ok">Score ${score}/10 • Level: ${level}</span>`;
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 800);
  });

  resetBtn?.addEventListener('click', () => {
    localStorage.removeItem(LIT_SCORE);
    localStorage.removeItem(LIT_LEVEL);
    if (msg) msg.textContent = '';
    $$("input[name^='lit_']").forEach((input) => {
      input.checked = false;
    });
  });
};

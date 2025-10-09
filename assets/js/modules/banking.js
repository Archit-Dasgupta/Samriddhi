import { $, formatINR } from './common.js';

const calcFD = (principal, ratePct, months) => {
  const qRate = ratePct / 100 / 4;
  const years = months / 12;
  return Math.round(principal * Math.pow(1 + qRate, 4 * years));
};

const calcRD = (monthly, ratePct, months) => {
  const r = ratePct / 100 / 12;
  return Math.round(monthly * (((Math.pow(1 + r, months) - 1) / r) * (1 + r)));
};

const calcEMI = (principal, ratePct, months) => {
  const r = ratePct / 100 / 12;
  return principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
};

const updateFD = () => {
  const tenurePick = $('#tenurePick');
  const amountInput = $('#invAmount');
  const fInv = $('#fInv');
  const fRate = $('#fRate');
  const fTenure = $('#fTenure');
  const fMaturity = $('#fMaturity');
  if (!tenurePick || !amountInput || !fInv || !fRate || !fTenure || !fMaturity) return;
  const [monthsRaw, rateRaw] = tenurePick.value.split('|').map(Number);
  const srCitizen = $('#srCitizen')?.value === 'Yes';
  const rate = rateRaw + (srCitizen ? 0.5 : 0);
  const months = Number.isNaN(monthsRaw) ? 0 : monthsRaw;
  const amount = Number(amountInput.value || 0);
  fInv.textContent = formatINR(amount);
  fRate.textContent = `${rate}%`;
  fTenure.textContent = `${months / 12}Y`;
  const maturity = calcFD(amount, rate, months);
  fMaturity.textContent = formatINR(maturity);
};

const updateRD = () => {
  const monthlyInput = $('#rd_amt');
  const monthsInput = $('#rd_months');
  const output = $('#rd_out');
  if (!monthlyInput || !monthsInput || !output) return;
  const monthly = Number(monthlyInput.value || 0);
  const months = Number(monthsInput.value || 0);
  const rate = 7.5;
  const maturity = calcRD(monthly, rate, months);
  output.textContent = formatINR(maturity);
};

const updateEMI = () => {
  const amt = $('#loan_amt');
  const tenure = $('#loan_tenure');
  const rate = $('#loan_rate');
  const income = $('#loan_income');
  const otherEmi = $('#loan_emi');
  const output = $('#emi_out');
  if (!amt || !tenure || !rate || !income || !otherEmi || !output) return;
  const P = Number(amt.value || 0);
  const n = Number(tenure.value || 0);
  const r = Number(rate.value || 0);
  const I = Number(income.value || 0);
  const E = Number(otherEmi.value || 0);
  if (P > 0 && n > 0 && r > 0) {
    const emi = calcEMI(P, r, n);
    output.textContent = formatINR(emi);
    const ok = (emi + E) <= 0.35 * I;
    output.style.color = ok ? '#166534' : '#b91c1c';
  }
};

const initOpenAccount = () => {
  const submit = $('#acc_submit');
  const msg = $('#acc_msg');
  if (!submit) return;
  submit.addEventListener('click', () => {
    const name = ($('#acc_name')?.value || '').trim();
    const city = ($('#acc_city')?.value || '').trim();
    const amount = Number($('#acc_amt')?.value || 0);
    if (!name || !city || amount <= 0) {
      if (msg) msg.innerHTML = '<span class="err">Fill in the required fields.</span>';
      return;
    }
    if (msg) msg.innerHTML = '<span class="ok">Submitted. Our partner bank will reach out soon.</span>';
  });
};

const initLoan = () => {
  const submit = $('#loan_submit');
  const msg = $('#loan_msg');
  if (!submit) return;
  submit.addEventListener('click', () => {
    if (msg) msg.innerHTML = '<span class="ok">You may be eligible. A representative will call you.</span>';
  });
};

export const initBanking = (page) => {
  if (page === 'banking' || page === 'deposits') {
    updateFD();
    updateRD();
    updateEMI();
    $('#tenurePick')?.addEventListener('change', updateFD);
    $('#invAmount')?.addEventListener('input', updateFD);
    $('#srCitizen')?.addEventListener('change', updateFD);
    $('#rd_amt')?.addEventListener('input', updateRD);
    $('#rd_months')?.addEventListener('input', updateRD);
    ['loan_amt', 'loan_tenure', 'loan_rate', 'loan_income', 'loan_emi'].forEach((id) => {
      $('#' + id)?.addEventListener('input', updateEMI);
    });
  }

  if (page === 'open-account') {
    initOpenAccount();
  }

  if (page === 'loan') {
    initLoan();
  }
};

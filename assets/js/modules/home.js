import { $, $$ } from './common.js';
import { registerTranslations, getCurrentLanguage, onLanguageChange } from './i18n.js';

const homeTranslations = {
  'home.hero.image': {
    mr: { attrs: { alt: 'मापनावर लक्ष केंद्रित करणारी टेलर कपड्याची पट्टी मोजत आहे' } },
    en: { attrs: { alt: 'Tailor focusing on measuring fabric at a sewing table' } },
  },
  'home.hero.title': {
    mr: 'समृद्धी तुमच्या शिवण व्यवसायाच्या वाढीसाठी प्रशिक्षण, साधने आणि वित्त एकत्र आणते.',
    en: 'Samriddhi unites training, tools and finance to grow your tailoring business.',
  },
  'home.hero.support': {
    mr: '२५,०००+ बुटीक मालक समृद्धी वापरून किंमत ठरवणे, कार्यभांडवल व्यवस्थापित करणे आणि तणावाविना सतत बुक राहणे शिकत आहेत; तुम्हीही त्यात सहभागी व्हा.',
    en: 'Join 25,000+ boutique owners using Samriddhi to master pricing, manage working capital and stay fully booked without stress.',
  },
  'home.hero.start': {
    mr: 'मोफत कार्यक्रम सुरू करा',
    en: 'Start free program',
  },
  'home.hero.note': {
    mr: 'कार्डची गरज नाही. कधीही रद्द करा.',
    en: 'No card required. Cancel anytime.',
  },
  'home.hero.preview': {
    mr: 'कार्यक्रम पाहा',
    en: 'Preview programs',
  },
  'home.actions.eyebrow': {
    mr: 'झटपट कृती',
    en: 'Quick actions',
  },
  'home.actions.title': {
    mr: 'काही मिनिटांत पुढील आर्थिक पाऊल उचला',
    en: 'Take the next money step in minutes',
  },
  'home.actions.copy': {
    mr: 'आम्ही ध्वनिमुद्रण, चित्रे आणि स्थानिक भाषेच्या सहाय्याने मार्गदर्शन करतो, त्यामुळे काहीही गोंधळात टाकणारे वाटत नाही.',
    en: 'We guide you with voice notes, pictures and local language support so nothing feels confusing.',
  },
  'home.actions.account': {
    mr: 'बचत खाते उघडा',
    en: 'Open a savings account',
  },
  'home.actions.accountCopy': {
    mr: '६ महिन्यांसाठी शून्य शिल्लक आणि घरी येऊन मदत.',
    en: 'Zero balance for 6 months with doorstep help.',
  },
  'home.actions.deposit': {
    mr: 'एफडी किंवा आरडी सुरू करा',
    en: 'Start FD or RD',
  },
  'home.actions.depositCopy': {
    mr: 'रंगीत कॅल्क्युलेटरसह हमखास परतावा.',
    en: 'Guaranteed returns with colourful calculators.',
  },
  'home.actions.loan': {
    mr: 'कर्जासाठी अर्ज करा',
    en: 'Apply for a loan',
  },
  'home.actions.loanCopy': {
    mr: 'कोच सर्वप्रथम ईएमआय साध्या शब्दांत समजावतो.',
    en: 'Coach explains EMI in simple words first.',
  },
  'home.banking.eyebrow': {
    mr: 'आता विश्वासू वित्त भागीदारांसह',
    en: 'Now with trusted finance partners',
  },
  'home.banking.title': {
    mr: 'बँकिंग लवकरच येत आहे: समृद्धीमध्येच कर्ज, विमा आणि बचत तुलना करा.',
    en: 'Banking coming soon: compare loans, insurance & savings inside Samriddhi.',
  },
  'home.banking.copy': {
    mr: 'महिलांसाठी अनुकूल बँका आणि एनबीएफसीकडून निवडक ऑफर्स, सुलभ ऑनबोर्डिंग आणि परतफेड स्मरणपत्रे — हे सर्व अॅपमध्येच मिळवा.',
    en: 'Get curated offers from women-friendly banks and NBFCs, guided onboarding, and repayment reminders—all in-app.',
  },
  'home.banking.cta': {
    mr: 'बँकिंग हब पाहा',
    en: 'Explore the banking hub',
  },
  'home.banking.note': {
    mr: 'महिला को-ऑप बँक, नारी फायनान्स ट्रस्ट आणि इतर भागीदारी.',
    en: 'Partnered with Mahila Co-op Bank, Nari Finance Trust & more.',
  },
  'home.banking.pill': {
    mr: '४८ तासांत कर्ज जुळणी',
    en: 'Loan matches in 48 hrs',
  },
  'home.banking.pointOne': {
    mr: 'दरांची बाजूने तुलना',
    en: 'Side-by-side rate comparisons',
  },
  'home.banking.pointTwo': {
    mr: 'सत्यापित कागदपत्र चेकलिस्ट',
    en: 'Verified paperwork checklists',
  },
  'home.banking.pointThree': {
    mr: 'तुमचा अर्ज तपासण्यासाठी समर्पित कोच',
    en: 'Dedicated coach to review your application',
  },
  'home.benefits.iconOne': {
    mr: { attrs: { 'aria-label': 'कात्री' } },
    en: { attrs: { 'aria-label': 'Scissors' } },
  },
  'home.benefits.titleOne': {
    mr: 'गरजेचेच शिका',
    en: 'Learn what matters',
  },
  'home.benefits.copyOne': {
    mr: 'फोनवर प्राथमिकता देऊन तयार केलेले मराठी, हिंदी आणि इंग्रजी धडे, ग्राहकांच्या ऑर्डरमध्ये सहज बसतात.',
    en: 'Phone-first lessons in Marathi, Hindi and English that slot between customer orders.',
  },
  'home.benefits.pointOne': {
    mr: '७ मिनिटांखाली व्हिडिओ प्लेबुक',
    en: 'Video playbooks under 7 minutes',
  },
  'home.benefits.pointTwo': {
    mr: 'मुद्रित करण्याजोगे कटिंग मार्गदर्शक',
    en: 'Printable cutting guides',
  },
  'home.benefits.iconTwo': {
    mr: { attrs: { 'aria-label': 'कॅल्क्युलेटर' } },
    en: { attrs: { 'aria-label': 'Calculator' } },
  },
  'home.benefits.titleTwo': {
    mr: 'व्यवसाय सुरळीत चालवा',
    en: 'Run your business smoothly',
  },
  'home.benefits.copyTwo': {
    mr: 'कामाचे दर ठरवण्यासाठी, कापड नोंदवण्यासाठी आणि रोकड प्रवाह सांभाळण्यासाठी प्रीमियम कॅल्क्युलेटर आणि टेम्पलेट वापरा.',
    en: 'Use premium calculators and templates to price work, track fabric and manage cash flow.',
  },
  'home.benefits.pointThree': {
    mr: 'स्मार्ट किंमत व नफा कॅल्क्युलेटर',
    en: 'Smart pricing + profit calculator',
  },
  'home.benefits.pointFour': {
    mr: 'स्वयंचलित स्मरणांसह रोकड पुस्तक',
    en: 'Cashbook with auto reminders',
  },
  'home.benefits.iconThree': {
    mr: { attrs: { 'aria-label': 'रुपयांचे कवच' } },
    en: { attrs: { 'aria-label': 'Rupee shield' } },
  },
  'home.benefits.titleThree': {
    mr: 'विश्वासार्ह वित्त भागीदार',
    en: 'Trustworthy finance partners',
  },
  'home.benefits.copyThree': {
    mr: 'मायक्रो व्यवसायांसाठी तयार केलेली बचत, विमा आणि कर्ज उत्पादने सखोल मार्गदर्शनासह समजून घ्या.',
    en: 'Understand savings, insurance and loan products built for micro businesses with guided onboarding.',
  },
  'home.benefits.pointFive': {
    mr: 'निवडक भागीदारी ऑफर्सची तुलना',
    en: 'Compare curated partner offers',
  },
  'home.benefits.pointSix': {
    mr: 'मंजुरीपर्यंत कोचचा हात',
    en: 'Coach handholding until approval',
  },
  'home.snapshot.eyebrow': {
    mr: 'एका अॅपमध्ये तुमचा व्यवसाय भागीदार',
    en: 'Your business partner in one app',
  },
  'home.snapshot.title': {
    mr: 'दुकान सोडता योजना करा, शिका आणि भांडवल मिळवा.',
    en: 'Plan, learn and access capital without leaving your shop.',
  },
  'home.snapshot.copy': {
    mr: 'समृद्धी व्यावहारिक धडे, साधने आणि निवडक भागीदार ऑफर्स एकत्र आणते, त्यामुळे ग्राहकांना आनंदी ठेवत नफा वाढवण्यावर तुम्ही लक्ष केंद्रित करू शकता.',
    en: 'Samriddhi brings together practical lessons, tools and curated partner offers, so you can focus on delighting customers and growing profits.',
  },
  'home.snapshot.pointOne': {
    mr: 'वैयक्तिकृत शिकण्याचे ट्रॅक',
    en: 'Personalised learning tracks',
  },
  'home.snapshot.pointOneCopy': {
    mr: 'तुमच्या उद्दिष्टे आणि प्रगतीनुसार शिफारसी मिळवा.',
    en: 'Get recommendations based on your goals and progress.',
  },
  'home.snapshot.pointTwo': {
    mr: 'साप्ताहिक कोच सूचना',
    en: 'Weekly coach nudges',
  },
  'home.snapshot.pointTwoCopy': {
    mr: 'स्मरणपत्रे, व्हॉट्सअॅप टिप्स आणि सहकाऱ्यांच्या यशकथांनी प्रेरित रहा.',
    en: 'Stay motivated with reminders, WhatsApp tips and peer wins.',
  },
  'home.snapshot.pointThree': {
    mr: 'स्मार्ट कॅल्क्युलेटर',
    en: 'Smart calculators',
  },
  'home.snapshot.pointThreeCopy': {
    mr: 'किंमत, बचत आणि परतफेड निर्णय आत्मविश्वासाने घ्या.',
    en: 'Make confident decisions on pricing, savings and repayments.',
  },
  'home.testimonials.section': {
    mr: { attrs: { 'aria-label': 'शिकणाऱ्यांची प्रशंसापत्रे' } },
    en: { attrs: { 'aria-label': 'Learner testimonials' } },
  },
  'home.testimonials.eyebrow': {
    mr: 'समृद्धीवर विश्वास ठेवणाऱ्या शिकणाऱ्या महिला',
    en: 'Learners who trust Samriddhi',
  },
  'home.testimonials.title': {
    mr: 'शिवण उद्योजिकांच्या पूर्वी आणि नंतरच्या कथा',
    en: 'Before & after stories from tailoring entrepreneurs',
  },
  'home.testimonials.prev': {
    mr: { attrs: { 'aria-label': 'मागील प्रशंसापत्र' } },
    en: { attrs: { 'aria-label': 'Previous testimonial' } },
  },
  'home.testimonials.next': {
    mr: { attrs: { 'aria-label': 'पुढील प्रशंसापत्र' } },
    en: { attrs: { 'aria-label': 'Next testimonial' } },
  },
  'home.testimonials.asha.location': {
    mr: 'मुरबाड, महाराष्ट्र',
    en: 'Murbad, Maharashtra',
  },
  'home.testimonials.asha.quote': {
    mr: '"सणासुदीच्या नियोजकाने दिवाळीच्या गर्दीपूर्वी ब्लाउज दर ठरवायला मदत केली. ग्राहक आता दोन महिने आधी बुकिंग करतात."',
    en: '“The festive planner helped me lock blouse prices ahead of Diwali rush. Clients now book two months early.”',
  },
  'home.testimonials.before': {
    mr: 'पूर्वी',
    en: 'Before',
  },
  'home.testimonials.asha.before': {
    mr: 'महिन्याला ८ उशिराने डिलिव्हरी',
    en: '8 late deliveries / month',
  },
  'home.testimonials.after': {
    mr: 'नंतर',
    en: 'After',
  },
  'home.testimonials.asha.after': {
    mr: '० चुकलेली मुदत',
    en: '0 missed deadlines',
  },
  'home.testimonials.rekha.location': {
    mr: 'जळगाव, महाराष्ट्र',
    en: 'Jalgaon, Maharashtra',
  },
  'home.testimonials.rekha.quote': {
    mr: '"स्मार्ट कॅल्क्युलेटरमुळे आठवड्याला किती बचत करावी हे समजले. मी नवरात्रीपूर्वी माझे कापड कर्ज फेडले."',
    en: '“Smart calculators showed me how much to save weekly. I cleared my fabric loan before Navratri.”',
  },
  'home.testimonials.rekha.before': {
    mr: '₹१८ हजार उच्च व्याजाचे कर्ज',
    en: '₹18k high-interest debt',
  },
  'home.testimonials.rekha.after': {
    mr: '१० आठवड्यांत कर्जमुक्त',
    en: 'Debt-free in 10 weeks',
  },
  'home.testimonials.farida.location': {
    mr: 'उस्मानाबाद, महाराष्ट्र',
    en: 'Osmanabad, Maharashtra',
  },
  'home.testimonials.farida.quote': {
    mr: '"लहान मराठी व्हिडिओमुळे फिटिंगच्या वेळेत शिकणे सोपे झाले. आता मी सणासुदीची बंडल आत्मविश्वासाने विकते."',
    en: '“Short Marathi videos make learning easy between fittings. I upsell festive bundles confidently now.”',
  },
  'home.testimonials.farida.before': {
    mr: '₹१.२ हजार सरासरी ऑर्डर',
    en: '₹1.2k average order',
  },
  'home.testimonials.farida.after': {
    mr: '₹२.१ हजार सरासरी ऑर्डर',
    en: '₹2.1k average order',
  },
  'home.testimonials.shilpa.location': {
    mr: 'अहमदनगर, महाराष्ट्र',
    en: 'Ahmednagar, Maharashtra',
  },
  'home.testimonials.shilpa.quote': {
    mr: '"व्हॉट्सअॅपवरील कोच सूचना माझ्या टीमला जबाबदार ठेवतात. आम्ही दर शुक्रवारी एकत्र धडे पूर्ण करतो."',
    en: '“Coach nudges on WhatsApp keep my team accountable. We finish lessons together every Friday.”',
  },
  'home.testimonials.shilpa.before': {
    mr: '५ पैकी २ कर्मचारी प्रमाणित',
    en: '2/5 staff certified',
  },
  'home.testimonials.shilpa.after': {
    mr: '५ पैकी ५ कर्मचारी प्रमाणित',
    en: '5/5 staff certified',
  },
  'home.testimonials.dots': {
    mr: { attrs: { 'aria-label': 'प्रशंसापत्र स्लाइड निर्देशक' } },
    en: { attrs: { 'aria-label': 'Testimonial slide indicators' } },
  },
  'home.trust.section': {
    mr: { attrs: { 'aria-label': 'भागीदारांचा विश्वास' } },
    en: { attrs: { 'aria-label': 'Partner trust' } },
  },
  'home.trust.copy': {
    mr: 'महिला नेतृत्वाखालील व्यवसायांना बळ देणाऱ्या संस्थांसोबत भागीदारी',
    en: 'Partnered with organisations empowering women-led businesses',
  },
};

const getDotsAriaLabel = (lang, position) => {
  if (lang === 'mr') {
    return `प्रशंसापत्र ${position} दाखवा`;
  }
  return `Show testimonial ${position}`;
};

const getSlidesPerView = () => {
  if (window.matchMedia('(min-width: 1024px)').matches) return 3;
  if (window.matchMedia('(min-width: 768px)').matches) return 2;
  return 1;
};

export const initHome = () => {
  registerTranslations(homeTranslations);

  const btn = $('#btnStart');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }

  const viewport = $('.testimonial-window');
  const track = viewport ? $('.testimonial-track', viewport) : null;
  const cards = track ? $$('.testimonial-card', track) : [];
  const prevBtn = $('.carousel-btn[data-dir="prev"]');
  const nextBtn = $('.carousel-btn[data-dir="next"]');
  const dotsHost = $('.carousel-dots');

  if (!viewport || !track || cards.length === 0 || !prevBtn || !nextBtn || !dotsHost) {
    return;
  }

  let index = 0;
  let maxIndex = Math.max(0, cards.length - getSlidesPerView());
  let autoTimer;
  let scrollTimer;

  const updateDotAriaLabels = (lang) => {
    const dots = dotsHost.querySelectorAll('button');
    dots.forEach((dot, dotIndex) => {
      dot.setAttribute('aria-label', getDotsAriaLabel(lang, dotIndex + 1));
    });
  };

  const unsubscribeLanguage = onLanguageChange((lang) => {
    updateDotAriaLabels(lang);
  });

  const getTrackPadding = () => {
    const styles = window.getComputedStyle(track);
    const paddingLeft = parseFloat(styles.paddingLeft) || 0;
    return paddingLeft;
  };

  const stopAuto = () => {
    if (autoTimer) {
      window.clearInterval(autoTimer);
      autoTimer = undefined;
    }
  };

  const startAuto = () => {
    stopAuto();
    if (maxIndex === 0) return;
    autoTimer = window.setInterval(() => {
      const nextIndex = index >= maxIndex ? 0 : index + 1;
      goTo(nextIndex, { restartAuto: false });
    }, 6000);
  };

  const syncButtons = () => {
    const controlsDisabled = maxIndex === 0;
    prevBtn.disabled = controlsDisabled || index <= 0;
    nextBtn.disabled = controlsDisabled || index >= maxIndex;
  };

  const syncDots = () => {
    const dots = Array.from(dotsHost.querySelectorAll('button'));
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
      dot.setAttribute('aria-selected', dotIndex === index ? 'true' : 'false');
    });
    dotsHost.classList.toggle('hidden', maxIndex === 0);
  };

  const renderDots = () => {
    dotsHost.innerHTML = '';
    if (maxIndex === 0) {
      syncDots();
      return;
    }

    const currentLang = getCurrentLanguage();

    for (let i = 0; i <= maxIndex; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', getDotsAriaLabel(currentLang, i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsHost.append(dot);
    }

    syncDots();
  };

  const goTo = (targetIndex, { smooth = true, restartAuto = true } = {}) => {
    const safeIndex = Math.max(0, Math.min(targetIndex, maxIndex));
    const card = cards[safeIndex];
    if (!card) return;

    index = safeIndex;
    const targetLeft = Math.max(0, card.offsetLeft - getTrackPadding());
    viewport.scrollTo({ left: targetLeft, behavior: smooth ? 'smooth' : 'auto' });
    syncDots();
    syncButtons();

    if (restartAuto) {
      startAuto();
    }
  };

  const updateMetrics = ({ restart = true } = {}) => {
    const slidesPerView = getSlidesPerView();
    maxIndex = Math.max(0, cards.length - slidesPerView);
    if (index > maxIndex) index = maxIndex;
    renderDots();
    updateDotAriaLabels(getCurrentLanguage());
    goTo(index, { smooth: false, restartAuto: false });
    syncButtons();
    if (restart) {
      if (maxIndex === 0) stopAuto();
      else startAuto();
    }
  };

  const updateIndexFromScroll = () => {
    const { scrollLeft } = viewport;
    const paddingLeft = getTrackPadding();
    let nearestIndex = index;
    let minDistance = Number.POSITIVE_INFINITY;
    cards.forEach((card, cardIndex) => {
      const cardOffset = card.offsetLeft - paddingLeft;
      const distance = Math.abs(cardOffset - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = Math.min(cardIndex, maxIndex);
      }
    });
    if (nearestIndex !== index) {
      index = nearestIndex;
      syncDots();
      syncButtons();
    }
  };

  prevBtn.addEventListener('click', () => goTo(index - 1));
  nextBtn.addEventListener('click', () => goTo(index + 1));

  viewport.addEventListener('pointerenter', stopAuto);
  viewport.addEventListener('pointerleave', startAuto);
  viewport.addEventListener('focusin', stopAuto);
  viewport.addEventListener('focusout', startAuto);

  viewport.addEventListener('scroll', () => {
    stopAuto();
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      updateIndexFromScroll();
      startAuto();
    }, 120);
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => updateMetrics(), 150);
  });

  updateMetrics({ restart: false });
  goTo(0, { smooth: false, restartAuto: false });
  startAuto();

  updateDotAriaLabels(getCurrentLanguage());

  window.addEventListener('beforeunload', () => {
    unsubscribeLanguage();
  });
};

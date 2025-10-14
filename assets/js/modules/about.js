import { registerTranslations } from './i18n.js';

const aboutTranslations = {
  'about.hero.eyebrow': {
    en: 'About Us',
    mr: 'आमच्याबद्दल',
  },
  'about.hero.title': {
    en: 'Empowering Rural Women to Build Their Own Future',
    mr: 'ग्रामीण महिलांना स्वतःचे भविष्य घडवण्यासाठी सक्षम करणे',
  },
  'about.hero.subtitle': {
    en: 'Financial literacy and entrepreneurship made simple, local, and trusted.',
    mr: 'आर्थिक साक्षरता आणि उद्यमशीलता — सोपी, स्थानिक आणि विश्वासार्ह.',
  },
  'about.challenge.heading': {
    en: 'The Challenge',
    mr: 'आव्हान',
  },
  'about.challenge.body': {
    en: 'Rural women want to earn more but lack the tools and trust to start. Only 27% of Indians are financially literate (rural: ~23%, vs global 42%). Women in rural Maharashtra who wish to start or scale micro-businesses face low confidence, dependence on others for decisions, and limited tech comfort. As a result, they remain excluded from the formal financial system.',
    mr: 'ग्रामीण महिलांना अधिक कमावायचे आहे, पण सुरुवात करण्यासाठी साधने आणि विश्वासाची कमतरता आहे. भारतातील फक्त २७% लोक आर्थिकदृष्ट्या साक्षर आहेत (ग्रामीण: अंदाजे २३%, जागतिक: ४२%). ग्रामीण महाराष्ट्रातील ज्या महिला सूक्ष्म व्यवसाय सुरू किंवा वाढवू इच्छितात त्यांना कमी आत्मविश्वास, निर्णयांसाठी इतरांवर अवलंबित्व आणि तंत्रज्ञानाशी कमी सोय यांचा सामना करावा लागतो. परिणामी त्या औपचारिक वित्तीय व्यवस्थेतून बाहेरच राहतात.',
  },
  'about.solution.heading': {
    en: 'Our Solution: Samriddhi',
    mr: 'आमचे समाधान: समृद्धी',
  },
  'about.solution.body': {
    en: 'A trusted web platform that turns financial learning into real-world action.',
    mr: 'आर्थिक शिक्षणाचे प्रत्यक्ष कृतीत रूपांतर करणारे एक विश्वासार्ह वेब प्लॅटफॉर्म.',
  },
  'about.solution.feature1': {
    en: 'Step-by-step business toolkits for cash flow, inventory, and pricing',
    mr: 'रोकड प्रवाह, साठा आणि किंमत निर्धारणासाठी चरण-दर-चरण व्यवसाय साधनसामग्री',
  },
  'about.solution.feature2': {
    en: 'Simple bookkeeping that even first-time users can manage',
    mr: 'पहिल्यांदाच वापरणाऱ्यांनाही हाताळता येईल असे साधे बहीखाते',
  },
  'about.solution.feature3': {
    en: 'Government scheme finder to discover grants and subsidies',
    mr: 'अनुदाने आणि सबसिडी शोधण्यासाठी सरकारी योजना शोधक',
  },
  'about.solution.feature4': {
    en: 'Risk-free business simulations in Marathi for hands-on learning',
    mr: 'हाताळणीतील शिक्षणासाठी मराठीत जोखीम-मुक्त व्यवसाय सिम्युलेशन',
  },
  'about.solution.distribution': {
    en: 'Distributed via WhatsApp communities and NGO partnerships for maximum trust and reach.',
    mr: 'कमाल विश्वास आणि पोहोच मिळवण्यासाठी WhatsApp समुदाय आणि स्वयंसेवी संस्थांच्या भागीदारीद्वारे वितरित.',
  },
  'about.traction.heading': {
    en: 'Early Traction: Proof on the Ground',
    mr: 'प्रारंभिक यश: जमिनीवरील पुरावा',
  },
  'about.traction.vrushali.name': {
    en: 'Vrushali',
    mr: 'वृषाली',
  },
  'about.traction.vrushali.copy': {
    en: 'Experienced micro-entrepreneur aiming to grow.',
    mr: 'वाढीसाठी सज्ज अनुभवी सूक्ष्म उद्योजिका.',
  },
  'about.traction.rajshree.name': {
    en: 'Rajshree',
    mr: 'राजश्री',
  },
  'about.traction.rajshree.copy': {
    en: 'Aspiring business starter learning the ropes.',
    mr: 'सर्व पैलू समजून घेणारी उद्योजक होण्याची इच्छुक.',
  },
  'about.traction.proof.community': {
    en: 'Active WhatsApp community',
    mr: 'सक्रिय WhatsApp समुदाय',
  },
  'about.traction.proof.partner': {
    en: 'NGO partner ChildFund',
    mr: 'एनजीओ भागीदार ChildFund',
  },
  'about.traction.proof.pilot': {
    en: '20-day pilot with 30 users',
    mr: '३० वापरकर्त्यांसोबत २० दिवसांची पायलट मोहीम',
  },
  'about.traction.proof.completion': {
    en: '60% module completion rate',
    mr: '६०% मॉड्यूल पूर्णता दर',
  },
  'about.market.heading': {
    en: 'Our Market: Focused and Serviceable',
    mr: 'आमचा बाजार: केंद्रित आणि साध्य करण्याजोगा',
  },
  'about.market.table.metric': {
    en: 'Metric',
    mr: 'सूचकांक',
  },
  'about.market.table.description': {
    en: 'Description',
    mr: 'वर्णन',
  },
  'about.market.table.estimate': {
    en: 'Estimate',
    mr: 'अंदाज',
  },
  'about.market.row.tam.label': {
    en: 'TAM',
    mr: 'TAM',
  },
  'about.market.row.tam.desc': {
    en: 'Rural Maharashtra women aspiring for micro-business',
    mr: 'सूक्ष्म व्यवसायाचे स्वप्न पाहणाऱ्या ग्रामीण महाराष्ट्रातील महिला',
  },
  'about.market.row.tam.est': {
    en: '~6.24M',
    mr: '~6.24M',
  },
  'about.market.row.sam.label': {
    en: 'SAM',
    mr: 'SAM',
  },
  'about.market.row.sam.desc': {
    en: 'Smartphone- and internet-reachable audience',
    mr: 'स्मार्टफोन आणि इंटरनेटद्वारे पोहोचता येणाऱ्या महिला',
  },
  'about.market.row.sam.est': {
    en: '~2.49M',
    mr: '~2.49M',
  },
  'about.market.row.som.label': {
    en: 'SOM (Year 1)',
    mr: 'SOM (पहिले वर्ष)',
  },
  'about.market.row.som.desc': {
    en: 'Realistically targetable users',
    mr: 'व्यावहारिक दृष्ट्या साध्य होऊ शकणाऱ्या वापरकर्त्या',
  },
  'about.market.row.som.est': {
    en: '~43,680',
    mr: '~43,680',
  },
  'about.whynow.heading': {
    en: 'Why Now',
    mr: 'आताच का',
  },
  'about.whynow.body': {
    en: 'Government programs like the Lakhpati Didi, PM Vishwakarma Yojana, and MSME initiatives are accelerating women-led entrepreneurship. The spread of smartphones, internet access, and local-language AI has made digital learning more accessible than ever. Samriddhi uses these trust rails to make business ownership truly inclusive.',
    mr: 'लखपती दीदी, पीएम विश्वकर्मा योजना आणि एमएसएमई उपक्रमांसारखे सरकारी कार्यक्रम महिलांच्या नेतृत्वाखालील उद्यमशीलतेला वेग देत आहेत. स्मार्टफोन, इंटरनेट प्रवेश आणि स्थानिक भाषेतील AI च्या प्रसारामुळे डिजिटल शिक्षण पूर्वीपेक्षा अधिक सुलभ झाले आहे. समृद्धी या विश्वासार्ह मार्गांचा आधार घेऊन व्यवसाय मालकीला खऱ्या अर्थाने समावेशक बनवते.',
  },
  'about.whyus.heading': {
    en: 'Why Us',
    mr: 'आम्हीच का',
  },
  'about.whyus.body': {
    en: 'We are a cross-functional team in finance, policy, product, engineering, and marketing, united by one goal: empowering women to be financially independent.',
    mr: 'आम्ही वित्त, धोरण, उत्पादन, अभियांत्रिकी आणि विपणन या क्षेत्रातील क्रॉस-फंक्शनल टीम आहोत, ज्यांचे एकमेव ध्येय आहे: महिलांना आर्थिकदृष्ट्या स्वावलंबी करणे.',
  },
  'about.whyus.point1': {
    en: 'Clear go-to-market plan',
    mr: 'स्पष्ट बाजारपेठेत जाण्याची योजना',
  },
  'about.whyus.point2': {
    en: 'Active collaborations with NGOs and banks',
    mr: 'एनजीओ आणि बँकांसोबत सक्रिय भागीदारी',
  },
  'about.whyus.point3': {
    en: 'Sustainable roadmap for growth and impact',
    mr: 'वाढ आणि परिणामासाठी टिकाऊ आराखडा',
  },
  'about.vision.heading': {
    en: 'Our Vision',
    mr: 'आमचे ध्येय',
  },
  'about.vision.body': {
    en: 'To make financial literacy and entrepreneurship as natural as using WhatsApp, so every woman, regardless of literacy or location, can start and grow her own business with confidence.',
    mr: 'आर्थिक साक्षरता आणि उद्यमशीलता WhatsApp वापरण्याइतकी सहज करणे, ज्यामुळे प्रत्येक महिला — साक्षरतेची पातळी किंवा स्थान काहीही असो — आत्मविश्वासाने स्वतःचा व्यवसाय सुरू आणि वाढवू शकेल.',
  },
  'about.join.heading': {
    en: 'Join the Movement',
    mr: 'चळवळीत सहभागी व्हा',
  },
  'about.join.body': {
    en: 'Let’s build a future where every woman can be her own entrepreneur.',
    mr: 'चला असे भविष्य घडवूया जिथे प्रत्येक महिला स्वतःची उद्योजिका बनू शकेल.',
  },
  'about.cta.start': {
    en: 'Start Learning',
    mr: 'शिकणे सुरू करा',
  },
  'about.cta.pitch': {
    en: 'View Pitch Deck',
    mr: 'पिच डेक पहा',
  },
};

registerTranslations(aboutTranslations);

const observerOptions = {
  threshold: 0.15,
};

const initFadeIns = () => {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealEls.forEach((el) => observer.observe(el));
};

const initAnchorHints = () => {
  const sectionLinks = document.querySelectorAll('.about-subnav a');
  if (!sectionLinks.length) return;

  sectionLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      const section = document.getElementById(targetId);
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      section.classList.add('pulse');
      window.setTimeout(() => section.classList.remove('pulse'), 800);
    });
  });
};

export const initAbout = () => {
  initFadeIns();
  initAnchorHints();
};

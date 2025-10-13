import { $, formatINR } from './common.js';
import { registerTranslations, getCurrentLanguage, onLanguageChange } from './i18n.js';

const bankingTranslations = {
  'banking.hero.eyebrow': {
    mr: 'बँकिंग सहाय्य',
    en: 'Banking support',
  },
  'banking.hero.title': {
    mr: 'प्रत्येक उद्दिष्टासाठी सोपे आर्थिक पर्याय',
    en: 'Simple money choices for every goal',
  },
  'banking.hero.copy': {
    mr: 'आज तुम्हाला हवा असलेला पर्याय निवडा. प्रत्येक प्रवास ग्रामीण महिला उद्योजिकांसाठी सोप्या भाषेत, रंगीत सूचनांसह आणि चरण-दर-चरण मदतीसह तयार केला आहे.',
    en: 'Pick the option you need today. Every flow uses easy language, colour cues and step-by-step help designed for rural women entrepreneurs.',
  },
  'banking.intro.title': {
    mr: 'अन्वेषणासाठी उत्पादन निवडा',
    en: 'Choose a product to explore',
  },
  'banking.intro.copy': {
    mr: 'कथा, व्हिडिओ आणि फॉर्म असलेल्या सविस्तर पानावर जाण्यासाठी कार्ड टॅप करा किंवा त्या विभागाकडे थेट जा.',
    en: 'Tap a card to jump to that section or open the detailed page with stories, videos and forms.',
  },
  'banking.intro.cta': {
    mr: 'नेहमी विचारले जाणारे प्रश्न पाहा',
    en: 'View FAQs',
  },
  'banking.products.fd.name': {
    mr: 'ठेवी (एफडी)',
    en: 'Fixed Deposit',
  },
  'banking.products.fd.desc': {
    mr: '१-५ वर्षांसाठी अतिरिक्त रक्कम गुंतवा आणि बाजाराच्या जोखमीशिवाय जास्त व्याज मिळवा.',
    en: 'Lock in extra cash for 1-5 years and earn higher interest with zero market risk.',
  },
  'banking.products.fd.primary': {
    mr: 'एफडीसाठी अर्ज करा',
    en: 'Apply for FD',
  },
  'banking.products.fd.secondary': {
    mr: 'परतावा तपासा',
    en: 'Check returns',
  },
  'banking.products.rd.name': {
    mr: 'आवर्ती ठेव (आरडी)',
    en: 'Recurring Deposit',
  },
  'banking.products.rd.desc': {
    mr: 'प्रत्येक महिन्याला थोडी बचत करा आणि सण किंवा शाळेच्या गरजांसाठी निधी सुरक्षित ठेवा.',
    en: 'Save a small amount every month and grow a festival or school fund safely.',
  },
  'banking.products.rd.primary': {
    mr: 'आरडी सुरू करा',
    en: 'Plan an RD',
  },
  'banking.products.rd.secondary': {
    mr: 'परतावा तपासा',
    en: 'Check returns',
  },
  'banking.products.savings.name': {
    mr: 'बचत खाते',
    en: 'Savings Account',
  },
  'banking.products.savings.desc': {
    mr: 'दारात सेवा, यूपीआय आणि स्थानिक भाषेतील पासबुक असलेले खाते निवडा.',
    en: 'Choose an account with doorstep service, UPI and passbooks in local languages.',
  },
  'banking.products.savings.primary': {
    mr: 'खाते उघडा',
    en: 'Open account',
  },
  'banking.products.savings.secondary': {
    mr: 'फायदे तुलना करा',
    en: 'Compare benefits',
  },
  'banking.products.loans.name': {
    mr: 'कर्ज',
    en: 'Loans',
  },
  'banking.products.loans.desc': {
    mr: 'व्यवसाय, घर किंवा शिक्षणासाठी योग्य कर्ज निवडा – प्रत्येक टप्पा कोच सोप्या शब्दांत समजावतो.',
    en: 'Pick the right loan for business, home or study with a coach to explain each step.',
  },
  'banking.products.loans.primary': {
    mr: 'कॉलची विनंती करा',
    en: 'Request a call',
  },
  'banking.products.loans.secondary': {
    mr: 'कर्ज तुलना करा',
    en: 'Compare loans',
  },
  'banking.fd.eyebrow': {
    mr: 'फिक्स्ड डिपॉझिट',
    en: 'Fixed Deposits',
  },
  'banking.fd.title': {
    mr: 'एकरकमी रक्कम आत्मविश्वासाने वाढवा',
    en: 'Grow a lump sum with confidence',
  },
  'banking.fd.copy': {
    mr: 'तुमचे पैसे कसे वाढतात हे पाहण्यासाठी रंगीत कॅल्क्युलेटर वापरा. पुढे जायचे का? “एफडीसाठी अर्ज करा” टॅप करा आणि आम्ही संपूर्ण फॉर्ममध्ये मार्गदर्शन करू.',
    en: 'Use the colourful calculator to see how your money multiplies. Ready to proceed? Tap “Apply for FD” and we walk you through the form.',
  },
  'banking.fd.calc.title': {
    mr: 'एफडी परतावा कॅल्क्युलेटर',
    en: 'FD return calculator',
  },
  'banking.fd.calc.copy': {
    mr: 'रक्कम भरा आणि योजना निवडा. आकडे क्षणात अपडेट होतात.',
    en: 'Enter amount and pick a plan. Numbers update instantly.',
  },
  'banking.fd.calc.amount': {
    mr: 'रक्कम (₹)',
    en: 'Amount (₹)',
  },
  'banking.fd.calc.sr': {
    mr: 'ज्येष्ठ नागरिक?',
    en: 'Sr. citizen?',
  },
  'banking.fd.calc.sr.no': {
    mr: 'नाही',
    en: 'No',
  },
  'banking.fd.calc.sr.yes': {
    mr: 'होय',
    en: 'Yes',
  },
  'banking.fd.calc.plan': {
    mr: 'योजना (कालावधी + दर)',
    en: 'Plan (tenure + rate)',
  },
  'banking.fd.calc.option60': {
    mr: '५ वर्षे • ८.२% वार्षिक',
    en: '5 years • 8.2% p.a.',
  },
  'banking.fd.calc.option36': {
    mr: '३ वर्षे • ७.६% वार्षिक',
    en: '3 years • 7.6% p.a.',
  },
  'banking.fd.calc.option24': {
    mr: '२ वर्षे • ७.३% वार्षिक',
    en: '2 years • 7.3% p.a.',
  },
  'banking.fd.calc.option12': {
    mr: '१ वर्ष • ७.०% वार्षिक',
    en: '1 year • 7.0% p.a.',
  },
  'banking.fd.calc.invest': {
    mr: 'तुमची गुंतवणूक',
    en: 'You invest',
  },
  'banking.fd.calc.rate': {
    mr: 'लागू व्याज',
    en: 'Interest applied',
  },
  'banking.fd.calc.tenure': {
    mr: 'कालावधी',
    en: 'Time period',
  },
  'banking.fd.calc.maturity': {
    mr: 'मॅच्युरिटी रक्कम',
    en: 'Maturity amount',
  },
  'banking.fd.calc.cta': {
    mr: 'एफडीसाठी अर्ज करा',
    en: 'Apply for FD',
  },
  'banking.fd.info.title': {
    mr: 'लोकप्रिय एफडी स्लॅब',
    en: 'Popular FD slabs',
  },
  'banking.fd.info.tenure': {
    mr: 'कालावधी',
    en: 'Tenure',
  },
  'banking.fd.info.general': {
    mr: 'सामान्य दर',
    en: 'General rate',
  },
  'banking.fd.info.senior': {
    mr: 'ज्येष्ठ नागरिक दर',
    en: 'Sr. citizen rate',
  },
  'banking.fd.info.row12': {
    mr: '१२ महिने',
    en: '12 months',
  },
  'banking.fd.info.row24': {
    mr: '२४ महिने',
    en: '24 months',
  },
  'banking.fd.info.row36': {
    mr: '३६ महिने',
    en: '36 months',
  },
  'banking.fd.info.row60': {
    mr: '६० महिने',
    en: '60 months',
  },
  'banking.fd.info.step1': {
    mr: 'आधार आणि पॅन जवळ ठेवा.',
    en: 'Keep Aadhaar and PAN handy.',
  },
  'banking.fd.info.step2': {
    mr: 'रक्कम आणि नामनिर्देशित निवडा.',
    en: 'Select amount and nominee.',
  },
  'banking.fd.info.step3': {
    mr: 'कोच कॉलवर बुकिंगची पुष्टी करतो.',
    en: 'Coach confirms booking on call.',
  },
  'banking.rd.eyebrow': {
    mr: 'आवर्ती ठेवी',
    en: 'Recurring Deposits',
  },
  'banking.rd.title': {
    mr: 'प्रत्येक महिन्यात थोडी थोडी बचत करा',
    en: 'Save little by little each month',
  },
  'banking.rd.copy': {
    mr: 'समृद्धी वापरणाऱ्या महिला शाळेची फी, सण आणि नवीन मशीनसाठी आरडी सुरू करतात. तुमची भविष्यकालीन रक्कम पाहण्यासाठी कॅल्क्युलेटर वापरून पहा.',
    en: 'Women using Samriddhi set up RDs for school fees, festivals and new machines. Try the calculator to see your future pot.',
  },
  'banking.rd.calc.title': {
    mr: 'आरडी वाढ कॅल्क्युलेटर',
    en: 'RD growth calculator',
  },
  'banking.rd.calc.copy': {
    mr: 'प्रत्येक महिन्याची रक्कम आणि महिन्यांची संख्या भरा.',
    en: 'Enter your monthly amount and number of months.',
  },
  'banking.rd.calc.amount': {
    mr: 'मासिक ठेव (₹)',
    en: 'Monthly deposit (₹)',
  },
  'banking.rd.calc.tenureInput': {
    mr: 'कालावधी (महिने)',
    en: 'Tenure (months)',
  },
  'banking.rd.calc.output': {
    mr: 'शेवटी तुम्हाला मिळणारी रक्कम',
    en: 'You receive at the end',
  },
  'banking.rd.calc.cta': {
    mr: 'आरडीसाठी अर्ज करा',
    en: 'Apply for RD',
  },
  'banking.rd.info.title': {
    mr: 'आमच्या बहिणींसाठी हे का फायदेशीर',
    en: 'Why it works for our sisters',
  },
  'banking.rd.info.point1': {
    mr: 'बचत खात्यातून स्वयंचलित कपात – बँकेत अतिरिक्त फेरफटका नाही.',
    en: 'Auto debit from savings – no extra visit to bank.',
  },
  'banking.rd.info.point2': {
    mr: 'आपत्कालीन परिस्थितीत २ महिने थांबवा.',
    en: 'Pause for up to 2 months in emergencies.',
  },
  'banking.rd.info.point3': {
    mr: '२४ महिन्यांनंतर जास्त व्याजदर.',
    en: 'Higher rate when you cross 24 months.',
  },
  'banking.rd.info.point4': {
    mr: 'मराठीत त्वरित एसएमएस पावत्या.',
    en: 'Instant SMS receipts in Marathi.',
  },
  'banking.savings.eyebrow': {
    mr: 'बचत खाती',
    en: 'Savings accounts',
  },
  'banking.savings.title': {
    mr: 'दररोजच्या जीवनाला जुळणारे खाते निवडा',
    en: 'Choose the account that fits your daily life',
  },
  'banking.savings.copy': {
    mr: 'सर्व खात्यांमध्ये दारात मदत आणि स्टेटमेंट समजावण्यासाठी व्हॉइस नोट्स मिळतात.',
    en: 'All accounts include doorstep support and voice notes that explain statements line by line.',
  },
  'banking.savings.starter.title': {
    mr: 'स्टार्टर स्माईल',
    en: 'Starter Smile',
  },
  'banking.savings.starter.copy': {
    mr: 'शून्य शिल्लक हवे असलेल्या पहिल्यांदा बचत करणाऱ्यांसाठी उत्तम.',
    en: 'Perfect for first-time savers who want zero balance.',
  },
  'banking.savings.starter.point1': {
    mr: '१२ महिन्यांपर्यंत किमान शिल्लक नाही',
    en: 'No minimum balance for 12 months',
  },
  'banking.savings.starter.point2': {
    mr: 'दर आठवड्याला व्हॉट्सअॅपवर बचत टिप्स',
    en: 'Weekly saving tips on WhatsApp',
  },
  'banking.savings.starter.point3': {
    mr: 'मराठीत मोफत पासबुक',
    en: 'Free passbook in Marathi',
  },
  'banking.savings.family.title': {
    mr: 'फॅमिली प्लस',
    en: 'Family Plus',
  },
  'banking.savings.family.copy': {
    mr: 'मुलगी, बहीण किंवा सासूशी लाभ शेअर करण्यासाठी उत्तम.',
    en: 'Share benefits with daughter, sister or mother-in-law.',
  },
  'banking.savings.family.point1': {
    mr: 'घरपोच ३ अतिरिक्त एटीएम कार्ड',
    en: '3 extra ATM cards delivered home',
  },
  'banking.savings.family.point2': {
    mr: '₹१ लाखांचे आरोग्य विमा कवच',
    en: 'Health insurance worth ₹1 lakh',
  },
  'banking.savings.family.point3': {
    mr: 'जास्त पैसे काढण्याची मर्यादा',
    en: 'Higher withdrawal limit',
  },
  'banking.savings.business.title': {
    mr: 'बिझनेस एज़',
    en: 'Business Edge',
  },
  'banking.savings.business.copy': {
    mr: 'दुकानदारांसाठी योग्य जे वेगाने पेमेंट आणि ओव्हरड्राफ्ट सांभाळतात.',
    en: 'For shop owners who need quick payments and overdraft.',
  },
  'banking.savings.business.point1': {
    mr: 'मोफत क्यूआर स्टँड व साउंड बॉक्स',
    en: 'Free QR stand and payment sound box',
  },
  'banking.savings.business.point2': {
    mr: '₹५०,००० पर्यंत ओव्हरड्राफ्ट',
    en: 'Overdraft up to ₹50,000',
  },
  'banking.savings.business.point3': {
    mr: 'मराठी किंवा हिंदी एसएमएस अलर्ट',
    en: 'SMS alerts in Marathi or Hindi',
  },
  'banking.savings.ctaPrimary': {
    mr: 'बचत खाते उघडा',
    en: 'Open a savings account',
  },
  'banking.savings.ctaSecondary': {
    mr: 'पायऱ्या आधी जाणून घ्या',
    en: 'Learn steps first',
  },
  'banking.loans.eyebrow': {
    mr: 'कर्ज',
    en: 'Loans',
  },
  'banking.loans.title': {
    mr: 'मित्रवत कोचसोबत सुरक्षितपणे उधार घ्या',
    en: 'Borrow safely with a friendly coach',
  },
  'banking.loans.copy': {
    mr: 'दस्तऐवज, ईएमआय आणि विमा सोप्या भाषेत समजावून सांगतो. कर्ज प्रकार निवडा आणि तयार झाल्यावर कॉलची विनंती करा.',
    en: 'We explain documents, EMI and insurance in simple words. Pick a loan type and request a call when ready.',
  },
  'banking.loans.table.title': {
    mr: 'कर्ज वैशिष्ट्ये',
    en: 'Loan highlights',
  },
  'banking.loans.table.type': {
    mr: 'कर्ज प्रकार',
    en: 'Loan type',
  },
  'banking.loans.table.rate': {
    mr: 'व्याजदर (वार्षिक)',
    en: 'Interest rate (p.a.)',
  },
  'banking.loans.table.tenure': {
    mr: 'कमाल कालावधी',
    en: 'Max tenure',
  },
  'banking.loans.table.rowHome': {
    mr: 'घर सुधारणा',
    en: 'Home improvement',
  },
  'banking.loans.table.tenureHome': {
    mr: '३० वर्षे',
    en: '30 years',
  },
  'banking.loans.table.rowPersonal': {
    mr: 'वैयक्तिक गरजा',
    en: 'Personal needs',
  },
  'banking.loans.table.tenurePersonal': {
    mr: '५ वर्षे',
    en: '5 years',
  },
  'banking.loans.table.rowTwoWheeler': {
    mr: 'दोन चाकी',
    en: 'Two wheeler',
  },
  'banking.loans.table.tenureTwo': {
    mr: '४ वर्षे',
    en: '4 years',
  },
  'banking.loans.table.rowEducation': {
    mr: 'शिक्षण',
    en: 'Education',
  },
  'banking.loans.table.tenureEducation': {
    mr: '८ वर्षे',
    en: '8 years',
  },
  'banking.loans.steps.one': {
    mr: 'फोटो ओळखपत्र, पत्ता पुरावा, ६ महिन्यांचे बँक स्टेटमेंट.',
    en: 'Photo ID, address proof, 6 month bank statement.',
  },
  'banking.loans.steps.two': {
    mr: 'कोच ईएमआय चार्ट समजावून सांगण्यासाठी कॉल करतो.',
    en: 'Coach calls to explain EMI chart.',
  },
  'banking.loans.steps.three': {
    mr: '४८ तासांत दस्तऐवज घरपोच उचल.',
    en: 'Doorstep document pick-up within 48 hours.',
  },
  'banking.loans.form.title': {
    mr: 'कॉलची विनंती करा',
    en: 'Request a call',
  },
  'banking.loans.form.copy': {
    mr: 'ही जलद माहिती भरा. आम्ही तुमच्या पसंतीच्या भाषेत बोलू.',
    en: 'Fill these quick fields. We will speak in your preferred language.',
  },
  'banking.loans.form.name': {
    mr: 'पूर्ण नाव',
    en: 'Full name',
  },
  'banking.loans.form.phone': {
    mr: 'फोन नंबर',
    en: 'Phone number',
  },
  'banking.loans.form.requirement': {
    mr: 'कर्जाची गरज',
    en: 'Loan requirement',
  },
  'banking.loans.form.optionSelect': {
    mr: 'कर्ज प्रकार निवडा',
    en: 'Select loan type',
  },
  'banking.loans.form.city': {
    mr: 'शहर किंवा गाव',
    en: 'City or village',
  },
  'banking.loans.form.submit': {
    mr: 'विनंती पाठवा',
    en: 'Submit request',
  },
  'banking.loans.form.note': {
    mr: 'आम्ही एका कामकाजाच्या दिवसभरात कॉल करतो आणि तुमची माहिती कधीच शेअर करत नाही.',
    en: 'We call within one working day and never share your data.',
  },
  'banking.loans.emi.title': {
    mr: 'द्रुत ईएमआय तपासणी',
    en: 'Quick EMI sense-check',
  },
  'banking.loans.emi.amount': {
    mr: 'कर्जाची रक्कम (₹)',
    en: 'Loan amount (₹)',
  },
  'banking.loans.emi.tenure': {
    mr: 'कालावधी (महिने)',
    en: 'Tenure (months)',
  },
  'banking.loans.emi.rate': {
    mr: 'दर वार्षिक (%)',
    en: 'Rate p.a. (%)',
  },
  'banking.loans.emi.income': {
    mr: 'मासिक उत्पन्न (₹)',
    en: 'Monthly income (₹)',
  },
  'banking.loans.emi.current': {
    mr: 'सध्याचे ईएमआय (₹)',
    en: 'Existing EMIs (₹)',
  },
  'banking.loans.emi.output': {
    mr: 'अंदाजित ईएमआय',
    en: 'Estimated EMI',
  },
  'banking.loans.emi.tip': {
    mr: 'ताण-मुक्त परतफेडीसाठी एकूण ईएमआय उत्पन्नाच्या ३५% पर्यंत ठेवा.',
    en: 'Keep total EMIs within 35% of income for stress-free repayments.',
  },
  'banking.loans.emi.link': {
    mr: 'संपूर्ण कर्ज पानावर जा',
    en: 'Go to full loan page',
  },
  'banking.support.eyebrow': {
    mr: 'वैयक्तिक मदत हवी?',
    en: 'Need personal help?',
  },
  'banking.support.title': {
    mr: 'रक्कम खात्यात येईपर्यंत आम्ही सोबत राहतो',
    en: 'We stay with you till money reaches your account',
  },
  'banking.support.copy': {
    mr: 'मार्गदर्शन कसे हवे आहे ते सांगा. व्हॉइस कॉल, चित्रमय स्पष्टीकरणे आणि स्थानिक भागीदार भेटी उपलब्ध आहेत.',
    en: 'Tell us how to guide you. Voice calls, pictorial explainers and local partner visits are available.',
  },
  'banking.support.call.title': {
    mr: 'मराठी किंवा हिंदीत कॉल',
    en: 'Call in Marathi or Hindi',
  },
  'banking.support.call.copy': {
    mr: 'मैत्रीपूर्ण महिला कोच प्रत्येक प्रश्न संयमाने उत्तर देतात.',
    en: 'Friendly women coaches answer every question patiently.',
  },
  'banking.support.video.title': {
    mr: 'व्हॉट्सअॅप व्हिडिओ समजावणी',
    en: 'WhatsApp video explainers',
  },
  'banking.support.video.copy': {
    mr: 'फॉर्म भरताना आणि स्वाक्षरी करताना कसे करावे हे छोटे क्लिप दाखवतात.',
    en: 'Short clips show how to fill forms and sign documents.',
  },
  'banking.support.doorstep.title': {
    mr: 'घरपोच सहाय्य',
    en: 'Doorstep assistance',
  },
  'banking.support.doorstep.copy': {
    mr: 'भागीदार प्रतिनिधी कागद गोळा करण्यासाठी आणि पडताळणीसाठी तुमच्या दुकानात येतात.',
    en: 'Partner agents visit your shop to pick papers and verify.',
  },
  'banking.faq.eyebrow': {
    mr: 'नेहमी विचारले जाणारे प्रश्न',
    en: 'FAQs',
  },
  'banking.faq.title': {
    mr: 'नेहमी विचारले जाणारे प्रश्न',
    en: 'Frequently asked questions',
  },
  'banking.faq.copy': {
    mr: 'उत्तर पाहण्यासाठी प्रत्येक प्रश्न उघडा. अॅपमध्ये शेअर करण्यायोग्य ऑडिओ नोट्सही उपलब्ध आहेत.',
    en: 'Tap each question to see the answer. Shareable audio notes are also available inside the app.',
  },
  'banking.faq.q1': {
    mr: 'बुकिंगनंतर माझे एफडी किती लवकर सक्रिय होईल?',
    en: 'How soon will my FD be activated after booking?',
  },
  'banking.faq.a1': {
    mr: 'निधी प्राप्त झाल्यानंतर साधारणपणे २ कामकाजाच्या तासांत एफडी सक्रिय होते. एसएमएस आणि व्हॉट्सअॅपवर लगेच डिजिटल पावती मिळते.',
    en: 'Fixed Deposits are usually activated within 2 business hours after we receive funds. A digital receipt arrives on SMS and WhatsApp immediately.',
  },
  'banking.faq.q2': {
    mr: 'हा अंतिम व्याजदर आहे का?',
    en: 'Is this the final interest rate?',
  },
  'banking.faq.a2': {
    mr: 'दर्शविलेले दर मार्गदर्शनासाठी आहेत. अंतिम दर दस्तऐवज आणि भागीदार बँकेच्या मंजुरीवर अवलंबून असतात, जे आमचे कोच समजावून सांगतात.',
    en: 'Rates shown are for guidance. Final rates depend on documents and partner bank approval, which our coach explains.',
  },
  'banking.faq.q3': {
    mr: 'कोच कोणत्या भाषांमध्ये मदत करतात?',
    en: 'What languages do coaches support?',
  },
  'banking.faq.a3': {
    mr: 'मराठी, हिंदी आणि इंग्रजी. तुम्ही याच भाषांमध्ये दस्तऐवजांची विनंतीही करू शकता.',
    en: 'Marathi, Hindi and English. You can request documents in these languages as well.',
  },
  'banking.faq.q4': {
    mr: 'माझ्याशी किती लवकर संपर्क साधला जाईल?',
    en: 'How quickly will someone call me?',
  },
  'banking.faq.a4': {
    mr: 'एका कामकाजाच्या दिवसभरात कॉल येतो. कॉल चुकल्यास आम्ही दोनदा पुन्हा प्रयत्न करतो किंवा व्हॉट्सअॅपवर अपडेट पाठवतो.',
    en: 'Within one working day. If you miss the call, we try again twice or share updates on WhatsApp.',
  },
  'openAccount.hero.eyebrow': {
    mr: 'बचत खाते',
    en: 'Savings account',
  },
  'openAccount.hero.title': {
    mr: 'समृद्धी भागीदार खाते उघडा',
    en: 'Open your Samriddhi partner account',
  },
  'openAccount.hero.copy': {
    mr: 'ही फॉर्म साध्या भाषेत पूर्ण करा. तपशील निश्चित करण्यासाठी आणि प्रक्रिया पूर्ण करण्यासाठी आमचा कोच एका कामकाजाच्या दिवसभरात कॉल करतो.',
    en: 'Complete this form in simple language. Our coach calls within one working day to confirm details and finish the process.',
  },
  'openAccount.hero.stepOne': {
    mr: 'मूलभूत तपशीलांसह फॉर्म भरा',
    en: 'Fill the form with basic details',
  },
  'openAccount.hero.stepTwo': {
    mr: 'दस्तऐवज व्हॉट्सअॅपवर पाठवा किंवा दाखवा',
    en: 'Upload or show documents on WhatsApp',
  },
  'openAccount.hero.stepThree': {
    mr: 'कोच खाते सक्रिय करून पासबुक पाठवतो',
    en: 'Coach activates account & sends passbook',
  },
  'openAccount.hero.cta': {
    mr: 'चरण-दर-चरण मार्गदर्शक पाहा',
    en: 'See step-by-step guide',
  },
  'openAccount.hero.benefits': {
    mr: 'फायदे',
    en: 'Benefits',
  },
  'openAccount.hero.pointOne': {
    mr: '६ महिन्यांसाठी शून्य शिल्लक',
    en: 'Zero balance for 6 months',
  },
  'openAccount.hero.pointTwo': {
    mr: 'दारात डेबिट कार्ड वितरण',
    en: 'Doorstep debit card delivery',
  },
  'openAccount.hero.pointThree': {
    mr: 'प्रत्येक एसएमएसचे अर्थ सांगणाऱ्या व्हॉइस नोट्स',
    en: 'Voice notes explaining every SMS',
  },
  'openAccount.form.title': {
    mr: 'तुमचे तपशील भरा',
    en: 'Fill your details',
  },
  'openAccount.form.copy': {
    mr: 'शेअर केलेली माहिती गोपनीय ठेवली जाते आणि तुमचे खाते तयार करण्यासाठीच वापरली जाते.',
    en: 'Information shared is kept private and used only to set up your account.',
  },
  'openAccount.form.name': {
    mr: 'पूर्ण नाव',
    en: 'Full name',
  },
  'openAccount.form.city': {
    mr: 'गाव / शहर',
    en: 'Village / City',
  },
  'openAccount.form.pan': {
    mr: 'पॅन किंवा मतदार ओळखपत्र',
    en: 'PAN or voter ID',
  },
  'openAccount.form.deposit': {
    mr: 'प्रारंभिक ठेव (₹)',
    en: 'Initial deposit (₹)',
  },
  'openAccount.form.accountType': {
    mr: 'खात्याचा प्रकार',
    en: 'Account type',
  },
  'openAccount.form.language': {
    mr: 'प्राधान्य भाषा',
    en: 'Preferred language',
  },
  'openAccount.form.langMarathi': {
    mr: 'मराठी',
    en: 'Marathi',
  },
  'openAccount.form.langHindi': {
    mr: 'हिंदी',
    en: 'Hindi',
  },
  'openAccount.form.langEnglish': {
    mr: 'इंग्रजी',
    en: 'English',
  },
  'openAccount.form.submit': {
    mr: 'अर्ज सबमिट करा',
    en: 'Submit application',
  },
  'openAccount.form.back': {
    mr: 'बँकिंगकडे परत जा',
    en: 'Back to banking',
  },
  'openAccount.help.title': {
    mr: 'पुढे काय होईल?',
    en: 'What happens next?',
  },
  'openAccount.help.stepOne': {
    mr: 'कोच तपशील आणि नामनिर्देशित पडताळण्यासाठी कॉल करतो.',
    en: 'Coach calls you to verify details and nominee.',
  },
  'openAccount.help.stepTwo': {
    mr: 'आधार आणि पॅनचे फोटो व्हॉट्सअॅपवर शेअर करा.',
    en: 'Share photos of Aadhaar and PAN on WhatsApp.',
  },
  'openAccount.help.stepThree': {
    mr: 'व्हिडिओ किंवा घरपोच केवायसीने सक्रियता पूर्ण होते.',
    en: 'Video or doorstep KYC completes activation.',
  },
  'openAccount.help.noteTitle': {
    mr: 'मदत हवी आहे?',
    en: 'Need assistance?',
  },
  'openAccount.help.noteCopy': {
    mr: 'मराठी किंवा हिंदी सहाय्यासाठी १८००-२६६-२२३३ (सकाळी ९ ते संध्याकाळी ७) वर कॉल करा.',
    en: 'Call 1800-266-2233 (9am-7pm) for Marathi or Hindi support.',
  },
  'openAccount.cta.title': {
    mr: 'नंतर एफडी किंवा आरडी सुरू करण्यास तयार?',
    en: 'Ready to start FD or RD later?',
  },
  'openAccount.cta.copy': {
    mr: 'बचत खाते सक्रिय झाल्यावर शाखेत न जाता अॅपमधून ठेवी सुरू करू शकता.',
    en: 'Once the savings account is active you can open deposits through the app without visiting the branch.',
  },
  'openAccount.cta.button': {
    mr: 'ठेवीच्या योजना पाहा',
    en: 'See deposit plans',
  },
  'savings.hero.eyebrow': {
    mr: 'बचत खाते',
    en: 'Savings accounts',
  },
  'savings.hero.title': {
    mr: 'तुमचे खाते उघडण्याची सोपी पावले',
    en: 'Easy steps to open your account',
  },
  'savings.hero.copy': {
    mr: 'फॉर्म भरण्यापूर्वी हे मार्गदर्शक वापरा. भाषा साधी ठेवतो आणि कुठे अडकलात तर आम्ही फोनवर मदत करतो.',
    en: 'Use this guide before filling the form. We keep the language simple and support you on call if you get stuck.',
  },
  'savings.hero.ctaPrimary': {
    mr: 'अर्ज फॉर्मकडे जा',
    en: 'Go to application form',
  },
  'savings.hero.ctaSecondary': {
    mr: 'बँकिंग हबकडे परत जा',
    en: 'Back to banking hub',
  },
  'savings.hero.cardTitle': {
    mr: 'तुम्हाला काय मिळते',
    en: 'What you get',
  },
  'savings.hero.cardPointOne': {
    mr: 'पहिल्या ६ महिन्यांसाठी शून्य शिल्लक',
    en: 'Zero balance for first 6 months',
  },
  'savings.hero.cardPointTwo': {
    mr: 'पासबुक आणि एसएमएस मराठी/हिंदीमध्ये',
    en: 'Passbook and SMS in Marathi / Hindi',
  },
  'savings.hero.cardPointThree': {
    mr: 'घरपोच कार्ड वितरण',
    en: 'Doorstep card delivery',
  },
  'savings.steps.title': {
    mr: 'ही तीन सोपी पावले अनुसरा',
    en: 'Follow these three simple steps',
  },
  'savings.steps.one.number': {
    mr: '१',
    en: '1',
  },
  'savings.steps.one.title': {
    mr: 'कागदपत्रे तयार ठेवा',
    en: 'Keep documents ready',
  },
  'savings.steps.one.copy': {
    mr: 'आधार, पॅन (किंवा मतदार ओळखपत्र) आणि एक फोटो. दुकान असल्यास एखाद्या बिल किंवा परवान्याची प्रत ठेवा.',
    en: 'Aadhaar, PAN (or voter ID) and one photo. For shop owners, carry a bill or license copy.',
  },
  'savings.steps.two.number': {
    mr: '२',
    en: '2',
  },
  'savings.steps.two.title': {
    mr: 'लहान फॉर्म भरा',
    en: 'Fill the short form',
  },
  'savings.steps.two.copy': {
    mr: 'तुमचे नाव, गाव, फोन आणि प्रारंभिक ठेव शेअर करा. आमचा कोच पुष्टीसाठी कॉल करतो.',
    en: 'Share your name, village, phone and initial deposit. Our coach calls to confirm.',
  },
  'savings.steps.three.number': {
    mr: '३',
    en: '3',
  },
  'savings.steps.three.title': {
    mr: 'कोचसोबत प्रक्रिया पूर्ण करा',
    en: 'Finish with a coach',
  },
  'savings.steps.three.copy': {
    mr: 'स्वाक्षरी आणि पासबुक देण्यासाठी आम्ही व्हिडिओ किंवा घरपोच भेट ठरवतो.',
    en: 'We schedule video or doorstep visit to collect signature and deliver passbook.',
  },
  'savings.benefits.title': {
    mr: 'ग्रामीण महिला उद्योजिकांसाठी डिझाइन केलेले फायदे',
    en: 'Benefits designed for rural women entrepreneurs',
  },
  'savings.benefits.pointOne': {
    mr: 'स्टेटमेंटची ओळीनुसार समजावणारे व्हॉइस नोट्स',
    en: 'Voice notes explain statements line by line',
  },
  'savings.benefits.pointTwo': {
    mr: 'निवडक गावांमध्ये रोकड उचल सेवा उपलब्ध',
    en: 'Cash pickup service available in select villages',
  },
  'savings.benefits.pointThree': {
    mr: 'पंधरवड्याला डिजिटल पेमेंटवर गट प्रशिक्षण',
    en: 'Group training on digital payments every fortnight',
  },
  'savings.benefits.noteTitle': {
    mr: 'अजून वेळ हवा आहे?',
    en: 'Need more time?',
  },
  'savings.benefits.noteCopy': {
    mr: 'कधीही तुमची प्रगती जतन करा. मराठी किंवा हिंदीत प्रश्न विचारण्यासाठी फॉर्मवरील व्हॉट्सअॅप चिन्हावर टॅप करा.',
    en: 'Save your progress anytime. Click the WhatsApp icon on the form to ask questions in Marathi or Hindi.',
  },
  'savings.faq.title': {
    mr: 'सामान्य प्रश्न',
    en: 'Common questions',
  },
  'savings.faq.q1': {
    mr: 'मला शाखेत जावे लागेल का?',
    en: 'Do I need to visit the branch?',
  },
  'savings.faq.a1': {
    mr: 'नाही. बहुतेक खाते व्हिडिओ केवायसी किंवा भागीदार बँकेच्या घरपोच भेटीतून उघडली जातात.',
    en: 'No. Most accounts are opened through video KYC or doorstep visit by a partner bank representative.',
  },
  'savings.faq.q2': {
    mr: 'पहिल्यांदा किती ठेव करावी?',
    en: 'How much should I deposit first?',
  },
  'savings.faq.a2': {
    mr: 'तुम्ही ₹५०० पासून सुरू करू शकता. सक्रिय झाल्यानंतर पहिल्या ६ महिन्यांसाठी शून्य शिल्लक परवानगी आहे.',
    en: 'You can start with ₹500. Zero balance is allowed for the first 6 months after activation.',
  },
  'savings.faq.q3': {
    mr: 'मी कुटुंबातील सदस्य जोडू शकते का?',
    en: 'Can I add family members?',
  },
  'savings.faq.a3': {
    mr: 'होय. ३ पर्यंत कुटुंबीयांना विनाशुल्क डेबिट कार्ड मिळू शकतात. त्यांची नावे फॉर्ममध्ये नमूद करा.',
    en: 'Yes. Up to 3 family members can get debit cards at no extra cost. Mention their names in the form.',
  },
  'savings.faq.cta': {
    mr: 'अर्ज करण्यास तयार',
    en: 'Ready to apply',
  },
  'deposits.hero.eyebrow': {
    mr: 'ठेवी',
    en: 'Deposits',
  },
  'deposits.hero.title': {
    mr: 'एफडी आणि आरडीने सुरक्षितपणे बचत वाढवा',
    en: 'Grow savings safely with FDs and RDs',
  },
  'deposits.hero.copy': {
    mr: 'योजना निवडा, रंगीत कार्डमध्ये परतावा तपासा आणि ५ मिनिटांत तपशील सबमिट करा. आमच्या महिला कोच तुम्हाला कॉलवर मार्गदर्शन करतात.',
    en: 'Choose a plan, check returns in colourful cards and submit details in under 5 minutes. Our women coaches guide you on call.',
  },
  'deposits.hero.stepOne.title': {
    mr: 'तुमची योजना निवडा',
    en: 'Pick your plan',
  },
  'deposits.hero.stepOne.copy': {
    mr: 'कॅल्क्युलेटरसह कालावधी आणि रक्कम ठरवा.',
    en: 'Decide tenure and amount with the calculator.',
  },
  'deposits.hero.stepTwo.title': {
    mr: 'दस्तऐवज शेअर करा',
    en: 'Share documents',
  },
  'deposits.hero.stepTwo.copy': {
    mr: 'आधार, पॅन आणि नामनिर्देशित तपशील तयार ठेवा.',
    en: 'Keep Aadhaar, PAN and nominee details ready.',
  },
  'deposits.hero.stepThree.title': {
    mr: 'कॉलवर पुष्टी करा',
    en: 'Confirm on call',
  },
  'deposits.hero.stepThree.copy': {
    mr: 'कोच ठेवीची बुकिंग करून व्हॉट्सअॅपवर पावती शेअर करतो.',
    en: 'Coach books the deposit and sends receipt on WhatsApp.',
  },
  'deposits.hero.ctaPrimary': {
    mr: 'एफडी परतावा मोजा',
    en: 'Calculate FD returns',
  },
  'deposits.hero.ctaSecondary': {
    mr: 'बँकिंग आढाव्याकडे परत जा',
    en: 'Back to banking overview',
  },
  'deposits.fd.title': {
    mr: 'एफडी नियोजक',
    en: 'Fixed Deposit planner',
  },
  'deposits.fd.copy': {
    mr: 'मॅच्युरिटीवर तुम्हाला किती मिळेल ते पाहा. ज्येष्ठ नागरिकांना आपोआप अतिरिक्त व्याज मिळते.',
    en: 'See how much you earn at maturity. Senior citizens get extra interest automatically.',
  },
  'deposits.fd.calc.title': {
    mr: 'एफडी कॅल्क्युलेटर',
    en: 'FD calculator',
  },
  'deposits.fd.calc.copy': {
    mr: 'रक्कम किंवा योजना बदला आणि परतावा तात्काळ पहा.',
    en: 'Change amount or plan to update your return instantly.',
  },
  'deposits.fd.calc.amount': {
    mr: 'रक्कम (₹)',
    en: 'Amount (₹)',
  },
  'deposits.fd.calc.sr': {
    mr: 'ज्येष्ठ नागरिक?',
    en: 'Sr. citizen?',
  },
  'deposits.fd.calc.sr.no': {
    mr: 'नाही',
    en: 'No',
  },
  'deposits.fd.calc.sr.yes': {
    mr: 'होय',
    en: 'Yes',
  },
  'deposits.fd.calc.plan': {
    mr: 'योजना निवडा',
    en: 'Choose plan',
  },
  'deposits.fd.calc.option60': {
    mr: '५ वर्षे • ८.२% वार्षिक',
    en: '5 years • 8.2% p.a.',
  },
  'deposits.fd.calc.option36': {
    mr: '३ वर्षे • ७.६% वार्षिक',
    en: '3 years • 7.6% p.a.',
  },
  'deposits.fd.calc.option24': {
    mr: '२ वर्षे • ७.३% वार्षिक',
    en: '2 years • 7.3% p.a.',
  },
  'deposits.fd.calc.option12': {
    mr: '१ वर्ष • ७.०% वार्षिक',
    en: '1 year • 7.0% p.a.',
  },
  'deposits.fd.calc.invest': {
    mr: 'तुमची गुंतवणूक',
    en: 'You invest',
  },
  'deposits.fd.calc.rate': {
    mr: 'लागू व्याज',
    en: 'Interest applied',
  },
  'deposits.fd.calc.tenure': {
    mr: 'कालावधी',
    en: 'Time period',
  },
  'deposits.fd.calc.maturity': {
    mr: 'मॅच्युरिटी रक्कम',
    en: 'Maturity amount',
  },
  'deposits.fd.calc.cta': {
    mr: 'एफडी अर्ज सुरू करा',
    en: 'Start FD application',
  },
  'deposits.fd.info.title': {
    mr: 'सबमिट करण्यापूर्वी यादी',
    en: 'Checklist before you submit',
  },
  'deposits.fd.info.point1': {
    mr: 'आधार आणि पॅन झेरॉक्स',
    en: 'Aadhaar and PAN photocopies',
  },
  'deposits.fd.info.point2': {
    mr: 'नामनिर्देशिताचे नाव आणि नाते',
    en: 'Nominee name and relationship',
  },
  'deposits.fd.info.point3': {
    mr: 'मॅच्युरिटीसाठी बँक खाते',
    en: 'Bank account for maturity credit',
  },
  'deposits.fd.info.point4': {
    mr: 'ट्रान्स्फरसाठी सुरुवातीची रक्कम तयार',
    en: 'Initial amount ready for transfer',
  },
  'deposits.fd.info.noteTitle': {
    mr: 'मदत हवी आहे?',
    en: 'Need help?',
  },
  'deposits.fd.info.noteCopy': {
    mr: 'मराठी किंवा हिंदी सहाय्यासाठी १८००-२६६-२२३३ (सकाळी ९ ते संध्याकाळी ७) वर कॉल करा.',
    en: 'Call 1800-266-2233 (9am-7pm) for Marathi or Hindi assistance.',
  },
  'deposits.rd.title': {
    mr: 'आवर्ती ठेव नियोजक',
    en: 'Recurring Deposit planner',
  },
  'deposits.rd.copy': {
    mr: 'प्रत्येक महिन्याला थोडी रक्कम वाचवा आणि तुमचा उद्दिष्ट निधी तयार करा. वर्षातून दोनदा दंडाविना थांबा.',
    en: 'Save a small amount every month and build your goal fund. Pause twice in a year without penalty.',
  },
  'deposits.rd.calc.title': {
    mr: 'आरडी कॅल्क्युलेटर',
    en: 'RD calculator',
  },
  'deposits.rd.calc.copy': {
    mr: 'दर महिन्याला किती बचत करू शकता आणि कालावधी भरा.',
    en: 'Enter how much you can save every month and duration.',
  },
  'deposits.rd.calc.amount': {
    mr: 'मासिक ठेव (₹)',
    en: 'Monthly deposit (₹)',
  },
  'deposits.rd.calc.tenure': {
    mr: 'कालावधी (महिने)',
    en: 'Tenure (months)',
  },
  'deposits.rd.calc.output': {
    mr: 'मॅच्युरिटी रक्कम',
    en: 'Maturity amount',
  },
  'deposits.rd.calc.cta': {
    mr: 'आरडी अर्ज सुरू करा',
    en: 'Start RD application',
  },
  'deposits.rd.info.title': {
    mr: 'समृद्धीसह आरडी फायदे',
    en: 'RD benefits with Samriddhi',
  },
  'deposits.rd.info.point1': {
    mr: 'तुमच्या बचत खात्यातून स्वयंचलित डेबिट',
    en: 'Auto-debit from your savings account',
  },
  'deposits.rd.info.point2': {
    mr: 'देय तारखेच्या ३ दिवस आधी व्हॉट्सअॅप स्मरणपत्रे',
    en: 'WhatsApp reminders 3 days before due date',
  },
  'deposits.rd.info.point3': {
    mr: '२४ महिन्यांनंतर प्राधान्य व्याजदर',
    en: 'Preferential rates above 24 months',
  },
  'deposits.rd.info.point4': {
    mr: 'पासबुक नोंदी मराठी किंवा हिंदीत',
    en: 'Passbook entries in Marathi or Hindi',
  },
  'deposits.rd.info.noteTitle': {
    mr: 'दस्तऐवज',
    en: 'Documents',
  },
  'deposits.rd.info.noteCopy': {
    mr: 'एफडीप्रमाणेच. ऑटो-डेबिट मँडेटसाठी रद्द केलेला चेक जोडा.',
    en: 'Same as FD. Add cancelled cheque for auto-debit mandate.',
  },
  'deposits.support.title': {
    mr: 'ठेव कोचशी बोला',
    en: 'Talk to a deposit coach',
  },
  'deposits.support.copy': {
    mr: 'तुमचे नाव आणि फोन शेअर करा. प्रक्रिया पूर्ण करण्यासाठी कोच एका कामकाजाच्या दिवसभरात कॉल करतो.',
    en: 'Share your name and phone. A coach calls back within one working day to complete the process.',
  },
  'deposits.support.name': {
    mr: 'तुमचे नाव',
    en: 'Your name',
  },
  'deposits.support.phone': {
    mr: 'फोन नंबर',
    en: 'Phone number',
  },
  'deposits.support.language': {
    mr: 'प्राधान्य भाषा',
    en: 'Preferred language',
  },
  'deposits.support.submit': {
    mr: 'कॉलची विनंती करा',
    en: 'Request a call',
  },
  'loan.hero.eyebrow': {
    mr: 'कर्ज',
    en: 'Loans',
  },
  'loan.hero.title': {
    mr: 'काळजी घेणाऱ्या व्यावसायिक कर्जासाठी अर्ज करा',
    en: 'Apply for a caring business loan',
  },
  'loan.hero.copy': {
    mr: 'योग्यता तपासण्यासाठी तीन प्रश्नांची उत्तरे द्या. स्वाक्षरी करण्यापूर्वी महिला कोच मराठी किंवा हिंदीत ईएमआय समजावून सांगते.',
    en: 'Answer three questions to check fit. A women coach explains EMI in Marathi or Hindi before you sign anything.',
  },
  'loan.hero.stepOne': {
    mr: 'कर्जाची गरज आणि रक्कम सांगा',
    en: 'Share loan need and amount',
  },
  'loan.hero.stepTwo': {
    mr: 'कोच ईएमआय आणि दस्तऐवज समजावून सांगतो',
    en: 'Coach calls to explain EMI & documents',
  },
  'loan.hero.stepThree': {
    mr: 'घरपोच भेट कागदपत्रे पूर्ण करते',
    en: 'Doorstep pickup finishes paperwork',
  },
  'loan.hero.cardTitle': {
    mr: 'दस्तऐवज चेकलिस्ट',
    en: 'Documents checklist',
  },
  'loan.hero.cardPointOne': {
    mr: 'आधार + पॅन',
    en: 'Aadhaar + PAN',
  },
  'loan.hero.cardPointTwo': {
    mr: 'बँक स्टेटमेंट (६ महिने)',
    en: 'Bank statement (6 months)',
  },
  'loan.hero.cardPointThree': {
    mr: 'दुकानाचा फोटो किंवा भाडेकरार',
    en: 'Shop photo or rent agreement',
  },
  'loan.form.title': {
    mr: 'पात्रता तपासा',
    en: 'Check eligibility',
  },
  'loan.form.copy': {
    mr: 'ही डेमो प्रक्रिया आहे. संदेश पाहण्यासाठी सबमिट करा.',
    en: 'This is a demo flow. Submit to see confirmation message.',
  },
  'loan.form.name': {
    mr: 'पूर्ण नाव',
    en: 'Full name',
  },
  'loan.form.phone': {
    mr: 'फोन नंबर',
    en: 'Phone number',
  },
  'loan.form.amount': {
    mr: 'आवश्यक कर्ज रक्कम',
    en: 'Loan amount needed',
  },
  'loan.form.submit': {
    mr: 'पात्रता तपासा',
    en: 'Check eligibility',
  },
  'loan.form.back': {
    mr: 'बँकिंगकडे परत जा',
    en: 'Back to banking',
  },
  'loan.help.title': {
    mr: 'जलद टिप्स',
    en: 'Quick tips',
  },
  'loan.help.pointOne': {
    mr: 'एकूण ईएमआय मासिक उत्पन्नाच्या ३५% मध्ये ठेवा.',
    en: 'Keep total EMI within 35% of monthly income.',
  },
  'loan.help.pointTwo': {
    mr: 'जास्त चांगल्या दरासाठी सह-अर्जदार (पती/पालक) जोडा.',
    en: 'Add a co-applicant (spouse/parent) for better rates.',
  },
  'loan.help.pointThree': {
    mr: 'विमा संरक्षण आणीबाणीमध्ये कुटुंबाला मदत करते.',
    en: 'Insurance cover protects family in case of emergencies.',
  },
  'loan.help.cta': {
    mr: 'बचत योजना हवी आहे?',
    en: 'Need savings plan instead?',
  },
  'loan.extra.title': {
    mr: 'समृद्धी सदस्य आहात का?',
    en: 'Already a Samriddhi member?',
  },
  'loan.extra.copy': {
    mr: 'प्राधान्य प्रक्रियेसाठी आणि पूर्व-मंजूर ऑफरसाठी कॉलवर तुमचा सदस्य आयडी शेअर करा.',
    en: 'Share your member ID on call for priority processing and pre-approved offers.',
  },
  'loan.extra.cta': {
    mr: 'प्रोफाइल अपडेट करा',
    en: 'Update profile',
  },
};

registerTranslations(bankingTranslations);

const inlineMessages = {
  openAccount: {
    error: {
      mr: 'कृपया आवश्यक तपशील भरा.',
      en: 'Fill in the required fields.',
    },
    success: {
      mr: 'सबमिट झाले. आमची भागीदार बँक लवकरच संपर्क साधेल.',
      en: 'Submitted. Our partner bank will reach out soon.',
    },
  },
  loan: {
    success: {
      mr: 'तुम्ही पात्र असू शकता. प्रतिनिधी लवकरच कॉल करेल.',
      en: 'You may be eligible. A representative will call you.',
    },
  },
};

const resolveMessage = (scope, key, lang = getCurrentLanguage()) => {
  const entry = inlineMessages[scope]?.[key];
  if (!entry) return '';
  return entry[lang] ?? entry.en ?? '';
};

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

  const setMessage = (type, lang = getCurrentLanguage()) => {
    if (!msg) return;
    if (!type) {
      msg.innerHTML = '';
      delete msg.dataset.status;
      return;
    }
    const text = resolveMessage('openAccount', type, lang);
    if (!text) {
      msg.innerHTML = '';
      delete msg.dataset.status;
      return;
    }
    const cls = type === 'success' ? 'ok' : 'err';
    msg.innerHTML = `<span class="${cls}">${text}</span>`;
    msg.dataset.status = type;
  };

  if (msg) {
    onLanguageChange((lang) => {
      const status = msg.dataset.status;
      if (status) setMessage(status, lang);
    });
  }

  if (!submit) return;
  submit.addEventListener('click', () => {
    const name = ($('#acc_name')?.value || '').trim();
    const city = ($('#acc_city')?.value || '').trim();
    const amount = Number($('#acc_amt')?.value || 0);
    if (!name || !city || amount <= 0) {
      setMessage('error');
      return;
    }
    setMessage('success');
  });
};

const initLoan = () => {
  const submit = $('#loan_submit');
  const msg = $('#loan_msg');

  const setMessage = (lang = getCurrentLanguage()) => {
    if (!msg) return;
    const text = resolveMessage('loan', 'success', lang);
    if (!text) {
      msg.innerHTML = '';
      delete msg.dataset.status;
      return;
    }
    msg.innerHTML = `<span class="ok">${text}</span>`;
    msg.dataset.status = 'success';
  };

  if (msg) {
    onLanguageChange((lang) => {
      if (msg.dataset.status === 'success') setMessage(lang);
    });
  }

  if (!submit) return;
  submit.addEventListener('click', () => {
    setMessage();
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

import { $, COURSE_STATE } from './modules/common.js';
import { getCurrentLanguage, onLanguageChange } from './modules/i18n.js';

const VIDEO_ID = 'eqrSpQ_80-I';
const AUTOPLAY_DELAY = 5000;
const STORAGE_VERSION = 'v2';

const mrCopy = {
  'label.module': 'मॉड्यूल',
  'label.complete': 'पूर्ण',
  'label.video': 'व्हिडिओ',
  'label.quiz': 'प्रश्नमंजुषा',
  'label.completed': 'पूर्ण झाले',
  'label.markComplete': 'पूर्ण म्हणून चिन्हांकित करा',
  'label.nextUp': 'पुढील धडा',
  'label.saved': 'जतन झाले',
  'label.submitQuiz': 'प्रश्नमंजुषा सबमिट करा',
  'label.retry': 'पुन्हा प्रयत्न करा',
  'label.delete': 'हटवा',
  'label.passMessage': 'छान काम—तुम्ही तयार असाल तेव्हा ही प्रश्नमंजुषा पूर्ण म्हणून चिन्हांकित करा.',
  'label.failMessage': 'उत्तीर्ण होण्यासाठी ७०% गुणांची गरज आहे. उत्तरांमध्ये बदल करा आणि पुन्हा प्रयत्न करा.',
  'label.scorePrefix': 'तुम्हाला {score}% गुण मिळाले ({correct} पैकी {total}).',
  'toast.nextUp': 'पुढे: {title}',
  'progress.card': '{done} / {total} पूर्ण',
  'module-1.title': 'परिचय, प्रारंभिक गुंतवणूक आणि खर्चनिर्धारण',
  'module-1-video-1.title': 'व्हिडिओ १ · व्यवसायाची ओळख',
  'module-1-video-1.meta': '५ मिनिटे',
  'module-1-video-1.description': 'टिकाऊ व्यवसाय उभारण्यासाठी आवश्यक मूलभूत तत्त्वे आणि सुरुवातीच्या निर्णयांमध्ये वित्तीय भूमिकेची ओळख करून घ्या.',
  'module-1-video-1.transcript': 'हा धडा व्यवसाय मॉडेल कसे कार्य करते, मूल्य प्रस्ताव कसे ठरवायचे आणि दीर्घकालीन वाढीसाठी कोणत्या प्रारंभिक कृती मदत करतात हे स्पष्ट करतो.',
  'module-1-quiz-1.title': 'प्रश्नमंजुषा १ · व्यवसायाच्या मूलभूत गोष्टी',
  'module-1-quiz-1.meta': '५ प्रश्न',
  'module-1-quiz-1.description': 'गुंतवणुकीकडे जाण्यापूर्वी तुम्ही मुख्य व्यवसाय संकल्पना स्पष्ट करू शकता याची खात्री करा.',
  'm1q1.prompt': 'जर तुम्ही फक्त कुटुंबासाठी कपडे शिवत असाल तर ते व्यवसाय ठरते का?',
  'm1q1.option0': 'होय',
  'm1q1.option1': 'नाही',
  'm1q1.explanation': 'व्यवसाय ग्राहकांना वस्तू किंवा सेवा मूल्याच्या बदल्यात देतो.',
  'm1q2.prompt': 'व्यवसायातील एक महत्त्वाचे नियम कोणते?',
  'm1q2.option0': 'कमाईपेक्षा जास्त खर्च करा',
  'm1q2.option1': 'खर्चापेक्षा अधिक कमाई करा',
  'm1q2.explanation': 'कमाई खर्चापेक्षा जास्त ठेवली तर व्यवसाय टिकून राहतो.',
  'module-1-video-2.title': 'व्हिडिओ २ · गुंतवणूक आणि खर्च',
  'module-1-video-2.meta': '६ मिनिटे',
  'module-1-video-2.description': 'गुंतवणुकीचे पर्याय कसे तपासायचे, खर्च कसे तुलना करायचे आणि व्यवसाय टिकवणाऱ्या पद्धती कशा निवडायच्या ते शिका.',
  'module-1-video-2.transcript': 'आम्ही गुंतवणुकीची गरज कशी अंदाजावी, खर्च रचना कशी तोलावी आणि अल्पकालीन खर्च दीर्घकालीन मूल्याशी कसे संतुलित करावे हे पाहतो.',
  'module-1-quiz-2.title': 'प्रश्नमंजुषा २ · गुंतवणूक आणि खर्च मूलतत्त्वे',
  'module-1-quiz-2.meta': '२ प्रश्न',
  'module-1-quiz-2.description': 'गुंतवणूक आणि खर्च संकल्पना प्रत्यक्ष परिदृश्यांवर लागू करा.',
  'm1q2-1.prompt': 'खालीलपैकी निश्चित खर्च कोणता?',
  'm1q2-1.option0': 'शिलाई मशीन',
  'm1q2-1.option1': 'कापड',
  'm1q2-1.explanation': 'शिलाई मशीन हा एकदाच होणारा खर्च असून ऑर्डर संख्येनुसार बदलत नाही.',
  'm1q2-2.prompt': 'मीना १०,०००₹ ला मशीन घेते आणि २,०००₹ कापडावर खर्च करते, एकूण खर्च किती?',
  'm1q2-2.option0': '₹८,०००',
  'm1q2-2.option1': '₹१२,०००',
  'm1q2-2.explanation': 'निश्चित खर्च (₹१०,०००) आणि चल खर्च (₹२,०००) मिळून ₹१२,००० होतात.',
  'module-1-quiz-3.title': 'प्रश्नमंजुषा ३ · मॉड्यूल १ ज्ञान चाचणी',
  'module-1-quiz-3.meta': '५ प्रश्न',
  'module-1-quiz-3.description': 'मॉड्यूल १ मधील प्रमुख संकल्पना रोजच्या कामात लागू करता येतात याची खात्री करा.',
  'm1q3-1.prompt': 'संरेखन कार्यशाळांपूर्वी काय करावे?',
  'm1q3-1.option0': 'टीपा गोळा करून यशोगाथा आणि अडथळे आधी शेअर करा',
  'm1q3-1.option1': 'बैठकीतच अभिप्राय गोळा करा',
  'm1q3-1.option2': 'फक्त सादरीकरणांवर लक्ष द्या',
  'm1q3-1.explanation': 'पूर्वीच अंतर्दृष्टी शेअर केल्याने समस्यांचे निराकरण करण्याची तयारी होते.',
  'm1q3-2.prompt': 'कोणते वर्तन संघांमध्ये विश्वास निर्माण करते?',
  'm1q3-2.option0': 'प्रगतीबद्दल पारदर्शक अद्यतने आणि जबाबदाऱ्या स्पष्ट करणे',
  'm1q3-2.option1': 'योजना अंतिम होईपर्यंत गुप्त ठेवणे',
  'm1q3-2.option2': 'संपूर्ण समन्वय बाहेरच्या सल्लागारांकडे देणे',
  'm1q3-2.explanation': 'पारदर्शकता आणि जबाबदारी प्रक्रियेवर विश्वास ठेवतात.',
  'm1q3-3.prompt': 'अडथळे कसे उचलावेत?',
  'm1q3-3.option0': 'टीपांमध्ये कारणे व कृती लिहून जलद पुनरावलोकनासाठी पाठवा',
  'm1q3-3.option1': 'त्रैमासिक बैठकीची वाट पाहा',
  'm1q3-3.option2': 'अनेक अपयशांनंतरच उचल करा',
  'm1q3-3.explanation': 'तत्काळ संदर्भासह उचलल्याने गती राखली जाते.',
  'm1q3-4.prompt': 'मॉड्यूल पूर्ण झाल्याचे संकेत काय?',
  'm1q3-4.option0': 'व्हिडिओ पाहणे, प्रश्नमंजुषा उत्तीर्ण होणे आणि नोंदी साठवणे',
  'm1q3-4.option1': 'फक्त व्हिडिओ पाहणे',
  'm1q3-4.option2': 'फक्त प्रश्नमंजुषा उत्तीर्ण होणे',
  'm1q3-4.explanation': 'पूर्णता म्हणजे शिकणे आणि मूल्यमापन दोन्ही.',
  'm1q3-5.prompt': 'जलद यश साजरे का करावे?',
  'm1q3-5.option0': 'ते हवामान-केंद्रित विचारांना बळ देतात',
  'm1q3-5.option1': 'ते फक्त ऐच्छिक आहेत',
  'm1q3-5.option2': 'ते दीर्घकालीन नियोजनाची जागा घेतात',
  'm1q3-5.explanation': 'जलद यश प्रोत्साहन देते आणि दीर्घकालीन लक्ष टिकवते.',
  'module-2.title': 'पैशाच्या मूलभूत गोष्टी',
  'module-2-video-1.title': 'व्हिडिओ १ · उत्पन्न, खर्च आणि नफा',
  'module-2-video-1.meta': '५ मिनिटे',
  'module-2-video-1.description': 'उत्पन्न, खर्च आणि नफा एकमेकांशी कसे जोडलेले आहेत हे समजून घ्या, त्यामुळे तुमच्या शिवण सेवांचा नफा तपासता येईल.',
  'module-2-video-1.transcript': 'आम्ही प्राथमिक उत्पन्न ताळेबंद समजावतो, शिवण व्यवसायातील सामान्य खर्च दाखवतो आणि लहान उद्योगांसाठी नफा कसा मोजायचा ते शिकवतो.',
  'module-2-quiz-1.title': 'प्रश्नमंजुषा १ · उत्पन्न, खर्च आणि नफा मूलतत्त्वे',
  'module-2-quiz-1.meta': '४ प्रश्न',
  'module-2-quiz-1.description': 'शिवण व्यवसायासाठी उत्पन्न, खर्च आणि नफा काढता येतो याची खात्री करा.',
  'm2q1-1.prompt': 'शिवणकामातून ₹५००० मिळतात आणि ₹३२०० सामग्री व भाड्यावर खर्च होतात, नफा किती?',
  'm2q1-1.option0': '₹१८००',
  'm2q1-1.option1': '₹३२००',
  'm2q1-1.option2': '₹५०००',
  'm2q1-1.explanation': 'नफा = उत्पन्न – एकूण खर्च: ५००० – ३२०० = १८००.',
  'm2q1-2.prompt': 'शिवण दुकानासाठी खालीलपैकी निश्चित खर्च कोणता?',
  'm2q1-2.option0': 'दुकानाचे मासिक भाडे',
  'm2q1-2.option1': 'प्रत्येक कपड्यासाठी वापरला जाणारा धागा',
  'm2q1-2.option2': 'प्रत्येक शर्टचे बटण',
  'm2q1-2.explanation': 'भाडे ऑर्डर संख्येप्रमाणे बदलत नाही, म्हणून ते निश्चित खर्च आहे.',
  'm2q1-3.prompt': 'दैनंदिन खर्च लिहून ठेवणे का महत्वाचे?',
  'm2q1-3.option0': 'खर्चामुळे नफा कमी होतो का हे दिसते',
  'm2q1-3.option1': 'ग्राहकांशी बोलण्याची गरज संपते',
  'm2q1-3.option2': 'कापडाची नासाडी वाढते',
  'm2q1-3.explanation': 'खर्च नोंदविल्याने नफा टिकतो का आणि कुठे बचत शक्य आहे हे कळते.',
  'm2q1-4.prompt': 'एकूण नफा काढण्यासाठी योग्य सूत्र कोणते?',
  'm2q1-4.option0': 'उत्पन्न – वस्तूंचा खर्च',
  'm2q1-4.option1': 'वस्तूंचा खर्च – उत्पन्न',
  'm2q1-4.option2': 'उत्पन्न + संचालन खर्च',
  'm2q1-4.explanation': 'एकूण नफा = उत्पन्न – वस्तूंचा खर्च.',
  'module-2-video-2.title': 'व्हिडिओ २ · किंमत ठरवणे आणि खर्च नियंत्रण',
  'module-2-video-2.meta': '६ मिनिटे',
  'module-2-video-2.description': 'कपड्यांना स्पर्धात्मक किंमत लावताना साहित्य आणि मजुरी खर्च कसे नियंत्रणात ठेवायचे ते शिका.',
  'module-2-video-2.transcript': 'धडा किंमत सूत्रे, पुरवठादारांशी वाटाघाटी आणि हंगामी मागणीसाठी राखीव निधी तयार करणे यावर लक्ष केंद्रित करतो.',
  'module-2-quiz-2.title': 'प्रश्नमंजुषा २ · किंमत ठरवणे आणि खर्च नियंत्रण',
  'module-2-quiz-2.meta': '५ प्रश्न',
  'module-2-quiz-2.description': 'शिवण व्यवसायात नफा देणाऱ्या किंमती आणि खर्च व्यवस्थापनाची सराव करा.',
  'm2q2-1.prompt': 'एका ब्लाउजवर कापड ₹३०० आणि मजुरी ₹१५० खर्च येतो. तुम्हाला ४०% मार्जिन हवे आहे, विक्री किंमत किती ठरवाल?',
  'm2q2-1.option0': '₹६३०',
  'm2q2-1.option1': '₹४५०',
  'm2q2-1.option2': '₹१८०',
  'm2q2-1.explanation': 'एकूण खर्च ४५०. ४०% म्हणजे १८० अधिक, त्यामुळे किंमत ₹६३०.',
  'm2q2-2.prompt': 'चल खर्च सर्वात चांगल्या प्रकारे कोणती कृती नियंत्रित करते?',
  'm2q2-2.option0': 'सवलतीसाठी धागा मोठ्या प्रमाणात खरेदी करणे',
  'm2q2-2.option1': 'मशीन रात्रीभर सुरु ठेवणे',
  'm2q2-2.option2': 'पुरवठादारांची बिले दुर्लक्षित करणे',
  'm2q2-2.explanation': 'मोठ्या खरेदीवरील सवलतीमुळे प्रति कपडा चल खर्च कमी होतो.',
  'm2q2-3.prompt': 'किंमत ठरवताना मजुरीचा वेळ समाविष्ट करणे का आवश्यक?',
  'm2q2-3.option0': 'यामुळे स्वतःला व कर्मचाऱ्यांना योग्य मोबदला मिळतो',
  'm2q2-3.option1': 'याचा नफ्यावर परिणाम होत नाही',
  'm2q2-3.option2': 'हे फक्त घाऊक ऑर्डरसाठी महत्वाचे आहे',
  'm2q2-3.explanation': 'मजुरी वगळल्यास वास्तविक खर्च कमी दाखवला जातो आणि नफा घटतो.',
  'm2q2-4.prompt': 'मागणी कमी झाल्यावर टेलर काय करू शकतात?',
  'm2q2-4.option0': 'सवलती द्या किंवा नवीन उत्पादने आणा',
  'm2q2-4.option1': 'भाडे वाढवा',
  'm2q2-4.option2': 'कल दुर्लक्षित करा',
  'm2q2-4.explanation': 'प्रमोशन किंवा नवीन उत्पादने मंदीच्या काळात रोख प्रवाह टिकवतात.',
  'm2q2-5.prompt': 'ओव्हरहेड खर्च व्यवस्थापनाचे उदाहरण कोणते?',
  'm2q2-5.option0': 'दुसऱ्या टेलरसोबत कार्यक्षेत्र सामायिक करणे',
  'm2q2-5.option1': 'नको असलेली सजावट खरेदी करणे',
  'm2q2-5.option2': 'वीज बिले दुर्लक्षित करणे',
  'm2q2-5.explanation': 'सामायिक जागेमुळे भाडे व युटिलिटी खर्च कमी होतो.',
  'module-2-video-3.title': 'व्हिडिओ ३ · हिशेब लिहिण्याची ओळख',
  'module-2-video-3.meta': '६ मिनिटे',
  'module-2-video-3.description': 'शिवण व्यवहार नोंदवण्याचे मूलभूत तत्त्वे शिका, त्यामुळे रोख प्रवाह आत्मविश्वासाने ट्रॅक करता येईल.',
  'module-2-video-3.transcript': 'आपण साधी नोंदणी साधने, दैनंदिन रोकड लॉग आणि व्यवसाय व वैयक्तिक खर्च वेगळे ठेवण्याच्या टिप्स पाहतो.',
  'module-2-quiz-3.title': 'प्रश्नमंजुषा ३ · हिशेब मूलतत्त्वे',
  'module-2-quiz-3.meta': '४ प्रश्न',
  'module-2-quiz-3.description': 'शिवण व्यवहार अचूकपणे नोंदवून संघटित राहता येते याची पुष्टी करा.',
  'm2q3-1.prompt': 'दररोज प्रत्येक विक्री आणि खर्च कोणत्या वहित नोंदवला पाहिजे?',
  'm2q3-1.option0': 'रोकड वहि',
  'm2q3-1.option1': 'अतिथी वहि',
  'm2q3-1.option2': 'फक्त साठा वहि',
  'm2q3-1.explanation': 'रोकड वहि दैनंदिन रोकड ये-जा दाखवते.',
  'm2q3-2.prompt': 'व्यवसाय आणि वैयक्तिक खर्च वेगळे का लिहावेत?',
  'm2q3-2.option0': 'यामुळे व्यवसायाची खरी कामगिरी दिसते',
  'm2q3-2.option1': 'कर दुप्पट होतात',
  'm2q3-2.option2': 'नफा लपतो',
  'm2q3-2.explanation': 'खर्च वेगळे ठेवल्याने नफा स्पष्ट दिसतो आणि अहवाल सोपे होतात.',
  'm2q3-3.prompt': 'मालमत्ता, कर्जे आणि मालकाची भांडवल दाखवणारे दस्तऐवज कोणते?',
  'm2q3-3.option0': 'ताळेबंद',
  'm2q3-3.option1': 'उत्पन्न पत्रक',
  'm2q3-3.option2': 'मार्केटिंग योजना',
  'm2q3-3.explanation': 'ताळेबंद एखाद्या वेळी व्यवसायाचे मालमत्ता व कर्ज दाखवतो.',
  'm2q3-4.prompt': 'विक्री नोंदवणे विसरू नये यासाठी काय मदत करते?',
  'm2q3-4.option0': 'प्रत्येक व्यवहारानंतर लगेच नोंद करणे',
  'm2q3-4.option1': 'फक्त आठवड्याचा सारांश लिहिणे',
  'm2q3-4.option2': 'पावत्या खिशात ठेवणे',
  'm2q3-4.explanation': 'वेळीच नोंदी केल्याने अचूकता राहते आणि चुका कमी होतात.',
  'module-2-quiz-4.title': 'प्रश्नमंजुषा ४ · मॉड्यूल २ चाचणी',
  'module-2-quiz-4.meta': '५ प्रश्न',
  'module-2-quiz-4.description': 'मॉड्यूल २ मधील पैशाच्या संकल्पना जलद पुनरावलोकन करा.',
  'm2q4-1.prompt': 'नफा उत्तम प्रकारे कोणता विधान स्पष्ट करतो?',
  'm2q4-1.option0': 'सर्व खर्च भरल्यानंतर उरलेले पैसे',
  'm2q4-1.option1': 'ग्राहकांकडून आलेली एकूण रोकड',
  'm2q4-1.option2': 'बँकेतून घेतलेली कर्जे',
  'm2q4-1.explanation': 'सर्व खर्च भरल्यानंतर जे उरते तेच नफा.',
  'm2q4-2.prompt': 'प्रत्येक महिन्याला बचत बाजूला ठेवण्याचे प्रमुख कारण काय?',
  'm2q4-2.option0': 'आकस्मिक प्रसंग आणि वाढीमध्ये गुंतवणूक हाताळण्यासाठी',
  'm2q4-2.option1': 'कापडाची नासाडी वाढवण्यासाठी',
  'm2q4-2.option2': 'नोंदवलेले उत्पन्न कमी करण्यासाठी',
  'm2q4-2.explanation': 'बचत आकस्मिकता आणि भविष्यातील गुंतवणुकीसाठी आधार देते.',
  'm2q4-3.prompt': 'किंमतीचे पुनरावलोकन करताना कोणती संख्या खर्चाशी तुलना करावी?',
  'm2q4-3.option0': 'प्रत्येक वस्तूची विक्री किंमत',
  'm2q4-3.option1': 'कर्मचाऱ्यांची संख्या',
  'm2q4-3.option2': 'दुकानाचे आकारमान',
  'm2q4-3.explanation': 'विक्री किंमत आणि एकूण खर्च तुलना करून प्रत्येक वस्तू नफा देते का ते कळते.',
  'm2q4-4.prompt': 'रसीद जपून ठेवणे का महत्वाचे?',
  'm2q4-4.option0': 'त्या खर्च नोंदींचे पुरावे म्हणून मदत करतात',
  'm2q4-4.option1': 'त्या फक्त पसारा वाढवतात',
  'm2q4-4.option2': 'त्या पूर्णपणे बिलेची जागा घेतात',
  'm2q4-4.explanation': 'रसीद नोंदींची खात्री करतात आणि तपासणी सुलभ करतात.',
  'm2q4-5.prompt': 'टेलरने कापडाचे दर कमी केले; विक्री जसच्या तसा राहिल्यास कोणता आर्थिक निर्देशक सुधारतो?',
  'm2q4-5.option0': 'नफा मार्जिन',
  'm2q4-5.option1': 'ग्राहकांची संख्या',
  'm2q4-5.option2': 'दुकानाचे ठिकाण',
  'm2q4-5.explanation': 'खर्च कमी आणि विक्री समान राहिल्यास नफा मार्जिन वाढतो.',
  'module-3.title': 'बचत, नियोजन आणि वाढ',
  'module-3-video-1.title': 'व्हिडिओ १ · बचतीचे महत्त्व',
  'module-3-video-1.meta': '५ मिनिटे',
  'module-3-video-1.description': 'शिस्तबद्ध बचत कशा प्रकारे शिवण व्यवसायाला मंद हंगामात टिकवून ठेवते आणि नवीन ऑर्डरसाठी तयार ठेवते ते समजून घ्या.',
  'module-3-video-1.transcript': 'आम्ही बचत लक्ष्य ठरवणे, दैनंदिन खर्चापासून रोकड वेगळी ठेवणे आणि मागणी कमी झाल्यावर दुकानाचे संरक्षण करणाऱ्या सवयी विकसित करणे पाहतो.',
  'module-3-quiz-1.title': 'प्रश्नमंजुषा १ · बचत मूलतत्त्वे',
  'module-3-quiz-1.meta': '५ प्रश्न',
  'module-3-quiz-1.description': 'तुमच्या शिवण व्यवसायासाठी बचत कुशन तयार करून जपता येते याची खात्री करा.',
  'm3q1-1.prompt': 'शिवण व्यवसायाने दर महिन्याला पैसे बाजूला का ठेवावेत?',
  'm3q1-1.option0': 'आकस्मिकता किंवा मंद हंगाम शांतपणे हाताळण्यासाठी',
  'm3q1-1.option1': 'नको असलेली बँक फी भरण्यासाठी',
  'm3q1-1.option2': 'खर्च नोंदवणे टाळण्यासाठी',
  'm3q1-1.explanation': 'बचत शांत काळ आणि अनपेक्षित खर्चांचा परिणाम कमी करते.',
  'm3q1-2.prompt': 'व्यवसायाची बचत साठवण्याचे सुरक्षित ठिकाण कोणते?',
  'm3q1-2.option0': 'व्यवसायासाठी वेगळे बँक किंवा मोबाईल मनी खाते',
  'm3q1-2.option1': 'वैयक्तिक रोकडसोबत पाकिटात ठेवणे',
  'm3q1-2.option2': 'कापडांच्या कपाटात लपवून ठेवणे',
  'm3q1-2.explanation': 'वेगळी खाती बचत सुरक्षित आणि स्पष्ट ठेवतात.',
  'm3q1-3.prompt': 'लहान दुकानासाठी पहिला बचत उद्देश काय असावा?',
  'm3q1-3.option0': 'किमान एका महिन्याचा चालू खर्च झाकणे',
  'm3q1-3.option1': 'महाग सजावट खरेदी करणे',
  'm3q1-3.option2': 'भाडे दुप्पट करणे',
  'm3q1-3.explanation': 'एका महिन्याचा खर्च भागवणारी बचत मजबूत सुरक्षा देते.',
  'm3q1-4.prompt': 'बचतीची प्रगती किती वेळाने तपासावी?',
  'm3q1-4.option0': 'बुककीपिंग करताना साप्ताहिक किंवा मासिक',
  'm3q1-4.option1': 'फक्त वर्षातून एकदा',
  'm3q1-4.option2': 'विक्री स्थिर असल्यास कधीही नाही',
  'm3q1-4.explanation': 'नियमित पुनरावलोकन सवय टिकवते आणि लक्ष्य साध्य करते.',
  'm3q1-5.prompt': 'बचत स्वयंचलित करणारी सवय कोणती?',
  'm3q1-5.option0': 'प्रत्येक विक्रीचा ठराविक टक्केवारी बचतीत वळवणे',
  'm3q1-5.option1': 'वर्षाच्या शेवटी बचत सुरू करणे',
  'm3q1-5.option2': 'बचतीसाठी पैसे उधार घेणे',
  'm3q1-5.explanation': 'स्वयंचलित हस्तांतरणामुळे बचत सातत्याने वाढते.',
  'module-3-video-2.title': 'व्हिडिओ २ · पुनर्गुंतवणूक आणि वाढ',
  'module-3-video-2.meta': '६ मिनिटे',
  'module-3-video-2.description': 'नफा चांगल्या साधनांमध्ये, लोकांमध्ये आणि मार्केटिंगमध्ये कसा गुंतवायचा ते शिका, त्यामुळे व्यवसाय सातत्याने वाढू शकतो.',
  'module-3-video-2.transcript': 'आम्ही योग्य सुधारणा निवडणे, रोकड प्रवाह विश्लेषणानंतर गुंतवणूक करणे आणि प्रत्येक बदलाचा परिणाम मोजणे यावर चर्चा करतो.',
  'module-3-quiz-2.title': 'प्रश्नमंजुषा २ · पुनर्गुंतवणूक आणि वाढ',
  'module-3-quiz-2.meta': '५ प्रश्न',
  'module-3-quiz-2.description': 'टेलरिंगमधील नफा वापरून वाढीचे निर्णय कसे घ्याल याचा आढावा घ्या.',
  'm3q2-1.prompt': 'नफा पुन्हा व्यवसायात गुंतवण्याचे मुख्य कारण काय?',
  'm3q2-1.option0': 'क्षमता आणि भविष्यातील कमाई वाढवण्यासाठी',
  'm3q2-1.option1': 'वैयक्तिक खर्च वाढवण्यासाठी',
  'm3q2-1.option2': 'उत्पन्न नोंदवणे टाळण्यासाठी',
  'm3q2-1.explanation': 'पुनर्गुंतवणूक व्यवसाय मजबूत करून दीर्घकालीन उत्पन्न वाढवते.',
  'm3q2-2.prompt': 'कोणती गुंतवणूक उत्पादनाचा वेग वाढवण्याची शक्यता अधिक?',
  'm3q2-2.option0': 'जलद शिवण मशीन खरेदी करणे',
  'm3q2-2.option1': 'दुकानात सजावट वाढवणे',
  'm3q2-2.option2': 'फक्त अतिरिक्त भेटकार्ड छापणे',
  'm3q2-2.explanation': 'उत्तम उपकरण अधिक ऑर्डर पूर्ण करण्यात मदत करतात.',
  'm3q2-3.prompt': 'गुंतवणूक करण्यापूर्वी काय तपासावे?',
  'm3q2-3.option0': 'रोकड प्रवाह आणि येणारे खर्च',
  'm3q2-3.option1': 'फक्त सोशल मीडियावरील लाईक्स',
  'm3q2-3.option2': 'स्पर्धकांचे वैयक्तिक जीवन',
  'm3q2-3.explanation': 'रोकड प्रवाह समजल्यास गुंतवणूक परवडेल का हे कळते.',
  'm3q2-4.prompt': 'गुंतवणूक यशस्वी झाली का हे कसे मोजाल?',
  'm3q2-4.option0': 'उत्पन्न, ग्राहक किंवा उत्पादन वेगातील बदल ट्रॅक करा',
  'm3q2-4.option1': 'पैसे खर्च झाल्यावर निकाल दुर्लक्षित करा',
  'm3q2-4.option2': 'फक्त मित्रांच्या अंदाजावर अवलंबून राहा',
  'm3q2-4.explanation': 'मोजमाप केल्याने गुंतवणुकीने मूल्य दिले का हे दिसते.',
  'm3q2-5.prompt': 'वाढीसाठी वारंवार कोणत्या क्रियेला गुंतवणूक लागते?',
  'm3q2-5.option0': 'सहायक टेलरला प्रशिक्षण देणे',
  'm3q2-5.option1': 'सर्व मार्केटिंग रद्द करणे',
  'm3q2-5.option2': 'दररोज लवकर दुकान बंद करणे',
  'm3q2-5.explanation': 'कर्मचाऱ्यांना प्रशिक्षण दिल्यास क्षमता आणि सेवा सुधारते.',
  'module-3-video-3.title': 'व्हिडिओ ३ · बजेट नियोजन',
  'module-3-video-3.meta': '६ मिनिटे',
  'module-3-video-3.description': 'साहित्य, वेतन आणि बचत संतुलित करणारे मासिक बजेट तयार करा आणि पुनर्गुंतवणुकीसाठी जागा ठेवा.',
  'module-3-video-3.transcript': 'आम्ही साधे बजेट तयार करतो, सामान्य खर्च श्रेणी पाहतो आणि विक्री बदलल्यास समायोजन कसे करावे ते दाखवतो.',
  'module-3-quiz-3.title': 'प्रश्नमंजुषा ३ · बजेट मूलतत्त्वे',
  'module-3-quiz-3.meta': '५ प्रश्न',
  'module-3-quiz-3.description': 'मासिक खर्च नियोजन करून रोकड प्रवाह स्थिर ठेवता येतो याची खात्री करा.',
  'm3q3-1.prompt': 'मासिक बजेट तयार करण्याचा पहिला टप्पा कोणता?',
  'm3q3-1.option0': 'अपेक्षित उत्पन्न आणि नियमित खर्च सूचीबद्ध करा',
  'm3q3-1.option1': 'एकूण नफा अंदाजे सांगा',
  'm3q3-1.option2': 'इतर व्यवसायाची नक्कल करा',
  'm3q3-1.explanation': 'उत्पन्न आणि खर्च माहित असल्यास योजना अचूक होते.',
  'm3q3-2.prompt': 'टेलरसाठी कोणता खर्च चल आहे?',
  'm3q3-2.option0': 'प्रत्येक ऑर्डरसाठी घेतलेले कापड',
  'm3q3-2.option1': 'मासिक दुकान भाडे',
  'm3q3-2.option2': 'व्यवसाय नोंदणी शुल्क',
  'm3q3-2.explanation': 'कापड खर्च वस्तूंच्या संख्येनुसार बदलतो.',
  'm3q3-3.prompt': 'बजेटमध्ये बचत समाविष्ट का करावी?',
  'm3q3-3.option0': 'खर्च होण्यापूर्वी पैसे बाजूला ठेवण्यासाठी',
  'm3q3-3.option1': 'उत्पन्न कमी दाखवण्यासाठी',
  'm3q3-3.option2': 'नासाडी वाढवण्यासाठी',
  'm3q3-3.explanation': 'बजेटमध्ये बचत ठेवली तर सवय टिकून राहते.',
  'm3q3-4.prompt': 'खर्च नियोजितपेक्षा जास्त झाल्यास काय करावे?',
  'm3q3-4.option0': 'खर्च समायोजित करा किंवा उत्पन्न वाढवण्याचे मार्ग शोधा',
  'm3q3-4.option1': 'फरक दुर्लक्षित करा',
  'm3q3-4.option2': 'खर्च ट्रॅक करणे थांबवा',
  'm3q3-4.explanation': 'कारवाई केल्याने आर्थिक शिस्त राखली जाते.',
  'm3q3-5.prompt': 'बजेट आणि प्रत्यक्ष खर्च तुलना करण्यास कोणते साधन मदत करते?',
  'm3q3-5.option0': 'साधी मासिक ट्रॅकिंग शीट',
  'm3q3-5.option1': 'फक्त मनात ठेवलेला विचार',
  'm3q3-5.option2': 'कुलूप लावलेली पेटी',
  'm3q3-5.explanation': 'ट्रॅकिंग शीटने योजनेशी तुलना स्पष्ट दिसते.',
  'module-3-quiz-4.title': 'प्रश्नमंजुषा ४ · मॉड्यूल ३ चाचणी',
  'module-3-quiz-4.meta': '५ प्रश्न',
  'module-3-quiz-4.description': 'बचत, पुनर्गुंतवणूक आणि बजेट संकल्पना एकत्र करून मॉड्यूल ३ चे पुनरावलोकन करा.',
  'm3q4-1.prompt': 'टेलर दर महिन्याला ₹२,००० बचत करतो. तीन मंद आठवड्यांनंतर याचा काय फायदा?',
  'm3q4-1.option0': 'वेतन आणि भाडे भरण्यासाठी रोकड तयार',
  'm3q4-1.option1': 'वीज वापर वाढवण्यासाठी रोकड',
  'm3q4-1.option2': 'विक्रीशिवाय त्वरित नफा',
  'm3q4-1.explanation': 'बचत मंद विक्रीच्या काळात आवश्यक खर्च झाकते.',
  'm3q4-2.prompt': 'नवे शिवण मशीन घेण्यापूर्वी काय खात्री करावी?',
  'm3q4-2.option0': 'पुरेशी बचत आहे आणि सुधारणा उत्पादन वाढवेल',
  'm3q4-2.option1': 'मित्रांना रंग आवडतो',
  'm3q4-2.option2': 'ग्राहक कमी पैसे देतील',
  'm3q4-2.explanation': 'परवड आणि परिणाम तपासल्याने रोकड प्रवाह सुरक्षित राहतो.',
  'm3q4-3.prompt': 'कोणती ओळ बजेट आणि हिशेब दोन्हीमध्ये असावी?',
  'm3q4-3.option0': 'धागा व सुई यांसारखे मासिक साहित्य खर्च',
  'm3q4-3.option1': 'वैयक्तिक सुट्टीची योजना',
  'm3q4-3.option2': 'घरातील भेटवस्तू',
  'm3q4-3.explanation': 'व्यवसाय साहित्य खर्च योजना आणि नोंदी दोन्हीकडे असायला हवेत.',
  'm3q4-4.prompt': 'बचत आणि पुनर्गुंतवणूक एकत्र कसे काम करू शकतात?',
  'm3q4-4.option0': 'नफ्याचा काही भाग बचतीसाठी व काही भाग नियोजित सुधारण्यासाठी वापरा',
  'm3q4-4.option1': 'प्रत्येक रुपया लगेच खर्च करा',
  'm3q4-4.option2': 'गुंतवणूक करताना बचत थांबवा',
  'm3q4-4.explanation': 'बचत आणि गुंतवणूक संतुलित केल्यास व्यवसाय सुरक्षित आणि वाढत राहतो.',
  'm3q4-5.prompt': 'बजेट आणि प्रत्यक्ष निकाल तुलना केल्यानंतर काय करावे?',
  'm3q4-5.option0': 'शिकलेल्या धड्यांवर पुढील महिन्याची योजना बदल करा',
  'm3q4-5.option1': 'नफा असेल तर आकडे दुर्लक्षित करा',
  'm3q4-5.option2': 'नोंदी पुसून पुन्हा सुरुवात करा',
  'm3q4-5.explanation': 'योजना समायोजित केल्याने सतत सुधारणा आणि नियंत्रण मिळते.',
  'module-4.title': 'हवामान नेतृत्व अंगीकारणे',
  'module-4-video-1.title': 'व्हिडिओ १ · हवामान नेत्यांना प्रशिक्षित करा',
  'module-4-video-1.meta': '६ मिनिटे',
  'module-4-video-1.description': 'व्यवस्थापकांना हवामान-केंद्रित निर्णयांसाठी संघांना मार्गदर्शन करण्यास तयार करा.',
  'module-4-video-1.transcript': 'कोचिंग सातत्यपूर्ण वर्तन घडवते आणि संघांना हवामान लक्ष्यांसाठी जबाबदार ठेवते.',
  'module-4-quiz-1.title': 'प्रश्नमंजुषा १ · कोचिंग मूलतत्त्वे',
  'module-4-quiz-1.meta': '४ प्रश्न',
  'module-4-quiz-1.description': 'प्रभावी कोचिंगसाठी आवश्यक वर्तन दृढ करा.',
  'm4q1-1.prompt': 'कोचिंग संभाषणातील पहिला टप्पा कोणता?',
  'm4q1-1.option0': 'लक्ष्य आणि अपेक्षित निकाल स्पष्ट करा',
  'm4q1-1.option1': 'सुरुवातीलाच उपाय सुचवा',
  'm4q1-1.option2': 'असंबंधित मेट्रिक्स पाहा',
  'm4q1-1.explanation': 'स्पष्ट लक्ष्य असल्यास कोचिंग केंद्रित राहते.',
  'm4q1-2.prompt': 'कोचेस जबाबदारी कशी वाढवतात?',
  'm4q1-2.option0': 'कारवाई आणि फॉलो-अप संयुक्तरित्या ठरवतात',
  'm4q1-2.option1': 'पुढील पावले निश्चित करत नाहीत',
  'm4q1-2.option2': 'फक्त वार्षिक पुनरावलोकनावर अवलंबून राहतात',
  'm4q1-2.explanation': 'एकत्र कृती आणि फॉलो-अप प्रगती कायम ठेवतात.',
  'm4q1-3.prompt': 'कोचिंग नोट्समध्ये काय नोंदवावे?',
  'm4q1-3.option0': 'प्रतिबद्धता, अडथळे आणि यश',
  'm4q1-3.option1': 'कामाशी नसलेल्या वैयक्तिक मते',
  'm4q1-3.option2': 'प्रवास नियोजन',
  'm4q1-3.explanation': 'नोट्स वचनबद्धता आणि शिकण्याचे क्षण दर्शवतात.',
  'm4q1-4.prompt': 'कोचिंगमध्ये हवामान यश साजरे का करावे?',
  'm4q1-4.option0': 'पुन्हा पुन्हा हवे असलेले वर्तन बळकट होते',
  'm4q1-4.option1': 'ते फक्त मजेसाठी असते',
  'm4q1-4.option2': 'ते कामगिरी पुनरावलोकनाची जागा घेते',
  'm4q1-4.explanation': 'यश साजरे केल्याने संस्कृती बदल बळकट होतो.',
  'module-4-video-2.title': 'व्हिडिओ २ · हवामान प्रशासन अंमलात आणणे',
  'module-4-video-2.meta': '७ मिनिटे',
  'module-4-video-2.description': 'फोरम, स्कोअरकार्ड आणि निर्णयाधिकारांमध्ये हवामान प्राधान्ये गुंफा.',
  'module-4-video-2.transcript': 'प्रशासन हवामान प्राधान्ये प्रत्येक निर्णयात समाविष्ट करते.',
  'module-4-quiz-2.title': 'प्रश्नमंजुषा २ · प्रशासन क्षण',
  'module-4-quiz-2.meta': '५ प्रश्न',
  'module-4-quiz-2.description': 'हवामान केंद्रस्थानी ठेवणारे प्रशासन डिझाइन करू शकता याची खात्री करा.',
  'm4q2-1.prompt': 'प्रत्येक प्रशासन मंचात काय असावे?',
  'm4q2-1.option0': 'स्पष्ट हवामान केपीआय आणि जबाबदाऱ्या',
  'm4q2-1.option1': 'फक्त आर्थिक मापन',
  'm4q2-1.option2': 'कार्यसूची नसलेले फेरपालट सदस्य',
  'm4q2-1.explanation': 'केपीआय आणि जबाबदारी प्रशासनाला प्रभावी बनवतात.',
  'm4q2-2.prompt': 'हवामान धोका किती वेळाने चर्चिला पाहिजे?',
  'm4q2-2.option0': 'कार्यसूचीत कायम घटक म्हणून',
  'm4q2-2.option1': 'फक्त वार्षिक',
  'm4q2-2.option2': 'फक्त मुद्दे आल्यावर',
  'm4q2-2.explanation': 'नियमित चर्चा धोका लक्षात ठेवते.',
  'm4q2-3.prompt': 'जलद निर्णय घेण्यास काय मदत करते?',
  'm4q2-3.option0': 'पूर्वनियोजित उन्नती मार्ग',
  'm4q2-3.option1': 'बैठकीनंतर एकमताची प्रतीक्षा',
  'm4q2-3.option2': 'पुढील तिमाहीपर्यंत विलंब',
  'm4q2-3.explanation': 'स्पष्ट उन्नती मार्ग गती आणि जबाबदारी राखतात.',
  'm4q2-4.prompt': 'बोर्डना माहिती ठेवण्यासाठी काय करावे?',
  'm4q2-4.option0': 'आघाडी सूचकांसह क्यूरेटेड डॅशबोर्ड शेअर करा',
  'm4q2-4.option1': 'कच्चा डेटा एकदम शेअर करा',
  'm4q2-4.option2': 'सोयीने अडहॉक अपडेट्स पाठवा',
  'm4q2-4.explanation': 'क्यूरेटेड डॅशबोर्ड माहितीपूर्ण ठेवतात आणि भार कमी करतात.',
  'm4q2-5.prompt': 'हवामान लक्ष्य भरपाईत समाविष्ट का करावेत?',
  'm4q2-5.option0': 'प्रोत्साहन इच्छित निकालाशी संरेखित करण्यासाठी',
  'm4q2-5.option1': 'फक्त क्लिष्टता वाढवण्यासाठी',
  'm4q2-5.option2': 'कामगिरीपासून वेगळे ठेवायला हवे',
  'm4q2-5.explanation': 'प्रोत्साहन हवामान परिणामांवर लक्ष केंद्रित करतात.',
  'module-4-video-3.title': 'व्हिडिओ ३ · परिवर्तन परिणाम मोजणे',
  'module-4-video-3.meta': '६ मिनिटे',
  'module-4-video-3.description': 'परिणाम दाखवा आणि स्पष्ट कथनाने संघांना ऊर्जित ठेवा.',
  'module-4-video-3.transcript': 'मापन आणि कथा सांगणे एकत्र आल्यास परिवर्तन दृश्यमान आणि साजरे राहते.',
  'module-4-quiz-3.title': 'प्रश्नमंजुषा ३ · परिणाम कथा सांगणे',
  'module-4-quiz-3.meta': '४ प्रश्न',
  'module-4-quiz-3.description': 'हवामान परिणाम विश्वासार्हपणे सांगता येतात याची पुष्टी करा.',
  'm4q3-1.prompt': 'उत्कृष्ट परिणाम कथा कशाने तयार होते?',
  'm4q3-1.option0': 'डेटा आणि मानवी परिणाम एकत्र',
  'm4q3-1.option1': 'फक्त भावनिक उद्धरणे',
  'm4q3-1.option2': 'संदर्भाशिवाय फक्त आकडे',
  'm4q3-1.explanation': 'परिणाम कथा पुरावे आणि मानवी अर्थ दोन्ही मागते.',
  'm4q3-2.prompt': 'परिणाम कथा किती वेळाने शेअर कराव्यात?',
  'm4q3-2.option0': 'संघ आणि चॅनेलवर नियमितपणे',
  'm4q3-2.option1': 'फक्त वार्षिक अहवालांमध्ये',
  'm4q3-2.option2': 'फक्त निकाल परिपूर्ण असल्यास',
  'm4q3-2.explanation': 'वारंवार कथा सांगितल्याने ऊर्जा आणि लक्ष वाढते.',
  'm4q3-3.prompt': 'निकाल मागे पडल्यास काय करावे?',
  'm4q3-3.option0': 'मूळ कारणे आणि पुढील पावले स्पष्ट करा',
  'm4q3-3.option1': 'डेटा लपवा',
  'm4q3-3.option2': 'फक्त बाह्य घटकांना दोष द्या',
  'm4q3-3.explanation': 'प्रामाणिक कथन विश्वास निर्माण करते.',
  'm4q3-4.prompt': 'कथा सांगण्यात नोट्स कशी मदत करतात?',
  'm4q3-4.option0': 'त्या उद्धरणे, डेटा पॉईंट आणि ग्राहक पुरावे पकडतात',
  'm4q3-4.option1': 'त्या परिणाम कथांसाठी अप्रासंगिक असतात',
  'm4q3-4.option2': 'त्या फक्त कामांची यादी असावी',
  'm4q3-4.explanation': 'नोट्स कथा सजीव करण्यासाठी तपशील देतात.',
};

const translate = (key, fallback) => {
  if (getCurrentLanguage() === 'mr') {
    return mrCopy[key] ?? fallback;
  }
  return fallback;
};

const localizeNumber = (value) => {
  const lang = getCurrentLanguage();
  const text = value.toString();
  if (lang !== 'mr') return text;
  return text
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

const formatQuizFeedback = (score, correct, total) => {
  const prefixTemplate = translate(
    'label.scorePrefix',
    `You scored {score}% ({correct} of {total}).`
  );
  const prefix = prefixTemplate
    .replace('{score}', localizeNumber(score))
    .replace('{correct}', localizeNumber(correct))
    .replace('{total}', localizeNumber(total));
  const suffix = score >= 70
    ? translate('label.passMessage', 'Great work—mark this quiz complete when you are ready.')
    : translate('label.failMessage', 'You need 70% to pass. Adjust your answers and retry.');
  return `${prefix} ${suffix}`;
};

const modulesData = [
  {
    id: 'module-1',
    number: 1,
    title: 'Introduction, Initial investment & Costing',
    items: [
      {
        id: 'module-1-video-1',
        type: 'video',
        title: 'Video 1 · Introduction to business',
        meta: '5 min',
        durationSeconds: 300,
        description:
          'Walk through the foundational concepts that define a resilient business and the role finance plays in its early decisions.',
        transcript:
          'This lesson covers what makes a business model work, how to frame value propositions, and which early actions set teams up for sustainable growth.',
        videoId: 'fZkAlgF77ak'
      },
      {
        id: 'module-1-quiz-1',
        type: 'quiz',
        title: 'Quiz 1 · Business Basics',
        meta: '5 Qs',
        description: 'Check that you can articulate core business concepts before moving into investments.',
        questions: [
          {
            id: 'm1q1',
            prompt: 'If you stitch clothes only for your family, is it a business?',
            options: ['Yes', 'No'],
            answerIndex: 1,
            explanation: 'A business provides goods or services to customers beyond your household in exchange for value.'
          },
          {
            id: 'm1q2',
            prompt: 'What is one important rule in business?',
            options: ['Spend more than you earn', 'Earn more than you spend'],
            answerIndex: 1,
            explanation: 'Earning more than you spend keeps the business sustainable and profitable.'
          }
        ]
      },
      {
        id: 'module-1-video-2',
        type: 'video',
        title: 'Video 2 · Investment & Costing',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Learn how to evaluate investment options, compare costing scenarios, and select approaches that keep ventures viable.',
        transcript:
          'We unpack techniques for forecasting investment needs, weighing cost structures, and balancing short-term spends against long-term value.',
        videoId: '_9WYaBH-8CY'
      },
      {
        id: 'module-1-quiz-2',
        type: 'quiz',
        title: 'Quiz 2 · Investment & Costing Basics',
        meta: '2 Qs',
        description: 'Apply the investment and costing concepts to practical business scenarios.',
        questions: [
          {
            id: 'm1q2-1',
            prompt: 'Which of these is a fixed cost?',
            options: ['Sewing machine', 'Cloth'],
            answerIndex: 0,
            explanation: 'A sewing machine is a one-time purchase that does not change with the number of garments you stitch.'
          },
          {
            id: 'm1q2-2',
            prompt: 'If Meena buys a sewing machine for ₹10,000 and spends ₹2,000 on cloth, what is her total cost?',
            options: ['₹8,000', '₹12,000'],
            answerIndex: 1,
            explanation: 'Adding the fixed cost (₹10,000) and the variable cost (₹2,000) gives a total cost of ₹12,000.'
          }
        ]
      },
      {
        id: 'module-1-quiz-3',
        type: 'quiz',
        title: 'Quiz 3 · Module 1 Knowledge Test',
        meta: '5 Qs',
        description: 'Ensure you can translate Module 1’s key concepts into daily routines.',
        questions: [
          {
            id: 'm1q3-1',
            prompt: 'What should you do before alignment workshops?',
            options: [
              'Share success stories and blockers gathered from notes',
              'Wait to gather feedback live in the session',
              'Focus only on reporting slides'
            ],
            answerIndex: 0,
            explanation: 'Sharing insights ahead of time lets teams arrive prepared to solve real issues.'
          },
          {
            id: 'm1q3-2',
            prompt: 'Which behaviour builds trust across teams?',
            options: [
              'Transparent progress updates and clear ownership',
              'Keeping plans private until finalised',
              'Delegating coordination to external consultants'
            ],
            answerIndex: 0,
            explanation: 'Transparency and ownership give teams confidence in the process.'
          },
          {
            id: 'm1q3-3',
            prompt: 'How should blockers be escalated?',
            options: [
              'Capture them in notes with proposed actions for quick review',
              'Wait for quarterly steering meetings',
              'Escalate only after multiple failed attempts'
            ],
            answerIndex: 0,
            explanation: 'Fast escalation with context keeps momentum on track.'
          },
          {
            id: 'm1q3-4',
            prompt: 'What signals a module is complete?',
            options: [
              'Videos watched, quizzes passed, and notes saved',
              'Only videos watched',
              'Only quizzes passed'
            ],
            answerIndex: 0,
            explanation: 'Completion combines learning consumption and assessment.'
          },
          {
            id: 'm1q3-5',
            prompt: 'Why celebrate quick wins?',
            options: [
              'They reinforce the cultural shift toward climate-first thinking',
              'They are optional nice-to-haves',
              'They replace long-term planning'
            ],
            answerIndex: 0,
            explanation: 'Quick wins keep motivation high and sustain long-term ambition.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Money Basics',
    items: [
      {
        id: 'module-2-video-1',
        type: 'video',
        title: 'Video 1 · Revenue, Cost & Profit',
        meta: '5 min',
        durationSeconds: 300,
        description:
          'Understand how revenue, cost, and profit connect so you can measure whether tailoring services are viable.',
        transcript:
          'We break down basic income statements, highlight common tailoring expenses, and show how to calculate profit for small enterprises.',
        videoId: 'zavQK5y5mgM'
      },
      {
        id: 'module-2-quiz-1',
        type: 'quiz',
        title: 'Quiz 1 · Revenue, Cost & Profit Basics',
        meta: '4 Qs',
        description: 'Check that you can compute revenue, costs, and profit for tailoring businesses.',
        questions: [
          {
            id: 'm2q1-1',
            prompt: 'If a tailor earns ₹5000 in sales and spends ₹3200 on materials and rent, what is the profit?',
            options: ['₹1800', '₹3200', '₹5000'],
            answerIndex: 0,
            explanation: 'Profit equals revenue minus total costs: 5000 - 3200 = 1800.'
          },
          {
            id: 'm2q1-2',
            prompt: 'Which of these is considered a fixed cost for a tailoring shop?',
            options: ['Monthly shop rent', 'Thread used for each garment', 'Buttons per shirt'],
            answerIndex: 0,
            explanation: 'Rent does not change with the number of garments produced, so it is fixed.'
          },
          {
            id: 'm2q1-3',
            prompt: 'Why is tracking daily expenses important for tailors?',
            options: [
              'It reveals if costs are eating into profit',
              'It replaces the need to speak with customers',
              'It increases fabric waste'
            ],
            answerIndex: 0,
            explanation: 'Tracking expenses shows whether profits stay healthy and where savings are possible.'
          },
          {
            id: 'm2q1-4',
            prompt: 'Which formula correctly calculates gross profit?',
            options: [
              'Revenue – Cost of goods sold',
              'Cost of goods sold – Revenue',
              'Revenue + Operating expenses'
            ],
            answerIndex: 0,
            explanation: 'Gross profit is calculated as revenue minus the cost of goods sold.'
          }
        ]
      },
      {
        id: 'module-2-video-2',
        type: 'video',
        title: 'Video 2 · Pricing & Managing Costs',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Discover techniques tailors use to price garments competitively while controlling material and labour costs.',
        transcript:
          'The lesson explores pricing formulas, negotiating with suppliers, and building cushions for seasonal demand.',
        videoId: '0ye7zuSeuO8'
      },
      {
        id: 'module-2-quiz-2',
        type: 'quiz',
        title: 'Quiz 2 · Pricing & Managing Costs Basics',
        meta: '5 Qs',
        description: 'Practise setting profitable prices and managing expenses in tailoring businesses.',
        questions: [
          {
            id: 'm2q2-1',
            prompt: 'A blouse costs ₹300 in fabric and ₹150 in labour. You want a 40% markup on cost. What selling price should you choose?',
            options: ['₹630', '₹450', '₹180'],
            answerIndex: 0,
            explanation: 'Total cost is 450. A 40% markup adds 180, making the price 630.'
          },
          {
            id: 'm2q2-2',
            prompt: 'Which action best controls variable costs?',
            options: ['Buying thread in bulk to get discounts', 'Leaving machines on overnight', 'Ignoring supplier invoices'],
            answerIndex: 0,
            explanation: 'Bulk purchasing at negotiated rates reduces variable cost per garment.'
          },
          {
            id: 'm2q2-3',
            prompt: 'Why is it important to include labour time in your pricing?',
            options: [
              'It ensures you pay yourself and staff fairly',
              'It has no impact on profitability',
              'It only matters for wholesale orders'
            ],
            answerIndex: 0,
            explanation: 'Pricing that ignores labour underestimates true costs and reduces profit.'
          },
          {
            id: 'm2q2-4',
            prompt: 'How can tailors respond to seasonal drops in demand?',
            options: ['Offer promotions or diversify products', 'Increase rent payments', 'Ignore the trend until it passes'],
            answerIndex: 0,
            explanation: 'Promotions or new products help sustain cash flow when demand dips.'
          },
          {
            id: 'm2q2-5',
            prompt: 'Which of these is an example of managing overhead costs?',
            options: ['Sharing workspace with another tailor', 'Buying unnecessary accessories', 'Ignoring electricity bills'],
            answerIndex: 0,
            explanation: 'Sharing workspace spreads rent and utilities, reducing overhead per business.'
          }
        ]
      },
      {
        id: 'module-2-video-3',
        type: 'video',
        title: 'Video 3 · Introduction to Bookkeeping',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Learn the basics of recording tailoring transactions so you can track cash flow with confidence.',
        transcript:
          'We cover simple record-keeping tools, daily cash logs, and tips for separating business and personal expenses.',
        videoId: 'aARw7kw7daA'
      },
      {
        id: 'module-2-quiz-3',
        type: 'quiz',
        title: 'Quiz 3 · Bookkeeping Basics',
        meta: '4 Qs',
        description: 'Confirm that you can record tailoring transactions accurately and stay organised.',
        questions: [
          {
            id: 'm2q3-1',
            prompt: 'Which book should track every sale and expense each day?',
            options: ['Cash book', 'Guest book', 'Inventory only'],
            answerIndex: 0,
            explanation: 'A cash book records daily cash inflows and outflows.'
          },
          {
            id: 'm2q3-2',
            prompt: 'Why should business and personal expenses be recorded separately?',
            options: [
              'It shows the true performance of the business',
              'It doubles tax payments',
              'It hides profits'
            ],
            answerIndex: 0,
            explanation: 'Separating expenses clarifies business profitability and simplifies reporting.'
          },
          {
            id: 'm2q3-3',
            prompt: 'What document summarises assets, liabilities, and owner’s equity?',
            options: ['Balance sheet', 'Income statement', 'Marketing plan'],
            answerIndex: 0,
            explanation: 'The balance sheet captures what the business owns and owes at a point in time.'
          },
          {
            id: 'm2q3-4',
            prompt: 'What helps avoid forgetting to record sales later?',
            options: ['Writing entries immediately after each transaction', 'Only recording weekly totals', 'Keeping receipts in pockets'],
            answerIndex: 0,
            explanation: 'Timely entries ensure accurate records and reduce errors.'
          }
        ]
      },
      {
        id: 'module-2-quiz-4',
        type: 'quiz',
        title: 'Quiz 4 · Module 2 Test',
        meta: '5 Qs',
        description: 'Review all Module 2 concepts with a short knowledge check covering money basics.',
        questions: [
          {
            id: 'm2q4-1',
            prompt: 'Which statement best defines profit?',
            options: ['Money left after paying all business expenses', 'Total cash collected from customers', 'Loans taken from the bank'],
            answerIndex: 0,
            explanation: 'Profit is the amount remaining after covering every expense.'
          },
          {
            id: 'm2q4-2',
            prompt: 'What is the primary reason to set aside money for savings each month?',
            options: ['To handle emergencies or invest in growth', 'To increase fabric waste', 'To reduce recorded revenue'],
            answerIndex: 0,
            explanation: 'Savings provide a buffer for emergencies and future investments.'
          },
          {
            id: 'm2q4-3',
            prompt: 'When reviewing prices, which number should you compare against costs?',
            options: ['Selling price per item', 'Number of employees', 'Shop size'],
            answerIndex: 0,
            explanation: 'Comparing selling price to total cost shows if each item earns a profit.'
          },
          {
            id: 'm2q4-4',
            prompt: 'Why is keeping receipts important for bookkeeping?',
            options: ['They support expense records during reviews', 'They increase clutter only', 'They replace invoices entirely'],
            answerIndex: 0,
            explanation: 'Receipts verify entries and make audits or reviews easier.'
          },
          {
            id: 'm2q4-5',
            prompt: 'A tailor negotiates lower fabric prices. Which financial metric improves if sales stay the same?',
            options: ['Profit margin', 'Number of customers', 'Shop location'],
            answerIndex: 0,
            explanation: 'Lower costs with steady sales increase the profit margin.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Saving, Planning & Growth',
    items: [
      {
        id: 'module-3-video-1',
        type: 'video',
        title: 'Video 1 · Importance of Savings',
        meta: '5 min',
        durationSeconds: 300,
        description:
          'Discover why disciplined savings keep tailoring businesses resilient during slow seasons and ready for new orders.',
        transcript:
          'We walk through setting a savings target, separating cash from daily spending, and building habits that protect your shop when demand drops.',
        videoId: 'CrFgC_qAMiw'
      },
      {
        id: 'module-3-quiz-1',
        type: 'quiz',
        title: 'Quiz 1 · Savings Basics',
        meta: '5 Qs',
        description: 'Check that you can build and protect a savings cushion for your tailoring business.',
        questions: [
          {
            id: 'm3q1-1',
            prompt: 'Why should a tailoring business set aside money every month?',
            options: [
              'To handle emergencies or slow seasons without panic',
              'To pay unnecessary bank fees',
              'To avoid recording expenses'
            ],
            answerIndex: 0,
            explanation: 'Savings soften the impact of quiet periods and unexpected costs.'
          },
          {
            id: 'm3q1-2',
            prompt: 'Where is the safest place to store business savings?',
            options: [
              'In a separate bank or mobile money account for the business',
              'Mixed with personal cash in a wallet',
              'Hidden inside fabric cupboards'
            ],
            answerIndex: 0,
            explanation: 'Separate accounts keep savings secure and visible.'
          },
          {
            id: 'm3q1-3',
            prompt: 'What is a practical first savings goal for a small shop?',
            options: ['Cover at least one month of operating costs', 'Buy luxury décor', 'Double the rent payment'],
            answerIndex: 0,
            explanation: 'Covering a month of costs creates a strong safety net.'
          },
          {
            id: 'm3q1-4',
            prompt: 'How often should you review your savings progress?',
            options: ['Weekly or monthly during bookkeeping', 'Only once a year', 'Never, if sales are steady'],
            answerIndex: 0,
            explanation: 'Regular reviews keep savings on track and encourage discipline.'
          },
          {
            id: 'm3q1-5',
            prompt: 'Which habit makes saving automatic?',
            options: [
              'Moving a set percentage of each sale into savings',
              'Waiting until the year ends to save',
              'Borrowing money just to store it'
            ],
            answerIndex: 0,
            explanation: 'Automatic transfers ensure savings grow consistently.'
          }
        ]
      },
      {
        id: 'module-3-video-2',
        type: 'video',
        title: 'Video 2 · Reinvestment & Growth',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Learn how to reinvest profits into better tools, people, and marketing so your tailoring enterprise can grow steadily.',
        transcript:
          'We cover choosing smart upgrades, timing investments after analysing cash flow, and tracking the impact of each improvement.',
        videoId: 'nyHq3C2gqbE'
      },
      {
        id: 'module-3-quiz-2',
        type: 'quiz',
        title: 'Quiz 2 · Reinvestment & Growth Basics',
        meta: '5 Qs',
        description: 'Test how you plan reinvestment and growth activities using profits from tailoring services.',
        questions: [
          {
            id: 'm3q2-1',
            prompt: 'What is the main reason to reinvest profit into the business?',
            options: [
              'To improve capacity and future earnings',
              'To increase personal spending',
              'To avoid recording income'
            ],
            answerIndex: 0,
            explanation: 'Reinvestment strengthens the business and supports long-term income.'
          },
          {
            id: 'm3q2-2',
            prompt: 'Which investment will most likely speed up production?',
            options: ['Buying a faster sewing machine', 'Adding more decorations to the shop', 'Printing extra business cards only'],
            answerIndex: 0,
            explanation: 'Better equipment can increase output and service more clients.'
          },
          {
            id: 'm3q2-3',
            prompt: 'Before reinvesting, what should you review?',
            options: ['Cash flow and upcoming expenses', 'Only your social media likes', 'Competitors’ personal lives'],
            answerIndex: 0,
            explanation: 'Understanding cash flow ensures you can afford the investment.'
          },
          {
            id: 'm3q2-4',
            prompt: 'How can you measure whether an investment worked?',
            options: [
              'Track changes in revenue, customers, or production speed',
              'Ignore results once money is spent',
              'Rely solely on guesses from friends'
            ],
            answerIndex: 0,
            explanation: 'Measuring impact shows if the investment delivered value.'
          },
          {
            id: 'm3q2-5',
            prompt: 'Which growth activity often needs reinvestment?',
            options: ['Training an assistant tailor', 'Cancelling all marketing', 'Closing the shop early every day'],
            answerIndex: 0,
            explanation: 'Training staff expands capacity and service quality.'
          }
        ]
      },
      {
        id: 'module-3-video-3',
        type: 'video',
        title: 'Video 3 · Budget Planning',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Build a monthly budget that balances materials, wages, and savings while leaving room for reinvestment.',
        transcript:
          'We design a simple tailoring budget, review typical cost categories, and show how to adjust when sales change.',
        videoId: 'tsxrN71uJ6c'
      },
      {
        id: 'module-3-quiz-3',
        type: 'quiz',
        title: 'Quiz 3 · Budgeting Basics',
        meta: '5 Qs',
        description: 'Confirm you can plan monthly expenses and keep cash flow stable for tailoring operations.',
        questions: [
          {
            id: 'm3q3-1',
            prompt: 'What is the first step in creating a monthly budget?',
            options: ['List expected income and regular expenses', 'Guess the total profit', 'Copy another business without checking'],
            answerIndex: 0,
            explanation: 'Knowing income and expenses helps you plan accurately.'
          },
          {
            id: 'm3q3-2',
            prompt: 'Which expense is variable for a tailor?',
            options: ['Fabric purchased per order', 'Monthly shop rent', 'Business registration fee'],
            answerIndex: 0,
            explanation: 'Fabric costs rise or fall with the number of garments produced.'
          },
          {
            id: 'm3q3-3',
            prompt: 'Why include savings in your budget?',
            options: ['To make sure you set aside money before it is spent', 'To reduce reported revenue', 'To increase waste'],
            answerIndex: 0,
            explanation: 'Budgeting for savings keeps the habit consistent.'
          },
          {
            id: 'm3q3-4',
            prompt: 'How should you respond if expenses are higher than planned?',
            options: ['Adjust spending or find ways to increase income', 'Ignore the difference', 'Stop tracking costs entirely'],
            answerIndex: 0,
            explanation: 'Taking action keeps the business on track financially.'
          },
          {
            id: 'm3q3-5',
            prompt: 'What tool helps you compare budgeted and actual spending?',
            options: ['A simple monthly tracking sheet', 'Only a mental note', 'A locked storage trunk'],
            answerIndex: 0,
            explanation: 'Tracking sheets provide visibility into performance versus plan.'
          }
        ]
      },
      {
        id: 'module-3-quiz-4',
        type: 'quiz',
        title: 'Quiz 4 · Module 3 Test',
        meta: '5 Qs',
        description: 'Review Module 3 by applying savings, reinvestment, and budgeting concepts together.',
        questions: [
          {
            id: 'm3q4-1',
            prompt: 'A tailor saves ₹2,000 each month. What benefit does this provide after three slow weeks?',
            options: ['Cash to cover wages and rent', 'Higher electricity usage', 'Instant profit increases without sales'],
            answerIndex: 0,
            explanation: 'Savings keep essential expenses covered when sales dip.'
          },
          {
            id: 'm3q4-2',
            prompt: 'Before buying a new stitching machine, what should the tailor confirm?',
            options: ['There is enough saved money and the upgrade will boost output', 'Friends approve the colour', 'Customers will pay less'],
            answerIndex: 0,
            explanation: 'Checking affordability and impact prevents cash flow strain.'
          },
          {
            id: 'm3q4-3',
            prompt: 'Which line should appear in both the budget and bookkeeping records?',
            options: ['Monthly thread and needle purchases', 'Personal holiday plans', 'Unrelated household gifts'],
            answerIndex: 0,
            explanation: 'Business supply costs must be tracked and planned for in both places.'
          },
          {
            id: 'm3q4-4',
            prompt: 'How can reinvestment and savings work together?',
            options: [
              'Use part of profits for savings and part for planned upgrades',
              'Spend every rupee immediately',
              'Stop saving when investing'
            ],
            answerIndex: 0,
            explanation: 'Balancing savings and reinvestment keeps the business safe while growing.'
          },
          {
            id: 'm3q4-5',
            prompt: 'What should you do after comparing your budget with actual results?',
            options: ['Adjust next month’s plan based on lessons learned', 'Ignore the numbers if profit exists', 'Erase records to start over'],
            answerIndex: 0,
            explanation: 'Adjusting plans ensures continuous improvement and control.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    number: 4,
    title: 'Embedding climate leadership',
    items: [
      {
        id: 'module-4-video-1',
        type: 'video',
        title: 'Video 1 · Coaching climate leaders',
        meta: '6 min',
        durationSeconds: 360,
        description: 'Equip managers to coach teams on climate-first decision making.',
        transcript: 'Coaching unlocks consistent behaviours and keeps teams accountable to climate goals.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-4-quiz-1',
        type: 'quiz',
        title: 'Quiz 1 · Coaching essentials',
        meta: '4 Qs',
        description: 'Reinforce the behaviours that make coaching effective.',
        questions: [
          {
            id: 'm4q1-1',
            prompt: 'What is the first step in a coaching conversation?',
            options: ['Agree on the goal and desired outcome', 'Dive into solutions immediately', 'Review unrelated metrics'],
            answerIndex: 0,
            explanation: 'Clarity on goals ensures coaching stays targeted.'
          },
          {
            id: 'm4q1-2',
            prompt: 'How do coaches build accountability?',
            options: ['Co-design actions and follow-ups', 'Leave next steps undefined', 'Rely on annual reviews only'],
            answerIndex: 0,
            explanation: 'Shared actions and follow-ups keep progress moving.'
          },
          {
            id: 'm4q1-3',
            prompt: 'What should notes capture for coaching?',
            options: ['Commitments, blockers, and wins', 'Personal opinions unrelated to work', 'Travel itineraries'],
            answerIndex: 0,
            explanation: 'Notes focus on commitments and learning moments.'
          },
          {
            id: 'm4q1-4',
            prompt: 'Why celebrate climate wins in coaching?',
            options: ['They reinforce the behaviours we want repeated', 'It is optional fun only', 'It replaces performance reviews'],
            answerIndex: 0,
            explanation: 'Celebrating wins reinforces culture change.'
          }
        ]
      },
      {
        id: 'module-4-video-2',
        type: 'video',
        title: 'Video 2 · Operationalising climate governance',
        meta: '7 min',
        durationSeconds: 420,
        description: 'Embed climate into forums, scorecards, and decision rights.',
        transcript: 'Governance ensures climate priorities are embedded in every decision.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-4-quiz-2',
        type: 'quiz',
        title: 'Quiz 2 · Governance moments',
        meta: '5 Qs',
        description: 'Confirm you can design governance that keeps climate front and centre.',
        questions: [
          {
            id: 'm4q2-1',
            prompt: 'What should every governance forum have?',
            options: ['Clear climate KPIs and ownership', 'Only financial metrics', 'Rotating membership with no agenda'],
            answerIndex: 0,
            explanation: 'KPIs and ownership make governance effective.'
          },
          {
            id: 'm4q2-2',
            prompt: 'How often should climate risk be discussed?',
            options: ['As a standing agenda item', 'Only annually', 'Only when issues arise'],
            answerIndex: 0,
            explanation: 'Regular discussion keeps risk on the radar.'
          },
          {
            id: 'm4q2-3',
            prompt: 'What enables fast decisions?',
            options: ['Pre-agreed escalation paths', 'Waiting for consensus after the meeting', 'Delaying until next quarter'],
            answerIndex: 0,
            explanation: 'Clear escalation keeps momentum and accountability.'
          },
          {
            id: 'm4q2-4',
            prompt: 'How do you keep boards informed?',
            options: ['Curate dashboards with leading indicators', 'Share raw data dumps', 'Send ad-hoc updates when convenient'],
            answerIndex: 0,
            explanation: 'Dashboards with leading indicators provide insight without overload.'
          },
          {
            id: 'm4q2-5',
            prompt: 'Why integrate climate targets into compensation?',
            options: ['To align incentives with desired outcomes', 'To add complexity only', 'It should stay separate from performance'],
            answerIndex: 0,
            explanation: 'Incentives drive focus on climate performance.'
          }
        ]
      },
      {
        id: 'module-4-video-3',
        type: 'video',
        title: 'Video 3 · Measuring transformation impact',
        meta: '6 min',
        durationSeconds: 360,
        description: 'Showcase outcomes and keep teams energised with clear storytelling.',
        transcript: 'Measurement paired with storytelling keeps transformation visible and celebrated.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-4-quiz-3',
        type: 'quiz',
        title: 'Quiz 3 · Impact storytelling',
        meta: '4 Qs',
        description: 'Validate your ability to communicate climate impact credibly.',
        questions: [
          {
            id: 'm4q3-1',
            prompt: 'What makes a great impact story?',
            options: ['Data plus human outcomes', 'Only emotional quotes', 'Only numbers without context'],
            answerIndex: 0,
            explanation: 'Impact stories need both evidence and human meaning.'
          },
          {
            id: 'm4q3-2',
            prompt: 'How often should impact stories be shared?',
            options: ['Regularly across teams and channels', 'Only during annual reports', 'Only if results are perfect'],
            answerIndex: 0,
            explanation: 'Frequent storytelling keeps energy and focus high.'
          },
          {
            id: 'm4q3-3',
            prompt: 'What should you do when results lag?',
            options: ['Explain root causes and next actions', 'Hide the data', 'Blame external factors only'],
            answerIndex: 0,
            explanation: 'Owning the narrative builds trust even when progress slows.'
          },
          {
            id: 'm4q3-4',
            prompt: 'How can notes support storytelling?',
            options: ['They capture quotes, data points, and client proof', 'They are not relevant for impact stories', 'They should only list tasks'],
            answerIndex: 0,
            explanation: 'Notes capture detail that brings stories to life.'
          }
        ]
      }
    ]
  }
];

const allItems = modulesData.flatMap((module) =>
  module.items.map((item, index) => ({
    ...item,
    moduleId: module.id,
    moduleNumber: module.number,
    moduleTitle: module.title,
    order: index + 1
  }))
);

const totalItems = allItems.length;

const defaultState = {
  version: STORAGE_VERSION,
  activeItemId: allItems[0]?.id ?? null,
  completed: {},
  eligible: {},
  quizScores: {},
  notes: {},
  videoProgress: {}
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(COURSE_STATE) || 'null');
    if (!stored || stored.version !== STORAGE_VERSION) {
      return { ...defaultState };
    }
    return { ...defaultState, ...stored };
  } catch (error) {
    console.error('Failed to parse course state', error);
    return { ...defaultState };
  }
}

let state = loadState();

const refs = {
  moduleList: $('[data-module-list]'),
  search: $('#lessonSearch'),
  modulesPanel: $('[data-modules-panel]'),
  modulesToggle: $('[data-toggle-modules]'),
  playerStage: $('[data-player-stage]'),
  playerSurface: $('[data-player-surface]'),
  playerError: $('[data-player-error]'),
  retryButton: $('[data-retry-item]'),
  overlay: $('[data-complete-overlay]'),
  overlayButton: $('[data-overlay-complete]'),
  markComplete: $('[data-mark-complete]'),
  captionsToggle: $('[data-toggle-captions]'),
  downloadButton: $('[data-download-video]'),
  itemTypeChip: $('[data-item-type]'),
  itemMetaChip: $('[data-item-meta]'),
  itemTitle: $('[data-item-title]'),
  itemDescription: $('[data-item-description]'),
  progressCount: $('[data-progress-count]'),
  progressTotal: $('[data-progress-total]'),
  summaryBar: $('[data-summary-bar]'),
  overallSummary: $('[data-overall-progress-count]'),
  overallWrapper: $('[data-overall-progress]'),
  toast: $('[data-autoplay-toast]'),
  toastText: $('[data-toast-text]'),
  toastCancel: $('[data-toast-cancel]'),
  notesForm: $('[data-notes-form]'),
  noteTextarea: $('#noteText'),
  notesStatus: $('[data-notes-status]'),
  notesList: $('[data-notes-list]'),
  notesCount: $('[data-notes-count]'),
  addTimecode: $('[data-add-timecode]')
};

refs.progressTotal.textContent = totalItems.toString();
if (refs.progressTotal) {
  refs.progressTotal.dataset.value = totalItems.toString();
}
if (refs.overallSummary) {
  const completedCount = Object.keys(state.completed).length;
  refs.overallSummary.dataset.completed = completedCount.toString();
  refs.overallSummary.dataset.total = totalItems.toString();
  const summaryTemplate = getCurrentLanguage() === 'mr' ? '{done} पैकी {total}' : '{done} of {total}';
  refs.overallSummary.textContent = summaryTemplate
    .replace('{done}', localizeNumber(completedCount))
    .replace('{total}', localizeNumber(totalItems));
}

const itemElements = new Map();
const moduleProgressRefs = new Map();
let currentItem = state.activeItemId ? allItems.find((item) => item.id === state.activeItemId) || allItems[0] : allItems[0];
let ytPlayer = null;
let youtubeReadyPromise = null;
let watchInterval = null;
let autoAdvanceTimer = null;

function persistState() {
  localStorage.setItem(COURSE_STATE, JSON.stringify(state));
}

function formatModuleTitle(module) {
  const label = translate('label.module', 'Module');
  const title = translate(`${module.id}.title`, module.title);
  return `${label} ${module.number} · ${title}`;
}

function buildModules() {
  if (!refs.moduleList) return;
  itemElements.clear();
  moduleProgressRefs.clear();
  refs.moduleList.innerHTML = '';
  modulesData.forEach((module) => {
    const card = document.createElement('section');
    card.className = 'module-card';
    card.dataset.moduleId = module.id;

    const header = document.createElement('div');
    header.className = 'module-card__header';
    const title = document.createElement('h3');
    title.className = 'module-card__title';
    title.textContent = formatModuleTitle(module);
    header.appendChild(title);

    const progress = document.createElement('div');
    progress.className = 'module-card__progress';
    const progressBar = document.createElement('div');
    progressBar.className = 'module-card__progress-bar';
    const progressFill = document.createElement('span');
    progressBar.appendChild(progressFill);
    const progressLabel = document.createElement('span');
    progressLabel.className = 'module-card__progress-label';
    const moduleItemCount = module.items.length;
    progressLabel.textContent = translate('progress.card', `0 / ${moduleItemCount} complete`)
      .replace('{done}', localizeNumber(0))
      .replace('{total}', localizeNumber(moduleItemCount));
    progress.appendChild(progressBar);
    progress.appendChild(progressLabel);
    header.appendChild(progress);

    card.appendChild(header);

    moduleProgressRefs.set(module.id, {
      fill: progressFill,
      label: progressLabel,
      card,
      total: moduleItemCount
    });

    const list = document.createElement('ul');
    list.className = 'module-card__items';

    module.items.forEach((item) => {
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lesson-row';
      button.dataset.itemId = item.id;
      button.dataset.moduleId = module.id;
      button.dataset.type = item.type;
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', 'false');

      const icon = document.createElement('span');
      icon.className = 'lesson-row__icon';
      icon.textContent = item.type === 'video' ? '▶' : '❓';

      const content = document.createElement('div');
      content.className = 'lesson-row__content';
      const titleSpan = document.createElement('span');
      titleSpan.className = 'lesson-row__title';
      titleSpan.textContent = translate(`${item.id}.title`, item.title);
      const metaSpan = document.createElement('span');
      metaSpan.className = 'lesson-row__meta';
      metaSpan.textContent = translate(`${item.id}.meta`, item.meta);
      content.appendChild(titleSpan);
      content.appendChild(metaSpan);

      const chevron = document.createElement('span');
      chevron.className = 'lesson-row__chevron';
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '›';

      button.appendChild(icon);
      button.appendChild(content);
      button.appendChild(chevron);

      button.addEventListener('click', () => selectItem(item.id, true));
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectItem(item.id, true);
        }
      });

      listItem.appendChild(button);
      list.appendChild(listItem);
      itemElements.set(item.id, button);
    });

    card.appendChild(list);
    refs.moduleList.appendChild(card);
  });
}

function getItemById(itemId) {
  return allItems.find((item) => item.id === itemId) || null;
}

function updateProgressUI() {
  const completedCount = Object.keys(state.completed).length;
  refs.progressCount.textContent = completedCount.toString();
  refs.progressCount.dataset.value = completedCount.toString();
  refs.summaryBar.style.transform = `scaleX(${completedCount / totalItems || 0})`;
  refs.summaryBar.parentElement?.setAttribute('aria-valuenow', completedCount.toString());
  if (refs.overallSummary) {
    refs.overallSummary.dataset.completed = completedCount.toString();
    refs.overallSummary.dataset.total = totalItems.toString();
    const summaryTemplate = getCurrentLanguage() === 'mr' ? '{done} पैकी {total}' : '{done} of {total}';
    refs.overallSummary.textContent = summaryTemplate
      .replace('{done}', localizeNumber(completedCount))
      .replace('{total}', localizeNumber(totalItems));
  }
  modulesData.forEach((module) => {
    const progressRef = moduleProgressRefs.get(module.id);
    if (!progressRef) return;
    const moduleCompleted = module.items.filter((item) => state.completed[item.id]).length;
    const total = progressRef.total || module.items.length || 1;
    const ratio = moduleCompleted / total;
    progressRef.fill.style.width = `${Math.min(1, ratio) * 100}%`;
    const progressText = translate('progress.card', `${moduleCompleted} / ${total} complete`)
      .replace('{done}', localizeNumber(moduleCompleted))
      .replace('{total}', localizeNumber(total));
    progressRef.label.textContent = progressText;
  });
}

function closeModulesPanelOnMobile() {
  if (!refs.modulesPanel) return;
  refs.modulesPanel.classList.remove('is-open');
  if (refs.modulesToggle) {
    refs.modulesToggle.setAttribute('aria-expanded', 'false');
  }
}

function selectItem(itemId, userInitiated = false) {
  const item = getItemById(itemId);
  if (!item) return;
  currentItem = item;
  state.activeItemId = item.id;
  persistState();
  updateActiveRow();
  renderCurrentItem();
  updateDetails();
  updateCompletionUI();
  loadNotes();
  hideToast();
  if (userInitiated) {
    closeModulesPanelOnMobile();
  }
}

function updateActiveRow() {
  itemElements.forEach((element, id) => {
    const isActive = id === currentItem.id;
    element.setAttribute('aria-selected', String(isActive));
    element.classList.toggle('is-active', isActive);
    element.setAttribute('data-complete', state.completed[id] ? 'true' : 'false');
    if (isActive && !element.hidden) {
      element.scrollIntoView({ block: 'nearest' });
    }
  });
}

function resetPlayerSurface() {
  if (watchInterval) {
    clearInterval(watchInterval);
    watchInterval = null;
  }
  refs.playerError.hidden = true;
  refs.overlay.hidden = true;
  refs.playerStage.innerHTML = '';
}

function ensureYouTubeAPI() {
  if (youtubeReadyPromise) return youtubeReadyPromise;
  youtubeReadyPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve();
      return;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    window.onYouTubeIframeAPIReady = () => resolve();
    document.head.appendChild(tag);
  });
  return youtubeReadyPromise;
}

function renderVideo(item) {
  if (ytPlayer) {
    try {
      ytPlayer.destroy();
    } catch (error) {
      console.warn('Unable to destroy existing player', error);
    }
    ytPlayer = null;
  }
  resetPlayerSurface();
  const media = document.createElement('div');
  media.id = 'yt-player';
  refs.playerStage.appendChild(media);
  refs.captionsToggle.disabled = false;
  refs.downloadButton.disabled = false;
  refs.addTimecode.disabled = false;

  ensureYouTubeAPI().then(() => {
    if (ytPlayer) {
      ytPlayer.loadVideoById(item.videoId);
    } else {
      ytPlayer = new YT.Player(media, {
        videoId: item.videoId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1
        },
        events: {
          onReady: () => onVideoReady(item),
          onStateChange: (event) => onVideoStateChange(event, item),
          onError: () => onVideoError()
        }
      });
    }
  });
}

function onVideoReady(item) {
  maybeResumeProgress(item);
}

function onVideoStateChange(event, item) {
  if (!ytPlayer) return;
  const PlayerState = window.YT?.PlayerState;
  if (!PlayerState) return;
  if (event.data === PlayerState.PLAYING) {
    startWatchInterval(item);
  } else if (event.data === PlayerState.PAUSED || event.data === PlayerState.BUFFERING) {
    if (watchInterval) {
      clearInterval(watchInterval);
      watchInterval = null;
    }
  } else if (event.data === PlayerState.ENDED) {
    if (watchInterval) {
      clearInterval(watchInterval);
      watchInterval = null;
    }
    markVideoProgress(item, 1);
    showCompletionEligibility(item);
    scheduleAutoAdvance(item);
  }
}

function onVideoError() {
  refs.playerError.hidden = false;
}

function startWatchInterval(item) {
  if (watchInterval) clearInterval(watchInterval);
  watchInterval = setInterval(() => {
    if (!ytPlayer) return;
    const duration = ytPlayer.getDuration();
    if (!duration) return;
    const current = ytPlayer.getCurrentTime();
    const progress = Math.min(current / duration, 1);
    markVideoProgress(item, progress);
    if (progress >= 0.95) {
      showCompletionEligibility(item);
    }
  }, 1000);
}

function markVideoProgress(item, progress) {
  state.videoProgress[item.id] = Math.max(state.videoProgress[item.id] || 0, progress);
  persistState();
}

function maybeResumeProgress(item) {
  const storedProgress = state.videoProgress[item.id];
  if (storedProgress && ytPlayer) {
    const duration = ytPlayer.getDuration();
    if (duration) {
      const seekTime = duration * storedProgress * 0.98;
      if (!Number.isNaN(seekTime) && seekTime > 0) {
        ytPlayer.seekTo(seekTime, true);
      }
    }
  }
}

function renderQuiz(item) {
  resetPlayerSurface();
  if (ytPlayer) {
    try {
      ytPlayer.stopVideo();
    } catch (error) {
      console.warn('Unable to stop video', error);
    }
  }
  refs.captionsToggle.disabled = true;
  refs.downloadButton.disabled = true;
  refs.addTimecode.disabled = true;
  const quizWrapper = document.createElement('div');
  quizWrapper.className = 'player-quiz';
  const body = document.createElement('form');
  body.className = 'player-quiz__body';
  body.setAttribute('novalidate', 'true');

  const heading = document.createElement('h2');
  heading.textContent = translate(`${item.id}.title`, item.title);
  const description = document.createElement('p');
  description.textContent = translate(`${item.id}.description`, item.description);
  const questionsContainer = document.createElement('div');
  questionsContainer.className = 'player-quiz__questions';

  item.questions.forEach((question, index) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'player-quiz__question';
    fieldset.dataset.questionId = question.id;
    const legend = document.createElement('legend');
    const prompt = translate(`${question.id}.prompt`, question.prompt);
    legend.textContent = `${localizeNumber(index + 1)}. ${prompt}`;
    fieldset.appendChild(legend);
    const optionsList = document.createElement('div');
    optionsList.className = 'player-quiz__options';

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement('label');
      label.className = 'player-quiz__option';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = question.id;
      input.value = optionIndex.toString();
      label.appendChild(input);
      const span = document.createElement('span');
      span.textContent = translate(`${question.id}.option${optionIndex}`, option);
      label.appendChild(span);
      optionsList.appendChild(label);
    });

    fieldset.appendChild(optionsList);
    questionsContainer.appendChild(fieldset);
  });

  const actions = document.createElement('div');
  actions.className = 'player-quiz__actions';
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'btn';
  submitButton.textContent = translate('label.submitQuiz', 'Submit quiz');
  const retryButton = document.createElement('button');
  retryButton.type = 'button';
  retryButton.className = 'btn btn--ghost';
  retryButton.textContent = translate('label.retry', 'Retry');
  retryButton.hidden = true;
  const feedback = document.createElement('p');
  feedback.className = 'player-quiz__feedback';
  feedback.hidden = true;

  actions.appendChild(submitButton);
  actions.appendChild(retryButton);
  actions.appendChild(feedback);

  body.appendChild(heading);
  body.appendChild(description);
  body.appendChild(questionsContainer);
  body.appendChild(actions);

  quizWrapper.appendChild(body);
  refs.playerStage.appendChild(quizWrapper);

  body.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(body);
    let correct = 0;
    item.questions.forEach((question) => {
      const selected = Number(formData.get(question.id));
      const fieldset = body.querySelector(`fieldset[data-question-id="${question.id}"]`);
      const options = fieldset?.querySelectorAll('.player-quiz__option');
      options?.forEach((optionLabel, optionIndex) => {
        optionLabel.dataset.state = '';
        const input = optionLabel.querySelector('input');
        if (!input) return;
        if (optionIndex === question.answerIndex) {
          optionLabel.dataset.state = 'correct';
        }
        if (input.checked && optionIndex !== question.answerIndex) {
          optionLabel.dataset.state = 'incorrect';
        }
      });
      if (!Number.isNaN(selected) && selected === question.answerIndex) {
        correct += 1;
      }
    });
    const total = item.questions.length;
    const score = Math.round((correct / total) * 100);
    state.quizScores[item.id] = score;
    persistState();
    feedback.hidden = false;
    feedback.textContent = formatQuizFeedback(score, correct, total);
    retryButton.hidden = false;
    if (score >= 70) {
      showCompletionEligibility(item);
    }
  });

  retryButton.addEventListener('click', () => {
    body.reset();
    feedback.hidden = true;
    retryButton.hidden = true;
    body.querySelectorAll('.player-quiz__option').forEach((option) => {
      option.dataset.state = '';
    });
  });
}

function renderCurrentItem() {
  if (!currentItem) return;
  if (currentItem.type === 'video') {
    renderVideo(currentItem);
  } else {
    renderQuiz(currentItem);
  }
}

function updateDetails() {
  if (!currentItem) return;
  refs.itemTypeChip.textContent = currentItem.type === 'video'
    ? translate('label.video', 'Video')
    : translate('label.quiz', 'Quiz');
  refs.itemTypeChip.classList.remove('chip--video', 'chip--quiz');
  refs.itemTypeChip.classList.add(currentItem.type === 'video' ? 'chip--video' : 'chip--quiz');
  refs.itemMetaChip.textContent = translate(`${currentItem.id}.meta`, currentItem.meta);
  refs.itemTitle.textContent = translate(`${currentItem.id}.title`, currentItem.title);
  refs.itemDescription.textContent = translate(`${currentItem.id}.description`, currentItem.description);
}

function isEligible(itemId) {
  return Boolean(state.eligible[itemId]);
}

function showCompletionEligibility(item) {
  if (state.completed[item.id]) return;
  state.eligible[item.id] = true;
  persistState();
  updateCompletionUI();
}

function updateCompletionUI() {
  if (!currentItem) return;
  const eligible = isEligible(currentItem.id);
  const completed = Boolean(state.completed[currentItem.id]);
  const shouldShowOverlay = currentItem.type === 'video' && eligible && !completed;
  refs.overlay.hidden = !shouldShowOverlay;
  refs.markComplete.hidden = !eligible;
  refs.markComplete.disabled = completed;
  refs.markComplete.textContent = completed
    ? translate('label.completed', 'Completed')
    : translate('label.markComplete', 'Mark as complete');
  refs.overlayButton.disabled = completed;
  refs.addTimecode.disabled = currentItem.type !== 'video';
  refs.downloadButton.disabled = currentItem.type !== 'video';
  refs.captionsToggle.disabled = currentItem.type !== 'video';
  itemElements.forEach((element, id) => {
    element.setAttribute('data-complete', state.completed[id] ? 'true' : 'false');
  });
  updateProgressUI();
}

function completeCurrentItem() {
  if (!currentItem) return;
  state.completed[currentItem.id] = true;
  persistState();
  refs.overlay.hidden = true;
  refs.markComplete.textContent = translate('label.completed', 'Completed');
  refs.markComplete.disabled = true;
  updateCompletionUI();
}

function getNextItem(itemId) {
  const index = allItems.findIndex((item) => item.id === itemId);
  if (index === -1) return null;
  return allItems[index + 1] || null;
}

function scheduleAutoAdvance(item) {
  const next = getNextItem(item.id);
  if (!next) return;
  const nextTitle = translate(`${next.id}.title`, next.title);
  refs.toastText.textContent = translate('toast.nextUp', `Next up: {title}`).replace('{title}', nextTitle);
  refs.toast.hidden = false;
  if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = setTimeout(() => {
    refs.toast.hidden = true;
    selectItem(next.id);
  }, AUTOPLAY_DELAY);
}

function hideToast() {
  refs.toast.hidden = true;
  if (autoAdvanceTimer) {
    clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
  }
}

function applySearchFilter() {
  if (!refs.search) return;
  const term = refs.search.value.trim().toLowerCase();
  modulesData.forEach((module) => {
    const progressRef = moduleProgressRefs.get(module.id);
    if (!progressRef) return;
    let visibleCount = 0;
    module.items.forEach((item) => {
      const element = itemElements.get(item.id);
      if (!element) return;
      const englishTitle = item.title.toLowerCase();
      const localizedTitle = translate(`${item.id}.title`, item.title).toLowerCase();
      const matches = !term || englishTitle.includes(term) || localizedTitle.includes(term);
      element.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    progressRef.card.hidden = term && visibleCount === 0;
  });
}

function handleNotesSubmit(event) {
  event.preventDefault();
  if (!currentItem) return;
  const value = refs.noteTextarea.value.trim();
  if (!value) return;
  const note = {
    id: `${currentItem.id}-${Date.now()}`,
    text: value,
    createdAt: new Date().toISOString()
  };
  const notes = state.notes[currentItem.id] || [];
  notes.push(note);
  state.notes[currentItem.id] = notes;
  refs.noteTextarea.value = '';
  refs.notesStatus.hidden = false;
  refs.notesStatus.textContent = translate('label.saved', 'Saved');
  setTimeout(() => {
    refs.notesStatus.hidden = true;
  }, 1500);
  persistState();
  loadNotes();
}

function formatTimecode(seconds) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `[${minutes}:${secs}]`;
}

function insertTimecode() {
  if (!currentItem || currentItem.type !== 'video' || !ytPlayer) return;
  const time = ytPlayer.getCurrentTime?.() || 0;
  const timecode = formatTimecode(time);
  const textarea = refs.noteTextarea;
  const { selectionStart, selectionEnd, value } = textarea;
  const nextValue = `${value.slice(0, selectionStart)}${timecode} ${value.slice(selectionEnd)}`;
  textarea.value = nextValue;
  const cursor = selectionStart + timecode.length + 1;
  textarea.setSelectionRange(cursor, cursor);
  textarea.focus();
}

function loadNotes() {
  if (!currentItem) return;
  if (refs.notesStatus) {
    refs.notesStatus.hidden = true;
  }
  const notes = state.notes[currentItem.id] || [];
  refs.notesCount.textContent = localizeNumber(notes.length);
  refs.notesList.innerHTML = '';
  if (!notes.length) {
    const empty = document.createElement('p');
    empty.className = 'notes-list__empty';
    empty.textContent = translate('programs.notes.empty', 'No notes yet for this item.');
    refs.notesList.appendChild(empty);
    return;
  }
  notes
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .forEach((note) => {
      const card = document.createElement('article');
      card.className = 'note-card';
      const meta = document.createElement('div');
      meta.className = 'note-card__meta';
      const time = new Date(note.createdAt).toLocaleString();
      meta.textContent = time;
      const actions = document.createElement('div');
      actions.className = 'note-card__actions';
      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.textContent = translate('label.delete', 'Delete');
      deleteButton.addEventListener('click', () => deleteNote(note.id));
      actions.appendChild(deleteButton);
      meta.appendChild(actions);
      const text = document.createElement('p');
      text.textContent = note.text;
      card.appendChild(meta);
      card.appendChild(text);
      refs.notesList.appendChild(card);
    });
}

function deleteNote(noteId) {
  if (!currentItem) return;
  const notes = state.notes[currentItem.id] || [];
  state.notes[currentItem.id] = notes.filter((note) => note.id !== noteId);
  persistState();
  loadNotes();
}

function handleDownload() {
  if (!currentItem || currentItem.type !== 'video') return;
  window.open(`https://www.youtube.com/watch?v=${currentItem.videoId}`, '_blank');
}

function handleRetry() {
  if (!currentItem || currentItem.type !== 'video') return;
  refs.playerError.hidden = true;
  renderVideo(currentItem);
}

function toggleCaptions() {
  if (!currentItem || currentItem.type !== 'video' || !ytPlayer) return;
  const pressed = refs.captionsToggle.getAttribute('aria-pressed') === 'true';
  const next = !pressed;
  refs.captionsToggle.setAttribute('aria-pressed', String(next));
  try {
    if (next) {
      ytPlayer.unloadModule?.('captions');
      ytPlayer.loadModule?.('captions');
    } else {
      ytPlayer.unloadModule?.('captions');
    }
  } catch (error) {
    console.warn('Unable to toggle captions', error);
  }
}

function wireEvents() {
  refs.modulesToggle?.addEventListener('click', () => {
    if (!refs.modulesPanel) return;
    const isOpen = refs.modulesPanel.classList.toggle('is-open');
    refs.modulesToggle.setAttribute('aria-expanded', String(isOpen));
  });
  refs.search?.addEventListener('input', applySearchFilter);
  refs.markComplete?.addEventListener('click', completeCurrentItem);
  refs.overlayButton?.addEventListener('click', completeCurrentItem);
  refs.downloadButton?.addEventListener('click', handleDownload);
  refs.retryButton?.addEventListener('click', handleRetry);
  refs.captionsToggle?.addEventListener('click', toggleCaptions);
  refs.toastCancel?.addEventListener('click', hideToast);
  refs.notesForm?.addEventListener('submit', handleNotesSubmit);
  refs.addTimecode?.addEventListener('click', insertTimecode);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideToast();
      if (refs.modulesPanel?.classList.contains('is-open')) {
        refs.modulesPanel.classList.remove('is-open');
        refs.modulesToggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

function init() {
  if (!allItems.length) return;
  buildModules();
  wireEvents();
  applySearchFilter();
  selectItem(currentItem.id);
}

init();

onLanguageChange(() => {
  if (!allItems.length) return;
  buildModules();
  applySearchFilter();
  updateActiveRow();
  updateDetails();
  updateCompletionUI();
  renderCurrentItem();
  updateProgressUI();
  loadNotes();
});

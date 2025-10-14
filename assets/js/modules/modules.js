import { registerTranslations, getCurrentLanguage, onLanguageChange } from './i18n.js';

const localizedNumber = (value, lang) => {
  if (lang === 'mr') {
    return value
      .toString()
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
  }
  return value.toString();
};

const updateLiveCounters = () => {
  const lang = getCurrentLanguage();
  const total = Number(document.querySelector('[data-progress-total]')?.dataset.value || 0);
  const current = Number(document.querySelector('[data-progress-count]')?.dataset.value || 0);
  const completed = Number(document.querySelector('[data-overall-progress-count]')?.dataset.completed || 0);
  const overallTotal = Number(document.querySelector('[data-overall-progress-count]')?.dataset.total || 0);
  const summary = document.querySelector('.player-column__summary-count');
  if (summary) {
    const template = lang === 'mr' ? '{current} पैकी {total} पूर्ण' : '{current} of {total} complete';
    summary.innerHTML = template
      .replace('{current}', `<strong data-progress-count>${localizedNumber(current, lang)}</strong>`)
      .replace('{total}', `<span data-progress-total>${localizedNumber(total, lang)}</span>`);
  }
  const overall = document.querySelector('[data-overall-progress-count]');
  if (overall) {
    const template = lang === 'mr' ? '{current} पैकी {total}' : '{current} of {total}';
    overall.innerHTML = template
      .replace('{current}', localizedNumber(completed, lang))
      .replace('{total}', localizedNumber(overallTotal, lang));
  }
};

const modulesTranslations = {
  'programs.breadcrumb.home': {
    mr: 'मुख्यपृष्ठ',
    en: 'Home',
  },
  'programs.breadcrumb.programs': {
    mr: 'कार्यक्रम',
    en: 'Programs',
  },
  'programs.breadcrumb.current': {
    mr: 'उद्योजकता १०१: शिवणकाम',
    en: 'Entrepreneurship 101: Tailoring',
  },
  'programs.header.title': {
    mr: 'उद्योजकता १०१: शिवणकाम',
    en: 'Entrepreneurship 101: Tailoring',
  },
  'programs.header.copy': {
    mr: 'अनुभवाधारित व्हिडिओ आणि जलद प्रश्नमंजुषांद्वारे शिवण व्यवसाय कौशल्ये वाढवा.',
    en: 'Build tailoring business skills through applied videos and pulse quizzes.',
  },
  'programs.header.progressLabel': {
    mr: 'घटक पूर्ण',
    en: 'items complete',
  },
  'programs.search.label': {
    mr: 'धडे आणि प्रश्नमंजुषा शोधा',
    en: 'Search lessons and quizzes',
  },
  'programs.search.input': {
    mr: { attrs: { placeholder: 'धडे आणि प्रश्नमंजुषा शोधा' } },
    en: { attrs: { placeholder: 'Search lessons and quizzes' } },
  },
  'programs.modules.toggle': {
    mr: 'मॉड्यूल्स',
    en: 'Modules',
  },
  'programs.modules.hint': {
    mr: 'धडे ब्राउझ करा आणि तुमची प्रगती पहा',
    en: 'Browse lessons and track your progress',
  },
  'programs.modules.subtitle': {
    mr: 'धडे ब्राउझ करा किंवा तुमची प्रगती तपासा.',
    en: 'Browse lessons or review your progress.',
  },
  'programs.modules.close': {
    mr: { attrs: { 'aria-label': 'मॉड्यूल सूची बंद करा', title: 'बंद करा' } },
    en: { attrs: { 'aria-label': 'Close modules list', title: 'Close' } },
  },
  'programs.summary.count': {
    mr: '<strong data-progress-count>०</strong> पैकी <span data-progress-total>२५</span> पूर्ण',
    en: '<strong data-progress-count>0</strong> of <span data-progress-total>25</span> complete',
  },
  'programs.player.placeholder': {
    mr: 'सुरू करण्यासाठी धडा निवडा.',
    en: 'Select a lesson to begin.',
  },
  'programs.player.overlayComplete': {
    mr: 'पूर्ण म्हणून चिन्हांकित करा',
    en: 'Mark as complete',
  },
  'programs.player.error': {
    mr: 'आम्ही हा धडा सध्या लोड करू शकलो नाही.',
    en: 'We couldn’t load this lesson right now.',
  },
  'programs.player.retry': {
    mr: 'पुन्हा प्रयत्न करा',
    en: 'Retry',
  },
  'programs.player.captions': {
    mr: 'उपशीर्षके',
    en: 'Captions',
  },
  'programs.player.download': {
    mr: 'व्हिडिओ डाउनलोड करा',
    en: 'Download video',
  },
  'programs.player.markComplete': {
    mr: 'पूर्ण म्हणून चिन्हांकित करा',
    en: 'Mark as complete',
  },
  'programs.player.markIncomplete': {
    mr: 'अपूर्ण म्हणून चिन्हांकित करा',
    en: 'Mark as incomplete',
  },
  'programs.details.title': {
    mr: 'सुरू करण्यासाठी धडा निवडा',
    en: 'Choose a lesson to get started',
  },
  'programs.details.copy': {
    mr: 'पाहणे किंवा सराव सुरू करण्यासाठी मॉड्यूल यादी वापरा.',
    en: 'Use the module list to begin watching or practising.',
  },
  'programs.toast.cancel': {
    mr: 'रद्द करा',
    en: 'Cancel',
  },
  'programs.notes.title': {
    mr: 'नोंदी',
    en: 'Notes',
  },
  'programs.notes.timecode': {
    mr: 'वेळ कोड जोडा',
    en: 'Add timecode',
  },
  'programs.notes.label': {
    mr: { text: 'नवीन नोंद', attrs: { 'aria-label': 'नवीन नोंद' } },
    en: { text: 'New note', attrs: { 'aria-label': 'New note' } },
  },
  'programs.notes.placeholder': {
    mr: { attrs: { placeholder: 'आपल्या टिपा लिहून ठेवा…' } },
    en: { attrs: { placeholder: 'Capture your takeaways…' } },
  },
  'programs.notes.save': {
    mr: 'नोंद जतन करा',
    en: 'Save note',
  },
  'programs.notes.saved': {
    mr: 'जतन झाले',
    en: 'Saved',
  },
  'programs.notes.empty': {
    mr: 'या घटकासाठी अजून नोंदी नाहीत.',
    en: 'No notes yet for this item.',
  },
};

let unsubscribe = null;

export const initModules = () => {
  if (!document.getElementById('page-modules')) return;
  registerTranslations(modulesTranslations);
  updateLiveCounters();
  if (unsubscribe) unsubscribe();
  unsubscribe = onLanguageChange(() => updateLiveCounters());
};

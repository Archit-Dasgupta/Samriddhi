import { $, COURSE_STATE } from './modules/common.js';

const VIDEO_ID = 'eqrSpQ_80-I';
const AUTOPLAY_DELAY = 5000;
const STORAGE_VERSION = 'v2';

const modulesData = [
  {
    id: 'module-1',
    number: 1,
    title: 'Setting the agenda',
    items: [
      {
        id: 'module-1-video-1',
        type: 'video',
        title: 'Video 1 · Why green finance now?',
        meta: '5 min',
        durationSeconds: 300,
        description:
          'Explore the market signals and regulatory shifts accelerating the transition to sustainable banking.',
        transcript:
          'Leaders across the industry are signalling that climate-positive finance is the new baseline. Use this lesson to anchor why the transformation is urgent and commercially vital.',
        videoId: 'fZkAlgF77ak'
      },
      {
        id: 'module-1-quiz-1',
        type: 'quiz',
        title: 'Quiz 1 · Key motivations',
        meta: '5 Qs',
        description: 'Check that you can articulate the drivers behind climate-aligned finance.',
        questions: [
          {
            id: 'm1q1',
            prompt: 'What is the biggest commercial reason banks are investing in green finance capabilities?',
            options: [
              'Clients increasingly expect sustainable products and advice',
              'It is only mandated by regulators with heavy fines',
              'It has no direct link to client expectations'
            ],
            answerIndex: 0,
            explanation: 'Commercial advantage comes from meeting client expectations for climate-aligned solutions.'
          },
          {
            id: 'm1q2',
            prompt: 'Which combination best summarises the pressure for climate action?',
            options: [
              'Regulation, client demand, investor scrutiny',
              'Technology, internal marketing, staff rotations',
              'Branch network growth, customer delight, expense cuts'
            ],
            answerIndex: 0,
            explanation: 'Regulators, clients, and investors collectively raise the standard for sustainable banking.'
          },
          {
            id: 'm1q3',
            prompt: 'Why does Samriddhi emphasise early wins in this module?',
            options: [
              'To build momentum and belief in a longer transition journey',
              'Because the rest of the program is optional',
              'To replace the need for executive sponsorship'
            ],
            answerIndex: 0,
            explanation: 'Early momentum keeps teams invested and unlocks deeper strategic change later.'
          },
          {
            id: 'm1q4',
            prompt: 'How should bankers talk about climate opportunity with clients?',
            options: [
              'Connect risk mitigation with commercial upside',
              'Focus on regulation only',
              'Avoid mentioning climate unless asked'
            ],
            answerIndex: 0,
            explanation: 'Linking risk and upside keeps the conversation practical and client-focused.'
          },
          {
            id: 'm1q5',
            prompt: 'What role do personal notes play in this program?',
            options: [
              'They surface insights to coaches and leaders',
              'They are optional and not reviewed',
              'They replace assessments'
            ],
            answerIndex: 0,
            explanation: 'Notes help you capture ideas to review with coaches and leadership.'
          }
        ]
      },
      {
        id: 'module-1-video-2',
        type: 'video',
        title: 'Video 2 · Principles of sustainable lending',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Understand how to evaluate sustainability credentials inside core credit workflows.',
        transcript:
          'This lesson breaks down practical screening tools that integrate sustainability into credit decisions and client conversations.',
        videoId: '_9WYaBH-8CY'
      },
      {
        id: 'module-1-quiz-2',
        type: 'quiz',
        title: 'Quiz 2 · Responsible lending check',
        meta: '4 Qs',
        description: 'Apply the credit-screening principles to realistic client scenarios.',
        questions: [
          {
            id: 'm1q2-1',
            prompt: 'Which factor is most important when assessing a client’s transition plan?',
            options: [
              'Clear interim targets tied to capital deployment',
              'Number of pages in the sustainability report',
              'Marketing commitments without metrics'
            ],
            answerIndex: 0,
            explanation: 'Targets that link to capital allocation signal credible transition plans.'
          },
          {
            id: 'm1q2-2',
            prompt: 'How should green finance teams partner with risk teams?',
            options: [
              'Share playbooks and review material exposures together',
              'Work independently to avoid slowing deals',
              'Wait for annual reviews to collaborate'
            ],
            answerIndex: 0,
            explanation: 'Joint reviews help align risk appetite with climate ambition in real time.'
          },
          {
            id: 'm1q2-3',
            prompt: 'What is the best next step when a client lacks emissions data?',
            options: [
              'Offer tools or partners to help establish a baseline',
              'Decline the relationship immediately',
              'Ignore the data gap until regulation forces disclosure'
            ],
            answerIndex: 0,
            explanation: 'Supporting clients with baselining positions you as a partner in their transition.'
          },
          {
            id: 'm1q2-4',
            prompt: 'When should a deal be flagged for enhanced review?',
            options: [
              'When exposure to high-risk sectors is material and lacks mitigation',
              'Whenever a client mentions climate strategy',
              'Only if the loan is over a certain ticket size'
            ],
            answerIndex: 0,
            explanation: 'High-risk sectors without mitigation warrant additional scrutiny regardless of ticket size.'
          }
        ]
      },
      {
        id: 'module-1-quiz-3',
        type: 'quiz',
        title: 'Quiz 3 · Alignment readiness',
        meta: '5 Qs',
        description: 'Ensure you can translate the alignment playbook into daily routines.',
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
    title: 'Designing transition-ready portfolios',
    items: [
      {
        id: 'module-2-video-1',
        type: 'video',
        title: 'Video 1 · Mapping portfolio emissions',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Learn how to identify hotspots in your lending book and set realistic decarbonisation goals.',
        transcript:
          'You will assess financed emissions, prioritise segments, and use data to guide strategic action.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-2-quiz-1',
        type: 'quiz',
        title: 'Quiz 1 · Emissions focus',
        meta: '4 Qs',
        description: 'Validate your approach to measuring portfolio emissions.',
        questions: [
          {
            id: 'm2q1-1',
            prompt: 'Which metric shows improvement when emissions intensity reduces?',
            options: ['Emissions per financed rupee', 'Total number of branches', 'Employee satisfaction scores'],
            answerIndex: 0,
            explanation: 'Intensity measures allow fair comparison even as the book grows.'
          },
          {
            id: 'm2q1-2',
            prompt: 'What is the first step after identifying a high-emitting sector?',
            options: [
              'Engage clients with transition pathways and financing options',
              'Exit the sector immediately',
              'Wait for regulatory guidance'
            ],
            answerIndex: 0,
            explanation: 'Engagement turns insight into commercial opportunity.'
          },
          {
            id: 'm2q1-3',
            prompt: 'Why track financed emissions annually?',
            options: [
              'To monitor progress and adjust capital allocation',
              'Because spreadsheets require yearly updates',
              'It is optional for climate strategies'
            ],
            answerIndex: 0,
            explanation: 'Regular tracking keeps the portfolio aligned to climate commitments.'
          },
          {
            id: 'm2q1-4',
            prompt: 'What data builds client trust?',
            options: [
              'Evidence-based benchmarking and scenario analysis',
              'Unofficial market rumours',
              'Generic marketing copy'
            ],
            answerIndex: 0,
            explanation: 'Robust benchmarking demonstrates credibility and partnership.'
          }
        ]
      },
      {
        id: 'module-2-video-2',
        type: 'video',
        title: 'Video 2 · Transition planning with clients',
        meta: '7 min',
        durationSeconds: 420,
        description:
          'Translate emissions insights into practical client roadmaps and financing structures.',
        transcript:
          'We review client archetypes, supportive instruments, and coaching tactics that move conversations forward.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-2-quiz-2',
        type: 'quiz',
        title: 'Quiz 2 · Client planning scenarios',
        meta: '5 Qs',
        description: 'Practise advising clients on the next steps in their transition plans.',
        questions: [
          {
            id: 'm2q2-1',
            prompt: 'When a client hesitates due to cost, what should you do first?',
            options: [
              'Model blended finance options with clear payback',
              'Suggest delaying action until regulation tightens',
              'Shift the topic away from climate'
            ],
            answerIndex: 0,
            explanation: 'Showing blended options helps clients see commercial value.'
          },
          {
            id: 'm2q2-2',
            prompt: 'Who should own the transition scorecard?',
            options: ['The client and banker jointly', 'Only the sustainability team', 'External consultants exclusively'],
            answerIndex: 0,
            explanation: 'Shared ownership keeps accountability clear and collaborative.'
          },
          {
            id: 'm2q2-3',
            prompt: 'What unlocks faster approvals?',
            options: ['Early engagement with risk partners', 'Submitting requests without context', 'Escalating after deals stall'],
            answerIndex: 0,
            explanation: 'Risk partners need context early to support climate-forward deals.'
          },
          {
            id: 'm2q2-4',
            prompt: 'How do you keep momentum between meetings?',
            options: ['Capture actions and blockers in shared notes', 'Wait for clients to reach out', 'Pause until the next review'],
            answerIndex: 0,
            explanation: 'Shared notes maintain continuity and accountability.'
          },
          {
            id: 'm2q2-5',
            prompt: 'What indicates a client is ready for transition finance?',
            options: [
              'They have defined metrics, investments, and executive sponsorship',
              'They only asked for marketing collateral',
              'They prefer to delay commitments indefinitely'
            ],
            answerIndex: 0,
            explanation: 'Clear metrics and sponsorship show readiness for financing support.'
          }
        ]
      },
      {
        id: 'module-2-video-3',
        type: 'video',
        title: 'Video 3 · Tracking climate impact with clients',
        meta: '6 min',
        durationSeconds: 360,
        description:
          'Design scorecards that keep clients motivated and demonstrate tangible climate impact.',
        transcript:
          'Use impact scorecards to keep stakeholders aligned and highlight both risk reduction and opportunity creation.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-2-quiz-3',
        type: 'quiz',
        title: 'Quiz 3 · Impact measurement',
        meta: '4 Qs',
        description: 'Show that you can measure impact and coach clients through the data.',
        questions: [
          {
            id: 'm2q3-1',
            prompt: 'What should every impact scorecard include?',
            options: [
              'Baseline, target, and actual performance metrics',
              'Only qualitative stories',
              'A summary of marketing campaigns'
            ],
            answerIndex: 0,
            explanation: 'Clear metrics prove progress and reveal gaps.'
          },
          {
            id: 'm2q3-2',
            prompt: 'How often should you review client impact data?',
            options: ['At agreed intervals aligned to financing milestones', 'Once at the end of the year', 'Only when regulators request it'],
            answerIndex: 0,
            explanation: 'Regular reviews keep financing aligned to outcomes.'
          },
          {
            id: 'm2q3-3',
            prompt: 'What signals a need to recalibrate support?',
            options: ['Falling behind on targets or unexpected risks', 'A successful marketing campaign', 'A new branch opening'],
            answerIndex: 0,
            explanation: 'Target slippage or new risks need action to stay on track.'
          },
          {
            id: 'm2q3-4',
            prompt: 'How do you celebrate progress?',
            options: ['Share stories and data across client and internal teams', 'Keep results private', 'Wait for formal awards'],
            answerIndex: 0,
            explanation: 'Celebrating progress sustains motivation and visibility.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    number: 3,
    title: 'Financing innovation and partnerships',
    items: [
      {
        id: 'module-3-video-1',
        type: 'video',
        title: 'Video 1 · Catalysing blended finance',
        meta: '7 min',
        durationSeconds: 420,
        description: 'See how public and private capital work together to unlock transition projects.',
        transcript: 'We unpack blended finance structures and how to position them with clients and partners.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-3-quiz-1',
        type: 'quiz',
        title: 'Quiz 1 · Blended finance toolkit',
        meta: '5 Qs',
        description: 'Assess your readiness to advise on blended finance structures.',
        questions: [
          {
            id: 'm3q1-1',
            prompt: 'What makes blended finance attractive to clients?',
            options: [
              'Risk-sharing that accelerates climate investments',
              'It replaces the need for diligence',
              'It removes all regulatory requirements'
            ],
            answerIndex: 0,
            explanation: 'Risk-sharing mechanisms unlock projects that otherwise stall.'
          },
          {
            id: 'm3q1-2',
            prompt: 'Who are key partners in blended transactions?',
            options: ['Development banks and impact investors', 'Only internal teams', 'Marketing agencies'],
            answerIndex: 0,
            explanation: 'External partners bring catalytic capital and expertise.'
          },
          {
            id: 'm3q1-3',
            prompt: 'What should you clarify early with partners?',
            options: ['Risk appetite, impact goals, and timelines', 'Logo placement', 'Travel itineraries'],
            answerIndex: 0,
            explanation: 'Alignment on goals and risk appetite keeps structures efficient.'
          },
          {
            id: 'm3q1-4',
            prompt: 'How do you position Samriddhi in blended finance?',
            options: ['As a convenor that brings the right partners together', 'As a passive observer', 'As a marketing channel only'],
            answerIndex: 0,
            explanation: 'Samriddhi convenes expertise, capital, and execution support.'
          },
          {
            id: 'm3q1-5',
            prompt: 'When should you capture lessons learned?',
            options: ['Throughout the deal cycle', 'Only after financial close', 'Only during annual reviews'],
            answerIndex: 0,
            explanation: 'Continuous learning improves speed and quality for future deals.'
          }
        ]
      },
      {
        id: 'module-3-video-2',
        type: 'video',
        title: 'Video 2 · Partnering for climate innovation',
        meta: '6 min',
        durationSeconds: 360,
        description: 'Discover how to co-create solutions with fintechs, corporates, and governments.',
        transcript: 'Collaborations succeed when incentives are aligned and value is shared across partners.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-3-quiz-2',
        type: 'quiz',
        title: 'Quiz 2 · Partnership design',
        meta: '4 Qs',
        description: 'Evaluate which partnership model fits each climate opportunity.',
        questions: [
          {
            id: 'm3q2-1',
            prompt: 'What is the first step when exploring a partnership?',
            options: ['Agree on the shared problem to solve', 'Negotiate marketing spend', 'Sign an NDA immediately'],
            answerIndex: 0,
            explanation: 'Alignment on the problem keeps discussions focused.'
          },
          {
            id: 'm3q2-2',
            prompt: 'How do you maintain momentum?',
            options: ['Set short sprints with clear deliverables', 'Wait for annual planning cycles', 'Let partners lead without input'],
            answerIndex: 0,
            explanation: 'Short sprints keep teams engaged and accountable.'
          },
          {
            id: 'm3q2-3',
            prompt: 'What information should be captured in notes?',
            options: ['Stakeholder commitments and blockers', 'Only successes', 'Only financial metrics'],
            answerIndex: 0,
            explanation: 'Comprehensive notes ensure smooth handovers and learning.'
          },
          {
            id: 'm3q2-4',
            prompt: 'When should you revisit partnership economics?',
            options: ['When assumptions or external factors shift', 'Never, once agreed', 'Only if the partner requests'],
            answerIndex: 0,
            explanation: 'Revisiting economics keeps the partnership sustainable.'
          }
        ]
      },
      {
        id: 'module-3-video-3',
        type: 'video',
        title: 'Video 3 · Scaling sustainable products',
        meta: '7 min',
        durationSeconds: 420,
        description: 'Translate pilots into scalable offerings with the right governance.',
        transcript: 'Scaling requires product-market fit, risk alignment, and robust measurement systems.',
        videoId: VIDEO_ID
      },
      {
        id: 'module-3-quiz-3',
        type: 'quiz',
        title: 'Quiz 3 · Go-to-market pulse',
        meta: '5 Qs',
        description: 'Confirm that you can structure launches for climate-positive products.',
        questions: [
          {
            id: 'm3q3-1',
            prompt: 'What unlocks scale after a pilot succeeds?',
            options: ['Clear governance and resourcing', 'Only marketing investment', 'Waiting for organic growth'],
            answerIndex: 0,
            explanation: 'Governance and resourcing make scale predictable.'
          },
          {
            id: 'm3q3-2',
            prompt: 'How do you keep teams engaged post-launch?',
            options: ['Share performance dashboards and next milestones', 'Let teams disengage until issues arise', 'Stop meetings once the launch is done'],
            answerIndex: 0,
            explanation: 'Visibility and milestones sustain energy for scale.'
          },
          {
            id: 'm3q3-3',
            prompt: 'What should you do when a product underperforms?',
            options: ['Review feedback, adjust positioning, and coach teams', 'Discontinue immediately', 'Ignore signals until year end'],
            answerIndex: 0,
            explanation: 'Iterating based on feedback keeps progress moving.'
          },
          {
            id: 'm3q3-4',
            prompt: 'Which notes are most valuable to leadership?',
            options: ['Insights on adoption, blockers, and client sentiment', 'Detailed travel logs', 'Unfiltered raw data only'],
            answerIndex: 0,
            explanation: 'Leadership needs actionable insights to guide investment.'
          },
          {
            id: 'm3q3-5',
            prompt: 'Why link climate KPIs to incentives?',
            options: ['To reinforce desired behaviours and accountability', 'To create extra admin', 'To signal it is optional'],
            answerIndex: 0,
            explanation: 'Incentives aligned to KPIs keep focus on climate outcomes.'
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
if (refs.overallSummary) {
  refs.overallSummary.textContent = `${Object.keys(state.completed).length} of ${totalItems}`;
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
  return `Module ${module.number} · ${module.title}`;
}

function buildModules() {
  if (!refs.moduleList) return;
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
    progressLabel.textContent = `0 / ${moduleItemCount} complete`;
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
      titleSpan.textContent = item.title;
      const metaSpan = document.createElement('span');
      metaSpan.className = 'lesson-row__meta';
      metaSpan.textContent = item.meta;
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
  refs.summaryBar.style.transform = `scaleX(${completedCount / totalItems || 0})`;
  refs.summaryBar.parentElement?.setAttribute('aria-valuenow', completedCount.toString());
  if (refs.overallSummary) {
    refs.overallSummary.textContent = `${completedCount} of ${totalItems}`;
  }
  modulesData.forEach((module) => {
    const progressRef = moduleProgressRefs.get(module.id);
    if (!progressRef) return;
    const moduleCompleted = module.items.filter((item) => state.completed[item.id]).length;
    const total = progressRef.total || module.items.length || 1;
    const ratio = moduleCompleted / total;
    progressRef.fill.style.width = `${Math.min(1, ratio) * 100}%`;
    progressRef.label.textContent = `${moduleCompleted} / ${total} complete`;
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
  heading.textContent = item.title;
  const description = document.createElement('p');
  description.textContent = item.description;
  const questionsContainer = document.createElement('div');
  questionsContainer.className = 'player-quiz__questions';

  item.questions.forEach((question, index) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'player-quiz__question';
    fieldset.dataset.questionId = question.id;
    const legend = document.createElement('legend');
    legend.textContent = `${index + 1}. ${question.prompt}`;
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
      span.textContent = option;
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
  submitButton.textContent = 'Submit quiz';
  const retryButton = document.createElement('button');
  retryButton.type = 'button';
  retryButton.className = 'btn btn--ghost';
  retryButton.textContent = 'Retry';
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
    feedback.textContent = `You scored ${score}% (${correct} of ${total}). ${
      score >= 70
        ? 'Great work—mark this quiz complete when you are ready.'
        : 'You need 70% to pass. Adjust your answers and retry.'
    }`;
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
  refs.itemTypeChip.textContent = currentItem.type === 'video' ? 'Video' : 'Quiz';
  refs.itemTypeChip.classList.remove('chip--video', 'chip--quiz');
  refs.itemTypeChip.classList.add(currentItem.type === 'video' ? 'chip--video' : 'chip--quiz');
  refs.itemMetaChip.textContent = currentItem.meta;
  refs.itemTitle.textContent = currentItem.title;
  refs.itemDescription.textContent = currentItem.description;
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
  refs.markComplete.textContent = completed ? 'Completed' : 'Mark as complete';
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
  refs.markComplete.textContent = 'Completed';
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
  refs.toastText.textContent = `Next up: ${next.title}`;
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
      const matches = !term || item.title.toLowerCase().includes(term);
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
  refs.notesStatus.textContent = 'Saved';
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
  refs.notesCount.textContent = notes.length.toString();
  refs.notesList.innerHTML = '';
  if (!notes.length) {
    const empty = document.createElement('p');
    empty.className = 'notes-list__empty';
    empty.textContent = 'No notes yet for this item.';
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
      deleteButton.textContent = 'Delete';
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

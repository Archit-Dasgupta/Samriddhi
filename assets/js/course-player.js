import { $, COURSE_STATE } from './modules/common.js';

const VIDEO_ID = 'eqrSpQ_80-I';
const AUTOPLAY_DELAY = 5000;
const STORAGE_VERSION = 'v2';

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
        meta: '4 Qs',
        description: 'Apply the investment and costing concepts to practical business scenarios.',
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

export const modulesData = [
  {
    id: 'intro-tailoring',
    title: 'Introduction to Tailoring',
    minutes: 65,
    summary: 'Learn how to prepare your workspace, handle the sewing machine with care, and take the first confident stitches.',
    highlight: {
      badge: 'Start here',
      text: 'Set up a friendly sewing corner at home, learn how to keep children safe around the machine, and practice your first projects with confidence.',
      tips: ['Keep a cloth under the machine to steady it on wooden tables.', 'Work with the power off while threading the needle.', 'Take short breaks every 20 minutes to relax your eyes and shoulders.'],
    },
    items: [
      { type: 'video', title: 'Welcome & safety', mins: 6, videoId: '2vu1NjKzrus' },
      { type: 'video', title: 'Understanding your machine', mins: 12, videoId: 'gY3sU6lGz-g' },
      { type: 'quiz', title: 'Checkpoint Quiz 1', mins: 5, quizId: 'q1' },
      { type: 'video', title: 'Threads & needles', mins: 10, videoId: 'YTtFNdtGoKg' },
      {
        type: 'reading',
        title: 'Finding fabric locally',
        mins: 6,
        copy: 'Visit the weekly market early morning to get the best choice of fabric. Carry a measuring tape and a notebook to write rates so you can compare later. Build a friendly relationship with the shopkeeper—ask about leftover fabric pieces that are often sold at a discount.',
      },
      { type: 'video', title: 'Your first stitch', mins: 10, videoId: 'r60t4ZrR79E' },
      { type: 'video', title: 'Care & maintenance', mins: 16, videoId: '5Cjz91W4TZA' },
    ],
  },
  {
    id: 'business-basics',
    title: 'Business Basics',
    minutes: 35,
    summary: 'Build simple money habits and understand how to price your work so every order supports your family.',
    highlight: {
      badge: 'Stay profitable',
      text: 'Understand what to charge and how to record every rupee so your tailoring work grows month after month.',
      tips: ['Always include the cost of thread, lining, and buttons when fixing a price.', 'Use a simple 100-page notebook to write orders and payments.', 'Keep emergency savings equal to at least one month of household costs.'],
    },
    items: [
      { type: 'video', title: 'Pricing a blouse', mins: 12, videoId: 'S6vT6K9Fzc4' },
      { type: 'quiz', title: 'Checkpoint Quiz 2', mins: 5, quizId: 'q2' },
      { type: 'video', title: 'Managing orders', mins: 8, videoId: 'Y0J2JgC6w0Q' },
      {
        type: 'reading',
        title: 'Keeping a cashbook',
        mins: 10,
        copy: 'Divide a page into two columns—money in and money out. Write every order with the customer name, advance received, and delivery date. At the end of each week add the totals so you know if you earned a profit.',
      },
    ],
  },
];

export const quizBanks = {
  q1: [
    { q: 'Best way to record daily cash?', opts: ['Remember in your head', 'Write in a cashbook', 'Note only in bank passbook'], ans: 1 },
    { q: 'What goes into blouse price?', opts: ['Only thread', 'Only fabric', 'All materials and your time'], ans: 2 },
    { q: 'When should you service the machine?', opts: ['Never', 'Only when it breaks', 'Regularly as per the manual'], ans: 2 },
  ],
  q2: [
    { q: 'Why keep a cashbook?', opts: ['For decoration', 'To track income and expense', 'Only to show the bank'], ans: 1 },
    { q: 'Working capital example?', opts: ['Daily cash for orders', 'Buying a shop', 'Buying land'], ans: 0 },
    { q: 'If income is ₹15,000, a safe EMI share is about…', opts: ['10%', '35%', '80%'], ans: 1 },
  ],
};

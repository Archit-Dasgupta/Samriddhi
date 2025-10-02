export const modulesData = [
  {
    id: 'intro-tailoring',
    title: 'Introduction to Tailoring',
    minutes: 65,
    summary: 'Learn how to prepare your workspace, handle the sewing machine with care, and take the first confident stitches.',
    items: [
      { type: 'video', title: 'Welcome & safety', mins: 6 },
      { type: 'video', title: 'Understanding your machine', mins: 12 },
      { type: 'quiz', title: 'Checkpoint Quiz 1', mins: 5, quizId: 'q1' },
      { type: 'video', title: 'Threads & needles', mins: 10 },
      { type: 'reading', title: 'Finding fabric locally', mins: 6 },
      { type: 'video', title: 'Your first stitch', mins: 10 },
      { type: 'video', title: 'Care & maintenance', mins: 16 },
    ],
  },
  {
    id: 'business-basics',
    title: 'Business Basics',
    minutes: 35,
    summary: 'Build simple money habits and understand how to price your work so every order supports your family.',
    items: [
      { type: 'video', title: 'Pricing a blouse', mins: 12 },
      { type: 'quiz', title: 'Checkpoint Quiz 2', mins: 5, quizId: 'q2' },
      { type: 'video', title: 'Managing orders', mins: 8 },
      { type: 'reading', title: 'Keeping a cashbook', mins: 10 },
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

export const stats = [
    {
      label: "Sessions",
      value: "5",
      caption: "3 complete · 2 upcoming",
    },
    {
      label: "Moments",
      value: "142",
      caption: "84 marks · 41 clips · 17 AI",
    },
    {
      label: "Topics",
      value: "9",
      caption: "6 curated · 3 AI generated",
    },
    {
      label: "Reels",
      value: "4",
      caption: "2 published · 2 draft",
    },
  ];
  
  export const todaySessions = [
    {
      id: 1,
      time: "11:00 AM",
      title: "Checkout Flow — Respondent 4",
      meta: "Zoom · 60 min · Maya Schrantz",
      status: "live",
      action: "Join",
    },
    {
      id: 2,
      time: "2:30 PM",
      title: "Pricing Comprehension — Respondent 5",
      meta: "Zoom · 45 min · Jordan Kim",
      status: "upcoming",
      statusLabel: "In 3 hrs",
      action: "Start",
    },
    {
      id: 3,
      time: "4:00 PM",
      title: "Integrations Walkthrough — Resp. 6",
      meta: "In-person · 30 min · Tobi Adebayo",
      status: "scheduled",
      statusLabel: "Scheduled",
      action: "View",
    },
  ];
  
  export const calendar = {
    month: "June 2026",
    days: ["S", "M", "T", "W", "T", "F", "S"],
    weeks: [
      [null, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, null, null, null, null],
    ],
    scheduled: [9, 11, 16, 18, 20, 24],
    today: 4,
  };
  
  export const sentiment = {
    positive: 58,
    neutral: 27,
    negative: 15,
  };
  
  export const chatMessages = [
    {
      id: 1,
      role: "user",
      text: "Where does the project stand right now?",
    },
    {
      id: 2,
      role: "assistant",
      text: [
        "3 of 5 sessions are complete and tagged — 142 moments so far, sentiment running ",
        { highlight: "58% positive" },
        ". Two sessions remain today. I'll compile the final report the moment they wrap.",
      ],
    },
    {
      id: 3,
      role: "user",
      text: "What are clients most frustrated about?",
    },
    {
      id: 4,
      role: "assistant",
      text: [
        "Across the 3 completed sessions, the loudest frustration is ",
        { highlight: "pricing comprehension" },
        " — 31 moments, mostly annual-vs-monthly billing only surfacing at checkout. ",
        { highlight: "Workspace invites" },
        " are a secondary friction (",
        { highlight: "24 moments" },
        "). Want me to pull the clearest 3 clips?",
      ],
      timestamp: "now",
    },
  ];
  
  export const suggestedPrompts = [
    "Summarize all sessions",
    "Which moments belong in the final reel?",
  ];
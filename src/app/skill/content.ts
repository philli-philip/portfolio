import type { Skills, tLevels } from "./page";

type tArea = {
  title: tLevels;
  description: string;
  skills: number;
};

export const lvlContent: tArea[] = [
  {
    title: "L1",
    description: "L1 is all about getting started in the field of design.",
    skills: 27,
  },
  {
    title: "L2",
    description:
      "L2 is all about getting getting settled, know roughly what you want. where you want it.",
    skills: 28,
  },
  {
    title: "L3",
    description:
      "L3 is all about getting getting settled, know roughly what you want. where you want it.",
    skills: 32,
  },
  {
    title: "L4",
    description:
      "L4 is all about getting getting settled, know roughly what you want. where you want it.",
    skills: 29,
  },
  {
    title: "L5",
    description:
      "L5 is all about getting getting settled, know roughly what you want. where you want it.",
    skills: 28,
  },
  {
    title: "L6",
    description:
      "L6 is all about getting getting settled, know roughly what you want. where you want it.",
    skills: 0,
  },
];

export const blankSkills: Skills = [
  {
    checked: false,
    id: "1",
    description:
      "You methodically investigate or audit part of a system, and summarize findings.",
    level: "L1",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "2",
    description:
      "You operate within a well-defined part of a complex system given documentation, and you ask for help when you need it.",
    level: "L1",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "3",
    description:
      "You start to prototype your ideas to bring work to life and illustrate flows more clearly.",
    level: "L1",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "4",
    description:
      "You’re eager to learn new tools and practices to improve the fidelity of your ideas.",
    level: "L1",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "5",
    description:
      "You start to prototype your ideas to bring work to life and illustrate flows more clearly.",
    level: "L1",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "6",
    description:
      "Your designs strive for consistency with patterns throughout the product.",
    level: "L1",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "7",
    description:
      "You explore multiple solutions for problems, leveraging our design system for components and styles.",
    level: "L1",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "8",
    description:
      "You reference industry patterns in your work and are building your knowledge of our design system.",
    level: "L1",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "9",
    description:
      "You participate in vision activities by generating ideas and helping mock up/frame concepts.",
    level: "L1",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "10",
    description: "You ask about success metrics.",
    level: "L1",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "11",
    description:
      "You have a basic understanding of when and how to validate your work through research. ",
    level: "L1",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "12",
    description:
      "You’re building your knowledge of the competitive landscape by spending time with other tools (e.g. conducting audits). ",
    level: "L1",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "13",
    description:
      "You’re starting to flag dependencies and edge cases and question requirements when you’re unsure how they support real user needs.",
    level: "L1",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "14",
    description:
      "You ask good questions to understand who you’re building for and why. You push for clarity and seek help if you don’t get it.",
    level: "L1",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "15",
    description:
      "You’re building an understanding of the business and its goals. Your work aims to solve key user problems, and you’re starting to connect your work to business goals.",
    level: "L1",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "16",
    description:
      "You follow up post launch to assess your work’s impact and effectiveness.",
    level: "L1",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "17",
    description: "You file bugs when you spot quality issues.",
    level: "L1",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "18",
    description: "You help others by giving actionable feedback.",
    level: "L1",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "19",
    description:
      "You participate in company culture activities, like ERGs, Maker Week, or Show & Tell. You attend FigNation to stay up to date on company activities.",
    level: "L1",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "20",
    description:
      "You volunteer to help out with team programs, like hosting warm-up.",
    level: "L1",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "21",
    description:
      "You notice overlaps or dependencies between projects and escalate conversations to resolve them.",
    level: "L2",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "22",
    description:
      "You build confidence in a direction with your eng/PM partners before acting.",
    level: "L2",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "23",
    description:
      "Your industry knowledge and understanding of our users starts to deepen and guide your own work.",
    level: "L2",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "24",
    description:
      "You partner with research to define the questions to ask and problems to explore. ",
    level: "L2",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "25",
    description:
      "You’re able to interpret metrics and make data-informed decisions.",
    level: "L2",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "26",
    description:
      "You assist PMs and more senior designers/writers in bringing larger strategic vision work to life (e.g. by creating mocks, designing decks, and writing documents).",
    level: "L2",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "27",
    description:
      "You explore a wide breath of design options and articulate trade-offs with each.",
    level: "L2",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "28",
    description:
      "You use industry patterns but know when something doesn’t work and can be pushed further.",
    level: "L2",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "29",
    description:
      "You are building your understanding on where our system can flex to accommodate certain needs.",
    level: "L2",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "30",
    description:
      "You go beyond click-through prototypes and incorporate animations and transitions across various interactions.",
    level: "L2",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "31",
    description:
      "You are familiar with common industry interaction patterns and reference them in your work.",
    level: "L2",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "32",
    description:
      "Your prototypes start to feel more like the “real thing” and are higher fidelity overall.",
    level: "L2",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "33",
    description: "You consider edge cases when designing for complex systems.",
    level: "L2",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "34",
    description:
      "You document part of the complex system and onboard other people.",
    level: "L2",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "35",
    description:
      "You’re growing your storytelling abilities your presentations have a clear narrative, good context setting, and you’re building your skills at leading meetings confidently and effectively.",
    level: "L2",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "36",
    description:
      "You’re responsive, pleasant, and proactive in your communication across all channels.",
    level: "L1",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "37",
    description:
      "You present your work clearly in a way others can understand.",
    level: "L1",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "38",
    description:
      "Your design documentation is easy to follow, and you participate regularly in conversations at the team level.",
    level: "L1",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "39",
    description:
      "You share work regularly and ask for feedback on your working style and on the work itself. ",
    level: "L1",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "40",
    description: "You triage feedback on your work and ensure follow-ups.",
    level: "L1",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "41",
    description:
      "You work to resolve situations when you’re not looped in at the right times.",
    level: "L1",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "42",
    description:
      "You’re eager to help with whatever needs doing on projects—no job is too small.",
    level: "L1",
    category: "mindset",
    area: "collaboration",
  },
  {
    checked: false,
    id: "43",
    description: "Your written communication is clear and concise.",
    level: "L2",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "44",
    description:
      "You have a clear process: it’s easy for work partners to know your priorities and predict the cadence of your work.",
    level: "L2",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "45",
    description:
      "You’re starting to work more independently. You know how to manage bandwidth, and speak up if your plate is full.",
    level: "L2",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "46",
    description:
      "You triage feedback diligently nothing falls through the cracks.",
    level: "L2",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "47",
    description:
      "You maintain an open mindset toward changes and challenges, looking for how you can help and grow.",
    level: "L2",
    category: "mindset",
    area: "collaboration",
  },
  {
    checked: false,
    id: "48",
    description:
      "You understand how your work contributes to the business and prioritize accordingly.",
    level: "L2",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "49",
    description: "You participate in roadmapping and planning conversations.",
    level: "L2",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "50",
    description:
      "You address post launch issues and make suggestions to improve your impact.",
    level: "L2",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "51",
    description:
      "You routinely help other designers/writers on the team grow, through your feedback or through skill shares.",
    level: "L2",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "52",
    description:
      "You offer suggestions on how our product and processes can improve and help implement solutions.",
    level: "L2",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "53",
    description: "You suggest and implement team culture improvements.",
    level: "L2",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "54",
    description:
      "You participate in some hiring activities, like interviewing candidates and sourcing jams.",
    level: "L2",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "55",
    description: "You help plan team cultural initiatives, like offsites.",
    level: "L2",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "56",
    description:
      "You proactively address and resolve dependencies across team boundaries.",
    level: "L3",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "57",
    description:
      "You drive your own team toward clarity on what you’re building, why, and for whom.",
    level: "L3",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "58",
    description: "You can do research to validate your own work if necessary. ",
    level: "L3",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "59",
    description:
      "Data guides your work, and you’re able to suggest and question how to measure your work’s success. ",
    level: "L3",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "60",
    description:
      "Your comprehensive knowledge of industry design patterns deeply impacts your work.",
    level: "L3",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "61",
    description:
      "You’re starting to develop your own POV you’re trusted to own parts of larger strategic vision, working independently or partnering with others to bring the vision to life.",
    level: "L3",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "62",
    description:
      "You proactively organize sprints or other processes to further define vision if it’s otherwise lacking.",
    level: "L3",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "63",
    description: "Your work has few visual issues.",
    level: "L3",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "64",
    description:
      "You start to form tenets as you design and fall back on them to help make decisions.",
    level: "L3",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "65",
    description:
      "You consider all constraints (like dark mode and localization).",
    level: "L3",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "66",
    description:
      "Your work is thorough and complete when it comes to all interaction details (like hover/focus and shortcuts).",
    level: "L3",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "67",
    description:
      "You prototype fluently and quickly and you get helpful feedback from collaborators with them.",
    level: "L3",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "68",
    description:
      "Your prototype is thorough and complete when it comes to all interaction details (like hover/focus and keyboard shortcuts).",
    level: "L3",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "69",
    description:
      "Your designs are holistic and consider complex cases of existing systems.",
    level: "L3",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "70",
    description:
      "You can recall internal properties/style guides of systems and explain them to stakeholders.",
    level: "L3",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "71",
    description:
      "You are comfortable collaborating with engineering and PM to understand a system completely and improve it.",
    level: "L3",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "72",
    description: "You present work with polish and confidence.",
    level: "L3",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "73",
    description:
      "You lead meetings effectively, and could represent the company well externally. ",
    level: "L3",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "74",
    description: "You’re growing skills at conflict resolution.",
    level: "L3",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "75",
    description: "Your written communication is compelling and clear.",
    level: "L3",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "76",
    description:
      "Your process is adaptable and efficient. You generate and maintain momentum.",
    level: "L3",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "77",
    description:
      "You handle feedback thoroughly and gracefully, and know when to change direction vs. staying the course. ",
    level: "L3",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "78",
    description:
      "You’re becoming proficient at managing stakeholders and regularly work without close oversight.",
    level: "L3",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "79",
    description:
      "You lead with resiliency in the face of challenges, and routinely help manage change for other team members.",
    level: "L3",
    category: "mindset",
    area: "collaboration",
  },
  {
    checked: false,
    id: "80",
    description: "You’re a model for growth and resiliency on the team.",
    level: "L3",
    category: "mindset",
    area: "collaboration",
  },
  {
    checked: false,
    id: "81",
    description:
      "You help drive roadmapping and planning conversations and have a deep understanding of how your work connects to business goals.",
    level: "L3",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "82",
    description:
      "You work with appropriate urgency, consistently pushing projects forward.",
    level: "L3",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "83",
    description:
      "You file bugs not only for your team but for other teams as well to prioritize quality.",
    level: "L3",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "84",
    description:
      "You’re starting to uplevel other teammates skills through more formal coaching and mentorship (e.g. interns or more junior designers/writers). Others actively seek your feedback, and listen to your guidance.",
    level: "L3",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "85",
    description:
      "You drive initiatives that improve our team’s workflows and the lives of other designers.",
    level: "L3",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "86",
    description:
      "You’re an owner of our team culture, suggesting new rituals and activities to bring us together as a team.",
    level: "L3",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "87",
    description:
      "You actively participate in hiring, whether through interviewing, sourcing, or suggesting improvements to our processes.",
    level: "L3",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "88",
    description:
      "You handle very complex and ambiguous projects, defining requirements and prioritizing the most impactful workstreams even in the face of multiple competing demands.",
    level: "L4",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "89",
    description:
      "You know when data and research are missing, and garner them where appropriate to inform your work and the work of others.",
    level: "L4",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "90",
    description:
      "You’re an expert in the companies product space someone others on the team learn from and seek to emulate. You surface new trends, patterns, and tools to the team regularly.",
    level: "L4",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "91",
    description:
      "You set the vision for your area—solo or with another senior designer/writer—and it’s inspiring and motivating to others.",
    level: "L4",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "92",
    description:
      "You advocate for your POV at all levels of the organization (e.g. to executives) and can leverage data, storytelling, and visual design to bring stakeholders along.",
    level: "L4",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "93",
    description:
      "You work is thorough and complete with edge cases fully thought out—a model of accuracy and precision.",
    level: "L4",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "94",
    description:
      "You consider how your work and patterns can be utilized by others.",
    level: "L4",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "95",
    description:
      "You are the owner for the design system of your focus area and effectively partner with the design systems team on the standards.",
    level: "L4",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "96",
    description:
      "You prototype with intentionality and know when to utilize prototypes to effectively communicate your ideas.",
    level: "L4",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "97",
    description:
      "You are well-versed in common industry interaction patterns and their nuances across platforms.",
    level: "L4",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "98",
    description: "Your prototypes help teams make business decisions.",
    level: "L4",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "99",
    description:
      "You aim to simplify and unify systems when appropriate to tame complexity—you can justify exceptions to the system and understand/explain their consequences.",
    level: "L4",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "100",
    description:
      "You are comfortable making decisions without the system being documented.",
    level: "L4",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "101",
    description:
      "You proactively bring up architecture improvement opportunities across the company.",
    level: "L4",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "102",
    description:
      "You’re a strong storyteller and able to influence and persuade at any level of the organization (e.g. to executives).",
    level: "L4",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "103",
    description:
      "You’re able to communicate candidly and kindly, and build rapport with all kinds of work partners—even difficult stakeholders.",
    level: "L4",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "104",
    description:
      "You coach other designers/writers on written, verbal, and interpersonal skills.",
    level: "L4",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "105",
    description: "You influence process at the team level, and delegate well.",
    level: "L4",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "106",
    description:
      "You handle high volumes of feedback on your own work effectively.",
    level: "L4",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "107",
    description:
      "You’re a model for stakeholder management, effectively managing executive involvement when necessary.",
    level: "L4",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "108",
    description:
      "You’re consistently solutions-oriented, and are acutely aware of your impact as a leader on the team, even in private settings.",
    level: "L4",
    category: "mindset",
    area: "collaboration",
  },
  {
    checked: false,
    id: "109",
    description: "You encourage others to maintain a healthy open mindset.",
    level: "L4",
    category: "mindset",
    area: "collaboration",
  },
  {
    checked: false,
    id: "110",
    description:
      "You push to make the highest impact possible with your work, and you can make a successful business case for it.",
    level: "L4",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "111",
    description:
      "You start to take on projects outside of your core responsibilities.",
    level: "L4",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "112",
    description:
      "You help your pillar with overall improvements to its quality control to be sure work is high quality and reliable.",
    level: "L4",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "113",
    description:
      "You lead by example—never hesitating to get your hands dirty (e.g. riffing where helpful and guiding others toward action).",
    level: "L4",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "114",
    description:
      "You've implemented and sometimes defined team processes like critiques and team meetings.",
    level: "L4",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "115",
    description:
      "You are regularly sought out for mentorship even outside your team.",
    level: "L4",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "116",
    description:
      "You represent design as a leader to the rest of the organization, by giving feedback on process and culture or taking a leadership role in or other events.",
    level: "L4",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "117",
    description:
      "You set the gold standard for problem definition your ability to frame and scope projects are consistently clear, thoughtful, and compelling.",
    level: "L5",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "118",
    description:
      "You coach other designers on prioritization, managing dependencies, and requirements definition. ",
    level: "L5",
    category: "product",
    area: "strategy",
  },
  {
    checked: false,
    id: "119",
    description:
      "You partner with our leads in data and research to identify ways of improving Figma’s overall practices around them.",
    level: "L5",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "120",
    description:
      "You leverage your knowledge of the industry to define new patterns and norms when needed  your work has impact beyond Figma.",
    level: "L5",
    category: "research",
    area: "strategy",
  },
  {
    checked: false,
    id: "121",
    description:
      "You uplevel other designers’ and writers’ vision work, and are entrusted to drive vision for the broadest, farthest-looking projects in the organization. ",
    level: "L5",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "122",
    description:
      "You help define what’s next for the bank—as a product, a business, and a company.",
    level: "L5",
    category: "vision",
    area: "strategy",
  },
  {
    checked: false,
    id: "123",
    description:
      "You see gaps in how our visual system works and help uplevel it. When necessary, you define new patterns and changes to the underlying system.",
    level: "L5",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "124",
    description:
      "Your peers look to you for your help and guidance on visual design, and you regularly offer feedback to improve work outside your own.",
    level: "L5",
    category: "visual",
    area: "craft",
  },
  {
    checked: false,
    id: "125",
    description:
      "Your interaction work defines the bar not just at Figma, but in the industry.",
    level: "L5",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "126",
    description:
      "Your peers look to you for guidance and feedback on improving their interaction work, and you proactively spot interaction issues and offer corrections.",
    level: "L5",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "127",
    description:
      "You create frameworks and prototypes that inspire other people to do the same.",
    level: "L5",
    category: "interaction",
    area: "craft",
  },
  {
    checked: false,
    id: "128",
    description:
      "Your work defines and documents new complex systems for others to use, while retaining systemic simplicity.",
    level: "L5",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "129",
    description:
      "You see connections between systems (e.g. payments and accounts) and can lead projects to bring them together.",
    level: "L5",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "130",
    description:
      "You uncover systemic architecture issues and advocate for specific improvements.",
    level: "L5",
    category: "systems",
    area: "craft",
  },
  {
    checked: false,
    id: "131",
    description:
      "You’re an exceptional storyteller, and able to uplevel other designers/writers in this area and the team as a whole.",
    level: "L5",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "132",
    description:
      "Interpersonally, you deescalate conflict effectively and can smooth out thorny projects and push teams to alignment.",
    level: "L5",
    category: "communication",
    area: "collaboration",
  },
  {
    checked: false,
    id: "133",
    description:
      "You coach other designers/writers on their process and uplevel the team as a whole.",
    level: "L5",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "134",
    description:
      "You help create and influence our feedback culture at the company level.",
    level: "L5",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "135",
    description:
      "You coach other designers on stakeholder management, especially with executives.",
    level: "L5",
    category: "process",
    area: "collaboration",
  },
  {
    checked: false,
    id: "136",
    description:
      "You have a toolkit for managing change for other team members, and can help turn around significant morale issues on teams. ",
    level: "L5",
    category: "mindset",
    area: "collaboration",
  },
  {
    checked: false,
    id: "137",
    description: "You help others understand the business.",
    level: "L5",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "138",
    description:
      "You identify opportunities for design to create new value for the business and garner resources to act.",
    level: "L5",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "139",
    description:
      "You frequently suggest and execute extra projects outside of core responsibilities.",
    level: "L5",
    category: "effectiveness",
    area: "impact",
  },
  {
    checked: false,
    id: "140",
    description: "You own the bar for quality at the company.",
    level: "L5",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "141",
    description:
      "You’re a leader at the company, with impact on the business and culture across the organization.",
    level: "L5",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "142",
    description:
      "You uplevel other designers’ leadership skills, building more design leaders within the organization.",
    level: "L5",
    category: "leadership",
    area: "impact",
  },
  {
    checked: false,
    id: "143",
    description:
      "You represent Figma externally whether through conferences, blog posts, or other channels.You represent Figma externally whether through conferences, blog posts, or other channels.v",
    level: "L5",
    category: "citizenship",
    area: "impact",
  },
  {
    checked: false,
    id: "144",
    description:
      "Your work and presence attracts top talent to the organization some people join Figma because they’re excited to learn from you.",
    level: "L5",
    category: "citizenship",
    area: "Impact",
  },
];

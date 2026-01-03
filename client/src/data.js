import signieImg from "./assets/images/signie.webp";
import notriskImg from "./assets/images/notrisk.webp";
import evincoImg from "./assets/images/evinco.webp";
import extractImg from "./assets/images/extract.webp";
import circuitsImg from "./assets/images/circuits.webp";

export const siteConfig = {
  name: "Nikunj Mathur",
  title: "Nikunj Mathur - Frontend Developer & Designer",
  description: "Frontend developer and designer based in New Delhi, India. Specializing in React, React Native and creating digital experiences that inspire and connect.",
  url: "https://nikunjmathur.vercel.app",
  email: "nikunjmathur0810@gmail.com",
  social: {
    github: "https://github.com/nikunjmathur08",
    linkedin: "https://www.linkedin.com/in/nikunjmathur08/",
    twitter: "https://x.com/nikunjmathur08",
  },
};

export const projects = [
  {
    slug: "signie",
    name: "Signie - Gamified Sign Language Learning",
    shortName: "Signie",
    tagline: "Breaking communication barriers with real-time, on-device gesture recognition",
    description: "A gamified sign language learning application built with React Native. Uses CNNs and MediaPipe Hands for real-time hand gesture recognition to teach sign language interactively.",
    type: "UI/UX Design • App Development • LSTM Model",
    year: "2025",
    tools: ["React Native", "Expo", "MediaPipe Hands", "CNNs", "Firebase"],
    image: signieImg,
    link: "https://github.com/nikunjmathur08/Signie",
    sourceUrl: "https://github.com/nikunjmathur08/Signie",
    featured: true,
    status: "React Native App",
    role: "Lead Developer & Designer",
    team: "Trio of developers",
    platform: "iOS & Android (React Native)",
    tldr: {
      what: "A cross-platform mobile app that teaches American Sign Language (ASL) using real-time gesture recognition",
      who: "Beginners who lack access to interactive sign language education",
      challenge: "Delivering low-latency, accurate gesture feedback on mobile devices",
      outcome: "A working React Native app with real-time on-device ML inference and adaptive learning",
      whyItMatters: "Learning a physical language without feedback is ineffective, Signie closes that loop"
    },
    problem: {
      intro: "Despite increased awareness around accessibility, learning sign language remains inaccessible for many.",
      points: [
        "Professional ASL courses are expensive and geographically limited",
        "Most learning apps rely on passive content (videos, flashcards)",
        "Learners receive no validation on whether they're signing correctly",
        "This leads to frustration, poor retention and early drop-off"
      ],
      coreInsight: "The core issue isn't content, it's feedback. Learning a physical language without real-time correction is like learning pronunciation without hearing yourself speak."
    },
    nonGoals: [
      "Cover the entire ASL vocabulary",
      "Provide professional certification or assessment",
      "Rely on cloud-based ML inference",
      "Optimize for large-scale commercial deployment"
    ],
    systemOverview: {
      intro: "At a high level, Signie works as a closed feedback loop:",
      steps: [
        { title: "Camera Input", description: "Captures live hand movement" },
        { title: "MediaPipe Hands", description: "Extracts 21 hand landmarks per frame" },
        { title: "CNN Model", description: "Classifies gestures using landmark geometry" },
        { title: "Confidence Scoring", description: "Measures accuracy and correctness" },
        { title: "UI Feedback Layer", description: "Instantly responds with visual cues, XP and progression" }
      ],
      note: "All inference runs on-device, ensuring minimal latency and maximum privacy."
    },
    technicalDecisions: [
      {
        title: "MediaPipe Hands + CNN (Instead of Raw Image Models)",
        points: [
          "Raw image classification was too slow and unstable on mobile",
          "Landmark-based input reduced dimensionality and noise",
          "CNNs performed better on structured geometric data"
        ],
        outcome: "Faster inference, better consistency, lower compute cost"
      },
      {
        title: "On-Device Inference Over Cloud ML",
        points: [
          "Eliminated network latency",
          "Preserved user privacy (data never leaves device)",
          "Enabled offline usage"
        ],
        outcome: "Trade-off: Smaller models and stricter performance constraints"
      },
      {
        title: "Gamification as Retention Infrastructure",
        points: [
          "Motivation decay after early sessions",
          "Inconsistent practice habits",
          "Friction during difficult signs"
        ],
        outcome: "Implemented: XP-based progression, daily streaks, achievement milestones, difficulty scaling"
      }
    ],
    techStack: [
      { label: "Framework", value: "React Native + Expo" },
      { label: "Vision", value: "MediaPipe Hands" },
      { label: "ML", value: "Custom CNN trained on ASL datasets" },
      { label: "Auth & Sync", value: "Firebase" },
      { label: "Design", value: "Game-inspired UI with accessibility-first principles" }
    ],
    challenges: [
      {
        title: "Lighting & Background Sensitivity",
        problem: "Gesture accuracy dropped significantly in low-contrast environments.",
        fix: "Normalized landmark coordinates, ignored low-confidence frames before classification"
      },
      {
        title: "Mobile Performance Bottlenecks",
        problem: "Simultaneous camera capture, inference and UI updates caused dropped frames.",
        fix: "Frame throttling, batched inference, optimized React Native state updates"
      },
      {
        title: "Dataset Limitations",
        problem: "Public ASL datasets lacked diversity in hand sizes and orientations.",
        fix: "Augmented landmark data, tested extensively on real users"
      }
    ],    
    observations: [
      "Stable real-time inference under normal lighting conditions",
      "Consistent feedback loop without perceptible lag",
      "Noticeably higher engagement when gamification was enabled",
      "Clear scalability challenges for expanding gesture vocabulary"
    ],
    ethics: [
      "All camera processing happens locally on the device",
      "No images or video frames are stored or transmitted",
      "UI designed with large touch targets and clear visual feedback",
      "Acknowledged bias risks in gesture datasets and mitigated through testing"
    ],    
    learnings: [
      "Pre-processing and problem framing often matter more than model complexity",
      "UX mechanics can amplify or destroy the effectiveness of ML systems",
      "Accessibility must be designed in, not added later",
      "Real-time systems expose performance issues early and brutally",
      "Pre-emptively loading the model can pay off dividends in app experience"
    ],
    futureWork: [
      "Expand gesture vocabulary using transfer learning",
      "Support two-hand gestures",
      "Personalized practice plans based on error patterns",
      "Instructor / mentor review mode",
      "Detailed analytics for learner progress"
    ],
    whatYouCanLearn: [
      "How to run real-time ML inference on mobile devices",
      "How to reduce vision problems to geometric representations",
      "How to design effective feedback loops for skill learning",
      "How to balance ML accuracy, latency and UX",
      "How to build accessibility-first products with AI"
    ],
    finalNote: "Signie is not just a mobile app, it's an exploration of how AI, UX and accessibility intersect. The project demonstrates how thoughtful engineering decisions can turn complex ML systems into human-centered learning tools."
  },
  
  {
    slug: "not-risk",
    name: "(not)-RISK - Receipts, Insurance & Services Keeper",
    shortName: "(not)-RISK",
    tagline: "Never lose another receipt. Never miss a warranty.",
    description: "A SaaS platform for managing receipts, insurance documents and service records. Built with the MERN stack for seamless document organization and retrieval.",
    type: "SaaS • Full Stack Development",
    year: "2025",
    tools: ["MongoDB", "Express", "React", "TailwindCSS", "Node.js"],
    image: notriskImg,
    link: "https://not-risk.vercel.app",
    liveUrl: "https://not-risk.vercel.app",
    sourceUrl: "https://github.com/nikunjmathur08/not-risk",
    featured: true,
    status: "Active Work in Progress",
    role: "Full Stack Developer",
    team: "Solo",
    platform: "Web (SaaS)",
    tldr: {
      what: "A SaaS platform to store, organize and track receipts, warranties and insurance documents",
      who: "Individuals who lose money and time due to poor document management",
      challenge: "Making long-term document storage reliable, searchable and actionable",
      outcome: "Functional MVP with secure storage, search and reminder workflows",
      whyItMatters: "Documents only have value if they remain accessible when they're needed most"
    },
    problem: {
      intro: "Receipts, warranties and insurance documents are time-sensitive assets, yet most people treat them as disposable clutter.",
      points: [
        "Thermal receipts fade within months",
        "Digital copies are scattered across email, messaging apps and cloud drives",
        "Warranty deadlines are missed due to forgetfulness",
        "During claims, locating the right document becomes stressful and time-consuming"
      ],
      coreInsight: "The real issue isn't storage - it's reliability over time. A receipt you can't find when it matters is functionally useless. (not)-RISK exists to fix that gap."
    },
    nonGoals: [
      "Replace enterprise document management systems",
      "Automate insurance claim filing",
      "Provide accounting or tax workflows",
      "Achieve perfect OCR accuracy"
    ],
    systemOverview: {
      intro: "The MVP is built around a simple but strict flow:",
      steps: [
        { title: "User Uploads", description: "Receipt or document (image or PDF)" },
        { title: "Metadata Association", description: "Merchant, category, date" },
        { title: "Secure Cloud Storage", description: "User-level isolation" },
        { title: "Indexed Search", description: "Fast retrieval" },
        { title: "Scheduled Jobs", description: "Warranty reminders" }
      ],
      note: "Every feature answers one question quickly: 'Can I retrieve the right document exactly when I need it?'"
    },
    technicalDecisions: [
      {
        title: "Flexible Storage Over Rigid Schemas",
        points: [
          "Receipts vary wildly in structure, length and metadata",
          "MongoDB was chosen for schema flexibility over strict normalization"
        ],
        outcome: "Trade-off: More logic handled at the application layer - acceptable for this stage"
      },
      {
        title: "JWT-Based Authentication",
        points: [
          "Stateless authentication simplified iteration and scaling",
          "Clear isolation between users and documents"
        ],
        outcome: "Rapid experimentation without locking into heavy infrastructure early"
      },
      {
        title: "Reminder System as a Core Feature",
        points: [
          "Warranty reminders weren't an afterthought - they were foundational",
          "Background jobs scheduled based on document metadata with user-configurable windows"
        ],
        outcome: "Insight: Preventing loss is more valuable than helping users recover after loss"
      }
    ],
    techStack: [
      { label: "Frontend", value: "React + TailwindCSS" },
      { label: "Backend", value: "Node.js + Express REST API" },
      { label: "Database", value: "MongoDB" },
      { label: "Auth", value: "JWT-based sessions" },
      { label: "Jobs", value: "Scheduled reminder workflows" }
    ],
    challenges: [
      {
        title: "Manual Metadata Entry",
        problem: "Users still input some information manually.",
        fix: "Planned: OCR-assisted extraction with user confirmation"
      },
      {
        title: "Categorization Accuracy",
        problem: "Early categorization logic was too granular and confusing.",
        fix: "Simplified categories with manual overrides"
      },
      {
        title: "Reminder Edge Cases",
        problem: "Warranty durations vary across products and regions.",
        fix: "Default buffers + user-adjustable reminder windows"
      }
    ],
    observations: [
      "Search is used far more than folder navigation",
      "Reminder notifications drive repeat engagement",
      "Users prioritize retrieval speed over perfect organization",
      "Mobile responsiveness significantly affects adoption"
    ],
    ethics: [
      "User-level document isolation",
      "Encrypted storage for sensitive files",
      "Auth-protected access to all documents",
      "No public or unauthenticated access paths"
    ],
    learnings: [
      "Designing for long-term data usability is harder than initial storage",
      "Search beats hierarchy for real-world document retrieval",
      "SaaS products live on repeat engagement, not first-time usage",
      "UX friction compounds over time - small issues become big problems"
    ],
    futureWork: [
      "OCR-based metadata extraction",
      "Merchant recognition and auto-tagging",
      "Calendar integrations for reminders",
      "Export flows for insurance claims",
      "Usage analytics to surface 'at-risk' documents"
    ],
    whatYouCanLearn: [
      "How to design SaaS products around time-based value",
      "How to manage flexible, user-generated data securely",
      "How reminder systems drive retention",
      "How to iterate responsibly on a live product"
    ],
    finalNote: "(not)-RISK is a work in progress and that's intentional. It's an evolving system focused on providing value, one receipt at a time."
  },
  
  {
    slug: "evinco",
    name: "Evinco - Event • Interact • Connect",
    shortName: "Evinco",
    tagline: "Where events come alive and connections are made",
    description: "A full-stack event management platform that enables users to create, discover and interact with events. Features real-time updates and social connectivity.",
    type: "Web Design • Full Stack Development",
    year: "2024",
    tools: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    image: evincoImg,
    link: "https://github.com/nikunjmathur08/evinco",
    sourceUrl: "https://github.com/nikunjmathur08/evinco",
    featured: true,
    status: "Feature-complete prototype",
    role: "Full Stack Developer",
    team: "Team of 3",
    platform: "Web Application",
    tldr: {
      what: "A full-stack event discovery and interaction platform focused on community, not just listings",
      who: "Event attendees and small organizers looking for meaningful engagement",
      challenge: "Turning events from one-off transactions into ongoing social experiences",
      outcome: "Fully functional multi-user platform with real-time interaction",
      whyItMatters: "Events shouldn't end when the venue closes - connections should persist"
    },    
    problem: {
      intro: "Most event platforms solve logistics, not connection.",
      points: [
        "Event discovery is noisy and irrelevant",
        "Attendees have no way to interact before or after events",
        "Organizers lack lightweight tools tailored for small or niche communities",
        "Events feel transactional - register, attend, disappear"
      ],
      coreInsight: "Events are treated as isolated objects, not social experiences with a lifecycle. Evinco was built to explore what happens when community is the core primitive, not an afterthought."
    },    
    nonGoals: [
      "Compete with enterprise-scale platforms like Eventbrite",
      "Handle payments or ticketing at scale",
      "Build recommendation systems powered by ML",
      "Optimize for massive concurrent usage"
    ], 
    systemOverview: {
      intro: "Evinco is designed around event-centric social spaces:",
      steps: [
        { title: "Event Creation", description: "By organizers" },
        { title: "Interest-based Discovery", description: "For attendees" },
        { title: "Real-time Chat Rooms", description: "Tied to each event" },
        { title: "Persistent Social Features", description: "Follows, saved events" },
        { title: "Notification System", description: "Engagement across lifecycle" }
      ],
      note: "The system treats each event as a temporary community hub, not just a listing."
    },    
    technicalDecisions: [
      {
        title: "Real-Time Interaction via WebSockets",
        points: [
          "Chose Socket.io to support live attendee conversations",
          "Pre-event coordination and post-event discussion continuity"
        ],
        outcome: "Trade-off: More complexity in state synchronization - acceptable given the product goal"
      },
      {
        title: "MERN Stack for Team Velocity",
        points: [
          "MongoDB for flexible event and user schemas",
          "Express + Node.js for rapid API iteration",
          "React for responsive, component-driven UI"
        ],
        outcome: "Allowed parallel development across the team without heavy coupling"
      },
      {
        title: "JWT Auth with Refresh Tokens",
        points: [
          "Stateless session handling with secure user isolation"
        ],
        outcome: "Balanced security with implementation simplicity for a collaborative build"
      }
    ],
    techStack: [
      { label: "Frontend", value: "React with CSS Grid & Flexbox" },
      { label: "Backend", value: "Node.js + Express REST APIs" },
      { label: "Database", value: "MongoDB" },
      { label: "Real-Time", value: "Socket.io for live messaging" },
      { label: "Auth", value: "JWT with refresh token rotation" }
    ],    
    challenges: [
      {
        title: "Chat Noise vs Signal",
        problem: "Early chat implementations became overwhelming during active events.",
        fix: "Scoped chats per event, basic moderation controls, notification throttling"
      },
      {
        title: "Discovery Overload",
        problem: "Showing too many events reduced relevance.",
        fix: "Interest-based filtering, location-aware discovery, saved events for quick access"
      },
      {
        title: "Organizer UX Complexity",
        problem: "Initial organizer tools mirrored large platforms and felt heavy.",
        fix: "Simplified event creation flow, reduced mandatory fields, focused on speed"
      }
    ],
    observations: [
      "Users engaged more when chat was available before the event",
      "Post-event conversations extended platform usage significantly",
      "Small organizers valued simplicity more than feature depth",
      "Community features mattered more than visual polish"
    ],
    ethics: [
      "Auth-protected access to all user actions",
      "User-level isolation for chats and events",
      "Controlled socket room access",
      "Trust and safety treated as baseline requirements"
    ],
    learnings: [
      "Real-time systems amplify UX flaws quickly",
      "Community features require moderation considerations early",
      "Team communication can bottleneck technical progress",
      "Event platforms live or die on post-event engagement"
    ],    
    futureWork: [
      "Event-specific discussion threads",
      "Organizer analytics (engagement, retention)",
      "RSVP-based chat access",
      "Content moderation tools",
      "Calendar integrations"
    ],
    whatYouCanLearn: [
      "How to design community-first platforms",
      "How to implement real-time features responsibly",
      "How to balance team velocity with technical correctness",
      "How social UX choices affect long-term engagement",
      "How to scope ambitious ideas into shippable systems"
    ],
    finalNote: "Evinco is not just an event platform - it's an experiment in turning events into lasting social experiences. The project reflects collaborative engineering, real-time system design and product thinking under constraints."
  },
  
  {
    slug: "smart-extractor",
    name: "Smart Extractor - Terminal-Based Dynamic Web Scraper",
    shortName: "Smart Extractor",
    tagline: "Intelligent data extraction powered by local AI",
    description: "A powerful terminal-based web scraping tool that leverages local AI models for intelligent data extraction. Supports dynamic content and provides structured output.",
    type: "CLI Tool • AI/ML",
    year: "2025",
    tools: ["Python", "Ollama", "LLaMA 3.1", "Crawl4AI"],
    image: extractImg,
    link: "https://github.com/nikunjmathur08/Smart_Extractor",
    sourceUrl: "https://github.com/nikunjmathur08/Smart_Extractor",
    featured: true,
    status: "Experimental tool, actively evolving",
    role: "Developer",
    team: "Solo",
    platform: "CLI",
    tldr: {
      what: "A privacy-first CLI tool that extracts structured data from websites using local AI",
      who: "Developers who hate brittle selectors and manual HTML parsing",
      challenge: "Orchestrating crawling, LLM reasoning and structured output without cloud services",
      outcome: "Fully working prototype with dynamic page support and JSON output",
      whyItMatters: "Web scraping breaks not because of crawling - but because of structure and change"
    },
    problem: {
      intro: "Traditional web scraping fails in predictable ways:",
      points: [
        "Selectors are brittle - a minor DOM change breaks the scraper",
        "Dynamic sites render content via JavaScript, complicating extraction",
        "Raw HTML is useless without heavy post-processing",
        "AI-powered tools often require sending sensitive data to third-party APIs"
      ],
      coreInsight: "Scrapers are built to fetch pages, not understand them. Smart Extractor explores what happens when local AI becomes the interpretation layer instead of hard-coded rules."
    },    
    nonGoals: [
      "Replace enterprise scraping platforms",
      "Guarantee perfect extraction across all websites",
      "Optimize for massive batch scraping",
      "Hide AI costs behind abstractions"
    ],
    systemOverview: {
      intro: "Smart Extractor follows a multi-stage pipeline:",
      steps: [
        { title: "URL Input", description: "Via CLI" },
        { title: "Dynamic Crawling", description: "Using Crawl4AI (JS-rendered pages included)" },
        { title: "Content Normalization", description: "HTML → text/blocks" },
        { title: "Local LLM Inference", description: "Via Ollama" },
        { title: "Schema-guided Extraction", description: "Structured output" },
        { title: "Validated JSON Output", description: "Final result" }
      ],
      note: "Each stage is explicit - no magic, no hidden calls."
    },
    technicalDecisions: [
      {
        title: "Local Inference via Ollama",
        points: [
          "Ensures 100% data privacy",
          "No API costs, no rate limits",
          "Full control over model behavior"
        ],
        outcome: "Trade-off: Higher latency, tighter memory constraints and orchestration complexity"
      },
      {
        title: "Model Choice: LLaMA 3.1 8B (Quantized)",
        points: [
          "Balanced reasoning ability with local hardware limits",
          "Capable of schema-aware extraction",
          "Small enough to iterate quickly"
        ],
        outcome: "Lesson: Local AI is viable - but only if you design around its constraints"
      },
      {
        title: "Ollama Modelfiles for Control",
        points: [
          "Enforce structured JSON output",
          "Reduce hallucination",
          "Align extraction strictly to schemas"
        ],
        outcome: "Avoided post-processing hacks and kept failures visible"
      }
    ],
    techStack: [
      { label: "Language", value: "Python" },
      { label: "Crawling", value: "Crawl4AI for JS-rendered pages" },
      { label: "AI", value: "Ollama with LLaMA 3.1 8B" },
      { label: "CLI", value: "Argument-driven interface" },
      { label: "Output", value: "Structured JSON with schema validation" }
    ],
    pipelineOverheads: {
      title: "The Hidden Cost: Pipeline Overheads (The Real Learning)",
      intro: "The hardest problem wasn't crawling or AI - it was data movement between stages.",
      points: [
        "Crawled content → LLM prompt construction",
        "Large HTML blocks → tokenized context",
        "LLM output → schema validation",
        "Repeated calls during iterative refinement"
      ],
      insight: "AI pipelines fail silently if you don't explicitly measure and control transitions."
    },    
    challenges: [
      {
        title: "Over-prompting Early On",
        problem: "Passing entire pages into the LLM caused high latency and context overflow.",
        fix: "Chunked content, focused prompts, schema-first extraction"
      },
      {
        title: "Latency vs Accuracy Trade-offs",
        problem: "More reasoning = better output, but slower CLI feedback.",
        fix: "Default fast mode + optional deeper extraction mode"
      },
      {
        title: "Model Sensitivity",
        problem: "Small prompt changes drastically altered output.",
        fix: "Stable prompt templates, strict output contracts via modelfiles"
      }
    ],    
    observations: [
      "AI-assisted extraction removes most selector logic",
      "Dynamic sites become easier, not harder",
      "Local inference shifts complexity from cost → engineering",
      "The terminal is unforgiving - slow systems feel very slow"
    ],    
    ethics: [
      "No external API calls",
      "No data persistence by default",
      "All processing happens locally",
      "User explicitly controls inputs and outputs"
    ],   
    learnings: [
      "AI pipelines are systems problems, not model problems",
      "Data boundaries matter more than model size",
      "Local AI requires different UX expectations",
      "Observability is critical when chaining intelligent components"
    ],    
    futureWork: [
      "Streaming inference to reduce perceived latency",
      "Multi-page crawling with aggregation",
      "Adaptive chunk sizing",
      "Better failure diagnostics",
      "Optional hybrid local/cloud mode"
    ],
    whatYouCanLearn: [
      "How to design AI-assisted scraping pipelines",
      "How to run LLMs locally using Ollama",
      "How to use modelfiles to enforce structure",
      "Where AI systems incur hidden costs",
      "How to think about AI orchestration, not just prompts"
    ],
    finalNote: "Smart Extractor is not 'just a scraper.' It's an experiment in how far local AI can be pushed before system design becomes the real bottleneck. The value of this project lies in what breaks, not just what works."
  },
  
  {
    slug: "circuit-creations",
    name: "Circuit Creations - Interactive Digital Logic Design",
    shortName: "Circuit Creations",
    tagline: "Where students build the building blocks of computing",
    description: "An interactive digital logic design platform for SRMIST's DLD department. Enables students to create and simulate digital circuits in the browser.",
    type: "Educational Tool • Frontend Development",
    year: "2025",
    tools: ["React", "TailwindCSS", "JavaScript", "Canvas API"],
    image: circuitsImg,
    link: "https://dld.srmist.edu.in/eLogic/",
    liveUrl: "https://dld.srmist.edu.in/eLogic/",
    featured: true,
    status: "Deployed in-house academic tool",
    role: "Frontend Developer",
    team: "Team of 2",
    platform: "Web Application",
    tldr: {
      what: "A browser-based digital logic design and simulation platform",
      who: "Undergraduate students studying Digital Logic Design (DLD)",
      challenge: "Making abstract circuit concepts tangible without physical labs",
      outcome: "Actively used in-house by the EEE department",
      whyItMatters: "Students learn circuits best by building and testing, not memorizing symbols"
    },
    problem: {
      intro: "Digital Logic Design is foundational - and notoriously hard to learn.",
      points: [
        "Logic gates and circuits are abstract and unintuitive on paper",
        "Physical lab access is time-limited and capacity-constrained",
        "Professional simulators are expensive and overkill for beginners",
        "Feedback is delayed until scheduled lab sessions"
      ],
      coreInsight: "Students are expected to reason about dynamic systems using static diagrams. The EEE department needed a tool that emphasized learning through interaction, not professional-grade complexity."
    },    
    academicCollaboration: {
      intro: "This project was developed as an in-house educational platform in collaboration with the EEE (Electrical & Electronics Engineering) department at SRMIST.",
      points: [
        "Direct input from faculty on curriculum alignment",
        "Iterative feedback from students during development",
        "Feature prioritization driven by teaching needs, not market trends"
      ],
      note: "This was not a generic simulator - it was built for a specific academic context."
    },
    nonGoals: [
      "Compete with professional EDA tools",
      "Support HDL-based design (Verilog/VHDL)",
      "Optimize for large-scale industrial circuits",
      "Provide exhaustive component libraries"
    ],
    systemOverview: {
      intro: "Circuit Creations is built around an interactive learning loop:",
      steps: [
        { title: "Drag-and-Drop", description: "Component assembly" },
        { title: "Real-time Validation", description: "Connection checking" },
        { title: "Instant Simulation", description: "Logic evaluation" },
        { title: "Immediate Visual Feedback", description: "Reinforced understanding" },
        { title: "Circuit Persistence", description: "Iteration and discussion" }
      ],
      note: "The system prioritizes seeing cause and effect over configuration complexity."
    },
    technicalDecisions: [
      {
        title: "Browser-Based Delivery",
        points: [
          "Zero installation friction",
          "Works across laptops and tablets",
          "Ideal for constrained lab environments"
        ],
        outcome: "This choice significantly increased adoption"
      },
      {
        title: "Canvas-Based Circuit Visualization",
        points: [
          "Fine-grained control over rendering",
          "Real-time wire drawing and updates",
          "Clear visual mapping between logic and output"
        ],
        outcome: "Trade-off: More custom logic but better learning outcomes"
      },
      {
        title: "Component-Based Circuit Architecture",
        points: [
          "Each logic gate designed as a composable, reusable unit",
          "Encouraged modular thinking",
          "Simplified simulation logic"
        ],
        outcome: "Aligned with how circuits are taught academically"
      }
    ],
    techStack: [
      { label: "Frontend", value: "React for component-driven UI" },
      { label: "Styling", value: "TailwindCSS" },
      { label: "Simulation", value: "JavaScript-based evaluation engine" },
      { label: "Rendering", value: "Canvas API for circuit visualization" }
    ],
    challenges: [
      {
        title: "Initial UX Overload",
        problem: "Early versions exposed too many options at once.",
        fix: "Progressive disclosure of components, guided educational modules"
      },
      {
        title: "Wire Management Complexity",
        problem: "Complex circuits quickly became visually noisy.",
        fix: "Snap points, clear visual hierarchy, automatic wire routing constraints"
      },
      {
        title: "Balancing Accuracy vs Simplicity",
        problem: "Too much realism hurt learning; too little hurt credibility.",
        fix: "Focused on conceptual correctness rather than electrical precision"
      }
    ],
    observations: [
      "Students grasped gate behavior faster with visual feedback",
      "Trial-and-error learning increased confidence",
      "Tablet compatibility improved lab engagement",
      "Faculty valued simplicity over feature depth",
      "Students learned more by experimenting than by following fixed lab manuals"
    ],    
    ethics: [
      "No student data stored beyond saved circuits",
      "No external dependencies or tracking",
      "Designed strictly for academic use"
    ],
    learnings: [
      "Domain-specific tools require domain-specific thinking",
      "Educational UX is fundamentally different from professional UX",
      "Collaboration with non-engineers sharpens design decisions",
      "Simplicity is often harder and more impactful than complexity"
    ],    
    futureWork: [
      "Assessment mode for instructors",
      "Step-by-step circuit challenges",
      "Collaborative real-time editing",
      "Exportable circuit representations"
    ],    
    whatYouCanLearn: [
      "How to build interactive educational tools",
      "How to translate academic requirements into software",
      "How to design domain-specific UIs",
      "How to collaborate with faculty and non-technical stakeholders",
      "How to ship tools with real-world classroom impact"
    ],    
    finalNote: "Circuit Creations isn't just a simulator, it's an educational interface between theory and intuition. Building this as an in-house project with the EEE department taught me that the best software isn't always the most powerful, it's the most understandable."
  },
];

export const skills = {
  expertise: [
    "Full Stack Dev",
    "Web Design",
    "UI/UX Design",
    "App Development",
  ],
  tools: [
    "ReactJs",
    "ExpressJs",
    "JavaScript",
    "MongoDB",
    "NodeJs",
    "HTML/CSS",
    "Figma",
    "MediaPipe Hands",
    "React Native",
  ],
};

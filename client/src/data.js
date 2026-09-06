import signieImg from "./assets/images/signie.webp";
import notriskImg from "./assets/images/notrisk.webp";
import evincoImg from "./assets/images/evinco.webp";
import extractImg from "./assets/images/extract.webp";
import circuitsImg from "./assets/images/circuits.webp";
import kalaaStudioImg from "./assets/images/kalaa-studio.webp";

export const siteConfig = {
  name: "Nikunj Mathur",
  title: "Nikunj Mathur — iOS Developer · Product Engineer",
  description: "iOS Developer · Product Engineer based in New Delhi, India — Building thoughtful products across Swift, AI & the web.",
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
    slug: "kalaa-studio",
    name: "Kalaa Studio",
    shortName: "Kalaa Studio",
    tagline: "Art meets wellness",
    description: "Kalaa Studio is an iOS-based creative learning platform that transforms mandala art into a guided, calming experience. It combines structured drawing workflows with subtle visual and audio feedback to help users focus, relax, and build artistic confidence.",
    type: "iOS App • Creative Wellness",
    year: "2025",
    tools: ["Swift", "SwiftUI", "UIKit", "OpenCV", "Core Graphics", "AVFoundation"],
    image: kalaaStudioImg,
    link: "https://apps.apple.com/in/app/kalaa-studio/id6759783810",
    liveUrl: "https://apps.apple.com/in/app/kalaa-studio/id6759783810",
    featured: true,
    status: "Live on the App Store",
    role: "Lead iOS Developer & Co-Founder",
    team: "Team of 3",
    platform: "iOS (iPad-first experience)",
    tldr: {
      what: "An iOS-first creative learning app that turns mandala art into a guided, calming creative experience",
      who: "Beginners navigating the overwhelm of the blank canvas and wellness seekers chasing moments of intentional calm through creative practice",
      challenge: "Designing a distraction-free creative experience that still feels interactive, supportive and true to life",
      outcome: "Users can reliably create balanced mandalas through guided steps without feeling overwhelmed",
      whyItMatters: "Kalaa Studio reframes art practice as a focus and wellness ritual, not just a productivity task"
    },
    problem: {
      intro: "Most beginner art experiences are either too unstructured or too gamified, which makes consistency hard.",
      points: [
        "No clear learning path and scattered resources",
        "Beginners struggle to maintain focus during practice",
        "Many drawing apps prioritize features over calm workflows",
        "Users who want a mindfulness-oriented experience are underserved"
      ],
      coreInsight: "For many people, confidence in art grows when the environment feels safe, calm and guided. Kalaa Studio was built ground up around that emotion."
    },
    nonGoals: [
      "Compete with professional desktop illustration suites",
      "Maximize gamification mechanics",
      "Optimize for social sharing-heavy workflows",
      "Support every art style from day one"
    ],
    systemOverview: {
      intro: "Kalaa Studio follows a calm, structured creative loop:",
      steps: [
        { title: "Gamified Stages for Learning", description: "Users learn mandala step by step, from basic patterns to medium to expert designs" },
        { title: "Templates for Practice", description: "Users can choose ready-made designs and recreate them with their own colors." },
        { title: "Mandala Extraction", description: "Users can upload any design and practice or color it in their own way, assisted by on-device OpenCV" },
        { title: "Community Gallery", description: "Users can share their artwork and explore creations from other artists" },
        { title: "Canvas of Symmetry", description: "Users can freely draw and create mandalas from their own imagination." }
      ],
      note: "The core UX principle is intentional calm: every system decision was evaluated against distraction and cognitive load."
    },
    technicalDecisions: [
      {
        title: "SwiftUI + UIKit Hybrid Architecture",
        points: [
          "Used SwiftUI for layout composition, rapid iteration, and consistent design across screens",
          "Bridged to UIKit for fine-grained control over gestures, drawing input and performance-critical interactions",
          "Avoided forcing everything into SwiftUI where it would introduce latency or unpredictable behavior",
          "Maintained clear separation between declarative UI layers and imperative interaction logic"
        ],
        outcome: "Achieved fast UI iteration without compromising responsiveness or interaction precision in a drawing-heavy environment"
      },
      {
        title: "Custom Symmetry Rendering System",
        points: [
          "Implemented radial symmetry by mapping each stroke across multiple angular segments in real time",
          "Normalized input coordinates relative to the canvas center to ensure consistent replication",
          "Handled stroke interpolation and smoothing to maintain visual continuity across segments",
          "Designed the system to be deterministic, ensuring predictable outputs for guided learning"
        ],
        outcome: "Enabled users to create complex, balanced mandalas effortlessly while maintaining real-time performance"
      },
      {
        title: "OpenCV Integration for Visual Processing",
        points: [
          "Used OpenCV for deterministic image processing tasks such as contour handling and structural guidance",
          "Integrated processing pipelines directly into the rendering loop without blocking UI threads",
          "Prioritized reliability and consistency over experimental ML-based approaches",
          "Optimized processing steps to work within mobile performance constraints"
        ],
        outcome: "Delivered stable and predictable visual guidance suitable for beginner-focused creative workflows"
      },
      {
        title: "Real-Time Rendering & Input Pipeline",
        points: [
          "Processed Apple Pencil input with minimal latency to preserve natural drawing feel",
          "Decoupled input handling from rendering updates to avoid frame drops",
          "Used efficient drawing layers (Core Graphics / CAShapeLayer) to maintain smooth performance",
          "Ensured responsiveness even as symmetry complexity increased"
        ],
        outcome: "Maintained fluid, uninterrupted drawing experience critical for user immersion and focus"
      },
      {
        title: "Mindfulness-First Interaction Design",
        points: [
          "Removed non-essential UI elements to reduce cognitive load and decision fatigue",
          "Designed feedback to be supportive, reinforcing user confidence",
          "Structured interactions to encourage flow state rather than task completion urgency"
        ],
        outcome: "Created a calm, distraction-free creative environment that differentiates the product from traditional drawing tools"
      }
    ],
    techStack: [
      { label: "Language", value: "Swift" },
      { label: "UI", value: "SwiftUI + UIKit" },
      { label: "Image Processing", value: "OpenCV + Core Graphics" },
      { label: "Media", value: "AVFoundation" },
      { label: "Design", value: "Figma" },
      { label: "Tooling", value: "Xcode" }
    ],
    challenges: [
      {
        title: "Balancing Guidance with Creative Freedom",
        problem: "Fully guided systems risk making users feel constrained, while open canvases overwhelm beginners with too many decisions",
        fix: "Designed a stage-based system where structure is progressively introduced, with flexibility in stroke placement and pattern variation."
      },
      {
        title: "Real-Time Symmetry Without Performance Drop",
        problem: "Replicating strokes across multiple radial segments in real time can quickly introduce latency and frame drops, especially with Apple Pencil input",
        fix: "Optimized the rendering pipeline by normalizing input once and mapping it across segments efficiently. Decoupled input handling from rendering updates and minimized redraw regions"
      },
      {
        title: "Integrating OpenCV in a Production iOS Flow",
        problem: "OpenCV operates outside typical iOS UI pipelines, creating friction in memory handling, threading, and real-time responsiveness",
        fix: "Established clear boundaries between CV processing and UI rendering, moved heavy operations off the main thread, and ensured deterministic outputs before passing data back to the UI layer"
      },
      {
        title: "Designing for Calm, Not Engagement Loops",
        problem: "Most creative apps rely on gamification (streaks, rewards) to drive retention, which conflicts with a calm, pressure-free experience",
        fix: "Deliberately removed competitive mechanics and designed sessions around flow and completion satisfaction instead of external rewards"
      },
      {
        title: "Reducing Cognitive Load in UI Design",
        problem: "Feature-rich drawing apps overwhelm users with toolbars, options, and modes, especially for beginners",
        fix: "Limited visible controls to only what's contextually necessary and deferred advanced options, keeping the interface minimal and predictable"
      }
    ],
    observations: [
      "Live on the App Store with an early audience across India, USA, Korea and New Zealand",
      "40 downloads validated initial demand and international interest",
      "Users respond positively to the calm, guided creative tone",
      "iPad-first design improved drawing comfort and continuity"
    ],
    ethics: [
      "Experience designed to reduce anxiety and pressure",
      "Mindfulness-centered UX decisions over compulsive engagement loops",
      "Clear, beginner-friendly interface choices",
      "All visual processing runs entirely on-device, ensuring privacy, low latency and independence from network conditions",
      "Supportive feedback patterns instead of leaderboard-driven stress"
    ],
    learnings: [
      "Wellness-focused products require restraint, not feature volume",
      "Hybrid SwiftUI/UIKit architecture can unlock both speed and control",
      "Shipping to the App Store changes decision quality and engineering discipline",
      "Creative tooling quality depends as much on emotional UX as technical capability"
    ],
    futureWork: [
      "Expanded drawing templates and adaptive guidance modes",
      "More personalized sound and visual ambience settings",
      "Advanced progress tracking for long-term creative confidence",
      "Additional accessibility refinements for broader usability"
    ],
    whatYouCanLearn: [
      "How to ship a production iOS app end-to-end",
      "How to combine SwiftUI/UIKit with OpenCV workflows",
      "How to design mindfulness-first creative products",
      "How to prioritize focus and calm in interaction design"
    ],
    finalNote: "Kalaa Studio reflects a product philosophy where creativity and wellbeing reinforce each other. Building it taught me how to translate calm, intentional design into a shippable iOS system."
  },
  {
    slug: "signie",
    name: "Signie - Gamified Sign Language Learning",
    shortName: "Signie",
    tagline: "Private, confidence-first ASL learning with real-time on-device feedback",
    description: "Signie is an interactive ASL learning app that uses real-time camera tracking and on-device CoreML to provide gentle, private feedback as users practice hand signs. It gamifies the experience through structured learning stages and a supportive mascot character.",
    type: "Award-Winning iOS App • Accessibility",
    year: "2025",
    tools: ["SwiftUI", "CoreML", "VisionKit", "Swift", "Xcode", "Figma"],
    image: signieImg,
    featured: true,
    status: "Apple Swift Student Challenge Winner 2026",
    role: "Lead iOS Developer",
    team: "Team of 3",
    platform: "iOS (On-device ML)",
    tldr: {
      what: "An interactive ASL learning app with camera-based real-time feedback and a supportive mascot-driven flow",
      who: "Beginning ASL learners who want private and judgment-free practice",
      challenge: "Reducing beginner friction and performance anxiety while preserving real-time feedback quality",
      outcome: "A polished iOS experience recognized as a Swift Student Challenge winner",
      whyItMatters: "Signie makes ASL practice feel safe, private and confidence-building from day one"
    },
    problem: {
      intro: "Beginner ASL learners often feel anxious practicing in public or without immediate feedback.",
      points: [
        "New learners hesitate due to fear of making mistakes in front of others",
        "Many learning tools are passive and do not validate hand-shape correctness",
        "Lack of private feedback slows confidence and consistency",
        "Cloud-based recognition raises data privacy concerns for camera-first experiences"
      ],
      coreInsight: "The real barrier is not motivation, it is emotional safety during practice. Signie solves this with private, on-device feedback in a low-stakes learning environment."
    },
    nonGoals: [
      "Cover the entire ASL vocabulary",
      "Replace professional ASL instruction",
      "Depend on cloud processing for recognition",
      "Overload users with advanced linguistic theory in early stages"
    ],
    systemOverview: {
      intro: "Signie is built around a private learning feedback loop:",
      steps: [
        { title: "Live Camera Capture", description: "Tracks hand signs in real time during practice" },
        { title: "On-device Recognition", description: "CoreML inference runs entirely on the device" },
        { title: "Gentle Corrective Feedback", description: "Supportive cues help users refine hand shapes" },
        { title: "Structured Learning Stages", description: "Gamified progression keeps beginners engaged" },
        { title: "Confidence Loop", description: "Private sessions reduce anxiety and improve repetition quality" }
      ],
      note: "All inference runs on-device, ensuring minimal latency and maximum privacy."
    },
    technicalDecisions: [
      {
        title: "On-device CoreML over Cloud Inference",
        points: [
          "Protected user privacy for camera-based practice",
          "Avoided network dependency and enabled stable low-latency feedback",
          "Improved trust for beginners practicing sensitive gestures at home"
        ],
        outcome: "Privacy-first real-time feedback without cloud upload risk"
      },
      {
        title: "SwiftUI-first UI System",
        points: [
          "Rapidly iterated interaction patterns for beginner accessibility",
          "Maintained visual consistency across learning modules",
          "Allowed clear and adaptive feedback states"
        ],
        outcome: "Fast iteration loop with a polished, approachable interface"
      },
      {
        title: "Supportive Gamification Instead of Competitive Mechanics",
        points: [
          "Introduced staged progression with low-pressure reinforcement",
          "Used a mascot-driven tone to reduce intimidation",
          "Focused on consistency and confidence instead of rankings"
        ],
        outcome: "Users can practice more frequently without fear of judgment"
      }
    ],
    techStack: [
      { label: "Language", value: "Swift" },
      { label: "UI", value: "SwiftUI" },
      { label: "ML", value: "CoreML" },
      { label: "Vision", value: "VisionKit" },
      { label: "Tooling", value: "Xcode" },
      { label: "Design", value: "Supportive, beginner-first learning UX" }
    ],
    challenges: [
      {
        title: "Real-Time Feedback Without User Overload",
        problem: "Too much correction can make beginners feel discouraged.",
        fix: "Designed gentle, staged feedback patterns to keep correction helpful and emotionally safe"
      },
      {
        title: "Balancing Performance and Privacy",
        problem: "On-device inference must stay responsive on mobile hardware.",
        fix: "Optimized inference and UI updates around low-latency, offline-first usage"
      },
      {
        title: "Beginner Retention in Skill-Based Learning",
        problem: "Early frustration often leads to dropout in language practice apps.",
        fix: "Added structured stages and mascot-guided encouragement to reward consistent effort"
      }
    ],
    observations: [
      "Private practice mode significantly reduces beginner hesitation",
      "Low-latency feedback keeps practice sessions interactive and focused",
      "Supportive gamification tone improves consistency for first-time learners",
      "Recognition quality and emotional UX are equally important in learning outcomes"
    ],
    ethics: [
      "Privacy is treated as a product requirement, not a feature",
      "All camera processing happens locally on the device",
      "No images or video frames are stored or transmitted",
      "Experience designed for non-judgmental, confidence-first learning"
    ],
    learnings: [
      "Emotional safety is a core part of accessibility product design",
      "On-device ML creates trust as well as performance benefits",
      "Supportive UX language can materially affect retention",
      "Award-focused builds still need strong production thinking under tight constraints"
    ],
    futureWork: [
      "Expand supported gesture sets and lesson progression",
      "Improve personalized guidance based on repeated error patterns",
      "Introduce optional mentor-mode for supervised sessions",
      "Polish accessibility features for wider learner profiles"
    ],
    whatYouCanLearn: [
      "How to design private, confidence-first learning experiences",
      "How to ship real-time on-device CoreML interactions",
      "How to align accessibility and gamification thoughtfully",
      "How to frame social impact as a core technical requirement"
    ],
    finalNote: "Signie represents an accessibility-first approach to ASL education where technical decisions, privacy and emotional design work together. Winning the Apple Swift Student Challenge 2026 validated both the impact and execution."
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
    "iOS Development",
    "Full Stack Dev",
    "Web Design",
    "UI/UX Design",
    "App Development",
  ],
  tools: [
    "Swift",
    "SwiftUI",
    "CoreML",
    "VisionKit",
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

export const experience = [
  {
    company: "Infosys",
    role: "iOS Development Intern",
    period: "Mar 2026",
    location: "Mysore, India",
    type: "Internship",
    current: false,
    description: "Scrum Master and developer in a 10-member team building a fleet-management iOS application over 4 sprints.",
    skills: ["Swift", "SwiftUI", "CoreLocation", "Scrum"],
    sourceUrl: "https://github.com/FMS-T8/FMS",
  },
  {
    company: "Fidelity Investments",
    role: "Software Development Intern",
    period: "May 2026 - Jul 2026",
    location: "Bangalore, India",
    type: "Internship",
    current: false,
    description: "Built internal tooling for Fidelity's case-management platform and led an accessibility audit across their frontend ecosystem.",
    skills: ["Angular", "Spring Boot", "Java", "TypeScript", "Accessibility"],
  },
  {
    company: "LeanImpeccable Technologies",
    role: "Full-Stack AI/ML Engineer Intern",
    period: "Jul 2025 - Oct 2025",
    location: "Chennai, India",
    type: "Internship",
    current: false,
    description: "Engineered a unified frontend platform merging outputs from three ML models into a floor-plan analysis tool used in production.",
    skills: ["React", "Python", "FastAPI", "YOLOv8", "Detectron2", "OpenCV"],
    sourceUrl: "https://github.com/nikunjmathur08/IntoAEC",
  },
  {
    company: "Trench Inc.",
    role: "Frontend Intern",
    period: "Aug 2025 - Nov 2025",
    location: "Bangalore, India",
    type: "Internship",
    current: false,
    description: "Built and optimised the responsive frontend for a Solana-based decentralised trading platform.",
    skills: ["React", "TypeScript", "Solana", "Web3", "TailwindCSS"],
    liveUrl: "https://app.trench.ag/markets",
  },
  {
    company: "Ernst & Young",
    role: "LLMs & Generative AI Intern",
    period: "Jun 2025 - Jul 2025",
    location: "Delhi, India",
    type: "Internship",
    current: false,
    description: "Built a terminal-based scraping agent powered by a locally-running LLaMA 3.1 8B model, adopted as an internal EY tool.",
    skills: ["Python", "LLaMA 3.1", "Ollama", "Crawl4AI", "Prompt Engineering"],
    sourceUrl: "https://github.com/nikunjmathur08/Smart_Extractor",
  },
];

export const wwdc = {
  year: "2026",
  badge: "Swift Student Challenge Winner",
  title: "WWDC26",
  subtitle: "Apple Park, Cupertino, California",
  intro: "One of 350 developers selected globally as an Apple Swift Student Challenge Winner, earning an invitation to attend WWDC26 at Apple Park. A week of sessions, hands-on labs and connections with Apple engineers that redefined how I think about building software.",
  stat: "350",
  statLabel: "winners worldwide",
  context: "Signie, an on-device ASL learning app - was the submission that earned this invitation. Getting to share it with Apple engineers and fellow winners from across the globe at Apple Park made all the efforts worth it.",
  learnings: [
    {
      title: "Design is a first-class citizen",
      body: "WWDC reinforced that great Apple apps aren't distinguished by aesthetics alone - they emerge from thoughtful design, platform conventions, motion, accessibility and consistency working together. I left viewing design as an engineering discipline rather than the final layer of a product.",
    },
    {
      title: "Privacy should shape architecture from day one",
      body: "Conversations with Apple engineers reaffirmed the philosophy begind Signie - keeping inference entirely on-device isn't merely an implementation details, it's a product decision that buids trust. Privacy became something to architect for from the beginning, not a retrofit later.",
    },
    {
      title: "Modern Swift rewards simplicity",
      body: "Hands-on labs demonstrated how Swift Concurrency, Observation and newer platform APIs dramatically reduce internal complexity. Instead of writing infrastructure code to manage state and asynchronous workflows, I could focus more of my effort on solving the actual product problem.",
    },
    {
      title: "Real products create meaningful conversations",
      body: "Almost every technical discussion began with a simple question: 'What have you built?' Having a production app in users' hands transformed conversations from hypothetical ideas into concrete design decisions, trade-offs and the lessons learned. Shipping taught me far more than prototyping ever could.",
    },
    {
      title: "The strongest ideas emerge through community",
      body: "Meeting hundreds of Swift Student Challenge winners from around the world exposed me to radically different approaches to design, accessibility, machine learning and product thinking. The exchange of perspectives proved just as valuable as the sessions themselves, reminding me that great software is often shaped collaboratively.",
    },
  ],
  highlights: [
    { label: "Selected", value: "Globally Top 350" },
    { label: "App", value: "Signie" },
    { label: "Location", value: "Apple Park, CA" },
    { label: "Year", value: "2026" },
  ],
  images: [
    "/src/assets/images/wwdc/img1.webp",
    "/src/assets/images/wwdc/img2.webp",
    "/src/assets/images/wwdc/img3.webp",
    "/src/assets/images/wwdc/img4.webp",
    "/src/assets/images/wwdc/img5.webp",
    "/src/assets/images/wwdc/img6.webp",
    "/src/assets/images/wwdc/img7.webp",
    "/src/assets/images/wwdc/img8.webp",
    "/src/assets/images/wwdc/img9.webp",
    "/src/assets/images/wwdc/img10.webp",
    "/src/assets/images/wwdc/img11.webp",
    "/src/assets/images/wwdc/img12.webp",
    "/src/assets/images/wwdc/img13.webp",
    "/src/assets/images/wwdc/img14.webp",
    "/src/assets/images/wwdc/img15.webp",
  ],
};

export const awards = [
  {
    title: "Apple Swift Student Challenge Winner 2026",
    organization: "Apple",
    period: "Mar 2026",
    highlight: "Recognized for Signie, an on-device ASL learning experience focused on private, confidence-building feedback for beginners."
  },
  {
    title: "Best Overall App Award - iOS Development Center",
    organization: "SRM Institute of Science & Technology",
    period: "Apr 2026",
    highlight: "Recognized for Kalaa Studio, a creative tool that helps artists generate and refine visual concepts."
  },
  {
    title: "Won Alexa Developers Hackathon",
    organization: "Alexa Developers SRM",
    period: "Jun 2024",
    highlight: "Recognized for Evinco, a web-app for students to track the latest happenings in the college clubs."
  }
];


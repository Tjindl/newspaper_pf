/**
 * THE VANCOUVER LEDGER — content data.
 *
 * Single source of truth for all copy on the site. Every fact here traces
 * back to content-inventory.md, which was extracted from the live source
 * repo (Tjindl/tjindl.web). Headlines, kickers, decks, and section framing
 * are original newspaper-style writing on top of those facts — nothing
 * below invents a project, a job, a metric, or a credential that isn't
 * already in the inventory.
 *
 * "vol" figures in MARKETS.tickers are real counts of how many of the 18
 * cataloged projects list that exact technology in their tech stack —
 * derived by hand from PROJECTS below, not invented. A vol of 0 means the
 * skill is real (it's in the official skills list) but doesn't show up in
 * any project's tech tags — left in rather than hidden.
 */

const CONTENT = {
  meta: {
    title: "Tushar Jindal | Software Engineer & AI",
    description:
      "Tushar Jindal - Software Engineer & AI Researcher. Portfolio showcasing projects in machine learning, generative AI, and full-stack development.",
    keywords:
      "Tushar Jindal, UBC, Artificial Intelligence, Machine Learning, Generative AI, Software Engineer, Data Science, Portfolio",
    ogTitle: "Tushar Jindal | Software Engineer & AI",
    ogDescription:
      "Software Engineer specializing in AI, systems architecture, and full-stack development.",
  },

  publication: {
    // The masthead's big nameplate is the person, not the paper — "THE
    // VANCOUVER LEDGER" runs as the small eyebrow line above it instead.
    name: "THE VANCOUVER LEDGER",
    personName: "Tushar Jindal",
    tagline: "Serving the Data Science & Mathematics Beat Since Fall 2022",
    edition: "WEST COAST EDITION",
    priceLine: "FREE",
    // Real anchor date — when Tushar started at UBC — used only to compute
    // a plausible-looking Vol./No. below, not to fabricate a publication history.
    foundingDate: "2022-09-01",
  },

  nameCycle: [
    { text: "Tushar Jindal", lang: "en" },
    { text: "तुषार जिंदल", lang: "hi" },
    { text: "ਤੁਸ਼ਾਰ ਜਿੰਦਲ", lang: "pa" },
  ],

  hero: {
    kicker: "PROFILE",
    headline: "DATA SCIENCE STUDENT TRADES LECTURE HALLS FOR PRODUCTION ML PIPELINES",
    deck:
      "Tushar Jindal balances a double major in Data Science and Mathematics with hands-on contributions to NVIDIA and vLLM codebases — and a growing shelf of independent AI projects.",
    byline: "STAFF PROFILE",
    dateline: "VANCOUVER, B.C.",
    paragraphs: [
      "Tushar Jindal builds machine learning systems end to end, from computer vision pipelines to large language model inference engines — work he fits around a double major in Data Science and Mathematics at the University of British Columbia, where he is set to graduate in 2028. His coursework covers statistical modeling, machine learning, and large-scale data analysis; his side projects cover most of the rest.",
      "He is an active open-source contributor to production codebases used across the industry, including NVIDIA's cuDF and Dynamo projects and vLLM. Across those and his own work, he moves comfortably up and down the stack — production full-stack applications, APIs, and the infrastructure underneath them.",
    ],
    pullQuote:
      "Most interested in where statistical rigour meets real-world engineering constraints.",
    jumpText: "Related coverage: Projects, Page B1 · Markets, Page C1",
  },

  // Runs where a portrait would otherwise sit — no photo is on file, so this
  // stands in with real facts instead of a placeholder image. Every value
  // here already exists elsewhere in this file (education, contact, hero).
  atAGlance: {
    headline: "AT A GLANCE",
    rows: [
      { label: "PROGRAM", value: "B.Sc. Data Science & Mathematics" },
      { label: "SCHOOL", value: "University of British Columbia" },
      { label: "GRADUATING", value: "2028" },
      { label: "BASED IN", value: "Vancouver, B.C." },
      { label: "FOCUS", value: "ML systems, computer vision, LLM inference" },
      { label: "OPEN SOURCE", value: "4 merged PRs — NVIDIA cuDF", href: "https://github.com/rapidsai/cudf" },
    ],
  },

  weather: {
    headline: "TODAY'S FORECAST",
    location: "VANCOUVER, B.C.",
    conditions: "MOSTLY BUILDING, CHANCE OF DEPLOYS",
    rows: [
      { label: "HIGH", value: "Full-stack ML systems — computer vision through LLM inference engines" },
      { label: "ACTIVE FRONTS", value: "Web Developer, Science Undergraduate Society of UBC (Jun 2026–present); Full-Stack Telegram Dev Intern, The F* Word (through Mar 2026); math & programming tutoring (since 2023)" },
      { label: "WINDS", value: "Out of the open-source direction — NVIDIA cuDF, Dynamo, vLLM" },
      { label: "OUTLOOK", value: "Open to internships" },
    ],
  },

  contact: {
    email: "tushar.bzp05@gmail.com",
    github: { label: "@tjindl", href: "https://github.com/tjindl" },
    linkedin: { label: "tushar-jindal", href: "https://linkedin.com/in/tushar-jindal-97602420b/" },
    medium: { label: "@tushar.bzp05", href: "https://medium.com/@tushar.bzp05" },
  },

  resume: {
    href: "assets/resume/TjindlResumeLatest.pdf",
  },

  experience: [
    {
      role: "Web Developer",
      org: "Science Undergraduate Society of UBC",
      location: "Vancouver, BC",
      date: "Jun 2026 — Present",
      bullets: [
        "Building and maintaining web applications for the Science Undergraduate Society at UBC Vancouver",
        "Supporting student-facing services and internal tooling",
      ],
      logo: "assets/images/suslogo.png",
    },
    {
      role: "Full-Stack Telegram Developer Intern",
      org: "The F* Word",
      location: "Remote",
      date: "Dec 2025 — Mar 2026",
      bullets: [
        "Built and deployed production Telegram bots from scratch for a live fashion-tech platform",
        "Implemented intelligent matching, filtering logic, and automated scheduling",
        "Integrated a Playwright web scraper across 7 sources processing ~100K pages/month, cutting infrastructure costs ~80%",
        "Containerized the full stack with Docker",
      ],
      logo: "assets/images/f_word_logo.jpg",
    },
    {
      role: "Programming & Math Tutor",
      org: "Self-Employed",
      location: "Vancouver, BC",
      date: "May 2023 — Present",
      bullets: [
        "Providing one-on-one and group tutoring in mathematics (algebra, calculus, statistics) and programming (Python, Java)",
        "Designed personalized lesson plans and adapted teaching methods to different learning styles",
      ],
      logo: "assets/images/tutor_logo.png",
    },
  ],

  education: [
    {
      role: "B.Sc. Data Science & Mathematics",
      org: "University of British Columbia",
      location: "Vancouver, BC",
      date: "Fall 2022 — 2028",
      bullets: [
        "Building strong foundations in statistical modeling, machine learning, applied linear algebra, and large-scale data analysis",
      ],
      logo: "assets/images/ubc_logo.png",
    },
  ],

  skillGroups: [
    { category: "Languages", items: ["Java", "Python", "C/C++", "JavaScript", "TypeScript", "R"] },
    { category: "Frameworks", items: ["React", "Node.js", "Flask", "FastAPI", "Tailwind"] },
    { category: "Data & ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "MediaPipe", "HuggingFace", "LLMs / Generative AI"] },
    { category: "Infra & Data", items: ["PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Azure", "GCP"] },
  ],

  // vol = number of the 18 PROJECTS below whose tech list names this skill
  // (exact/near string match against the project's own tech tags).
  markets: {
    headline: "MARKETS",
    subhead: "SKILLS & STACK — LISTED SECURITIES, WEST COAST SESSION",
    tickers: [
      { symbol: "PY", name: "Python", sector: "Languages", vol: 12 },
      { symbol: "JAVA", name: "Java", sector: "Languages", vol: 3 },
      { symbol: "CPP", name: "C/C++", sector: "Languages", vol: 1 },
      { symbol: "JS", name: "JavaScript", sector: "Languages", vol: 2 },
      { symbol: "TS", name: "TypeScript", sector: "Languages", vol: 1 },
      { symbol: "R", name: "R", sector: "Languages", vol: 0 },

      { symbol: "RCT", name: "React", sector: "Frameworks", vol: 9 },
      { symbol: "NODE", name: "Node.js", sector: "Frameworks", vol: 4 },
      { symbol: "FASK", name: "Flask", sector: "Frameworks", vol: 2 },
      { symbol: "FAPI", name: "FastAPI", sector: "Frameworks", vol: 4 },
      { symbol: "TLWD", name: "Tailwind", sector: "Frameworks", vol: 2 },

      { symbol: "TRCH", name: "PyTorch", sector: "Data & ML", vol: 1 },
      { symbol: "TF", name: "TensorFlow", sector: "Data & ML", vol: 1 },
      { symbol: "SKL", name: "scikit-learn", sector: "Data & ML", vol: 3 },
      { symbol: "CV2", name: "OpenCV", sector: "Data & ML", vol: 3 },
      { symbol: "MDPP", name: "MediaPipe", sector: "Data & ML", vol: 3 },
      { symbol: "HF", name: "HuggingFace", sector: "Data & ML", vol: 0 },
      { symbol: "LLM", name: "LLMs / Generative AI", sector: "Data & ML", vol: 1 },

      { symbol: "PGS", name: "PostgreSQL", sector: "Infra & Data", vol: 0 },
      { symbol: "MDB", name: "MongoDB", sector: "Infra & Data", vol: 2 },
      { symbol: "GIT", name: "Git", sector: "Infra & Data", vol: 0 },
      { symbol: "DKR", name: "Docker", sector: "Infra & Data", vol: 2 },
      { symbol: "AWS", name: "AWS", sector: "Infra & Data", vol: 1 },
      { symbol: "AZ", name: "Azure", sector: "Infra & Data", vol: 0 },
      { symbol: "GCP", name: "GCP", sector: "Infra & Data", vol: 0 },
    ],
  },

  // Every project's "dateline" is location-only — no per-project dates exist
  // in the source data, so none are invented here. See content-inventory.md TODO.
  projects: {
    lead: {
      size: "lead",
      kicker: "AI / SYSTEMS",
      headline: "STUDENT-BUILT INFERENCE ENGINE SQUEEZES GPT-2 DOWN BY HALF",
      byline: "By T. JINDAL",
      dateline: "VANCOUVER, B.C.",
      name: "BitSmith",
      lede: "A custom LLM inference engine and research sandbox, BitSmith pairs an end-to-end GPT-2 compression pipeline — cutting the model's footprint by 50% using AWQ — with a pure-Python PageRank graph-pruning algorithm and a zero-dependency C++ inference engine tuned for Apple Silicon, built with PyBind11 and ARM NEON SIMD intrinsics.",
      tech: ["Python", "C++", "PyBind11", "ARM NEON", "LLMs", "Machine Learning"],
      link: "https://github.com/Tjindl/BitSmith",
    },
    mid: [
      {
        size: "mid",
        kicker: "DEV TOOLS",
        headline: "TOOL GIVES AI CODING SESSIONS A MEMORY THAT OUTLASTS THE CHAT",
        byline: "By T. JINDAL",
        dateline: "VANCOUVER, B.C.",
        name: "Lore",
        lede: "Lore is persistent project memory for developers and AI coding sessions — it captures architectural decisions, invariants, gotchas, and abandoned approaches as git-native JSON, then injects them into AI context via an MCP server. It ships with a CLI, a local web dashboard, a file watcher, and semantic search powered by Ollama.",
        tech: ["Node.js", "Express", "MCP SDK", "SQLite", "Ollama", "Tailwind CSS", "Commander"],
        link: "https://github.com/Tjindl/Lore",
      },
      {
        size: "mid",
        kicker: "AI / DEV TOOLS",
        headline: "CODE EXPLAINER ARGUES ITS CASE LIKE A PROOF, NOT A GUESS",
        byline: "By T. JINDAL",
        dateline: "VANCOUVER, B.C.",
        name: "Verifex",
        lede: "Verifex is a neuro-symbolic AI code explainer that pairs tree-sitter static analysis with LLM reasoning to explain why code is correct, rather than just what it does — focusing on invariants, termination, and complexity.",
        tech: ["Python", "FastAPI", "tree-sitter", "React", "OpenAI", "Docker"],
        link: "https://github.com/Tjindl/Verifex",
      },
    ],
    briefs: [
      {
        kicker: "AI / EDUCATION",
        headline: "CHATBOT MAKES SENSE OF UBC'S COURSE CATALOG",
        name: "UBC Course Assistant",
        lede: "An AI-powered chatbot for navigating UBC's course catalog using vector search and semantic understanding — natural language queries become high-dimensional embeddings via BERT-based sentence transformers, stored in ChromaDB.",
        tech: ["Python", "ChromaDB", "Sentence Transformers", "NLP", "Vector Search"],
        link: "https://github.com/Tjindl/ubc-course-assistant",
      },
      {
        kicker: "RESEARCH",
        headline: "REINFORCEMENT-LEARNING AGENT LEARNS TO SIMPLIFY ITS OWN ALGEBRA",
        name: "AxiomForge",
        lede: "A reinforcement learning research framework for automated mathematical reasoning, training a DQN agent to simplify polynomials and solve equations in a SymPy-based environment with a discrete action space of algebraic rewrite rules.",
        tech: ["Python", "PyTorch", "SymPy", "NumPy", "Reinforcement Learning", "DQN"],
        link: "https://github.com/Tjindl/AxiomForge",
      },
      {
        kicker: "ACCESSIBILITY",
        headline: "HACKATHON BUILD NARRATES THE STREET AHEAD IN REAL TIME",
        name: "MontrWalk",
        lede: "Built at ConUHacks X, MontrWalk is an accessibility navigation tool that uses Gemini 2.0 Flash for real-time street-view image analysis, helping users navigate urban environments with live AI-powered scene descriptions.",
        tech: ["Python", "Gemini API", "Computer Vision", "React", "FastAPI"],
        link: "https://github.com/Tjindl/Conuhacks-X",
      },
      {
        kicker: "FINTECH / AI",
        headline: "PLATFORM MATCHES STUDENTS TO SCHOLARSHIPS THEY'D NEVER HAVE FOUND",
        name: "AwardScope",
        lede: "An AI-powered financial aid discovery platform that matches students with scholarships using smart eligibility scoring, and generates personalized essay strategies with generative AI.",
        tech: ["React", "TypeScript", "Node.js", "MongoDB", "Gemini API", "Tailwind", "Docker"],
        link: "https://github.com/Tjindl/AwardScope",
      },
      {
        kicker: "COMPUTER VISION",
        headline: "WHITEBOARD NEEDS NOTHING BUT A WEBCAM AND A FINGER",
        name: "Aether",
        lede: "A real-time AR whiteboard that tracks a user's index finger via webcam and renders strokes in the air, powered by a Random Forest gesture classifier with 98%+ accuracy for gesture-based controls.",
        tech: ["Python", "OpenCV", "MediaPipe", "scikit-learn", "Computer Vision"],
        link: "https://github.com/Tjindl/Aether",
      },
      {
        kicker: "COMPUTER VISION",
        headline: "GESTURES TAKE OVER THE MAC'S MEDIA CONTROLS",
        name: "Handly",
        lede: "Handly lets you control a Mac with hand gestures, using a trained Random Forest classifier (99.3% accuracy) on MediaPipe hand landmarks to map real-time gestures to media and volume controls.",
        tech: ["Python", "MediaPipe", "OpenCV", "scikit-learn", "AppleScript"],
        link: "https://github.com/Tjindl/Handly",
      },
      {
        kicker: "DEV TOOLS",
        headline: "ANALYZER DRAWS THE DEPENDENCY MAP MOST CODEBASES DON'T HAVE",
        name: "Code Lantern",
        lede: "An AI-powered architecture analyzer that reconstructs dependency graphs and function relationships from uploaded projects, using a hybrid regex + AST parser for Python, JS, and TSX.",
        tech: ["Python", "JavaScript", "FastAPI", "Gemini API", "Cytoscape.js", "React"],
        link: "https://github.com/naomichenruoxi/code-lantern",
      },
      {
        kicker: "AI / CAREER",
        headline: "ENGINE SCORES RESUMES THE WAY AN ATS ACTUALLY WOULD",
        name: "Resume Optimizer",
        lede: "A resume intelligence engine using NLP for ATS checks, section detection, and skill extraction, with TF-IDF and cosine similarity scoring surfaced through a React dashboard for enhancement recommendations.",
        tech: ["Python", "FastAPI", "React", "spaCy", "scikit-learn", "NLP"],
        link: "https://github.com/Tjindl/resOptimizer",
      },
      {
        kicker: "COMPUTER VISION",
        headline: "CNN READS SIGN LANGUAGE OFF A LIVE WEBCAM FEED",
        name: "ASL Recognition",
        lede: "A real-time ASL gesture recognition system using a TensorFlow CNN with 99%+ accuracy, featuring live webcam prediction via OpenCV and MediaPipe Hands.",
        tech: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Flask", "React"],
        link: "https://github.com/Tjindl/ASL-Recognition",
      },
      {
        kicker: "HACKATHON / FINTECH",
        headline: "APP TURNS A SHOEBOX OF RECEIPTS INTO A LEDGER",
        name: "EzBooks",
        lede: "Built at Kickstart 2025 (UBC Biztech), EzBooks is a receipt parsing and bookkeeping app for small businesses that automates expense tracking and financial reporting.",
        tech: ["Python", "Flask", "React", "AWS Textract", "DynamoDB"],
        link: "https://github.com/calebblo/ezbooks",
      },
      {
        kicker: "PRODUCTIVITY",
        headline: "INBOX GETS AN AI THAT SORTS, SUMMARIZES, AND DRAFTS REPLIES",
        name: "MailMind",
        lede: "An intelligent email management system with automated categorization, summarization, and response generation.",
        tech: ["Python", "Gmail API", "NLP", "React", "Node.js"],
        link: "https://github.com/Tjindl/MailMind",
      },
      {
        kicker: "FULL STACK",
        headline: "CHAT APP KEEPS IT REAL-TIME, DARK-THEMED, AND SIMPLE",
        name: "Messaging App",
        lede: "A modern real-time chat application built with React, Node.js, and Socket.IO, featuring a sleek dark theme interface and real-time message synchronization.",
        tech: ["React", "Node.js", "Socket.IO", "JavaScript"],
        link: "https://github.com/Tjindl/messagingApp",
      },
      {
        kicker: "SYSTEMS",
        headline: "HOMEGROWN BLOCKCHAIN MOVES ITS OWN COIN",
        name: "CryptoStream",
        lede: "A custom blockchain implementation allowing users to send and receive cryptocurrency.",
        tech: ["Java", "Blockchain", "Cryptography", "Data Structures", "Networking"],
        link: "https://github.com/Tjindl/Cryptostream",
      },
      {
        kicker: "FULL STACK",
        headline: "RENTAL SHOP'S PAPER TRAIL GOES DIGITAL",
        name: "Sports Rental App",
        lede: "A full-stack application to manage rental products and customer data for a sports rental business, digitizing what had been a paper-based system.",
        tech: ["Java", "Swing", "JDBC", "SQL", "Unit Testing"],
        link: "https://github.com/Tjindl/Project-Starter",
      },
      {
        kicker: "FULL STACK",
        headline: "SPRING BOOT SERVICE KEEPS PERSONAL SPENDING HONEST",
        name: "Expense Tracker",
        lede: "A Spring Boot and MongoDB backend for tracking personal expenses via REST APIs.",
        tech: ["Spring Boot", "MongoDB", "REST API", "Java"],
        link: "https://github.com/Tjindl/tracker",
      },
    ],
  },

  // `repos` below is a fallback shown until data/wire-dispatches.json loads
  // (see main.js:refreshWireDispatchesFromLiveData). That file is
  // regenerated daily by scripts/update-wire-dispatches.mjs via GitHub
  // Actions, which queries the real GitHub API — this hand-written copy
  // will drift out of date and that's fine, it's a first-paint fallback only.
  openSource: {
    headline: "WIRE DISPATCHES",
    subhead: "CONTRIBUTIONS TO PRODUCTION CODEBASES USED IN INDUSTRY",
    repos: [
      {
        org: "rapidsai",
        repo: "cudf",
        repoUrl: "https://github.com/rapidsai/cudf",
        description:
          "NVIDIA's GPU-accelerated DataFrame library — cuDF enables pandas-like operations on CUDA GPUs. Written in C++ and Python with CUDA kernels.",
        logo: "https://github.com/nvidia.png",
        prs: [
          {
            title: "[FEA] Support force_ascii flag in JSON writer",
            url: "https://github.com/rapidsai/cudf/pull/23177",
            status: "merged",
            description: "Added force_ascii flag to the cuDF JSON engine mirroring the pandas API, allowing non-ASCII characters to be written as-is instead of escaped. Modified the Python backend and added parameterized tests.",
            tags: ["Python", "C++", "I/O"],
          },
          {
            title: "Replace duplicate type-stringify logic with type_to_name",
            url: "https://github.com/rapidsai/cudf/pull/23230",
            status: "merged",
            description: "Eliminated two hand-maintained type-stringify switches in C++ benchmark code by unifying on type_to_name(), and added a print_type debug utility to the cudf test headers.",
            tags: ["C++", "CUDA", "Benchmarks"],
          },
          {
            title: "Fix ufunc test domains to ensure valid input generation",
            url: "https://github.com/rapidsai/cudf/pull/23196",
            status: "merged",
            description: "Fixed NumPy ufunc tests (arcsin, arccos, arctanh) that were always producing NaN because inputs fell outside valid domains. Introduced domain-aware random input generation.",
            tags: ["Python", "Testing", "NumPy"],
          },
          {
            title: "Fix IO benchmark naming consistency",
            url: "https://github.com/rapidsai/cudf/pull/23180",
            status: "merged",
            description: "Standardised nvbench axis labels across ORC and text IO benchmarks, replacing undocumented abbreviations with full snake_case names.",
            tags: ["C++", "Benchmarks"],
          },
        ],
      },
      {
        org: "vllm-project",
        repo: "vllm",
        repoUrl: "https://github.com/vllm-project/vllm",
        description:
          "A high-throughput and memory-efficient LLM inference engine used in production by major AI labs. Powers fast serving of models like Llama, Mistral, and Qwen.",
        logo: "https://github.com/vllm-project.png",
        prs: [
          {
            title: "Fix platform plugin load error message swallowed",
            url: "https://github.com/vllm-project/vllm/pull/48326",
            status: "open",
            description: "Platform plugin failures were silently caught, causing vLLM to fall back to CPU with no diagnostic. Added explicit warning logging with exception details so operators can identify broken plugin installations immediately.",
            tags: ["Python", "Diagnostics", "Plugins"],
          },
        ],
      },
      {
        org: "ai-dynamo",
        repo: "dynamo",
        repoUrl: "https://github.com/ai-dynamo/dynamo",
        description:
          "NVIDIA's distributed LLM inference framework built in Rust and Python, designed for high-performance multi-node serving with disaggregated prefill and decode.",
        logo: "https://github.com/nvidia.png",
        prs: [
          {
            title: "fix(runtime): avoid no-reactor panic during sync OTLP export init",
            url: "https://github.com/ai-dynamo/dynamo/pull/11547",
            status: "open",
            description: "Calling logging::init() from a synchronous entrypoint panicked with \"no reactor running\" when OTLP export was enabled. Fixed by spinning up a background Tokio runtime for the exporter when none is already active.",
            tags: ["Rust", "Runtime", "OpenTelemetry"],
          },
        ],
      },
      {
        org: "Science-Undergraduate-Society",
        repo: "www-v2",
        repoUrl: "https://github.com/Science-Undergraduate-Society/www-v2",
        description: "The official website for the Science Undergraduate Society at UBC.",
        logo: "https://github.com/Science-Undergraduate-Society.png",
        prs: [
          {
            title: "Perf: Optimize homepage images using Next.js Image component",
            url: "https://github.com/Science-Undergraduate-Society/www-v2/pull/70",
            status: "open",
            description: "Optimized homepage images by migrating to the Next.js Image component for automatic lazy loading, sizing, and modern format conversions.",
            tags: ["Next.js", "React", "Performance"],
          },
        ],
      },
    ],
  },

  classifieds: {
    headline: "CLASSIFIEDS",
    ads: [
      {
        tag: "FOR HIRE",
        title: "Software Engineer — ML Systems",
        body: "Data Science & Mathematics student at UBC (class of 2028), available for internships and contract work. Full-stack, computer vision, LLM inference. References: open-source commit history at cuDF, vLLM, and Dynamo.",
        ctaLabel: "View résumé →",
        ctaHref: "assets/resume/TjindlResumeLatest.pdf",
      },
      {
        tag: "WANTED",
        title: "Interesting Problems",
        body: "Seeking work at the intersection of statistical rigour and real-world engineering constraints. Will trade evenings for a good systems bug.",
        ctaLabel: null,
        ctaHref: null,
      },
    ],
    listings: [
      { label: "EMAIL", value: "tushar.bzp05@gmail.com", href: "mailto:tushar.bzp05@gmail.com" },
      { label: "GITHUB", value: "@tjindl", href: "https://github.com/tjindl" },
      { label: "LINKEDIN", value: "tushar-jindal", href: "https://linkedin.com/in/tushar-jindal-97602420b/" },
      { label: "MEDIUM", value: "@tushar.bzp05", href: "https://medium.com/@tushar.bzp05" },
    ],
  },
};

# Content Inventory

Source: content was extracted from **`Tjindl/tjindl.web`** (the repo that actually deploys to `https://tjindl.github.io/tjindl.web/`), not from this repo. See "A note on repos" at the bottom — this repo (`newspaper_pf`) had zero commits and zero files when this inventory was written.

All facts below are copied verbatim or near-verbatim from that repo's source. Nothing here is invented.

---

## Identity

- **Name**: Tushar Jindal
- **Title/byline** (from hero): "ML Engineer & Computer Vision — Data Science & Mathematics at UBC"
- **Page `<title>`**: "Tushar Jindal | Software Engineer & AI"
- **Meta description**: "Tushar Jindal - Software Engineer & AI Researcher. Portfolio showcasing projects in machine learning, generative AI, and full-stack development."
- **Meta keywords**: Tushar Jindal, UBC, Artificial Intelligence, Machine Learning, Generative AI, Software Engineer, Data Science, Portfolio
- **OG title**: "Tushar Jindal | Software Engineer & AI"
- **OG description**: "Software Engineer specializing in AI, systems architecture, and full-stack development."
- **Name shown in rotating nav widget** (cycles every 2.5s): "Tushar Jindal" / "तुषार जिंदल" (Hindi) / "ਤੁਸ਼ਾਰ ਜਿੰਦਲ" (Punjabi)
- **Favicon / OG image**: `resume_icon.png` (local); OG image tag also points to a LinkedIn CDN profile-photo URL (likely stale/expiring — flagging, not using).

## About (bulleted, from hero "About" section)

- Double major in Data Science and Mathematics at UBC, graduating 2028 — statistical modeling, machine learning, and large-scale data analysis
- Building end-to-end ML systems, from computer vision pipelines to LLM inference engines
- Active open-source contributor to industry ML codebases like NVIDIA's cuDF and Dynamo, and vLLM
- Comfortable across the stack: production full-stack apps, APIs, and infra
- Most interested in where statistical rigour meets real-world engineering constraints

## Contact / Social Links

| Label | Value | URL |
|---|---|---|
| Email | tushar.bzp05@gmail.com | mailto:tushar.bzp05@gmail.com |
| GitHub | @tjindl | https://github.com/tjindl |
| LinkedIn | tushar-jindal | https://linkedin.com/in/tushar-jindal-97602420b/ |
| Medium | @tushar.bzp05 | https://medium.com/@tushar.bzp05 |

Site also has a working contact form (EmailJS-powered — sends name/email/message). Fields: Name, Email, Message.

## Resume

- PDF asset present at `public/assets/resume/TjindlResumeLatest.pdf`, linked from nav as "Resume."
- Not extracted/transcribed here (binary asset) — carry the file itself over as-is, don't re-key its contents as separate facts. If specific resume content is needed beyond what's already itemized below, **TODO: confirm with Tushar** rather than parsing the PDF and treating it as authoritative.

## Work Experience

1. **Web Developer** — Science Undergraduate Society of UBC, Vancouver, BC — **Jun 2026 – Present**
   - Building and maintaining web applications for the Science Undergraduate Society at UBC Vancouver
   - Supporting student-facing services and internal tooling

2. **Full-Stack Telegram Developer Intern** — The F* Word, Remote — **Dec 2025 – Mar 2026**
   - Built and deployed production Telegram bots from scratch for a live fashion-tech platform
   - Implemented intelligent matching, filtering logic, and automated scheduling
   - Integrated a Playwright web scraper across 7 sources processing ~100K pages/month, cutting infrastructure costs ~80%
   - Containerized the full stack with Docker

3. **Programming & Math Tutor** — Self-Employed, Vancouver, BC — **May 2023 – Present**
   - Providing one-on-one and group tutoring in mathematics (algebra, calculus, statistics) and programming (Python, Java)
   - Designed personalized lesson plans and adapted teaching methods to different learning styles

> Note: entry #1's dates (Jun 2026 – Present) and entry #2's dates (Dec 2025 – Mar 2026) are as they appear in source. Today's date is 2026-08-22, so entry #2 reads as already ended and entry #1 as already started — carrying dates through as-is; **flagging for Tushar to confirm these are current**, not correcting them myself.

## Education

- **B.Sc. Data Science & Mathematics** — University of British Columbia, Vancouver, BC — **Fall 2022 – 2028**
  - Building strong foundations in statistical modeling, machine learning, applied linear algebra, and large-scale data analysis

## Skills (grouped, as displayed)

- **Languages**: Java, Python, C/C++, JavaScript, TypeScript, R
- **Frameworks**: React, Node.js, Flask, FastAPI, Tailwind
- **Data & ML**: PyTorch, TensorFlow, scikit-learn, OpenCV, MediaPipe, HuggingFace, LLMs / Generative AI
- **Infra & Data**: PostgreSQL, MongoDB, Git, Docker, AWS, Azure, GCP

## Projects (18 total, from `src/Data.js`, in source order)

| Name | Description | Tech | Link |
|---|---|---|---|
| BitSmith 🧠 | Custom LLM Inference Engine & Research Sandbox. Designed an end-to-end compression pipeline for GPT-2 reducing footprint by 50% using AWQ. Created a pure-Python PageRank graph-pruning algorithm. Built a zero-dependency C++ inference engine optimized for Apple Silicon with PyBind11 and ARM NEON SIMD intrinsics. | Python, C++, PyBind11, ARM NEON, LLMs, Machine Learning | github.com/Tjindl/BitSmith |
| Lore 🧠 | Persistent project memory for developers and AI coding sessions. Captures architectural decisions, invariants, gotchas, and abandoned approaches — stored as git-native JSON, injected into AI context via an MCP server. Features a CLI, local web dashboard, file watcher, and semantic search via Ollama. | Node.js, Express, MCP SDK, SQLite, Ollama, Tailwind CSS, Commander | github.com/Tjindl/Lore |
| UBC Course Assistant 🎓 | AI-powered chatbot for navigating UBC's course catalog using vector search and semantic understanding. Transforms natural language queries into high-dimensional embeddings via BERT-based sentence transformers stored in ChromaDB. | Python, ChromaDB, Sentence Transformers, NLP, Vector Search | github.com/Tjindl/ubc-course-assistant |
| AxiomForge ∑ | RL research framework for automated mathematical reasoning. Trains a DQN agent to simplify polynomials and solve equations using a SymPy-based environment with a discrete action space of algebraic rewrite rules. | Python, PyTorch, SymPy, NumPy, Reinforcement Learning, DQN | github.com/Tjindl/AxiomForge |
| MontrWalk ♿ | Accessibility navigation tool built at ConUHacks X. Uses Gemini 2.0 Flash for real-time street-view image analysis to help users navigate urban environments with live AI-powered scene descriptions. | Python, Gemini API, Computer Vision, React, FastAPI | github.com/Tjindl/Conuhacks-X |
| AwardScope 🎯 | AI-powered financial aid discovery platform that matches students with scholarships using smart eligibility scoring and generates personalized essay strategies with generative AI. | React, TypeScript, Node.js, MongoDB, Gemini API, Tailwind, Docker | github.com/Tjindl/AwardScope |
| Aether ✏️ | A real-time AR whiteboard that tracks your index finger via webcam and renders strokes in the air. Powered by a Random Forest gesture classifier with 98%+ accuracy for gesture-based controls. | Python, OpenCV, MediaPipe, scikit-learn, Computer Vision | github.com/Tjindl/Aether |
| Verifex 🔍 | A neuro-symbolic AI code explainer that uses tree-sitter static analysis paired with LLM reasoning to explain why code is correct — focusing on invariants, termination, and complexity. | Python, FastAPI, tree-sitter, React, OpenAI, Docker | github.com/Tjindl/Verifex |
| Handly 🤚 | Control your Mac with hand gestures. Uses a trained Random Forest classifier (99.3% accuracy) on MediaPipe hand landmarks to map real-time gestures to media and volume controls. | Python, MediaPipe, OpenCV, scikit-learn, AppleScript | github.com/Tjindl/Handly |
| Code Lantern 🏮 | An AI-powered architecture analyzer that reconstructs dependency graphs and function relationships from uploaded projects using a hybrid regex + AST parser for Python, JS, and TSX. | Python, JavaScript, FastAPI, Gemini API, Cytoscape.js, React | github.com/naomichenruoxi/code-lantern |
| Resume Optimizer 📄 | A resume intelligence engine using NLP for ATS checks, section detection, and skill extraction. Features TF-IDF + cosine similarity scoring with a React dashboard for enhancement recommendations. | Python, FastAPI, React, spaCy, scikit-learn, NLP | github.com/Tjindl/resOptimizer |
| ASL Recognition 🤟 | A real-time ASL gesture recognition system using a TensorFlow CNN with 99%+ accuracy. Features live webcam prediction using OpenCV and MediaPipe Hands. | Python, TensorFlow, OpenCV, MediaPipe, Flask, React | github.com/Tjindl/ASL-Recognition |
| EzBooks 📚 | A receipt parsing and bookkeeping app for small businesses built at Kickstart 2025 (UBC Biztech). Automates expense tracking and financial reporting. | Python, Flask, React, AWS Textract, DynamoDB | github.com/calebblo/ezbooks |
| MailMind 📧 | An intelligent email management system with automated categorization, summarization, and response generation. | Python, Gmail API, NLP, React, Node.js | github.com/Tjindl/MailMind |
| Messaging App 💬 | A modern real-time chat application built with React, Node.js, and Socket.IO. Features a sleek dark theme interface and real-time message synchronization. | React, Node.js, Socket.IO, JavaScript | github.com/Tjindl/messagingApp |
| CryptoStream 💵 | A custom Blockchain implementation, allowing users to send and receive cryptocurrency. | Java, Blockchain, Cryptography, Data Structures, Networking | github.com/Tjindl/Cryptostream |
| Sports Rental App ⚽️ | A full-stack application to manage rental products and customer data for a sports rental business, digitizing the traditional paper-based system. | Java, Swing, JDBC, SQL, Unit Testing | github.com/Tjindl/Project-Starter |
| Expense Tracker 💸 | Spring Boot + MongoDB backend for tracking personal expenses via REST APIs. | Spring Boot, MongoDB, REST API, Java | github.com/Tjindl/tracker |

No dates are attached to individual projects in the source data — cannot fabricate publish/completion dates for the "dateline" newspaper treatment. **TODO: ask Tushar for rough dates (or at least chronological order) if the design wants datelines per project article.**

## Open Source Contributions (separate section from Projects, from `src/OpenSource.jsx`)

Subtitle in source: *"Contributions to production codebases used in industry."*

### rapidsai/cudf
NVIDIA's GPU-accelerated DataFrame library — cuDF enables pandas-like operations on CUDA GPUs. Written in C++ and Python with CUDA kernels.
- **[merged]** [FEA] Support force_ascii flag in JSON writer (PR #23177) — Added force_ascii flag to the cuDF JSON engine mirroring the pandas API, allowing non-ASCII characters to be written as-is instead of escaped. Modified the Python backend and added parameterized tests. Tags: Python, C++, I/O
- **[merged]** Replace duplicate type-stringify logic with type_to_name (PR #23230) — Eliminated two hand-maintained type-stringify switches in C++ benchmark code by unifying on type_to_name(), and added a print_type debug utility to the cudf test headers. Tags: C++, CUDA, Benchmarks
- **[merged]** Fix ufunc test domains to ensure valid input generation (PR #23196) — Fixed NumPy ufunc tests (arcsin, arccos, arctanh) that were always producing NaN because inputs fell outside valid domains. Introduced domain-aware random input generation. Tags: Python, Testing, NumPy
- **[merged]** Fix IO benchmark naming consistency (PR #23180) — Standardised nvbench axis labels across ORC and text IO benchmarks, replacing undocumented abbreviations with full snake_case names. Tags: C++, Benchmarks

### vllm-project/vllm
A high-throughput and memory-efficient LLM inference engine used in production by major AI labs. Powers fast serving of models like Llama, Mistral, and Qwen.
- **[open]** Fix platform plugin load error message swallowed (PR #48326) — Platform plugin failures were silently caught, causing vLLM to fall back to CPU with no diagnostic. Added explicit warning logging with exception details so operators can identify broken plugin installations immediately. Tags: Python, Diagnostics, Plugins

### ai-dynamo/dynamo
NVIDIA's distributed LLM inference framework built in Rust and Python, designed for high-performance multi-node serving with disaggregated prefill and decode.
- **[open]** fix(runtime): avoid no-reactor panic during sync OTLP export init (PR #11547) — Calling logging::init() from a synchronous entrypoint panicked with "no reactor running" when OTLP export was enabled. Fixed by spinning up a background Tokio runtime for the exporter when none is already active. Tags: Rust, Runtime, OpenTelemetry

### Science-Undergraduate-Society/www-v2
The official website for the Science Undergraduate Society at UBC.
- **[open]** Perf: Optimize homepage images using Next.js Image component (PR #70) — Optimized homepage images by migrating to the Next.js Image component for automatic lazy loading, sizing, and modern format conversions. Tags: Next.js, React, Performance

(Status badges — "merged" vs "open" — should carry over; they're factual, not decorative.)

## Images / Assets found in repo

- `src/assets/f_word_logo.jpg` — The F* Word company logo (used next to Experience entry)
- `src/assets/ubc_logo.png` — UBC logo (used next to Education entry)
- `src/assets/suslogo.png` — Science Undergraduate Society logo (used next to Experience entry)
- `src/assets/tutor_logo.png` — tutoring logo (used next to Experience entry)
- `src/assets/resume_icon.png` / `public/assets/resume_icon.png` — favicon
- `public/assets/resume/TjindlResumeLatest.pdf` — resume PDF
- Open-source org logos are loaded live from GitHub's avatar CDN (`https://github.com/<org>.png`), not local files
- No portrait/headshot photo found anywhere in the repo. The only photo referenced is a LinkedIn CDN URL in the OG meta tag — external, not an asset, and the URL string contains an expiring timestamp so it's likely dead already. **TODO: need an actual photo file from Tushar for the "front page" portrait the brief calls for**, or the design has to run without one.

## Explicitly NOT included (found but not real portfolio content)

- `public/coc-stats.json` — a Clash of Clans player-stats blob (`scripts/update-coc.mjs` fetches it from the CoC API). It is **not imported or rendered anywhere in `src/`** — dead data, not live site content. Leaving it out of the rebuild entirely rather than guessing it was meant to be a hidden feature.

---

## Stack, build, and deploy (for Phase 0 context)

- **Framework**: React 18.3 + Vite 6, plain JS (`.jsx`), no TypeScript.
- **Key deps**: `framer-motion` (page/section animation), `react-scroll` (smooth-scroll nav), `react-icons`, `react-bootstrap`/`bootstrap` (present in package.json, not obviously used in the files read), `@emailjs/browser` (contact form), `d3` and `parallax` (present in deps, likely backing `ParallaxBackground`/`NeuralBackground`/`ParticleBackground` components — not fully read).
- **Routing**: none — single page, section anchors (`#about`, `#skills`, `#experience`, `#projects`, `#opensource`, `#connect`) with `react-scroll` smooth-scrolling and a scroll-spy nav.
- **Theme**: light/dark toggle stored in `localStorage`, applied via `data-theme` attribute on `<html>`, set inline in `index.html` `<head>` before paint to avoid flash.
- **Content model**: content is hardcoded across multiple `.jsx`/`.js` files (`Data.js` for projects, inline arrays in `Experience.jsx`, `Skills.jsx`, `Connect.jsx`, `OpenSource.jsx`, and inline in `App.jsx` for the about bullets and hero). **Not** centralized in one JSON/content file today — the new build should consolidate this per the brief's Phase 3 requirement.
- **Build/deploy**: `vite build` → `dist/`, deployed via `gh-pages` npm package (`npm run deploy` → `gh-pages -d dist`) to the `gh-pages` branch, served at `https://tjindl.github.io/tjindl.web/`. `vite.config.js` sets `base: '/tjindl.web/'` — confirms the project-path deploy pattern the new build must also follow (relative asset paths, no leading slashes).
- **Env vars**: EmailJS needs `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` at build time (not present in repo, presumably in a local `.env` / GitHub Actions secret not checked into git).

---

## A note on repos (important — read this)

This repo, **`newspaper_pf`** (remote: `github.com/Tjindl/newspaper_pf`, description "pf as a newspaper"), had **zero commits and zero files** when I started — a fresh, empty repository. The brief's Phase 0 instructions assume the current portfolio's source lives in this repo; it doesn't.

The actual live site (`tjindl.github.io/tjindl.web/`) is built from a **separate** repo, `Tjindl/tjindl.web`. I cloned that repo read-only into a scratch directory outside this project to extract the content above — I did not modify it and it is not part of this repo's history.

Two implications worth confirming with you before I go further:
1. Is `newspaper_pf` meant to become the new site's source (replacing `tjindl.web`'s deployment), or should the newspaper rebuild happen inside `tjindl.web` itself on a `newspaper` branch as the brief describes? The brief says "branch called `newspaper`, don't touch `main`" — that only makes sense inside a repo that already has a `main` with the current site, i.e. `tjindl.web`, not this empty one.
2. If the rebuild does happen in `tjindl.web`, I'll need you to point me there explicitly before I create branches or push anything, since `newspaper_pf` and `tjindl.web` are different remotes with different owners' expectations of what each repo is for.

I'm stopping here — end of Phase 0 — to get your call on that before writing `design-plan.md` or touching any code.

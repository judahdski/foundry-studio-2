import { Situation, ProblemPattern, ProcessStage, CaseStudy, WorkingPrinciple } from '../types';

export const SITUATIONS: Situation[] = [
  {
    id: 'website',
    situation: 'I need a website.',
    subtext: 'Your current website fails to reflect your capability, or you need an intentional digital presence built with clarity.',
    serviceName: 'Website Development',
    serviceCode: '01',
    coreIdea: 'Purposeful websites for businesses, professionals, and personal brands.',
    idealFor: [
      'Editorial & business websites',
      'High-clarity landing pages',
      'Professional & personal brand portfolios',
      'Consultancies, studios, and specialized firms'
    ],
    deliverables: [
      'Structured content architecture & narrative layout',
      'High-performance, accessible frontend build (Vite/React)',
      'Editorial typography & responsive layout system',
      'Lightweight headless CMS or structured content hooks'
    ],
    startingPoint: 'Usually starts with undefined positioning, scattered messaging, or a template that no longer fits the work.',
    typicalOutcome: 'A clear, distinctive web presence that articulates your work without sales noise or technical bloat.'
  },
  {
    id: 'business-system',
    situation: 'I need a system for how my business works.',
    subtext: 'Your operations have outgrown spreadsheets, WhatsApp threads, and disconnected tools, causing manual friction every day.',
    serviceName: 'Custom Web Development',
    serviceCode: '02',
    coreIdea: 'Turn the way your business works into a system.',
    idealFor: [
      'Internal operational portals & dispatch systems',
      'Custom workflow & inventory tracking tools',
      'Multi-stakeholder approval & order pipelines',
      'Client portals & bespoke back-office software'
    ],
    deliverables: [
      'Domain & relational workflow modeling',
      'Custom browser-based operational software',
      'Role-based permissions & secure data pipelines',
      'Automated reconciliation, logging, and status state machines'
    ],
    startingPoint: 'Usually starts with teams copying data between tools, missed handoffs, and tribal knowledge keeping things afloat.',
    typicalOutcome: 'One cohesive system tailored to your actual operational rhythm, eliminating manual duplication.'
  },
  {
    id: 'maintenance',
    situation: 'I already have an application.',
    subtext: 'You have live software that needs reliable care, bug fixes, dependency health, or ongoing feature enhancements.',
    serviceName: 'Web Application Maintenance',
    serviceCode: '03',
    coreIdea: 'Keep your existing application running and evolving.',
    idealFor: [
      'Applications without a dedicated in-house team',
      'Existing web tools requiring routine maintenance',
      'Incremental feature enhancements and UI refinements',
      'Security patches, dependency upgrades, and server health'
    ],
    deliverables: [
      'System health audits & dependency modernization',
      'Regular bug fixing and reactive operational support',
      'Continuous feature additions aligned with your workflow',
      'Deployment pipeline upkeep and environment monitoring'
    ],
    startingPoint: 'Usually starts with a codebase built by previous contractors that nobody currently understands or maintains.',
    typicalOutcome: 'Predictable software stability and a direct technical partner who keeps the application healthy as your business evolves.'
  },
  {
    id: 'optimization',
    situation: 'My application works, but something isn’t working well.',
    subtext: 'The system runs, but it is slow, fragile, or every minor change takes weeks and introduces unexpected bugs.',
    serviceName: 'Refactoring & Performance Optimization',
    serviceCode: '04',
    coreIdea: 'Make your existing application faster and easier to evolve.',
    idealFor: [
      'Slow database queries & heavy frontend render cycles',
      'Tangled legacy codebases suffering from technical debt',
      'Applications where new features regularly break old ones',
      'Systems experiencing intermittent timeouts or scaling friction'
    ],
    deliverables: [
      'Performance profiling & bottleneck diagnostic report',
      'Database query indexing, caching & schema cleanup',
      'Frontend bundle slimming & state management refactoring',
      'Architectural decoupling for safe, predictable feature releases'
    ],
    startingPoint: 'Usually starts with mounting frustration over slow page loads and developers saying "we have to rewrite everything".',
    typicalOutcome: 'Significantly faster page response times, lower infrastructure load, and clean code seams that make future changes effortless.'
  }
];

export const PROBLEM_PATTERNS: ProblemPattern[] = [
  {
    id: 'manual-data-shuffling',
    label: 'Data Fragmentation',
    question: 'Still moving data between Excel, WhatsApp, and email?',
    description: 'Teams spend hours manually transcribing client requests, order details, and numbers across disparate tabs and messaging groups.',
    manifestation: 'Spreadsheets get overwritten, critical messages get lost in chat histories, and discrepancies take half a day to reconcile.',
    rootCause: 'Data has no single source of truth; communication channels are being misused as storage systems.',
    systemSolution: 'A centralized operational ledger with direct data entry points and automated status handoffs.'
  },
  {
    id: 'reporting-fatigue',
    label: 'Reporting Bottlenecks',
    question: 'Spending hours preparing reports that should be available instantly?',
    description: 'Management needs operational clarity, but someone on your team has to spend every Friday afternoon stitching together CSV exports.',
    manifestation: 'Decision-makers operate on outdated numbers, and senior staff waste mental energy on mundane copy-pasting.',
    rootCause: 'Data is locked across siloed applications with no structured query or aggregation layer.',
    systemSolution: 'Live metrics views and unified data feeds that calculate operational status automatically.'
  },
  {
    id: 'manual-repetition',
    label: 'Process Friction',
    question: 'Your team follows the same manual steps every single day?',
    description: 'Predictable tasks—like notifying a client, generating an invoice draft, or calculating project margins—are done by hand.',
    manifestation: 'Fatigue leads to human errors, onboarding new employees takes months, and business capacity caps out quickly.',
    rootCause: 'Business logic lives entirely inside team members’ heads rather than being encoded into software rules.',
    systemSolution: 'Structured state machines that validate inputs, automate repetitive triggers, and guide steps consistently.'
  },
  {
    id: 'information-sprawl',
    label: 'Tribal Knowledge',
    question: 'Your critical operational information lives in too many places?',
    description: 'Customer notes in one app, project files in another, pricing in someone’s notebook, and status updates scattered across chat.',
    manifestation: 'When an employee is out sick or leaves, operations stall because no one knows where the real truth lives.',
    rootCause: 'Systems evolved organically over years without an overarching architectural information model.',
    systemSolution: 'A single, structured system where customer records, project states, and history are consolidated.'
  },
  {
    id: 'codebase-rigidity',
    label: 'Technical Debt',
    question: 'Your application still works, but every change takes too long?',
    description: 'Even the simplest request—adding a field, updating an export—requires touching five different files and risks breaking unrelated features.',
    manifestation: 'Feature velocity grinds to a halt; developers become hesitant to touch core modules; deployment days cause anxiety.',
    rootCause: 'Accumulated technical debt and tight coupling where components lack clear boundaries and testable seams.',
    systemSolution: 'Surgical refactoring to decouple business logic, modularize interfaces, and establish clean architectural seams.'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'understand',
    number: '01',
    name: 'Understand',
    headline: 'We don’t start by building. We start by understanding.',
    action: 'Diagnose what is actually happening in the real world.',
    inquiry: 'What does the real workflow look like when nobody is watching?',
    focusItems: [
      'Current operational workflow & human touchpoints',
      'Where friction, manual handoffs, and delays happen',
      'Repetitive tasks draining employee focus',
      'Real-world business and technical constraints'
    ],
    transformationFrom: 'Raw operational chaos & complaints',
    transformationTo: 'Clear map of actual friction and requirements'
  },
  {
    id: 'structure',
    number: '02',
    name: 'Structure',
    headline: 'Find the structure behind the mess.',
    action: 'Map relationships, information models, and operational logic.',
    inquiry: 'What are the foundational entities, relationships, and dependencies?',
    focusItems: [
      'Mapping state transitions and operational stages',
      'Defining core data models and single sources of truth',
      'Establishing clear boundaries between modules',
      'Untangling dependencies between teams and tools'
    ],
    transformationFrom: 'Disjointed notes & fragmented tools',
    transformationTo: 'Coherent domain model & system architecture'
  },
  {
    id: 'simplify',
    number: '03',
    name: 'Simplify',
    headline: 'Remove unnecessary complexity before building.',
    action: 'Eliminate steps that should not exist in the first place.',
    inquiry: 'Does it actually need to work this way, or is it just habit?',
    focusItems: [
      'Pruning redundant approval loops and dead fields',
      'Refusing to merely digitize a broken manual process',
      'Streamlining human inputs to the bare essentials',
      'Simplifying decision paths for end-users'
    ],
    transformationFrom: 'Over-complicated 12-step paper habits',
    transformationTo: 'Lean, focused 3-step system pathway'
  },
  {
    id: 'design',
    number: '04',
    name: 'Design',
    headline: 'Shape the system around real people and real workflows.',
    action: 'Architect clear interfaces and deliberate interactions.',
    inquiry: 'How do we present the right information at the exact right moment?',
    focusItems: [
      'Information density matched to user focus',
      'High-contrast, legible typographic hierarchy',
      'Error prevention and contextual guidance',
      'System feedback and immediate state updates'
    ],
    transformationFrom: 'Abstract blueprints & wireframe concepts',
    transformationTo: 'Deliberate, responsive, ergonomic interface'
  },
  {
    id: 'build',
    number: '05',
    name: 'Build',
    headline: 'Turn the structured solution into reliable software.',
    action: 'Engineer maintainable, production-grade systems.',
    inquiry: 'How do we build this so it runs smoothly today and adapts tomorrow?',
    focusItems: [
      'Type-safe, modern web engineering with clean seams',
      'Resilient database modeling and optimized queries',
      'Automated validation and dependable error handling',
      'Complete documentation and transparent code ownership'
    ],
    transformationFrom: 'Interface layouts & architecture maps',
    transformationTo: 'Working, production-grade useful system'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'operational-dispatch-system',
    title: 'Operations & Dispatch Workflow Engine',
    category: 'Custom Web Development',
    clientType: 'Regional Logistics & Field Operations Firm',
    summary: 'A scattered operational workflow across WhatsApp, Excel, and paper slips turned into a single, cohesive browser-based dispatch console.',
    problem: {
      overview: 'Orders arrived via phone, email, and messaging groups. Dispatchers manually transcribed addresses into a shared spreadsheet, which frequently suffered write-conflicts. Drivers were dispatched via copy-pasted text messages, and status checks required phone calls.',
      frictionPoints: [
        'Duplicate entry across three separate communication channels',
        'Frequent delivery delays due to outdated address notes in chat',
        'No real-time visibility into driver capacity or delivery completion'
      ]
    },
    context: 'The company was handling 200+ daily field dispatches. Operational staff spent over 3 hours each morning just verifying that spreadsheets matched drivers’ actual routes.',
    approach: {
      philosophy: 'Instead of buying an off-the-shelf logistics suite with hundreds of unused enterprise features, we modeled their exact 4-stage delivery lifecycle.',
      keyDecisions: [
        'Centralized intake into a single relational order queue',
        'Created a mobile-friendly view for drivers requiring only tap-to-complete actions',
        'Implemented automatic status updates that triggered client alerts without human intervention'
      ]
    },
    system: {
      description: 'A browser-based operational hub featuring a live dispatcher board, mobile driver manifest, and automated audit trail.',
      modules: [
        'Real-time order intake & deduplication parser',
        'Visual driver assignment & capacity board',
        'Driver mobile manifest with offline-tolerant status updates',
        'Historical route archive and delivery reconciliation'
      ],
      dataFlow: 'Incoming Order → Validated Entity → Dispatch Queue → Driver Route Sheet → Live Status Confirmation → Archive'
    },
    result: {
      impact: 'Manual re-entry was completely eliminated, dispatch preparation time shrank from 3 hours to 15 minutes, and route disputes fell to near zero.',
      tangibleBenefits: [
        'Single source of truth for all 200+ daily orders',
        'Zero lost delivery notes or conflicting spreadsheet versions',
        'Direct time savings of ~18 staff hours per week across the team'
      ]
    },
    technology: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'asset-registry-portal',
    title: 'Field Equipment Service & Inspection System',
    category: 'Custom Web Development',
    clientType: 'Commercial Facilities & Maintenance Provider',
    summary: 'Transformed fragmented paper inspection logs and ad-hoc email threads into a structured equipment registry with automated service schedules.',
    problem: {
      overview: 'Maintenance technicians conducted compliance inspections on paper checklists. Reports were scanned and emailed to administrators, who manually updated customer folders. When audit inspections occurred, assembling history took days.',
      frictionPoints: [
        'Paper records were frequently misfiled, water-damaged, or incomplete',
        'Preventive maintenance intervals were missed until equipment malfunctioned',
        'Client compliance certificates took up to two weeks to issue'
      ]
    },
    context: 'Managing over 800 active pieces of client equipment with strict regulatory compliance deadlines and legal liability.',
    approach: {
      philosophy: 'We grounded the system in asset identities: every piece of equipment became an identifiable record with a chronological service ledger.',
      keyDecisions: [
        'Designed lightweight mobile checklist forms optimized for gloves and poor field connectivity',
        'Built automated scheduling triggers based on service intervals (30, 90, 365 days)',
        'Standardized pass/fail inspection criteria to eliminate ambiguous handwritten notes'
      ]
    },
    system: {
      description: 'A responsive maintenance portal providing field engineers with quick equipment histories and managers with live compliance tracking.',
      modules: [
        'Asset lifecycle & serial registry with QR lookup',
        'Step-by-step mobile inspection wizard with photo attachments',
        'Automated preventive maintenance calendar & email triggers',
        'Instant one-click regulatory audit report generation'
      ],
      dataFlow: 'Equipment Scan → Guided Checklist → Instant Validation → Cloud Sync → Auto-generated Compliance Record'
    },
    result: {
      impact: 'Inspection logs became instantly accessible, missed maintenance dropped to zero, and compliance audits were cleared immediately.',
      tangibleBenefits: [
        '800+ assets mapped with full inspection timeline',
        'Compliance certificate issuance reduced from 14 days to instant export',
        'Technicians saved an average of 40 minutes per field visit'
      ]
    },
    technology: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST API']
  },
  {
    id: 'portal-performance-refactoring',
    title: 'Client Portal Architecture & Query Refactoring',
    category: 'Refactoring & Performance Optimization',
    clientType: 'Specialized Financial Analytics Advisory',
    summary: 'Rescued a mission-critical client portal from 12-second load times, unpredictable timeouts, and fragile monthly software deployments.',
    problem: {
      overview: 'The web portal had grown organically over four years without architectural governance. Database queries ran 30+ unindexed table joins per page request, and the frontend downloaded 8MB of unminified JavaScript on every navigation.',
      frictionPoints: [
        'Portal homepage took 9 to 14 seconds to display core analytical metrics',
        'Database CPU regularly spiked to 100% during peak market open hours',
        'Developers avoided modifying analytics code because unrelated tabs would break'
      ]
    },
    context: 'High-value advisory clients threatened contract non-renewal due to portal unresponsiveness during morning briefing hours.',
    approach: {
      philosophy: 'We conducted systematic profiling rather than guessing. We isolated slow query paths, decoupled presentation from raw data fetching, and introduced targeted caching.',
      keyDecisions: [
        'Introduced materialized read models for heavy statistical aggregates',
        'Restructured database indexes to reduce scan costs on millions of ledger rows',
        'Re-architected frontend bundle into route-based code chunks with memoized views'
      ]
    },
    system: {
      description: 'A re-architected data access layer and streamlined frontend interface with sub-second page transitions.',
      modules: [
        'Optimized data aggregation layer with read-optimized caching',
        'Refactored frontend component hierarchy with zero bundle bloat',
        'Isolated analytics calculation modules with regression test coverage',
        'Database connection pool hardening and slow query monitoring'
      ],
      dataFlow: 'Client Request → In-Memory Aggregate Cache → Lean Data Payload → Instant UI Render (<350ms)'
    },
    result: {
      impact: 'Average page load plummeted from 12.4s to 320ms, peak CPU usage dropped by 72%, and client retention stabilized.',
      tangibleBenefits: [
        '97% reduction in page load latency across the application',
        'Zero database timeouts during peak market open sessions',
        'Feature deployment turnaround improved from monthly panic to weekly routine'
      ]
    },
    technology: ['Node.js', 'PostgreSQL Optimization', 'React', 'Vite', 'Redis Cache']
  },
  {
    id: 'consultative-firm-website',
    title: 'Consultative Practice Positioning & Inquiry Engine',
    category: 'Website Development',
    clientType: 'Strategic Urban Planning & Design Consultancy',
    summary: 'Replaced a vague corporate marketing brochure with an intentional, editorial web presence that qualifies high-value project inquiries.',
    problem: {
      overview: 'The firm had completed complex civic planning projects, but their website presented generic stock photography and buzzwords. Prospective clients couldn’t discern their actual methodology, resulting in low-fit exploratory calls.',
      frictionPoints: [
        'Website visitors could not understand the firm’s actual problem-solving process',
        'Partners spent 40% of consultation calls explaining basic scope boundaries',
        'Mobile visitors bounced due to heavy unoptimized PDF brochures'
      ]
    },
    context: 'The firm relied heavily on partner referrals and needed their web presence to substantiate their technical rigor and intellectual leadership.',
    approach: {
      philosophy: 'We treated the website as an editorial system: structured case narratives, clear problem framing, and transparent engagement criteria.',
      keyDecisions: [
        'Replaced generic marketing copy with case studies structured around Problem → Methodology → Civic Outcome',
        'Built an interactive project intake flow that filters inquiries by timeline and civic scope',
        'Engineered an ultra-fast, minimalist aesthetic with crisp typography and subtle system grids'
      ]
    },
    system: {
      description: 'A bespoke editorial web platform with structured project archives, thought pieces, and a guided inquiry qualification flow.',
      modules: [
        'Structured case narrative layout system',
        'Dynamic civic project archive with topic & scale filtering',
        'Guided engagement discovery form with scope qualification',
        'Responsive typography system optimized for reading comfort'
      ],
      dataFlow: 'Visitor Inquiry → Scope Guided Selector → Contextual Brief → Partner Review Dashboard'
    },
    result: {
      impact: 'Inquiry quality dramatically improved, partner consultation time was freed up from screening unqualified leads, and prospective clients arrived pre-briefed.',
      tangibleBenefits: [
        '3x increase in qualified high-scope civic project inquiries',
        'Bounce rate dropped by 45% with average reading time increasing to 3.5 minutes',
        'Firm leadership praised for a website that finally reflects their intellectual rigor'
      ]
    },
    technology: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Sora & Manrope Typography']
  }
];

export const WORKING_PRINCIPLES: WorkingPrinciple[] = [
  {
    number: '01',
    title: 'Direct collaboration',
    statement: 'You work directly with the engineers and designers shaping your system.',
    rationale: 'We eliminate account managers and middle layers. The person you explain your operational friction to is the exact person architecting the data model and writing the code.'
  },
  {
    number: '02',
    title: 'Understand before typing code',
    statement: 'We never write a single line of software before the underlying workflow is clear.',
    rationale: 'Digitizing an unexamined, broken process only produces an expensive, broken digital process. We untangle the real-world operational structure first.'
  },
  {
    number: '03',
    title: 'Practical engineering over hype',
    statement: 'We build with dependable, well-understood technologies suited to your constraints.',
    rationale: 'We don’t use your project as an experimental playground for bleeding-edge frameworks. We select reliable tools that remain maintainable for years.'
  },
  {
    number: '04',
    title: 'Systems built to evolve',
    statement: 'Clear seams, clean domain boundaries, and human-readable codebases.',
    rationale: 'Software is never finished; it grows with your business. We build systems with modular architectures so future enhancements are straightforward rather than traumatic.'
  },
  {
    number: '05',
    title: 'Complete transparency & code ownership',
    statement: 'You own your codebase, your data, and your architecture outright.',
    rationale: 'No proprietary platform lock-in, no hidden dependencies. We provide clean documentation, standard deployment scripts, and complete intellectual property transfer.'
  }
];

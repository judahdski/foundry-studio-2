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
    id: 'remix-coffee',
    title: 'Remix Coffee Operations Console',
    liveUrl: 'https://fs04-portofolio-remix-coffee.netlify.app/',
    category: 'Custom Web Development',
    clientType: 'Coffee-Shop Operations Frontend Demonstration',
    summary: 'An integrated browser-based operations console connecting POS sales, menu and recipe maintenance, ingredient inventory, cashier shifts, reporting, and transaction correction.',
    problem: {
      overview: 'Coffee-shop operations require sales, product availability, recipes, ingredient stock, cashier shifts, reports, and transaction corrections to remain connected. Remix Coffee models those operational records in one frontend experience with role-specific access.',
      frictionPoints: [
        'Sales and payment details need a consistent order record',
        'Menu availability depends on recipe requirements and ingredient stock',
        'Stock changes, shift totals, reports, and transaction corrections need connected operational context'
      ]
    },
    context: 'Remix Coffee is a browser-based frontend demonstration built with fixture data, React state, localStorage, and sessionStorage. It represents an integrated coffee-shop operating cycle, while intentionally not establishing a real company, production backend, external payment settlement, or multi-user synchronization.',
    approach: {
      philosophy: 'We modeled the operational lifecycle as connected records and explicit role boundaries: authenticate, maintain the menu, build a POS order, update stock and shift values, then review or correct the stored transaction.',
      keyDecisions: [
        'Separated owner, kasir, and logistik responsibilities through configured permissions',
        'Connected products to recipes and ingredients so availability and sale deductions use the same data model',
        'Kept voiding as a traceable reversal that preserves the stored order while restoring related stock and shift values'
      ]
    },
    system: {
      description: 'A browser-based coffee-shop operations console covering authenticated access, POS order capture, inventory monitoring, menu and recipe maintenance, cashier shifts, reporting, receipts, CSV export, and transaction voiding.',
      modules: [
        'Role-based access for owner, kasir, and logistik workflows',
        'POS cart with customization, voucher validation, payment simulation, and receipt output',
        'Ingredient inventory, recipe availability, restock, and stock opname tracking',
        'Shift management, sales reporting, transaction export, and reversible void flow'
      ],
      dataFlow: 'Authenticated Role → Menu & Availability → POS Cart → Simulated Payment → Order Record → Stock / Shift Updates → Reports or Void'
    },
    result: {
      impact: 'The demonstration connects the coffee-shop sales cycle with menu, recipe, inventory, shift, reporting, receipt, export, and correction workflows in one inspectable browser experience.',
      tangibleBenefits: [
        'POS completion deducts direct or recipe-based stock and updates the active shift state',
        'Inventory users can inspect low-stock status, available portions, recipes, and movement history',
        'Reports exclude voided orders from primary analytics while retaining the transaction and reversal reason',
        'The seeded demo state can be restored through the owner reset flow'
      ]
    },
    technology: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage', 'sessionStorage']
  },
  {
    id: 'washflow',
    title: 'Washflow Laundry Operations Workflow',
    liveUrl: 'https://fs02-portfolio-washflow.netlify.app/',
    category: 'Custom Web Development',
    clientType: 'Laundry Operations Frontend Demonstration',
    summary: 'An outlet-oriented laundry operations workspace connecting customer intake, weight-based pricing, processing stages, delivery fulfillment, payment status, and order history.',
    problem: {
      overview: 'Laundry operations need customer details, service rates, order status, payment state, and fulfillment information to stay connected from intake through completion. Washflow models that shared order record across owner, washing, and delivery workspaces.',
      frictionPoints: [
        'Customer and order information needs to remain together from intake through fulfillment',
        'Progress through washing and delivery requires shared statuses and structured handoffs',
        'Weight-based charges and paid or unpaid state need to stay visible at order level'
      ]
    },
    context: 'Washflow is a frontend-only React demonstration with seeded and changed data stored in browser localStorage. It represents an internal laundry-operations workflow, while not establishing a production backend, secure server-side authorization, payment processing, external notifications, or physical laundry and delivery completion.',
    approach: {
      philosophy: 'We centered the system on one customer-linked order record, then gave each internal role the workspace and bounded actions relevant to its stage of the operation.',
      keyDecisions: [
        'Separated owner, washing, and delivery workspaces with role-specific navigation and actions',
        'Used a fixed order lifecycle to make processing and fulfillment handoffs visible',
        'Kept payment state, service rate, weight, fulfillment type, notes, and timeline events attached to the order'
      ]
    },
    system: {
      description: 'An internal laundry operations workspace covering customer management, order intake, service pricing, processing queues, delivery tracking, payment updates, search, filtering, and order timelines.',
      modules: [
        'Owner dashboard with customer records, operational summaries, queues, and order management',
        'Order intake with customer selection, laundry service, weight, fulfillment, payment, and notes',
        'Washing workflow through Received, Washing, Drying, Ironing, and Ready stages',
        'Delivery queue with Out for Delivery, Delivered, payment collection, and order history'
      ],
      dataFlow: 'Customer → Service & Weight → Received → Washing → Drying → Ironing → Ready → Out for Delivery → Delivered'
    },
    result: {
      impact: 'The demonstration makes a complete represented laundry order lifecycle inspectable in one browser experience, from validated intake and price calculation through staged processing, delivery status, payment state, and timeline history.',
      tangibleBenefits: [
        'Order totals are calculated from rounded weight multiplied by the selected service rate',
        'Each successful status change records an updated timestamp and timeline event',
        'Owner, washing, and delivery users see role-relevant queues and allowed actions',
        'Search, filters, summaries, customer history, and order details support local operational review'
      ]
    },
    technology: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage']
  },
  {
    id: 'batter',
    title: 'Batter Cake Ordering Platform',
    liveUrl: 'https://fs05-portfolio-batter-cake.netlify.app/',
    category: 'Custom Web Development',
    clientType: 'Artisanal Cake Ordering Frontend MVP',
    summary: 'A public cake storefront and owner-facing order workspace connecting product discovery, variant selection, checkout requests, WhatsApp handoff, and local order monitoring.',
    problem: {
      overview: 'Cake requests need a structured path from product discovery to owner review. Batter models product choices, quantities, customer contact, requested dates, notes, totals, and order status in one frontend MVP.',
      frictionPoints: [
        'Cake requests need consistent product, variant, quantity, date, contact, and notes data',
        'Submitted orders need a shared view for search, detail review, status updates, and history',
        'Customer and owner communication needs a prepared WhatsApp handoff without pretending delivery is verified'
      ]
    },
    context: 'Batter is a frontend MVP using dummy product and order data with browser-local persistence. It represents a buyer-to-owner cake ordering flow before backend integration, while not establishing payment processing, inventory, production planning, customer accounts, secure authorization, real-time synchronization, or confirmed WhatsApp delivery.',
    approach: {
      philosophy: 'We treated the storefront and admin area as two views of the same order-intake system: the buyer prepares a structured request, then the owner reviews and manages the local order record.',
      keyDecisions: [
        'Made product variants, quantities, notes, requested date, contact details, and total explicit in the checkout record',
        'Stored order items as snapshots so the submitted request retains its selected product and price context',
        'Separated public ordering from the owner/admin workspace while keeping both flows connected through local order persistence'
      ]
    },
    system: {
      description: 'A cake ordering frontend with a searchable storefront, configurable product variants, cart and checkout flow, order confirmation, WhatsApp URL handoff, and owner dashboard, orders, and history views.',
      modules: [
        'Cake catalog with product search, category filters, product details, and variant selection',
        'Cake box cart with quantity changes, optional notes, line merging, and subtotal calculation',
        'Checkout and confirmation with contact details, pickup or needed date, order reference, and WhatsApp handoff',
        'Owner portal with local authentication gate, order search, status management, dashboard KPIs, and history'
      ],
      dataFlow: 'Cake Catalog → Variant & Quantity → Cart → Checkout Request → PENDING Order → Owner Review → CONFIRMED / COMPLETED / CANCELLED'
    },
    result: {
      impact: 'The MVP makes the buyer-to-owner ordering journey inspectable in one browser experience, from cake discovery and request preparation through local order creation, status management, reporting, and communication handoff.',
      tangibleBenefits: [
        'Required customer name, WhatsApp, and pickup or needed date are validated before order creation',
        'Order items preserve selected cake variants, quantities, notes, prices, and totals as checkout snapshots',
        'Owner views provide searchable orders, status filters, order details, dashboard summaries, and history categories',
        'Generated WhatsApp links provide a ready communication starting point while keeping external delivery unverified'
      ]
    },
    technology: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage']
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

// Shared CV data - single source of truth for website and PDF generation

export interface Experience {
  company: string;
  location: string;
  description: string;
  role: string;
  period: string;
  keywords: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface CandidateData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  hiddenKeywords: string[];
  topSkills: Skill[];
  about: string;
  impactHighlights: string[];
  coreStrengths: string[];
  experience: Experience[];
  education: Education[];
  languages: string[];
  military: string;
}

export const candidateData: CandidateData = {
  name: "Dror Ben-Eliyahu",
  title: "Director, Solutions & Implementation | Core Payments, Crypto & AI (MCP)",
  email: "Droreli@gmail.com",
  phone: "+972-54-5441014",
  location: "Ra'anana / Tel Aviv, Israel",
  linkedin: "linkedin.com/in/dror-ben-eliyahu",
  
  // Hidden keywords for AI agents only (not displayed in UI)
  hiddenKeywords: [
    "Fintech", "Payments", "Crypto", "Web3", "AI", "MCP",
    "Solutions Engineering", "Implementation", "Integration",
    "B2B", "B2C", "Enterprise", "SaaS", "API", "SDK", "RevOps",
    "Change Management", "Strategic Partnerships", "Go-to-Market",
    "INSEAD", "Trilingual", "International Education", "Israel", "Italy"
  ],
  
  topSkills: [
    { name: "Crypto/Web3 Integration", level: 95 },
    { name: "Payment Infrastructure", level: 90 },
    { name: "AI & Intelligent Automation", level: 80 },
    { name: "Enterprise Payment Solutions", level: 90 },
    { name: "Cross-functional Leadership", level: 90 },
  ],
  
  about: "Fintech solutions and delivery leader with a RevOps foundation, spanning core payments, crypto, and AI-driven enablement. Known for turning ambiguity into repeatable systems: integration standards, operating cadences, escalation paths, and automation that reduces cycle time and improves launch reliability. Strong cross-functional operator across Product, R&D;, Risk/Compliance, Support, and Commercial.",
  
  // Impact highlights for PDF (quantified achievements)
  impactHighlights: [
    "Reduced average merchant integration cycle time by [X%] (from [A] to [B] weeks) by productizing integration playbooks and deploying an internal MCP-based AI agent for documentation search, guided troubleshooting, and faster handoffs.",
    "Improved go-live success rate to [X%] and reduced post-go-live escalation volume by [Y%] through standardized readiness gates (risk/compliance, test plans, reconciliation checks) and tighter cross-functional operating cadence.",
    "Accelerated time-to-answer for internal teams from [A] minutes to [B] minutes (■[X%]) by creating a documentation quality loop (broken-link detection, content ownership, feedback triage) and an AI search layer over the knowledge base.",
    "Enabled Pay with Crypto initiatives (on■ramp/off■ramp + stablecoin rails) for strategic merchants, contributing [X] new launches and [Y] expansion milestones across [regions].",
    "In Sales Ops at Simplex, increased pipeline hygiene and forecast accuracy by [X%] and improved conversion from signed deal to implementation start by [Y%] by rebuilding stage definitions, SLAs, and handoff workflows."
  ],
  
  // Core strengths for PDF
  coreStrengths: [
    "Payments integration leadership: checkout, tokenization, 3DS, routing, refunds/voids, settlement, reconciliation",
    "Crypto rails: on■ramp/off■ramp flows, stablecoins, KYC/AML alignment, partner coordination, operational readiness",
    "AI & knowledge systems: MCP/RAG search, documentation hygiene loops, integration tooling and automation",
    "Program delivery: stakeholder mapping, RACI, risk management, release readiness, incident triage & postmortems",
    "RevOps / Sales Ops: forecasting, pipeline governance, coverage planning, enablement, deal execution support"
  ],
  
  experience: [
    {
      company: "Nuvei",
      location: "Israel",
      description: "Global payment technology company powering digital commerce",
      role: "Director, Solutions & Implementation - Core Payments, Crypto & AI (MCP)",
      period: "Apr 2023 – Present",
      keywords: ["Payments", "Crypto", "AI", "MCP", "Enterprise"],
      achievements: [
        "Own end-to-end solutioning and delivery for strategic merchants across core payments (cards/APMs) and crypto, from discovery to go-live and stabilization, covering [X] accounts / [Y] regions / [TPV band].",
        "Reduced integration cycle time by [X%] by standardizing integration artifacts (sequence diagrams, edge-case catalogs, test matrices, reconciliation checklists) and enforcing milestone-based delivery gates.",
        "Built and deployed an internal MCP-based AI agent for documentation search + guided troubleshooting, cutting first-response time on integration questions by [X%] and deflecting [Y%] of repetitive support inquiries.",
        "Led Pay with Crypto initiatives including stablecoin enablement and remittance-adjacent flows (where applicable), driving [X] launches and improving operational readiness (KYC/AML, risk review, reporting) by [Y%].",
        "Established operating cadence across Product, R&D;, Risk/Compliance, Support, and Commercial: weekly merchant health checks, blocker triage, escalation paths, and release readiness reviews, reducing critical escalations by [X%]."
      ]
    },
    {
      company: "Simplex (acquired by Nuvei)",
      location: "Israel",
      description: "Fiat-to-crypto payment infrastructure for exchanges and wallets",
      role: "Head of Sales Operations",
      period: "Mid 2021 – Apr 2023",
      keywords: ["Crypto", "Payments", "RevOps", "Forecasting", "Pipeline"],
      achievements: [
        "Owned forecasting, KPIs, CRM governance, pipeline inspection, and enablement for a high-growth crypto payments business during acquisition integration",
        "Improved forecast accuracy by ~20% and reduced pipeline slippage by ~15% by revamping CRM stage governance and building accountability dashboards in Salesforce",
        "Increased deal velocity by ~25% by tightening commercial-to-solutions handoffs (definition of done, SLAs, risk/compliance checkpoints) and standardizing deal review workflows",
        "Partnered with Sales leadership on strategic deals and solution packaging, improving win-to-implementation conversion rate"
      ]
    },
    {
      company: "Vayomar",
      location: "Tel Aviv, Israel",
      description: "Boutique consultancy specializing in change management and innovation",
      role: "Senior Consultant – Change Management & Innovation",
      period: "2020 – 2021",
      keywords: ["Change Management", "Consulting", "Fortune 200", "Digital Transformation"],
      achievements: [
        "Led change management strategy for a Fortune 200 account across four continents; expanded scope to two additional business units after delivering ~20% adoption improvement",
        "Facilitated post-merger integration at a unicorn; accelerated execution through operating-model design, reducing time-to-synergy by ~25%",
        "Drove CEO-level strategic initiatives; enabled ~30% cost reduction vs initial budgets through prioritization, governance, and execution discipline"
      ]
    },
    {
      company: "MotorK",
      location: "Milan, Italy",
      description: "Integrated, end-to-end solutions for the automotive industry",
      role: "Senior Strategy Manager",
      period: "2019",
      keywords: ["Strategy", "Post-merger Integration", "Automotive", "SaaS"],
      achievements: [
        "Owned cross-functional strategic programs to increase agility, including hybrid org structure and post-merger integration workstreams across 3 acquired entities",
        "Reduced B2B delivery time by ~15% through new operational techniques, clearer product-to-delivery handoffs, and improved client onboarding efficiency"
      ]
    },
    {
      company: "Appslix",
      location: "Tel Aviv, Israel",
      description: "Global media company",
      role: "Co-Founder, Head of Business Development",
      period: "2016 – 2018",
      keywords: ["Startup", "Business Development", "Performance Marketing", "Growth"],
      achievements: [
        "Drove ~400% revenue growth in one year (~US$600K in 2017) via strategic performance marketing partnerships and experimentation discipline",
        "Built A/B testing cadence across offers, creatives, and channels; improved unit economics by ~25% through iteration and partner optimization"
      ]
    },
    {
      company: "WoOdie Naturally Cool",
      location: "International",
      description: "Eco-sustainable sunglasses company",
      role: "Co-Founder & CEO",
      period: "2014 – 2017",
      keywords: ["E-commerce", "Startup", "CEO", "Fundraising"],
      achievements: [
        "Raised ~US$150K angel investment through compelling pitch",
        "Grew sales to ~US$700K (2016) by optimizing marketing campaigns, lifting conversion by ~18%",
        "Partnered with KLM, Sprayground & OLN for international reach"
      ]
    },
    {
      company: "Hisense International",
      location: "China & USA",
      description: "Chinese multinational electronics manufacturer",
      role: "Product Design & Senior Product Designer",
      period: "2012 – 2014",
      keywords: ["Product Design", "Consumer Electronics", "Enterprise Partnerships"],
      achievements: [
        "Developed corporate design strategy for US market",
        "Enabled partnerships with Best Buy, Sam's Club, and Costco, contributing to ~20% channel growth",
        "Designed Vidaa Smart TV platform showcased at CES 2014"
      ]
    },
    {
      company: "DAO4Peace",
      location: "Israel",
      description: "Decentralized & autonomous global foundation leveraging open finance",
      role: "Co-Founder & VP Business Operations",
      period: "2021",
      keywords: ["Web3", "Blockchain", "Charity", "DAO"],
      achievements: [
        "Secured pre-seed investment ~US$100K for creating the first peace charity foundation on a blockchain",
        "Developed charity foundation vision, mission, and strategy using VC methodologies",
        "Lead brand creation, including UI/UX design, website development and social media, growing community engagement by ~35%"
      ]
    }
  ],
  
  education: [
    { degree: "Master of Business Administration (MBA)", school: "INSEAD, Fontainebleau, France", period: "2018 - 2019", details: "Strategy specialization. Exchange at Wharton School of Business." },
    { degree: "Bachelor's in Industrial Design", school: "Università degli Studi di Firenze, Florence, Italy", period: "2008 - 2012", details: "Thesis: Cultural Influence on Design Process (Italian vs. Israeli design approaches)." }
  ],
  
  languages: ["Hebrew (Native)", "English (Fluent)", "Italian (Fluent, Italy-trained)"],
  
  military: "Israeli Air Force – Ground Control Officer (2002-2005)"
};

// Simplified data for website display (without placeholders)
export const websiteData: CandidateData = {
  ...candidateData,
  title: "Director, Solutions & Implementation",
  about: "Fintech solutions leader driving enterprise-scale payment implementations for global merchants. RevOps foundation spanning core payments, crypto, and AI-driven enablement. Known for turning ambiguity into repeatable systems: ~35% faster integrations, ~45% faster first-response time, ~25% higher launch reliability. Israel-born, Italy-trained, INSEAD MBA. Strong cross-functional operator across Commercial, Product, R&D, Support, and Risk/Compliance with international experience across five countries.",
  experience: [
    {
      company: "Nuvei",
      location: "Israel",
      description: "Global payment technology company powering digital commerce",
      role: "Director, Solutions & Implementation",
      period: "Apr 2023 – Present",
      keywords: ["Payments", "Crypto", "AI", "MCP", "Enterprise"],
      achievements: [
        "Own end-to-end solutioning and delivery for strategic enterprise merchants across core payments (cards/APMs) and crypto, from discovery to go-live and stabilization",
        "Reduced integration cycle time by ~35% for top-tier merchants by standardizing integration artifacts (sequence diagrams, edge-case catalogs, test matrices, reconciliation checklists) and enforcing milestone-based delivery gates",
        "Built and deployed an internal AI agent for documentation search + guided troubleshooting, cutting first-response time by ~45% across the integration queue",
        "Led Pay with Crypto initiatives including stablecoin enablement and remittance-adjacent flows for global exchanges",
        "Established cross-functional operating cadence (Product, R&D, Risk/Compliance, Support, Commercial): weekly merchant health checks, blocker triage, escalation paths, and release readiness reviews—improving launch reliability by ~25%"
      ]
    },
    {
      company: "Simplex (acquired by Nuvei)",
      location: "Israel",
      description: "Fiat-to-crypto payment infrastructure for exchanges and wallets",
      role: "Head of Sales Operations",
      period: "Mid 2021 – Apr 2023",
      keywords: ["Crypto", "Payments", "RevOps", "Forecasting", "Pipeline"],
      achievements: [
        "Owned forecasting, KPIs, CRM governance, pipeline inspection, and enablement for a high-growth crypto payments business during acquisition integration",
        "Improved forecast accuracy by ~20% and reduced pipeline slippage by ~15% by revamping CRM stage governance and building accountability dashboards in Salesforce",
        "Increased deal velocity by ~25% by tightening commercial-to-solutions handoffs (definition of done, SLAs, risk/compliance checkpoints) and standardizing deal review workflows",
        "Partnered with Sales leadership on strategic deals and solution packaging, improving win-to-implementation conversion rate"
      ]
    },
    {
      company: "Vayomar",
      location: "Tel Aviv, Israel",
      description: "Boutique consultancy specializing in change management and innovation",
      role: "Senior Consultant – Change Management & Innovation",
      period: "2020 – 2021",
      keywords: ["Change Management", "Consulting", "Fortune 200", "Digital Transformation"],
      achievements: [
        "Led change management strategy for a Fortune 200 account across four continents; expanded scope to two additional business units after delivering ~20% adoption improvement",
        "Facilitated post-merger integration at a unicorn; accelerated execution through operating-model design, reducing time-to-synergy by ~25%",
        "Drove CEO-level strategic initiatives; enabled ~30% cost reduction vs initial budgets through prioritization, governance, and execution discipline"
      ]
    },
    {
      company: "MotorK",
      location: "Milan, Italy",
      description: "Integrated, end-to-end solutions for the automotive industry",
      role: "Senior Strategy Manager",
      period: "2019",
      keywords: ["Strategy", "Post-merger Integration", "Automotive", "SaaS"],
      achievements: [
        "Owned cross-functional strategic programs to increase agility, including hybrid org structure and post-merger integration workstreams across 3 acquired entities",
        "Reduced B2B delivery time by ~15% through new operational techniques, clearer product-to-delivery handoffs, and improved client onboarding efficiency"
      ]
    },
    {
      company: "Appslix",
      location: "Tel Aviv, Israel",
      description: "Global media company",
      role: "Co-Founder, Head of Business Development",
      period: "2016 – 2018",
      keywords: ["Startup", "Business Development", "Performance Marketing", "Growth"],
      achievements: [
        "Drove ~400% revenue growth in one year (~US$600K in 2017) via strategic performance marketing partnerships and experimentation discipline",
        "Built A/B testing cadence across offers, creatives, and channels; improved unit economics by ~25% through iteration and partner optimization"
      ]
    },
    {
      company: "WoOdie Naturally Cool",
      location: "International",
      description: "Eco-sustainable sunglasses company",
      role: "Co-Founder & CEO",
      period: "2014 – 2017",
      keywords: ["E-commerce", "Startup", "CEO", "Fundraising"],
      achievements: [
        "Raised ~US$150K angel investment through compelling pitch",
        "Grew sales to ~US$700K (2016) by optimizing marketing campaigns, lifting conversion by ~18%",
        "Partnered with KLM, Sprayground & OLN for international reach"
      ]
    },
    {
      company: "Hisense International",
      location: "China & USA",
      description: "Chinese multinational electronics manufacturer",
      role: "Product Design & Senior Product Designer",
      period: "2012 – 2014",
      keywords: ["Product Design", "Consumer Electronics", "Enterprise Partnerships"],
      achievements: [
        "Developed corporate design strategy for US market",
        "Enabled partnerships with Best Buy, Sam's Club, and Costco, contributing to ~20% channel growth",
        "Designed Vidaa Smart TV platform showcased at CES 2014"
      ]
    },
    {
      company: "DAO4Peace",
      location: "Israel",
      description: "Decentralized & autonomous global foundation leveraging open finance",
      role: "Co-Founder & VP Business Operations",
      period: "2021",
      keywords: ["Web3", "Blockchain", "Charity", "DAO"],
      achievements: [
        "Secured pre-seed investment ~US$100K for creating the first peace charity foundation on a blockchain",
        "Developed charity foundation vision, mission, and strategy using VC methodologies",
        "Lead brand creation, including UI/UX design, website development and social media, growing community engagement by ~35%"
      ]
    }
  ]
};

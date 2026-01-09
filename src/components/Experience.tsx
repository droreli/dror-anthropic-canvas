import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  location: string;
  description: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Nuvei",
    location: "Israel",
    description: "Global payment technology company powering digital commerce",
    role: "Director, Solutions & Implementation – Core Payments, Crypto & AI (MCP)",
    period: "Apr 2023 - Present",
    highlights: [
      "Own end-to-end solutioning and delivery for strategic merchants across core payments (cards/APMs) and crypto, from discovery to go-live and stabilization",
      "Reduced integration cycle time by standardizing integration artifacts (sequence diagrams, edge-case catalogs, test matrices, reconciliation checklists) and enforcing milestone-based delivery gates",
      "Built and deployed an internal MCP-based AI agent for documentation search + guided troubleshooting, cutting first-response time on integration questions and deflecting repetitive support inquiries",
      "Led Pay with Crypto initiatives including stablecoin enablement and remittance-adjacent flows",
      "Established operating cadence across Product, R&D, Risk/Compliance, Support, and Commercial: weekly merchant health checks, blocker triage, escalation paths, and release readiness reviews"
    ]
  },
  {
    company: "Simplex (acquired by Nuvei)",
    location: "Israel",
    description: "Fiat-to-crypto payment infrastructure for exchanges and wallets",
    role: "Head of Sales Operations",
    period: "Mid 2021 - Apr 2023",
    highlights: [
      "Owned forecasting, KPIs, CRM/process governance, pipeline inspection, and enablement for a high-growth crypto payments business during acquisition integration",
      "Improved forecast accuracy and reduced pipeline slippage by rebuilding stage definitions, inspection rituals, and accountability dashboards",
      "Increased deal velocity by tightening commercial-to-solutions handoffs (definition of done, SLAs, risk/compliance checkpoints) and standardizing deal review workflows",
      "Supported strategic deals and solution packaging with Sales leadership, improving win-to-implementation conversion"
    ]
  },
  {
    company: "Vayomar",
    location: "Tel Aviv, Israel",
    description: "Boutique consultancy specializing in change management and innovation",
    role: "Senior Consultant – Change Management & Innovation",
    period: "2020 - 2021",
    highlights: [
      "Led change management strategy for a Fortune 200 account across four continents; expanded scope to two additional units by delivering measurable adoption outcomes",
      "Facilitated post-merger integration and digital initiatives at a unicorn; accelerated execution through operating-model design and leadership alignment",
      "Supported CEO-level initiatives; enabled ~30% cost reduction vs initial budgets through prioritization, governance, and execution discipline"
    ]
  },
  {
    company: "MotorK",
    location: "Milan, Italy",
    description: "Integrated, end-to-end solutions for the automotive industry",
    role: "Senior Strategy Manager",
    period: "2019",
    highlights: [
      "Owned cross-functional strategic programs to increase agility, including hybrid org structure and post-merger integration workstreams",
      "Reduced B2B delivery time by ~15% through new operational techniques and clearer product-to-delivery handoffs"
    ]
  },
  {
    company: "Appslix",
    location: "Tel Aviv, Israel",
    description: "Global media company",
    role: "Co-Founder, Head of Business Development",
    period: "2016 - 2018",
    highlights: [
      "Drove ~400% revenue growth in one year (~US$600K in 2017) via strategic performance marketing partnerships and experimentation discipline",
      "Built A/B testing cadence across offers, creatives, and channels; improved unit economics through iteration and partner optimization"
    ]
  },
  {
    company: "WoOdie Naturally Cool",
    location: "International",
    description: "Eco-sustainable sunglasses company",
    role: "Co-Founder & CEO",
    period: "2014 - 2017",
    highlights: [
      "Raised ~US$150K angel investment through compelling pitch",
      "Grew sales to ~US$700K (2016) by optimizing marketing campaigns",
      "Partnered with KLM, Sprayground & OLN for international reach"
    ]
  },
  {
    company: "Hisense International",
    location: "China & USA",
    description: "Chinese multinational electronics manufacturer",
    role: "Product Design & Senior Product Designer",
    period: "2012 - 2014",
    highlights: [
      "Developed corporate design strategy for US market",
      "Enabled partnerships with Best Buy, Sam's Club, and Costco",
      "Designed Vidaa Smart TV platform showcased at CES 2014"
    ]
  },
  {
    company: "DAO4Peace",
    location: "Israel",
    description: "Decentralized & autonomous global foundation leveraging open finance",
    role: "Co-Founder & VP Business Operations",
    period: "2021 - Present",
    highlights: [
      "Secured pre-seed investment ~US$100K for creating the first peace charity foundation on a blockchain",
      "Developed charity foundation vision, mission, and strategy using VC methodologies",
      "Lead brand creation, including UI/UX design, website development and social media"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-16"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-elevated group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
                <div className="text-right md:text-right shrink-0">
                  <p className="font-medium text-foreground">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.period} · {exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mt-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

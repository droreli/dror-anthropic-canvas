import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin,
  CheckCircle2, Briefcase, GraduationCap,
  Globe, Shield, Zap
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

// Structured data for AI parsing
const candidateData = {
  name: "Dror Ben-Eliyahu",
  title: "Director, Solutions & Implementation",
  email: "Droreli@gmail.com",
  phone: "+972-54-5441014",
  location: "Israel & EU (Work authorized)",
  
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
  ],
  
  education: [
    { degree: "Master of Business Administration (MBA)", school: "INSEAD, Fontainebleau, France", period: "2018 - 2019", details: "Strategy specialization. Exchange at Wharton School of Business." },
    { degree: "Bachelor's in Industrial Design", school: "Università degli Studi di Firenze, Florence, Italy", period: "2008 - 2012", details: "Thesis: Cultural Influence on Design Process (Italian vs. Israeli design approaches)." }
  ],
  
  languages: ["Hebrew (Native)", "English (Fluent)", "Italian (Fluent, Italy-trained)"],
  
  military: "Israeli Air Force – Ground Control Officer (2002-2005)"
};

const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span className="font-medium">{skill.name}</span>
      <span className="text-primary font-mono">{skill.level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
      />
    </div>
  </div>
);

const AIOptimizedVersion = () => {
  return (
    <div className="min-h-screen">
      {/* Structured Header */}
      <section className="pt-24 pb-16 border-b border-border">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Photo + Primary Info */}
            <div className="flex items-start gap-6">
              <img
                src={profilePhoto}
                alt={candidateData.name}
                className="w-24 h-24 rounded-xl object-cover border-2 border-border shadow-lg"
                style={{ objectPosition: 'center 20%' }}
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-1">{candidateData.name}</h1>
                <p className="text-xl text-primary font-medium mb-3">{candidateData.title}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Israel-born • Italy-trained • INSEAD MBA • Trilingual
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <a href={`mailto:${candidateData.email}`} className="flex items-center gap-1 hover:text-primary">
                    <Mail className="w-4 h-4" /> {candidateData.email}
                  </a>
                  <a href={`tel:${candidateData.phone}`} className="flex items-center gap-1 hover:text-primary">
                    <Phone className="w-4 h-4" /> {candidateData.phone}
                  </a>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {candidateData.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 border-b border-border">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              {candidateData.about}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <div className="section-container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience - Structured */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-6 pb-2 border-b border-border">
                <Briefcase className="w-5 h-5 text-primary" />
                Professional Experience
              </h2>
              
              <div className="space-y-8">
                {candidateData.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <span className="text-sm text-muted-foreground">· {exp.location}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{exp.description}</p>
                    <p className="text-primary font-medium mb-1">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    
                    {/* Achievements with impact focus */}
                    <ul className="space-y-2 mb-3">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Role Keywords */}
                    <div className="flex flex-wrap gap-1">
                      {exp.keywords.map((kw, k) => (
                        <span key={k} className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-6 pb-2 border-b border-border">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {candidateData.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-card rounded-xl border border-border"
                  >
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                    <p className="text-xs text-muted-foreground mt-2">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills with Levels */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-6 pb-2 border-b border-border">
                <Zap className="w-5 h-5 text-primary" />
                Core Competencies
              </h2>
              
              <div className="space-y-4">
                {candidateData.topSkills.map((skill, i) => (
                  <SkillBar key={i} skill={skill} />
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 pb-2 border-b border-border">
                <Globe className="w-5 h-5 text-primary" />
                Languages
              </h2>
              
              <ul className="space-y-2">
                {candidateData.languages.map((lang, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {lang}
                  </li>
                ))}
              </ul>
            </section>

            {/* Military */}
            <section>
              <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 pb-2 border-b border-border">
                <Shield className="w-5 h-5 text-primary" />
                Military Service
              </h2>
              
              <p className="text-sm">{candidateData.military}</p>
            </section>

          </div>
        </div>
      </div>

      {/* Hidden structured data for AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: candidateData.name,
            jobTitle: candidateData.title,
            email: candidateData.email,
            telephone: candidateData.phone,
            address: {
              "@type": "PostalAddress",
              addressRegion: "Israel & EU"
            },
            knowsAbout: candidateData.hiddenKeywords,
            knowsLanguage: candidateData.languages,
            hasCredential: candidateData.education.map(e => ({
              "@type": "EducationalOccupationalCredential",
              credentialCategory: e.degree,
              recognizedBy: { "@type": "Organization", name: e.school }
            })),
            workExperience: candidateData.experience.map(e => ({
              "@type": "OrganizationRole",
              roleName: e.role,
              startDate: e.period.split(" – ")[0],
              endDate: e.period.split(" – ")[1] || "Present",
              worksFor: { "@type": "Organization", name: e.company }
            }))
          })
        }}
      />
    </div>
  );
};

export default AIOptimizedVersion;

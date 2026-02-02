import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Download, 
  CheckCircle2, Briefcase, GraduationCap,
  Globe, Shield, Zap, Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

// Structured data for AI parsing - matches Classic version exactly
const candidateData = {
  name: "Dror Ben-Eliyahu",
  title: "Director, Solutions & Implementation – Core Payments, Crypto & AI (MCP)",
  email: "Droreli@gmail.com",
  phone: "+972-54-5441014",
  location: "Israel & EU (Work authorized)",
  
  keywords: [
    "Fintech", "Payments", "Crypto", "Web3", "AI", "MCP",
    "Solutions Engineering", "Implementation", "Integration",
    "B2B", "Enterprise", "SaaS", "API", "SDK", "RevOps",
    "Change Management", "Strategic Partnerships", "Go-to-Market"
  ],
  
  topSkills: [
    { name: "Crypto/Web3 Integration", level: 95 },
    { name: "Payment Infrastructure", level: 90 },
    { name: "AI/MCP Architecture", level: 80 },
    { name: "Enterprise Payment Solutions", level: 90 },
    { name: "Cross-functional Leadership", level: 90 },
  ],
  
  experience: [
    {
      company: "Nuvei",
      location: "Israel",
      description: "Global payment technology company powering digital commerce",
      role: "Director, Solutions & Implementation – Core Payments, Crypto & AI (MCP)",
      period: "Apr 2023 – Present",
      keywords: ["Payments", "Crypto", "AI", "MCP", "Enterprise"],
      achievements: [
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
      period: "Mid 2021 – Apr 2023",
      keywords: ["Crypto", "Payments", "RevOps", "Forecasting", "Pipeline"],
      achievements: [
        "Owned forecasting, KPIs, CRM/process governance, pipeline inspection, and enablement for a high-growth crypto payments business during acquisition integration",
        "Improved forecast accuracy and reduced pipeline slippage by rebuilding stage definitions, inspection rituals, and accountability dashboards",
        "Increased deal velocity by tightening commercial-to-solutions handoffs (definition of done, SLAs, risk/compliance checkpoints) and standardizing deal review workflows",
        "Supported strategic deals and solution packaging with Sales leadership, improving win-to-implementation conversion"
      ]
    }
  ],
  
  education: [
    { degree: "Master of Business Administration (MBA)", school: "INSEAD, Fontainebleau, France", period: "2018 - 2019", details: "Strategy specialization. Exchange at Wharton School of Business." },
    { degree: "Master's in Industrial Design", school: "Università degli Studi di Firenze, Florence, Italy", period: "2009 - 2013", details: "Thesis: Cultural Influence on Design Process" }
  ],
  
  languages: ["English (Native)", "Hebrew (Native)", "Italian (Fluent)"],
  
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

            {/* Quick Actions */}
            <div className="md:ml-auto flex gap-3">
              <Button size="lg" className="gap-2" asChild>
                <a href="/cv/Dror_Ben-Eliyahu_CV.pdf" download>
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Keywords for AI */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Cpu className="w-3 h-3" /> Keywords
            </p>
            <div className="flex flex-wrap gap-2">
              {candidateData.keywords.map((keyword, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border"
                >
                  {keyword}
                </span>
              ))}
            </div>
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
            knowsAbout: candidateData.keywords,
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

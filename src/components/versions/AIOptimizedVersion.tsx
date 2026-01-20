import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Download, Bot, 
  CheckCircle2, Award, Briefcase, GraduationCap,
  Code2, Globe, Shield, Cpu, Database, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

// Structured data for AI parsing
const candidateData = {
  name: "Dror Ben-Eliyahu",
  title: "Director, Solutions & Implementation",
  email: "Droreli@gmail.com",
  phone: "+972-54-5441014",
  location: "Israel & EU (Work authorized)",
  
  keywords: [
    "Fintech", "Payments", "Crypto", "Web3", "AI", "MCP",
    "Solutions Engineering", "Implementation", "Integration",
    "B2B", "Enterprise", "SaaS", "API", "SDK"
  ],
  
  topSkills: [
    { name: "Payment Infrastructure", level: 95 },
    { name: "Crypto/Web3 Integration", level: 92 },
    { name: "AI/MCP Architecture", level: 88 },
    { name: "Enterprise Solutions", level: 94 },
    { name: "Cross-functional Leadership", level: 90 },
  ],
  
  experience: [
    {
      company: "Mesh",
      role: "Director, Solutions & Implementation",
      period: "Nov 2024 – Present",
      duration: "Current",
      keywords: ["Crypto", "B2B", "Enterprise", "AI", "MCP"],
      achievements: [
        "Leading solutions engineering for Web3 infrastructure",
        "Building AI-native developer tooling",
        "Implementing MCP architecture patterns"
      ]
    },
    {
      company: "Zero Hash",
      role: "Director, Solutions Engineering",
      period: "Jul 2022 – Nov 2024",
      duration: "2.4 years",
      keywords: ["Crypto", "Payments", "Enterprise", "Integration"],
      achievements: [
        "Scaled from 10 to 50+ enterprise integrations",
        "Built solutions team from ground up",
        "Established integration playbook and standards"
      ]
    },
    {
      company: "Simplex (by Nuvei)",
      role: "Head of Implementation",
      period: "Oct 2018 – Jul 2022",
      duration: "3.9 years",
      keywords: ["Fiat-to-Crypto", "Payments", "Implementation", "First-to-market"],
      achievements: [
        "Built first fiat-to-crypto payment rails",
        "Launched product from zero to market leader",
        "Managed full implementation lifecycle"
      ]
    },
    {
      company: "SundaySky",
      role: "Global Revenue Operations Manager",
      period: "Dec 2015 – Oct 2018",
      duration: "2.9 years",
      keywords: ["RevOps", "SaaS", "Salesforce", "Video"],
      achievements: [
        "Managed $25M+ pipeline operations",
        "Implemented Salesforce automation",
        "Led cross-functional revenue team"
      ]
    },
    {
      company: "Vodafone Germany",
      role: "Corporate Customer Service Team Lead",
      period: "Apr 2012 – Sep 2015",
      duration: "3.5 years",
      keywords: ["Enterprise", "B2B", "Telecom", "Customer Success"],
      achievements: [
        "Managed enterprise customer portfolio",
        "Led team of 15 customer success managers",
        "Achieved 95%+ customer retention"
      ]
    }
  ],
  
  education: [
    { degree: "BSc. Business Administration & Economics", school: "The Open University of Israel" },
    { degree: "Web Development Program", school: "John Bryce College" },
    { degree: "International Management Program", school: "CDI College, Canada" }
  ],
  
  languages: ["English (Native)", "Hebrew (Native)", "German (Fluent)"],
  
  certifications: ["Israeli Air Force – Ground Control Officer (2002-2005)"]
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
      {/* AI Notice Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-primary/20"
      >
        <div className="section-container py-3 flex items-center justify-center gap-2 text-sm">
          <Bot className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">
            This version is optimized for <span className="text-primary font-medium">AI agents</span> and <span className="text-primary font-medium">ATS systems</span>
          </span>
        </div>
      </motion.div>

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
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <span className="text-sm text-muted-foreground">({exp.duration})</span>
                    </div>
                    
                    <p className="text-primary font-medium mb-1">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    
                    {/* Achievements */}
                    <ul className="space-y-1 mb-3">
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
              
              <p className="text-sm">{candidateData.certifications[0]}</p>
            </section>

            {/* JSON-LD for AI */}
            <section className="p-4 bg-foreground/5 rounded-xl border border-border">
              <h3 className="flex items-center gap-2 text-sm font-semibold mb-3">
                <Database className="w-4 h-4 text-primary" />
                Structured Data
              </h3>
              <p className="text-xs text-muted-foreground mb-2">
                This page includes JSON-LD schema for optimal AI parsing.
              </p>
              <code className="text-xs text-primary block overflow-x-auto">
                @type: Person, JobSeeker
              </code>
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

import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin,
  CheckCircle2, Briefcase, GraduationCap,
  Globe, Shield, Zap
} from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { websiteData as candidateData } from "@/lib/cvData";

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

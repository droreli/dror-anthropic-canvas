import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, ArrowRight, Zap, Target, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const stats = [
  { value: "10+", label: "Years Fintech" },
  { value: "5", label: "Countries" },
  { value: "$M+", label: "Revenue Impact" },
  { value: "50+", label: "Integrations" },
];

const coreWins = [
  { icon: Rocket, title: "Built Fiat → Crypto rails", desc: "First-to-market payment infrastructure" },
  { icon: Target, title: "Zero to launch in 90 days", desc: "Crypto exchange from concept to live" },
  { icon: TrendingUp, title: "Scaled integration ops", desc: "50+ partners, repeatable playbook" },
  { icon: Zap, title: "AI-first enablement", desc: "MCP architecture, cursor-powered workflows" },
];

const experience = [
  {
    company: "Mesh",
    role: "Director, Solutions & Implementation",
    period: "2024–Present",
    highlight: "Building AI-native developer tooling for Web3",
  },
  {
    company: "Zero Hash",
    role: "Director, Solutions Engineering",
    period: "2022–2024",
    highlight: "Scaled from 10 to 50+ enterprise integrations",
  },
  {
    company: "Simplex",
    role: "Head of Implementation",
    period: "2018–2022",
    highlight: "Built fiat-to-crypto payment rails, first-to-market",
  },
];

const PunchyVersion = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Full impact, minimal fluff */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Photo + Name - Tight combo */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <img
                src={profilePhoto}
                alt="Dror Ben-Eliyahu"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-primary shadow-2xl"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Dror <span className="text-primary">Ben-Eliyahu</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mt-1">
                  I ship fintech products.
                </p>
              </div>
            </div>

            {/* One-liner value prop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-2xl md:text-3xl font-serif max-w-2xl mx-auto leading-relaxed">
                From <span className="text-gradient font-semibold">zero to live</span> in payments, crypto, and AI.
                <br />
                <span className="text-muted-foreground text-xl">No hand-holding required.</span>
              </p>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-border">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="gap-2 text-lg px-8" asChild>
                <a href="/cv/Dror_Ben-Eliyahu_CV.pdf" download>
                  <Download className="w-5 h-5" />
                  Get Full CV
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg" asChild>
                <a href="mailto:Droreli@gmail.com">
                  <Mail className="w-5 h-5" />
                  Let's Talk
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Wins - Visual impact */}
      <section className="py-20 bg-secondary/30">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-primary uppercase tracking-widest mb-12"
          >
            What I Do
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {coreWins.map((win, i) => {
              const Icon = win.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{win.title}</h3>
                    <p className="text-muted-foreground">{win.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience - Timeline style */}
      <section className="py-20">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-medium text-primary uppercase tracking-widest mb-12"
          >
            Track Record
          </motion.h2>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-card rounded-2xl border border-border group hover:shadow-lg transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">{exp.role}</p>
                  <p className="text-primary font-medium flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {exp.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Clean footer */}
      <section className="py-20 bg-foreground text-background">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's build something.</h2>
            <div className="flex flex-wrap justify-center gap-6 text-lg opacity-80">
              <a href="mailto:Droreli@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail className="w-5 h-5" />
                Droreli@gmail.com
              </a>
              <a href="tel:+972545441014" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone className="w-5 h-5" />
                +972-54-5441014
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Israel & EU
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PunchyVersion;

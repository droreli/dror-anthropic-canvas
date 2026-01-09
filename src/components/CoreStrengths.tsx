import { motion } from "framer-motion";
import { 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Layers, 
  Bot,
  Workflow
} from "lucide-react";

const strengths = [
  {
    icon: CreditCard,
    title: "Payments Integration Leadership",
    description: "Checkout, tokenization, 3DS, routing, refunds/voids, settlement, and reconciliation"
  },
  {
    icon: Shield,
    title: "Crypto Rails",
    description: "On-ramp/off-ramp flows, stablecoins, KYC/AML alignment, partner coordination, operational readiness"
  },
  {
    icon: Bot,
    title: "AI & Knowledge Systems",
    description: "MCP/RAG search, documentation hygiene loops, integration tooling and automation"
  },
  {
    icon: Workflow,
    title: "Program Delivery",
    description: "Stakeholder mapping, RACI, risk management, release readiness, incident triage & postmortems"
  },
  {
    icon: TrendingUp,
    title: "RevOps & Sales Operations",
    description: "Forecasting, pipeline governance, coverage planning, enablement, deal execution support"
  },
  {
    icon: Layers,
    title: "Solution Architecture",
    description: "Technical solutioning, integration design, and merchant-ready documentation"
  }
];

const CoreStrengths = () => {
  return (
    <section id="strengths" className="py-24 md:py-32">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-12"
        >
          Core Strengths
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <strength.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                {strength.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;

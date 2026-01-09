import { motion } from "framer-motion";
import { Globe, Plane, Snowflake } from "lucide-react";

const languages = [
  { name: "Hebrew", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Italian", level: "Business" }
];

const interests = [
  {
    icon: Snowflake,
    title: "Extreme Sports",
    description: "Longboard skateboarding and snowboarding enthusiast"
  },
  {
    icon: Plane,
    title: "World Traveler",
    description: "Lived in 5 countries, 1.5-year motorcycle trip through Asia & North America"
  },
  {
    icon: Globe,
    title: "Woodworking",
    description: "Founded SafamBoards - boutique longboard company"
  }
];

const Skills = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-8">
              Languages
            </h2>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between py-3 border-b border-border"
                >
                  <span className="font-serif text-lg text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground text-sm">{lang.level}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Work Authorization:</span>{" "}
                Israeli & EU passports
              </p>
            </div>
          </motion.div>
          
          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-8">
              Beyond Work
            </h2>
            <div className="space-y-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <interest.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{interest.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

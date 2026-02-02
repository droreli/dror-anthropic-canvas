import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educations = [
  {
    school: "INSEAD",
    location: "Fontainebleau, France",
    degree: "Master of Business Administration (MBA)",
    period: "2018 - 2019",
    details: "Top-tier global MBA taught in English. Strategy specialization with an exchange at Wharton School of Business."
  },
  {
    school: "Università degli Studi di Firenze",
    location: "Florence, Italy",
    degree: "Master's in Industrial Design",
    period: "2009 - 2013",
    details: "Completed in Italy. Thesis: \"Cultural Influence on Design Process\" — a comparative study between Italian and Israeli design approaches."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-16"
        >
          Education
        </motion.h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          Israel-born and raised, academically trained in Italy, and INSEAD MBA in France (English-taught) — a rare international
          education path that strengthens global leadership and execution.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card-elevated"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-primary font-medium mt-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.period} · {edu.location}
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

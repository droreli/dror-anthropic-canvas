import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educations = [
  {
    school: "INSEAD",
    location: "Fontainebleau, France",
    degree: "MBA",
    period: "2018",
    details: "Member of Entrepreneur, Consulting, Tech Media and Telecom, and INDEVOR Clubs."
  },
  {
    school: "Università degli Studi di Firenze",
    location: "Florence, Italy",
    degree: "Bachelor of Arts in Design",
    period: "2008 - 2012",
    details: "Graduated with honors: 110/110. Final project: Slam-Rain Harvesting - a DIY water purifier for developing countries."
  }
];

const Education = () => {
  return (
    <section className="py-24 md:py-32">
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

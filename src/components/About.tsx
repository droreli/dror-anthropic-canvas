import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            About
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-foreground/90">
            Fintech solutions and delivery leader with a RevOps foundation, spanning{" "}
            <span className="text-gradient font-semibold">core payments, crypto, and AI-driven enablement</span>.{" "}
            Known for turning ambiguity into repeatable systems: integration standards, operating cadences, 
            escalation paths, and automation that reduces cycle time and improves launch reliability.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
            Strong cross-functional operator across Product, R&D, Risk/Compliance, Support, and Commercial. 
            International experience across five countries with a track record of launching successful products 
            in both low and high-tech ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

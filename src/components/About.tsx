import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 md:py-32">
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
            An accomplished product development and business development manager with{" "}
            <span className="text-gradient font-semibold">international experience in five countries</span>.
            Launched successful products in both low and high-tech ecosystems. Achieving results by
            instilling a sense of ownership among team members, friendly communication between interfaces,
            and connecting individual actions to the greater company goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

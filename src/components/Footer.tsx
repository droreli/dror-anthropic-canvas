import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Let's connect
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Open to new opportunities and conversations about product, business development, and innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:Droreli@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/dror-ben-eliyahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dror Ben-Eliyahu. Built with care.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements inspired by Anthropic */}
      <div className="absolute top-32 right-20 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="20" cy="20" r="6" fill="hsl(var(--primary))" />
          <circle cx="50" cy="15" r="4" fill="hsl(var(--primary))" />
          <circle cx="35" cy="40" r="8" fill="hsl(var(--primary))" />
          <path d="M20 20 Q35 30 35 40" stroke="hsl(var(--foreground))" fill="none" strokeWidth="2" />
          <path d="M35 40 L35 70" stroke="hsl(var(--foreground))" fill="none" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="section-container text-center">
        {/* Profile Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img 
            src={profilePhoto} 
            alt="Dror Ben-Eliyahu"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover border-2 border-primary/20 shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight">
            Dror{" "}
            <span className="underline-accent">Ben-Eliyahu</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light leading-relaxed"
        >
          Director, Solutions & Implementation
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-primary font-medium max-w-xl mx-auto mb-12"
        >
          Core Payments, Crypto & AI (MCP)
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <a 
            href="mailto:Droreli@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            Droreli@gmail.com
          </a>
          <a 
            href="tel:+972545441014" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +972-54-5441014
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Israel & EU
          </span>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-muted-foreground/40 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

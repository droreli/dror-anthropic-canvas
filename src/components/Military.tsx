import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Military = () => {
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
          Military Service
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-elevated"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Israeli Air Force
              </h3>
              <p className="text-primary font-medium mt-1">Ground Control Officer</p>
              <p className="text-sm text-muted-foreground mt-1">
                2002 - 2005 · Israeli Air Force Headquarters
              </p>
              
              <ul className="space-y-2 mt-6">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Earned division's outstanding performance award, given to top 10% (2004)</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Created expedited coordination process reducing lead times from 25 to 20 weeks</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Graduated in top 10% of combat training in Special Forces Ground Unit</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Military;

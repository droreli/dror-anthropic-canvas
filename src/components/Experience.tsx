import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  location: string;
  description: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "DAO4Peace",
    location: "Israel",
    description: "A decentralized & autonomous global foundation leveraging open finance",
    role: "Co-Founder and VP of Business Operations",
    period: "2021 - Present",
    highlights: [
      "Secured pre-seed investment, US$100K for creating the first peace charity foundation on a blockchain",
      "Developed charity foundation vision, mission, and strategy using VC methodologies",
      "Lead brand creation, including UI/UX design, website development and social media"
    ]
  },
  {
    company: "Vayomar",
    location: "Tel Aviv, Israel",
    description: "Boutique consultancy specializing in change management and innovation",
    role: "Senior Consultant",
    period: "2020 - 2021",
    highlights: [
      "Led Fortune 200 account across four continents, expanding program to two additional units",
      "Facilitated post-merger integration and digital initiatives in a unicorn",
      "Supported four major initiatives enabling 30% cost reduction from original budgets"
    ]
  },
  {
    company: "MotorK",
    location: "Milan, Italy",
    description: "Integrated, end-to-end solutions for the automotive industry",
    role: "Senior Strategy Manager",
    period: "2019",
    highlights: [
      "Managed strategic cross-functional projects establishing hybrid structure",
      "Implemented new B2B delivery techniques, leading to 15% decrease in delivery time",
      "Acted as advisor to CEO, increasing customer satisfaction by 12%"
    ]
  },
  {
    company: "Appslix",
    location: "Global",
    description: "Global media company",
    role: "Co-Founder and Head of Business Development",
    period: "2016 - 2018",
    highlights: [
      "Negotiated partnerships achieving 400% revenue increase, US$600K in 2017",
      "Oversaw online advertising and digital marketing solutions (B2B)",
      "Refined A/B testing methods for quality performance marketing"
    ]
  },
  {
    company: "WoOdie",
    location: "International",
    description: "Eco-sustainable sunglasses company",
    role: "Co-Founder and CEO",
    period: "2014 - 2017",
    highlights: [
      "Secured US$150K angel investment through compelling pitch",
      "Grew sales from US$50K to US$700K by optimizing marketing campaigns",
      "Partnered with KLM, Sprayground & OLN for international reach"
    ]
  },
  {
    company: "Hisense International",
    location: "Qingdao, China",
    description: "Chinese multinational electronics manufacturer",
    role: "Senior Product Designer",
    period: "2013 - 2014",
    highlights: [
      "Developed corporate design strategy for US market",
      "Enabled partnerships with Best Buy, Sam's Club, and Costco",
      "Designed Vidaa smart TV platform unveiled at CES 2014"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-primary uppercase tracking-widest mb-16"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-elevated group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
                <div className="text-right md:text-right shrink-0">
                  <p className="font-medium text-foreground">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.period} · {exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mt-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

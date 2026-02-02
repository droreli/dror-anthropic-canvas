import { motion } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";

type Version = "classic" | "ai";

interface VersionSwitcherProps {
  version: Version;
  onVersionChange: (version: Version) => void;
}

const versions = [
  { id: "classic" as Version, label: "Classic", icon: Sparkles, description: "Full story" },
  { id: "ai" as Version, label: "AI-Ready", icon: Bot, description: "For agents" },
];

const VersionSwitcher = ({ version, onVersionChange }: VersionSwitcherProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-20 md:top-24 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-background/80 backdrop-blur-xl border border-border rounded-full p-1.5 shadow-lg flex gap-1">
        {versions.map((v) => {
          const Icon = v.icon;
          const isActive = version === v.id;
          
          return (
            <button
              key={v.id}
              onClick={() => onVersionChange(v.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeVersion"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{v.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default VersionSwitcher;
export type { Version };

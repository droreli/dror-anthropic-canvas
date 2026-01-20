import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import VersionSwitcher, { type Version } from "@/components/VersionSwitcher";
import ClassicVersion from "@/components/versions/ClassicVersion";
import PunchyVersion from "@/components/versions/PunchyVersion";
import AIOptimizedVersion from "@/components/versions/AIOptimizedVersion";

const Index = () => {
  const [version, setVersion] = useState<Version>("classic");

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Header />
      <VersionSwitcher version={version} onVersionChange={setVersion} />
      
      <main className="min-h-screen pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={version}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {version === "classic" && <ClassicVersion />}
            {version === "punchy" && <PunchyVersion />}
            {version === "ai" && <AIOptimizedVersion />}
          </motion.div>
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
};

export default Index;

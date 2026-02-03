import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import AIOptimizedVersion from "@/components/versions/AIOptimizedVersion";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Header />
      <main className="min-h-screen pt-16">
        <AIOptimizedVersion />
      </main>
    </ThemeProvider>
  );
};

export default Index;

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreStrengths from "@/components/CoreStrengths";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Military from "@/components/Military";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <CoreStrengths />
        <Experience />
        <Education />
        <Military />
        <Skills />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;

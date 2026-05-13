import { Navbar } from "./components/Navbar/Navbar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { TechSection } from "./components/TechSection/TechSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TechSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

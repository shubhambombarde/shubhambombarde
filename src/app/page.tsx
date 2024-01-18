"use client";
import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import Footer from "@/components/sections/footer/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";
import useVanillaTilt from "@/hooks/useVanillaTilt";
import PublicationSection from "@/components/sections/publications/PublicationSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";

export default function Home() {
  // useScrollReveal();
  useVanillaTilt();
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/*<ProjectsSection />*/}
      {/*<PublicationSection />*/}
      {/*<ExperienceSection />*/}
      {/*<ContactSection />*/}
      <Footer />
    </>
  );
}

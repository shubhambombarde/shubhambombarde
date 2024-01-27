"use client";
import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import Footer from "@/components/sections/footer/Footer";
import useVanillaTilt from "@/hooks/useVanillaTilt";
import PublicationSection from "@/components/sections/publications/PublicationSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import dynamic from "next/dynamic";

const ScrollReveal = dynamic(() => import("./../components/ScrollReveal"), {
  ssr: false,
});

export default function Home() {
  useVanillaTilt();
  return (
    <>
      <ScrollReveal />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PublicationSection />
      <ExperienceSection />
      {/*<ContactSection />*/}
      <Footer />
    </>
  );
}

"use client";
import About from "@/components/about";
import Experience from "@/components/experience/experience";
import HeroSection from "@/components/hero";
import SocialWrapper from "@/components/socailWrapper/socailWrapper";

export default function Home() {
  return (
    <div className="bg-[rgb(18,15,22)]">
      <HeroSection />
      <SocialWrapper />
      <About />
      <Experience />
    </div>
  );
}

"use client";
import HeroSection from "@/components/hero";
import SocialWrapper from "@/components/socailWrapper/socailWrapper";

export default function Home() {
  return (
    <div className="bg-[rgb(18,15,22)] flex ">
      <HeroSection />
      <SocialWrapper />
    </div>
  );
}

"use client";

import React from "react";
import { PremiumNavbar } from "@/components/premium-navbar";
import { FuturisticHero } from "@/components/futuristic-hero";
<<<<<<< HEAD
import { AboutSection } from "@/components/about-section";
import { SDGSection } from "@/components/sdg-section";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <LoadingScreen>
      <main className="relative bg-[#0F172A] min-h-screen">
        <PremiumNavbar />
        
        {/* ID="home" for the Home link */}
        <section id="home">
          <FuturisticHero />
        </section>

        {/* ID="about" for the About link */}
        <section id="about">
          <AboutSection />
        </section>

        {/* ID="sdg" or "menu" if you want to link here */}
        <section id="sdg">
          <SDGSection />
        </section>
        
        <Footer /> 
      </main>
    </LoadingScreen>
=======
import { AboutSection } from "@/components/about-section"; // Assuming you have this
import { SDGSection } from "@/components/sdg-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative bg-[#0F172A] min-h-screen">
      <PremiumNavbar />
      
      {/* ID="home" for the Home link */}
      <section id="home">
        <FuturisticHero />
      </section>

      {/* ID="about" for the About link */}
      <section id="about">
        <AboutSection />
      </section>

      {/* ID="sdg" or "menu" if you want to link here */}
      <section id="sdg">
        <SDGSection />
      </section>
      
      <Footer /> 
    </main>
>>>>>>> 7c178f9 (feat: UI updates)
  );
}
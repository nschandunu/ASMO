import { PremiumNavbar } from "@/components/premium-navbar";
import { FuturisticHero } from "@/components/futuristic-hero";

export default function Home() {
  return (
    <main className="relative">
      <PremiumNavbar />
      <FuturisticHero />
      
      {/* Add more sections below as needed */}
      <div className="min-h-screen bg-white dark:bg-slate-950">
        {/* Future content goes here */}
      </div>
    </main>
  );
}
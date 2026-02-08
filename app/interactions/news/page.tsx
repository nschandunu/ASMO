"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Building2, 
  MapPin, 
  Clock, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Leaf, 
  Bus, 
  Recycle,
  Heart,
  Search,
  ArrowRight
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

// Component Imports
import { LoadingScreen } from "@/components/loading-screen";

/* ═══════════════════════════════════════════════════════════════════════════
   SDG 11 VISUAL THEME & DECORATIONS
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

const FloatingSDGIcons = () => {
  const icons = [
    { Icon: Leaf, color: "#22C55E", x: "8%", y: "15%" },
    { Icon: Building2, color: "#38BDF8", x: "92%", y: "12%" },
    { Icon: Bus, color: "#FD9D24", x: "5%", y: "85%" },
    { Icon: Recycle, color: "#8B5CF6", x: "88%", y: "82%" },
  ];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -40, 0], rotate: [0, 20, -20, 0] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <item.Icon size={35} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

/* ── UPDATED: Working Unsplash Links targeting Urban Sustainability ── */
const NEWS_ARTICLES = [
  {
    id: 1,
    category: "Urban Mobility",
    title: "Zero-Emission Transit Hub Pilot",
    desc: "A multimodal center linking green pathways has launched, significantly reducing local carbon footprints.",
    date: "2 Hours Ago",
    location: "Metro Core",
    image: "https://media.istockphoto.com/id/2121819669/photo/electric-bus-charging-station.jpg?s=1024x1024&w=is&k=20&c=m1FLdZK7Vytu9kC0Sk_y2ivb2CRgQzCi0XuPPj4qTIc=",
    impact: "+15% Clean Air Index"
  },
  {
    id: 2,
    category: "Resilient Cities",
    title: "Solar Grid reaches 90% Independence",
    desc: "Neighborhoods report total energy autonomy as the latest resilient grid updates go live this morning.",
    date: "5 Hours Ago",
    location: "Green Ridge",
    image: "https://images.unsplash.com/photo-1768839727824-28d6f0dcd1d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    impact: "Resilience Tier 1"
  },
  {
    id: 3,
    category: "Inclusivity",
    title: "Universal Access Park Restoration",
    desc: "Redesigning urban centers to ensure full accessibility for all residents, regardless of age or physical ability.",
    date: "1 Day Ago",
    location: "East Settlement",
    image: "https://images.unsplash.com/photo-1624971035921-341d7405069b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    impact: "SDG 11.7 Certified"
  }
];

export default function SDGNewsPage() {
  const supabase = createClient();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function checkAuth() {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push("/");
      }
    }
    checkAuth();
  }, [supabase, router]);

  return (
    <LoadingScreen>
      <div 
        className="relative min-h-screen w-full bg-[#0F172A] overflow-y-auto overflow-x-hidden flex flex-col"
        style={{ cursor: SDG_CURSOR }}
      >
        <FloatingSDGIcons />

        <main className="relative z-10 pt-24 pb-32 px-6 max-w-7xl mx-auto w-full">
          
          {/* ── HEADER ────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 px-3 py-1 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-bold tracking-widest uppercase w-fit">
                <Heart className="w-3 h-3 fill-current" />
                SDG 11 Intelligence Feed
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
                Urban <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#22C55E]">Insights</span>
              </h1>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#38BDF8] transition-colors" size={18} />
                <input 
                  type="text"
                  placeholder="Scan Network..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#1E293B]/50 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#38BDF8]/40 focus:bg-[#1E293B] transition-all font-mono text-xs uppercase tracking-widest w-64 md:w-80 shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* ── FEATURED INTELLIGENCE ─────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-8 group relative overflow-hidden rounded-[3.5rem] bg-slate-900 border border-white/5 shadow-2xl aspect-[16/10] md:aspect-auto md:h-[600px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                alt="Modern Resilient City"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full text-left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#38BDF8] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Trending</span>
                  <span className="text-white/60 font-mono text-[10px] uppercase tracking-[0.3em]">Sector_11_Central</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-6 group-hover:text-[#38BDF8] transition-colors">
                  Sustainable <br /> Settlement Logic
                </h2>
                <p className="text-slate-400 text-sm md:text-lg max-w-xl font-light leading-relaxed mb-8">
                  The latest framework for participatory urban planning is being deployed, allowing communities to influence settlement architecture.
                </p>
                <motion.button 
                  whileHover={{ gap: "2rem" }}
                  className="flex items-center gap-4 text-[#38BDF8] font-black text-xs uppercase tracking-[0.4em]"
                >
                  Download Intelligence <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>

            {/* SIDEBAR: System Status Card with Fixed Text Alignment */}
            <div className="lg:col-span-4 flex flex-col gap-8">
               <div className="flex-1 bg-[#1E293B]/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[3rem] relative overflow-hidden flex flex-col justify-between group">
                  <div className="relative z-10 text-left">
                    <ShieldCheck className="text-[#22C55E] mb-6" size={40} />
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-6">Network <br /> Safety_Status</h3>
                    {/* FIXED: Text alignment and typography for terminal aesthetic */}
                    <p className="text-slate-500 text-[11px] font-mono uppercase tracking-[0.15em] leading-relaxed max-w-[280px]">
                      SYSTEM MONITORING TARGET 11.1: ENSURE ACCESS FOR ALL TO ADEQUATE, SAFE HOUSING.
                    </p>
                  </div>
                  <div className="mt-8 relative z-10 text-left">
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                      <motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 2 }} className="h-full bg-[#22C55E] shadow-[0_0_15px_#22C55E]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest">Resilience Index: 0.82</span>
                  </div>
               </div>

               <div className="flex-1 bg-gradient-to-br from-[#FD9D24] to-[#F59E0B] p-10 rounded-[3rem] group cursor-pointer transition-all hover:shadow-[0_0_40px_rgba(253,157,36,0.3)] text-left">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-black/20 rounded-2xl text-black">
                      <TrendingUp size={24} />
                    </div>
                    <ExternalLink size={20} className="text-black/40 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-black uppercase tracking-tighter leading-none">Contribute <br /> To Insights</h3>
                  <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest mt-4">Broadcast your findings</p>
               </div>
            </div>
          </div>

          {/* ── NEWS GRID ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="group flex flex-col bg-[#1E293B]/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-[#1E293B]/50 transition-all shadow-xl text-left"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono text-white uppercase tracking-widest border border-white/10">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-4 text-slate-500 font-mono text-[9px] uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><Clock size={10} /> {item.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={10} /> {item.location}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight leading-tight group-hover:text-[#38BDF8] transition-colors mb-4">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#22C55E] uppercase tracking-widest">{item.impact}</span>
                    <button className="p-2 bg-white/5 rounded-xl hover:bg-[#38BDF8] hover:text-black transition-all">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── FOOTER MISSION ─────────────────────────── */}
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col items-center text-center">
            <Recycle className="text-slate-800 mb-6" size={40} />
            <p className="text-slate-600 font-mono text-[10px] uppercase tracking-[0.6em] mb-4">
              Propagating Sustainable Settlement Data
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-700">
               <span>Target 11.A: National Planning</span>
               <span>Target 11.B: Resilience Policy</span>
               <span>Target 11.C: Sustainable Architecture</span>
            </div>
          </div>

        </main>
      </div>
    </LoadingScreen>
  );
}
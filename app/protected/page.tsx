import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { 
  ArrowRight, ShieldCheck, MessageSquare, Newspaper, 
  ShoppingBag, Activity, Globe, PhoneCall, AlertTriangle
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { CityAdvisory } from "@/components/city-advisory";
import { DisasterForecast } from "@/components/disaster-forecast";
import { PetitionSystem } from "@/components/petition-system"; // NEW

async function UserWelcome() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/auth/login"); 

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD9D24] to-[#F59E0B]">
      {user.email?.split('@')[0]}
    </span>
  );
}

export default function ProtectedPage() {
  const targetCity = "Kuliyapitiya"; // Localized Node ID

  return (
    <div className="flex-1 w-full flex flex-col gap-16 max-w-6xl mx-auto px-6 py-12">
      <div className="w-full">
        <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm p-4 rounded-2xl flex gap-3 items-center font-medium shadow-sm">
          <ShieldCheck size={20} />
          Uplink Established: This settlement data is restricted to authorized contributors.
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Welcome Back, <br />
            <Suspense fallback={<span className="animate-pulse opacity-50">Authorized_User</span>}>
              <UserWelcome />
            </Suspense>
          </h1>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
            Sustainable Settlement Terminal // Node_ID: Alpha-11
          </p>
        </div>
      </div>

      {/* ── AI ADVISORY GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <CityAdvisory city={targetCity} />
        <DisasterForecast city={targetCity} />
      </div>

      {/* ── NEW: CIVIC PETITION SYSTEM ── */}
      <div className="w-full pt-4">
        <PetitionSystem />
      </div>

      {/* ── CORE INTERACTION MODULES ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/chat" className="group">
          <div className="h-full bg-[#38BDF8]/5 border border-[#38BDF8]/20 p-8 rounded-[2.5rem] transition-all hover:bg-[#38BDF8]/10 hover:scale-[1.02] cursor-pointer">
            <div className="w-14 h-14 bg-[#38BDF8] text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#38BDF8]/20">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">Community Chat</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Engage in inclusive settlement dialogue with other residents.</p>
          </div>
        </Link>

        <Link href="/interactions/news" className="group">
          <div className="h-full bg-[#22C55E]/5 border border-[#22C55E]/20 p-8 rounded-[2.5rem] transition-all hover:bg-[#22C55E]/10 hover:scale-[1.02] cursor-pointer">
            <div className="w-14 h-14 bg-[#22C55E] text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#22C55E]/20">
              <Newspaper size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">Urban Insights</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Access real-time intelligence on sustainable urban developments.</p>
          </div>
        </Link>

        <Link href="/shopv" className="group">
          <div className="h-full bg-[#FD9D24]/5 border border-[#FD9D24]/20 p-8 rounded-[2.5rem] transition-all hover:bg-[#FD9D24]/10 hover:scale-[1.02] cursor-pointer">
            <div className="w-14 h-14 bg-[#FD9D24] text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#FD9D24]/20">
              <ShoppingBag size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">ASMO Shop</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Acquire green assets and community-vetted sustainable gear.</p>
          </div>
        </Link>

        <Link href="/feed" className="group">
          <div className="h-full bg-[#A78BFA]/5 border border-[#A78BFA]/20 p-8 rounded-[2.5rem] transition-all hover:bg-[#A78BFA]/10 hover:scale-[1.02] cursor-pointer">
            <div className="w-14 h-14 bg-[#A78BFA] text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#A78BFA]/20">
              <Globe size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">Urban Intelligence</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">AI-moderated city feed for sustainable development updates.</p>
          </div>
        </Link>
      </div>

      <div className="w-full">
        <Link href="/emergency" className="group">
          <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-10 bg-red-500/5 border border-red-500/20 rounded-[3rem] transition-all hover:bg-red-500/10 hover:border-red-500/40 cursor-pointer overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-20 h-20 bg-red-500 text-white rounded-[2rem] flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.4)] group-hover:scale-110 transition-transform">
                <AlertTriangle size={36} className="animate-pulse" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2">Emergency Protocols</h3>
                <p className="text-slate-500 text-sm md:text-base font-medium max-w-md">Immediate access to critical settlement contacts and medical assistance.</p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 flex items-center gap-4 bg-red-500 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest group-hover:bg-red-600 transition-colors shadow-xl">
              <PhoneCall size={18} /> Open Broadcast
            </div>
          </div>
        </Link>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
            <Activity size={16} className="text-cyan-400" />
            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Network: Resilient</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe size={16} className="text-[#22C55E]" />
            <span className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">SDG 11: Compliance Active</span>
          </div>
        </div>
        <p className="text-slate-700 font-mono text-[9px] uppercase tracking-[0.2em]">Act Sustainably. Move Onwards.</p>
      </div>
    </div>
  );
}
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { 
  UserCircle, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare, 
  Newspaper, 
  ShoppingBag,
  Activity,
  Globe
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

// --- Server Component to fetch secure user info (UNCHANGED) ---
async function UserWelcome() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login"); 
  }

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD9D24] to-[#F59E0B]">
      {user.email?.split('@')[0]}
    </span>
  );
}

export default function ProtectedPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-12 max-w-5xl mx-auto px-6 py-12">
      {/* ── Security Alert Banner ── */}
      <div className="w-full">
        <div className="bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm p-4 rounded-2xl flex gap-3 items-center font-medium shadow-sm">
          <ShieldCheck size={20} />
          Uplink Established: This settlement data is restricted to authorized contributors.
        </div>
      </div>

      {/* ── Main Dashboard Header ── */}
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

        <Link href="/profile">
          <button className="group relative flex items-center gap-4 bg-white text-black px-8 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest transition-all hover:bg-[#38BDF8] hover:text-white shadow-2xl">
            <UserCircle size={24} className="group-hover:rotate-12 transition-transform" />
            Manage Profile
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </Link>
      </div>

      {/* ── NEW: CORE INTERACTION MODULES ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chat Module */}
        <Link href="/chat" className="group">
          <div className="h-full bg-[#38BDF8]/5 border border-[#38BDF8]/20 p-8 rounded-[2.5rem] transition-all hover:bg-[#38BDF8]/10 hover:scale-[1.02] cursor-pointer">
            <div className="w-14 h-14 bg-[#38BDF8] text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#38BDF8]/20">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">Community Chat</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Engage in inclusive settlement dialogue with other residents.</p>
            <div className="flex items-center gap-2 text-[#38BDF8] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Open Channel <ArrowRight size={14} />
            </div>
          </div>
        </Link>

        {/* News Module */}
        <Link href="/interactions/news" className="group">
          <div className="h-full bg-[#22C55E]/5 border border-[#22C55E]/20 p-8 rounded-[2.5rem] transition-all hover:bg-[#22C55E]/10 hover:scale-[1.02] cursor-pointer">
            <div className="w-14 h-14 bg-[#22C55E] text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#22C55E]/20">
              <Newspaper size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">Urban Insights</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Access real-time intelligence on sustainable urban developments.</p>
            <div className="flex items-center gap-2 text-[#22C55E] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              View Feed <ArrowRight size={14} />
            </div>
          </div>
        </Link>

        {/* Shop Module */}
        <Link href="/shopv" className="group">
          <div className="h-full bg-[#FD9D24]/5 border border-[#FD9D24]/20 p-8 rounded-[2.5rem] transition-all hover:bg-[#FD9D24]/10 hover:scale-[1.02] cursor-pointer">
            <div className="w-14 h-14 bg-[#FD9D24] text-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#FD9D24]/20">
              <ShoppingBag size={28} />
            </div>
            <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">ASMO Shop</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Acquire green assets and community-vetted sustainable gear.</p>
            <div className="flex items-center gap-2 text-[#FD9D24] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Browse Assets <ArrowRight size={14} />
            </div>
          </div>
        </Link>
      </div>

      {/* ── System Status & Intel (Footer) ── */}
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
        <p className="text-slate-700 font-mono text-[9px] uppercase tracking-[0.2em]">
          Act Sustainably. Move Onwards.
        </p>
      </div>
    </div>
  );
}
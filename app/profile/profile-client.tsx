"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Briefcase, 
  Users, 
  Save, 
  Edit3, 
  ShieldCheck, 
  ArrowLeft,
  Leaf,
  Building2,
  Bus,
  Recycle,
  Heart,
  Check,
  AlertCircle
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { LoadingScreen } from "@/components/loading-screen";

/* ═══════════════════════════════════════════════════════════════════════════
   THEME CONFIG
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

const FloatingSDGIcons = () => {
  const icons = [
    { Icon: Leaf, color: "#22C55E", x: "10%", y: "20%" },
    { Icon: Building2, color: "#38BDF8", x: "85%", y: "15%" },
    { Icon: Bus, color: "#FD9D24", x: "5%", y: "80%" },
    { Icon: Recycle, color: "#8B5CF6", x: "90%", y: "75%" },
  ];
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <item.Icon size={40} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

export default function ProfileClient({ user, initialProfile }: { user: any, initialProfile: any }) {
  const supabase = createClient();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State - Focused on Username
  const [username, setUsername] = useState(initialProfile?.username || "");
  const [gender, setGender] = useState(initialProfile?.attributes?.gender || "Not Specified");
  const [occupation, setOccupation] = useState(initialProfile?.attributes?.occupation || "Urban Contributor");

  const handleUpdate = async () => {
    setLoading(true);
    setError(null);
    try {
      // FIX: Ensure attributes is merged safely to prevent data loss or null errors
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          username: username,
          attributes: {
            ...(initialProfile?.attributes || {}),
            gender: gender,
            occupation: occupation
          },
          // Ensure updatedAt matches schema case
          updatedAt: new Date().toISOString()
        })
        .eq("id", user.id);

      if (updateError) throw updateError;
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setIsEditing(false);
      router.refresh();
    } catch (err: any) {
      console.error("Update failed:", err.message);
      setError(err.message || "Failed to synchronize identity records.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingScreen>
      <div 
        className="relative min-h-screen w-full bg-[#0F172A] overflow-x-hidden flex flex-col"
        style={{ cursor: SDG_CURSOR }}
      >
        <FloatingSDGIcons />

        <main className="relative flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full z-10">
          
          {/* Back Button */}
          <motion.button
            onClick={() => router.push("/protected")}
            whileHover={{ x: -5, color: "#38BDF8" }}
            className="flex items-center gap-2 text-slate-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-12 transition-colors"
          >
            <ArrowLeft size={16} /> Hub_Return
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* ── LEFT: AVATAR CARD ──────────────────────────────────── */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-4 bg-[#1E293B]/40 backdrop-blur-2xl border border-white/5 p-8 rounded-[3rem] text-center relative overflow-hidden group"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-transform group-hover:scale-105">
                <Image 
                  src="/assets/pandap.webp" 
                  alt="Panda Avatar" 
                  fill 
                  className="object-cover"
                />
              </div>
              <h2 className="text-white font-black uppercase tracking-widest text-sm mb-2">{username}</h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-[9px] font-bold uppercase tracking-tighter">
                <ShieldCheck size={12} /> Contributor_Verified
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5 text-left space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  <span>Score</span>
                  <span className="text-cyan-400 font-bold">{initialProfile?.sustainability_score}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  <span>Node_ID</span>
                  <span className="font-bold">{user.id.slice(0, 8)}</span>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: DATA HUB ────────────────────────────────────── */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-8 bg-[#1E293B]/40 backdrop-blur-2xl border border-white/5 p-10 rounded-[3.5rem] shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="flex items-center gap-2 text-[#FD9D24] font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
                    <Heart size={14} className="fill-current" /> SDG 11 Identity
                  </div>
                  <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Settlement_Profile</h1>
                </div>
                
                <button 
                  onClick={() => isEditing ? handleUpdate() : setIsEditing(true)}
                  disabled={loading}
                  className={`p-4 rounded-2xl transition-all shadow-xl ${
                    isEditing 
                      ? 'bg-[#22C55E] text-white hover:bg-[#16a34a]' 
                      : 'bg-white text-black hover:bg-[#38BDF8] hover:text-white'
                  }`}
                >
                  {loading ? <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : 
                   isEditing ? <Save size={20} /> : <Edit3 size={20} />}
                </button>
              </div>

              {/* Identity Fields */}
              <div className="space-y-8">
                {/* Username Input */}
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                    <User size={12} /> Contributor_Username
                  </label>
                  <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={!isEditing}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold uppercase tracking-widest focus:outline-none focus:border-cyan-400/50 disabled:opacity-50 transition-all placeholder:text-slate-700"
                  />
                </div>

                {/* Email (Read Only) */}
                <div className="space-y-3 opacity-60">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                    <Mail size={12} /> Network_Address // Read_Only
                  </label>
                  <div className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-slate-400 font-mono text-xs cursor-not-allowed">
                    {user.email}
                  </div>
                </div>

                {/* Grid for Gender & Occupation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                      <Users size={12} /> Biological_Identity
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      disabled={!isEditing}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold uppercase tracking-widest focus:outline-none focus:border-cyan-400/50 disabled:opacity-50 appearance-none transition-all cursor-pointer"
                    >
                      <option className="bg-[#0F172A]">Male</option>
                      <option className="bg-[#0F172A]">Female</option>
                      <option className="bg-[#0F172A]">Non-Binary</option>
                      <option className="bg-[#0F172A]">Prefer Not To Say</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                      <Briefcase size={12} /> Social_Contribution
                    </label>
                    <input 
                      type="text"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      disabled={!isEditing}
                      placeholder="e.g. Urban Planner"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white font-bold uppercase tracking-widest focus:outline-none focus:border-cyan-400/50 disabled:opacity-50 transition-all placeholder:text-slate-700"
                    />
                  </div>
                </div>
              </div>

              {/* Feedback Notifications */}
              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-12 flex items-center gap-3 text-[#22C55E] font-mono text-[10px] uppercase tracking-widest bg-[#22C55E]/10 p-4 rounded-2xl border border-[#22C55E]/20"
                  >
                    <Check size={14} /> Identity record synchronized with central mainframe.
                  </motion.div>
                )}
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-12 flex items-center gap-3 text-red-400 font-mono text-[10px] uppercase tracking-widest bg-red-500/10 p-4 rounded-2xl border border-red-500/20"
                  >
                    <AlertCircle size={14} /> Sync Error: {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>
      </div>
    </LoadingScreen>
  );
}
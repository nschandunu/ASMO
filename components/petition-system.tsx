"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, ThumbsUp, MapPin, 
  Droplets, Construction, ShieldAlert, X 
} from "lucide-react";

export function PetitionSystem() {
  const [petitions, setPetitions] = useState<any[]>([]);
  const [filter, setFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [category, setCategory] = useState("Roads");

  const tags: any = {
    Water: { icon: Droplets, color: "text-blue-400", bg: "bg-blue-400/10" },
    Roads: { icon: Construction, color: "text-orange-400", bg: "bg-orange-400/10" },
    Safety: { icon: ShieldAlert, color: "text-red-400", bg: "bg-red-400/10" }
  };

  // ── Load from LocalStorage on mount ──
  useEffect(() => {
    const saved = localStorage.getItem("asmo_petitions");
    if (saved) setPetitions(JSON.parse(saved));
  }, []);

  // ── Save Petition (Frontend Only) ──
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      location_data: postalCode,
      category,
      support_count: 1,
      createdAt: new Date().toISOString()
    };

    const updated = [newEntry, ...petitions];
    setPetitions(updated);
    localStorage.setItem("asmo_petitions", JSON.stringify(updated));
    
    // Reset Form
    setTitle(""); setDescription(""); setPostalCode(""); setShowForm(false);
  };

  const handleSupport = (id: string) => {
    const updated = petitions.map(p => 
      p.id === id ? { ...p, support_count: p.support_count + 1 } : p
    );
    setPetitions(updated);
    localStorage.setItem("asmo_petitions", JSON.stringify(updated));
  };

  const filteredPetitions = petitions.filter(p => 
    p.location_data.includes(filter) || p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* ── Header & Filter ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Civic_Petitions</h2>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1">Direct Citizen Engagement // SDG 11.3</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Filter by Postal Code..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-xs text-white focus:outline-none focus:border-cyan-500/50"
            />
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="p-3 bg-cyan-500 text-[#0F172A] rounded-2xl hover:bg-cyan-400 transition-all shadow-lg"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* ── CREATE PETITION MODAL ── */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#1E293B] border border-white/10 p-8 rounded-[3rem] w-full max-w-lg shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Start_Petition</h3>
                <button onClick={() => setShowForm(false)} className="text-slate-500 hover:text-white"><X size={24} /></button>
              </div>

              <form onSubmit={handleCreate} className="space-y-6">
                <input 
                  required placeholder="Title of Issue" 
                  value={title} onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm"
                />
                <textarea 
                  required placeholder="Detailed Description..." 
                  value={description} onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm h-32"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    required placeholder="Postal Code (e.g. 60200)" 
                    value={postalCode} onChange={(e) => setPostalCode(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm"
                  />
                  <select 
                    value={category} onChange={(e) => setCategory(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm appearance-none"
                  >
                    <option value="Roads">Roads</option>
                    <option value="Water">Water</option>
                    <option value="Safety">Safety</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-cyan-500 text-[#0F172A] font-black uppercase py-4 rounded-2xl tracking-widest hover:bg-cyan-400 transition-all">
                  Initialize Petition
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── PETITION GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPetitions.map((petition) => {
            const Icon = tags[petition.category]?.icon || Construction;
            return (
              <motion.div
                layout
                key={petition.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#1E293B]/40 backdrop-blur-md border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`px-3 py-1 rounded-full ${tags[petition.category]?.bg} ${tags[petition.category]?.color} text-[8px] font-black uppercase tracking-widest flex items-center gap-2`}>
                      <Icon size={10} /> {petition.category}
                    </div>
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest flex items-center gap-2">
                      <MapPin size={10} /> {petition.location_data}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
                    {petition.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {petition.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleSupport(petition.id)}
                      className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-[#0F172A] transition-all"
                    >
                      <ThumbsUp size={16} />
                    </button>
                    <span className="text-white font-black text-sm">{petition.support_count}</span>
                  </div>
                  <span className="text-[8px] font-mono text-slate-700 uppercase">Sector_Verified</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {filteredPetitions.length === 0 && (
        <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
          <p className="text-slate-600 font-mono text-xs uppercase tracking-[0.3em]">No data packets in Sector_{filter || "Alpha"}</p>
        </div>
      )}
    </div>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Droplets, Wind, AlertCircle, Loader2 } from "lucide-react";

export function CityAdvisory({ city = "Negombo" }) {
  const [tip, setTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCityTip = async () => {
    setLoading(true);
    try {
      // Simulated City Data based on prompt requirements
      const cityData = {
        city: city,
        water: "Moderate",
        electricity: "Good",
        roads: "Critical",
        airQuality: "Level 3 (Moderate)",
      };

      // We call the local API route we'll create in step 2
      const response = await fetch("/api/ai/city-advice", {
        method: "POST",
        body: JSON.stringify(cityData),
      });
      const data = await response.json();
      setTip(data.advice);
    } catch (err) {
      setTip("Network congestion detected. Ensure sustainable resource usage today.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCityTip(); }, [city]);

  return (
    <div className="bg-[#1E293B]/40 backdrop-blur-xl border border-white/5 p-8 rounded-[3rem] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400">
              <Sparkles size={20} className="animate-pulse" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Smart_City_Advisory</span>
          </div>
          <button onClick={fetchCityTip} className="text-slate-600 hover:text-cyan-400 transition-colors">
            <Zap size={14} />
          </button>
        </div>

        <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-4">
          Status: <span className="text-cyan-400">{city} Hub</span>
        </h3>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 py-4 text-slate-500 font-mono text-xs">
              <Loader2 className="animate-spin w-4 h-4" /> Synchronizing with City Brain...
            </motion.div>
          ) : (
            <motion.div key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
                "{tip}"
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Droplets size={12} className="text-blue-400" />
                  <span className="text-[9px] font-mono text-slate-500">WATER: 64%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind size={12} className="text-green-400" />
                  <span className="text-[9px] font-mono text-slate-500">AQI: 52</span>
                </div>
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle size={12} />
                  <span className="text-[9px] font-mono">ROAD: RED</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
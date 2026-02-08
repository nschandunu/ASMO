"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CloudRain, Wind, AlertCircle, Loader2, Navigation } from "lucide-react";

export function DisasterForecast({ city = "Negombo" }) {
  const [forecast, setForecast] = useState<string | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const generateForecast = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ai/disaster-forecast", {
        method: "POST",
        body: JSON.stringify({ city }),
      });
      const data = await res.json();
      setForecast(data.warning);
      setStats(data.stats);
    } catch (err) {
      setForecast("Unstable weather patterns detected. Monitor local alerts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { generateForecast(); }, [city]);

  return (
    <div className="bg-[#EF4444]/5 border border-[#EF4444]/20 p-8 rounded-[3rem] relative overflow-hidden group h-full">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF4444]/10 blur-[50px]" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#EF4444]/20 rounded-xl text-[#EF4444]">
            <AlertCircle size={20} className="animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Disaster_Forecast_Advisor</span>
        </div>

        {loading ? (
          <div className="flex items-center gap-3 text-slate-500 font-mono text-xs">
            <Loader2 className="animate-spin w-4 h-4" /> Analyzing Atmospheric Data...
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="text-white font-black text-xl uppercase tracking-tighter">
              Alert: <span className="text-[#EF4444]">{city} Sector</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium italic">
              "{forecast}"
            </p>
            <div className="flex gap-4 pt-4 border-t border-white/5 opacity-60">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <CloudRain size={14} /> {stats?.condition?.toUpperCase() || "STABLE"}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Wind size={14} /> AQI: {stats?.aqi || "N/A"}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
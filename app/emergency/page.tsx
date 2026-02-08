"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  PhoneCall, 
  ShieldAlert, 
  Ambulance, 
  Flame, 
  CloudLightning, 
  UserRoundCheck, 
  Building, 
  ArrowLeft,
  LifeBuoy,
  Siren,
  AlertTriangle
} from "lucide-react";

import { LoadingScreen } from "@/components/loading-screen";

const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%23EF4444' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 28, auto`;

const EMERGENCY_CONTACTS = [
  {
    service: "Police",
    number: "119",
    desc: "National emergency response for crime and safety incidents.",
    icon: ShieldAlert,
    color: "#3B82F6",
    priority: "CRITICAL"
  },
  {
    service: "Ambulance",
    number: "1990",
    desc: "Suwa Seriya Pre-Hospital Care for medical emergencies.",
    icon: Ambulance,
    color: "#EF4444",
    priority: "CRITICAL"
  },
  {
    service: "Fire & Rescue",
    number: "110",
    desc: "Rapid response for fire incidents and structural extraction.",
    icon: Flame,
    color: "#F97316",
    priority: "CRITICAL"
  },
  {
    service: "Disaster Management",
    number: "117",
    desc: "Reporting floods, landslides, and climate-related crises.",
    icon: CloudLightning,
    color: "#10B981",
    priority: "HIGH"
  },
  {
    service: "Women & Child Protection",
    number: "1938 / 1929",
    desc: "Dedicated helplines for domestic protection and child safety.",
    icon: UserRoundCheck,
    color: "#EC4899",
    priority: "HIGH"
  },
  {
    service: "Municipal Council",
    number: "037-2281273",
    desc: "Local infrastructure, waste management, and council services.",
    icon: Building,
    color: "#8B5CF6",
    priority: "STABLE"
  }
];

export default function EmergencyPage() {
  return (
    <LoadingScreen>
      <div 
        className="relative min-h-screen w-full bg-[#0B0F1A] overflow-y-auto overflow-x-hidden flex flex-col"
        style={{ cursor: SDG_CURSOR }}
      >
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-500/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <main className="relative z-10 pt-24 pb-32 px-6 max-w-6xl mx-auto w-full">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div className="space-y-4">
              <Link href="/protected">
                <motion.button
                  whileHover={{ x: -5, color: "#EF4444" }}
                  className="flex items-center gap-2 text-slate-500 text-[10px] font-bold tracking-[0.4em] uppercase transition-colors mb-6"
                >
                  <ArrowLeft size={16} /> System_Return
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-3 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] font-black tracking-widest uppercase w-fit">
                <Siren className="w-3 h-3 animate-bounce" />
                Emergency Services Terminal
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">
                RESILIENT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">RESPONSE</span>
              </h1>
            </div>

            <div className="hidden lg:block text-right">
              <p className="text-slate-600 font-mono text-[9px] uppercase tracking-[0.5em] mb-2">Network_Status: PRIORITY_ACTIVE</p>
              <div className="flex gap-2 justify-end">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-1 bg-red-500/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-red-500"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EMERGENCY_CONTACTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/[0.02] backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.05] transition-all hover:border-red-500/30"
              >
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <item.icon size={32} />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{item.service}</h3>
                    <span className={`text-[8px] font-bold px-2 py-0.5 rounded-md border ${
                      item.priority === 'CRITICAL' ? 'text-red-500 border-red-500/30 bg-red-500/10' : 'text-slate-400 border-white/10'
                    }`}>
                      {item.priority}
                    </span>
                  </div>

                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 h-12">
                    {item.desc}
                  </p>

                  <a 
                    href={`tel:${item.number.split(' / ')[0]}`}
                    className="flex items-center justify-between w-full bg-white/5 group-hover:bg-white text-white group-hover:text-black p-5 rounded-2xl transition-all"
                  >
                    <span className="text-2xl font-black tracking-tighter">{item.number}</span>
                    <PhoneCall size={20} className="group-hover:animate-shake" />
                  </a>
                </div>

                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AlertTriangle size={80} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gradient-to-br from-red-500 to-red-700 p-10 rounded-[3rem] text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
               <LifeBuoy size={120} className="opacity-20 absolute -right-10 -bottom-10" />
               <div className="relative z-10 bg-black/20 p-6 rounded-3xl backdrop-blur-md">
                 <ShieldAlert size={40} />
               </div>
               <div className="relative z-10">
                 <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Citizen Safety Protocol</h4>
                 <p className="text-white/80 text-sm leading-relaxed max-w-xl font-medium">
                   ASMO Emergency Terminal is linked to national response networks. In the event of a regional disaster, please use the Disaster Management (117) line for real-time evacuation routes and relief center coordinates.
                 </p>
               </div>
            </div>

            <div className="bg-[#1E293B]/40 border border-white/5 p-10 rounded-[3rem] flex flex-col justify-between">
              <div>
                <h4 className="text-white font-black uppercase tracking-tighter text-xl mb-4">Uplink Help</h4>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest leading-relaxed">
                  System Target 11.5: Reduce the number of people affected by disasters.
                </p>
              </div>
              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest leading-relaxed">
                  Location Verified: Kuliyapitiya Hub // Sector_01
                </p>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-16 border-t border-white/5 text-center">
            <p className="text-slate-800 font-mono text-[9px] uppercase tracking-[0.6em] mb-4">
              Providing Resilient Infrastructure for SDG 11
            </p>
            <div className="flex justify-center gap-8 opacity-20">
               <ShieldAlert size={24} className="text-white" />
               <Ambulance size={24} className="text-white" />
               <Building size={24} className="text-white" />
            </div>
          </div>

        </main>
      </div>
    </LoadingScreen>
  );
}
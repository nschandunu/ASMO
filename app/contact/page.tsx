"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Terminal,
  Share2,
  ExternalLink
} from "lucide-react";

import { PremiumNavbar } from "@/components/premium-navbar";
import { Footer } from "@/components/footer";

const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

const SOCIALS = [
  {
    name: "GitHub",
    icon: Github,
    handle: "@Velovs",
    link: "https://github.com",
    color: "#ffffff",
    description: "Source code for Elena AI, Ghost Liquidity, and CTF writeups."
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    handle: "User Profile",
    link: "https://linkedin.com",
    color: "#0077B5",
    description: "Professional updates on Computer Science and Agentic AI."
  },
  {
    name: "Twitter",
    icon: Twitter,
    handle: "@ASMO_Signal",
    link: "https://twitter.com",
    color: "#1DA1F2",
    description: "Daily tech thoughts and GhostNet project breadcrumbs."
  },
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@GhostNet.AI",
    link: "https://instagram.com",
    color: "#E4405F",
    description: "Behind the scenes: Agentic AI development and creative processes."
  },
  {
    name: "YouTube",
    icon: Youtube,
    handle: "GhostNet Transmission",
    link: "https://youtube.com",
    color: "#FF0000",
    description: "Visualizers for Ghost Liquidity and AI agent demos."
  }
];

export default function ContactPage() {
  const [activeSocial, setActiveSocial] = useState<typeof SOCIALS[0] | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative min-h-screen w-full bg-[#0F172A] overflow-x-hidden"
      style={{ cursor: SDG_CURSOR }}
    >
      <PremiumNavbar />

      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[calc(100vh-100px)]">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#38BDF8]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-[#FD9D24]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

          <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs tracking-[0.3em]">
                <Terminal size={16} />
                <span>UPLINK_STATUS: STABLE</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                SIGNAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD9D24] to-[#F59E0B]">CENTER</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
                Establish a direct connection through our encrypted social nodes. Select a frequency to synchronize.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {SOCIALS.map((social, i) => (
                <motion.button
                  key={social.name}
                  onMouseEnter={() => setActiveSocial(social)}
                  onClick={() => window.open(social.link, '_blank')}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className={`relative aspect-square flex flex-col items-center justify-center rounded-2xl border transition-all duration-500 group ${
                    activeSocial?.name === social.name 
                    ? 'bg-white/10 border-white/20 shadow-[0_0_40px_rgba(56,189,248,0.1)]' 
                    : 'bg-[#1E293B]/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  <social.icon 
                    size={24} 
                    style={{ color: activeSocial?.name === social.name ? social.color : '#475569' }} 
                    className="transition-colors duration-500"
                  />
                  <span className={`text-[9px] font-mono mt-3 uppercase tracking-tighter transition-colors ${
                    activeSocial?.name === social.name ? 'text-white' : 'text-slate-600'
                  }`}>
                    {social.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full aspect-[4/5] bg-[#0F172A]/80 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-5">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/30" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                  <div className="w-2 h-2 rounded-full bg-green-500/30" />
                </div>
                <div className="font-mono text-[9px] text-slate-500 tracking-[0.2em] uppercase">
                  Data_Packet_Reception
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeSocial ? (
                  <motion.div
                    key={activeSocial.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-[#FD9D24] tracking-widest uppercase opacity-70">Frequency_ID</div>
                      <div className="text-3xl font-black text-white tracking-tight uppercase">{activeSocial.name}</div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Node_Data</div>
                        <p className="text-sm text-slate-300 leading-relaxed font-light italic">
                          "{activeSocial.description}"
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Endpoint</div>
                        <div className="text-base font-mono text-cyan-400">{activeSocial.handle}</div>
                      </div>
                    </div>

                    <motion.a
                      href={activeSocial.link}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest transition-transform"
                    >
                      Establish_Link <ExternalLink size={14} />
                    </motion.a>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20">
                    <Share2 size={40} className="text-slate-500 mb-6 animate-pulse" />
                    <p className="font-mono text-[10px] text-slate-500 tracking-[0.3em] uppercase leading-loose">
                      Scanning for <br /> active transmissions
                    </p>
                  </div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t border-white/5 pt-6">
                <div className="space-y-1">
                  <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Local_Time</div>
                  <div className="text-xs font-mono text-slate-400">{currentTime}</div>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Signal_Prot</div>
                  <div className="text-xs font-mono text-green-500">ENCRYPTED</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
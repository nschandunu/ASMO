"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, AlertTriangle, X, Leaf, Building2, Bus, Recycle } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   BACKGROUND EFFECTS (Shared from Auth Pages)
   ═══════════════════════════════════════════════════════════════════════════ */
const FloatingSDGIcons = () => {
  const icons = [
    { Icon: Leaf, color: "#22C55E", x: "15%", y: "20%", delay: 0 },
    { Icon: Building2, color: "#38BDF8", x: "80%", y: "15%", delay: 1 },
    { Icon: Bus, color: "#FD9D24", x: "25%", y: "80%", delay: 2 },
    { Icon: Recycle, color: "#8B5CF6", x: "75%", y: "75%", delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon size={48} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   SLEEPING PANDA COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const SleepingPanda = () => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-8">
      {/* Soft Breathing Glow */}
      <motion.div 
        className="absolute inset-0 bg-[#38BDF8]/20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG Panda */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10 drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Breathing Animation Group */}
        <motion.g
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Ears */}
          <circle cx="40" cy="50" r="25" fill="#1E293B" />
          <circle cx="160" cy="50" r="25" fill="#1E293B" />
          <circle cx="40" cy="50" r="15" fill="#334155" />
          <circle cx="160" cy="50" r="15" fill="#334155" />

          {/* Head */}
          <circle cx="100" cy="110" r="80" fill="white" />
          
          {/* Face */}
          <g id="face">
            {/* Eye Patches */}
            <ellipse cx="65" cy="100" rx="25" ry="35" fill="#1E293B" transform="rotate(-15 65 100)" />
            <ellipse cx="135" cy="100" rx="25" ry="35" fill="#1E293B" transform="rotate(15 135 100)" />
            
            {/* Sleeping Eyes (Closed Arcs) */}
            <path d="M55 100 Q65 105 75 100" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M125 100 Q135 105 145 100" stroke="white" strokeWidth="3" strokeLinecap="round" />

            {/* Nose */}
            <ellipse cx="100" cy="130" rx="12" ry="8" fill="#1E293B" />
            
            {/* Mouth (Small 'o' for snoring) */}
            <circle cx="100" cy="145" r="4" fill="#1E293B" />
            
            {/* Blush */}
            <ellipse cx="45" cy="125" rx="10" ry="6" fill="#FD9D24" opacity="0.3" />
            <ellipse cx="155" cy="125" rx="10" ry="6" fill="#FD9D24" opacity="0.3" />
          </g>

          {/* Paws (Tucked in) */}
          <ellipse cx="60" cy="160" rx="20" ry="15" fill="#1E293B" />
          <ellipse cx="140" cy="160" rx="20" ry="15" fill="#1E293B" />
        </motion.g>

        {/* Zzz Animation */}
        <motion.g
          initial={{ opacity: 0, x: 120, y: 80, scale: 0.5 }}
          animate={{ 
            opacity: [0, 1, 0], 
            x: 150, 
            y: 40, 
            scale: 1.5 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 0.5
          }}
        >
          <text x="0" y="0" fill="#38BDF8" fontSize="24" fontFamily="monospace" fontWeight="bold">Z</text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, x: 130, y: 90, scale: 0.5 }}
          animate={{ 
            opacity: [0, 1, 0], 
            x: 160, 
            y: 50, 
            scale: 1.2 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: 1.5
          }}
        >
          <text x="0" y="0" fill="#38BDF8" fontSize="18" fontFamily="monospace" fontWeight="bold">z</text>
        </motion.g>
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   VIDEO MODAL COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
const VideoModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-3xl bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#1E293B]/50">
          <h3 className="text-[#FD9D24] font-bold text-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Told you not to click!
          </h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video w-full">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/9jWv4MXpZ0U?autoplay=1&rel=0" 
            title="Muhehehehe" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN 404 PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
export default function NotFound() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0F172A] relative overflow-hidden p-6">
      
      {/* Ambient Background */}
      <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-[#38BDF8]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-[#FD9D24]/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
      <FloatingSDGIcons />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg">
        
        <SleepingPanda />

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-4"
        >
          404
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-white mb-3"
        >
          Lost in the Grid?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-sm md:text-base leading-relaxed mb-10"
        >
          We can't seem to find the page you're looking for. It might be under construction or lost in the sustainable urban sprawl.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-[#FD9D24] to-[#F59E0B] rounded-xl text-white font-bold shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform active:scale-95 flex items-center gap-2 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Home className="w-4 h-4" /> Return Home
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>
          </Link>

          <button 
            onClick={() => setShowVideo(true)}
            className="px-8 py-3 bg-[#1E293B]/50 border border-red-500/30 rounded-xl text-red-400 font-medium hover:bg-red-500/10 hover:text-red-300 transition-colors flex items-center gap-2 group"
          >
            <AlertTriangle className="w-4 h-4 group-hover:animate-bounce" /> 
            Don't Click
          </button>
        </motion.div>

        {/* System Status Decor */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 font-mono text-[10px] tracking-widest uppercase">
            PATHWAY_DISCONNECTED
          </span>
        </motion.div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
      </AnimatePresence>
    </div>
  );
}
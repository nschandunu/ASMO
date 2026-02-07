"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowUpRight, 
  Heart,
  X,
  Play
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   CURSOR CONFIG
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

/* ═══════════════════════════════════════════════════════════════════════════
   VIDEO MODAL (SECRET)
   ═══════════════════════════════════════════════════════════════════════════ */
const SecretVideoModal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-[#FD9D24]/50 shadow-[0_0_50px_rgba(253,157,36,0.2)]"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-[#FD9D24] transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/HwVh8pmOot4?autoplay=1&rel=0"
        title="Secret Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   FOOTER COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
export function Footer() {
  const [showSecret, setShowSecret] = useState(false);
  const pathname = usePathname();

  // ─── SMOOTH SCROLL HANDLER ──────────────────────────────────────────
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      
      if (pathname === path || (path === "" && hash)) {
        e.preventDefault();
        const targetId = hash;
        const elem = document.getElementById(targetId);
        
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else if (targetId === "") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };
  // ────────────────────────────────────────────────────────────────────

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Home", href: "/#Home" },
    { label: "About", href: "/#about" }, 
    { label: "Contact", href: "/contact" },
  ];

  const interactionLinks = [
    { label: "Chat", href: "/interactions/chat" },
    { label: "News", href: "/interactions/news" },
    { label: "Events", href: "/interactions/events" },
    { label: "Connect", href: "/interactions/connect" },
  ];

  return (
    <footer 
      className="relative bg-[#0F172A] pt-24 pb-12 overflow-hidden border-t border-white/5"
      style={{ cursor: SDG_CURSOR }}
    >
      
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* ── Background Ambience ────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#FD9D24]/5 rounded-full blur-[100px]" />
        <svg className="absolute top-0 left-0 w-full h-16 text-[#1E293B]/50 transform -translate-y-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
           <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* ── LEFT: SDG Quote ────────────────────────────────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold tracking-widest uppercase mb-6 w-fit"
              >
                <Heart className="w-3 h-3 fill-current" />
                SDG 11: Sustainable Cities
              </motion.div>
              
              <motion.blockquote 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-light text-white leading-tight"
              >
                "Make cities and human settlements <span className="text-[#38BDF8] font-semibold">inclusive</span>, <span className="text-[#FD9D24] font-semibold">safe</span>, <span className="text-[#22C55E] font-semibold">resilient</span> and <span className="text-[#8B5CF6] font-semibold">sustainable</span>."
              </motion.blockquote>
            </div>
            
            <div className="mt-8">
              {/* UPDATED: Increased size to text-9xl */}
              <span className="font-black tracking-tighter text-white/10 text-9xl select-none block leading-none">
                ASMO.
              </span>
            </div>
          </div>

          {/* ── MIDDLE: Links ──────────────────────────────────────────── */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FD9D24]" /> Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, i) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-[#FD9D24] transition-all duration-300" />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Interactions */}
            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" /> Interaction
              </h4>
              <ul className="space-y-4">
                {interactionLinks.map((link, i) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                  >
                    <Link href={link.href} className="group flex items-center gap-2 text-slate-400 hover:text-[#38BDF8] transition-colors">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: Socials ─────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F472B6]" /> Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1E293B] border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Copyright (Interactive) ──────────────────────────── */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <button 
            onClick={() => setShowSecret(true)}
            className="group relative text-slate-500 hover:text-white text-sm transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              &copy; {new Date().getFullYear()} GhostNet Inc. All rights reserved.
              <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:text-[#FD9D24] transition-all" />
            </span>
            
            {/* Secret Glitch Effect on Hover */}
            <span className="absolute inset-0 bg-[#FD9D24]/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSecret && <SecretVideoModal onClose={() => setShowSecret(false)} />}
      </AnimatePresence>
    </footer>
  );
}

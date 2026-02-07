"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Leaf, 
  Bike, 
  Building2, 
  TreePine, 
  Zap, 
  Recycle 
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   CURSOR CONFIG
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

/* ═══════════════════════════════════════════════════════════════════════════
   FLOATING ICONS CONFIGURATION
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_ICONS = [
  { Icon: Leaf, x: "5%", y: "15%", size: 24, color: "#22C55E", delay: 0 },
  { Icon: Bike, x: "90%", y: "10%", size: 22, color: "#38BDF8", delay: 0.5 },
  { Icon: Building2, x: "94%", y: "45%", size: 28, color: "#8B5CF6", delay: 1 },
  { Icon: TreePine, x: "3%", y: "60%", size: 24, color: "#22C55E", delay: 1.5 },
  { Icon: Zap, x: "10%", y: "85%", size: 20, color: "#FBBF24", delay: 0.8 },
  { Icon: Recycle, x: "85%", y: "80%", size: 20, color: "#22C55E", delay: 1.2 },
  { Icon: Building2, x: "48%", y: "90%", size: 18, color: "#38BDF8", delay: 2 }, 
  { Icon: Leaf, x: "52%", y: "5%", size: 18, color: "#22C55E", delay: 2.5 },
];

const FloatingSDGIcons = () => (
  <>
    {SDG_ICONS.map((item, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none z-[1]"
        style={{ left: item.x, top: item.y }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: [0.1, 0.3, 0.1],
          scale: 1,
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0],
        }}
        viewport={{ once: false }}
        transition={{
          opacity: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8 + i, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.6, delay: item.delay },
        }}
      >
        <item.Icon size={item.size} color={item.color} strokeWidth={1.5} />
      </motion.div>
    ))}
  </>
);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const text = "ASMO is the living intelligence of the city. It learns from citizens, adapts in real time, and turns everyday urban actions into collective progress toward more inclusive, resilient, and sustainable cities.";
  const words = text.split(" ");

  // ─── TITLE ANIMATION VARIANTS ─────────────────────────────────────────────
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleItemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 20,
        duration: 1,
      },
    },
  };
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative w-full -mt-10 pt-32 pb-24 lg:pt-36 lg:pb-32 bg-[#0F172A] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-16 before:bg-gradient-to-b before:from-[#0F172A] before:to-transparent before:content-[''] before:pointer-events-none"
      style={{ cursor: SDG_CURSOR }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FD9D24]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#38BDF8]/5 rounded-full blur-[120px]" />
        <FloatingSDGIcons />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center relative">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#FD9D24]"></span>
              <span className="text-[#FD9D24] text-sm font-bold tracking-widest uppercase">
                Our Mission
              </span>
            </motion.div>

            {/* ─── ANIMATED TITLE ───────────────────────────────────────── */}
            <motion.div 
              className="relative mb-8"
              variants={titleContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-7xl sm:text-8xl md:text-9xl font-black leading-[0.85] tracking-tighter overflow-hidden">
                <motion.span 
                  variants={titleItemVariants}
                  className="block text-transparent bg-clip-text"
                  style={{ 
                    WebkitTextStroke: "1px rgba(248, 250, 252, 0.2)",
                    color: "transparent"
                  }}
                >
                  ABOUT
                </motion.span>
                <motion.span 
                  variants={titleItemVariants}
                  className="block text-[#F8FAFC]"
                >
                  ASMO
                </motion.span>
              </h2>
            </motion.div>
            {/* ──────────────────────────────────────────────────────────── */}

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg max-w-lg mb-10 leading-relaxed border-l-2 border-[#38BDF8]/30 pl-6 cursor-default"
            >
              {words.map((word, i) => (
                <span 
                  key={i} 
                  className="inline-block mr-1.5 last:mr-0 text-slate-400/50 transition-colors duration-200 hover:text-slate-100 hover:scale-105 transform origin-center"
                >
                  {word}
                </span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/10 rounded-full overflow-hidden hover:border-[#FD9D24]/50 transition-colors duration-300">
                <span className="absolute inset-0 bg-[#FD9D24]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-white font-medium group-hover:text-[#FD9D24] transition-colors">
                  Read Our Story
                </span>
                <ArrowRight className="w-5 h-5 text-[#FD9D24] relative z-10 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative h-[500px] lg:h-[600px] w-full flex justify-center gap-4 lg:gap-6">
            <motion.div 
              style={{ y: y1 }}
              className="relative w-1/3 h-[80%] mt-auto rounded-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0F172A]/20 z-10" />
              <Image 
                src="/assets/city.webp" 
                alt="City Slice 1"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-110 transform"
                style={{ objectPosition: "20% 50%" }}
              />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="relative w-1/3 h-full rounded-none overflow-hidden border-y border-[#FD9D24]/30"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A] z-10 opacity-60" />
              <Image 
                src="/assets/city.webp" 
                alt="City Slice 2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                style={{ objectPosition: "50% 50%" }}
              />
              <div className="absolute bottom-8 left-0 w-full text-center z-20">
                <p className="text-xs font-bold text-[#FD9D24] tracking-[0.2em] uppercase">
                  Future Ready
                </p>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: y3 }}
              className="relative w-1/3 h-[80%] mb-auto rounded-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0F172A]/20 z-10" />
              <Image 
                src="/assets/city.webp" 
                alt="City Slice 3"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-110 transform"
                style={{ objectPosition: "80% 50%" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
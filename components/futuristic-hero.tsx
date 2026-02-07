"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from "framer-motion";
import {
  MessageSquare,
  Trophy,
  Layers,
  Users,
  Leaf,
  Building2,
  TreePine,
  Bike,
  Zap,
  Recycle,
} from "lucide-react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════════════════════
   1. SPOTLIGHT & CURSOR CONFIG
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

const Spotlight = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(56,189,248,0.08), transparent 40%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="absolute inset-0 z-[2] pointer-events-none transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at 50% 50%, rgba(56,189,248,0.08), transparent 40%)`,
      }}
    />
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   2. INTERACTIVE GRID
   ═══════════════════════════════════════════════════════════════════════════ */
const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: { x: number; y: number; originX: number; originY: number }[] = [];

    const spacing = 40;
    const radius = 200;
    const strength = 100;

    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      points = [];
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          points.push({ x: i * spacing, y: j * spacing, originX: i * spacing, originY: j * spacing });
        }
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(248, 250, 252, 0.06)";
      ctx.lineWidth = 1;
      const mouse = mouseRef.current;
      for (const p of points) {
        const dx = mouse.x - p.originX;
        const dy = mouse.y - p.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius) {
          const angle = Math.atan2(dy, dx);
          const force = (radius - dist) / radius;
          const ease = force * force;
          p.x = p.originX - Math.cos(angle) * strength * ease;
          p.y = p.originY - Math.sin(angle) * strength * ease;
        } else {
          p.x += (p.originX - p.x) * 0.1;
          p.y += (p.originY - p.y) * 0.1;
        }
      }
      ctx.beginPath();
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      for (let i = 0; i < cols - 1; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          const rightIdx = (i + 1) * rows + j;
          if (points[idx] && points[rightIdx]) {
            ctx.moveTo(points[idx].x, points[idx].y);
            ctx.lineTo(points[rightIdx].x, points[rightIdx].y);
          }
        }
      }
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows - 1; j++) {
          const idx = i * rows + j;
          const bottomIdx = i * rows + (j + 1);
          if (points[idx] && points[bottomIdx]) {
            ctx.moveTo(points[idx].x, points[idx].y);
            ctx.lineTo(points[bottomIdx].x, points[bottomIdx].y);
          }
        }
      }
      ctx.stroke();
      animationFrameId = requestAnimationFrame(draw);
    };

    initGrid();
    window.addEventListener("resize", initGrid);
    draw();
    return () => {
      window.removeEventListener("resize", initGrid);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ═══════════════════════════════════════════════════════════════════════════
   3. TYPING EFFECT
   ═══════════════════════════════════════════════════════════════════════════ */
const ROTATING_WORDS = ["Transform it", "Grow it", "Heal it", "Shape it"];

const TypingEffect = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROTATING_WORDS[wordIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), 50);
    } else {
      timeout = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), 80);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="inline-flex items-baseline">
      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FD9D24] to-[#FBBF24]">
        {text}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-[#FD9D24] ml-0.5 relative top-[0.05em]"
      />
    </span>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   4. FLOATING SDG ICONS
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_ICONS = [
  { Icon: Leaf, x: "8%", y: "20%", size: 22, color: "#22C55E", delay: 0 },
  { Icon: Bike, x: "85%", y: "18%", size: 20, color: "#38BDF8", delay: 0.5 },
  { Icon: Building2, x: "92%", y: "55%", size: 24, color: "#8B5CF6", delay: 1 },
  { Icon: TreePine, x: "5%", y: "65%", size: 20, color: "#22C55E", delay: 1.5 },
  { Icon: Zap, x: "15%", y: "85%", size: 18, color: "#FBBF24", delay: 0.8 },
  { Icon: Recycle, x: "88%", y: "82%", size: 18, color: "#22C55E", delay: 1.2 },
];

const FloatingSDGIcons = () => (
  <>
    {SDG_ICONS.map((item, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none z-[5]"
        style={{ left: item.x, top: item.y }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: 1,
          y: [0, -12, 0],
          rotate: [0, 10, -10, 0],
        }}
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

/* ═══════════════════════════════════════════════════════════════════════════
   5. SDG 11 BADGE
   ═══════════════════════════════════════════════════════════════════════════ */
const SDGBadge = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    className="absolute top-28 sm:top-32 right-4 sm:right-8 z-20 hidden sm:flex"
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative group"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg shadow-[#F59E0B]/20 border border-[#FBBF24]/30">
        <div className="text-center leading-none">
          <span className="text-[8px] font-bold text-white/80 block">SDG</span>
          <span className="text-lg font-black text-white">11</span>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-[#F59E0B]"
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="absolute right-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#1E293B] border border-white/10 rounded-lg px-3 py-2 text-[10px] text-white/80 whitespace-nowrap">
          Sustainable Cities & Communities
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   6. SDG 11 TICKER
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG11_FACTS = [
  "🏙️ SDG 11: Make cities inclusive, safe, resilient, and sustainable",
  "🌍 68% of the world's population will live in urban areas by 2050",
  "🏘️ Over 1 billion people currently live in slums or informal settlements",
  "🚌 Only 52% of urban populations have convenient access to public transport",
  "💨 Cities consume 75% of global energy and produce 70% of CO₂ emissions",
  "🌳 Green public spaces reduce urban heat by up to 5°C",
  "♻️ Cities generate 2 billion tonnes of solid waste yearly — 3.4B by 2050",
  "🏗️ Resilient infrastructure saves $4 for every $1 invested in prevention",
  "🚲 Cycling infrastructure can cut urban transport emissions by up to 11%",
  "🏛️ 156 countries now have national urban policies — up 40% since 2018",
  "🌊 90% of urban expansion in developing nations is near hazard-prone areas",
  "💡 LED street lighting alone cuts a city's energy use by 50%",
];

const SDG11Ticker = () => (
  <div className="relative z-40 w-full shrink-0 overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E293B]/90 to-[#0F172A] border-t border-white/10">
    <motion.div
      className="flex gap-16 py-2.5 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
    >
      {[...SDG11_FACTS, ...SDG11_FACTS].map((item, i) => (
        <span key={i} className="text-xs sm:text-sm text-white/50 font-medium tracking-wide">
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   7. HOLOGRAPHIC TILT BUBBLE
   ═══════════════════════════════════════════════════════════════════════════ */
interface FeatureData {
  id: number;
  title: string;
  text: string;
  icon: React.ElementType;
  color: string;
}

const DraggableFeatureBubble = ({
  feature,
  index,
  side,
  constraintsRef,
}: {
  feature: FeatureData;
  index: number;
  side: "left" | "right";
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const Icon = feature.icon;
  const roundedCorner = side === "left" ? "rounded-bl-none" : "rounded-br-none";
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000, zIndex: 20 }}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      dragMomentum={false}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      whileHover={{ scale: 1.05, cursor: "grab" }}
      className={`group relative p-4 rounded-2xl ${roundedCorner} border bg-[#1E293B]/80 border-[#38BDF8]/20 backdrop-blur-md flex items-center gap-3 w-[260px] shadow-2xl hover:border-[#FD9D24]/50 transition-colors duration-300 touch-none select-none`}
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
        style={{ mixBlendMode: 'overlay' }}
      />
      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#0F172A] border border-white/5 relative z-10">
        <Icon size={18} style={{ color: feature.color }} />
      </div>
      <div className="relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-80" style={{ color: feature.color }}>
          {feature.title}
        </p>
        <p className="text-xs text-[#F8FAFC] font-medium leading-snug">{feature.text}</p>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

const FEATURES: FeatureData[] = [
  { id: 1, title: "City Interaction", text: "How can I help you today?", icon: MessageSquare, color: "#38BDF8" },
  { id: 2, title: "Rewards System", text: "+500 civic points earned!", icon: Trophy, color: "#FD9D24" },
  { id: 3, title: "SDG 11 Layers", text: "Analyzing sustainable data...", icon: Layers, color: "#38BDF8" },
  { id: 4, title: "Community", text: "3 neighbors active nearby.", icon: Users, color: "#F8FAFC" },
];

const BUBBLE_PLACEMENTS = [
  { bottom: "60%", left: "0%", side: "left" as const },
  { bottom: "20%", left: "-5%", side: "left" as const },
  { bottom: "60%", right: "0%", side: "right" as const },
  { bottom: "20%", right: "-5%", side: "right" as const },
];

export function FuturisticHero() {
  const [mounted, setMounted] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative h-[100dvh] w-screen max-w-full bg-[#0F172A] overflow-hidden flex flex-col"
      style={{ cursor: SDG_CURSOR }}
    >
      {/* ── BACKGROUND ──────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight />
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#38BDF8]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-[#FD9D24]/10 rounded-full blur-[100px]" />
        <InteractiveGrid />
        <FloatingSDGIcons />
      </div>

      <div ref={constraintsRef} className="absolute inset-0" />
      <SDGBadge />

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-between pt-24 sm:pt-28 min-h-0">
        
        {/* ── HEADLINE ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center px-6 shrink-0 z-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F8FAFC] tracking-tight leading-snug">
            Experience Your City,{" "}
            <br className="sm:hidden" />
            <TypingEffect />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-sm sm:text-base text-white/40 font-light max-w-lg mx-auto"
          >
            Building sustainable, inclusive, and resilient cities — together.
          </motion.p>
        </motion.div>

        {/* ── CHARACTER + FEATURES AREA ─────────────────────────── */}
        <div className="relative w-full flex-1 flex items-end justify-center min-h-0">
          
          <div className="relative w-[500px] h-[250px] sm:w-[700px] sm:h-[350px] lg:w-[900px] lg:h-[450px] flex items-end justify-center">
            
            {/* SVG Arc Background */}
            <svg viewBox="0 0 900 450" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMax meet">
              <defs>
                <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="arc-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path d="M 0 450 A 450 450 0 0 1 900 450 Z" fill="url(#arc-grad)" />
              <path d="M 0 450 A 450 450 0 0 1 900 450" fill="none" stroke="url(#arc-stroke)" strokeWidth="2" />
              <motion.path
                d="M 100 450 A 350 350 0 0 1 800 450"
                fill="none" stroke="url(#arc-stroke)" strokeWidth="1" strokeDasharray="8 6"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path
                d="M -30 450 A 480 480 0 0 1 930 450"
                fill="none" stroke="#22C55E" strokeWidth="0.5" strokeDasharray="3 8"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </svg>

            {/* CHARACTER IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 flex items-end justify-center h-full w-full"
            >
              <Image
                src="/assets/gg.webp"
                alt="AI Character"
                width={480}
                height={600}
                className="object-contain max-h-full drop-shadow-[0_0_40px_rgba(56,189,248,0.3)]"
                priority
              />
              <div className="absolute bottom-0 w-[200px] sm:w-[300px] h-[20px] bg-[#38BDF8] blur-[40px] opacity-40 rounded-full" />
            </motion.div>

            {/* Feature Bubbles (Desktop) */}
            {FEATURES.map((f, i) => {
              const placement = BUBBLE_PLACEMENTS[i];
              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="hidden lg:block absolute z-20 pointer-events-auto"
                  style={{
                    bottom: placement.bottom,
                    ...(placement.left !== undefined ? { left: placement.left } : {}),
                    ...(placement.right !== undefined ? { right: placement.right } : {}),
                  }}
                >
                  <DraggableFeatureBubble
                    feature={f}
                    index={i}
                    side={placement.side}
                    constraintsRef={constraintsRef}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Feature Bar */}
          <div className="lg:hidden absolute bottom-10 w-full flex justify-center gap-3 px-4 z-30 pointer-events-auto">
            <div className="flex gap-3 overflow-x-auto pb-2 w-full justify-center scrollbar-hide">
              {FEATURES.map((f) => (
                <motion.div
                  key={f.id}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0}
                  dragMomentum={false}
                  whileDrag={{ scale: 1.1, zIndex: 50 }}
                  className="shrink-0 p-3 rounded-xl bg-[#1E293B]/90 border border-white/10 backdrop-blur-md flex items-center gap-2 cursor-grab active:cursor-grabbing touch-none select-none"
                >
                  <f.icon size={14} style={{ color: f.color }} />
                  <span className="text-xs text-white whitespace-nowrap font-medium">{f.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SDG11Ticker />
    </section>
  );
}
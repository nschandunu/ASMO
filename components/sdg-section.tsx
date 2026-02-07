"use client";

<<<<<<< HEAD
export function SDGSection() {
  const sdgs = [
    { number: 11, title: "Sustainable Cities", color: "bg-orange-500" },
    { number: 13, title: "Climate Action", color: "bg-green-600" },
    { number: 9, title: "Innovation & Infrastructure", color: "bg-orange-600" },
    { number: 17, title: "Partnerships", color: "bg-blue-700" },
  ];

  return (
    <section className="min-h-screen bg-[#0F172A] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Sustainable Development Goals
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto">
          Our commitment to the UN Sustainable Development Goals drives our mission
          to create positive impact and sustainable change.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <div className={`${sdg.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-white text-2xl font-bold">{sdg.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                SDG {sdg.number}
              </h3>
              <p className="text-slate-400">{sdg.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
import React, { useState, useRef, useEffect } from "react";
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  AnimatePresence 
} from "framer-motion";
import { 
  Home, 
  Bus, 
  ShieldCheck, 
  Trees, 
  Factory, 
  Recycle,
  Globe
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   CURSOR CONFIG
   ═══════════════════════════════════════════════════════════════════════════ */
const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

/* ═══════════════════════════════════════════════════════════════════════════
   DATA & CONFIG
   ═══════════════════════════════════════════════════════════════════════════ */
const SECTORS = [
  {
    id: "11.1",
    title: "Safe Housing",
    desc: "Ensure access for all to adequate, safe and affordable housing.",
    stat: "1B+",
    statLabel: "People Need Housing",
    icon: Home,
    color: "#FD9D24"
  },
  {
    id: "11.2",
    title: "Green Transport",
    desc: "Provide access to safe, affordable, accessible and sustainable transport.",
    stat: "52%",
    statLabel: "Access to Transit",
    icon: Bus,
    color: "#38BDF8"
  },
  {
    id: "11.4",
    title: "Heritage",
    desc: "Strengthen efforts to protect and safeguard the world’s cultural heritage.",
    stat: "1,154",
    statLabel: "Heritage Sites",
    icon: ShieldCheck,
    color: "#F472B6"
  },
  {
    id: "11.6",
    title: "Air Quality",
    desc: "Reduce the adverse per capita environmental impact of cities.",
    stat: "99%",
    statLabel: "Polluted Air Exposure",
    icon: Factory,
    color: "#A78BFA"
  },
  {
    id: "11.7",
    title: "Green Spaces",
    desc: "Universal access to safe, inclusive and accessible, green and public spaces.",
    stat: "0.5 ha",
    statLabel: "Per 1000 Residents",
    icon: Trees,
    color: "#22C55E"
  },
  {
    id: "11.b",
    title: "Resilience",
    desc: "Increase number of cities adopting integrated policies for inclusion.",
    stat: "40%",
    statLabel: "Policy Adoption Rise",
    icon: Recycle,
    color: "#FB7185"
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT: Matrix Rain Background (Optimized)
   ═══════════════════════════════════════════════════════════════════════════ */
const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const chars = "10SDG11CITIESTARGETS";
    const charArr = chars.split("");
    const fontSize = 14;
    const columns = width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const delta = currentTime - lastTime;
      if (delta < interval) return;

      lastTime = currentTime - (delta % interval);

      ctx.fillStyle = "rgba(15, 23, 42, 0.1)"; 
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        const colors = ["#38BDF8", "#22C55E", "#1E293B"];
        
        if (Math.random() > 0.1) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    draw(0);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" />;
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT: 3D Sector Card (With Mobile Click Handler)
   ═══════════════════════════════════════════════════════════════════════════ */
const SectorCard = ({ 
  item, 
  onHover, 
  onClick,
  isActive 
}: { 
  item: typeof SECTORS[0], 
  onHover: (id: string | null) => void,
  onClick: (id: string) => void,
  isActive: boolean
}) => {
  const Icon = item.icon;
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    if (window.innerWidth >= 1024) {
      onHover(null);
    }
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(item.id)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group h-64 w-full cursor-pointer z-10 select-none tap-highlight-transparent"
    >
      <div 
        className={`absolute inset-0 bg-[#1E293B]/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${isActive ? 'border-white/40 shadow-2xl shadow-cyan-500/20' : 'border-white/5 group-hover:border-white/20'}`}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`,
            opacity: isActive ? 0.15 : 0 
          }}
        />

        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className={`p-3 rounded-lg bg-[#0F172A] border border-white/10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
              <Icon size={24} style={{ color: item.color }} />
            </div>
            <span className={`text-xs font-mono transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
              TARGET {item.id}
            </span>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-100 group-hover:text-cyan-400'}`}>
              {item.title}
            </h3>
            <p className={`text-sm leading-relaxed line-clamp-3 transition-colors ${isActive ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-300'}`}>
              {item.desc}
            </p>
          </div>

          <div 
            className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-300" 
            style={{ 
              backgroundColor: item.color,
              height: isActive ? '4px' : '0px',
              opacity: isActive ? 1 : 0
            }}
          />
          {!isActive && (
             <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ backgroundColor: item.color }} />
          )}
        </div>
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT: Mobile Detail Card (Accordion Style)
   ═══════════════════════════════════════════════════════════════════════════ */
const MobileDetailCard = ({ item }: { item: typeof SECTORS[0] }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0, marginTop: 0 }}
      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
      exit={{ height: 0, opacity: 0, marginTop: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden rounded-xl bg-[#0F172A] border border-white/20 lg:hidden shadow-inner"
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 font-mono text-xs font-bold tracking-widest">SYSTEM STATUS</span>
          </div>
          <span className="text-xs font-mono text-slate-500">#{item.id}</span>
        </div>

        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 block">
              {item.stat}
            </span>
            <p className="text-xs font-mono text-slate-400 mt-1 border-l-2 pl-2" style={{ borderColor: item.color }}>
              {item.statLabel}
            </p>
          </div>
          <item.icon size={32} style={{ color: item.color, opacity: 0.2 }} />
        </div>

        <div className="space-y-1">
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full"
              style={{ backgroundColor: item.color }}
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-1">
            <span>IMPACT METRIC</span>
            <span>75%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT: Data Sidebar (Desktop Only)
   ═══════════════════════════════════════════════════════════════════════════ */
const DataSidebar = ({ activeId }: { activeId: string | null }) => {
  const activeItem = SECTORS.find(s => s.id === activeId) || SECTORS[0]; 

  return (
    <div className="hidden lg:flex w-80 h-[600px] sticky top-32 flex-col gap-6 p-6 rounded-2xl bg-[#0F172A]/50 border border-white/10 backdrop-blur-xl">
      <div className="border-b border-white/10 pb-4">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
          System Status
        </h4>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 font-mono text-sm">ONLINE // MONITORING</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeItem.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <div className="mb-8">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
              {activeItem.stat}
            </span>
            <p className="text-sm font-mono text-slate-400 mt-2 border-l-2 pl-3" style={{ borderColor: activeItem.color }}>
              {activeItem.statLabel}
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full"
                style={{ backgroundColor: activeItem.color }}
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, ease: "circOut" }}
              />
            </div>
            <div className="flex justify-between text-xs font-mono text-slate-500">
              <span>IMPACT METRIC</span>
              <span>75%</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-auto pt-4 border-t border-white/10 opacity-50">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`h-1 w-full rounded-full ${Math.random() > 0.5 ? "bg-slate-600" : "bg-slate-800"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN SECTION COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
export function SDGSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleHover = (id: string | null) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setActiveItem(id);
    }
  };

  const handleClick = (id: string) => {
    setActiveItem(prev => (prev === id ? null : id));
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20,
      },
    },
  } as const;
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <section 
      className="relative w-full min-h-screen bg-[#0F172A] py-32 overflow-hidden"
      style={{ cursor: SDG_CURSOR }}
    >
      <MatrixRain />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Globe className="w-3 h-3" />
            Global Goal 11
          </motion.div>

          {/* ─── ANIMATED TITLE ───────────────────────────────────────── */}
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={titleItemVariants} className="block">
              Sustainable Cities
            </motion.span>
            <motion.span 
              variants={titleItemVariants}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FD9D24] to-[#F59E0B]"
            >
              & Communities
            </motion.span>
          </motion.h2>
          {/* ──────────────────────────────────────────────────────────── */}

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl text-lg"
          >
            By 2050, 70% of the world population will live in cities. ASMO integrates these core targets into your urban lifestyle to ensure that future is bright.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {SECTORS.map((item) => (
              <React.Fragment key={item.id}>
                {/* 1. The Card */}
                <SectorCard 
                  item={item} 
                  onHover={handleHover} 
                  onClick={handleClick}
                  isActive={activeItem === item.id}
                />
                
                {/* 2. The Mobile Accordion (Renders right below the clicked card) */}
                <AnimatePresence>
                  {activeItem === item.id && (
                    <div className="lg:hidden w-full">
                      <MobileDetailCard item={item} />
                    </div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </div>

          {/* Desktop Sticky Sidebar */}
          <DataSidebar activeId={activeItem} />
          
        </div>
      </div>
    </section>
  );
}
>>>>>>> 7c178f9 (feat: UI updates)

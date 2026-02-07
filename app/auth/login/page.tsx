"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Eye, EyeOff, Mail, Lock, User, ArrowRight, 
  Briefcase, MapPin, Calendar, Globe, Check, Apple 
} from "lucide-react";
import { Leaf, Building2, Bus, Recycle } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   CONSTANTS & UTILS
   ═══════════════════════════════════════════════════════════════════════════ */
const FloatingSDGIcons = () => {
  const icons = [
    { Icon: Leaf, color: "#22C55E", x: "10%", y: "10%", delay: 0 },
    { Icon: Building2, color: "#38BDF8", x: "85%", y: "15%", delay: 1 },
    { Icon: Bus, color: "#FD9D24", x: "20%", y: "85%", delay: 2 },
    { Icon: Recycle, color: "#8B5CF6", x: "80%", y: "80%", delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          <item.Icon size={32} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

const PandaAvatar = ({ isBlindfolded }: { isBlindfolded: boolean }) => (
  <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
    <div className="absolute inset-0 bg-[#FD9D24]/20 blur-3xl rounded-full scale-150 animate-pulse" />
    <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="50" r="25" fill="#1E293B" /><circle cx="160" cy="50" r="25" fill="#1E293B" />
      <circle cx="40" cy="50" r="15" fill="#334155" /><circle cx="160" cy="50" r="15" fill="#334155" />
      <circle cx="100" cy="110" r="80" fill="white" />
      <g id="face">
        <ellipse cx="65" cy="100" rx="25" ry="35" fill="#1E293B" transform="rotate(-15 65 100)" />
        <ellipse cx="135" cy="100" rx="25" ry="35" fill="#1E293B" transform="rotate(15 135 100)" />
        <motion.g animate={{ y: isBlindfolded ? 0 : [0, -2, 0], scaleY: isBlindfolded ? 1 : [1, 0.1, 1] }} transition={{ scaleY: { repeat: Infinity, repeatDelay: 3, duration: 0.2 } }}>
          <circle cx="70" cy="95" r="8" fill="white" /><circle cx="72" cy="93" r="3" fill="#1E293B" />
          <circle cx="130" cy="95" r="8" fill="white" /><circle cx="128" cy="93" r="3" fill="#1E293B" />
        </motion.g>
        <ellipse cx="100" cy="130" rx="12" ry="8" fill="#1E293B" />
        <path d="M100 138 V145 Q85 155 80 145" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 145 Q115 155 120 145" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="45" cy="125" rx="10" ry="6" fill="#FD9D24" opacity="0.3" /><ellipse cx="155" cy="125" rx="10" ry="6" fill="#FD9D24" opacity="0.3" />
      </g>
      <motion.g initial={{ y: 100, x: -20, rotate: -20 }} animate={{ y: isBlindfolded ? -35 : 100, x: isBlindfolded ? 15 : -20, rotate: isBlindfolded ? 15 : -20 }} transition={{ type: "spring", stiffness: 120, damping: 15 }}>
        <ellipse cx="40" cy="140" rx="25" ry="30" fill="#1E293B" /><path d="M30 115 Q40 110 50 115" stroke="#334155" strokeWidth="2" /><circle cx="40" cy="135" r="12" fill="#334155" />
      </motion.g>
      <motion.g initial={{ y: 100, x: 20, rotate: 20 }} animate={{ y: isBlindfolded ? -35 : 100, x: isBlindfolded ? -15 : 20, rotate: isBlindfolded ? -15 : 20 }} transition={{ type: "spring", stiffness: 120, damping: 15 }}>
        <ellipse cx="160" cy="140" rx="25" ry="30" fill="#1E293B" /><path d="M150 115 Q160 110 170 115" stroke="#334155" strokeWidth="2" /><circle cx="160" cy="135" r="12" fill="#334155" />
      </motion.g>
    </svg>
  </div>
);

const SocialButtons = () => (
  <div className="grid grid-cols-2 gap-4">
    <motion.button whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 bg-[#1E293B]/50 border border-white/10 rounded-xl py-3 text-white font-medium transition-all hover:border-white/20">
      <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
      Google
    </motion.button>
    <motion.button whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 bg-[#1E293B]/50 border border-white/10 rounded-xl py-3 text-white font-medium transition-all hover:border-white/20">
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.62 1.77.27 2.38 1.02 2.6 1.3-3.27 2-2.73 6.92.57 8.36-.31 1.02-.97 2.45-2.62 4.19zm-3.3-14.5c-.32 1.6-1.55 2.83-2.91 2.85-.36-1.62 1.12-3.1 2.91-2.85z" /></svg>
      Apple
    </motion.button>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // LOGIN STATE
  const [loginPass, setLoginPass] = useState("");
  const [showLoginPass, setShowLoginPass] = useState(false);
  const isLoginBlindfolded = !showLoginPass;

  // SIGNUP STATE
  const [signupData, setSignupData] = useState({
    name: "", email: "", age: "", occupation: "", gender: "", postalCode: "", password: ""
  });
  const [showSignupPass, setShowSignupPass] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const isSignupBlindfolded = !showSignupPass;

  // ─── UPDATED: FLIP HANDLER WITH URL SYNC ──────────────────────────
  const handleFlip = () => {
    const nextState = !isFlipped;
    setIsFlipped(nextState);
    
    // Updates the URL bar without reloading the page
    const nextPath = nextState ? "/auth/sign-up" : "/auth/login";
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", nextPath);
    }
  };
  // ─────────────────────────────────────────────────────────────────

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "email") {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value) && value.length > 0) error = "Invalid email format.";
    }
    if (name === "name" && value.trim().length === 0) error = "Name is required.";
    if (name === "gender" && !value) error = "Selection required.";
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const passChecks = {
    length: signupData.password.length >= 8,
    number: /\d/.test(signupData.password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(signupData.password),
    letter: /[a-zA-Z]/.test(signupData.password),
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4 md:p-8 bg-[#0F172A] overflow-y-auto perspective-1000">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#38BDF8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FD9D24]/10 rounded-full blur-[120px]" />
        <FloatingSDGIcons />
      </div>

      {/* FLIP CONTAINER */}
      <motion.div 
        className="relative w-full max-w-5xl h-auto"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* ── FRONT FACE: LOGIN ────────────────────────────────────────── */}
        <div className="absolute inset-0 w-full h-full backface-hidden" style={{ backfaceVisibility: "hidden" }}>
          <div className="relative w-full bg-[#0F172A]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full">
            
            {/* Left: Mascot & Intro */}
            <div className="w-full md:w-2/5 p-8 md:p-12 bg-gradient-to-br from-[#1E293B]/80 to-[#0F172A]/80 flex flex-col justify-center items-center text-center relative border-b md:border-b-0 md:border-r border-white/5">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
              <div className="relative z-10">
                <PandaAvatar isBlindfolded={isLoginBlindfolded} />
                <h2 className="text-3xl font-black text-white tracking-tight mt-6 mb-2">
                  Welcome Back
                </h2>
                <p className="text-slate-400 text-sm max-w-xs mx-auto">
                  Sign in to continue your contribution to <span className="text-[#FD9D24]">SDG 11</span>.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group/input">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within/input:text-[#FD9D24] transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full bg-[#1E293B]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FD9D24]/50 focus:bg-[#1E293B] transition-all" />
                </div>
                <div className="relative group/input">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within/input:text-[#FD9D24] transition-colors" />
                  <input 
                    type={showLoginPass ? "text" : "password"} 
                    placeholder="Password" 
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                    onFocus={() => setShowLoginPass(false)}
                    className="w-full bg-[#1E293B]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FD9D24]/50 focus:bg-[#1E293B] transition-all [&::-ms-reveal]:hidden"
                  />
                  <button type="button" onClick={() => setShowLoginPass(!showLoginPass)} className="absolute right-4 top-3.5 text-slate-500 hover:text-white transition-colors focus:outline-none">
                    {showLoginPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full relative overflow-hidden bg-gradient-to-r from-[#FD9D24] to-[#F59E0B] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20">
                  <span className="relative z-10 flex items-center justify-center gap-2">Log In <ArrowRight className="w-4 h-4" /></span>
                </motion.button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0F172A] px-2 text-slate-500 font-mono">Or continue with</span></div>
              </div>
              <SocialButtons />

              <div className="mt-8 text-center text-sm text-slate-400">
                Don&apos;t have an account?{" "}
                <button onClick={handleFlip} className="text-[#FD9D24] hover:text-[#F59E0B] font-semibold hover:underline bg-transparent border-none cursor-pointer">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── BACK FACE: SIGNUP ────────────────────────────────────────── */}
        <div className="relative w-full h-full backface-hidden" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          <div className="relative w-full bg-[#0F172A]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full">
            
            {/* Left: Mascot & Intro */}
            <div className="w-full md:w-2/5 p-8 md:p-12 bg-gradient-to-br from-[#1E293B]/80 to-[#0F172A]/80 flex flex-col justify-center items-center text-center relative border-b md:border-b-0 md:border-r border-white/5">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
              <div className="relative z-10">
                <PandaAvatar isBlindfolded={isSignupBlindfolded} />
                <h2 className="text-3xl font-black text-white tracking-tight mt-6 mb-2">
                  Join ASMO
                </h2>
                <p className="text-slate-400 text-sm max-w-xs mx-auto">
                  Create an account to access smart city features and interactions.
                </p>
              </div>
            </div>

            {/* Right: Detailed Form */}
            <div className="w-full md:w-3/5 p-8 md:p-12 relative">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group/input">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="text" name="name" placeholder="Full Name" value={signupData.name} onChange={handleSignupChange} className={`w-full bg-[#1E293B]/50 border rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:bg-[#1E293B] transition-all ${errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-[#FD9D24]/50'}`} />
                    {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                  </div>
                  <div className="relative group/input">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} className={`w-full bg-[#1E293B]/50 border rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:bg-[#1E293B] transition-all ${errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-[#FD9D24]/50'}`} />
                    {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="relative group/input">
                    <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="number" name="age" placeholder="Age" value={signupData.age} onChange={handleSignupChange} className="w-full bg-[#1E293B]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-[#FD9D24]/50 focus:bg-[#1E293B]" />
                  </div>
                  <div className="relative group/input md:col-span-2">
                    <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="text" name="occupation" placeholder="Occupation" value={signupData.occupation} onChange={handleSignupChange} className="w-full bg-[#1E293B]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-[#FD9D24]/50 focus:bg-[#1E293B]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group/input">
                    <select name="gender" value={signupData.gender} onChange={handleSignupChange} className={`w-full bg-[#1E293B]/50 border rounded-xl py-3.5 px-4 pl-4 text-slate-400 focus:text-white focus:outline-none focus:bg-[#1E293B] appearance-none ${errors.gender ? 'border-red-500/50' : 'border-white/10 focus:border-[#FD9D24]/50'}`}>
                      <option value="" disabled>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="prefer_not">Prefer not to say</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div>
                    {errors.gender && <p className="text-red-400 text-xs mt-1 ml-1">{errors.gender}</p>}
                  </div>
                  <div className="relative group/input">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input type="text" name="postalCode" placeholder="Postal Code" value={signupData.postalCode} onChange={handleSignupChange} className="w-full bg-[#1E293B]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-[#FD9D24]/50 focus:bg-[#1E293B]" />
                  </div>
                </div>

                <div className="relative group/input">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input 
                    type={showSignupPass ? "text" : "password"} name="password" placeholder="Password"
                    value={signupData.password} onChange={handleSignupChange} onFocus={() => setShowSignupPass(false)}
                    className="w-full bg-[#1E293B]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white focus:outline-none focus:border-[#FD9D24]/50 focus:bg-[#1E293B] [&::-ms-reveal]:hidden"
                  />
                  <button type="button" onClick={() => setShowSignupPass(!showSignupPass)} className="absolute right-4 top-3.5 text-slate-500 hover:text-white focus:outline-none">
                    {showSignupPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  
                  {signupData.password && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className={`flex items-center text-[10px] ${passChecks.length ? "text-green-400" : "text-slate-500"}`}>{passChecks.length ? <Check className="w-3 h-3 mr-1" /> : <div className="w-3 h-3 mr-1 rounded-full bg-slate-700" />} 8+ Characters</div>
                      <div className={`flex items-center text-[10px] ${passChecks.number ? "text-green-400" : "text-slate-500"}`}>{passChecks.number ? <Check className="w-3 h-3 mr-1" /> : <div className="w-3 h-3 mr-1 rounded-full bg-slate-700" />} Number</div>
                      <div className={`flex items-center text-[10px] ${passChecks.letter ? "text-green-400" : "text-slate-500"}`}>{passChecks.letter ? <Check className="w-3 h-3 mr-1" /> : <div className="w-3 h-3 mr-1 rounded-full bg-slate-700" />} Letter</div>
                      <div className={`flex items-center text-[10px] ${passChecks.symbol ? "text-green-400" : "text-slate-500"}`}>{passChecks.symbol ? <Check className="w-3 h-3 mr-1" /> : <div className="w-3 h-3 mr-1 rounded-full bg-slate-700" />} Symbol</div>
                    </div>
                  )}
                </div>

                <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full relative overflow-hidden bg-gradient-to-r from-[#FD9D24] to-[#F59E0B] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20">
                  <span className="relative z-10 flex items-center justify-center gap-2">Create Account <ArrowRight className="w-4 h-4" /></span>
                </motion.button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0F172A] px-2 text-slate-500 font-mono">Or connect with</span></div>
              </div>
              <SocialButtons />

              <div className="mt-8 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <button onClick={handleFlip} className="text-[#FD9D24] hover:text-[#F59E0B] font-semibold hover:underline bg-transparent border-none cursor-pointer">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldAlert, 
  LogIn, 
  UserPlus,
  Link2,
  ArrowRight,
  Terminal
} from "lucide-react";


import { Footer } from "@/components/footer";


const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E")`;

export default function RestrictedConnectPage() {
  return (
    <div 
      className="relative min-h-screen w-full bg-[#0F172A] overflow-x-hidden"
      style={{ cursor: SDG_CURSOR }}
    >
      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden min-h-[calc(100vh-100px)]">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#EF4444]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#38BDF8]/10 rounded-full blur-[120px]" />
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
              backgroundSize: '32px 32px' 
            }} 
          />
        </div>

        <div className="max-w-2xl w-full relative z-10 text-center">
          {/* Visual Warning Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 relative inline-block"
          >
            {/* Pulsing Alert Ring */}
            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse scale-150" />
            
            <div className="relative bg-[#1E293B]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem] shadow-2xl overflow-hidden">
              <Image
                src="/assets/pandasad.gif"
                alt="Sad Panda"
                width={200}
                height={200}
                className="mx-auto rounded-2xl grayscale opacity-70"
                unoptimized
              />
              
              <div className="mt-6 flex items-center justify-center gap-2 text-red-400 font-mono text-[10px] tracking-[0.4em] uppercase">
                <ShieldAlert size={12} />
                <span>Uplink_Intercepted</span>
              </div>
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Connect Hub is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FD9D24]">Locked Out.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto font-light leading-relaxed">
              Establishing a peer-to-peer connection requires an active network identity. You must sign in to synchronize with other ASMO contributors.
            </p>
          </motion.div>

          {/* Action Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 px-4"
          >
            {/* Sign In */}
            <Link href="/auth/login" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-48 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <LogIn size={16} />
                Sign In
              </motion.button>
            </Link>

            {/* Sign Up */}
            <Link href="/auth/sign-up" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-48 py-4 bg-[#1E293B] border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all"
              >
                <UserPlus size={16} />
                Sign Up
              </motion.button>
            </Link>
          </motion.div>

          {/* Secondary Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <Link 
              href="/" 
              className="text-[10px] font-mono text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 tracking-widest uppercase"
            >
              <ArrowRight className="rotate-180 w-3 h-3" />
              Return_to_Safe_Zone
            </Link>
          </motion.div>
        </div>

        {/* Decorative Connection Icon */}
        <div className="absolute bottom-20 right-20 opacity-[0.03] pointer-events-none rotate-12">
          <Link2 size={200} className="text-white" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
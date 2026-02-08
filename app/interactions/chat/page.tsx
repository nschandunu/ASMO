"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Lock, 
  ArrowRight, 
  ShieldAlert, 
  Terminal, 
  LogIn, 
  UserPlus 
} from "lucide-react";

const SDG_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 28V14l4-4 4 4v14' fill='none' stroke='%2338BDF8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 28V10l4-6 4 6v18' fill='none' stroke='%23FD9D24' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 28V18l3-3 3 3v10' fill='none' stroke='%2322C55E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='0' y1='28' x2='32' y2='28' stroke='%2338BDF8' stroke-width='1' opacity='0.5'/%3E%3Crect x='10' y='18' width='2' height='2' fill='%23FD9D24' opacity='0.8'/%3E%3Crect x='18' y='14' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='18' y='18' width='2' height='2' fill='%2338BDF8' opacity='0.8'/%3E%3Crect x='4' y='21' width='1.5' height='1.5' fill='%2322C55E' opacity='0.8'/%3E%3C/svg%3E") 12 28, auto`;

export default function RestrictedChatPage() {
  return (
    <main 
      className="relative min-h-screen w-full bg-[#0F172A] flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{ cursor: SDG_CURSOR }}
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#EF4444]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#38BDF8]/10 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, 
            backgroundSize: '32px 32px' 
          }} 
        />
      </div>

      <div className="max-w-2xl w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 relative inline-block"
        >

          <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse scale-150" />
          
          <div className="relative bg-[#1E293B]/80 backdrop-blur-2xl border border-white/10 p-8 rounded-[3rem] shadow-2xl overflow-hidden">
            <Image
              src="/assets/pandasad.gif"
              alt="Sad Panda"
              width={220}
              height={220}
              className="mx-auto rounded-2xl grayscale opacity-80"
              unoptimized
            />
            
            <div className="mt-6 flex items-center justify-center gap-2 text-red-400 font-mono text-xs tracking-[0.3em]">
              <ShieldAlert size={14} />
              <span>ACCESS_DENIED // 403</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            The Chat Room is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#FD9D24]">Locked.</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto font-light">
            Wait! You haven't established a secure session. To interact with the community, you must be part of the network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 px-4"
        >
          <Link href="/auth/login" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-48 py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <LogIn size={18} />
              Sign In
            </motion.button>
          </Link>

          <Link href="/auth/sign-up" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-48 py-4 bg-[#1E293B] border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-white/5 hover:border-white/20"
            >
              <UserPlus size={18} />
              Sign Up
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Link 
            href="/" 
            className="text-xs font-mono text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <ArrowRight className="rotate-180 w-3 h-3" />
            RETURN_TO_HOME_PROTOCOL
          </Link>
        </motion.div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      <div className="fixed top-12 right-12 opacity-5 pointer-events-none">
        <Terminal size={120} className="text-white" />
      </div>
    </main>
  );
}
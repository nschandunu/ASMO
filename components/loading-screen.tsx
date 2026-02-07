"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // 1. Fake progress bar logic
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // 2. Forced delay: Minimum 3.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: -1000, 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          >
            {/* Subtle Ambient Background Glow (Softer for White BG) */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100 rounded-full blur-[140px] opacity-50" />
            </div>

            <div className="relative flex flex-col items-center">
              {/* Panda Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-56 h-56 mb-8"
              >
                <Image
                  src="/assets/panda.gif" 
                  alt="Loading Panda"
                  fill
                  className="object-contain"
                  unoptimized 
                />
              </motion.div>

              {/* Progress Text - Changed to Slate-900 for visibility */}
              <div className="font-mono text-slate-900 mb-2 tracking-[0.2em] text-xs font-bold uppercase">
                Initializing ASMO // {percent}%
              </div>

              {/* Progress Bar - Darker track for White BG */}
              <div className="w-64 h-[3px] bg-slate-100 relative overflow-hidden rounded-full border border-slate-50">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                  initial={{ width: "0%" }}
                  animate={{ width: `${percent}%` }}
                />
              </div>
              
              {/* Status Tags - Subtle gray */}
              <div className="mt-6 flex gap-6 opacity-60">
                <span className="text-[9px] font-mono text-slate-500 tracking-tighter">PROTOCOL: ACTIVE</span>
                <span className="text-[9px] font-mono text-slate-500 tracking-tighter">ENCRYPTION: AES-256</span>
                <span className="text-[9px] font-mono text-slate-500 tracking-tighter">VIBE: SUSTAINABLE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
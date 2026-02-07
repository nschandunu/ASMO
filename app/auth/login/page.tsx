"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Briefcase,
  MapPin,
  Calendar,
  Check,
} from "lucide-react";

import { supabase } from "../../../lib/supabase/client";

/* ================= FLOATING ICONS ================= */

import { Leaf, Building2, Bus, Recycle } from "lucide-react";

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
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity }}
        >
          <item.Icon size={32} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

/* ================= MAIN ================= */

export default function AuthPage() {
  const router = useRouter();

  const [isFlipped, setIsFlipped] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* LOGIN */
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [showLoginPass, setShowLoginPass] = useState(false);

  /* SIGNUP */
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    age: "",
    occupation: "",
    gender: "",
    postalCode: "",
    password: "",
  });

  const [showSignupPass, setShowSignupPass] = useState(false);

  /* ================= HANDLERS ================= */

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSignupChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= LOGIN ================= */

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPass,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/protected");
    router.refresh();
  };

  /* ================= SIGNUP ================= */

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email: signupData.email,
      password: signupData.password,
      options: {
        data: {
          name: signupData.name,
          age: signupData.age,
          occupation: signupData.occupation,
          gender: signupData.gender,
          postalCode: signupData.postalCode,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/protected");
    router.refresh();
  };

  /* ================= PASSWORD CHECK ================= */

  const passChecks = {
    length: signupData.password.length >= 8,
    number: /\d/.test(signupData.password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(signupData.password),
    letter: /[a-zA-Z]/.test(signupData.password),
  };

  /* ================= UI ================= */

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F172A] p-6 relative">

      <FloatingSDGIcons />

      <motion.div
        className="relative w-full max-w-5xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* ================= LOGIN ================= */}

        <div
          className="backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >

          <div className="bg-[#1E293B]/70 border border-white/10 rounded-2xl p-10">

            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Login
            </h1>

            <form onSubmit={handleLogin} className="space-y-5">

              <div className="relative">
                <Mail className="absolute left-4 top-3.5 text-slate-500" />

                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3.5 pl-12 text-white"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-3.5 text-slate-500" />

                <input
                  type={showLoginPass ? "text" : "password"}
                  required
                  placeholder="Password"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white"
                />

                <button
                  type="button"
                  onClick={() => setShowLoginPass(!showLoginPass)}
                  className="absolute right-4 top-3.5 text-slate-500"
                >
                  {showLoginPass ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-xl font-bold text-white"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-center text-slate-400 text-sm">
              No account?{" "}
              <button
                onClick={handleFlip}
                className="text-orange-400 font-semibold"
              >
                Sign up
              </button>
            </p>

          </div>
        </div>

        {/* ================= SIGNUP ================= */}

        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >

          <div className="bg-[#1E293B]/70 border border-white/10 rounded-2xl p-10">

            <h1 className="text-3xl font-bold text-white mb-6 text-center">
              Sign Up
            </h1>

            <form onSubmit={handleSignup} className="space-y-4">

              <input
                name="name"
                placeholder="Name"
                required
                value={signupData.name}
                onChange={handleSignupChange}
                className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3 px-4 text-white"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={signupData.email}
                onChange={handleSignupChange}
                className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3 px-4 text-white"
              />

              <input
                name="password"
                type={showSignupPass ? "text" : "password"}
                placeholder="Password"
                required
                value={signupData.password}
                onChange={handleSignupChange}
                className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3 px-4 text-white"
              />

              {/* PASSWORD CHECK */}

              {signupData.password && (
                <div className="grid grid-cols-2 text-xs gap-2">
                  {Object.entries(passChecks).map(([k, v]) => (
                    <div
                      key={k}
                      className={v ? "text-green-400" : "text-slate-500"}
                    >
                      {v ? "✓" : "•"} {k}
                    </div>
                  ))}
                </div>
              )}

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-xl font-bold text-white"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>

            </form>

            <p className="mt-6 text-center text-slate-400 text-sm">
              Already have an account?{" "}
              <button
                onClick={handleFlip}
                className="text-orange-400 font-semibold"
              >
                Login
              </button>
            </p>

          </div>
        </div>

      </motion.div>
    </div>
  );
}

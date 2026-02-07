"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

/**
 * ============================================================================
 * PremiumNavbar.tsx — Apple-style Glass Morphism Navigation
 * ============================================================================
 */

const NAV_LINKS = [
  { label: "Home", href: "/#home" }, // UPDATED to anchor
  { label: "About", href: "/#about" }, // UPDATED to anchor
  { 
    label: "Interactions", 
    href: "#",
    dropdown: [
      { label: "Chat", href: "/interactions/chat" },
      { label: "Events", href: "/interactions/events" },
      { label: "News", href: "/interactions/news" },
      { label: "Connect", href: "/interactions/connect" },
    ]
  },
  { label: "Shop", href: "/shop" }, 
  { label: "Contact", href: "/contact" },
];

export function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Navbar width and padding transform on scroll
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "92%"]);
  const navPaddingY = useTransform(scrollY, [0, 100], [16, 10]);
  const navPaddingX = useTransform(scrollY, [0, 100], [24, 20]);
  const navBorderRadius = useTransform(scrollY, [0, 100], [0, 32]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // ─── SMOOTH SCROLL HANDLER ──────────────────────────────────────────────
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // If it's an anchor link (contains #), handle smooth scrolling
    if (href.includes("#")) {
      e.preventDefault();
      const targetId = href.replace(/.*\#/, ""); // Extract ID after #
      const elem = document.getElementById(targetId);
      
      if (elem) {
        // Scroll to element with offset for the navbar
        const offset = 80; // approximate navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = elem.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // Always close mobile menu on click
    setMobileMenuOpen(false);
  };
  // ────────────────────────────────────────────────────────────────────────

  return (
    <>
      <motion.nav
        style={{
          width: navWidth,
          borderRadius: navBorderRadius,
        }}
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "mt-4" : "mt-0"
        }`}
      >
        <motion.div
          style={{ 
            paddingTop: navPaddingY,
            paddingBottom: navPaddingY,
            paddingLeft: navPaddingX,
            paddingRight: navPaddingX,
            borderRadius: navBorderRadius,
          }}
          className={`backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-700/30 shadow-lg transition-all duration-300 ${
            isScrolled ? "shadow-2xl" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xl font-black tracking-tight"
              >
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  ASMO.
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    // Attach smooth scroll handler here
                    onClick={(e) => handleScroll(e, link.href)}
                    className="group flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors relative py-2"
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300" />
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-[100]"
                      >
                        <div className="w-48 py-2 backdrop-blur-xl bg-white/95 dark:bg-slate-800/95 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-700/80 transition-colors"
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                {item.label}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Sign In Button - Outlined Pill */}
              <Link href="/auth/login">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-600 rounded-full overflow-hidden group transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-500"
                >
                  <span className="relative z-10">Sign In</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </Link>

              {/* Sign Up Button - Premium Gradient Pill with Glow */}
              <Link href="/auth/sign-up">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(253,157,36,0.4), 0 10px 40px rgba(253,157,36,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-5 py-2 text-sm font-bold text-white rounded-full overflow-hidden shadow-lg group"
                  style={{
                    background: "linear-gradient(135deg, #FD9D24 0%, #F59E0B 50%, #FBBF24 100%)",
                  }}
                >
                  <span className="relative z-10">Sign Up</span>
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{ transform: "skewX(-20deg)", left: "-100%" }}
                    animate={{ left: ["100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: "inset 0 0 20px rgba(255,255,255,0.3)",
                    }}
                  />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-slate-900 z-50 md:hidden overflow-y-auto shadow-2xl"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-black bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    ASMO.
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-700 dark:text-slate-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-4 mb-8">
                  {NAV_LINKS.map((link) => (
                    <div key={link.label}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => setMobileDropdownOpen(
                              mobileDropdownOpen === link.label ? null : link.label
                            )}
                            className="w-full flex items-center justify-between text-left py-3 text-lg font-medium text-slate-700 dark:text-slate-300"
                          >
                            {link.label}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                mobileDropdownOpen === link.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileDropdownOpen === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4 space-y-2"
                              >
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    // Handle mobile dropdown clicks
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="block py-2 text-base text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          // Handle mobile link clicks
                          onClick={(e) => handleScroll(e, link.href)}
                          className="block py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <Link href="/auth/login" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 border-2 border-slate-300 dark:border-slate-600 rounded-full transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-500">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/auth/sign-up" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <button
                      className="w-full px-6 py-3 text-sm font-bold text-white rounded-full shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #FD9D24 0%, #F59E0B 50%, #FBBF24 100%)",
                      }}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
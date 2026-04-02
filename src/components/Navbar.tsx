"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for Sidebar

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Why Africa", href: "#why-africa" },

    { name: "Venture", href: "#ventures" },
    { name: "Partnership", href: "#partnership" },
    { name: "Network", href: "#network" },
    { name: "Leadership", href: "#leadership" },
  ];

  // Toggle Sidebar
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-8 bg-transparent"
        }`}>
        <div className='max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group'>
            <span className='text-xl md:text-2xl font-serif font-bold tracking-tighter text-white'>
              CHAYIL <span className='text-[#DFFF8F]'>GLOBAL</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-[10px] font-bold uppercase tracking-[0.2em] transition-colors text-amber-100 hover:text-[#DFFF8F]'>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className='lg:hidden flex items-center'>
            <button
              onClick={toggleMenu}
              className='text-[#DFFF8F] p-2 focus:outline-none'>
              {/* Dynamic Icon Change */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-8 h-8'>
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 9h16.5m-16.5 6.75h16.5'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay/Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className='fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] lg:hidden'
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black border-l border-white/10 z-[120] lg:hidden p-10 flex flex-col justify-center'>
              <div className='flex flex-col gap-8'>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className='text-2xl font-serif font-bold text-white hover:text-[#DFFF8F] transition-colors'>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Branding at the bottom of sidebar */}
              <div className='absolute bottom-10 left-10'>
                <p className='text-[10px] text-gray-500 tracking-[0.3em] uppercase'>
                  Chayil Global © 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

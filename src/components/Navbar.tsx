"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll and background change logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why Africa", href: "#why-africa" },
    { name: "Regions", href: "#regions" },
    { name: "Pillars", href: "#pillars" },
    { name: "Vision", href: "#vision" },
    { name: "Network", href: "#network" },
    { name: "Leadership", href: "#leadership" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-6 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-10 bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center'>
        {/* Logo Section */}
        <Link href='/' className='flex items-center gap-2 group'>
          <span className='text-xl md:text-2xl font-serif font-bold tracking-tighter text-white'>
            CHAYIL <span className='text-[#DFFF8F]'>GLOBAL</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className='hidden lg:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-[10px] font-bold  hover:text-[#DFFF8F] transition-colors uppercase tracking-[0.2em]'>
              <span className='text-amber-100 hover:text-amber-300'>
                {link.name}
              </span>
            </Link>
          ))}

          <Link href='#cta'>
            <button className='px-6 py-2 bg-[#DFFF8F] text-black rounded-full text-xs font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(223,255,143,0.3)]'>
              JOIN NETWORK
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon (Simplified) */}
        <div className='lg:hidden text-[#DFFF8F]'>
          <button className='p-2'>
            hey
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 9h16.5m-16.5 6.75h16.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

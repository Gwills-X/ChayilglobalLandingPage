"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative py-16 px-6  overflow-hidden'>
      {/* Top Border Gradient - Creates a "shimmer" line at the top of the footer */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent' />

      <div className='relative z-10 max-w-7xl mx-auto flex flex-col items-center'>
        {/* Brand Name / Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mb-5 flex flex-col gap-2 text-center '>
          <h2 className='text-2xl font-serif font-bold text-white tracking-widest uppercase'>
            Chayil <span className='text-[#c6a85a]'>Global</span>
          </h2>
          <p>
            Chayil Global exists to connect global investors and partners with
            strategic opportunities across Africa - building assets, enterprise
            and legacy projects that create long-term impact
          </p>
        </motion.div>

        {/* Core Pillars - Styled as a navigation or brand value bar */}
        <nav className='flex flex-wrap justify-center gap-6 md:gap-12 mb-10'>
          {["Faith", "Leadership", "Enterprise"].map((item) => (
            <span
              key={item}
              className='text-gray-400 text-sm font-mono tracking-[0.2em] uppercase hover:text-[#c6a85a] transition-colors cursor-default'>
              {item}
            </span>
          ))}
        </nav>

        {/* Final Bottom Bar */}
        <div className='w-full pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-gray-300 text-xs tracking-wider'>
            © {currentYear} Chayil Global. All Rights Reserved.
          </p>

          <div className='flex gap-8'>
            {/* These can be actual links or just stylistic placeholders */}
            <a
              href='#'
              className='text-gray-600 hover:text-white text-xs transition-colors uppercase tracking-widest'>
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-gray-600 hover:text-white text-xs transition-colors uppercase tracking-widest'>
              Terms of Access
            </a>
          </div>
        </div>

        {/* Decorative corner glows to frame the bottom of the page */}
        <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-[#c6a85a]/5 blur-3xl rounded-full pointer-events-none' />
        <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full pointer-events-none' />
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className='relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-6'>
      {/* Background Accent - Large blurred glow for premium feel */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] bg-[#DFFF8F]/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 text-center max-w-2xl'>
        {/* 404 Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <span className='text-[#DFFF8F] mt-20 font-mono text-sm tracking-[0.5em] uppercase mb-4 block'>
            Error 404
          </span>
          <h1 className='text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter'>
            Page <span className='italic text-[#DFFF8F]'>Not Found</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-light'>
          The resource you are looking for has been moved, removed, or is
          restricted to private investor access.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <Link href='/' prefetch={true}>
            <button className='group relative px-10 py-5 bg-[#DFFF8F] text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto'>
              <span className='relative z-10 text-lg'>Return to Platform</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 group-hover:translate-x-1 transition-transform'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
            </button>
          </Link>
        </motion.div>

        {/* Subtle Footer branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className='mt-24'>
          <p className='text-[10px] text-gray-500 uppercase tracking-[0.3em]'>
            Chayil Global Institutional Platform
          </p>
        </motion.div>
      </div>
    </section>
  );
}

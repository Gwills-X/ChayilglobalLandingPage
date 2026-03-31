"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className='relative py-32 px-6  overflow-hidden'>
      {/* Background Decorative Glows */}
      <div className='absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#DFFF8F]/10 blur-[120px] rounded-full pointer-events-none' />
      <div className='absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          // Large, rounded glass container to match the Hero's card aesthetic
          className='relative overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-12 md:p-24 rounded-[3.5rem] text-center backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]'>
          {/* Subtle Grid Pattern Overlay (Matches Banklio background) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-4xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight leading-tight'>
            Join the Chayil Global <br />
            <span className='text-[#DFFF8F]'>Founding Network</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed'>
            Request private access to explore strategic partnership and
            transformative investment opportunities across the continent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}>
            {/* Signature Lime Button */}
            <button className='group relative px-12 py-5 bg-[#DFFF8F] text-black font-bold rounded-full shadow-[0_10px_40px_rgba(223,255,143,0.3)] hover:scale-105 transition-all duration-300 text-lg flex items-center gap-3 mx-auto'>
              Request Private Access
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5 transition-transform group-hover:translate-x-1'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </button>

            <p className='mt-8 text-gray-500 text-xs font-mono uppercase tracking-[0.3em]'>
              Strictly for Qualified Partners & Investors
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

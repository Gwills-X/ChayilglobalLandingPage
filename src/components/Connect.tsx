"use client";

import { motion } from "framer-motion";

export default function Connect() {
  return (
    <section
      id='connect'
      className='relative py-20 md:py-15 x-4 sm:px-6 overflow-x-hidden '>
      {/* Background glow (FIXED - responsive width) */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] h-[250px] md:h-[400px] bg-[#DFFF8F]/10 blur-[120px] rounded-full pointer-events-none' />

      {/* Content */}
      <div className='relative z-10 w-full max-w-4xl mx-auto text-center'>
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='inline-block px-4 py-1 rounded-full border border-[#DFFF8F]/30 text-[#DFFF8F] text-[10px] font-mono mb-6 md:mb-8 uppercase tracking-widest'>
          Secure Your Positioning
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8 tracking-tight'>
          Begin Your{" "}
          <span className='text-[#DFFF8F]'>Strategic Partnership</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto px-2'>
          Join a select network of visionaries building the next era of African
          institutions. We invite you to explore how your goals align with the
          Chayil Global ecosystem.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
          <button className='w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-[#DFFF8F] text-black font-bold text-sm hover:bg-white transition-all hover:scale-105 active:scale-95'>
            Inquire About Partnership
          </button>

          <button className='w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-all'>
            Download Prospectus
          </button>
        </motion.div>
      </div>
    </section>
  );
}

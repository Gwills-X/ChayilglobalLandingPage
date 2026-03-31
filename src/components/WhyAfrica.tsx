"use client";

import { motion } from "framer-motion";

export default function WhyAfrica() {
  return (
    <section
      className='relative py-24 px-6 overflow-hidden bg-black/10  '
      id='why-africa'>
      {/* --- BACKGROUND LAYER ---
          Using the same image as the hero to ensure color continuity, 
          but making it much darker (bg-black/80) so it doesn't compete with the hero.
      */}

      {/* Dark Gradient Overlay to fade into the next section */}
      <div className='absolute inset-0 z-10 ' />

      <div className='relative z-20 max-w-5xl mx-auto text-center'>
        {/* Decorative Gold Element */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 1 }}
          className='h-1 bg-[#DFFF8F] mx-auto mb-10 rounded-full'
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Using font-serif to match the elegant vibe of your Hero text
          className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 tracking-tight leading-tight'>
          Why Africa. <span className='text-[#DFFF8F]'>Why This Moment.</span>
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-12 text-left'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <p className='text-gray-300 text-lg md:text-xl leading-relaxed'>
              Africa is entering one of the most significant seasons of
              opportunity in modern history. With a rapidly expanding population
              and vast natural resources, the continent represents a compelling
              frontier for long-term investment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='border-l border-white/10 pl-8'>
            <p className='text-gray-400 text-lg md:text-xl leading-relaxed italic'>
              Visionary partners have the space to invest not only in
              opportunity, but in lasting transformation for an emerging
              generation.
            </p>
          </motion.div>
        </div>

        {/* Subtle Glow beneath the section */}
        <div className='absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#DFFF8F]/5 blur-[120px] rounded-full pointer-events-none' />
      </div>
    </section>
  );
}

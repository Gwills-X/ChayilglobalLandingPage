"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section
      className='relative py-32 px-6 overflow-hidden  text-white'
      id='vision'>
      {/* Background radial glow - centered behind the text to draw the eye */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#DFFF8F]/10 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='text-center'>
          {/* Section Label */}
          <span className='text-[#DFFF8F] font-mono text-sm tracking-[0.3em] uppercase mb-6 block'>
            The Roadmap
          </span>

          <h2 className='text-4xl md:text-6xl font-serif font-bold mb-10 tracking-tight leading-tight'>
            A Long-Term <span className='italic'>Vision</span>
          </h2>

          {/* The Content Box: Glassmorphism with a subtle inner glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='relative p-8 md:p-16 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-2xl'>
            {/* Subtle corner accents to reinforce the "Premium" feel */}
            <div className='absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#DFFF8F]/30 rounded-tl-lg' />
            <div className='absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#DFFF8F]/30 rounded-br-lg' />

            <p className='text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light'>
              Chayil Global is designed as a{" "}
              <span className='text-white font-medium'>
                long-horizon initiative
              </span>{" "}
              — building systems, partnerships and enterprises that generate
              transformative value for{" "}
              <span className='text-[#DFFF8F]'>generations to come</span>.
            </p>
          </motion.div>

          {/* Call to Action or subtle footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className='mt-12 text-gray-500 font-medium tracking-widest uppercase text-xs'>
            Sustainability • Impact • Legacy
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

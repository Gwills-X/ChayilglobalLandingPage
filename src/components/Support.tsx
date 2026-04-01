"use client";

import { motion } from "framer-motion";

export default function Support() {
  return (
    <section
      className='relative py-32 px-6 overflow-hidden text-white bg-transparent'
      id='support'>
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
          <span className='text-[#DFFF8F] font-mono text-xs tracking-[0.4em] uppercase mb-6 block'>
            Strategic Foundation
          </span>

          <h2 className='text-4xl md:text-5xl font-serif font-bold mb-10 tracking-tight leading-tight'>
            Strategic Support &{" "}
            <span className='italic text-[#DFFF8F]'>Early Partners</span>
          </h2>

          {/* The Content Box: Glassmorphism with a subtle inner glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='relative p-10 md:p-16 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-2xl'>
            {/* Subtle corner accents */}
            <div className='absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#DFFF8F]/30 rounded-tl-lg' />
            <div className='absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#DFFF8F]/30 rounded-br-lg' />

            <div className='space-y-8'>
              <p className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light'>
                Chayil Global is supported by a growing network of partners who
                currently fund the ministry and humanitarian initiatives of the
                movement, including
                <span className='text-white font-medium'>
                  {" "}
                  missionary outreach{" "}
                </span>
                and community impact projects under
                <span className='text-[#DFFF8F]'> Chayil Kingdom Impact</span>.
              </p>

              <div className='h-[1px] w-12 bg-white/10 mx-auto' />

              <p className='text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto italic'>
                These early supporters represent the foundational community
                behind the Chayil vision as we expand our enterprise and
                investment initiatives.
              </p>
            </div>
          </motion.div>

          {/* Call to Action or subtle footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className='mt-12 text-gray-500 font-medium tracking-[0.5em] uppercase text-[10px]'>
            Foundational • Support • Expansion
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

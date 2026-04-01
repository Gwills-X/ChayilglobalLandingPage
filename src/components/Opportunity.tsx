"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Leadership",
    desc: "Developing leaders through training initiatives and the Chayil School of Leadership.",
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
        />
      </svg>
    ),
  },
  {
    title: "Enterprise",
    desc: "Building ventures across agriculture, land development and strategic business sectors.",
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        />
      </svg>
    ),
  },
  {
    title: "Institutional Vision",
    desc: "Developing long-term initiatives including leadership centres and infrastructure projects.",
    icon: (
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
        />
      </svg>
    ),
  },
];

export default function Opportunity() {
  return (
    <section
      id='opportunity'
      // Changed to overflow-x-clip for better mobile performance
      className='relative py-24 md:py-32 px-6 bg-black/50 overflow-x-clip border-green-400'>
      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* --- Top Section: Narrative & Transformation --- */}
        <div className='grid lg:grid-cols-2 gap-10 md:gap-16 items-start mb-24'>
          {/* Left Side: The Narrative */}
          <motion.div
            // Avoid using X-axis movement on mobile to prevent overflow
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className='text-[#DFFF8F] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6'>
              The Chayil Global Opportunity
            </h2>
            <p className='text-2xl md:text-4xl font-serif leading-tight mb-8 text-white'>
              Chayil Global is a strategic platform positioned at the
              intersection of{" "}
              <span className='italic text-[#DFFF8F]'>
                faith, leadership and enterprise.
              </span>
            </p>
            <p className='text-gray-400 text-base md:text-lg leading-relaxed max-w-xl'>
              Designed to mobilise global capital, African opportunity and
              kingdom-minded leadership to build institutions, assets and
              long-term development initiatives across the continent.
            </p>
          </motion.div>

          {/* Right Side: The Transformation Market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='bg-white/[0.03] border border-white/10 p-7 md:p-12 rounded-[2rem] backdrop-blur-sm'>
            <h3 className='text-lg md:text-xl font-bold mb-6 text-white'>
              Market Transformation
            </h3>
            <p className='text-gray-400 text-sm md:text-base leading-relaxed mb-6'>
              Africa is entering a period of significant demographic and
              economic transformation. With the world’s fastest growing
              population, the continent presents major opportunities for
              agricultural development and infrastructure growth.
            </p>
            <p className='text-gray-400 text-sm md:text-base leading-relaxed'>
              We position global partners and diaspora leaders to participate
              meaningfully in this next era through carefully structured
              ventures.
            </p>
          </motion.div>
        </div>

        {/* Visual Pillars Section */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='group p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 hover:border-[#DFFF8F]/30 transition-all duration-500'>
              <div className='w-12 h-12 rounded-xl bg-[#DFFF8F]/10 flex items-center justify-center text-[#DFFF8F] mb-6 group-hover:scale-110 transition-transform'>
                {pillar.icon}
              </div>
              <h4 className='text-xl font-bold mb-4 text-white group-hover:text-[#DFFF8F] transition-colors'>
                {pillar.title}
              </h4>
              <p className='text-gray-500 text-sm leading-relaxed group-hover:text-gray-300'>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Legacy Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className='mt-24 text-center'>
          <div className='h-[1px] w-16 bg-[#DFFF8F]/30 mx-auto mb-8' />
          <p className='text-gray-400 font-serif italic text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            Chayil Global is designed as a long-term platform for building
            leadership, enterprise and institutional infrastructure across
            Africa for the generations to come.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

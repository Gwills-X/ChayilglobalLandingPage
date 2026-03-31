"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Chayil Ministries",
    description:
      "Faith-based initiatives focused on leadership formation, missions and humanitarian outreach.",
    number: "01",
  },
  {
    title: "Leadership & Enterprise",
    description:
      "Developing leaders and equipping entrepreneurs to build sustainable systems for the future.",
    number: "02",
  },
  {
    title: "Chayil Ventures",
    description:
      "Strategic investments in agriculture, land, enterprise and economic initiatives across the continent.",
    number: "03",
  },
];

export default function Pillars() {
  return (
    <section
      className='relative py-32 px-6  text-white overflow-hidden'
      id='pillars'>
      {/* Decorative background flare */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-[#DFFF8F]/5 blur-[150px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight'>
            Our Three <span className='text-[#DFFF8F]'>Pillars</span>
          </h2>
          <div className='h-1 w-20 bg-[#DFFF8F] mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8'>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              // Banklio Style: Deep rounded corners and glassmorphism with a subtle "inner glow"
              className='relative p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm group hover:border-[#DFFF8F]/30 transition-all duration-500'>
              {/* Pillar Numbering (High-end aesthetic) */}
              <span className='block text-[#DFFF8F] font-mono text-sm mb-6 tracking-widest opacity-60 group-hover:opacity-100 transition-opacity'>
                // {pillar.number}
              </span>

              <h3 className='text-2xl font-semibold mb-6 group-hover:text-[#DFFF8F] transition-colors'>
                {pillar.title}
              </h3>

              <p className='text-gray-400 leading-relaxed text-lg group-hover:text-gray-200 transition-colors'>
                {pillar.description}
              </p>

              {/* Subtle bottom-right glow on hover */}
              <div className='absolute bottom-4 right-4 w-12 h-12 bg-[#DFFF8F]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

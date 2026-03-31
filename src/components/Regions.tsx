"use client";

import { motion } from "framer-motion";

const regions = [
  { name: "Nigeria", market: "West Africa" },
  { name: "Ghana", market: "West Africa" },
  { name: "Kenya", market: "East Africa" },
  { name: "South Africa", market: "Southern Africa" },
];

export default function Regions() {
  return (
    <section
      className='relative py-24 px-6 overflow-hidden  text-white'
      id='regions'>
      {/* Background radial glow to give depth to the grid */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFFF8F]/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-5xl font-serif font-bold text-center mb-16 tracking-tight '>
          Strategic <span className='text-[#DFFF8F]'>Regions</span>
        </motion.h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              // Glassmorphism Style: Dark, translucent, with a very thin border
              className='group relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl text-center transition-all hover:border-[#DFFF8F]/40 hover:bg-white/10'>
              {/* Subtle accent line that appears on hover */}
              <div className='absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#DFFF8F] transition-all group-hover:w-20 rounded-full' />

              <h3 className='text-2xl font-semibold mb-2 group-hover:text-[#DFFF8F] transition-colors'>
                {region.name}
              </h3>
              <p className='text-gray-500 text-sm tracking-widest uppercase font-medium'>
                {region.market}
              </p>

              {/* Decorative background glow for each card on hover */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-radial-gradient from-[#DFFF8F]/10 to-transparent rounded-3xl pointer-events-none' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

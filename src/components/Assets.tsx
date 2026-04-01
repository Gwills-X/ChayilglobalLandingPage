"use client";

import { motion } from "framer-motion";

const activities = [
  { title: "Agricultural farming operations", icon: "🚜" },
  { title: "Land acquisition and development", icon: "🗺️" },
  { title: "Expansion of farmland holdings", icon: "📈" },
  { title: "Estate development planning", icon: "🏠" },
];

export default function Assets() {
  return (
    <section
      id='assets'
      className='relative py-32 px-6 bg-black/30 overflow-hidden'>
      {/* Background visual - Subtle Map of West Africa */}
      <div className='absolute top-20 right-[-10%] w-[600px] h-[600px] opacity-5 pointer-events-none grayscale'>
        <img
          src='/dynamic-data-visualization-3d.jpg'
          alt='West Africa Focus'
          className='w-full h-full object-contain'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column: Narrative & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <span className='text-[#DFFF8F] font-mono text-xs tracking-[0.4em] uppercase mb-4 block'>
              Chayil Assets – Lands, Farms & Estates
            </span>
            <h2 className='text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight'>
              Existing Assets &{" "}
              <span className='text-[#DFFF8F]'>Development</span>
            </h2>

            <p className='text-gray-300 text-lg leading-relaxed mb-6'>
              Chayil Global currently has land assets secured and under
              development through
              <strong> Chayil Assets</strong>, the platform’s primary
              agricultural and land development initiative focused on long-term
              asset creation across West Africa.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-10'>
              {activities.map((item, i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'>
                  <span className='text-xl'>{item.icon}</span>
                  <span className='text-gray-300 text-sm font-medium'>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <p className='text-gray-400 text-sm italic border-l-2 border-[#DFFF8F] pl-6 mb-8'>
              "Additional land acquisitions are currently underway as the
              platform continues to expand its agricultural footprint across
              strategic regions."
            </p>

            <p className='text-white font-semibold text-lg leading-relaxed'>
              Agricultural land and development assets form a core component of
              our strategy to build sustainable economic platforms while
              supporting long-term regional growth.
            </p>
          </motion.div>

          {/* Right Column: Visual Masonry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='grid grid-cols-2 gap-4 h-[600px]'>
            {/* Aerial Farmland */}
            <div className='relative rounded-[2rem] overflow-hidden col-span-2 h-1/2 group'>
              <img
                src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000'
                className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
                alt='Aerial Farmland'
              />
              <div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors' />
            </div>
            {/* Land Clearing */}
            <div className='relative rounded-[2.5rem] overflow-hidden group'>
              <img
                src='https://images.unsplash.com/photo-1592982537447-6f2a6a0c3c8b?q=80&w=1000'
                className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
                alt='Land Development'
              />
            </div>
            {/* Cultivation */}
            <div className='relative rounded-[2.5rem] overflow-hidden group'>
              <img
                src='https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1000'
                className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
                alt='Cultivation'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

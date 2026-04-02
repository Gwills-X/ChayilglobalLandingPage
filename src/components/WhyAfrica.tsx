"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Fastest Growing Population",
    desc: "Africa is projected to account for a significant share of global population growth, creating expanding markets.",
    icon: "📈",
  },
  {
    title: "$3.4 Trillion Consumer Market",
    desc: "By 2030 Africa’s consumer and business spending is projected to reach $3.4 trillion.",
    icon: "🌍",
  },
  {
    title: "Agricultural Expansion Potential",
    desc: "Africa holds over 60% of the world’s uncultivated arable land, presenting major opportunities.",
    icon: "🌱",
  },
  {
    title: "Infrastructure & Development",
    desc: "Rapid urbanisation is driving demand for infrastructure, land development and strategic enterprise.",
    icon: "🏗️",
  },
];

export default function WhyAfrica() {
  return (
    <section
      className='relative py-24 md:py-32 px-6 overflow-x-clip bg-transparent '
      id='why-africa'>
      {/* --- OVERLAYS (Fixed for Overflow) --- */}
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <div className="absolute top-20 right-[-5%] w-full max-w-[300px] md:max-w-[500px] aspect-square bg-[url('/dynamic-data-visualization-3d.jpg')] bg-contain bg-no-repeat grayscale" />
      </div>

      <div className='relative z-20 max-w-7xl mx-auto'>
        {/* TOP: Header & Intro */}
        <div className='text-center mb-16 md:mb-20'>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='h-1 w-20 bg-[#DFFF8F] mx-auto mb-10 rounded-full origin-center'
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='text-3xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8 tracking-tight'>
            Why Africa — <span className='text-[#DFFF8F]'>Why Now</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='max-w-2xl mx-auto text-gray-300 text-base md:text-xl leading-relaxed'>
            Africa is entering one of the most significant periods of economic
            and demographic growth in modern history.
          </motion.p>
        </div>

        {/* MIDDLE: 4 Statistic Cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-24'>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className='relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#DFFF8F]/40 transition-all group overflow-hidden'>
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-cover bg-center pointer-events-none'
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=60&w=400')`,
                }}
              />

              <div className='text-3xl mb-6'>{stat.icon}</div>
              <h3 className='text-white font-bold text-lg md:text-xl mb-4 leading-tight'>
                {stat.title}
              </h3>
              <p className='text-gray-300 text-sm leading-relaxed relative z-10 group-hover:text-gray-300'>
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM: Closing Paragraph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#DFFF8F]/10 to-transparent border border-[#DFFF8F]/20 text-center'>
          <p className='text-gray-200 text-base md:text-xl leading-relaxed'>
            <strong className='text-[#DFFF8F] font-medium'>
              Chayil Global
            </strong>{" "}
            is positioned to participate in this growth by connecting partners
            to opportunities in agriculture, land development, and leadership
            infrastructure.
          </p>
        </motion.div>

        {/* Updated Glow - Using percentage based width for mobile safety */}
        <div className='absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl h-64 bg-[#DFFF8F]/5 blur-[100px] rounded-full pointer-events-none' />
      </div>
    </section>
  );
}

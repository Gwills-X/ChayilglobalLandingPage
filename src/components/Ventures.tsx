"use client";

import { motion } from "framer-motion";

const ventures = [
  {
    title: "Agricultural Land Development",
    desc: "Development of agricultural land projects focused on high-demand crops including palm, cocoa and cashew, with a focus on scalable production.",
    image: "agriculture.jpeg", // Farmland
  },
  {
    title: "Land Acquisition & Property",
    desc: "Strategic initiatives designed to secure land assets for agricultural use, estate development and long-term infrastructure across West Africa.",
    image: "landAcquisition.jpeg", // Land/Maps
  },
  {
    title: "Strategic Enterprise Ventures",
    desc: "Development of enterprise platforms including Chayil Digital, Chayil TV, Chayil Couture and Chayil Angels to support the ecosystem.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000", // Digital/Business
  },
  {
    title: "Agricultural Expansion",
    desc: "Expansion of farmland holdings and development of operations across strategic regions, supporting food production and rural development.",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000", // Crop expansion
  },
];

export default function Ventures() {
  return (
    <section
      id='ventures'
      className='relative py-32 px-6 bg-black/20 overflow-hidden'>
      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* --- HEADER --- */}
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl'>
            <h2 className='text-[#DFFF8F] font-mono text-xs tracking-[0.4em] uppercase mb-6'>
              Current Strategic Ventures
            </h2>
            <p className='text-3xl md:text-4xl font-serif font-bold text-white leading-tight'>
              Actively developing ventures across key sectors aligned with
              long-term African growth.
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-gray-300 max-w-sm text-sm leading-relaxed border-l border-[#DFFF8F]/30 pl-6'>
            Several initiatives are already underway as partnerships and
            development activities continue to expand across the continent.
          </motion.p>
        </div>

        {/* --- VENTURE CARDS --- */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20'>
          {ventures.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='group relative h-[300px] rounded-[2rem] overflow-hidden border border-white/10'>
              {/* Background Image with Overlay */}
              <div
                className='absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-all duration-700 group-hover:brightness-50'
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className='absolute pt-20' />

              {/* Content */}
              <div className='absolute inset-0 p-8 flex flex-col justify-end'>
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-[#DFFF8F] transition-colors'>
                  {item.title}
                </h3>
                <p className='text-gray-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500'>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- HIGHLIGHT BOX & CLOSING --- */}
        <div className='grid lg:grid-cols-3 gap-12 items-center pt-16 border-t border-white/5'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='lg:col-span-2 bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-md'>
            <h4 className='text-[#DFFF8F] font-bold mb-6 flex items-center gap-2'>
              <span className='w-2 h-2 bg-[#DFFF8F] rounded-full animate-pulse' />
              Current Strategic Focus
            </h4>
            <ul className='grid md:grid-cols-2 gap-y-4 gap-x-8'>
              {[
                "Agricultural farmland development in Nigeria",
                "Land acquisition and property ventures",
                "Leadership and enterprise development",
                "Strategic partnerships for infrastructure",
              ].map((point) => (
                <li
                  key={point}
                  className='text-gray-200 text-sm flex items-start gap-3'>
                  <span className='text-[#DFFF8F] mt-1'>▹</span> {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='text-right lg:text-left'>
            <p className='text-gray-300 italic text-sm leading-relaxed'>
              "These ventures represent the early stages of a broader platform
              designed to develop strategic assets and long-term institutional
              initiatives across Africa."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

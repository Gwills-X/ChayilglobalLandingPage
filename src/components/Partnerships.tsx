"use client";

import { motion } from "framer-motion";

const pathways = [
  {
    title: "Strategic Investment Partnerships",
    desc: "Participation in agricultural, land and enterprise ventures aligned with the Chayil Global platform, focusing on long-term asset development across emerging African markets.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
  },
  {
    title: "Joint Venture Development",
    desc: "Collaborative partnerships for organisations and investors interested in developing large-scale projects including agricultural initiatives and infrastructure ventures.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />
      </svg>
    ),
  },
  {
    title: "Impact & Philanthropic Funding",
    desc: "Support for humanitarian and ministry initiatives under Chayil Kingdom Impact, including missionary outreach and community transformation projects.",
    icon: (
      <svg
        className='w-8 h-8'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>
    ),
  },
];

export default function Partnerships() {
  return (
    <section
      id='partnerships'
      className='relative py-32 px-6 bg-transparent text-white'>
      {/* Subtle background depth */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#DFFF8F]/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* --- HEADER --- */}
        <div className='text-center mb-20'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight'>
            Investment &{" "}
            <span className='text-[#DFFF8F]'>Partnership Structure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed'>
            Chayil Global welcomes partners who share the vision of building
            leadership, enterprise and strategic assets across Africa.
            Participation takes several forms aligned with your expertise and
            long-term goals.
          </motion.p>
        </div>

        {/* --- PARTNERSHIP CARDS --- */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {pathways.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className='group relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] transition-all hover:border-[#DFFF8F]/40 hover:bg-white/10'>
              <div className='text-[#DFFF8F] mb-8 group-hover:scale-110 transition-transform duration-300'>
                {path.icon}
              </div>

              <h3 className='text-2xl font-bold mb-4 group-hover:text-[#DFFF8F] transition-colors leading-snug'>
                {path.title}
              </h3>

              <p className='text-gray-200 group-hover:text-amber-100 text-sm leading-relaxed mb-6'>
                {path.desc}
              </p>

              {/* Accent Line */}
              <div className='absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#DFFF8F] transition-all group-hover:w-20 rounded-full' />
            </motion.div>
          ))}
        </div>

        {/* --- HIGHLIGHT BOX --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-transparent p-1 border-white/10 rounded-[2.5rem]'>
          <div className='bg-black/40 backdrop-blur-xl p-10 rounded-[2.3rem] text-center border border-white/5'>
            <p className='text-gray-300 text-sm md:text-base leading-relaxed tracking-wide'>
              These partnership pathways allow investors, strategic partners and
              philanthropic leaders to participate in the{" "}
              <span className='text-white font-bold'>Chayil Global vision</span>{" "}
              in ways aligned with their expertise, values and long-term goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

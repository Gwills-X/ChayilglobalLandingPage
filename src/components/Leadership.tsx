"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Channelle Chayil",
    role: "Founder & Visionary",
    bio: "Leading the mission of building leadership, enterprise and strategic partnerships across Africa.",
  },
  {
    name: "Dr. Stephen O. Aderinto",
    role: "Executive Director",
    bio: "Strategic Development Lead, overseeing enterprise initiatives and investment partnerships.",
  },
];

export default function Leadership() {
  return (
    <section
      className='relative py-24 px-6  text-white overflow-hidden'
      id='leadership'>
      {/* Background radial accent */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFFF8F]/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight'>
            Our <span className='text-[#DFFF8F]'>Leadership</span>
          </h2>
          <p className='text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold'>
            Visionaries & Strategic Directors
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className='group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-[#DFFF8F]/40'>
              {/* Profile Glow */}
              <div className='absolute -top-4 -left-4 w-24 h-24 bg-[#DFFF8F]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity' />

              <h3 className='text-2xl md:text-3xl font-semibold mb-2 group-hover:text-[#DFFF8F] transition-colors'>
                {leader.name}
              </h3>

              <span className='inline-block px-4 py-1 rounded-full border border-[#DFFF8F]/30 text-[#DFFF8F] text-xs font-mono mb-6 uppercase tracking-wider'>
                {leader.role}
              </span>

              <p className='text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors'>
                {leader.bio}
              </p>

              {/* Decorative corner element */}
              <div className='absolute bottom-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#DFFF8F'
                  strokeWidth='2'>
                  <path d='M7 17L17 7M17 7H7M17 7V17' />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

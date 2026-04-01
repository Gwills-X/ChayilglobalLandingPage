"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Channelle Chayil",
    role: "Founder & Global Visionary",
    bio: "Founder of the Chayil Global movement, leading initiatives across leadership development, enterprise platforms and international missions. Through her leadership, the Chayil ecosystem has launched initiatives focused on leadership formation, media platforms and community impact across Africa and the diaspora.",
    image: "/path-to-your-image.jpg", // Replace with your actual image path
  },
  {
    name: "Dr. Stephen O. Aderinto",
    role: "Executive Director – Strategic Development",
    bio: "Director of Chayil Lands, Farms & Properties, overseeing agricultural ventures, land acquisition and enterprise strategy across West Africa. His work focuses on developing strategic land assets and agricultural initiatives aligned with long-term development opportunities across the region.",
    image: "/path-to-husband-image.jpg", // Replace with actual image path
  },
];

export default function Leadership() {
  return (
    <section
      className='relative py-32 px-6 text-white overflow-hidden bg-transparent'
      id='leadership'>
      {/* Background radial accent */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFFF8F]/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* --- HEADER & INTRO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight'>
            Our <span className='text-[#DFFF8F]'>Leadership</span>
          </h2>
          <p className='max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed'>
            Chayil Global is led by a leadership team with experience across
            ministry, leadership development, digital enterprise and strategic
            land ventures. The platform has launched multiple initiatives while
            building partnerships across Africa and the diaspora.
          </p>
        </motion.div>

        {/* --- LEADERSHIP PROFILES --- */}
        <div className='grid md:grid-cols-2 gap-12 mb-20'>
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className='group relative p-10 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-[#DFFF8F]/40'>
              {/* Profile Image Placeholder - Replace src with leader.image */}
              <div className='w-20 h-20 rounded-2xl bg-white/10 mb-8 overflow-hidden border border-white/10'>
                <div className='w-full h-full bg-[#DFFF8F]/20 flex items-center justify-center text-[#DFFF8F] text-2xl font-serif italic'>
                  {leader.name.charAt(0)}
                </div>
              </div>

              <h3 className='text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#DFFF8F] transition-colors leading-tight'>
                {leader.name}
              </h3>

              <span className='inline-block px-4 py-1 rounded-full border border-[#DFFF8F]/30 text-[#DFFF8F] text-[10px] font-mono mb-8 uppercase tracking-widest'>
                {leader.role}
              </span>

              <p className='text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors'>
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

        {/* --- CREDIBILITY STATEMENT --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-center'>
          <p className='text-gray-500 text-xs md:text-sm uppercase tracking-[0.3em]'>
            Chayil Global continues to expand its leadership network through
            partnerships with investors, strategic advisors and institutional
            collaborators.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

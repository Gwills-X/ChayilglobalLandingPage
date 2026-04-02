"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  {
    name: "Channelle Chayil Aderinto",
    role: "Founder & Global Visionary",
    bio: "Founder of the Chayil Global movement, leading initiatives across leadership development, enterprise platforms and international missions. Through her leadership, the Chayil ecosystem has launched initiatives focused on leadership formation, media platforms and community impact.",
    // Change this to your actual file path, e.g., "/images/channelle.jpg"
    image: "/Channelle.jpeg",
  },
  {
    name: "Dr. Stephen O. Aderinto",
    role: "Executive Director – Strategic Development",
    bio: "Director of Chayil Lands, Farms & Properties, overseeing agricultural ventures, land acquisition and enterprise strategy across West Africa. His work focuses on developing strategic land assets aligned with long-term development opportunities.",
    // Change this to your actual file path, e.g., "/images/stephen.jpg"
    image: "/Stephen.jpeg",
  },
];

export default function Leadership() {
  return (
    <section
      className='relative py-24 md:py-32 px-6 text-white overflow-hidden bg-transparent'
      id='leadership'>
      {/* Background radial accent (Mobile Safe) */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[600px] bg-[#DFFF8F]/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* --- HEADER & INTRO --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16 md:mb-24'>
          <span className='text-[#DFFF8F] font-mono text-xs tracking-[0.4em] uppercase mb-4 block'>
            Strategic Visionaries
          </span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 tracking-tight'>
            Our <span className='text-[#DFFF8F]'>Leadership</span>
          </h2>

          <p className='max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed font-light'>
            Chayil Global is led by a dynamic team with experience across
            ministry, leadership development, digital enterprise, and strategic
            land ventures.
          </p>
        </motion.div>

        {/* --- LEADERSHIP PROFILES (GRID Fix for huge screens) --- */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-24'>
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className='group relative w-full aspect-[9/10]  rounded-[3rem] overflow-hidden bg-black/20 border border-white/5 shadow-2xl transition-all duration-500 hover:border-[#DFFF8F]/20 hover:shadow-[#DFFF8F]/5'>
              {/* 1. The Portrait Image */}
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className='object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out'
                // Optional: add placeholder='blur' if using imported static images
              />

              {/* 2. The "Dark Room" Hover Overlay (Inky Black, not Gray) */}
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/500 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-700' />

              {/* 3. The Decorative Border Accent (Mobile Safe) */}
              <div className='absolute inset-0 border-2 border-black group-hover:border-black/5 transition-all duration-700' />

              {/* 4. The Content Container (Text fades in/up) */}
              <div className='absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col items-start'>
                <h3 className='text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-2 text-white group-hover:text-[#DFFF8F] transition-colors leading-tight'>
                  {leader.name}
                </h3>

                <span className='inline-block px-4 py-1 rounded-full border border-[#DFFF8F]/30  text-[#DFFF8F] text-[10px] md:text-xs font-mono mb-6 uppercase tracking-widest'>
                  {leader.role}
                </span>

                {/* Bio is semi-hidden on mobile but reveals beautifully on desktop/TV hover */}
                <p className='text-gray-300 text-sm md:text-base leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none opacity-90  transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-700 delay-100'>
                  {leader.bio}
                </p>
              </div>

              {/* Decorative Link Icon */}
              <div className='absolute top-10 right-10 z-20 opacity-0 md:group-hover:opacity-100 transition-opacity delay-300'>
                <svg
                  width='20'
                  height='20'
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
          className='text-center pt-10 border-t border-white/5'>
          <p className='text-gray-300 text-xs md:text-sm uppercase tracking-[0.35em] max-w-2xl mx-auto leading-loose'>
            Chayil Global expands its leadership network through partnerships
            with investors, strategic advisors and institutional collaborators
            across Africa and the diaspora.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

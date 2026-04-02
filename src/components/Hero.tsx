"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoImage from "../../public/chayilGlobalLogo (2).png";

export default function Hero() {
  return (
    <section
      id='hero'
      // overflow-x-clip is the strongest way to prevent horizontal scrolling on mobile
      className='relative min-h-screen w-full flex items-center  text-white bg-transparent pt-20 pb-10 border-green-400'>
      {/* --- OVERLAYS --- */}
      <div className='absolute inset-0 z-10 bg-black/30 pointer-events-none border-green-400' />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className='relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 lg:gap-24'>
        {/* Left Column: Narrative Content */}
        <div className='flex-1 text-center md:text-left '>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}>
            <span className='text-[#DFFF8F] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block max-lg:pt-5'>
              Kingdom Institutional Platform
            </span>
            <h1 className='text-3xl sm:text-3xl lg:text-5xl font-serif font-bold mb-3 leading-[1.1] tracking-tight mx-auto md:mx-0'>
              Connecting Global Capital, Leadership and Strategic Development{" "}
              <span className='text-[#DFFF8F]'>Across Africa</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className='text-base sm:text-lg text-gray-300 mb-4 leading-relaxed max-w-xl mx-auto md:mx-0 font-light'>
            Focused on leadership development, strategic enterprise,
            agricultural ventures, land development and long-term institutional
            projects across emerging African markets.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='flex flex-col items-center md:items-start gap-4'>
            <button className='w-full sm:w-auto px-8 md:px-10 py-5 bg-[#DFFF8F] text-black font-bold rounded-full shadow-[0_10px_30px_rgba(223,255,143,0.3)] hover:scale-105 transition-transform duration-300 text-base md:text-lg flex items-center justify-center gap-3'>
              Request Private Investor Access
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-5 h-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </button>
            <p className='text-[10px] uppercase tracking-[0.2em] text-gray-300 max-w-xs leading-relaxed'>
              Opportunities are shared privately with qualified partners
              following application review.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Logo (Overflow-Proof) */}
        <div className='flex-1 w-full flex justify-center md:justify-start mt-12 md:mt-0 '>
          <motion.div
            // We use 'y' instead of 'x' for the entrance animation.
            // 'x' animations are the #1 cause of mobile overflow.
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            // We strictly constrain the width so it can't push the screen out
            className='relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[420px] '>
            <div className='relative aspect-square w-full '>
              <Image
                src={LogoImage}
                alt='Chayil Global Logo'
                fill
                priority
                sizes='(max-width: 1000px) 260px, 420px'
                className='object-contain scale-125 drop-shadow-[0_0_30px_rgba(223,255,143,0.2)]'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

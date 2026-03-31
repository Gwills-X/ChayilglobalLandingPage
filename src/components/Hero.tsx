"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Assuming Next.js
import LogoImage from "../../public/chayilGlobalLogo (2).png";

export default function Hero() {
  return (
    <section className='relative min-h-screen pb-10 w-full flex items-center overflow-hidden  text-white'>
      {/* --- LAYER 1: The Background Image ---
        (Referenced from your fixed path)
      */}

      {/* --- LAYER 2: GLOBAL COLOR OVERLAY (The 'Shadow Cast') ---
        This darkens the *entire* image uniformly by 40%
      */}
      <div className='absolute inset-0 z-10 bg-black/30 pointer-events-none' />

      {/* --- LAYER 3: LOCAL TEXT CONTRAST OVERLAY ---
        This acts like a huge, soft shadow cast directly behind the text area on the left.
        It transitions from darker (on the left) to transparent (on the right) 
        to preserve the visibility of the image details and your logo on the right.
      */}
      <div className='absolute inset-y-0 left-0 w-3/4 z-15  pointer-events-none' />

      {/* --- MAIN CONTENT CONTAINER (Z-20 ensures it's above all overlays) ---
       */}
      <div className='relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24'>
        {/* Left Column: Text Content */}
        <div className='flex-1 text-center md:text-left pt-20 max-lg:pt-0 '>
          <motion.h1
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className='text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-tight tracking-tight max-w-2xl mx-auto md:mx-0 '>
            Investing in Africa’s Next Era of Growth, Leadership & Impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className='text-base sm:text-lg text-gray-200 mb-12 leading-relaxed max-w-xl mx-auto md:mx-0 '>
            Chayil Global is building a strategic network of investors,
            partners, and institutions committed to unlocking transformative
            opportunities across Africa through enterprise, leadership
            development, and faith-rooted impact.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='flex justify-center md:justify-start'>
            <button className='px-12 py-5 bg-[#DFFF8F] text-black font-semibold rounded-full shadow-[0_10px_30px_rgba(223,255,143,0.3)] hover:scale-105 transition-transform duration-300 text-lg flex items-center gap-3'>
              Join the Network
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-5 h-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Logo */}
        <div className='flex-1 flex justify-center md:justify-end'>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className='relative'>
            {/* Minimal background border effect for context, backdrop-blur for depth */}
            <div className='p-4   rounded-3xl '>
              <Image
                src={LogoImage}
                alt='Chayil Global Logo'
                width={420} // Slightly larger
                height={420}
                className='rounded-2xl object-contain ' // Soft light bounce on the logo
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

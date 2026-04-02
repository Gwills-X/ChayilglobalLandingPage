"use client";

import { motion } from "framer-motion";

const targetAudience = [
  {
    title: "Global Investors",
    desc: "Seeking long-term African growth opportunities through asset-backed ventures.",
  },
  {
    title: "Strategic Partners",
    desc: "Institutional collaborators and experts helping shape the platform's infrastructure.",
  },
  {
    title: "Philanthropic Leaders",
    desc: "Individuals and organizations interested in creating a legacy of societal impact.",
  },
  {
    title: "Diaspora Leaders",
    desc: "Seeking meaningful and structured continental investment opportunities.",
  },
];

const memberBenefits = [
  "Private project briefings",
  "Early access to strategic ventures",
  "Investment partnership opportunities",
  "Invitations to leadership and investor briefings",
];

export default function Network() {
  return (
    <section
      className='relative py-32 px-6 text-white overflow-hidden bg-transparent'
      id='network'>
      {/* Subtle top-centered glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-[#DFFF8F]/10 blur-[100px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* --- HEADER --- */}
        <div className='text-center mb-20'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight'>
            The Chayil Global{" "}
            <span className='text-[#DFFF8F]'>Founding Network</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-gray-200 leading-relaxed text-lg max-w-3xl mx-auto'>
            The Founding Network brings together investors, partners and
            institutional allies who share the vision of building leadership
            institutions and long-term development initiatives across Africa.
          </motion.p>
        </div>

        {/* --- WHO IT'S FOR (GRID CARDS) --- */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24'>
          {targetAudience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className='group relative p-8 rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all hover:border-[#DFFF8F]/20'>
              <div className='w-2 h-2 rounded-full bg-[#DFFF8F] mb-6 shadow-[0_0_10px_#DFFF8F]' />
              <h3 className='text-lg font-bold mb-3 group-hover:text-[#DFFF8F] transition-colors'>
                {item.title}
              </h3>
              <p className='text-gray-200 text-xs leading-relaxed group-hover:text-gray-300'>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- WHAT MEMBERS RECEIVE (HIGHLIGHT BOX) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className='max-w-4xl mx-auto p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-md'>
          <h3 className='text-xl font-bold mb-8 text-[#DFFF8F] text-center uppercase tracking-widest'>
            Member Privileges
          </h3>
          <div className='grid sm:grid-cols-2 gap-6'>
            {memberBenefits.map((benefit, idx) => (
              <div key={idx} className='flex items-center gap-4 text-gray-300'>
                <span className='text-[#DFFF8F] text-xl'>✦</span>
                <span className='text-sm font-medium'>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- FOOTER STATEMENT --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className='mt-16 text-center'>
          <p className='text-gray-300 italic text-sm w-full mx-auto'>
            Participation in the Founding Network positions partners at the
            early stages of a platform designed to build long-term institutional
            initiatives across Africa.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            className='h-[1px] bg-gradient-to-r from-transparent via-[#DFFF8F]/30 to-transparent mx-auto mt-8'
          />
        </motion.div>
      </div>
    </section>
  );
}

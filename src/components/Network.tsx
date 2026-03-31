"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Private Access",
    desc: "Early insight into upcoming initiatives and strategic projects.",
  },
  {
    title: "Strategic Briefings",
    desc: "Invitations to private presentations and leadership updates.",
  },
  {
    title: "Priority Positioning",
    desc: "Early access to opportunities before public visibility.",
  },
  {
    title: "Legacy Participation",
    desc: "Contribute to long-term impact across nations.",
  },
];

export default function Network() {
  return (
    <section
      className='relative py-24 px-6  text-white overflow-hidden'
      id='network'>
      {/* Subtle top-centered glow to spotlight the heading */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-[#DFFF8F]/10 blur-[100px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-5xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-3xl md:text-5xl font-serif font-bold mb-8 tracking-tight'>
          The Chayil Global{" "}
          <span className='text-[#DFFF8F]'>Founding Network</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto mb-16'>
          We are assembling a select group of early investors, partners and
          strategic allies who will help shape the first phase of Chayil
          Global’s expansion.
        </motion.p>

        <div className='grid md:grid-cols-2 gap-6 text-left'>
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className='group relative p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all hover:border-[#DFFF8F]/20'>
              {/* Subtle accent icon/dot */}
              <div className='w-2 h-2 rounded-full bg-[#DFFF8F] mb-4 shadow-[0_0_10px_#DFFF8F]' />

              <h3 className='text-xl font-semibold mb-3 group-hover:text-[#DFFF8F] transition-colors'>
                {item.title}
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed group-hover:text-gray-300'>
                {item.desc}
              </p>

              {/* Hover Glow Effect */}
              <div className='absolute inset-0 rounded-3xl bg-[#DFFF8F]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className='h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-20'
        />
      </div>
    </section>
  );
}

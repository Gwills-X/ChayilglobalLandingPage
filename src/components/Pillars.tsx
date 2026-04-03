"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Leadership & Institutional Development",
    description:
      "Developing leaders through structured training initiatives including the Chayil School of Leadership and formation programmes designed to equip the next generation.",
    number: "01",
  },
  {
    title: "Enterprise & Strategic Ventures",
    description:
      "Enterprise & Strategic Ventures builds asset-backed ventures across agriculture, land development, media and creative industries through platforms such as Chayil Assets, Chayil Digital, Chayil TV, Chayil Couture and Chayil Angels, supported by the Chayil Global Talent Network, which connects investors with high-potential African talent to accelerate enterprise growth and scalable opportunities.",
    number: "02",
  },
  {
    title: "Kingdom Impact & Social Transformation",
    description:
      "Chayil Global integrates enterprise with humanitarian and spiritual impact through initiatives supporting widows, families and communities.                                  Kingdom Impact Missions -        *Worship City Project *Research University ",
    number: "03",
  },
];

export default function Pillars() {
  return (
    <section
      className='relative py-32 px-6 text-white overflow-hidden bg-transparent'
      id='pillars'>
      {/* Decorative background flare */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-[#c6a85a]/5 blur-[150px] rounded-full pointer-events-none' />

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* --- SECTION HEADER: The Institutional Model Intro --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-24'>
          <h2 className='text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight'>
            The Chayil Global{" "}
            <span className='text-[#c6a85a]'>Institutional Model</span>
          </h2>
          <p className='max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed mb-10'>
            Chayil Global operates as a multi-sector platform designed to
            integrate leadership development, enterprise ventures, media
            platforms and mission-driven initiatives to create both economic
            opportunity and long-term societal impact.
          </p>
          <div className='h-1 w-20 bg-[#c6a85a] mx-auto rounded-full' />
        </motion.div>

        {/* --- THE THREE PILLARS GRID --- */}
        <div className='grid md:grid-cols-3 gap-8 mb-24'>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className='relative p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm group hover:border-[#c6a85a]/30 transition-all duration-500'>
              <span className='block text-[#c6a85a] font-mono text-sm mb-6 tracking-widest opacity-80 group-hover:opacity-100 transition-opacity'>
                //{pillar.number}
              </span>

              <h3 className='text-2xl font-bold mb-6 group-hover:text-[#c6a85a] transition-colors leading-tight'>
                {pillar.title}
              </h3>

              <p className='text-gray-300 leading-relaxed text-base group-hover:text-gray-100 transition-colors'>
                {pillar.description}
              </p>

              <div className='absolute bottom-4 right-4 w-12 h-12 bg-[#c6a85a]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity' />
            </motion.div>
          ))}
        </div>

        {/* --- SECTION FOOTER: Closing Legacy Line --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-center max-w-4xl mx-auto pt-10 border-t border-white/5'>
          <p className='text-gray-300 font-serif italic text-xl leading-relaxed'>
            Chayil Global combines leadership development, enterprise and
            kingdom-focused initiatives to build institutions and strategic
            assets designed to serve communities and create lasting impact
            across generations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

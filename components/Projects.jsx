"use client";
import { motion } from "framer-motion";

const row1 = [
  "/projects/1.png",
  "/projects/2.png",
  "/projects/3.png",
  "/projects/4.png",
];

const row2 = [
  "/projects/5.png",
  "/projects/6.png",
  "/projects/7.png",
  "/projects/8.png",
];

export default function Projects() {
  // Duplicate arrays to create a seamless infinite scroll loop.
  // We double it so the motion animates from 0 to -50% smoothly.
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section id="work" className="w-full py-24 overflow-hidden relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 mb-16 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 text-sm border border-white/10 rounded-full px-4 py-1.5 bg-white/3 mb-6"
            style={{ color: "#9ca3af" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#feda6a]" />
            Our Portfolio
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Featured Projects
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative w-full">
        {/* Top and Bottom Gradients for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-linear-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Right to Left */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            className="flex gap-6 md:gap-8 w-max px-4"
          >
            {duplicatedRow1.map((src, idx) => (
              <div
                key={`row1-${idx}`}
                className="relative w-[320px] md:w-[480px] h-[200px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-white/5"
              >
                <img
                  src={src}
                  alt={`Project image ${idx}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", 0] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            className="flex gap-6 md:gap-8 w-max px-4"
          >
            {duplicatedRow2.map((src, idx) => (
              <div
                key={`row2-${idx}`}
                className="relative w-[320px] md:w-[480px] h-[200px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-white/5"
              >
                <img
                  src={src}
                  alt={`Project image ${idx}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

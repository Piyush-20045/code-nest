import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ContactHeader() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full max-w-[1200px] mx-auto pt-32 pb-16 px-4 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#feda6a]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center"
      >
        <motion.div variants={fadeUp} custom={0} className="mb-6">
          <span className="inline-flex items-center gap-2 text-sm text-gray-400 border border-white/10 rounded-full px-4 py-1.5 bg-white/3">
            <Sparkles className="size-3.5 text-[#feda6a]" />
            Let&apos;s build something amazing
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-none mb-6"
        >
          Contact
          <span className="text-[#feda6a]">.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto"
        >
          Have a project in mind? We&apos;d love to hear about it. Drop us a
          message and let&apos;s make it happen.
        </motion.p>
      </motion.div>
    </section>
  );
}

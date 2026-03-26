"use client";
import { motion } from "framer-motion";
import { services } from "@/constants/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="w-full max-w-[1200px] mx-auto py-24 px-4">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left — Heading */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-32 flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 border border-white/10 rounded-full px-4 py-1.5 w-fit bg-white/3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            What we do
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            All your digital needs handled{" "}
            <span className="text-primary">in record time.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed">
            From design to deployment — we deliver everything your brand needs
            to dominate online, fast.
          </p>
        </div>

        {/* Right — Service pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:w-[60%] flex flex-wrap gap-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={service}
              variants={pillVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(254, 218, 106, 0.4)",
                transition: { duration: 0.2 },
              }}
              className="group relative px-5 py-3 md:px-6 md:py-4 rounded-xl border border-white/10 bg-white/3 backdrop-blur-sm cursor-default transition-colors duration-300 hover:bg-white/6"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              <span className="relative text-sm md:text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                {service}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

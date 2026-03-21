"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full max-w-[1200px] mx-auto py-20 px-4 pt-32 lg:pt-48 flex flex-col items-center text-center z-50"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mb-6 max-w-4xl"
      >
        Websites that help your business grow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
      >
        We design and develop fast, modern websites for businesses that want to
        stand out online.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <Link
          href="#contact"
          className="bg-primary text-primary-foreground h-12 px-8 inline-flex items-center justify-center rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Get Website
        </Link>
        <Link
          href="#work"
          className="bg-card text-foreground border h-12 px-8 inline-flex items-center justify-center rounded-md font-medium text-base hover:bg-white/5 transition-colors"
        >
          View Work
        </Link>
      </motion.div>
    </section>
  );
}

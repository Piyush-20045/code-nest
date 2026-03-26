"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import FloatingCodeCard from "./ui/floating-code-content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full max-w-[1200px] mx-auto py-20 px-4 lg:pt-38 z-50"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left — Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-sm border border-white/10 rounded-full px-4 py-1.5 mb-6 text-gray-400 bg-neutral-900 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full border border-green-400/40 animate-ping" />
              <span className="absolute inset-0 rounded-full border border-green-400/30" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 animate-pulse" />
            </span>
            Available for New Projects
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            Websites that help your business grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl"
          >
            We design and develop fast, modern websites for businesses that want
            to stand out online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground h-11 px-7 inline-flex items-center justify-center gap-2 rounded-md font-semibold text-base hover:opacity-90 transition-opacity group"
            >
              Get Started <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#work"
              className="bg-card text-foreground border h-11 px-8 inline-flex items-center justify-center rounded-md font-medium text-base hover:bg-white/5 transition-colors"
            >
              View Work
            </Link>
          </motion.div>
        </div>

        {/* Right — Floating Code Card Visual */}
        <div className="flex-1 hidden lg:flex justify-center items-center">
          <FloatingCodeCard />
        </div>
      </div>
    </section>
  );
}

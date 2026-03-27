"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Zap } from "lucide-react";
import Link from "next/link";

const perks = [
  "Unlimited revisions",
  "Lightning-fast delivery",
  "No hidden costs",
];

export default function Cta() {
  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/2"
      >
        {/* Ambient glow effects */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#feda6a]/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#feda6a]/4 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] bg-[#E87811]/4 rounded-full blur-[80px] pointer-events-none" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="w-full relative">
          {/* Black Basic Grid Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#0a0a0a",
              backgroundImage: `
        linear-gradient(to right, rgba(31, 29, 28, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(31, 29, 28, 0.4) 1px, transparent 1px)
      `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-12">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] w-full max-w-4xl mb-4"
            >
              Ready to Build
              <br />
              Something <span className="text-[#feda6a]">Amazing?</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-base md:text-lg max-w-2xl mb-6 leading-relaxed"
            >
              Your website works around the clock — even when you don&apos;t.
              Let&apos;s craft one that truly represents your brand and drives
              real results.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-[#feda6a] text-[#0a0a0a] font-semibold text-base px-8 py-3.5 rounded-full hover:bg-[#feda6a]/90 transition-all duration-300 shadow-lg shadow-[#feda6a]/10 hover:shadow-[#feda6a]/20"
              >
                Start Your Project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 mt-6"
            >
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#feda6a]/10 flex items-center justify-center">
                    <Check className="size-2.5 text-[#feda6a]" />
                  </div>
                  <span className="text-gray-500 text-sm">{perk}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

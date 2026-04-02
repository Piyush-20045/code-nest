"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { features } from "@/constants/feature";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1200px] mx-auto px-4 py-24 relative z-10"
    >
      {/* Header */}
      <div className="text-center mb-16">
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
            Why Choose Us
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: "#ffffff" }}
          >
            Experience The Benefits
            <br className="hidden md:block" /> Of Our Expertise
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "#9ca3af" }}
          >
            We combine strategic design with robust engineering to deliver
            websites that not only look stunning but drive real, measurable
            results.
          </p>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/2 p-6 lg:p-8 flex flex-col items-center text-center group hover:bg-white/4 transition-colors"
          >
            {/* Animated Grid Hero area for icon */}
            <div className="w-full h-40 md:h-48 rounded-xl bg-[#0a0a0a] border border-white/5 mb-8 relative overflow-hidden flex items-center justify-center">
              {/* Subtle Grid Pattern */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#feda6a]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Icon Circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-[#feda6a] flex items-center justify-center shadow-[0_0_20px_rgba(254,218,106,0.3)] group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3" style={{ color: "#ffffff" }}>
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center"
      >
        <Link
          href="#pricing"
          className="group inline-flex items-center justify-center gap-2 font-semibold text-sm px-8 py-3.5 rounded-full bg-[#feda6a] text-[#0a0a0a] hover:bg-[#feda6a]/90 shadow-lg shadow-[#feda6a]/10 hover:shadow-[#feda6a]/25 transition-all duration-300"
        >
          See Pricing
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
    </section>
  );
}

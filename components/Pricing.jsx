"use client";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { plans } from "@/constants/pricing-data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full max-w-[1200px] mx-auto px-4 py-24 relative z-10"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span
          className="inline-flex items-center gap-2 text-sm border border-white/10 rounded-full px-4 py-1.5 bg-white/3 mb-6"
          style={{ color: "#9ca3af" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#feda6a]" />
          Simple pricing
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          style={{ color: "#ffffff" }}
        >
          Transparent Pricing Plans
        </h2>
        <p
          style={{ color: "#9ca3af" }}
          className="text-base md:text-lg max-w-xl mx-auto"
        >
          No surprises. Pick a plan that suits your needs and let&apos;s build
          something great together.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl border p-6 md:p-8 flex flex-col ${
              plan.popular
                ? "border-[#feda6a]/30 bg-[#feda6a]/3"
                : "border-white/10 bg-white/2"
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#feda6a] text-[#0a0a0a] px-3 py-1 rounded-full">
                  <Star className="size-3 fill-current" />
                  Popular
                </span>
              </div>
            )}

            {/* Plan name & description */}
            <div className="mb-6">
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "#ffffff" }}
              >
                {plan.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6b7280" }}
              >
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span
                  className="text-4xl md:text-5xl font-extrabold tracking-tight"
                  style={{ color: "#ffffff" }}
                >
                  ₹{plan.price}
                </span>
                {plan.priceSuffix && (
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#feda6a" }}
                  >
                    {plan.priceSuffix}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 block" style={{ color: "#6b7280" }}>
                one-time payment
              </span>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className={`group w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 mb-8 ${
                plan.popular
                  ? "bg-[#feda6a] text-[#0a0a0a] hover:bg-[#feda6a]/90 shadow-lg shadow-[#feda6a]/10"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              }`}
            >
              Get Started
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Features */}
            <div className="flex-1">
              <p
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: "#6b7280" }}
              >
                What&apos;s included:
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? "bg-[#feda6a]/15" : "bg-white/5"
                      }`}
                    >
                      <Check
                        className="size-3"
                        style={{
                          color: plan.popular ? "#feda6a" : "#9ca3af",
                        }}
                      />
                    </div>
                    <span className="text-sm" style={{ color: "#d1d5db" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function FloatingCodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-full max-w-md"
    >
      {/* Ambient glow orbs */}
      <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-[#E87811]/10 blur-3xl" />
      <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#E87811]/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#E87811]/5 blur-[80px]" />

      {/* Floating code card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="rounded-xl border border-white/10 bg-[#161616]/80 backdrop-blur-xl shadow-2xl shadow-[#E87811]/5 overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-gray-500 font-mono">
              index.jsx
            </span>
          </div>

          {/* Code content */}
          <div className="px-5 py-4 font-mono text-sm leading-relaxed">
            <div className="flex gap-4">
              <div className="text-white/20 text-right select-none w-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
              <div>
                <div>
                  <span className="text-[#c792ea]">const</span>{" "}
                  <span className="text-[#82aaff]">CodeNest</span>{" "}
                  <span className="text-[#89ddff]">=</span>{" "}
                  <span className="text-[#89ddff]">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#f07178]">design</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-[#c3e88d]">
                    &apos;pixel-perfect&apos;
                  </span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#f07178]">performance</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-[#c3e88d]">
                    &apos;blazing-fast&apos;
                  </span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#f07178]">stack</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-[#89ddff]">[</span>
                </div>
                <div className="pl-8">
                  <span className="text-[#c3e88d]">&apos;Next.js&apos;</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-[#c3e88d]">&apos;React&apos;</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-8">
                  <span className="text-[#c3e88d]">&apos;Tailwind&apos;</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#89ddff]">]</span>
                  <span className="text-white/40">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#f07178]">result</span>
                  <span className="text-white/60">:</span>{" "}
                  <span className="text-[#c3e88d]">&apos;🚀 growth&apos;</span>
                </div>
                <div>
                  <span className="text-[#89ddff]">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small floating accent card */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -bottom-6 -left-6 rounded-lg border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-sm px-4 py-2.5 shadow-xl"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
            <span className="text-xs text-gray-400 font-mono">
              Build successful
            </span>
          </div>
        </motion.div>

        {/* Top-right floating accent */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-4 -right-4 rounded-lg border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-sm px-3 py-2 shadow-xl"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-xs">⚡</span>
            <span className="text-xs text-[#feda6a] font-mono font-medium">
              99 / 100
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

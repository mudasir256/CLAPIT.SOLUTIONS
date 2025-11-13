"use client";

import { stats } from "@/data/stats";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Stats() {
  return (
    <section className="relative py-16 md:py-24 lg:mx-16 mx-4 mt-10">
      <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,158,137,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: { label: string; icon: React.ReactNode; description: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-black/80">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'linear-gradient(135deg, rgba(250, 158, 137, 0.1) 0%, transparent 50%)',
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
          animate={{
            boxShadow: isHovered 
              ? "0 0 30px rgba(250, 158, 137, 0.2)"
              : "0 0 0px rgba(250, 158, 137, 0)",
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-secondary via-white to-secondary"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            className="mb-6"
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="relative w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
              animate={{
                backgroundColor: isHovered 
                  ? "rgba(250, 158, 137, 0.2)" 
                  : "rgba(255, 255, 255, 0.1)",
                borderColor: isHovered 
                  ? "rgba(250, 158, 137, 0.4)" 
                  : "rgba(255, 255, 255, 0.2)",
                boxShadow: isHovered 
                  ? "0 8px 24px rgba(250, 158, 137, 0.2)"
                  : "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white">
                {stat.icon}
              </div>
            </motion.div>
          </motion.div>

          <div className="flex-grow space-y-3">
            <motion.h3
              className="text-xl md:text-2xl font-bold text-light"
              animate={{
                color: isHovered ? "rgb(250, 158, 137)" : "rgb(255, 255, 255)",
              }}
              transition={{ duration: 0.3 }}
            >
              {stat.label}
            </motion.h3>
            <motion.p
              className="text-base md:text-lg text-white/70 leading-relaxed"
              animate={{
                color: isHovered ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.7)",
              }}
              transition={{ duration: 0.3 }}
            >
              {stat.description}
            </motion.p>
          </div>

          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </motion.div>
  );
}

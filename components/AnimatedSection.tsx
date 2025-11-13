"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotate: -5,
      skewX: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      skewX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ scale: 1.02 }}
      style={{
        transformOrigin: "center bottom",
      }}
    >
      {children}
    </motion.div>
  );
}

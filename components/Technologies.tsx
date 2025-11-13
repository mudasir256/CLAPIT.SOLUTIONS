"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Service } from "./types";
import AnimatedSection1 from "./AnimatedSection1";
import { IMAGES } from "@/public/images";

export default function Technologies({ service }: { service: Service }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto w-full flex space-x-10 flex-col lg:flex-row  mt-20 mb-20"
    >
      <div className="lg:w-[60%]  w-full h-[36vh] mb-4 flex   sticky top-24 p-6 bg-dark z-[999] rounded-2xl text-primary">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading">
            <AnimatedSection1>{service.technologyTitle}</AnimatedSection1>
          </h1>
          <p className="text-sm lg:text-xl mt-5 font-body text-medium ">
            {service.technologyDescription}
          </p>
        </div>
      </div>

      <motion.div className="lg:w-[60%] w-[90%] overflow-hidden ">
        <motion.ul
          className="space-y-12 text-dark"
          style={{ y }}
          role="list"
        >
          {(service.technologies || []).map((tech, index) => (
            <motion.li
              key={index}
              className="text-lg lg:text-xl font-body group "
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              role="listitem"
            >
              <motion.div
                className="p-6 bg-light rounded-xl shadow-lg mr-9 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ backgroundColor: "#f8fafc" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    backgroundImage: `url(/gif/animation.gif)`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                  <h2 className="text-2xl lg:text-2xl font-semibold font-heading flex items-center gap-2">
                    <motion.span
                      className="text-3xl"
                      animate={{ rotate: [0, 10, -5, 0] }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        duration: 0.8,
                        type: "tween",
                        ease: "easeInOut",
                      }}
                    >
                      {tech.icon}
                    </motion.span>
                    {tech.title}
                  </h2>
                  <motion.p
                    className="text-lg mt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  >
                    {tech.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

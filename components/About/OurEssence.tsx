"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/public/images";

export default function OurEssence() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0.3, 0.3, 0.7],
    isMobile ? [0, 0, 0] : [-280, -710, 0]
  );
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 0]);
  return (
    <>
      <div
        className="text-2xl md:text-4xl font-bold text-secondary flex justify-center items-center  h-48 w-48 md:h-64 md:w-64 bg-cover bg-center rounded-full mx-auto shadow-xl border-4 border-white"
        style={{ backgroundImage: `url(/gif/gif4.gif)` }}
      >
        Our Essence
      </div>
      <div
        ref={containerRef}
        className="flex justify-center items-center flex-col relative lg:mt-0 mt-8 "
      >
        <div className="relative">
          <Image
            src={IMAGES.Laptop}
            alt="Our Essence"
            width={1150}
            height={1150}
          />
        </div>

        <div className="flex flex-col items-center text-dark  h-[130px] w-[100%]">
          <h3 className="text-2xl md:text-4xl font-bold">Excellence in Every Detail</h3>
          <p className="text-lg lg:text-2xl mt-4 text-darkMedium text-center">
            We combine technical expertise with creative vision to deliver solutions that exceed expectations and drive measurable results.
          </p>
        </div>

        <motion.div
          style={{
            y,
            rotateX,
            backgroundImage: `url(${IMAGES.MacbookBg?.src || IMAGES.MacbookBg})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-lg text-light lg:static absolute top-0 p-4 md:p-8 items-center w-[300px] md:w-[440px] h-[200px] md:h-[270px] shadow-2xl"
        >
          <div className="flex justify-between">
            <div className="text-start">
              <h1 className="text-xl md:text-4xl font-semibold">
                100<span className="text-lg md:text-2xl">+</span>
              </h1>
              <p className="text-[10px] md:text-[20px] text-light w-20 md:w-24">
                Project Delivered
              </p>
            </div>
            <div className="text-start">
              <h1 className="text-xl md:text-4xl font-semibold">
              75<span className="text-lg md:text-2xl">+</span>
              </h1>
              <p className="text-[10px] md:text-[20px] text-light w-20 md:w-24">
                Happy Clients
              </p>
            </div>
            <div className="text-start">
              <h1 className="text-xl md:text-4xl font-semibold">
              10<span className="text-lg md:text-2xl">+</span>
              </h1>
              <p className="text-[10px] md:text-[20px] text-light w-20 md:w-24">
                Years of Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

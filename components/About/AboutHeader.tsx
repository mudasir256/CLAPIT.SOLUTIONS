"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/public/images";

function IndustryHeader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const headingRange = isMobile ? [0, 0.2] : [0, 0.3];
  const blockRange = isMobile ? [0.05, 0.15] : [0.1, 0.2];

  const headingY = useTransform(scrollYProgress, headingRange, [0, -50]);
  const headingOpacity = useTransform(scrollYProgress, headingRange, [1, 0]);
  const imageOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0.05, 0.2] : [0.1, 0.3],
    [0, 1]
  );

  const block1Y = useTransform(scrollYProgress, blockRange, [50, 0]);
  const block2Y = useTransform(
    scrollYProgress,
    isMobile ? [0.15, 0.25] : [0.2, 0.3],
    [50, 0]
  );
  const block3Y = useTransform(
    scrollYProgress,
    isMobile ? [0.25, 0.35] : [0.3, 0.4],
    [50, 0]
  );
  const block4Y = useTransform(
    scrollYProgress,
    isMobile ? [0.35, 0.45] : [0.4, 0.5],
    [50, 0]
  );
  const block5Y = useTransform(
    scrollYProgress,
    isMobile ? [0.45, 0.55] : [0.5, 0.6],
    [50, 0]
  );

  const block1Opacity = useTransform(scrollYProgress, blockRange, [0, 1]);
  const block2Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.15, 0.25] : [0.2, 0.3],
    [0, 1]
  );
  const block3Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.25, 0.35] : [0.3, 0.4],
    [0, 1]
  );
  const block4Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.35, 0.45] : [0.4, 0.5],
    [0, 1]
  );
  const block5Opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.45, 0.55] : [0.5, 0.6],
    [0, 1]
  );

  const imageY = useTransform(scrollYProgress, [0.1, 0.5], [300, 0]);
  const imageY1 = useTransform(scrollYProgress, [0.1, 0.5], [-500, 0]);
  const imageScale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
  const image1X = useTransform(scrollYProgress, [0.1, 0.5], [-100, 0]);
  const image2X = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
  const image3X = useTransform(scrollYProgress, [0.1, 0.5], [-50, 0]);
  const image4X = useTransform(scrollYProgress, [0.1, 0.5], [50, 0]);

  return (
    <div ref={containerRef} className="h-[200vh] relative ">
      <div className="h-screen sticky top-24 overflow-hidden bg-light mx-2 sm:mx-20 my-2 sm:my-5 rounded-2xl">
        <div className="h-screen flex items-center justify-center relative z-10">
          <motion.h1
            style={{ y: headingY, opacity: headingOpacity }}
            className="text-3xl sm:text-6xl md:text-7xl font-bold text-center text-dark leading-tight px-4"
          >
            Transforming Ideas into Reality <br className="hidden sm:block" /> with AI-Powered Innovation.
          </motion.h1>
        </div>

        <motion.div
          style={{ opacity: imageOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-[900px] max-w-5xl mx-auto hidden sm:block">
            <div className="flex justify-center items-center">
              <motion.div
                style={{
                  y: imageY,
                  x: image1X,
                  scale: imageScale,
                }}
                className="absolute left-4 top-1/3 w-[250px] h-[250px]"
              >
                <div 
                  className="bg-darkMedium rotate-45 text-secondary h-full w-full text-2xl font-semibold flex items-center justify-center pr-5 text-nowrap overflow-hidden relative"
                >
                  <div
                    className="absolute inset-0 -rotate-45 w-[150%] h-[150%] -left-1/4 -top-1/4"
                    style={{
                      backgroundImage: `url(${IMAGES.Visionary?.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <span className="-rotate-45 relative z-10 text-light font-bold text-2xl">Visionary</span>
                </div>
              </motion.div>
              <motion.div
                style={{
                  y: imageY1,
                  scale: imageScale,
                }}
                className="absolute top-1/3 w-[250px] h-[250px]"
              >
                <div className="bg-medium rotate-45 text-black h-full w-full text-2xl font-semibold flex items-center justify-center text-nowrap relative overflow-hidden">
                  <div
                    className="absolute inset-0 -rotate-45 w-[150%] h-[150%] -left-1/4 -top-1/4"
                    style={{
                      backgroundImage: `url(${IMAGES.AI?.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <span className="-rotate-45 relative z-10">Building the Future with AI</span>
                </div>
              </motion.div>
              <motion.div
                style={{
                  y: imageY,
                  x: image2X,
                  scale: imageScale,
                }}
                className="absolute right-4 top-1/3 w-[250px] h-[250px]"
              >
                <div className="bg-darkMedium rotate-45 text-secondary h-full w-full text-2xl font-semibold flex items-center justify-center pl-5 text-nowrap relative overflow-hidden">
                  <div
                    className="absolute inset-0 -rotate-45 w-[150%] h-[150%] -left-1/4 -top-1/4"
                    style={{
                      backgroundImage: `url(${IMAGES.ActionOriented?.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <span className="-rotate-45 relative z-10 text-light font-bold text-2xl">Action-oriented</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              style={{
                y: imageY,
                x: image3X,
                scale: imageScale,
              }}
              className="absolute left-[20%] bottom-36 w-[250px] h-[250px]"
            >
              <div className="bg-secondary rotate-45 text-light h-full w-full text-2xl font-semibold  flex items-center justify-center text-nowrap">
                <span className="-rotate-45">Tech-aligned</span>
              </div>
            </motion.div>

            <motion.div
              style={{
                y: imageY,
                x: image4X,
                scale: imageScale,
              }}
              className="absolute right-[20%] -translate-x-1/2 bottom-36 w-[250px] h-[250px]"
            >
              <div className="bg-secondary rotate-45 text-light h-full w-full text-2xl font-semibold flex items-center justify-center text-nowrap">
                <span className="-rotate-45">Value-based</span>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full h-full sm:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-4 px-4">
              <motion.div
                style={{
                  y: block1Y,
                  opacity: block1Opacity,
                }}
                className="w-full max-w-[280px] h-[70px] bg-darkMedium rounded-xl overflow-hidden"
              >
                <div className="h-full w-full text-sm font-bold flex items-center justify-center text-secondary px-4 text-center">
                  Building the Future with AI
                </div>
              </motion.div>

              <motion.div
                style={{
                  y: block2Y,
                  opacity: block2Opacity,
                }}
                className="w-full max-w-[280px] h-[70px] bg-medium rounded-xl overflow-hidden"
              >
                <div className="h-full w-full text-sm font-bold flex items-center justify-center text-black px-4 text-center">
                  Visionary
                </div>
              </motion.div>

              <motion.div
                style={{
                  y: block3Y,
                  opacity: block3Opacity,
                }}
                className="w-full max-w-[280px] h-[70px] bg-lightMedium rounded-xl overflow-hidden"
              >
                <div className="h-full w-full text-sm font-bold flex items-center justify-center text-light px-4 text-center">
                  Action-oriented
                </div>
              </motion.div>

              <motion.div
                style={{
                  y: block4Y,
                  opacity: block4Opacity,
                }}
                className="w-full max-w-[280px] h-[70px] bg-lightMedium/80 rounded-xl overflow-hidden"
              >
                <div className="h-full w-full text-sm font-bold flex items-center justify-center text-dark px-4 text-center">
                  Tech-aligned
                </div>
              </motion.div>

              <motion.div
                style={{
                  y: block5Y,
                  opacity: block5Opacity,
                }}
                className="w-full max-w-[280px] h-[70px] bg-[#feeae6] rounded-xl overflow-hidden"
              >
                <div className="h-full w-full text-sm font-bold flex items-center justify-center text-dark px-4 text-center">
                  Value-based
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-secondary/10 rounded-full blur-[60px] sm:blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-secondary/10 rounded-full blur-[60px] sm:blur-[120px]" />
        </div>
      </div>
    </div>
  );
}

export default IndustryHeader;

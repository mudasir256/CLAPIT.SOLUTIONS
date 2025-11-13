"use client";

import { useState } from "react";
import HorizontalScroll from "../HorizontalScroll";
import AnimatedSection1 from "../AnimatedSection1";
import Image from "next/image";
import { IMAGES } from "@/public/images";
import { motion, Variants } from "framer-motion";
import RightLongArrowIcon from "@/public/svg/RightLongArrowIcon";
import Link from "next/link";

export default function WhyChooseUs() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -150, scale: 0.85 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 130,
        damping: 12,
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 150, scale: 0.85 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 130,
        damping: 12,
      },
    },
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setPosition({
      x: (clientX / window.innerWidth - 0.5) * 200,
      y: (clientY / window.innerHeight - 0.5) * 200,
    });
  };

  const sections = [
    {
      id: "why-choose-us",
      content: (
        <div className="relative overflow-hidden min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-[100vw] h-[400px] sm:h-[600px] md:h-[800px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, #f84b07 0%, transparent 70%)`,
              }}
            />
            <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-[100vw] h-[300px] sm:h-[400px] md:h-[600px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, #F85C1E 0%, transparent 70%)`,
              }}
            />
            
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 rotate-45 border-2 border-secondary/20" />
            <div className="absolute bottom-16 sm:bottom-32 left-10 sm:left-20 w-20 h-20 sm:w-40 sm:h-40 -rotate-12 border-2 border-lightMedium/20" />
          </div>

          <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-secondary" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-pulse" />
              <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-secondary" />
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl flex flex-wrap justify-center font-black leading-[0.9] sm:leading-[0.85] tracking-tight items-center gap-2 sm:gap-0">
            <AnimatedSection1>
                <span className="text-dark">Why Believe </span>
                <span className="" style={{
                  background: `linear-gradient(135deg, #f84b07 0%, #F85C1E 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  in Us
                </span>
            </AnimatedSection1>
          </h1>

            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <div className="h-px w-16 sm:w-32 bg-gradient-to-r from-transparent to-lightMedium" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rotate-45 border-2 border-secondary" />
              <div className="h-px w-16 sm:w-32 bg-gradient-to-l from-transparent to-lightMedium" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "innovation",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 min-h-screen w-full gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 relative overflow-hidden"
          style={{
            background: `linear-gradient(to bottom, #efefef 0%, #E0E0E0 100%)`,
          }}
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #161616 0px, #161616 2px, transparent 2px, transparent 50px)`,
            }}
          />

          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 sm:border-4 border-secondary/30 animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 rotate-45 border-2 sm:border-4 border-lightMedium/30" />

          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 relative z-10 px-2 sm:px-4">
          <motion.div
            className="w-full md:w-1/2 space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4 xl:space-y-5 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >

            <div className="inline-block relative">
              <div className="absolute -inset-1 sm:-inset-2 bg-secondary/20 blur-xl rounded-full" />
              <div className="relative bg-dark text-secondary px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em]"
                style={{
                  clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
                }}
              >
            Why Believe in Us
              </div>
            </div>

            <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-black leading-[1.1] text-dark">
                Innovation Meets
              </h1>
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                <div className="h-0.5 sm:h-1 w-6 sm:w-8 md:w-10 lg:w-12 bg-gradient-to-r from-secondary to-lightMedium rounded-full flex-shrink-0" />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-black leading-[1.1]"
                  style={{
                    background: `linear-gradient(135deg, #f84b07 0%, #F85C1E 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Excellence
            </h1>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl font-bold text-darkMedium">
                Driven by Innovation
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -left-2 sm:-left-3 md:-left-6 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-secondary via-lightMedium to-transparent rounded-full" />
              <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-medium leading-relaxed pl-2 sm:pl-3 md:pl-2">
            Combining technical expertise with creative vision, we deliver solutions that not only meet your needs but exceed expectations and drive measurable results.
            </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 pt-1.5 sm:pt-2 md:pt-2.5 w-full">
              {["Web Development", "Mobile Apps", "Cloud Solutions"].map((platform) => (
                <button key={platform}
                  className="group px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-3 bg-dark text-primary font-bold text-[10px] sm:text-xs md:text-sm lg:text-base rounded-full relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex-shrink"
                  style={{
                    boxShadow: `0 4px 20px rgba(248, 75, 7, 0.2)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-lightMedium opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 whitespace-nowrap">{platform}</span>
              </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-3.5 xl:space-y-4 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            {[
              { percent: "50%", title: "Technology", desc: "Modern frameworks, scalable architectures, and intelligent systems built for tomorrow's challenges." },
              { percent: "30%", title: "Design", desc: "Creative storytelling, visual identity, and user experiences that connect and inspire." },
              { percent: "20%", title: "Strategy", desc: "Data-driven insights, growth planning, and optimization strategies that deliver real impact." }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="bg-primary rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-5 transition-all duration-300 hover:shadow-2xl relative overflow-hidden w-full"
                  style={{
                    border: `2px solid ${idx === 0 ? '#f84b07' : idx === 1 ? '#F85C1E' : '#9B9FA6'}`,
                  }}
                >
                  <div className="absolute top-2 sm:top-2.5 md:top-3 lg:top-4 right-2 sm:right-2.5 md:right-3 lg:right-4 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center font-black text-xs sm:text-sm md:text-lg lg:text-2xl text-primary"
                    style={{
                      background: `linear-gradient(135deg, ${idx === 0 ? '#f84b07' : idx === 1 ? '#F85C1E' : '#54565A'} 0%, ${idx === 0 ? '#F85C1E' : idx === 1 ? '#f84b07' : '#9B9FA6'} 100%)`,
                    }}
                  >
                    {item.percent}
              </div>

                  <div className="pr-10 sm:pr-12 md:pr-14 lg:pr-16">
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-black text-dark mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2">
                      {item.title}
                </h4>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-xs xl:text-sm text-medium leading-relaxed">
                      {item.desc}
                </p>
              </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
              </div>
            ))}
          </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: "project",
      content: (
        <motion.section
          className="flex flex-col lg:flex-row justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 items-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 min-h-screen w-full relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          style={{
            background: `linear-gradient(135deg, #161616 0%, #54565A 50%, #161616 100%)`,
          }}
        >
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#f84b07 1px, transparent 1px), linear-gradient(90deg, #f84b07 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-8 w-full lg:w-1/2 relative z-10">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-secondary to-lightMedium flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-dark" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black uppercase text-secondary tracking-[0.1em] sm:tracking-[0.2em]">
            Why Believe in Us
            </h3>
              </div>
              </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 w-full">
              {[
                { value: "100+", label: "Successful launches", position: "top-left" },
                { value: "75+", label: "Client partnerships", position: "top-right" },
                { value: "10+", label: "Years of expertise", position: "bottom-left" },
                { value: "5", label: "Industry recognitions", position: "bottom-right" },
              ].map((stat, index) => (
                <div key={index} className="group relative min-w-0">
                  <div className="bg-background rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-5 h-full transition-all duration-300 group-hover:bg-light relative overflow-hidden w-full min-w-0"
                    style={{
                      border: "2px solid #E0E0E0",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-to-bl from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="pr-0 sm:pr-2 md:pr-3">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-black mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 leading-tight"
                        style={{
                          background: `linear-gradient(135deg, #f84b07 0%, #F85C1E 100%)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {stat.value}
                </h2>
                    </div>
                    <p className="text-darkMedium text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base font-semibold break-words leading-tight">{stat.label}</p>

                    <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-secondary to-lightMedium transition-all duration-500" />
              </div>
              </div>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-gradient-to-br from-secondary/30 to-lightMedium/30 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] blur-xl sm:blur-2xl" />
              
              <div className="relative bg-background rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-3 sm:p-4 md:p-6 overflow-hidden"
                style={{
                  border: "3px solid #E0E0E0",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-secondary rounded-tl-xl sm:rounded-tl-2xl" />
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-lightMedium rounded-br-xl sm:rounded-br-2xl" />
                
            <Image
              src={IMAGES.Scroll}
              alt="Our Work Showcase"
              width={600}
              height={600}
                  className="object-cover rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] relative z-10 w-full h-auto"
            />
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-secondary/30 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-lightMedium/30 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </motion.section>
      ),
    },
    {
      id: "Contect",
      content: (
        <div className="w-full bg-black relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8"
         
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full border-2 border-secondary" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full border-2 border-lightMedium" />
            
            <div className="absolute top-20 right-20 sm:top-40 sm:right-40 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rotate-45 border-2 border-secondary/50" />
            <div className="absolute bottom-20 left-20 sm:bottom-40 sm:left-40 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 -rotate-12 border-2 border-lightMedium/50" />
          </div>

          <motion.section
            className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 items-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 relative z-10 max-w-6xl w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-secondary/30 blur-2xl sm:blur-3xl rounded-full" />
              <div className="relative bg-dark px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 font-black text-sm sm:text-base md:text-lg lg:text-base xl:text-lg uppercase tracking-wider text-center"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                  color: "#f84b07",
                }}
              >
              Ready to get started?
              </div>
            </div>

            <div className="text-center space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-1.5 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-black leading-[1] text-light">
                Let&apos;s build something
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-black leading-[1]"
                style={{
                  background: `linear-gradient(135deg, #f84b07 0%, #F85C1E 50%, #f84b07 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                extraordinary together!
            </h1>
            </div>

            <div className="w-full max-w-2xl mx-auto space-y-3 sm:space-y-4 md:space-y-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-medium text-center leading-relaxed px-4">
                Partner with us to create digital solutions that stand out. Our team combines technical mastery with creative excellence to deliver products that make a lasting impact.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 mt-3 sm:mt-4">
                {[
                  { icon: "⚡", label: "Quick Turnaround", desc: "24-48h response" },
                  { icon: "💬", label: "Expert Consultation", desc: "No obligations" },
                  { icon: "🎯", label: "Dedicated Team", desc: "Quality guaranteed" },
                  { icon: "🚀", label: "Growth Focused", desc: "Long-term success" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-dark/40 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-center border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2">{item.icon}</div>
                    <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary mb-0.5 sm:mb-1">{item.label}</h3>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-medium leading-tight">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              style={{ position: "relative" }}
              onMouseMove={(e) => handleMouseMove(e)}
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-12 bg-gradient-to-r from-secondary/40 to-lightMedium/40 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse" />
              
              <Link href="/contact-us">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex flex-col items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 rounded-full cursor-pointer group"
                  style={{
                    background: `linear-gradient(135deg, #f84b07 0%, #F85C1E 100%)`,
                    boxShadow: "0 20px 60px rgba(248, 75, 7, 0.4)",
                  }}
                >
                  <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full bg-dark/20 group-hover:bg-dark/0 transition-all duration-300" />
                  
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black text-primary relative z-10 text-center px-1 sm:px-2 md:px-4 group-hover:scale-110 transition-transform">
                    Get<br/>in Touch
                  </span>
                  <RightLongArrowIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 text-primary relative z-10 group-hover:translate-x-2 transition-transform" />
                  
                  <div className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "10s" }} />
                </div>
              </Link>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 mt-3 sm:mt-4 md:mt-5">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-medium">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>75+ trusted partners</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-medium">
                <div className="w-2 h-2 rounded-full bg-lightMedium animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span>Decade of excellence</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-medium">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "1s" }} />
                <span>100+ successful projects</span>
              </div>
            </div>
          </motion.section>
        </div>
      ),
    },
  ];

  return <HorizontalScroll sections={sections} />;
}
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RightArrowIcon from "@/public/svg/RightArrowIcon";
import { caseStudies } from "@/data/case-studies";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([] as (HTMLElement | null)[]);
  const ctxRef = useRef<gsap.Context | undefined>(undefined);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      ScrollTrigger.refresh();
    };
    
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncateWords = (text: string, wordCount: number) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  };

  const getTruncateCount = () => {
    if (windowWidth === 0) return 20; // Default for SSR
    if (windowWidth < 640) return 12;
    if (windowWidth < 768) return 18;
    if (windowWidth < 1024) return 22;
    return 28;
  };

  const setupAnimations = useCallback(() => {
    if (!containerRef.current || caseStudies.length === 0) return;

    if (ctxRef.current) ctxRef.current.revert();

    ctxRef.current = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;

        gsap.set(item, {
          scale: 0.4,
          filter: "blur(4px)",
          opacity: 0.7,
          transformOrigin: "center center",
        });

        ScrollTrigger.create({
          trigger: item,
          start: "top bottom-=150",
          end: "top center",
          onEnter: () => animateItem(item, i, true),
          onLeaveBack: () => animateItem(item, i, false),
          markers: false,
        });
      });
    }, containerRef);
  }, [caseStudies]);

  const animateItem = (item: HTMLElement, index: number, isActive: boolean) => {
    const duration = isActive ? 0.6 : 0.4;
    const ease = "power2.out";

    gsap.to(item, {
      scale: isActive ? 1 : 0.4,
      filter: isActive ? "blur(0px)" : "blur(4px)",
      opacity: isActive ? 1 : 0.7,
      duration,
      ease,
    });

    if (index > 0 && itemsRef.current[index - 1]) {
      gsap.to(itemsRef.current[index - 1]!, {
        scale: isActive ? 0.85 : 1,
        filter: isActive ? "blur(6px)" : "blur(0px)",
        opacity: isActive ? 0.5 : 1,
        duration: isActive ? 0.8 : 0.3,
        ease,
      });
    }
  };

  useEffect(() => {
    setupAnimations();
    return () => ctxRef.current?.revert();
  }, [setupAnimations]);


  if (caseStudies.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        No case studies available
      </div>
    );
  }
  
  const featuredCaseStudies = caseStudies.filter((study) => study.featured);
  
  return (
    <div ref={containerRef} className="relative">
      {featuredCaseStudies.map((study, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={study.id}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="case-study-item min-h-screen sticky top-0 sm:top-10 md:top-12 flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-8"
          >
            <div className="container mx-auto lg:h-[65vh] min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 flex items-center justify-center flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 max-w-8xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(248, 75, 75, 0.1) 0%, rgba(248, 75, 75, 0.1) 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${isEven ? "20% 30%" : "80% 70%"}, rgba(99, 102, 241, 0.15) 0%, transparent 50%), 
                               radial-gradient(circle at ${isEven ? "80% 80%" : "20% 20%"}, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`,
                }}
              />

              <div className={`lg:w-1/2 w-full h-full flex flex-col justify-center items-center text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-12 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-bl-[2rem] sm:rounded-bl-[3rem]" />
              <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-tr-[1.5rem] sm:rounded-tr-[2rem]" />
              
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8">
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-lightMedium rounded-xl sm:rounded-2xl rotate-6 opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-lightMedium rounded-xl sm:rounded-2xl -rotate-6 opacity-10" />
                  <span className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-br from-secondary to-lightMedium bg-clip-text text-transparent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-between w-full relative z-10 gap-2">
                <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-gradient-to-r from-secondary/50 to-lightMedium/50 border border-indigo-200/50">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-secondary to-light animate-pulse" />
                  <span className="text-[10px] xs:text-xs sm:text-sm font-semibold bg-gradient-to-r from-black to-lightMedium bg-clip-text text-transparent uppercase tracking-wider">
                    Case Study
                  </span>
                </div>
                <Link
                  href={`/case-studies/${study.id}`}
                  className="group flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl text-[10px] xs:text-xs sm:text-sm font-medium text-gray-700 hover:text-secondary transition-all duration-300 hover:bg-secondary/10"
                  aria-label={`View details of ${study.title}`}
                >
                  <span className="hidden sm:inline">View Detail</span>
                  <span className="sm:hidden">Detail</span>
                  <RightArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 relative z-10 w-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[1.1] sm:leading-tight text-black tracking-tight">
                  {study.title}
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2">
                  <div className="h-1 sm:h-1.5 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-secondary to-lightMedium rounded-full" />
                  <div className="h-1 sm:h-1.5 w-8 sm:w-10 md:w-12 bg-gradient-to-r from-lightMedium to-light rounded-full opacity-60" />
                  <div className="h-1 sm:h-1.5 w-4 sm:w-5 md:w-6 bg-gradient-to-r from-light to-medium rounded-full opacity-30" />
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 font-medium leading-snug sm:leading-relaxed relative z-10 w-full">
                {study.subtitle}
              </p>

              {/* Technologies - Mobile Only */}
              {study.technologies && study.technologies.length > 0 && (
                <div className="w-full lg:hidden relative z-10">
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                    {study.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r from-secondary/10 to-lightMedium/10 border border-secondary/20 text-[10px] xs:text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 6 && (
                      <span className="inline-flex items-center px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-gray-100 text-[10px] xs:text-xs font-medium text-gray-500">
                        +{study.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="pt-2 sm:pt-3 md:pt-4 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 border-t border-gray-200 relative z-10 w-full">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                  <div className="w-0.5 sm:w-1 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-secondary to-lightMedium rounded-full" />
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900">
                    Project Overview
                  </h3>
                </div>
                <p className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-snug sm:leading-relaxed pl-0 lg:pl-2 sm:pl-3 text-center lg:text-left">
                  {truncateWords(study.description || "", getTruncateCount())}
                </p>
              </div>

              {/* Key Features - Mobile Only */}
              {study.objectives && study.objectives.length > 0 && (
                <div className="w-full lg:hidden pt-2 space-y-2 border-t border-gray-200 relative z-10">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 text-center">Key Objectives</h4>
                  <ul className="space-y-1.5">
                    {study.objectives.slice(0, 2).map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-start gap-2 text-[10px] xs:text-xs text-gray-600">
                        <span className="text-secondary mt-0.5">•</span>
                        <span className="flex-1">{truncateWords(objective, windowWidth < 640 ? 15 : 20)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-center lg:justify-start pt-2 sm:pt-3 md:pt-4 relative z-10 w-full">
                <Link
                  href={`/case-studies`}
                  className="group inline-flex items-center gap-1 sm:gap-2 text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold text-gray-500 hover:text-secondary transition-colors duration-300"
                >
                  <span className="border-b border-gray-300 sm:border-b-2 group-hover:border-secondary transition-colors">
                    Explore All Cases
                  </span>
                  <RightArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className={`lg:w-1/2 w-full h-56 sm:h-72 md:h-80 lg:h-96 xl:h-full relative flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-black rounded-2xl sm:rounded-3xl" />
                
                <div className="absolute inset-0 bg-gradient-to-black from-primary/20 via-transparent to-secondary/20 rounded-2xl sm:rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-transparent to-primary/10 rounded-2xl sm:rounded-3xl opacity-40" />
                
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-secondary/30 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-primary/30 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[inset_0_0_60px_rgba(248,75,75,0.1)]" />

                <div className="relative w-full h-full p-2 sm:p-4 md:p-6 lg:p-10 flex items-center justify-center">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={study.image || ""}
                      alt={study.title || "Case Study Image"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain drop-shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t border-l sm:border-t-2 sm:border-l-2 border-indigo-400/30 rounded-tl-2xl sm:rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b border-r sm:border-b-2 sm:border-r-2 border-purple-400/30 rounded-br-2xl sm:rounded-br-3xl" />
              </div>
            </div>
          </div>
        </section>
        );
      })}
    </div>
  );
}

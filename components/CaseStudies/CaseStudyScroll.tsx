/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useCallback } from "react";
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

  const truncateWords = (text: string, wordCount: number) => {
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
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

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            className="case-study-item min-h-screen sticky top-10 sm:top-12 flex items-center justify-center p-3 sm:p-4 md:p-8"
          >
            <div className="container mx-auto lg:h-[65vh] h-[75vh] rounded-3xl p-1 sm:p-1.5 flex lg:items-center lg:justify-center flex-col lg:flex-row gap-0 max-w-8xl relative overflow-hidden"
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

              <div className={`lg:w-1/2 w-full h-full flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-7 bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-100/50 to-transparent rounded-bl-[3rem]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-tr-[2rem]" />
              
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-lightMedium rounded-2xl rotate-6 opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-lightMedium rounded-2xl -rotate-6 opacity-10" />
                  <span className="relative text-2xl sm:text-3xl font-black bg-gradient-to-br from-secondary to-lightMedium bg-clip-text text-transparent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/50 to-lightMedium/50 border border-indigo-200/50">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-light animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-black to-lightMedium bg-clip-text text-transparent uppercase tracking-wider">
                    Case Study
                  </span>
                </div>
                <Link
                  href={`/case-studies/${study.id}`}
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-secondary transition-all duration-300 hover:bg-secondary/10"
                  aria-label={`View details of ${study.title}`}
                >
                  <span className="hidden sm:inline">View Detail</span>
                  <span className="sm:hidden">Detail</span>
                  <RightArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="space-y-3 sm:space-y-4 relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-black tracking-tight">
                  {study.title}
                </h2>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-20 bg-gradient-to-r from-secondary to-lightMedium rounded-full" />
                  <div className="h-1.5 w-12 bg-gradient-to-r from-lightMedium to-light rounded-full opacity-60" />
                  <div className="h-1.5 w-6 bg-gradient-to-r from-light to-medium rounded-full opacity-30" />
                </div>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium leading-relaxed relative z-10">
                {study.subtitle}
              </p>

              <div className="pt-4 space-y-3 sm:space-y-4 border-t border-gray-200 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-secondary to-lightMedium rounded-full" />
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Project Overview
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed pl-3">
                  {truncateWords(study.description || "", 28)}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 relative z-10">
                <Link
                  href={`/case-studies`}
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-500 hover:text-secondary transition-colors duration-300"
                >
                  <span className="border-b-2 border-gray-300 group-hover:border-secondary transition-colors">
                    Explore All Cases
                  </span>
                  <RightArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className={`lg:w-1/2 w-full h-64 sm:h-80 md:h-96 lg:h-full relative flex items-center justify-center p-6 sm:p-8 lg:p-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative w-full h-full rounded-3xl overflow-hidden group">
                <div className="absolute inset-0 bg-black rounded-3xl" />
                
                <div className="absolute inset-0 bg-gradient-to-black from-primary/20 via-transparent to-secondary/20 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-transparent to-primary/10 rounded-3xl opacity-40" />
                
                <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(248,75,75,0.1)]" />

                <div className="relative w-full h-full p-6 sm:p-8 lg:p-10 flex items-center justify-center">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={study.image || ""}
                      alt={study.title || "Case Study Image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain drop-shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-indigo-400/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/30 rounded-br-3xl" />
              </div>
            </div>
          </div>
        </section>
        );
      })}
    </div>
  );
}

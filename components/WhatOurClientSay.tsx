


'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { textTestimonials } from "@/data/testimonials";
gsap.registerPlugin(ScrollTrigger);

export default function WhatOurClientSay() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const lenis = (window as any).lenis;
      if (lenis) {
        ScrollTrigger.scrollerProxy(document.body, {
          scrollTop(value) {
            if (arguments.length) lenis.scrollTo(value, { immediate: true });
            return lenis.scroll;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
        });
        lenis.on('scroll', ScrollTrigger.update);
      }
    }

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const stepGap = () => window.innerHeight * 0.8; 
      const total = textTestimonials.length;
      const endDistance = stepGap() * (total - 1);

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${endDistance}`,
        pin: true,             
        pinSpacing: true,
        scrub: 0.4,
        snap: {
          snapTo: (value) => {
            const idx = Math.round(value * (total - 1));
            return idx / (total - 1);
          },
          duration: 0.2,
          ease: 'power1.out',
        },
        onUpdate: (self) => {
          const idx = Math.round(self.progress * (total - 1));
          setActiveIndex(idx);
        },
      });

      const onResize = () => {
        st.vars.end = `+=${stepGap() * (total - 1)}`;
        st.refresh();
      };
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
        st.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight px-2">
            <span className="text-dark">What Our</span>
            <span className="text-secondary ml-1 sm:ml-2">Clients Say</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start md:items-center justify-center">
          <div className="order-2 md:order-1 w-full">
            <div className="relative pl-4 sm:pl-6 md:pl-8">
               <div className="absolute left-2 sm:left-4 md:left-8 lg:left-14 top-2 sm:top-4 md:top-8 bottom-2 sm:bottom-4 md:bottom-8 w-0 border-l-2 border-dashed border-light" />
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {textTestimonials.map((testimonial, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      className="step-item group relative flex items-center gap-3 sm:gap-4 text-left w-full"
                      onClick={() => setActiveIndex(i)}
                    >
                      <div className="flex-shrink-0 relative z-10 mt-0.5">
                        <div
                          className={[
                            'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base md:text-lg transition-all duration-300',
                            isActive ? 'bg-secondary text-primary scale-110 shadow' : 'bg-light text-darkMedium border border-light',
                          ].join(' ')}
                        >
                          {i + 1}
                        </div>
                      </div>
                      <div
                        className={[
                          'w-full max-w-full sm:max-w-sm md:w-[520px] p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300',
                          isActive ? 'bg-secondary text-primary shadow-lg' : 'bg-primary border border-light',
                        ].join(' ')}
                      >
                        <h3 className={`text-base sm:text-lg font-bold mb-0.5 sm:mb-1 ${isActive ? 'text-primary' : 'text-dark'}`}>{testimonial.name}</h3>
                        <p className={`text-xs sm:text-sm ${isActive ? 'text-primary opacity-90' : 'text-medium'}`}>{testimonial.position}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 w-full">
            <div className="bg-gradient-to-r from-lightMedium/20 to-secondary/20 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
              <div className="relative w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
                {textTestimonials.map((testimonial, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-400 flex items-center ${
                      i === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{ willChange: 'opacity' }}
                  >
                    <div className="w-full">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-dark px-1 sm:px-0">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

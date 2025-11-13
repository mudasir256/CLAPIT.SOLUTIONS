"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

interface SectionData {
  id: string | number;
  content: React.ReactNode;
}

interface HorizontalScrollProps {
  sections: SectionData[];
}

export default function HorizontalScroll({ sections }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 5000,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "horizontal",
      smoothWheel: true,
    });

    const section = sectionRef.current;
    const items = gsap.utils.toArray<HTMLElement>(".horizontal__item");

    if (section && items.length > 0) {
      const totalWidth = section.scrollWidth - section.offsetWidth;

      const horizontalScroll = gsap.to(items, {
        xPercent: -100 * (items.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
        },
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        horizontalScroll.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, [sections?.length]);

  if (!sections?.length) return null;

  return (
    <section
      ref={sectionRef}
      style={{
        display: "flex",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className="horizontal__item"
            style={{
              flex: "0 0 100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          >
            {section.content}
          </div>
        ))}
      </div>
    </section>
  );
}

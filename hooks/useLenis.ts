"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useLenis() {
  const pathname = usePathname();
  
  // Reset scroll position immediately on route change
  useEffect(() => {
    // Use setTimeout to ensure this runs after Next.js route change is complete
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Reset Lenis scroll position with immediate effect
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [pathname]); // Re-run effect when pathname changes
}

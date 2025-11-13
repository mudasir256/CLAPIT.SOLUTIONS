"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../styles/globals.css";

let isFirstLoad = true;

export default function Loader() {
  const [loading, setLoading] = useState(isFirstLoad);
  const pathname = usePathname();

  useEffect(() => {
    if (isFirstLoad) {
      isFirstLoad = false;
    } else {
      setLoading(true);
    }
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
    const timer = setTimeout(() => {
      setLoading(false);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[white] z-[9999]">
      <div className="loader"></div>
    </div>
  );
}

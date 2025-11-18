import React from "react";
import { getConnect } from "@/data/getConnect";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesStarted() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-secondary/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {getConnect.title}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              {getConnect.description}
            </p>
          </div>
          <button className="group bg-white hover:bg-gray-50 text-secondary font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
            <span>{getConnect.buttonText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

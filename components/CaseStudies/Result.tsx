import React from "react";
import { TrendingUp } from "lucide-react";

interface Result {
  label: string;
  value: string;
}

export default function Result({ results }: { results: Result[] }) {
  if (!results || results.length === 0) return null;

  return (
    <section className="pb-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-dark tracking-tight flex items-center justify-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Results
          </h2>
        </div>

        {/* Result Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="
                border border-lightMedium/40 rounded-xl
                px-5 py-6 
                bg-gradient-to-br from-white to-lightMedium/10
                hover:bg-secondary/5
                transition-all duration-300
                hover:border-secondary/40
                text-center
              "
            >
              <div className="text-[22px] sm:text-[26px] font-semibold text-dark tracking-tight">
                {result.value}
              </div>

              <p className="text-[11px] sm:text-[12px] text-darkMedium uppercase tracking-wide mt-1">
                {result.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

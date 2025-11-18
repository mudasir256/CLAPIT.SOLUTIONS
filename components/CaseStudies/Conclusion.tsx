import React from "react";
import { CaseStudy } from "../types";
import { CheckCircle2 } from "lucide-react";

export default function Conclusion({ study }: { study: CaseStudy }) {
  if (!study.Conclusion) return null;

  return (
    <section className="pb-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-dark tracking-tight flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-secondary" />
            Conclusion
          </h2>
        </div>

        {/* Conclusion Content */}
        <div className="
          border border-lightMedium/40 rounded-xl
          px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12
          bg-gradient-to-br from-white to-lightMedium/10
          shadow-sm
        ">
          <p className="text-sm sm:text-base md:text-lg text-medium leading-relaxed text-center">
            {study.Conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}

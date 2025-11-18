import React from "react";
import { CaseStudy } from "../types";
import { Target, Lightbulb } from "lucide-react";

export default function Objectives({ data }: { data: CaseStudy }) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
            Objectives
          </h2>
          <ul className="space-y-4">
            {data.objectives?.map((objective, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <p className="text-base sm:text-lg text-medium leading-relaxed flex-1">
                  {objective}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {data.approachTitle && data.approachDescription && (
          <div className="mt-12 p-8 sm:p-10 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
            <div className="flex items-start gap-4 mb-4">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0 mt-1" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                {data.approachTitle}
              </h3>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-dark leading-relaxed ml-0 sm:ml-12">
              {data.approachDescription}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

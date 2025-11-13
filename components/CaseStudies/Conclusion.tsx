import React from "react";
import { CaseStudy } from "../types";
import AnimatedSection1 from "../AnimatedSection1";

export default function Conclusion({ study }: { study: CaseStudy }) {
  return (
    <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-md  mt-12">
      <h1 className="text-3xl font-bold text-secondary mb-4">Conclusion</h1>
      <div className="text-xl text-dark font-medium leading-relaxed">
        <AnimatedSection1>{study.Conclusion}</AnimatedSection1>
      </div>
    </div>
  );
}

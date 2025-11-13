import React from "react";
import AnimatedSection1 from "../AnimatedSection1";

interface Result {
  label: string;
  value: string;
}

export default function Result({ results }: { results: Result[] }) {
  return (
    <div className="mt-8 container mx-auto px-4 max-w-6xl">
      <div className="mt-8 bg-light p-6 rounded-lg">
        <h2 className="lg:text-5xl text-3xl font-bold text-gray-900 text-center">
          Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 justify-center">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-dark text-white p-4 rounded-lg shadow-md text-center w-full max-w-screen-xl mx-auto"
            >
              <AnimatedSection1>
                <span className="lg:text-5xl text-3xl font-semibold">{result.value}</span>
                <p className="mt-2 lg:text-2xl text-xl font-medium">{result.label}</p>
              </AnimatedSection1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { pricingData } from "@/data/pricingData";

export default function IncludedServices() {
  const [selectedPlan, setSelectedPlan] = useState("Graphic design");

  return (
    <div className="container mx-auto py-10 px-4">
      <h5 className="text-center text-secondary text-xl uppercase tracking-widest mb-3">
        Service Details
      </h5>
      <h1 className="text-4xl font-bold text-center text-dark mb-10">
        Compare all our marketing plans
      </h1>

      <div className="flex justify-center items-center py-6">
        <div className="bg-light border border-lightMedium p-2 rounded-full flex flex-wrap gap-2 justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
          {Object.keys(pricingData.marketingPlansIncludedServices).map(
            (plan) => (
              <button
                key={plan}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full lg:text-lg text-md font-semibold transition-all duration-300 ${
                  selectedPlan === plan
                    ? "bg-dark text-white shadow-md scale-105"
                    : "text-medium hover:bg-gray-200 hover:shadow-sm"
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan}
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(pricingData.marketingPlansIncludedServices).map(
            ([plan, services]) => (
              <div
                key={plan}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  selectedPlan === plan 
                    ? "bg-light shadow-lg border-2 border-secondary/30 scale-105" 
                    : "border border-transparent hover:border-lightMedium/30 hover:shadow-md"
                }`}
              >
                <h3
                  className={`text-md lg:text-lg font-semibold text-center text-nowrap py-3 transition-all duration-300 ${
                    selectedPlan === plan
                      ? "bg-secondary text-dark rounded-full shadow-sm"
                      : "text-medium"
                  }`}
                >
                  {plan}
                </h3>
                <ul className="mt-4 space-y-3 text-dark">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span
                        className={`text-lg transition-colors duration-200 ${
                          selectedPlan === plan
                            ? "text-secondary"
                            : "text-light"
                        }`}
                      >
                        {selectedPlan === plan ? "✔" : "✖"}
                      </span>
                      <span className="text-md lg:text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

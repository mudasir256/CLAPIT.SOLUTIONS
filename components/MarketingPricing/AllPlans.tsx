import { pricingData } from "@/data/pricingData";
import React from "react";

export default function AllPlans() {
  const data = pricingData.features;

  if (!data) {
    return null;
  }

  return (
    <div className="bg-light p-10 rounded-2xl lg:flex justify-center gap-44 container mx-auto shadow-lg border border-lightMedium/20 hover:shadow-xl transition-shadow duration-300">
      <div>
        <p className="text-md text-dark uppercase tracking-wider border-b-2 border-secondary inline-block pb-2">
          What&apos;s included in every plan
        </p>
        <h2 className="text-4xl font-bold text-dark mt-4">
          Comprehensive package for all plans
        </h2>
        <p className="text-medium mt-5 max-w-lg lg:text-lg text-md leading-relaxed">
          We handle all your creative and marketing needs – no freelancers, no lengthy hiring processes,
          no complex contracts – just exceptional results delivered on time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 lg:mt-0">
        {data.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/60 transition-all duration-200 hover:shadow-sm">
            <span className="text-lg lg:text-2xl">{feature.icon}</span>
            <span className="text-gray-900 font-medium lg:text-lg text-md">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

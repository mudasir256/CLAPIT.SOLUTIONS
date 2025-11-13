"use client";

import { pricingData } from "@/data/pricingData";
import Link from "next/link";
import React, { useState } from "react";

type PlanPeriod = "1 month" | "3 months" | "6 months";

export default function PricingCards() {
  const [selectedPlan, setSelectedPlan] = useState<PlanPeriod>("1 month");

  if (!pricingData.marketingPlans) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex justify-center items-center gap-16 mb-20">
        <div className="bg-light border border-lightMedium p-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
          {Object.keys(pricingData.marketingPlans).map((key) => (
            <button
              key={key}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedPlan === key
                  ? "bg-dark text-white shadow-md scale-105"
                  : "text-medium hover:bg-gray-200 hover:shadow-sm"
              }`}
              onClick={() => setSelectedPlan(key as PlanPeriod)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 pb-6">
        {pricingData.marketingPlans[selectedPlan].map((plan, index) => (
          <div
            key={index}
            className={`p-8 w-96 rounded-2xl shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              plan.highlight
                ? "bg-lightMedium text-white border-2 border-secondary/30 scale-105"
                : "bg-light text-black border border-lightMedium/20"
            }`}
          >
            <div>
              <div className="flex justify-center">
                {plan.badge1 && (
                  <div className="flex justify-center -mt-14">
                    <div className="bg-black text-white text-sm font-semibold px-5 py-3 rounded-full inline-block mb-4">
                      {plan.badge1}
                    </div>
                  </div>
                )}
                {plan.badge2 && (
                  <div className="flex justify-center -mt-14">
                    <div className="bg-black text-white text-sm font-semibold px-5 py-3 rounded-full inline-block mb-4">
                      {plan.badge2}
                    </div>
                  </div>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
              <p className="text-lg text-darkMedium mb-6">{plan.description}</p>
              <div className="text-4xl font-bold mb-6 border-t border-b border-medium py-10">
                {plan.price}
                <span className="text-sm font-normal">{plan.per}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center lg:text-lg text-md">
                    <span className={`mr-3 ${plan.highlight ? "text-white" : "text-secondary"}`}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact-us" className={`w-full py-3 text-center rounded-lg font-bold transition-all duration-300 ${
              plan.highlight 
                ? "bg-white text-lightMedium hover:bg-gray-100 shadow-md hover:shadow-lg" 
                : "bg-black text-white hover:bg-secondary hover:shadow-lg"
            }`}>
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { pricingData } from "@/data/pricingData";
import Link from "next/link";

export default function PricingHeader() {
  const data = pricingData.data;

  if (!data) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-8 mt-32 mb-8">
      <div className="bg-light p-10 rounded-2xl shadow-lg border border-lightMedium/20 hover:shadow-xl transition-shadow duration-300">
        <h1 className="text-5xl font-bold mb-6 text-secondary">
          {data.heading}
        </h1>
        <p className="text-xl text-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          {data.subheading}
        </p>
        <Link
          href={'/contact-us'}
          className="bg-dark text-white hover:bg-secondary transition-all duration-300 py-3 px-8 rounded-lg text-lg font-semibold inline-block shadow-lg hover:shadow-xl hover:scale-105 transform"
        >
          {data.button.text} →
        </Link>
      </div>
    </div>
  );
}

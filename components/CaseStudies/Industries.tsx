"use client";

import { industriesData } from "@/data/industries";
import React, { useState } from "react";
import IndustriesCard from "./IndustriesCard";
import AnimatedSection1 from "../AnimatedSection1";

export default function IndustriesComponent() {
  const [selected, setSelected] = useState("All");

  const allIndustries = [
    { id: "all", title: "All" },
    ...industriesData.map(industry => ({
      id: industry.id,
      title: industry.title
    }))
  ];

  return (
    <div>
      <div className="bg-light p-6 py-10 rounded-lg flex flex-wrap justify-center gap-4 max-w-7xl mx-auto my-10">
        {allIndustries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => setSelected(industry.title)}
            className={`px-4 py-2 rounded-full border border-gray-400 text-gray-900 text-sm font-medium transition-all ${
              selected === industry.title
                ? "bg-secondary text-primary hover:text-secondary hover:bg-primary font-bold text-[16px] w-fit"
                : "bg-transparent light:bg-gray-100 text-[14px] w-fit"
            }`}
          >
            <AnimatedSection1>{industry.title}</AnimatedSection1>
          </button>
        ))}
      </div>
      <div>
        <IndustriesCard selectedIndustry={selected} />
      </div>
    </div>
  );
}

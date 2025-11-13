import React from "react";
import { leadershipPrinciples } from "@/data/principledata";
import LeadershipPrincipleCard from "./LeadershipPrincipleCard";

export default function LeadershipPrinciples() {
  return (
    <div className="bg-primary text-dark py-20 px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-dark">
          Leadership Principles
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-darkMedium">
          Our Leadership Principles embody our companys core values, upheld at
          every level. They are essential traits for all CLAPIT SOLUTIONS team members
          to pursue, and alignment with these principles is imperative.
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-6 max-w-[800px] mx-auto">
        {leadershipPrinciples.map((item, idx) => (
          <LeadershipPrincipleCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

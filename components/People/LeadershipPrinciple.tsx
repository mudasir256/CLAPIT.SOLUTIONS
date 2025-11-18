import React from "react";
import { leadershipPrinciples } from "@/data/principledata";
import LeadershipPrincipleCard from "./LeadershipPrincipleCard";

export default function LeadershipPrinciples() {
  return (
    <>
      <div className="text-dark py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl max-w-3xl mx-auto font-semibold mb-4 sm:mb-6 text-dark">
            Our Core Values
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-darkMedium px-2">
            These fundamental principles guide every decision we make and every relationship we build. They represent the foundation of our culture and the standards we hold ourselves to as we shape the future together.
          </p>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-6 max-w-[800px] mx-auto">
          {leadershipPrinciples.map((item, idx) => (
            <LeadershipPrincipleCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

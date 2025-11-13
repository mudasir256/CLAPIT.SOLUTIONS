import React from "react";
import { leadershipPrinciples } from "@/data/principledata";
import LeadershipPrincipleCard from "./LeadershipPrincipleCard";

export default function LeadershipPrinciples() {
  return (
    <>
      <div className="text-dark py-20 px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl max-w-3xl mx-auto md:text-8xl font-semibold mb-6 text-dark">
            Our Core Values
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-darkMedium">
            These fundamental principles guide every decision we make and every relationship we build. They represent the foundation of our culture and the standards we hold ourselves to as we shape the future together.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-6 max-w-[800px] mx-auto">
          {leadershipPrinciples.map((item, idx) => (
            <LeadershipPrincipleCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

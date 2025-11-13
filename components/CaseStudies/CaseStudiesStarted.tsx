import React from "react";
import { getConnect } from "@/data/getConnect";
import AnimatedSection1 from "../AnimatedSection1";

export default function CaseStudiesStarted() {
  return (
    <div className="bg-light max-w-7xl mx-auto  rounded-lg p-10 my-10 shadow-lg ">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto text-dark  max-w-6xl ">
        <div className="text-left max-w-lg">
          <AnimatedSection1>
            <h2 className="lg:text-5xl text-2xl font-bold mb-4 text-secondary">
              {getConnect.title}
            </h2>
            <p className="lg:text-2xl text-xl mb-6 text-dark font-medium">{getConnect.description}</p>
          </AnimatedSection1>
        </div>
        <AnimatedSection1>
          <button className="bg-secondary text-white hover:bg-primary hover:text-secondary font-semibold px-6 py-3 rounded-full shadow-md light:bg-gray-100">
            {getConnect.buttonText}
          </button>
        </AnimatedSection1>
      </div>
    </div>
  );
}

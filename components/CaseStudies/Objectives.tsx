import React from "react";
import { CaseStudy } from "../types";

export default function Objectives({ data }: { data: CaseStudy }) {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-4">
      <h2 className="lg:text-4xl text-2xl font-bold text-dark mb-2">Objectives</h2>
      <ul className="mt-4 space-y-3 text-gray-700">
        {data.objectives?.map((objective, index) => (
          <li key={index} className="flex items-start font-medium text-lg">
            <span className="mr-2 text-secondary">&#9671;</span>
            {objective}
          </li>
        ))}
      </ul>

      <div className="mt-6 p-10 bg-light text-dark rounded-xl shadow-md lg:flex items-center gap-8">
        <h3 className="lg:text-4xl text-2xl font-bold text-secondary">
          {data.approachTitle}
        </h3>
        <p className="mt-2 text-xl text-dark">{data.approachDescription}</p>
      </div>
    </div>
  );
}

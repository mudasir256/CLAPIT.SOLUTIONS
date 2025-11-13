import { motion } from "framer-motion";
import React from "react";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import AnimatedSection1 from "../AnimatedSection1";

export default function IndustriesCard({
  selectedIndustry,
}: {
  selectedIndustry: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {caseStudies
        .filter(
          (study) =>
            selectedIndustry === "All" || study.industries?.includes(selectedIndustry)
        )
        .map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between "
          >
            <div>
              <Link href={`/case-studies/${study.id}`} className="block">
                <div
                  className="h-64 bg-cover bg-center relative flex items-start p-4"
                  style={{ backgroundImage: `url('${study.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="relative flex flex-wrap gap-2">
                    {study.servicesProvided?.map((item) => (
                      <span
                        key={item.id}
                        className="bg-primary text-dark text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                      >
                        <AnimatedSection1>{item.name}</AnimatedSection1>
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide px-4 pt-2 text-left">
                {study.subtitle}
              </p>
              <h3 className="text-xl font-bold text-secondary mt-1 mb-3 px-4 text-left">
                <AnimatedSection1>{study.title}</AnimatedSection1>
              </h3>
              <p className="text-gray-600 text-md mb-4 line-clamp-3 px-4 text-left">
                {study.description}
              </p>
            </div>
            <div className="text-start p-4">
              <Link
                href={`/case-studies/${study.id}`}
                className="inline-block text-secondary font-semibold border border-secondary px-4 py-2 rounded-full transition-all hover:bg-secondary hover:text-white"
              >
                <AnimatedSection1>Learn More</AnimatedSection1>
              </Link>
            </div>
          </motion.div>
        ))}
    </div>
  );
}

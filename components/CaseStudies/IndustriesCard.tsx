import { motion } from "framer-motion";
import React from "react";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesCard({
  selectedIndustry,
}: {
  selectedIndustry: string;
}) {
  const filteredStudies = caseStudies.filter(
    (study) =>
      selectedIndustry === "All" || study.industries?.includes(selectedIndustry)
  );

  if (filteredStudies.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <p className="text-medium text-lg">No case studies found for this filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
      {filteredStudies.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
          className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 active:border-secondary/20 sm:hover:border-secondary/20 transition-all duration-300 sm:hover:shadow-xl active:shadow-lg"
        >
          <Link href={`/case-studies/${study.id}`} className="block">
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 sm:group-hover:scale-110"
                style={{ backgroundImage: `url('${study.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-wrap gap-1.5 sm:gap-2">
                {study.servicesProvided?.slice(0, 2).map((item) => (
                  <span
                    key={item.id}
                    className="bg-white/90 backdrop-blur-sm text-dark text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full "
                  >
                    {item.name}
                  </span>
                ))}
                {study.servicesProvided && study.servicesProvided.length > 2 && (
                  <span className="bg-white/90 backdrop-blur-sm text-dark text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                    +{study.servicesProvided.length - 2}
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 bg-secondary/5">
              <p className="text-[10px] sm:text-xs font-semibold text-secondary uppercase tracking-wider mb-1.5 sm:mb-2 line-clamp-1">
                {study.subtitle}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-dark mb-2 sm:mb-3 line-clamp-2 sm:group-hover:text-secondary transition-colors">
                {study.title}
              </h3>
              <p className="text-medium text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                {study.description}
              </p>
            
              <div className="flex items-center text-secondary font-medium text-xs sm:text-sm sm:group-hover:gap-2 transition-all">
                <span>View Case Study</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

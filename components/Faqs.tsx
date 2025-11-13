"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection1 from "./AnimatedSection1";
import FAQSchema from "./StructuredData/FAQSchema";

interface FAQItem {
  title: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, subtitle, faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };
  // Convert FAQ items to schema format
  const faqSchemaItems = faqs.map((faq) => ({
    question: faq.title,
    answer: faq.answer,
  }));

  return (
    <div className="bg-gradient-to-b from-gray-50/50 to-white/30 backdrop-blur-lg">
      <FAQSchema faqs={faqSchemaItems} />
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection1>
            <h2 className="lg:text-6xl text-4xl font-extrabold text-gray-900 text-center mb-6">
              {title}{" "}
              <span className="text-transparent bg-clip-text bg-secondary">
                Questions
              </span>
            </h2>
          </AnimatedSection1>
          <p className="text-gray-500 text-center lg:text-[22px] text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
                >
                  <div
                    className="flex justify-between items-center p-7 cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3
                      className={`text-xl font-semibold pr-4 ${
                        openFaq === index
                          ? "bg-secondary bg-clip-text text-transparent"
                          : "text-dark"
                      }`}
                    >
                      {faq.title}
                    </h3>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      className={`text-2xl ${
                        openFaq === index ? "text-secondary " : "text-dark"
                      }`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7 text-gray-600 leading-relaxed border-t border-gray-100/50 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;

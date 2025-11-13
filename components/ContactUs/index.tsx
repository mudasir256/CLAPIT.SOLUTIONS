"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/public/images";

export default function ContactUs() {
  return (
    <section className="container  relative bg-gradient-to-br from-[#fff] to-secondary/5 py-10 md:py-5 overflow-hidden rounded-3xl mx-auto my-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 ml-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-medium text-lg font-medium mb-8 block"
            >
              LETS WORK TOGETHER
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-8"
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-medium text-lg mb-8 max-w-lg lg:text-xl "
            >
              Know what you want? Great. Got questions? Even better.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-primary bg-secondary rounded-full light:bg-[#fbd5ce] light:text-secondary transition-colors"
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full h-[300px] md:h-[400px]"
            >
              <Image
                src={IMAGES.CtaContact}
                alt="Contact illustration"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE5A3] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFE5A3] rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
    </section>
  );
}

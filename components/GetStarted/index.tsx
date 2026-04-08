"use client";

import { motion } from "framer-motion";
import { steps } from "@/data/getStarted";
import AnimatedSection1 from "../AnimatedSection1";
import Link from "next/link";
import { ReactNode } from "react";

interface Industry {
  icon: string | ReactNode;
  title: string;
  href?: string;
  description: string;
}

interface TechStack {
  heading: string;
  paragraph: string;
  industries: Industry[];
}

interface GetStartedProps {
  data?: TechStack;
  bgColor: string;
  button: boolean;
}

export default function GetStarted({ data, bgColor, button }: GetStartedProps) {
  const { heading, paragraph, industries } = data || steps;

  const CardContent = ({ icon, title, description }: Industry) => (
    <div className="relative z-10">
      <div className="flex items-center gap-2 relative z-10 mb-3">
        <div className="text-dark group-hover:text-white text-2xl md:text-3xl font-bold w-10 h-10 md:w-11 md:h-11 min-w-[2.5rem] min-h-[2.5rem] md:min-w-[2.75rem] md:min-h-[2.75rem] flex items-center justify-center rounded-full bg-dark/10 group-hover:bg-dark/20 transition-all duration-300 relative">
          <span className="relative z-20 block leading-none">{icon}</span>
        </div>
      </div>
      <h3 className="text-base md:text-lg font-semibold text-dark group-hover:text-white mb-1.5 leading-snug relative z-10 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-dark group-hover:text-white text-sm md:text-base leading-snug relative z-10 transition-colors duration-300">
        {description}
      </p>
    </div>
  );

  return (
    <section
      className="py-16 md:py-24 m-6 rounded-2xl container mx-auto"
      style={{ backgroundColor: bgColor }}
    >
      <div className="">
        <div className="flex justify-between items-center px-12 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark flex items-center gap-2"
          >
            {heading}

          </motion.h2>
          {button && (
            <Link href="/pricing">
              <div className="text-dark lg:block hidden  text-lg border border-dark rounded-full px-4 py-2 cursor-pointer hover:bg-dark hover:text-primary transition-all duration-300">
                see our plans
              </div>
            </Link>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 lg:text-xl text-lg text-dark px-12"
        >
          {paragraph}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 px-12 mt-8 md:mt-10">
          {industries.map(({ icon, title, description, href }, index) => (
            <motion.div
              key={index}
              className="bg-light p-4 md:p-5 rounded-xl border border-dark/20 hover:border-primary transition-all duration-300 relative group overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                style={{
                  backgroundImage: `url(/gif/ff.gif)`,
                  backgroundSize: "cover",
                }}
              ></div>
              {href && href.trim() !== "" && href !== "#" ? (
                <Link href={href}>
                  <CardContent
                    icon={icon}
                    title={title}
                    description={description}
                  />
                </Link>
              ) : (
                <CardContent
                  icon={icon}
                  title={title}
                  description={description}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

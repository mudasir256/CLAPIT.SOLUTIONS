import Link from "next/link";
import { Key } from "react";
import { pricingData } from "@/data/pricingData";
import AnimatedSection1 from "@/components/AnimatedSection1";

const Pricing = () => {
  return (
    <section className="py-28 bg-light flex flex-col items-center justify-center lg:gap-10 min-h-screen px-4">
      <h1 className="text-2xl md:text-6xl text-dark font-bold mb-6 text-center">
        {pricingData.title}
      </h1>
      <div className="container mx-auto px-4">
        <div className="bg-dark rounded-2xl shadow-md p-12 px-12 max-w-4xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
            {pricingData.options.map(
              (option, index: Key | null | undefined) => (
                <Link
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center border border-light rounded-xl p-4 bg-gradient-to-b from-light to-blue-50 cursor-pointer transition duration-500 w-full md:w-auto"
                >
                  <AnimatedSection1>{option.svg}</AnimatedSection1>
                  <p className="text-dark text-lg lg:text-xl font-semibold text-center">
                    {option.title}
                  </p>
                </Link>
              )
            )}
          </div>
          <div className="w-24 h-2 bg-blue-50 mt-4 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

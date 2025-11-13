import React from "react";
import AnimatedSection1 from "../AnimatedSection1";

interface Service {
  name: string;
  icon: React.ElementType;
}

export default function ServicesProvided({
  services,
}: {
  services: Service[];
}) {
  return (
    <div className="mt-8 container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col items-start gap-4 mt-4 mx-auto text-start">
        <h2 className="lg:text-5xl text-3xl font-semibold text-secondary mb-2">
          Services Provided
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-start py-2 rounded-lg cursor-pointer"
            >
              <AnimatedSection1>
                <div className="flex items-center ">
                  <service.icon className="w-8 h-8 mr-2 text-primary bg-secondary p-1 rounded-lg" />
                  <span className="text-gray-800 font-medium text-xl">
                    {service.name}
                  </span>
                </div>
              </AnimatedSection1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

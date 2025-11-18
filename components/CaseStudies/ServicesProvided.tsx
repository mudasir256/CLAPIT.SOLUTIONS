import React from "react";

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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-12 text-center">
          Services Provided
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 group-hover:bg-secondary rounded-lg flex items-center justify-center transition-colors">
                  <service.icon className="w-6 h-6 text-dark" />
                </div>
                <span className="text-dark font-semibold text-lg">
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { services } from "@/data/services";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help your business thrive in
            the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              href={service.href}
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-sm light:shadow-md transition-all light:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

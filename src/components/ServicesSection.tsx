
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Buy Property",
      description: "Find your dream home from our wide range of properties",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Sell Property",
      description: "Get the best value for your property with our expert agents",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-2">We offer the best real estate services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-orange-500 font-medium hover:text-orange-700 transition-colors">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking to buy a new property or sell an existing one?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From finding your dream home to getting the best deal for your property, we can help you through the entire process.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;


import React from "react";
import Navigation from "@/components/Navigation";

const SellPageHeader: React.FC = () => {
  return (
    <div className="relative h-[300px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>
      <Navigation />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
            Sell Your Property
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SellPageHeader;

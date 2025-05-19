
import React from "react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>
      <Navigation />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 text-center">
            Find Your Dream Home
          </h1>
          <h2 className="text-white text-xl md:text-2xl font-light mb-8 text-center">
            Dream Property, Your Perfect Place Awaits
          </h2>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;

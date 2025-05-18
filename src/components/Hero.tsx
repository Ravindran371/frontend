
import React from "react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>
      <Navigation />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
            Find Your Dream Home
          </h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
        }}
      />
      <Navigation />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 text-center drop-shadow-lg">
            Find Your Dream Home
          </h1>
          <SearchBar />
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToContent}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

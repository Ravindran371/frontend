
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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      <Navigation />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4 flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 text-center">
            Find Your Dream Home
          </h1>
          <h2 className="text-white text-xl md:text-2xl font-light mb-10 text-center">
            Discover the Perfect Blend of French & Indian Architecture
          </h2>
          <SearchBar />
          
          <div 
            className="absolute bottom-10 flex flex-col items-center cursor-pointer animate-bounce"
            onClick={scrollToContent}
          >
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <ChevronDown className="text-white h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

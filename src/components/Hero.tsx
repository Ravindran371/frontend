
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Single Eiffel Tower image
  const heroImage = "/lovable-uploads/0e7fe6d9-ab7d-4d38-9565-7439b5439b5d.png";

  // Handle scroll to hide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full">
      {/* Single Eiffel Tower background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out opacity-100"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      <Navigation />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4 flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 text-center animate-fade-in">
            Find Your Dream Home
          </h1>
          <h2 className="text-white text-xl md:text-2xl font-light mb-10 text-center animate-fade-in">
            Discover the Perfect Blend of French & Indian Architecture
          </h2>
          <SearchBar />
          
          {showScrollIndicator && (
            <div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-bounce transition-opacity duration-500"
              onClick={scrollToContent}
            >
              <span className="text-white text-sm mb-2 font-medium">Scroll Down</span>
              <ChevronDown className="text-white h-6 w-6" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

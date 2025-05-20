
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Array of hero images
  const heroImages = [
    "https://images.unsplash.com/photo-1499856871958-5b9357976b82?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80", // Eiffel Tower
    "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // Nice French street
    "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // French mansion
    "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", // French countryside
    "/lovable-uploads/0e7fe6d9-ab7d-4d38-9565-7439b5439b5d.png" // Your uploaded image
  ];

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle scroll to hide indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
      ))}
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
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)),
            url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'),
            url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'),
            url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')
          `,
          backgroundBlendMode: 'overlay, normal, normal, normal',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10"></div>
      </div>
      <Navigation />
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
            Find Your Dream Home
          </h1>
          <h2 className="text-white text-xl md:text-2xl font-light mb-8 text-center drop-shadow-md">
            Luxury Properties Await You
          </h2>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;

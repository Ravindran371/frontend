
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

const Hero: React.FC = () => {
  const navigate = useNavigate();

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
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;

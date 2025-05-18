
import React from "react";
import SearchBar from "./SearchBar";

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
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-6xl px-4">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;

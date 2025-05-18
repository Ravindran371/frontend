
import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="absolute top-0 right-0 p-6 z-10">
      <ul className="flex space-x-6 text-white">
        <li>
          <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/buy" className="hover:text-orange-400 transition-colors">Buy</Link>
        </li>
        <li>
          <Link to="/sell" className="hover:text-orange-400 transition-colors">Sell</Link>
        </li>
        <li>
          <Link to="/rent" className="hover:text-orange-400 transition-colors">Rent</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

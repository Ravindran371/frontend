
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-orange-400" : "text-white";
  };
  
  return (
    <nav className="absolute top-0 right-0 p-6 z-10">
      <ul className="flex flex-wrap space-x-4 md:space-x-6">
        <li>
          <Link to="/" className={`${isActive('/')} hover:text-orange-400 transition-colors font-medium`}>Home</Link>
        </li>
        <li>
          <Link to="/buy" className={`${isActive('/buy')} hover:text-orange-400 transition-colors font-medium`}>Buy</Link>
        </li>
        <li>
          <Link to="/sell" className={`${isActive('/sell')} hover:text-orange-400 transition-colors font-medium`}>Sell</Link>
        </li>
        <li>
          <Link to="/rent" className={`${isActive('/rent')} hover:text-orange-400 transition-colors font-medium`}>Rent</Link>
        </li>
        <li>
          <Link to="/about" className={`${isActive('/about')} hover:text-orange-400 transition-colors font-medium`}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" className={`${isActive('/contact')} hover:text-orange-400 transition-colors font-medium`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

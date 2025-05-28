
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-orange-400 border-b-2 border-orange-400" : "text-white";
  };
  
  return (
    <nav className="absolute top-0 left-0 right-0 p-6 z-10 flex justify-end items-center">
      <ul className="flex flex-wrap space-x-4 md:space-x-6">
        <li>
          <Link to="/" className={`${isActive('/')} hover:text-orange-400 transition-colors font-medium pb-1`}>Home</Link>
        </li>
        <li>
          <Link to="/buy" className={`${isActive('/buy')} hover:text-orange-400 transition-colors font-medium pb-1`}>Buy</Link>
        </li>
        <li>
          <Link to="/sell" className={`${isActive('/sell')} hover:text-orange-400 transition-colors font-medium pb-1`}>Sell</Link>
        </li>
        <li>
          <Link to="/rent" className={`${isActive('/rent')} hover:text-orange-400 transition-colors font-medium pb-1`}>Rent</Link>
        </li>
        <li>
          <Link to="/about" className={`${isActive('/about')} hover:text-orange-400 transition-colors font-medium pb-1`}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" className={`${isActive('/contact')} hover:text-orange-400 transition-colors font-medium pb-1`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

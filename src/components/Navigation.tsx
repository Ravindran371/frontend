
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-red-500 border-b-2 border-red-500" : "text-gray-700";
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-10 flex justify-between items-center">
      <div className="text-2xl font-bold text-red-500">
        RealEstate
      </div>
      
      <ul className="flex flex-wrap space-x-4 md:space-x-6">
        <li>
          <Link to="/" className={`${isActive('/')} hover:text-red-500 transition-colors font-medium pb-1`}>Home</Link>
        </li>
        <li>
          <Link to="/buy" className={`${isActive('/buy')} hover:text-red-500 transition-colors font-medium pb-1`}>Buy</Link>
        </li>
        <li>
          <Link to="/sell" className={`${isActive('/sell')} hover:text-red-500 transition-colors font-medium pb-1`}>Sell</Link>
        </li>
        <li>
          <Link to="/rent" className={`${isActive('/rent')} hover:text-red-500 transition-colors font-medium pb-1`}>Rent</Link>
        </li>
        <li>
          <Link to="/about" className={`${isActive('/about')} hover:text-red-500 transition-colors font-medium pb-1`}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" className={`${isActive('/contact')} hover:text-red-500 transition-colors font-medium pb-1`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

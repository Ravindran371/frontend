
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-bold text-teal-400 mb-3">Pondy</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in real estate. Find your perfect property with us.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Property Buying</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Property Selling</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Property Rental</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📞 +91 12345 67890</li>
              <li>✉️ info@pondy.com</li>
              <li>📍 Pondicherry, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6">
          <p className="text-gray-400 text-left">© 2025 Pondy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

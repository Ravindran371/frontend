
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">About Us</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              We are a leading real estate agency specializing in helping clients buy, sell, and rent properties in the most desirable neighborhoods.
            </p>
            <div className="flex space-x-3">
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group text-sm">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group text-sm">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group text-sm">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group text-sm">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Info</h3>
            <div className="space-y-3">
              <p className="flex items-start text-gray-300 hover:text-white transition-colors text-sm">
                <MapPin className="h-4 w-4 mr-2 text-orange-400 flex-shrink-0 mt-1" />
                <span>123 Property Street, Suite 101<br />New York, NY 10001</span>
              </p>
              <p className="flex items-center text-gray-300 hover:text-white transition-colors text-sm">
                <Phone className="h-4 w-4 mr-2 text-orange-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </p>
              <Link to="mailto:info@realestate.com" className="flex items-center text-gray-300 hover:text-white transition-colors text-sm">
                <Mail className="h-4 w-4 mr-2 text-orange-400 flex-shrink-0" />
                <span>info@realestate.com</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Newsletter</h3>
            <p className="text-gray-300 mb-3 text-sm">Subscribe for latest property updates.</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-orange-500 text-sm"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-300 hover:shadow-lg text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-4" />
        
        <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-xs">
          <div>
            &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

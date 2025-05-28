
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">About Us</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a leading real estate agency specializing in helping clients buy, sell, and rent properties in the most desirable neighborhoods.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Contact Info</h3>
            <div className="space-y-4">
              <p className="flex items-start text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0 mt-1" />
                <span>123 Property Street, Suite 101<br />New York, NY 10001</span>
              </p>
              <p className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </p>
              <Link to="mailto:info@realestate.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                <span>info@realestate.com</span>
              </Link>
              <Link to="https://www.realestate.com" target="_blank" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Globe className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                <span>www.realestate.com</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest property updates.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-orange-500"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-300 hover:shadow-lg">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Real Estate Website. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-orange-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

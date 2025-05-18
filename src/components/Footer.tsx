
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">About Us</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a leading real estate agency specializing in helping clients buy, sell, and rent properties in the most desirable neighborhoods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-500 p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span>
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Contact Info</h3>
            <div className="space-y-4">
              <p className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0 mt-1" />
                <span>123 Property Street, Suite 101<br />New York, NY 10001</span>
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                <span>info@realestate.com</span>
              </p>
              <p className="flex items-center text-gray-300">
                <Globe className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
                <span>www.realestate.com</span>
              </p>
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
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium">
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
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import { IndianRupee, Building, MapPin, Home, Calendar, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Rent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[400px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Find Your Perfect Rental
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto animate-slide-up delay-200">
              Experience the charm of living in historic French colonial buildings 
              and beautiful properties with character
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto -mt-20 relative z-10 hover-shadow-effect">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Search Rental Properties</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Select defaultValue="french-quarter">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white-town">White Town</SelectItem>
                    <SelectItem value="french-quarter">French Quarter</SelectItem>
                    <SelectItem value="heritage-zone">Heritage Zone</SelectItem>
                    <SelectItem value="beach-road">Beach Road</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <Select defaultValue="apartment">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="heritage">Heritage Home</SelectItem>
                    <SelectItem value="apartment">French-style Apartment</SelectItem>
                    <SelectItem value="villa">Beachside Villa</SelectItem>
                    <SelectItem value="bungalow">Colonial Bungalow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Budget
                </label>
                <Select defaultValue="25k-40k">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15k-25k">₹15,000 - ₹25,000</SelectItem>
                    <SelectItem value="25k-40k">₹25,000 - ₹40,000</SelectItem>
                    <SelectItem value="40k-60k">₹40,000 - ₹60,000</SelectItem>
                    <SelectItem value="60k+">₹60,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md flex items-center justify-center text-lg">
                <Home className="mr-2 h-5 w-5" /> Find Rental Properties
              </Button>
            </div>
          </div>
          
          <div className="mt-20 reveal">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Rental Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500 card-hover">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Seaside Living</h3>
                <p className="text-gray-600 text-sm text-center">
                  Experience the tranquil coastal lifestyle with the Bay of Bengal at your doorstep.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500 card-hover">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <Building className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Cultural Experience</h3>
                <p className="text-gray-600 text-sm text-center">
                  Live amidst a unique blend of Tamil and French cultures, cuisine, and traditions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500 card-hover">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <IndianRupee className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Affordable Luxury</h3>
                <p className="text-gray-600 text-sm text-center">
                  Enjoy heritage properties and seaside living at more affordable rates than major metro cities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500 card-hover">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <Calendar className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Relaxed Pace</h3>
                <p className="text-gray-600 text-sm text-center">
                  Escape the hustle of city life and embrace the laid-back atmosphere famous in coastal towns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rent;

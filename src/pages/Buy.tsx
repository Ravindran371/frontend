import React from "react";
import { IndianRupee } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Building, MapPin } from "lucide-react";

const Buy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Buy Your Dream Home in Pondicherry
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Properties to Buy in Pondicherry</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input 
                  type="text"
                  placeholder="White Town, Heritage Zone, Beach Road"
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <Select defaultValue="any">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="house">French Colonial</SelectItem>
                    <SelectItem value="apartment">Tamil Quarter</SelectItem>
                    <SelectItem value="villa">Heritage Villa</SelectItem>
                    <SelectItem value="plot">Beachfront Property</SelectItem>
                    <SelectItem value="modern">Modern Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <Select defaultValue="any">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="50L-1Cr">₹50 Lakh - ₹1 Crore</SelectItem>
                    <SelectItem value="1Cr-2Cr">₹1 Crore - ₹2 Crore</SelectItem>
                    <SelectItem value="2Cr-5Cr">₹2 Crore - ₹5 Crore</SelectItem>
                    <SelectItem value="5Cr+">₹5 Crore+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms (Min)
                  </label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bathrooms (Min)
                  </label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md flex items-center justify-center">
                <IndianRupee className="mr-2 h-4 w-4" /> Search Properties
              </Button>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Buy in Pondicherry?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
                <p className="text-gray-600">
                  Located on the Coromandel Coast, Pondicherry offers unique beachfront properties with excellent connectivity to Chennai and Bangalore.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Architectural Heritage</h3>
                <p className="text-gray-600">
                  Own a piece of history with properties featuring unique Franco-Tamil architecture that can't be found anywhere else in India.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <IndianRupee className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Investment Potential</h3>
                <p className="text-gray-600">
                  With growing tourism and development, property values in Pondicherry have shown consistent appreciation over the years.
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

export default Buy;

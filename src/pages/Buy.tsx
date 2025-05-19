
import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Buy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Buy Your Dream Home
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Properties to Buy</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input 
                  type="text"
                  placeholder="City, Neighborhood, Zip"
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
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
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
                    <SelectItem value="100k-200k">$100k - $200k</SelectItem>
                    <SelectItem value="200k-500k">$200k - $500k</SelectItem>
                    <SelectItem value="500k-800k">$500k - $800k</SelectItem>
                    <SelectItem value="800k+">$800k+</SelectItem>
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
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md">
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buy;


import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Sell: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Sell Your Property
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">List Your Property</h2>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Title
                  </label>
                  <Input 
                    type="text"
                    placeholder="E.g. Modern Villa with Pool"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="plot">Plot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <Input 
                    type="text"
                    placeholder="City, Neighborhood"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <Input 
                    type="number"
                    placeholder="Enter amount"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Size (sqft)
                  </label>
                  <Input 
                    type="number"
                    placeholder="Size in sqft"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5+">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bathrooms
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5+">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year Built
                  </label>
                  <Input 
                    type="number"
                    placeholder="Year"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea 
                  placeholder="Describe your property..."
                  className="w-full h-32"
                />
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Images
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mt-1 flex justify-center">
                    <Label 
                      htmlFor="property-images" 
                      className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 px-4 py-2 border border-gray-300"
                    >
                      Upload Images
                    </Label>
                    <Input 
                      id="property-images" 
                      type="file" 
                      multiple 
                      accept="image/*"
                      className="sr-only" 
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB each</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Video
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mt-1 flex justify-center">
                    <Label 
                      htmlFor="property-video" 
                      className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 px-4 py-2 border border-gray-300"
                    >
                      Upload Video
                    </Label>
                    <Input 
                      id="property-video" 
                      type="file" 
                      accept="video/*"
                      className="sr-only" 
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">MP4, MOV up to 50MB</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg">
                  Submit Property
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sell;

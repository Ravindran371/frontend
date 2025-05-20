
import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building, MapPin, Image, Video } from "lucide-react";

const Sell: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Sell Your Property in Pondicherry
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold">Unique Market</h3>
              </div>
              <p className="text-gray-700">
                Pondicherry's property market is unique with high demand for heritage buildings and colonial style homes. Our experts understand the special value of Franco-Tamilian architecture.
              </p>
            </div>
            
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold">Heritage Value</h3>
              </div>
              <p className="text-gray-700">
                Properties in Pondicherry often come with historical significance that adds value. Our agents are trained to highlight the unique French and Tamil heritage of your property.
              </p>
            </div>
            
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold">Global Buyers</h3>
              </div>
              <p className="text-gray-700">
                Our international network connects you with buyers from France, across Europe, and worldwide who are specifically looking for property in this unique former French territory.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">List Your Property for Sale</h2>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Title
                  </label>
                  <Input 
                    type="text"
                    placeholder="E.g. Heritage Villa in French Quarter"
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
                      <SelectItem value="heritage">Heritage Home</SelectItem>
                      <SelectItem value="colonial">Colonial Building</SelectItem>
                      <SelectItem value="villa">French Villa</SelectItem>
                      <SelectItem value="house">Tamil House</SelectItem>
                      <SelectItem value="apartment">Modern Apartment</SelectItem>
                      <SelectItem value="plot">Land Plot</SelectItem>
                      <SelectItem value="commercial">Commercial Property</SelectItem>
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
                    placeholder="Area in Pondicherry"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹)
                  </label>
                  <Input 
                    type="number"
                    placeholder="Enter amount in rupees"
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
                  Historical Significance (if any)
                </label>
                <Input 
                  type="text"
                  placeholder="E.g. Former French consulate, colonial-era building, etc."
                  className="w-full mb-4"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea 
                  placeholder="Describe your property, highlighting any unique French or Tamil architectural features..."
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
                      className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 px-4 py-2 border border-gray-300 flex items-center"
                    >
                      <Image className="h-5 w-5 mr-2" />
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
                      className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 px-4 py-2 border border-gray-300 flex items-center"
                    >
                      <Video className="h-5 w-5 mr-2" />
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

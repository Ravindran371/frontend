import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Building, MapPin, indian-rupee as IndianRupee } from "lucide-react";

const Rent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Rent Your Perfect Place in Pondicherry
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Properties to Rent in Pondicherry</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input 
                  type="text"
                  placeholder="French Quarter, Auroville, Beach Road"
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
                    <SelectItem value="heritage">Heritage Home</SelectItem>
                    <SelectItem value="apartment">French-style Apartment</SelectItem>
                    <SelectItem value="villa">Beachside Villa</SelectItem>
                    <SelectItem value="bungalow">Colonial Bungalow</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget (Monthly)
                </label>
                <Select defaultValue="any">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="15k-25k">₹15,000 - ₹25,000</SelectItem>
                    <SelectItem value="25k-40k">₹25,000 - ₹40,000</SelectItem>
                    <SelectItem value="40k-60k">₹40,000 - ₹60,000</SelectItem>
                    <SelectItem value="60k+">₹60,000+</SelectItem>
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
                    Lease Duration
                  </label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="short">Short-term (&lt; 6 months)</SelectItem>
                      <SelectItem value="long">Long-term (&gt; 6 months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md flex items-center justify-center">
                <Search className="mr-2 h-4 w-4" /> Find Rental Properties
              </Button>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Rent in Pondicherry?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Seaside Living</h3>
                <p className="text-gray-600 text-sm">
                  Experience the tranquil coastal lifestyle with the Bay of Bengal at your doorstep.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Cultural Experience</h3>
                <p className="text-gray-600 text-sm">
                  Live amidst a unique blend of Tamil and French cultures, cuisine, and traditions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <IndianRupee className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Affordable Luxury</h3>
                <p className="text-gray-600 text-sm">
                  Enjoy heritage properties and seaside living at more affordable rates than major metro cities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Relaxed Pace</h3>
                <p className="text-gray-600 text-sm">
                  Escape the hustle of city life and embrace the laid-back atmosphere Pondicherry is famous for.
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

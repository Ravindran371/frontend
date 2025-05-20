
import React from "react";
import { IndianRupee, Building, MapPin, Home, Calendar, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Rent: React.FC = () => {
  const navigate = useNavigate();

  const featuredRentals = [
    {
      id: 101,
      title: "French Colonial Apartment",
      address: "Rue Suffren, White Town",
      price: "45,000",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      isNew: true
    },
    {
      id: 102,
      title: "Beach Road Villa",
      address: "Promenade Beach Road",
      price: "85,000",
      bedrooms: 3,
      bathrooms: 3,
      area: 2500,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      isNew: false
    },
    {
      id: 103,
      title: "Heritage Bungalow",
      address: "Mission Street, Heritage Zone",
      price: "65,000",
      bedrooms: 4,
      bathrooms: 3,
      area: 3000,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      isNew: true
    }
  ];

  const handlePropertyClick = (id: number) => {
    navigate(`/properties/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[400px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Rental in Pondicherry
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto">
              Experience the charm of living in historic French colonial buildings 
              and beautiful beachfront properties
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto -mt-20 relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Search Rental Properties in Pondicherry</h2>
            
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
                    <SelectItem value="auroville">Auroville</SelectItem>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <Select defaultValue="2">
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4+">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lease Duration
                </label>
                <Select defaultValue="long">
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
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <Select defaultValue="immediate">
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="1month">Within 1 month</SelectItem>
                    <SelectItem value="3month">Within 3 months</SelectItem>
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
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Featured Rental Properties</h2>
            <p className="text-center text-gray-600 mb-10">Live in the heart of Pondicherry's historic district</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredRentals.map((property) => (
                <Card key={property.id} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  onClick={() => handlePropertyClick(property.id)}
                >
                  <div className="relative h-64">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    {property.isNew && (
                      <Badge className="absolute top-4 left-4 bg-green-500 text-white">New</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.address}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 text-orange-500" />
                        <span className="text-xl font-bold text-orange-500">{property.price}/month</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span className="mr-2">{property.bedrooms} beds</span>•
                        <span className="mx-2">{property.bathrooms} baths</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{property.area} sq.ft</span>
                      <Button variant="outline" className="flex items-center justify-center border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-md">
                View All Rental Properties
              </Button>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Renting in Pondicherry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Seaside Living</h3>
                <p className="text-gray-600 text-sm text-center">
                  Experience the tranquil coastal lifestyle with the Bay of Bengal at your doorstep.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <Building className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Cultural Experience</h3>
                <p className="text-gray-600 text-sm text-center">
                  Live amidst a unique blend of Tamil and French cultures, cuisine, and traditions.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <IndianRupee className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Affordable Luxury</h3>
                <p className="text-gray-600 text-sm text-center">
                  Enjoy heritage properties and seaside living at more affordable rates than major metro cities.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <Calendar className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2 text-center">Relaxed Pace</h3>
                <p className="text-gray-600 text-sm text-center">
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

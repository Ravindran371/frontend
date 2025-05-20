
import React from "react";
import { IndianRupee, Building, MapPin, Home, Heart, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Buy: React.FC = () => {
  const navigate = useNavigate();

  const featuredProperties = [
    {
      id: 1,
      title: "Heritage Villa in White Town",
      address: "Rue Romain Rolland, White Town",
      price: "2.75 Cr",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 2,
      title: "Colonial Mansion",
      address: "Dumas Street, French Quarter",
      price: "3.5 Cr",
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id: 3,
      title: "Beachfront Property",
      address: "Promenade Beach Road",
      price: "4.2 Cr",
      bedrooms: 3,
      bathrooms: 3,
      area: 2800,
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
              "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Buy Your Dream Home in Pondicherry
            </h1>
            <p className="text-white text-xl max-w-3xl mx-auto">
              Discover historic colonial mansions, beachfront villas, and modern apartments 
              in the charming Franco-Indian town of Pondicherry
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto -mt-20 relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Your Perfect Property in Pondicherry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Select defaultValue="white-town">
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
                <Select defaultValue="heritage">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="heritage">Heritage Home</SelectItem>
                    <SelectItem value="colonial">Colonial Building</SelectItem>
                    <SelectItem value="villa">French Villa</SelectItem>
                    <SelectItem value="modern">Modern Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <Select defaultValue="1cr-2cr">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50l-1cr">₹50 Lakh - ₹1 Crore</SelectItem>
                    <SelectItem value="1cr-2cr">₹1 Crore - ₹2 Crore</SelectItem>
                    <SelectItem value="2cr-5cr">₹2 Crore - ₹5 Crore</SelectItem>
                    <SelectItem value="5cr+">₹5 Crore+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md flex items-center justify-center text-lg">
                <IndianRupee className="mr-2 h-5 w-5" /> Search Properties
              </Button>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Featured Properties in Pondicherry</h2>
            <p className="text-center text-gray-600 mb-10">Handpicked colonial and heritage properties in the heart of Pondicherry</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <Card key={property.id} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  onClick={() => handlePropertyClick(property.id)}
                >
                  <div className="relative h-64">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.address}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-orange-500">₹{property.price}</span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span className="mr-2">{property.bedrooms} beds</span>•
                        <span className="mx-2">{property.bathrooms} baths</span>•
                        <span className="ml-2">{property.area} sq.ft</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full flex items-center justify-center border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-md">
                View All Properties
              </Button>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Buy in Pondicherry?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Strategic Location</h3>
                <p className="text-gray-600 text-center">
                  Located on the Coromandel Coast, Pondicherry offers unique beachfront properties with excellent 
                  connectivity to Chennai and Bangalore.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <Building className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Architectural Heritage</h3>
                <p className="text-gray-600 text-center">
                  Own a piece of history with properties featuring unique Franco-Tamil architecture that can't be 
                  found anywhere else in India.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-5 mx-auto">
                  <IndianRupee className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Investment Potential</h3>
                <p className="text-gray-600 text-center">
                  With growing tourism and development, property values in Pondicherry have shown consistent 
                  appreciation over the years.
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

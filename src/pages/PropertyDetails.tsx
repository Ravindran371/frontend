
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Phone, 
  Mail, 
  User,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";
import { apiService, Property } from "@/services/api";

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (id) {
        const propertyData = await apiService.getPropertyById(id);
        setProperty(propertyData);
      }
      setLoading(false);
    };

    fetchProperty();
  }, [id]);

  const nextImage = () => {
    if (property?.images) {
      setCurrentImageIndex((prev) => 
        prev === property.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (property?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? property.images!.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Property not found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Property Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.type} in {property.location}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{property.location}, {property.area}</span>
            </div>
            <div className="text-2xl font-bold text-teal-600">{property.price}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Images and Video Section */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="relative mb-6">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={property.image}
                    alt={`${property.type} in ${property.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {property.images && property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Property Details */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Property Details</h2>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 text-teal-500 mr-2" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 text-teal-500 mr-2" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-5 w-5 text-teal-500 mr-2" />
                      <span>{property.squareFootage}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Description</h3>
                      <p className="text-gray-600">
                        This beautiful {property.type} offers modern living with excellent amenities. 
                        Located in {property.area}, {property.location}, it provides easy access to local attractions 
                        and transportation. Perfect for families or professionals looking for quality accommodation.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Features</h3>
                      <ul className="grid grid-cols-2 gap-2 text-gray-600">
                        <li>• Modern Kitchen</li>
                        <li>• Parking Space</li>
                        <li>• Security System</li>
                        <li>• Garden/Balcony</li>
                        <li>• Near Schools</li>
                        <li>• Public Transport</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Location</h2>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-teal-500 mx-auto mb-2" />
                      <p className="text-gray-600">
                        Map integration coming soon
                      </p>
                      <p className="text-sm text-gray-500">
                        Location: {property.area}, {property.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-gray-600">Property Agent</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-teal-500 hover:bg-teal-600">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Agent
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Send Inquiry</h3>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Input type="tel" placeholder="Your Phone" />
                    <Textarea 
                      placeholder="Message"
                      className="h-24"
                    />
                    <Button className="w-full bg-teal-500 hover:bg-teal-600">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Property Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Property Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type</span>
                      <span className="font-medium capitalize">{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Listing Type</span>
                      <span className="font-medium capitalize">{property.listingType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property ID</span>
                      <span className="font-medium">#{property.id || property._id}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;

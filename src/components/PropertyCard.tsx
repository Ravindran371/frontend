
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Property } from "@/services/api";
import { Calendar } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/properties/${property.id || property._id}`);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-xl hover:transform hover:scale-[1.02]" 
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={property.image} 
          alt={`${property.type} in ${property.location}`} 
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div 
          className="absolute top-4 right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors z-10"
          onClick={handleLikeClick}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-500'} transition-colors`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={liked ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
      <CardContent className="pt-4 group-hover:bg-gray-50 transition-colors">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {property.type} in {property.location}
        </h3>
        <p className="text-gray-600 text-sm mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-blue-600">{property.price}</span>
          {property.type !== 'plot' && (
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {property.bedrooms}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {property.bathrooms}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                {property.squareFootage}
              </div>
            </div>
          )}
        </div>

        {/* Property Owner Info and Upload Date */}
        <div className="border-t pt-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={property.agent.image}
                alt={property.agent.name}
                className="h-8 w-8 rounded-full mr-2"
              />
              <span className="text-gray-700 text-sm font-medium">{property.agent.name}</span>
            </div>
            {property.createdAt && (
              <div className="flex items-center text-gray-500 text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{formatDate(property.createdAt)}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

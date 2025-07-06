
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Property } from "@/services/api";
import { Calendar, Heart, Trash2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

interface PropertyCardProps {
  property: Property;
  onDelete?: (propertyId: string | number) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onDelete }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    navigate(`/properties/${property.id || property._id}`);
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(property.id || property._id!);
    }
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

  const canDelete = user && property.owner?.email === user.email;

  return (
    <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="relative cursor-pointer" onClick={handleClick}>
        <img 
          src={property.image} 
          alt={`${property.type} in ${property.location}`} 
          className="h-64 w-full object-cover"
        />
        <div 
          className="absolute top-3 right-3 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors z-10"
          onClick={handleLikeClick}
        >
          <Heart className={`h-4 w-4 ${liked ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
        </div>
        {canDelete && (
          <div 
            className="absolute top-3 left-3 bg-red-500 rounded-full p-2 cursor-pointer hover:bg-red-600 transition-colors z-10"
            onClick={handleDeleteClick}
          >
            <Trash2 className="h-4 w-4 text-white" />
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="cursor-pointer" onClick={handleClick}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {property.type} in {property.location}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 line-through">₹{parseInt(property.price.replace('₹', '').replace(/,/g, '')) + 50000}</span>
              <span className="text-lg font-bold text-red-500">{property.price}</span>
            </div>
            {property.createdAt && (
              <div className="flex items-center text-gray-500 text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{formatDate(property.createdAt)}</span>
              </div>
            )}
          </div>

          {property.type !== 'plot' && (
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>{property.bedrooms} Bed</span>
              <span>{property.bathrooms} Bath</span>
              <span>{property.squareFootage}</span>
            </div>
          )}
        </div>

        <Button 
          className="w-full bg-white text-black border border-black hover:bg-black hover:text-white transition-colors"
          onClick={handleClick}
        >
          VIEW DETAILS
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

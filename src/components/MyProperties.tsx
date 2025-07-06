
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Trash2, MapPin, Bed, Bath, Square } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Property } from '@/services/api';
import { toast } from '@/hooks/use-toast';

interface MyPropertiesProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

const MyProperties: React.FC<MyPropertiesProps> = ({ isOpen, onClose, onBack }) => {
  const { user } = useAuth();
  const [userProperties, setUserProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (isOpen) {
      // Load properties from localStorage when modal opens
      const storedProperties = localStorage.getItem('userProperties');
      const allProperties = storedProperties ? JSON.parse(storedProperties) : [];
      
      // Filter properties by current user
      const myProperties = allProperties.filter((property: Property) => 
        property.owner?.email === user?.email
      );
      
      setUserProperties(myProperties);
    }
  }, [isOpen, user?.email]);

  const handleDeleteProperty = (propertyId: string | number) => {
    const storedProperties = localStorage.getItem('userProperties');
    const allProperties = storedProperties ? JSON.parse(storedProperties) : [];
    
    const updatedProperties = allProperties.filter((property: Property) => 
      property.id !== propertyId && property._id !== propertyId
    );
    
    localStorage.setItem('userProperties', JSON.stringify(updatedProperties));
    setUserProperties(prev => prev.filter(p => p.id !== propertyId && p._id !== propertyId));
    
    toast({
      title: "Property deleted",
      description: "Property has been removed successfully.",
      className: "bg-green-500 text-white border-green-500",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle>My Properties</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ×
          </Button>
        </CardHeader>
        <CardContent>
          {userProperties.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">You haven't uploaded any properties yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userProperties.map((property) => (
                <div key={property.id || property._id} className="border rounded-lg p-4 relative">
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 z-10"
                    onClick={() => handleDeleteProperty(property.id || property._id!)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  
                  <h3 className="font-semibold text-sm mb-1">{property.title}</h3>
                  <p className="text-xs text-gray-600 flex items-center mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {property.location}
                  </p>
                  
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    {property.type !== 'plot' && (
                      <>
                        <span className="flex items-center">
                          <Bed className="h-3 w-3 mr-1" />
                          {property.bedrooms}
                        </span>
                        <span className="flex items-center">
                          <Bath className="h-3 w-3 mr-1" />
                          {property.bathrooms}
                        </span>
                        <span className="flex items-center">
                          <Square className="h-3 w-3 mr-1" />
                          {property.squareFootage}
                        </span>
                      </>
                    )}
                  </div>
                  
                  <p className="font-bold text-teal-600">{property.price}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;

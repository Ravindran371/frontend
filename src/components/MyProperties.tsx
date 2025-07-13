
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
    // Clear all properties from localStorage on component mount
    localStorage.removeItem('userProperties');
    setUserProperties([]);
  }, []);

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
          <div className="text-center py-8">
            <p className="text-gray-500">You haven't uploaded any properties yet.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;

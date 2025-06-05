
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Trash2, Calendar, MapPin } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Property } from '@/services/api';
import { toast } from '@/hooks/use-toast';

interface MyPropertiesProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyProperties: React.FC<MyPropertiesProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [userProperties, setUserProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (isOpen && user) {
      // Load user properties from localStorage
      const storedProperties = localStorage.getItem('userProperties');
      const allProperties = storedProperties ? JSON.parse(storedProperties) : [];
      
      // Filter properties by current user
      const filteredProperties = allProperties.filter((property: Property) => 
        property.owner === user.id
      );
      
      setUserProperties(filteredProperties);
    }
  }, [isOpen, user]);

  const handleDeleteProperty = (propertyId: number | string) => {
    // Remove from localStorage
    const storedProperties = localStorage.getItem('userProperties');
    const allProperties = storedProperties ? JSON.parse(storedProperties) : [];
    
    const updatedProperties = allProperties.filter((property: Property) => 
      property.id !== propertyId && property._id !== propertyId
    );
    
    localStorage.setItem('userProperties', JSON.stringify(updatedProperties));
    
    // Update local state
    setUserProperties(prev => prev.filter(property => 
      property.id !== propertyId && property._id !== propertyId
    ));
    
    toast({
      title: t('message.propertyDeleted'),
      description: t('message.propertyDeleted'),
      className: "bg-green-500 text-white border-green-500",
    });
  };

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">
            {t('profile.myProperties')}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {userProperties.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">{t('profile.noProperties')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userProperties.map((property) => (
                <Card key={property.id || property._id} className="relative">
                  <CardContent className="p-4">
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg capitalize">
                        {property.type} {t('property.in')} {property.location}
                      </h3>
                      
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{property.area}, {property.location}</span>
                      </div>
                      
                      <div className="text-xl font-bold text-teal-600">
                        {property.price}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{t('property.posted')} {property.createdAt ? formatDate(property.createdAt) : t('property.recently')}</span>
                        </div>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProperty(property.id || property._id!)}
                          className="text-red-600 hover:text-red-700 hover:border-red-300"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          {t('profile.delete')}
                        </Button>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <span className="capitalize">{t(`filter.${property.listingType}`)}</span>
                        {property.type !== 'plot' && (
                          <>
                            <span> • {property.bedrooms} {t('form.bedrooms')}</span>
                            <span> • {property.bathrooms} {t('form.bathrooms')}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;

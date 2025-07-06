
import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import FilterSection, { FilterState } from "@/components/FilterSection";
import PropertyCard from "@/components/PropertyCard";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Property } from "@/services/api";

const Index: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Load properties from localStorage
    const storedProperties = localStorage.getItem('userProperties');
    if (storedProperties) {
      setProperties(JSON.parse(storedProperties));
    }
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    console.log('Filters changed:', filters);
    // Filter logic can be implemented here
  };

  const handleClearFilters = () => {
    console.log('Filters cleared');
  };

  const handleSellRentSubmit = (type: "sell" | "rent-your-property") => {
    if (!user) {
      alert(t('message.signInRequired'));
      return;
    }
    console.log('Sell/Rent action:', type);
  };

  const handlePropertyDelete = (propertyId: string | number) => {
    const storedProperties = localStorage.getItem('userProperties');
    const allProperties = storedProperties ? JSON.parse(storedProperties) : [];
    
    const updatedProperties = allProperties.filter((property: Property) => 
      property.id !== propertyId && property._id !== propertyId
    );
    
    localStorage.setItem('userProperties', JSON.stringify(updatedProperties));
    setProperties(updatedProperties);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        <FilterSection 
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          onSellRentSubmit={handleSellRentSubmit}
        />

        {/* Properties Grid */}
        {properties.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map((property) => (
                <PropertyCard 
                  key={property.id || property._id} 
                  property={property}
                  onDelete={handlePropertyDelete}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

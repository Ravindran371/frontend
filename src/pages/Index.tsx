
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FilterSection, { FilterState } from "@/components/FilterSection";
import PropertyForm from "@/components/PropertyForm";
import PropertyGrid from "@/components/PropertyGrid";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Property } from "@/services/api";

const Index: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [propertyFormType, setPropertyFormType] = useState<"sell" | "rent-your-property">("sell");
  const [properties, setProperties] = useState<Property[]>([]);

  // Load properties from localStorage on component mount
  useEffect(() => {
    const storedProperties = localStorage.getItem('userProperties');
    if (storedProperties) {
      const userProperties = JSON.parse(storedProperties);
      setProperties(userProperties);
    }
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    // Filter logic can be implemented when properties are added back
    console.log('Filters changed:', filters);
  };

  const handleClearFilters = () => {
    // Clear filter logic
    console.log('Filters cleared');
  };

  const handleSellRentSubmit = (type: "sell" | "rent-your-property") => {
    if (!user) {
      alert(t('message.signInRequired'));
      return;
    }
    setPropertyFormType(type);
    setShowPropertyForm(true);
    console.log('Sell/Rent action:', type);
  };

  const handlePropertySubmit = (property: Property) => {
    // Add the new property to the properties list
    setProperties(prev => [property, ...prev]);
    setShowPropertyForm(false);
  };

  const handleClosePropertyForm = () => {
    setShowPropertyForm(false);
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

        {/* Property Grid */}
        {properties.length > 0 && (
          <div className="mt-8">
            <PropertyGrid properties={properties} />
          </div>
        )}
      </div>

      {/* Property Form Modal */}
      {showPropertyForm && (
        <PropertyForm
          type={propertyFormType}
          onSubmit={handlePropertySubmit}
          onClose={handleClosePropertyForm}
        />
      )}
    </div>
  );
};

export default Index;

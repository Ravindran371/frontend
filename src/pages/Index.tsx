
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FilterSection, { FilterState } from "@/components/FilterSection";
import PropertyGrid from "@/components/PropertyGrid";
import PropertyForm from "@/components/PropertyForm";
import { apiService, Property } from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Index: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [propertyFormType, setPropertyFormType] = useState<"sell" | "rent-your-property">("sell");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { t } = useLanguage();

  // Load properties from localStorage on component mount
  useEffect(() => {
    const loadProperties = async () => {
      try {
        // Get properties from API
        const apiData = await apiService.getProperties();
        
        // Get user-submitted properties from localStorage
        const storedProperties = localStorage.getItem('userProperties');
        const userProperties = storedProperties ? JSON.parse(storedProperties) : [];
        
        // Combine API data with user properties
        const allProperties = [...apiData, ...userProperties];
        setProperties(allProperties);
        setFilteredProperties(allProperties);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
        // Load only user properties if API fails
        const storedProperties = localStorage.getItem('userProperties');
        const userProperties = storedProperties ? JSON.parse(storedProperties) : [];
        setProperties(userProperties);
        setFilteredProperties(userProperties);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = properties;

    if (filters.lookingFor && (filters.lookingFor === "buy" || filters.lookingFor === "rent")) {
      filtered = filtered.filter(property => property.listingType === filters.lookingFor);
    }

    if (filters.propertyType) {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }

    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.area?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.budget) {
      const budgetNum = parseInt(filters.budget.replace(/[^\d]/g, ''));
      filtered = filtered.filter(property => {
        const priceNum = parseInt(property.price.replace(/[^\d]/g, ''));
        return priceNum <= budgetNum;
      });
    }

    setFilteredProperties(filtered);
  };

  const handleClearFilters = () => {
    setFilteredProperties(properties);
  };

  const handleSellRentSubmit = (type: "sell" | "rent-your-property") => {
    if (!user) {
      alert(t('message.signInRequired'));
      return;
    }
    setPropertyFormType(type);
    setShowPropertyForm(true);
  };

  const handlePropertySubmit = async (newProperty: any) => {
    try {
      // Add to current state
      const updatedProperties = [...properties, newProperty];
      setProperties(updatedProperties);
      setFilteredProperties(updatedProperties);
      
      // Save user properties to localStorage
      const existingUserProperties = localStorage.getItem('userProperties');
      const userProperties = existingUserProperties ? JSON.parse(existingUserProperties) : [];
      userProperties.push(newProperty);
      localStorage.setItem('userProperties', JSON.stringify(userProperties));
      
      console.log('Property submitted and saved:', newProperty);
    } catch (error) {
      console.error('Error submitting property:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-8 flex items-center justify-center">
          <div className="text-lg">{t('message.loadingProperties')}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        <FilterSection 
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          onSellRentSubmit={handleSellRentSubmit}
        />
        
        <PropertyGrid properties={filteredProperties} />
      </div>

      {showPropertyForm && (
        <PropertyForm
          type={propertyFormType}
          onSubmit={handlePropertySubmit}
          onClose={() => setShowPropertyForm(false)}
        />
      )}
    </div>
  );
};

export default Index;

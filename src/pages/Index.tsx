
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FilterSection, { FilterState } from "@/components/FilterSection";
import PropertyGrid from "@/components/PropertyGrid";
import PropertyForm from "@/components/PropertyForm";
import { apiService, Property } from "@/services/api";

const Index: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [propertyFormType, setPropertyFormType] = useState<"sell" | "rent-your-property">("sell");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await apiService.getProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    if (filters.lookingFor === "sell" || filters.lookingFor === "rent-your-property") {
      setPropertyFormType(filters.lookingFor);
      setShowPropertyForm(true);
      return;
    }

    let filtered = properties;

    if (filters.lookingFor && (filters.lookingFor === "buy" || filters.lookingFor === "rent")) {
      filtered = filtered.filter(property => property.listingType === filters.lookingFor);
    }

    if (filters.propertyType) {
      filtered = filtered.filter(property => property.type === filters.propertyType);
    }

    if (filters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(filters.location.toLowerCase())
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

  const handlePropertySubmit = async (newProperty: any) => {
    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('title', newProperty.title);
      formData.append('location', newProperty.location);
      formData.append('price', newProperty.price);
      formData.append('bedrooms', newProperty.bedrooms.toString());
      formData.append('bathrooms', newProperty.bathrooms.toString());
      formData.append('area', newProperty.area);
      formData.append('propertyType', newProperty.type);
      formData.append('listingType', newProperty.listingType);
      formData.append('latitude', newProperty.latitude?.toString() || '');
      formData.append('longitude', newProperty.longitude?.toString() || '');
      
      // Add images
      if (newProperty.images) {
        newProperty.images.forEach((image: File, index: number) => {
          formData.append(`images`, image);
        });
      }
      
      // Add video
      if (newProperty.video) {
        formData.append('video', newProperty.video);
      }

      // Try to create via API, fallback to local addition
      try {
        const createdProperty = await apiService.createProperty(formData);
        setProperties(prev => [...prev, createdProperty]);
        setFilteredProperties(prev => [...prev, createdProperty]);
      } catch (error) {
        console.error('Failed to create property via API, adding locally:', error);
        // Fallback: add to local state
        setProperties(prev => [...prev, newProperty]);
        setFilteredProperties(prev => [...prev, newProperty]);
      }
    } catch (error) {
      console.error('Error submitting property:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 pb-8 flex items-center justify-center">
          <div className="text-lg">Loading properties...</div>
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


import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FilterSection, { FilterState } from "@/components/FilterSection";
import PropertyGrid from "@/components/PropertyGrid";
import PropertyForm from "@/components/PropertyForm";

const Index: React.FC = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Modern Villa in Los Angeles",
      location: "Los Angeles, CA",
      price: "₹2,800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,300 sq ft",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      agent: {
        name: "Jennifer Barton",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      },
      featured: true,
      type: "villa",
      listingType: "buy" as const,
    },
    {
      id: 2,
      title: "Luxury Family Home",
      location: "San Diego, CA",
      price: "₹1,850,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,100 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      agent: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      },
      featured: false,
      type: "house",
      listingType: "buy" as const,
    },
    {
      id: 3,
      title: "Waterfront Apartment with Pool",
      location: "Miami Beach, FL",
      price: "₹5,200/month",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      agent: {
        name: "Sarah Miller",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      },
      featured: false,
      type: "apartment",
      listingType: "rent" as const,
    },
    {
      id: 4,
      title: "Downtown Penthouse",
      location: "Seattle, WA",
      price: "₹8,500/month",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,200 sq ft",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      agent: {
        name: "Jason Hughes",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      },
      featured: false,
      type: "apartment",
      listingType: "rent" as const,
    }
  ]);

  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [propertyFormType, setPropertyFormType] = useState<"sell" | "rent-your-property">("sell");

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

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

  const handlePropertySubmit = (newProperty: any) => {
    setProperties(prev => [...prev, newProperty]);
  };

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

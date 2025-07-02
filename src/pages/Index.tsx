
import React from "react";
import Navigation from "@/components/Navigation";
import FilterSection, { FilterState } from "@/components/FilterSection";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Index: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

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
    console.log('Sell/Rent action:', type);
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
      </div>
    </div>
  );
};

export default Index;

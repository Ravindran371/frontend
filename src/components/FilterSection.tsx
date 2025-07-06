import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import PropertyForm from "./PropertyForm";
import MyProperties from "./MyProperties";
import { Property } from "@/services/api";

export interface FilterState {
  location: string;
  propertyType: string;
  priceRange: string;
  bedrooms: string;
}

interface FilterSectionProps {
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  onSellRentSubmit: (type: "sell" | "rent-your-property") => void;
  onPropertySubmitted?: (property: Property) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ 
  onFilterChange, 
  onClearFilters, 
  onSellRentSubmit,
  onPropertySubmitted 
}) => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [propertyFormType, setPropertyFormType] = useState<"sell" | "rent-your-property">("sell");
  const [showMyProperties, setShowMyProperties] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: ""
  });

  const handlePropertyFormSubmit = (property: Property) => {
    setShowPropertyForm(false);
    if (onPropertySubmitted) {
      onPropertySubmitted(property);
    }
  };

  const handleSellClick = () => {
    if (!user) {
      alert(t('message.signInRequired'));
      return;
    }
    if (user.role !== 'agent') {
      alert('Only agents can upload properties for sale');
      return;
    }
    setPropertyFormType("sell");
    setShowPropertyForm(true);
  };

  const handleRentClick = () => {
    if (!user) {
      alert(t('message.signInRequired'));
      return;
    }
    if (user.role !== 'agent') {
      alert('Only agents can upload properties for rent');
      return;
    }
    setPropertyFormType("rent-your-property");
    setShowPropertyForm(true);
  };

  const handleMyPropertiesClick = () => {
    if (!user) {
      alert(t('message.signInRequired'));
      return;
    }
    setShowMyProperties(true);
  };

  const handleUpdateFilter = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleClearAllFilters = () => {
    const clearedFilters = {
      location: "",
      propertyType: "",
      priceRange: "",
      bedrooms: ""
    };
    setFilters(clearedFilters);
    onClearFilters();
  };

  const isAgent = user?.role === 'agent';

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder={t('search.enterLocation')}
              value={filters.location}
              onChange={(e) => handleUpdateFilter('location', e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleClearAllFilters}
              variant="outline"
              className="h-12 px-4 min-w-[120px]"
            >
              <X className="h-4 w-4 mr-2" />
              {t('filter.clear')}
            </Button>
            <Button className="h-12 px-6 bg-teal-500 hover:bg-teal-600">
              <Search className="h-4 w-4 mr-2" />
              {t('search.search')}
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Select value={filters.propertyType} onValueChange={(value) => handleUpdateFilter('propertyType', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder={t('filter.propertyType')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">{t('property.house')}</SelectItem>
              <SelectItem value="apartment">{t('property.apartment')}</SelectItem>
              <SelectItem value="condo">{t('property.condo')}</SelectItem>
              <SelectItem value="plot">{t('property.plot')}</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.priceRange} onValueChange={(value) => handleUpdateFilter('priceRange', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder={t('filter.priceRange')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50000">₹0 - ₹50,000</SelectItem>
              <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
              <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
              <SelectItem value="200000+">₹2,00,000+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.bedrooms} onValueChange={(value) => handleUpdateFilter('bedrooms', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder={t('filter.bedrooms')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 {t('filter.bedroom')}</SelectItem>
              <SelectItem value="2">2 {t('filter.bedrooms')}</SelectItem>
              <SelectItem value="3">3 {t('filter.bedrooms')}</SelectItem>
              <SelectItem value="4+">4+ {t('filter.bedrooms')}</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            className="h-12 border-2 border-dashed border-gray-300 hover:border-teal-500 hover:bg-teal-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            {t('filter.moreFilters')}
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {isAgent && (
            <>
              <Button
                onClick={handleSellClick}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                {t('action.sell')}
              </Button>
              <Button
                onClick={handleRentClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                {t('action.rentYourProperty')}
              </Button>
            </>
          )}
          {user && (
            <Button
              onClick={handleMyPropertiesClick}
              variant="outline"
              className="px-6 py-3 rounded-lg font-medium border-gray-300 hover:border-teal-500 hover:bg-teal-50"
            >
              {t('action.myProperties')}
            </Button>
          )}
        </div>
      </div>

      {/* Property Form Modal */}
      {showPropertyForm && (
        <PropertyForm
          type={propertyFormType}
          onSubmit={handlePropertyFormSubmit}
          onClose={() => setShowPropertyForm(false)}
        />
      )}

      {/* My Properties Modal */}
      {showMyProperties && (
        <MyProperties
          isOpen={showMyProperties}
          onClose={() => setShowMyProperties(false)}
          onBack={() => setShowMyProperties(false)}
        />
      )}
    </>
  );
};

export default FilterSection;

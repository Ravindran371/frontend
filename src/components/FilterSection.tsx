
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PropertyForm from "./PropertyForm";

interface FilterSectionProps {
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
  onSellRentSubmit: (type: "sell" | "rent-your-property") => void;
}

export interface FilterState {
  lookingFor: string;
  propertyType: string;
  location: string;
  budget: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange, onClearFilters, onSellRentSubmit }) => {
  const { t } = useLanguage();
  const [filters, setFilters] = useState<FilterState>({
    lookingFor: "",
    propertyType: "",
    location: "",
    budget: ""
  });
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [propertyFormType, setPropertyFormType] = useState<"sell" | "rent-your-property">("sell");

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    if (key === "lookingFor" && (value === "sell" || value === "rent-your-property")) {
      setPropertyFormType(value);
      setShowPropertyForm(true);
      onSellRentSubmit(value);
      return;
    }
    
    onFilterChange(newFilters);
  };

  const handleClearFilters = () => {
    const emptyFilters = {
      lookingFor: "",
      propertyType: "",
      location: "",
      budget: ""
    };
    setFilters(emptyFilters);
    onClearFilters();
  };

  const handlePropertySubmit = (property: any) => {
    console.log('Property submitted:', property);
    setShowPropertyForm(false);
  };

  const handlePropertyClose = () => {
    setShowPropertyForm(false);
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl p-3 mx-auto max-w-4xl mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex-1 min-w-0">
            <div className="px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="text-xs font-semibold text-gray-700 mb-2">{t('filter.lookingFor')}</div>
              <Select onValueChange={(value) => handleFilterChange("lookingFor", value)} value={filters.lookingFor}>
                <SelectTrigger className="border-0 p-0 h-auto text-sm font-medium min-h-[44px]">
                  <SelectValue placeholder={t('filter.select')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rent">{t('filter.rent')}</SelectItem>
                  <SelectItem value="buy">{t('filter.buy')}</SelectItem>
                  <SelectItem value="sell">{t('filter.sell')}</SelectItem>
                  <SelectItem value="rent-your-property">{t('filter.rentYourProperty')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(filters.lookingFor === "rent" || filters.lookingFor === "buy") && (
            <>
              <div className="flex-1 min-w-0">
                <div className="px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-xs font-semibold text-gray-700 mb-2">{t('filter.propertyType')}</div>
                  <Select onValueChange={(value) => handleFilterChange("propertyType", value)} value={filters.propertyType}>
                    <SelectTrigger className="border-0 p-0 h-auto text-sm font-medium min-h-[44px]">
                      <SelectValue placeholder={t('filter.anyType')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">{t('property.house')}</SelectItem>
                      <SelectItem value="apartment">{t('property.apartment')}</SelectItem>
                      <SelectItem value="villa">{t('property.villa')}</SelectItem>
                      <SelectItem value="plot">{t('property.plot')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-xs font-semibold text-gray-700 mb-2">{t('filter.location')}</div>
                  <Input 
                    placeholder={t('filter.where')}
                    className="border-0 p-0 h-auto text-sm font-medium placeholder:text-gray-400 min-h-[44px]"
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-xs font-semibold text-gray-700 mb-2">{t('filter.budget')}</div>
                  <Input 
                    placeholder={t('filter.maxPrice')}
                    className="border-0 p-0 h-auto text-sm font-medium placeholder:text-gray-400 min-h-[44px]"
                    value={filters.budget}
                    onChange={(e) => handleFilterChange("budget", e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex items-center gap-3 px-4 py-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleClearFilters}
              className="text-gray-600 hover:text-gray-800 min-h-[44px] px-4"
            >
              {t('filter.clear')}
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 min-h-[44px]">
              Search
            </Button>
          </div>
        </div>
      </div>

      {showPropertyForm && (
        <PropertyForm
          onSubmit={handlePropertySubmit}
          onClose={handlePropertyClose}
          type={propertyFormType}
        />
      )}
    </>
  );
};

export default FilterSection;

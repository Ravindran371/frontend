
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

interface FilterSectionProps {
  onFilterChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

export interface FilterState {
  lookingFor: string;
  propertyType: string;
  location: string;
  budget: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange, onClearFilters }) => {
  const [filters, setFilters] = useState<FilterState>({
    lookingFor: "",
    propertyType: "",
    location: "",
    budget: ""
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
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

  return (
    <div className="bg-white shadow-lg rounded-full p-2 mx-auto max-w-4xl mb-8">
      <div className="flex items-center gap-1">
        <div className="flex-1 min-w-0">
          <div className="px-4 py-3 border-r border-gray-200">
            <div className="text-xs font-semibold text-gray-700 mb-1">Looking For</div>
            <Select onValueChange={(value) => handleFilterChange("lookingFor", value)} value={filters.lookingFor}>
              <SelectTrigger className="border-0 p-0 h-auto text-sm font-medium">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
                <SelectItem value="rent-your-property">Rent Your Property</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {(filters.lookingFor === "buy" || filters.lookingFor === "rent") && (
          <>
            <div className="flex-1 min-w-0">
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="text-xs font-semibold text-gray-700 mb-1">Property Type</div>
                <Select onValueChange={(value) => handleFilterChange("propertyType", value)} value={filters.propertyType}>
                  <SelectTrigger className="border-0 p-0 h-auto text-sm font-medium">
                    <SelectValue placeholder="Any type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="text-xs font-semibold text-gray-700 mb-1">Location</div>
                <Input 
                  placeholder="Where?"
                  className="border-0 p-0 h-auto text-sm font-medium placeholder:text-gray-400"
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="text-xs font-semibold text-gray-700 mb-1">Budget</div>
                <Input 
                  placeholder="Max price"
                  className="border-0 p-0 h-auto text-sm font-medium placeholder:text-gray-400"
                  value={filters.budget}
                  onChange={(e) => handleFilterChange("budget", e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleClearFilters}
            className="text-gray-600 hover:text-gray-800"
          >
            Clear
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

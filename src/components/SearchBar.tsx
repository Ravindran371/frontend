
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const SearchBar: React.FC = () => {
  const [searchType, setSearchType] = useState("buy");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchType === "sell") {
      navigate("/sell");
    } else {
      navigate(`/${searchType}`);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mx-4 md:mx-0">
      <div className="flex flex-col gap-6">
        {/* Mobile: Stack vertically, Desktop: Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Looking for
            </label>
            <Select defaultValue="buy" onValueChange={(value) => setSearchType(value)}>
              <SelectTrigger className="w-full min-h-[56px] text-base font-medium">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Location
            </label>
            <Input
              type="text"
              placeholder="City, Neighborhood"
              className="w-full min-h-[56px] text-base"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Property Type
            </label>
            <Select defaultValue="any">
              <SelectTrigger className="w-full min-h-[56px] text-base font-medium">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white min-h-[56px] text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
          onClick={handleSearch}
        >
          Search Properties
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

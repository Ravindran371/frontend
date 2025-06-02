
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
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg mx-4 md:mx-0">
      <div className="flex flex-col gap-4">
        {/* Mobile: Stack vertically, Desktop: Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Looking for
            </label>
            <Select defaultValue="buy" onValueChange={(value) => setSearchType(value)}>
              <SelectTrigger className="w-full h-12 text-base">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <Input
              type="text"
              placeholder="City, Neighborhood"
              className="w-full h-12 text-base"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <Select defaultValue="any">
              <SelectTrigger className="w-full h-12 text-base">
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
          className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-medium rounded-md shadow-lg"
          onClick={handleSearch}
        >
          Search Properties
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

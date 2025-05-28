
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
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-2xl p-4 md:p-6 border border-white/20">
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 md:flex-none md:w-1/4">
          <label className="block text-sm font-medium text-white mb-1">
            Looking for
          </label>
          <Select defaultValue="buy" onValueChange={(value) => setSearchType(value)}>
            <SelectTrigger className="w-full bg-transparent border border-white/30 text-white">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="sell">Sell</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-1 md:flex-none md:w-1/4">
          <label className="block text-sm font-medium text-white mb-1">
            Property Type
          </label>
          <Select defaultValue="any">
            <SelectTrigger className="w-full bg-transparent border border-white/30 text-white">
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
        
        <div className="flex-1 md:flex-none md:w-1/4">
          <label className="block text-sm font-medium text-white mb-1">
            Location
          </label>
          <Input
            type="text"
            placeholder="City, Neighborhood"
            className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/70"
          />
        </div>
        
        <div className="md:w-auto">
          <Button 
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-lg"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

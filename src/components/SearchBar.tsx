
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

const SearchBar: React.FC = () => {
  const [searchType, setSearchType] = useState("buy");

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Looking for
          </label>
          <Select defaultValue="buy" onValueChange={(value) => setSearchType(value)}>
            <SelectTrigger className="w-full bg-transparent border border-gray-300">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="sell">Sell</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <Input
            type="text"
            placeholder="City, Neighborhood"
            className="w-full bg-transparent border border-gray-300"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <Select defaultValue="any">
            <SelectTrigger className="w-full bg-transparent border border-gray-300">
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
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget
          </label>
          {searchType === "sell" ? (
            <Input 
              type="text"
              placeholder="Enter your budget"
              className="w-full bg-transparent border border-gray-300"
            />
          ) : (
            <Select defaultValue="any">
              <SelectTrigger className="w-full bg-transparent border border-gray-300">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="100k-200k">$100k - $200k</SelectItem>
                <SelectItem value="200k-500k">$200k - $500k</SelectItem>
                <SelectItem value="500k+">$500k+</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-md">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

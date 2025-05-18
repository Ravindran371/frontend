
import React from "react";
import { Button } from "@/components/ui/button";

const SearchBar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Looking for
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Buy</option>
            <option>Rent</option>
            <option>Sell</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="City, Neighborhood"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Any</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget
          </label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Any</option>
            <option>$100k - $200k</option>
            <option>$200k - $500k</option>
            <option>$500k+</option>
          </select>
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

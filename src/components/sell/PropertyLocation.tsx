
import React from "react";
import { Input } from "@/components/ui/input";

const PropertyLocation: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <Input 
          type="text"
          placeholder="Area in Pondicherry"
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price (₹)
        </label>
        <Input 
          type="number"
          placeholder="Enter amount in rupees"
          className="w-full"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Size (sqft)
        </label>
        <Input 
          type="number"
          placeholder="Size in sqft"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PropertyLocation;

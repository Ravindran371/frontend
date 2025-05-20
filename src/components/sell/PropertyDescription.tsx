
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PropertyDescription: React.FC = () => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Historical Significance (if any)
        </label>
        <Input 
          type="text"
          placeholder="E.g. Former French consulate, colonial-era building, etc."
          className="w-full mb-4"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <Textarea 
          placeholder="Describe your property, highlighting any unique French or Tamil architectural features..."
          className="w-full h-32"
        />
      </div>
    </>
  );
};

export default PropertyDescription;

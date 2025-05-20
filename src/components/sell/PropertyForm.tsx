
import React from "react";
import { Button } from "@/components/ui/button";
import PropertyBasicDetails from "./PropertyBasicDetails";
import PropertyLocation from "./PropertyLocation";
import PropertyFeatures from "./PropertyFeatures";
import PropertyDescription from "./PropertyDescription";
import PropertyMedia from "./PropertyMedia";

const PropertyForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">List Your Property for Sale</h2>
      
      <div className="space-y-8">
        <PropertyBasicDetails />
        <PropertyLocation />
        <PropertyFeatures />
        <PropertyDescription />
        <PropertyMedia />
        
        <div className="flex justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg">
            Submit Property
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;

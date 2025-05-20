
import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PropertyBasicDetails: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Title
          </label>
          <Input 
            type="text"
            placeholder="E.g. Heritage Villa in French Quarter"
            className="w-full"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="heritage">Heritage Home</SelectItem>
              <SelectItem value="colonial">Colonial Building</SelectItem>
              <SelectItem value="villa">French Villa</SelectItem>
              <SelectItem value="house">Tamil House</SelectItem>
              <SelectItem value="apartment">Modern Apartment</SelectItem>
              <SelectItem value="plot">Land Plot</SelectItem>
              <SelectItem value="commercial">Commercial Property</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PropertyBasicDetails;

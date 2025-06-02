
import React from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "@/services/api";

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-600 mb-2">No properties found</h3>
        <p className="text-gray-500">Try adjusting your filters to see more results</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id || property._id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;

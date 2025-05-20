
import React from "react";
import { 
  getFeaturedProperties, 
  getSaleProperties, 
  getRentProperties 
} from "@/data/propertyData";
import PropertySectionHeader from "./property/PropertySectionHeader";
import PropertyGrid from "./property/PropertyGrid";
import PropertyPagination from "./property/PropertyPagination";

interface PropertySectionProps {
  title: string;
  subtitle: string;
  type: "featured" | "sale" | "rent";
}

const PropertySection: React.FC<PropertySectionProps> = ({ title, subtitle, type }) => {
  // Get properties based on the type
  const getProperties = () => {
    if (type === "featured") {
      return getFeaturedProperties();
    } else if (type === "sale") {
      return getSaleProperties();
    } else {
      return getRentProperties();
    }
  };

  const properties = getProperties();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <PropertySectionHeader title={title} subtitle={subtitle} />
        <PropertyGrid properties={properties} />
        <PropertyPagination />
      </div>
    </section>
  );
};

export default PropertySection;

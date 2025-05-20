
import React from "react";

interface PropertySectionHeaderProps {
  title: string;
  subtitle: string;
}

const PropertySectionHeader: React.FC<PropertySectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{subtitle}</p>
    </div>
  );
};

export default PropertySectionHeader;

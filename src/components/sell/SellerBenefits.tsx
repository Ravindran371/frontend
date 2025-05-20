
import React from "react";
import { MapPin, Building } from "lucide-react";

const SellerBenefits: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <MapPin className="h-6 w-6 text-orange-500 mr-2" />
          <h3 className="text-xl font-bold">Unique Market</h3>
        </div>
        <p className="text-gray-700">
          Pondicherry's property market is unique with high demand for heritage buildings and colonial style homes. Our experts understand the special value of Franco-Tamilian architecture.
        </p>
      </div>
      
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Building className="h-6 w-6 text-orange-500 mr-2" />
          <h3 className="text-xl font-bold">Heritage Value</h3>
        </div>
        <p className="text-gray-700">
          Properties in Pondicherry often come with historical significance that adds value. Our agents are trained to highlight the unique French and Tamil heritage of your property.
        </p>
      </div>
      
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold">Global Buyers</h3>
        </div>
        <p className="text-gray-700">
          Our international network connects you with buyers from France, across Europe, and worldwide who are specifically looking for property in this unique former French territory.
        </p>
      </div>
    </div>
  );
};

export default SellerBenefits;


import React from "react";
import Footer from "@/components/Footer";
import SellPageHeader from "@/components/sell/SellPageHeader";
import SellerBenefits from "@/components/sell/SellerBenefits";
import PropertyForm from "@/components/sell/PropertyForm";

const Sell: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SellPageHeader />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SellerBenefits />
          <PropertyForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sell;

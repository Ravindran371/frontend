
import React from "react";
import Footer from "@/components/Footer";
import SellPageHeader from "@/components/sell/SellPageHeader";
import SellerBenefits from "@/components/sell/SellerBenefits";
import PropertyForm from "@/components/sell/PropertyForm";
import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, Clock, TrendingUp, Building } from "lucide-react";

const Sell: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Rangan",
      role: "Sold heritage home in White Town",
      comment: "I received multiple offers within a week of listing my property. The team guided me through the entire process.",
      rating: 5
    },
    {
      name: "Jean-Pierre Dubois",
      role: "Sold colonial mansion in French Quarter",
      comment: "Excellent market knowledge and professional service. Got a price better than expected for my ancestral property.",
      rating: 5
    },
    {
      name: "Raj Sundaram",
      role: "Sold beachfront villa",
      comment: "The targeted marketing approach attracted buyers specifically looking for luxury beachfront properties.",
      rating: 4
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SellPageHeader />

      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto -mt-20 relative z-10 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Why Sell With Us?</h2>
            <p className="text-center text-gray-600 mb-10">We specialize in marketing Pondicherry's unique Franco-Indian properties</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <IndianRupee className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Pricing</h3>
                <p className="text-sm text-gray-600">
                  Get the best price for your heritage or colonial property through our specialized valuation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quick Sale</h3>
                <p className="text-sm text-gray-600">
                  Our network of qualified buyers looking specifically for Pondicherry properties ensures faster sales.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Market Expertise</h3>
                <p className="text-sm text-gray-600">
                  Our experts understand the unique value of Pondicherry's architectural heritage.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Building className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Heritage Specialists</h3>
                <p className="text-sm text-gray-600">
                  We specialize in marketing and selling Franco-Tamil heritage properties.
                </p>
              </div>
            </div>
          </div>

          <PropertyForm />
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Sellers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sell;

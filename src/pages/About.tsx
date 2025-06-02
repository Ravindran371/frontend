
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8 text-center">About Us</h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to Pondy, your trusted partner in real estate. We are dedicated to helping you find the perfect property that meets your needs and exceeds your expectations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional real estate services that help our clients make informed decisions about their property investments. We believe in transparency, integrity, and personalized service.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading real estate platform that connects buyers, sellers, and renters through innovative technology and unmatched customer service.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">Our team has extensive knowledge of the local real estate market and current trends.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personalized Service</h3>
                <p className="text-gray-600">We provide tailored solutions that match your specific needs and preferences.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology Driven</h3>
                <p className="text-gray-600">We leverage the latest technology to make your property search efficient and convenient.</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              At Pondy, we understand that buying, selling, or renting a property is one of life's most important decisions. That's why we're committed to providing you with the support, guidance, and expertise you need throughout your real estate journey.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

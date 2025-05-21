
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const About: React.FC = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Building bridges between cultures through real estate excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 reveal">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  Our mission is to cultivate the deep historical connection by offering unique real estate opportunities that blend cultures. We believe in creating spaces that honor the rich architectural heritage while meeting modern living needs.
                </p>
                <p className="text-gray-600">
                  We're dedicated to preserving the cultural legacy while fostering new connections through thoughtfully curated properties that tell stories of both worlds.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg image-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Modern property with heritage elements" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 reveal">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg image-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                  alt="Heritage architecture" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Heritage</h3>
                <p className="text-gray-600 mb-4">
                  The unique blend of Indian and French influence creates a special architectural and cultural landscape unlike anywhere else in the world. From vibrant markets to serene historic quarters, we celebrate this diversity in our property portfolio.
                </p>
                <p className="text-gray-600">
                  Our team includes experts in design, construction, and cultural preservation, ensuring that every property we represent maintains the authentic character that makes heritage properties so special.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-16 reveal">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Cultural Preservation</h4>
                  <p className="text-gray-600">We honor and protect the unique heritage in every property.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Community Connection</h4>
                  <p className="text-gray-600">Building relationships that span continents and cultures.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Authenticity</h4>
                  <p className="text-gray-600">True to the essence of cultures in everything we do.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Journey</h3>
              <p className="text-gray-600 mb-6">
                Whether you're looking to invest in a piece of history or seeking a new home that bridges cultures, we invite you to be part of our continuing story.
              </p>
              <button 
                onClick={handleContactClick}
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

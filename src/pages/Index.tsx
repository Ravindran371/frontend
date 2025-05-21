
import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import PropertySection from "@/components/PropertySection";
import CallToAction from "@/components/CallToAction";
import ServicesSection from "@/components/ServicesSection";
import AgentsSection from "@/components/AgentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Function to handle improved scroll animations
  useEffect(() => {
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    // Trigger once on initial load
    handleScrollAnimation();
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <div className="reveal section-transition">
        <PropertySection title="Featured Properties" subtitle="Handpicked heritage properties by our team." type="featured" />
      </div>
      
      <div className="reveal section-transition">
        <CallToAction />
      </div>
      
      <div className="reveal section-transition">
        <PropertySection title="For Sale" subtitle="Explore our exquisite properties for sale." type="sale" />
      </div>
      
      <div className="reveal section-transition">
        <PropertySection title="For Rent" subtitle="Experience living in iconic architecture." type="rent" />
      </div>
      
      <div className="reveal section-transition">
        <ServicesSection />
      </div>
      
      <div className="reveal section-transition">
        <AgentsSection />
      </div>
      
      <div className="reveal section-transition">
        <TestimonialsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;

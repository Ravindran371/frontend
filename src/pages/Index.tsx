
import React from "react";
import Hero from "@/components/Hero";
import PropertySection from "@/components/PropertySection";
import CallToAction from "@/components/CallToAction";
import ServicesSection from "@/components/ServicesSection";
import AgentsSection from "@/components/AgentsSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <PropertySection title="Properties" subtitle="Handpicked properties by our team." type="featured" />
      <CallToAction />
      <PropertySection title="For Sale" subtitle="Explore our properties for sale." type="sale" />
      <PropertySection title="For Rent" subtitle="Explore our properties for rent." type="rent" />
      <ServicesSection />
      <AgentsSection />
      <Footer />
    </div>
  );
};

export default Index;


import React from "react";
import PropertyCard from "./PropertyCard";
import { Pagination } from "@/components/ui/pagination";
import { PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface PropertySectionProps {
  title: string;
  subtitle: string;
  type: "featured" | "sale" | "rent";
}

const PropertySection: React.FC<PropertySectionProps> = ({ title, subtitle, type }) => {
  // Mock data based on the type
  const getProperties = () => {
    if (type === "featured") {
      return [
        {
          id: 1,
          title: "Modern Villa in Los Angeles",
          location: "1421 San Pedro St, Los Angeles",
          area: "Downtown",
          price: "$2,800,000",
          bedrooms: 4,
          bathrooms: 3,
          squareFootage: "2,300 sq ft",
          image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Jennifer Barton",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: true,
          type: "villa",
          listingType: "buy" as const,
          status: "available" as const,
        },
        {
          id: 2,
          title: "Luxury Family Home",
          location: "2478 Sunny Avenue, San Diego",
          area: "Sunny",
          price: "$1,850,000",
          bedrooms: 5,
          bathrooms: 4,
          squareFootage: "3,100 sq ft",
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Michael Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "house",
          listingType: "buy" as const,
          status: "available" as const,
        },
        {
          id: 3,
          title: "Waterfront Apartment with Pool",
          location: "3100 Ocean Drive, Miami Beach",
          area: "Ocean Drive",
          price: "$1,270,000",
          bedrooms: 3,
          bathrooms: 2,
          squareFootage: "1,800 sq ft",
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Sarah Miller",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "apartment",
          listingType: "buy" as const,
          status: "available" as const,
        },
      ];
    } else if (type === "sale") {
      return [
        {
          id: 4,
          title: "Grand Victorian Home",
          location: "1234 Heritage Lane, San Francisco",
          area: "Heritage",
          price: "$3,200,000",
          bedrooms: 6,
          bathrooms: 4,
          squareFootage: "3,800 sq ft",
          image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Rebecca Taylor",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: true,
          type: "house",
          listingType: "buy" as const,
          status: "available" as const,
        },
        {
          id: 5,
          title: "Downtown Penthouse",
          location: "567 Market Street, Seattle",
          area: "Downtown",
          price: "$1,950,000",
          bedrooms: 3,
          bathrooms: 3,
          squareFootage: "2,200 sq ft",
          image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Jason Hughes",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "apartment",
          listingType: "buy" as const,
          status: "available" as const,
        },
        {
          id: 6,
          title: "Cozy Suburban House",
          location: "8901 Maple Road, Portland",
          area: "Maple",
          price: "$785,000",
          bedrooms: 4,
          bathrooms: 2,
          squareFootage: "2,100 sq ft",
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Amanda Lee",
            image: "https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "house",
          listingType: "buy" as const,
          status: "available" as const,
        },
      ];
    } else {
      return [
        {
          id: 7,
          title: "Villa with Pool & Garden",
          location: "2211 Pacific Avenue, Venice Beach",
          area: "Venice Beach",
          price: "$5,800/month",
          bedrooms: 3,
          bathrooms: 2,
          squareFootage: "1,900 sq ft",
          image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Agent Name",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "villa",
          listingType: "rent" as const,
          status: "available" as const,
        },
        {
          id: 8,
          title: "Spacious Apartment",
          location: "1876 Central Park West, New York",
          area: "Central Park",
          price: "$3,600/month",
          bedrooms: 2,
          bathrooms: 2,
          squareFootage: "1,200 sq ft",
          image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Agent Name",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "apartment",
          listingType: "rent" as const,
          status: "available" as const,
        },
        {
          id: 9,
          title: "Luxury Beachfront",
          location: "5643 Ocean Drive, Malibu",
          area: "Ocean Drive",
          price: "$12,500/month",
          bedrooms: 4,
          bathrooms: 4,
          squareFootage: "3,500 sq ft",
          image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          images: ["https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Agent Name",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "house",
          listingType: "rent" as const,
          status: "available" as const,
        },
      ];
    }
  };

  const properties = getProperties();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>...</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;

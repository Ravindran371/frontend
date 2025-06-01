
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.com/api' 
  : 'http://localhost:3001/api';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  latitude?: number;
  longitude?: number;
  image: string;
  images?: File[] | string[];
  video?: File | string;
  agent: {
    name: string;
    image: string;
  };
  featured: boolean;
  type: string;
  listingType: "buy" | "rent" | "sell";
}

export const apiService = {
  // Get all properties
  async getProperties(): Promise<Property[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/properties`);
      if (!response.ok) throw new Error('Failed to fetch properties');
      return await response.json();
    } catch (error) {
      console.error('Error fetching properties:', error);
      // Return fallback data for now
      return [
        {
          id: 1,
          title: "Modern Villa in Los Angeles",
          location: "Los Angeles, CA",
          price: "₹2,800,000",
          bedrooms: 4,
          bathrooms: 3,
          area: "2,300 sq ft",
          latitude: 34.0522,
          longitude: -118.2437,
          image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          agent: {
            name: "Jennifer Barton",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: true,
          type: "villa",
          listingType: "buy" as const,
        },
        {
          id: 2,
          title: "Luxury Family Home",
          location: "San Diego, CA",
          price: "₹1,850,000",
          bedrooms: 5,
          bathrooms: 4,
          area: "3,100 sq ft",
          latitude: 32.7157,
          longitude: -117.1611,
          image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          agent: {
            name: "Michael Chen",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "house",
          listingType: "buy" as const,
        },
        {
          id: 3,
          title: "Waterfront Apartment with Pool",
          location: "Miami Beach, FL",
          price: "₹5,200/month",
          bedrooms: 3,
          bathrooms: 2,
          area: "1,800 sq ft",
          latitude: 25.7907,
          longitude: -80.1300,
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
          agent: {
            name: "Sarah Miller",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: false,
          type: "apartment",
          listingType: "rent" as const,
        }
      ];
    }
  },

  // Get property by ID
  async getPropertyById(id: number): Promise<Property | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/properties/${id}`);
      if (!response.ok) throw new Error('Failed to fetch property');
      return await response.json();
    } catch (error) {
      console.error('Error fetching property:', error);
      return null;
    }
  },

  // Create new property
  async createProperty(propertyData: FormData): Promise<Property> {
    try {
      const response = await fetch(`${API_BASE_URL}/properties`, {
        method: 'POST',
        body: propertyData,
      });
      if (!response.ok) throw new Error('Failed to create property');
      return await response.json();
    } catch (error) {
      console.error('Error creating property:', error);
      throw error;
    }
  },

  // Filter properties
  async filterProperties(filters: any): Promise<Property[]> {
    try {
      const params = new URLSearchParams(filters);
      const response = await fetch(`${API_BASE_URL}/properties/filter?${params}`);
      if (!response.ok) throw new Error('Failed to filter properties');
      return await response.json();
    } catch (error) {
      console.error('Error filtering properties:', error);
      return [];
    }
  }
};

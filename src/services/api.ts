
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.com/api' 
  : 'http://localhost:3001/api';

export interface Property {
  _id?: string;
  id?: number;
  title: string;
  location: string;
  area: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: string;
  image: string;
  images?: File[] | string[];
  video?: File | string;
  agent: {
    name: string;
    image: string;
  };
  featured?: boolean;
  type: string;
  propertyType?: string;
  listingType: "buy" | "rent" | "sell";
  status: "available" | "sold" | "rented";
  owner?: any;
  createdAt?: string;
}

export const apiService = {
  // Get all properties
  async getProperties(status: string = 'available'): Promise<Property[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/properties?status=${status}`);
      if (!response.ok) throw new Error('Failed to fetch properties');
      return await response.json();
    } catch (error) {
      console.error('Error fetching properties:', error);
      // Return fallback data for now
      return [
        {
          id: 1,
          location: "Los Angeles, CA",
          area: "Downtown",
          price: "₹2,800,000",
          bedrooms: 4,
          bathrooms: 3,
          squareFootage: "2,300 sq ft",
          images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"],
          agent: {
            name: "Jennifer Barton",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
          },
          featured: true,
          type: "villa",
          listingType: "buy" as const,
          status: "available" as const,
        }
      ];
    }
  },

  // Get property by ID
  async getPropertyById(id: string): Promise<Property | null> {
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
  async createProperty(propertyData: FormData, token: string): Promise<Property> {
    try {
      const response = await fetch(`${API_BASE_URL}/properties`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
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
  },

  // Update property status
  async updatePropertyStatus(id: string, status: string, token: string): Promise<Property> {
    try {
      const response = await fetch(`${API_BASE_URL}/properties/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update property status');
      return await response.json();
    } catch (error) {
      console.error('Error updating property status:', error);
      throw error;
    }
  },

  // Delete property
  async deleteProperty(id: string, token: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/properties/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete property');
    } catch (error) {
      console.error('Error deleting property:', error);
      throw error;
    }
  }
};

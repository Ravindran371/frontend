
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  agent: {
    name: string;
    image: string;
  };
  featured: boolean;
}

export const getFeaturedProperties = (): Property[] => [
  {
    id: 1,
    title: "Modern Villa in Los Angeles",
    location: "1421 San Pedro St, Los Angeles",
    price: "₹2,80,00,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,300 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "Jennifer Barton",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Family Home",
    location: "2478 Sunny Avenue, San Diego",
    price: "₹1,85,00,000",
    bedrooms: 5,
    bathrooms: 4,
    area: "3,100 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    featured: false,
  },
  {
    id: 3,
    title: "Waterfront Apartment with Pool",
    location: "3100 Ocean Drive, Miami Beach",
    price: "₹1,27,00,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "Sarah Miller",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    featured: false,
  },
];

export const getSaleProperties = (): Property[] => [
  {
    id: 4,
    title: "Grand Victorian Home",
    location: "1234 Heritage Lane, San Francisco",
    price: "₹3,20,00,000",
    bedrooms: 6,
    bathrooms: 4,
    area: "3,800 sq ft",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "Rebecca Taylor",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    featured: true,
  },
  {
    id: 5,
    title: "Downtown Penthouse",
    location: "567 Market Street, Seattle",
    price: "₹1,95,00,000",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,200 sq ft",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "Jason Hughes",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    featured: false,
  },
  {
    id: 6,
    title: "Cozy Suburban House",
    location: "8901 Maple Road, Portland",
    price: "₹78,50,000",
    bedrooms: 4,
    bathrooms: 2,
    area: "2,100 sq ft",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "Amanda Lee",
      image: "https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    featured: false,
  },
];

export const getRentProperties = (): Property[] => [
  {
    id: 7,
    title: "Villa with Pool & Garden",
    location: "2211 Pacific Avenue, Venice Beach",
    price: "₹5,80,000/month",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,900 sq ft",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "",
      image: "",
    },
    featured: false,
  },
  {
    id: 8,
    title: "Spacious Apartment",
    location: "1876 Central Park West, New York",
    price: "₹3,60,000/month",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "",
      image: "",
    },
    featured: false,
  },
  {
    id: 9,
    title: "Luxury Beachfront",
    location: "5643 Ocean Drive, Malibu",
    price: "₹12,50,000/month",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,500 sq ft",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    agent: {
      name: "",
      image: "",
    },
    featured: false,
  },
];

export type { Property };

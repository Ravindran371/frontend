
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AgentsSection: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: "Michael Foster",
      position: "Senior Property Agent",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      phone: "+1 (555) 234-5678",
      email: "michael@example.com",
    },
    {
      id: 2,
      name: "Lindsay Walton",
      position: "Property Agent",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      phone: "+1 (555) 890-1234",
      email: "lindsay@example.com",
    },
    {
      id: 3,
      name: "Dries Vincent",
      position: "Senior Property Agent",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      phone: "+1 (555) 456-7890",
      email: "dries@example.com",
    },
    {
      id: 4,
      name: "Leslie Alexander",
      position: "Property Agent",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      phone: "+1 (555) 567-8901",
      email: "leslie@example.com",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Agents</h2>
          <p className="text-gray-600 mt-2">Our professional agents are ready to help you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex space-x-2 mb-2">
                    <a href="#" className="bg-white rounded-full p-2 hover:bg-blue-500 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-white rounded-full p-2 hover:bg-blue-500 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-white rounded-full p-2 hover:bg-blue-500 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{agent.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{agent.position}</p>
                <p className="text-gray-700 text-sm mb-1">{agent.phone}</p>
                <p className="text-blue-600 text-sm">{agent.email}</p>
                <button className="mt-3 text-orange-500 font-medium hover:text-orange-700 transition-colors">
                  View Profile
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;

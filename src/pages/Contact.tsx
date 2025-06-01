
import React from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <Navigation />
        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                We'd love to hear from you. Reach out to us for any inquiries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600">123 Avenue des Champs-Élysées</p>
                <p className="text-gray-600">Pondicherry, 605001</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+33 1 23 45 67 89</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">info@franceindia-realty.com</p>
                <p className="text-gray-600">support@franceindia-realty.com</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input 
                        type="text"
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input 
                      type="text"
                      placeholder="How can we help you?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Write your message here..."
                      className="w-full h-32"
                    />
                  </div>
                  
                  <div>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-teal-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Working Hours</h4>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                  <h4 className="font-bold text-gray-800 mb-4">Need Urgent Assistance?</h4>
                  <p className="text-gray-600 mb-4">
                    Our dedicated customer service team is available for urgent inquiries. Feel free to call our hotline for immediate assistance.
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-500 mr-2" />
                    <span className="font-semibold text-teal-600">+91 99999 88888</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

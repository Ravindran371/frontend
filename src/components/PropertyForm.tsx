
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

interface PropertyFormProps {
  onSubmit: (property: any) => void;
  onClose: () => void;
  type: "sell" | "rent-your-property";
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onSubmit, onClose, type }) => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    propertyType: "",
    image: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProperty = {
      id: Date.now(),
      title: formData.title,
      location: formData.location,
      price: type === "rent-your-property" ? `₹${formData.price}/month` : `₹${formData.price}`,
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      area: formData.area,
      image: formData.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      agent: {
        name: "Property Owner",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      },
      featured: false,
      type: formData.propertyType,
      listingType: type === "rent-your-property" ? "rent" : "buy"
    };

    onSubmit(newProperty);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {type === "sell" ? "Sell Your Property" : "Rent Your Property"}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Property Title <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter property title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Enter location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Property Type <span className="text-red-500">*</span>
              </label>
              <Select required onValueChange={(value) => handleChange("propertyType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Price <span className="text-red-500">*</span>
              </label>
              <Input
                required
                type="number"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder={type === "rent-your-property" ? "Monthly rent" : "Selling price"}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bedrooms <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => handleChange("bedrooms", e.target.value)}
                  placeholder="Number of bedrooms"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Bathrooms <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  type="number"
                  value={formData.bathrooms}
                  onChange={(e) => handleChange("bathrooms", e.target.value)}
                  placeholder="Number of bathrooms"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Area <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.area}
                onChange={(e) => handleChange("area", e.target.value)}
                placeholder="e.g., 1200 sq ft"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Image URL
              </label>
              <Input
                value={formData.image}
                onChange={(e) => handleChange("image", e.target.value)}
                placeholder="Property image URL (optional)"
              />
            </div>

            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
              Submit Property
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyForm;

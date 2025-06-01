
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
import { X, Upload, Image as ImageIcon, Video } from "lucide-react";

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
    latitude: "",
    longitude: ""
  });

  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors: string[] = [];
    
    // Validate required fields
    if (!formData.title) validationErrors.push("Title is required");
    if (!formData.location) validationErrors.push("Location is required");
    if (!formData.price) validationErrors.push("Price is required");
    if (!formData.bedrooms) validationErrors.push("Bedrooms is required");
    if (!formData.bathrooms) validationErrors.push("Bathrooms is required");
    if (!formData.area) validationErrors.push("Area is required");
    if (!formData.propertyType) validationErrors.push("Property type is required");
    if (!formData.latitude) validationErrors.push("Latitude is required");
    if (!formData.longitude) validationErrors.push("Longitude is required");
    
    // Validate file uploads
    if (images.length < 5) validationErrors.push("At least 5 images are required");
    if (images.length > 7) validationErrors.push("Maximum 7 images allowed");
    if (!video) validationErrors.push("Video is required");
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Create property with file data
    const newProperty = {
      id: Date.now(),
      title: formData.title,
      location: formData.location,
      price: type === "rent-your-property" ? `₹${formData.price}/month` : `₹${formData.price}`,
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      area: formData.area,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      images: images,
      video: video,
      image: URL.createObjectURL(images[0]), // Use first image as main image
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
    setErrors([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(files);
    setErrors([]);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setVideo(file);
    setErrors([]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {type === "sell" ? "Sell Your Property" : "Rent Your Property"}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <ul className="text-red-600 text-sm">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Latitude <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  type="number"
                  step="any"
                  value={formData.latitude}
                  onChange={(e) => handleChange("latitude", e.target.value)}
                  placeholder="e.g., 11.9416"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Longitude <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  type="number"
                  step="any"
                  value={formData.longitude}
                  onChange={(e) => handleChange("longitude", e.target.value)}
                  placeholder="e.g., 79.8083"
                />
              </div>
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

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bedrooms <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => handleChange("bedrooms", e.target.value)}
                  placeholder="Number"
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
                  placeholder="Number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Area <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  value={formData.area}
                  onChange={(e) => handleChange("area", e.target.value)}
                  placeholder="1200 sq ft"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Property Images <span className="text-red-500">*</span>
                <span className="text-gray-500 text-xs ml-2">(5-7 images required)</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="images"
                />
                <label htmlFor="images" className="cursor-pointer">
                  <Button type="button" variant="outline" className="mb-2">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Images
                  </Button>
                </label>
                <p className="text-sm text-gray-600">
                  {images.length > 0 ? `${images.length} image(s) selected` : 'Select 5-7 images'}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Property Video <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                  id="video"
                />
                <label htmlFor="video" className="cursor-pointer">
                  <Button type="button" variant="outline" className="mb-2">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Video
                  </Button>
                </label>
                <p className="text-sm text-gray-600">
                  {video ? video.name : 'Select a video file'}
                </p>
              </div>
            </div>

            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
              Submit Property
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyForm;

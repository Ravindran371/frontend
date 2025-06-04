
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import PropertyFormFields from "./PropertyFormFields";
import FileUploadSection from "./FileUploadSection";
import { usePropertyFormValidation } from "./PropertyFormValidation";

interface PropertyFormProps {
  onSubmit: (property: any) => void;
  onClose: () => void;
  type: "sell" | "rent-your-property";
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onSubmit, onClose, type }) => {
  const { token } = useAuth();
  const { t } = useLanguage();
  const { validateForm } = usePropertyFormValidation();
  
  const [formData, setFormData] = useState({
    propertyType: "",
    address: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    squareFootage: "",
    description: "",
    keyFeatures: ""
  });

  const [images, setImages] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Handle Esc key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData, images, video);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    
    try {
      // Create a mock property object for immediate display
      const mockProperty = {
        id: Date.now(),
        title: `${formData.propertyType} in ${formData.location}`,
        location: formData.location,
        area: formData.address,
        price: `₹${formData.price}`,
        bedrooms: parseInt(formData.bedrooms) || 0,
        bathrooms: parseInt(formData.bathrooms) || 0,
        squareFootage: formData.squareFootage,
        description: formData.description,
        keyFeatures: formData.keyFeatures ? formData.keyFeatures.split(',').map(f => f.trim()) : [],
        image: images.length > 0 ? URL.createObjectURL(images[0]) : "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        images: images.map(img => URL.createObjectURL(img)),
        video: video ? URL.createObjectURL(video) : undefined,
        agent: {
          name: "Property Owner",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        },
        featured: false,
        type: formData.propertyType,
        listingType: type === "rent-your-property" ? "rent" : "buy" as const,
        status: "available" as const,
        createdAt: new Date().toISOString()
      };

      // Add to the property list immediately
      onSubmit(mockProperty);
      
      toast({
        title: t('message.propertySubmitted'),
        description: "Your property has been added successfully!",
        className: "bg-green-500 text-white border-green-500",
      });
      
      onClose();

      // In a real app, you would also send to backend here
      console.log('Property submitted:', mockProperty);
      
    } catch (error) {
      console.error('Error submitting property:', error);
      setErrors([t('validation.networkError')]);
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newImages = [...images, ...files].slice(0, 7); // Limit to 7 images
      setImages(newImages);
      setErrors([]);
      console.log('Images uploaded:', newImages.length);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setVideo(file);
      setErrors([]);
      console.log('Video uploaded:', file.name);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const removeVideo = () => {
    setVideo(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg md:text-xl">
            {type === "sell" ? t('form.sellProperty') : t('form.rentProperty')}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="min-h-[44px] min-w-[44px]">
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
            <PropertyFormFields 
              formData={formData}
              onFieldChange={handleFieldChange}
              type={type}
            />
            
            <FileUploadSection
              images={images}
              video={video}
              onImageUpload={handleImageUpload}
              onVideoUpload={handleVideoUpload}
              onRemoveImage={removeImage}
              onRemoveVideo={removeVideo}
            />

            <Button 
              type="submit" 
              className="w-full bg-teal-500 hover:bg-teal-600 min-h-[56px] text-lg font-medium"
              disabled={loading}
            >
              {loading ? t('form.submitting') : t('form.submitProperty')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyForm;

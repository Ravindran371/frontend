
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
    squareFootage: ""
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
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('location', formData.location);
      formDataToSend.append('area', formData.address);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('squareFootage', formData.squareFootage);
      formDataToSend.append('propertyType', formData.propertyType);
      formDataToSend.append('listingType', type === "rent-your-property" ? "rent" : "buy");
      
      // Only add bedrooms and bathrooms if not a plot
      if (formData.propertyType !== "plot") {
        formDataToSend.append('bedrooms', formData.bedrooms);
        formDataToSend.append('bathrooms', formData.bathrooms);
      } else {
        formDataToSend.append('bedrooms', '0');
        formDataToSend.append('bathrooms', '0');
      }
      
      // Add images
      images.forEach((image) => {
        formDataToSend.append('images', image);
      });
      
      // Add video
      if (video) {
        formDataToSend.append('video', video);
      }

      const response = await fetch('http://localhost:3001/api/properties', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        const newProperty = await response.json();
        onSubmit(newProperty);
        toast({
          title: t('message.propertySubmitted'),
          className: "bg-green-500 text-white border-green-500",
        });
        onClose();
      } else {
        const errorData = await response.json();
        setErrors([errorData.error || t('validation.createFailed')]);
      }
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
      setImages(prev => [...prev, ...files].slice(0, 7)); // Limit to 7 images
      setErrors([]);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setVideo(file);
      setErrors([]);
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

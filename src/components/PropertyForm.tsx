
import React, { useState, useEffect } from "react";
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
import { X, Upload, Image as ImageIcon, Video, Trash2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

interface PropertyFormProps {
  onSubmit: (property: any) => void;
  onClose: () => void;
  type: "sell" | "rent-your-property";
}

const PropertyForm: React.FC<PropertyFormProps> = ({ onSubmit, onClose, type }) => {
  const { token } = useAuth();
  const { t } = useLanguage();
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
    
    const validationErrors: string[] = [];
    
    // Validate required fields
    if (!formData.propertyType) validationErrors.push(t('validation.propertyTypeRequired'));
    if (!formData.address) validationErrors.push(t('validation.addressRequired'));
    if (!formData.location) validationErrors.push(t('validation.locationRequired'));
    if (!formData.price) validationErrors.push(t('validation.priceRequired'));
    if (!formData.squareFootage) validationErrors.push(t('validation.squareFootageRequired'));
    
    // Only validate bedrooms and bathrooms if not a plot
    if (formData.propertyType !== "plot") {
      if (!formData.bedrooms) validationErrors.push(t('validation.bedroomsRequired'));
      if (!formData.bathrooms) validationErrors.push(t('validation.bathroomsRequired'));
    }
    
    // Validate file uploads
    if (images.length < 5) validationErrors.push(t('validation.imagesRequired'));
    if (images.length > 7) validationErrors.push(t('validation.maxImages'));
    if (!video) validationErrors.push(t('validation.videoRequired'));
    
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

  const handleChange = (field: string, value: string) => {
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

  const isPlot = formData.propertyType === "plot";

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
            {/* Property Type - First */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.propertyType')} <span className="text-red-500">*</span>
              </label>
              <Select required onValueChange={(value) => handleChange("propertyType", value)} value={formData.propertyType}>
                <SelectTrigger className="min-h-[48px] text-base">
                  <SelectValue placeholder={t('form.selectPropertyType')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">{t('property.house')}</SelectItem>
                  <SelectItem value="apartment">{t('property.apartment')}</SelectItem>
                  <SelectItem value="villa">{t('property.villa')}</SelectItem>
                  <SelectItem value="plot">{t('property.plot')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Address - Second */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.address')} <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder={t('form.enterAddress')}
                className="min-h-[48px] text-base"
              />
            </div>

            {/* Location - Third */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.location')} <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder={t('form.enterLocation')}
                className="min-h-[48px] text-base"
              />
            </div>

            {/* Bedrooms and Bathrooms - Fourth and Fifth (only if not plot) */}
            {!isPlot && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('form.bedrooms')} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.bedrooms}
                    onChange={(e) => handleChange("bedrooms", e.target.value)}
                    placeholder={t('form.number')}
                    className="min-h-[48px] text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('form.bathrooms')} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    value={formData.bathrooms}
                    onChange={(e) => handleChange("bathrooms", e.target.value)}
                    placeholder={t('form.number')}
                    className="min-h-[48px] text-base"
                  />
                </div>
              </div>
            )}

            {/* Price - Sixth */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.price')} <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder={type === "rent-your-property" ? t('form.monthlyRent') : t('form.sellingPrice')}
                className="min-h-[48px] text-base"
              />
            </div>

            {/* Square Footage */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('form.squareFootage')} <span className="text-red-500">*</span>
              </label>
              <Input
                required
                value={formData.squareFootage}
                onChange={(e) => handleChange("squareFootage", e.target.value)}
                placeholder="1200 sq ft"
                className="min-h-[48px] text-base"
              />
            </div>

            {/* Image Upload - Seventh */}
            <div>
              <label className="block text-sm font-medium mb-3">
                {t('form.propertyImages')} <span className="text-red-500">*</span>
                <span className="text-gray-500 text-xs ml-2">{t('form.imagesRequired')}</span>
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
                  <Button type="button" variant="outline" className="mb-3 min-h-[48px] text-base">
                    <Upload className="h-4 w-4 mr-2" />
                    {t('form.uploadImages')}
                  </Button>
                </label>
                <p className="text-sm text-gray-600">
                  {images.length > 0 ? `${images.length} image(s) selected` : t('form.selectImages')}
                </p>
                {images.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {images.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                        <span className="text-xs text-gray-600 truncate">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeImage(index)}
                          className="h-6 w-6 p-0"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Video Upload - Eighth */}
            <div>
              <label className="block text-sm font-medium mb-3">
                {t('form.propertyVideo')} <span className="text-red-500">*</span>
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
                  <Button type="button" variant="outline" className="mb-3 min-h-[48px] text-base">
                    <Upload className="h-4 w-4 mr-2" />
                    {t('form.uploadVideo')}
                  </Button>
                </label>
                <p className="text-sm text-gray-600">
                  {video ? video.name : t('form.selectVideo')}
                </p>
                {video && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-xs text-gray-600 truncate">{video.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={removeVideo}
                        className="h-6 w-6 p-0"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

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

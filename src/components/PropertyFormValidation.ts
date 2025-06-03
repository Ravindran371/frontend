
import { useLanguage } from "@/contexts/LanguageContext";

export const usePropertyFormValidation = () => {
  const { t } = useLanguage();

  const validateForm = (formData: any, images: File[], video: File | null) => {
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
    
    return validationErrors;
  };

  return { validateForm };
};


import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.buy': { en: 'Buy', fr: 'Acheter' },
  'nav.rent': { en: 'Rent', fr: 'Louer' },
  'nav.sell': { en: 'Sell', fr: 'Vendre' },
  'nav.about': { en: 'About', fr: 'À propos' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },
  'nav.signin': { en: 'Sign In', fr: 'Se connecter' },
  
  // Filter Section
  'filter.lookingFor': { en: 'Looking For', fr: 'Recherche' },
  'filter.select': { en: 'Select', fr: 'Sélectionner' },
  'filter.rent': { en: 'Rent', fr: 'Louer' },
  'filter.buy': { en: 'Buy', fr: 'Acheter' },
  'filter.sell': { en: 'Sell', fr: 'Vendre' },
  'filter.rentYourProperty': { en: 'Rent Your Property', fr: 'Louer votre propriété' },
  'filter.propertyType': { en: 'Property Type', fr: 'Type de propriété' },
  'filter.anyType': { en: 'Any type', fr: 'Tout type' },
  'filter.location': { en: 'Location', fr: 'Emplacement' },
  'filter.where': { en: 'Where?', fr: 'Où ?' },
  'filter.budget': { en: 'Budget', fr: 'Budget' },
  'filter.maxPrice': { en: 'Max price', fr: 'Prix max' },
  'filter.clear': { en: 'Clear', fr: 'Effacer' },
  
  // Property Types
  'property.house': { en: 'House', fr: 'Maison' },
  'property.apartment': { en: 'Apartment', fr: 'Appartement' },
  'property.villa': { en: 'Villa', fr: 'Villa' },
  'property.plot': { en: 'Plot', fr: 'Terrain' },
  
  // Property Form
  'form.sellProperty': { en: 'Sell Property', fr: 'Vendre une propriété' },
  'form.rentProperty': { en: 'Rent Property', fr: 'Louer une propriété' },
  'form.propertyType': { en: 'Property Type', fr: 'Type de propriété' },
  'form.selectPropertyType': { en: 'Select property type', fr: 'Sélectionner le type de propriété' },
  'form.address': { en: 'Address', fr: 'Adresse' },
  'form.enterAddress': { en: 'Enter full address', fr: 'Entrer l\'adresse complète' },
  'form.location': { en: 'Location', fr: 'Emplacement' },
  'form.enterLocation': { en: 'Enter location', fr: 'Entrer l\'emplacement' },
  'form.bedrooms': { en: 'Bedrooms', fr: 'Chambres' },
  'form.bathrooms': { en: 'Bathrooms', fr: 'Salles de bain' },
  'form.price': { en: 'Price', fr: 'Prix' },
  'form.monthlyRent': { en: 'Monthly rent', fr: 'Loyer mensuel' },
  'form.sellingPrice': { en: 'Selling price', fr: 'Prix de vente' },
  'form.squareFootage': { en: 'Square Footage', fr: 'Superficie' },
  'form.propertyImages': { en: 'Property Images', fr: 'Images de la propriété' },
  'form.imagesRequired': { en: '(5-7 images required)', fr: '(5-7 images requises)' },
  'form.uploadImages': { en: 'Upload Images', fr: 'Télécharger des images' },
  'form.selectImages': { en: 'Select 5-7 images', fr: 'Sélectionner 5-7 images' },
  'form.propertyVideo': { en: 'Property Video', fr: 'Vidéo de la propriété' },
  'form.uploadVideo': { en: 'Upload Video', fr: 'Télécharger une vidéo' },
  'form.selectVideo': { en: 'Select a video file', fr: 'Sélectionner un fichier vidéo' },
  'form.submitProperty': { en: 'Submit Property', fr: 'Soumettre la propriété' },
  'form.submitting': { en: 'Submitting...', fr: 'Soumission...' },
  'form.required': { en: 'required', fr: 'requis' },
  'form.number': { en: 'Number', fr: 'Nombre' },
  
  // Search
  'search.lookingFor': { en: 'Looking for', fr: 'Recherche' },
  'search.selectType': { en: 'Select type', fr: 'Sélectionner le type' },
  'search.cityNeighborhood': { en: 'City, Neighborhood', fr: 'Ville, Quartier' },
  'search.any': { en: 'Any', fr: 'Tout' },
  'search.searchProperties': { en: 'Search Properties', fr: 'Rechercher des propriétés' },
  
  // Messages
  'message.propertySubmitted': { en: 'Your property has been submitted successfully.', fr: 'Votre propriété a été soumise avec succès.' },
  'message.signInRequired': { en: 'Please sign in to add properties', fr: 'Veuillez vous connecter pour ajouter des propriétés' },
  'message.noProperties': { en: 'No properties found', fr: 'Aucune propriété trouvée' },
  'message.adjustFilters': { en: 'Try adjusting your filters to see more results', fr: 'Essayez d\'ajuster vos filtres pour voir plus de résultats' },
  'message.loadingProperties': { en: 'Loading properties...', fr: 'Chargement des propriétés...' },
  
  // Validation
  'validation.locationRequired': { en: 'Location is required', fr: 'L\'emplacement est requis' },
  'validation.addressRequired': { en: 'Address is required', fr: 'L\'adresse est requise' },
  'validation.priceRequired': { en: 'Price is required', fr: 'Le prix est requis' },
  'validation.propertyTypeRequired': { en: 'Property type is required', fr: 'Le type de propriété est requis' },
  'validation.bedroomsRequired': { en: 'Bedrooms is required', fr: 'Le nombre de chambres est requis' },
  'validation.bathroomsRequired': { en: 'Bathrooms is required', fr: 'Le nombre de salles de bain est requis' },
  'validation.squareFootageRequired': { en: 'Square footage is required', fr: 'La superficie est requise' },
  'validation.imagesRequired': { en: 'At least 5 images are required', fr: 'Au moins 5 images sont requises' },
  'validation.maxImages': { en: 'Maximum 7 images allowed', fr: 'Maximum 7 images autorisées' },
  'validation.videoRequired': { en: 'Video is required', fr: 'Une vidéo est requise' },
  'validation.networkError': { en: 'Network error. Please try again.', fr: 'Erreur réseau. Veuillez réessayer.' },
  'validation.createFailed': { en: 'Failed to create property', fr: 'Échec de la création de propriété' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

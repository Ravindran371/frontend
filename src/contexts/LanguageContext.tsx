
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
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.properties': { en: 'Properties', fr: 'Propriétés' },
  'nav.goBack': { en: 'Go Back', fr: 'Retour' },
  
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
  'property.in': { en: 'in', fr: 'à' },
  'property.for': { en: 'For', fr: 'Pour' },
  'property.posted': { en: 'Posted', fr: 'Publié' },
  'property.recently': { en: 'recently', fr: 'récemment' },
  'property.liked': { en: 'Liked', fr: 'Aimé' },
  'property.like': { en: 'Like', fr: 'Aimer' },
  'property.share': { en: 'Share', fr: 'Partager' },
  'property.details': { en: 'Property Details', fr: 'Détails de la propriété' },
  'property.area': { en: 'Area', fr: 'Superficie' },
  'property.description': { en: 'Description', fr: 'Description' },
  'property.keyFeatures': { en: 'Key Features', fr: 'Caractéristiques principales' },
  'property.video': { en: 'Property Video', fr: 'Vidéo de la propriété' },
  'property.owner': { en: 'Property Owner', fr: 'Propriétaire' },
  'property.listed': { en: 'Listed', fr: 'Listé' },
  'property.sendMessage': { en: 'Send Message', fr: 'Envoyer un message' },
  'property.sendInquiry': { en: 'Send Inquiry', fr: 'Envoyer une demande' },
  'property.yourName': { en: 'Your Name', fr: 'Votre nom' },
  'property.yourEmail': { en: 'Your Email', fr: 'Votre email' },
  'property.yourPhone': { en: 'Your Phone', fr: 'Votre téléphone' },
  'property.interestedMessage': { en: "I'm interested in this property...", fr: "Je suis intéressé par cette propriété..." },
  'property.information': { en: 'Property Information', fr: 'Informations sur la propriété' },
  'property.listingType': { en: 'Listing Type', fr: 'Type d\'annonce' },
  'property.id': { en: 'Property ID', fr: 'ID de propriété' },
  'property.status': { en: 'Status', fr: 'Statut' },
  'property.available': { en: 'Available', fr: 'Disponible' },
  'property.checkOut': { en: 'Check out this', fr: 'Découvrez cette' },
  'property.defaultDescription': { en: 'This stunning', fr: 'Cette magnifique' },
  'property.offersModern': { en: 'offers modern living with excellent amenities. Located in the heart of', fr: 'offre un style de vie moderne avec d\'excellents équipements. Situé au cœur de' },
  'property.locatedIn': { en: 'it provides easy access to local attractions, shopping centers, schools, and transportation hubs.', fr: 'il offre un accès facile aux attractions locales, centres commerciaux, écoles et centres de transport.' },
  'property.providesAccess': { en: 'it provides easy access to local attractions', fr: 'il offre un accès facile aux attractions locales' },
  'property.perfectFor': { en: 'Perfect for families or professionals looking for quality accommodation in a prime location.', fr: 'Parfait pour les familles ou les professionnels recherchant un logement de qualité dans un emplacement de choix.' },
  
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
  'form.description': { en: 'Description', fr: 'Description' },
  'form.keyFeatures': { en: 'Key Features', fr: 'Caractéristiques principales' },
  'form.enterDescription': { en: 'Enter property description', fr: 'Entrer la description de la propriété' },
  'form.enterKeyFeatures': { en: 'Enter key features (comma separated)', fr: 'Entrer les caractéristiques principales (séparées par des virgules)' },
  
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
  'message.loadingPropertyDetails': { en: 'Loading property details...', fr: 'Chargement des détails de la propriété...' },
  'message.propertyNotFound': { en: 'Property not found', fr: 'Propriété non trouvée' },
  'message.shareSuccess': { en: 'Property shared successfully', fr: 'Propriété partagée avec succès' },
  'message.linkCopied': { en: 'Link copied to clipboard', fr: 'Lien copié dans le presse-papiers' },
  
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
  'validation.createFailed': { en: 'Failed to create property', fr: 'Échec de la création de propriété' },
  'validation.descriptionRequired': { en: 'Description is required', fr: 'La description est requise' }
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

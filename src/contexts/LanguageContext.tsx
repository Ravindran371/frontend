
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.sell': 'Sell',
    'nav.signIn': 'Sign In',
    'nav.language': 'Language',
    'nav.goBack': 'Go Back',

    // Search
    'search.placeholder': 'Search properties...',
    'search.searchButton': 'Search',

    // Filter
    'filter.buy': 'Buy',
    'filter.rent': 'Rent',
    'filter.sell': 'Sell',
    'filter.propertyType': 'Property Type',
    'filter.location': 'Location',
    'filter.priceRange': 'Price Range',
    'filter.bedrooms': 'Bedrooms',
    'filter.apply': 'Apply Filters',
    'filter.clear': 'Clear Filters',

    // Property
    'property.in': 'in',
    'property.for': 'For',
    'property.bedrooms': 'Bedrooms',
    'property.bathrooms': 'Bathrooms',
    'property.area': 'Sq Ft',
    'property.viewDetails': 'View Details',
    'property.details': 'Property Details',
    'property.description': 'Description',
    'property.keyFeatures': 'Key Features',
    'property.owner': 'Property Owner',
    'property.sendMessage': 'Send Message',
    'property.sendInquiry': 'Send Inquiry',
    'property.yourName': 'Your Name',
    'property.yourEmail': 'Your Email',
    'property.yourPhone': 'Your Phone',
    'property.interestedMessage': 'I am interested in this property...',
    'property.information': 'Property Information',
    'property.listingType': 'Listing Type',
    'property.id': 'Property ID',
    'property.status': 'Status',
    'property.available': 'Available',
    'property.posted': 'Posted',
    'property.recently': 'Recently',
    'property.listed': 'Listed',
    'property.checkOut': 'Check out this',
    'property.like': 'Like',
    'property.liked': 'Liked',
    'property.share': 'Share',
    'property.video': 'Property Video',
    'property.location': 'Location',
    'property.defaultDescription': 'This beautiful',
    'property.offersModern': 'offers modern living with excellent amenities.',
    'property.locatedIn': 'Located in',
    'property.providesAccess': 'it provides easy access to local facilities.',
    'property.perfectFor': 'Perfect for families and professionals alike.',
    'property.propertyNotFound': 'Property not found',

    // Form
    'form.sellProperty': 'Sell Your Property',
    'form.rentProperty': 'Rent Your Property',
    'form.propertyType': 'Property Type',
    'form.address': 'Full Address',
    'form.location': 'City/Location',
    'form.bedrooms': 'Bedrooms',
    'form.bathrooms': 'Bathrooms',
    'form.price': 'Price (₹)',
    'form.squareFootage': 'Square Footage',
    'form.description': 'Property Description',
    'form.keyFeatures': 'Key Features (comma separated)',
    'form.images': 'Property Images',
    'form.video': 'Property Video (Optional)',
    'form.submitProperty': 'Submit Property',
    'form.submitting': 'Submitting...',
    'form.uploadImages': 'Upload Images',
    'form.uploadVideo': 'Upload Video',
    'form.removeVideo': 'Remove Video',

    // Profile
    'profile.userProfile': 'User Profile',
    'profile.name': 'Name',
    'profile.email': 'Email',
    'profile.phone': 'Phone',
    'profile.myProperties': 'My Properties',
    'profile.signOut': 'Sign Out',
    'profile.close': 'Close',
    'profile.noProperties': 'You haven\'t listed any properties yet.',
    'profile.delete': 'Delete',

    // Messages
    'message.propertySubmitted': 'Property submitted successfully!',
    'message.propertyDeleted': 'Property deleted successfully!',
    'message.shareSuccess': 'Shared successfully!',
    'message.linkCopied': 'Link copied to clipboard!',
    'message.loadingPropertyDetails': 'Loading property details...',

    // Validation
    'validation.propertyTypeRequired': 'Property type is required',
    'validation.addressRequired': 'Address is required',
    'validation.locationRequired': 'Location is required',
    'validation.priceRequired': 'Price is required',
    'validation.squareFootageRequired': 'Square footage is required',
    'validation.bedroomsRequired': 'Number of bedrooms is required',
    'validation.bathroomsRequired': 'Number of bathrooms is required',
    'validation.imagesRequired': 'At least one image is required',
    'validation.networkError': 'Network error. Please try again.',

    // Property Types
    'propertyType.apartment': 'Apartment',
    'propertyType.house': 'House',
    'propertyType.villa': 'Villa',
    'propertyType.plot': 'Plot',
    'propertyType.commercial': 'Commercial',

    // Sell Page
    'sell.title': 'Sell Your Property',
    'sell.subtitle': 'List your property with us and reach thousands of potential buyers',
    'sell.sellProperty': 'Sell Property',
    'sell.rentProperty': 'Rent Your Property',
    'sell.whySell': 'Why Sell With Us?',
    'sell.wideReach': 'Wide Reach',
    'sell.wideReachDesc': 'Get your property in front of thousands of potential buyers',
    'sell.professionalSupport': 'Professional Support',
    'sell.professionalSupportDesc': 'Our team of experts will guide you through the entire process',
    'sell.bestPrice': 'Best Price',
    'sell.bestPriceDesc': 'We help you get the best possible price for your property',
    'sell.fastSale': 'Fast Sale',
    'sell.fastSaleDesc': 'Quick and efficient property selling process',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.properties': 'Propriétés',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.sell': 'Vendre',
    'nav.signIn': 'Se connecter',
    'nav.language': 'Langue',
    'nav.goBack': 'Retour',

    // Search
    'search.placeholder': 'Rechercher des propriétés...',
    'search.searchButton': 'Rechercher',

    // Filter
    'filter.buy': 'Acheter',
    'filter.rent': 'Louer',
    'filter.sell': 'Vendre',
    'filter.propertyType': 'Type de propriété',
    'filter.location': 'Localisation',
    'filter.priceRange': 'Gamme de prix',
    'filter.bedrooms': 'Chambres',
    'filter.apply': 'Appliquer les filtres',
    'filter.clear': 'Effacer les filtres',

    // Property
    'property.in': 'à',
    'property.for': 'À',
    'property.bedrooms': 'Chambres',
    'property.bathrooms': 'Salles de bain',
    'property.area': 'Pieds carrés',
    'property.viewDetails': 'Voir les détails',
    'property.details': 'Détails de la propriété',
    'property.description': 'Description',
    'property.keyFeatures': 'Caractéristiques principales',
    'property.owner': 'Propriétaire',
    'property.sendMessage': 'Envoyer un message',
    'property.sendInquiry': 'Envoyer une demande',
    'property.yourName': 'Votre nom',
    'property.yourEmail': 'Votre email',
    'property.yourPhone': 'Votre téléphone',
    'property.interestedMessage': 'Je suis intéressé par cette propriété...',
    'property.information': 'Informations sur la propriété',
    'property.listingType': 'Type d\'annonce',
    'property.id': 'ID de la propriété',
    'property.status': 'Statut',
    'property.available': 'Disponible',
    'property.posted': 'Publié',
    'property.recently': 'Récemment',
    'property.listed': 'Listé',
    'property.checkOut': 'Découvrez cette',
    'property.like': 'J\'aime',
    'property.liked': 'Aimé',
    'property.share': 'Partager',
    'property.video': 'Vidéo de la propriété',
    'property.location': 'Localisation',
    'property.defaultDescription': 'Cette belle',
    'property.offersModern': 'offre un cadre de vie moderne avec d\'excellents équipements.',
    'property.locatedIn': 'Situé à',
    'property.providesAccess': 'il offre un accès facile aux installations locales.',
    'property.perfectFor': 'Parfait pour les familles et les professionnels.',
    'property.propertyNotFound': 'Propriété non trouvée',

    // Form
    'form.sellProperty': 'Vendre votre propriété',
    'form.rentProperty': 'Louer votre propriété',
    'form.propertyType': 'Type de propriété',
    'form.address': 'Adresse complète',
    'form.location': 'Ville/Localisation',
    'form.bedrooms': 'Chambres',
    'form.bathrooms': 'Salles de bain',
    'form.price': 'Prix (₹)',
    'form.squareFootage': 'Superficie',
    'form.description': 'Description de la propriété',
    'form.keyFeatures': 'Caractéristiques principales (séparées par des virgules)',
    'form.images': 'Images de la propriété',
    'form.video': 'Vidéo de la propriété (Optionnel)',
    'form.submitProperty': 'Soumettre la propriété',
    'form.submitting': 'Soumission...',
    'form.uploadImages': 'Télécharger des images',
    'form.uploadVideo': 'Télécharger une vidéo',
    'form.removeVideo': 'Supprimer la vidéo',

    // Profile
    'profile.userProfile': 'Profil utilisateur',
    'profile.name': 'Nom',
    'profile.email': 'Email',
    'profile.phone': 'Téléphone',
    'profile.myProperties': 'Mes propriétés',
    'profile.signOut': 'Se déconnecter',
    'profile.close': 'Fermer',
    'profile.noProperties': 'Vous n\'avez encore répertorié aucune propriété.',
    'profile.delete': 'Supprimer',

    // Messages
    'message.propertySubmitted': 'Propriété soumise avec succès!',
    'message.propertyDeleted': 'Propriété supprimée avec succès!',
    'message.shareSuccess': 'Partagé avec succès!',
    'message.linkCopied': 'Lien copié dans le presse-papiers!',
    'message.loadingPropertyDetails': 'Chargement des détails de la propriété...',

    // Validation
    'validation.propertyTypeRequired': 'Le type de propriété est requis',
    'validation.addressRequired': 'L\'adresse est requise',
    'validation.locationRequired': 'La localisation est requise',
    'validation.priceRequired': 'Le prix est requis',
    'validation.squareFootageRequired': 'La superficie est requise',
    'validation.bedroomsRequired': 'Le nombre de chambres est requis',
    'validation.bathroomsRequired': 'Le nombre de salles de bain est requis',
    'validation.imagesRequired': 'Au moins une image est requise',
    'validation.networkError': 'Erreur réseau. Veuillez réessayer.',

    // Property Types
    'propertyType.apartment': 'Appartement',
    'propertyType.house': 'Maison',
    'propertyType.villa': 'Villa',
    'propertyType.plot': 'Terrain',
    'propertyType.commercial': 'Commercial',

    // Sell Page
    'sell.title': 'Vendez votre propriété',
    'sell.subtitle': 'Répertoriez votre propriété avec nous et atteignez des milliers d\'acheteurs potentiels',
    'sell.sellProperty': 'Vendre une propriété',
    'sell.rentProperty': 'Louer votre propriété',
    'sell.whySell': 'Pourquoi vendre avec nous?',
    'sell.wideReach': 'Large portée',
    'sell.wideReachDesc': 'Mettez votre propriété devant des milliers d\'acheteurs potentiels',
    'sell.professionalSupport': 'Support professionnel',
    'sell.professionalSupportDesc': 'Notre équipe d\'experts vous guidera tout au long du processus',
    'sell.bestPrice': 'Meilleur prix',
    'sell.bestPriceDesc': 'Nous vous aidons à obtenir le meilleur prix possible pour votre propriété',
    'sell.fastSale': 'Vente rapide',
    'sell.fastSaleDesc': 'Processus de vente de propriété rapide et efficace',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

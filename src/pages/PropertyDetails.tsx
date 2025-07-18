import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Mail, 
  ChevronLeft,
  ChevronRight,
  Calendar,
  Heart,
  Share2,
  Home
} from "lucide-react";
import { apiService, Property } from "@/services/api";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      if (id) {
        try {
          // Check localStorage for user properties
          const storedProperties = localStorage.getItem('userProperties');
          const userProperties = storedProperties ? JSON.parse(storedProperties) : [];
          const propertyData = userProperties.find((p: Property) => 
            p.id?.toString() === id || p._id?.toString() === id
          );
          
          if (propertyData) {
            setProperty(propertyData);
            console.log('Property found:', propertyData);
          } else {
            console.log('Property not found with ID:', id);
          }
        } catch (error) {
          console.error('Error fetching property:', error);
        }
      }
      setLoading(false);
    };

    fetchProperty();
  }, [id]);

  const nextImage = () => {
    if (property?.images && property.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === property.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (property?.images && property.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? property.images!.length - 1 : prev - 1
      );
    }
  };

  const getCurrentImage = () => {
    if (property?.images && property.images.length > 0) {
      const currentImg = property.images[currentImageIndex];
      return typeof currentImg === 'string' ? currentImg : URL.createObjectURL(currentImg);
    }
    return property?.image;
  };

  const getVideoUrl = () => {
    if (!property?.video) return null;
    return typeof property.video === 'string' ? property.video : URL.createObjectURL(property.video);
  };

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = `${property?.type} in ${property?.location}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `${t('property.checkOut')} ${title}`,
          url: url,
        });
        toast({
          title: t('message.shareSuccess'),
          description: t('message.shareSuccess'),
        });
      } catch (error) {
        console.log('Error sharing:', error);
        fallbackShare(url);
      }
    } else {
      fallbackShare(url);
    }
  };

  const fallbackShare = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: t('message.linkCopied'),
        description: t('message.linkCopied'),
      });
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      toast({
        title: t('message.linkCopied'),
        description: t('message.linkCopied'),
      });
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <div className="text-lg text-gray-600">{t('message.loadingPropertyDetails')}</div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Home className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <div className="text-lg text-gray-600">{t('message.propertyNotFound')}</div>
          <Button className="mt-4" onClick={() => window.history.back()}>
            {t('nav.goBack')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500">
            <span>{t('nav.home')}</span> / <span>{t('nav.properties')}</span> / <span className="text-gray-800 capitalize">{property.type}</span>
          </div>

          {/* Property Header */}
          <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2 capitalize">
                  {property.type} {t('property.in')} {property.location}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2 text-teal-500" />
                  <span>{property.area}, {property.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setLiked(!liked)}
                  className={liked ? "text-red-500 border-red-200" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-red-500" : ""}`} />
                  {liked ? t('property.liked') : t('property.like')}
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  {t('property.share')}
                </Button>
              </div>
            </div>
            <div className="text-3xl font-bold text-teal-600">{property.price}</div>
            <div className="text-sm text-gray-500 mt-1 capitalize flex items-center">
              <span>{t('property.for')} {t(`filter.${property.listingType}`)} • </span>
              <Calendar className="h-4 w-4 mr-1 ml-2" />
              <span>{t('property.posted')} {property.createdAt ? formatDate(property.createdAt) : t('property.recently')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Images and Details Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <Card className="overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={getCurrentImage()}
                      alt={`${property.type} ${t('property.in')} ${property.location}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {property.images && property.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {property.images.length}
                      </div>
                    </>
                  )}
                </div>
              </Card>

              {/* Property Video */}
              {property.video && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">{t('property.video')}</h2>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <video
                        src={getVideoUrl() || undefined}
                        className="w-full h-full object-cover"
                        controls
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Google Map */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Location</h2>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDBSnInLXCytbXN3ivCQ9Yhbc7nsLMuwFs&q=${encodeURIComponent(property.area + ', ' + property.location)}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Property Location"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">{t('property.details')}</h2>
                  
                  {/* Key Features */}
                  {property.type !== 'plot' && (
                    <div className="grid grid-cols-3 gap-6 mb-8 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Bed className="h-6 w-6 text-teal-500" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{property.bedrooms}</div>
                        <div className="text-sm text-gray-600">{t('form.bedrooms')}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Bath className="h-6 w-6 text-teal-500" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{property.bathrooms}</div>
                        <div className="text-sm text-gray-600">{t('form.bathrooms')}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Square className="h-6 w-6 text-teal-500" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{property.squareFootage}</div>
                        <div className="text-sm text-gray-600">{t('property.area')}</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">{t('property.description')}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {property.description || `${t('property.defaultDescription')} ${property.type} ${t('property.offersModern')} 
                        ${t('property.locatedIn')} ${property.area}, ${property.location}, ${t('property.providesAccess')} 
                        ${t('property.perfectFor')}`}
                      </p>
                    </div>
                    
                    {property.type !== 'plot' && property.keyFeatures && property.keyFeatures.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">{t('property.keyFeatures')}</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {property.keyFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="space-y-6">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t('property.sendInquiry')}</h3>
                  <form className="space-y-4">
                    <Input placeholder={t('property.yourName')} className="h-12" />
                    <Input type="email" placeholder={t('property.yourEmail')} className="h-12" />
                    <Input type="tel" placeholder={t('property.yourPhone')} className="h-12" />
                    <Textarea 
                      placeholder={t('property.interestedMessage')}
                      className="h-24 resize-none"
                    />
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 h-12">
                      {t('property.sendInquiry')}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Property Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t('property.information')}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">{t('form.propertyType')}</span>
                      <span className="font-medium capitalize">{property.type}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">{t('property.listingType')}</span>
                      <span className="font-medium capitalize">{t(`filter.${property.listingType}`)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">{t('property.id')}</span>
                      <span className="font-medium">#{property.id || property._id}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">{t('property.status')}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {t('property.available')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;

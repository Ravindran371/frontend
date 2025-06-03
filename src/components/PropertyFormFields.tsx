
import React from "react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

interface PropertyFormFieldsProps {
  formData: any;
  onFieldChange: (field: string, value: string) => void;
  type: "sell" | "rent-your-property";
}

const PropertyFormFields: React.FC<PropertyFormFieldsProps> = ({ 
  formData, 
  onFieldChange, 
  type 
}) => {
  const { t } = useLanguage();
  const isPlot = formData.propertyType === "plot";

  return (
    <>
      {/* Property Type */}
      <div>
        <label className="block text-sm font-medium mb-2">
          {t('form.propertyType')} <span className="text-red-500">*</span>
        </label>
        <Select required onValueChange={(value) => onFieldChange("propertyType", value)} value={formData.propertyType}>
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

      {/* Address */}
      <div>
        <label className="block text-sm font-medium mb-2">
          {t('form.address')} <span className="text-red-500">*</span>
        </label>
        <Input
          required
          value={formData.address}
          onChange={(e) => onFieldChange("address", e.target.value)}
          placeholder={t('form.enterAddress')}
          className="min-h-[48px] text-base"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium mb-2">
          {t('form.location')} <span className="text-red-500">*</span>
        </label>
        <Input
          required
          value={formData.location}
          onChange={(e) => onFieldChange("location", e.target.value)}
          placeholder={t('form.enterLocation')}
          className="min-h-[48px] text-base"
        />
      </div>

      {/* Bedrooms and Bathrooms (only if not plot) */}
      {!isPlot && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t('form.bedrooms')} <span className="text-red-500">*</span>
            </label>
            <Input
              required
              value={formData.bedrooms}
              onChange={(e) => onFieldChange("bedrooms", e.target.value)}
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
              onChange={(e) => onFieldChange("bathrooms", e.target.value)}
              placeholder={t('form.number')}
              className="min-h-[48px] text-base"
            />
          </div>
        </div>
      )}

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-2">
          {t('form.price')} <span className="text-red-500">*</span>
        </label>
        <Input
          required
          value={formData.price}
          onChange={(e) => onFieldChange("price", e.target.value)}
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
          onChange={(e) => onFieldChange("squareFootage", e.target.value)}
          placeholder="1200 sq ft"
          className="min-h-[48px] text-base"
        />
      </div>
    </>
  );
};

export default PropertyFormFields;

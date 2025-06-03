
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchBar: React.FC = () => {
  const [searchType, setSearchType] = useState("buy");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSearch = () => {
    if (searchType === "sell") {
      navigate("/sell");
    } else {
      navigate(`/${searchType}`);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mx-4 md:mx-0">
      <div className="flex flex-col gap-6">
        {/* Mobile: Stack vertically, Desktop: Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {t('search.lookingFor')}
            </label>
            <Select defaultValue="buy" onValueChange={(value) => setSearchType(value)}>
              <SelectTrigger className="w-full min-h-[56px] text-base font-medium">
                <SelectValue placeholder={t('search.selectType')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">{t('filter.buy')}</SelectItem>
                <SelectItem value="rent">{t('filter.rent')}</SelectItem>
                <SelectItem value="sell">{t('filter.sell')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {t('filter.location')}
            </label>
            <Input
              type="text"
              placeholder={t('search.cityNeighborhood')}
              className="w-full min-h-[56px] text-base"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {t('filter.propertyType')}
            </label>
            <Select defaultValue="any">
              <SelectTrigger className="w-full min-h-[56px] text-base font-medium">
                <SelectValue placeholder={t('search.selectType')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">{t('search.any')}</SelectItem>
                <SelectItem value="house">{t('property.house')}</SelectItem>
                <SelectItem value="apartment">{t('property.apartment')}</SelectItem>
                <SelectItem value="villa">{t('property.villa')}</SelectItem>
                <SelectItem value="plot">{t('property.plot')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white min-h-[64px] text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl px-8 py-4"
          onClick={handleSearch}
        >
          <Search className="mr-3 h-5 w-5" />
          {t('search.searchProperties')}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageToggle: React.FC = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    // Here you would implement actual language switching logic
    console.log("Language changed to:", value);
  };

  return (
    <div className="flex items-center">
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-auto border-0 bg-transparent hover:bg-gray-100 min-h-[44px]">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageToggle;

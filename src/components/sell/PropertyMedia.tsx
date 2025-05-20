
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, Video } from "lucide-react";

const PropertyMedia: React.FC = () => {
  return (
    <>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Images
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <div className="mt-1 flex justify-center">
            <Label 
              htmlFor="property-images" 
              className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 px-4 py-2 border border-gray-300 flex items-center"
            >
              <Image className="h-5 w-5 mr-2" />
              Upload Images
            </Label>
            <Input 
              id="property-images" 
              type="file" 
              multiple 
              accept="image/*"
              className="sr-only" 
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 5MB each</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Video
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <div className="mt-1 flex justify-center">
            <Label 
              htmlFor="property-video" 
              className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 px-4 py-2 border border-gray-300 flex items-center"
            >
              <Video className="h-5 w-5 mr-2" />
              Upload Video
            </Label>
            <Input 
              id="property-video" 
              type="file" 
              accept="video/*"
              className="sr-only" 
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">MP4, MOV up to 50MB</p>
        </div>
      </div>
    </>
  );
};

export default PropertyMedia;

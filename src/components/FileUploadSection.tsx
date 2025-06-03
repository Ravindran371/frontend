
import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Video, Trash2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FileUploadSectionProps {
  images: File[];
  video: File | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVideoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
  onRemoveVideo: () => void;
}

const FileUploadSection: React.FC<FileUploadSectionProps> = ({
  images,
  video,
  onImageUpload,
  onVideoUpload,
  onRemoveImage,
  onRemoveVideo
}) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Image Upload */}
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
            onChange={onImageUpload}
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
                    onClick={() => onRemoveImage(index)}
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

      {/* Video Upload */}
      <div>
        <label className="block text-sm font-medium mb-3">
          {t('form.propertyVideo')} <span className="text-red-500">*</span>
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <input
            type="file"
            accept="video/*"
            onChange={onVideoUpload}
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
                  onClick={onRemoveVideo}
                  className="h-6 w-6 p-0"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileUploadSection;


import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Video, Trash2, Eye } from "lucide-react";
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
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-400 transition-colors">
          <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
            id="images"
            key={`images-${images.length}`}
          />
          <label htmlFor="images" className="cursor-pointer">
            <Button type="button" variant="outline" className="mb-3 min-h-[48px] text-base hover:bg-teal-50">
              <Upload className="h-4 w-4 mr-2" />
              {t('form.uploadImages')}
            </Button>
          </label>
          <p className="text-sm text-gray-600">
            {images.length > 0 ? `${images.length} image(s) selected` : t('form.selectImages')}
          </p>
          
          {/* Image Previews */}
          {images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => onRemoveImage(index)}
                    className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                  <div className="mt-1 text-xs text-gray-500 truncate">{file.name}</div>
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
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-400 transition-colors">
          <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <input
            type="file"
            accept="video/*"
            onChange={onVideoUpload}
            className="hidden"
            id="video"
            key={`video-${video?.name || 'empty'}`}
          />
          <label htmlFor="video" className="cursor-pointer">
            <Button type="button" variant="outline" className="mb-3 min-h-[48px] text-base hover:bg-teal-50">
              <Upload className="h-4 w-4 mr-2" />
              {t('form.uploadVideo')}
            </Button>
          </label>
          <p className="text-sm text-gray-600">
            {video ? video.name : t('form.selectVideo')}
          </p>
          
          {/* Video Preview */}
          {video && (
            <div className="mt-4">
              <div className="relative group max-w-xs mx-auto">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <video
                    src={URL.createObjectURL(video)}
                    className="w-full h-full object-cover"
                    controls={false}
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={onRemoveVideo}
                  className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
                <div className="mt-1 text-xs text-gray-500 truncate text-center">{video.name}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FileUploadSection;

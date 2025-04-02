"use client";

import { CircleUserRoundIcon, XIcon } from "lucide-react";
import { useImageUpload } from "@/hooks/use-image-upload";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ImageUploaderProps = {
  setFile: Dispatch<SetStateAction<File | undefined>>;
};

export default function ImageUploader({ setFile }: ImageUploaderProps) {
  const {
    previewUrl,
    fileInputRef,
    file,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  } = useImageUpload();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      handleFileChange(file);
    }
  };

  return (
    <div>
      <div className="relative inline-flex">
        <button
          className="btn btn-outline btn-primary relative size-24 overflow-hidden rounded-full p-0"
          onClick={(e) => {
            e.preventDefault();
            handleThumbnailClick();
          }}
          aria-label={previewUrl ? "Change image" : "Upload image"}
        >
          {previewUrl ? (
            <Image
              className="h-full w-full object-cover object-center"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div aria-hidden="true">
              <CircleUserRoundIcon className="opacity-60" size={16} />
            </div>
          )}
        </button>
        {previewUrl && (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleRemove();
            }}
            className="btn btn-circle btn-error border-background absolute top-0 right-0 size-4 rounded-full border-2"
            aria-label="Remove image"
          >
            <XIcon size={16} />
          </button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
          aria-hidden="true"
          aria-label="Upload image file"
        />
      </div>
      {file && (
        <p className="text-muted-foreground mt-2 text-xs">{file.name}</p>
      )}
      <div className="sr-only" aria-live="polite" role="status">
        {previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"}
      </div>
    </div>
  );
}

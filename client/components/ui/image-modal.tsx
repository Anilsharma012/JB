import React from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
}

export function ImageModal({
  open,
  onOpenChange,
  imageSrc,
  imageAlt,
  title,
}: ImageModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-2">
        <DialogTitle className="sr-only">
          {title || imageAlt || "Image Viewer"}
        </DialogTitle>
        <div className="relative w-full h-full">
          <DialogClose className="absolute top-4 right-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none bg-white/80 backdrop-blur-sm p-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="w-full h-full flex items-center justify-center bg-black/5 rounded-lg">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {title && (
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-center">{title}</h3>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

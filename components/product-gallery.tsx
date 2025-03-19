"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(0)

  const nextImage = () => {
    setMainImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setMainImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800 bg-[#111111]">
        <Image
          src={images[mainImage] || "/placeholder.svg"}
          alt={`${productName} - Image ${mainImage + 1}`}
          fill
          className="object-contain p-4"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-700 bg-black/50 text-white hover:bg-black/70"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-700 bg-black/50 text-white hover:bg-black/70"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4 h-8 w-8 rounded-full border-gray-700 bg-black/50 text-white hover:bg-black/70"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`aspect-square overflow-hidden rounded-md border ${
              mainImage === index ? "border-primary" : "border-gray-800"
            } bg-[#111111] p-1`}
            onClick={() => setMainImage(index)}
          >
            <div className="relative h-full w-full">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - Thumbnail ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}


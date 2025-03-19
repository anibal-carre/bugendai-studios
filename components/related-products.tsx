import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function RelatedProducts() {
  // This would normally come from a database or API
  const relatedProducts = [
    {
      id: "cyber-ninja",
      name: "Cyber Ninja 2077",
      slug: "cyber-ninja-2077",
      price: 159.99,
      status: "Pre-Order",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.8,
    },
    {
      id: "samurai-armor",
      name: "Samurai Armor Deluxe",
      slug: "samurai-armor-deluxe",
      price: 189.99,
      status: "In Stock",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.9,
    },
    {
      id: "dragon-emperor",
      name: "Dragon Emperor Statue",
      slug: "dragon-emperor-statue",
      price: 249.99,
      status: "Limited Edition",
      image: "/placeholder.svg?height=500&width=500",
      rating: 5.0,
    },
    {
      id: "kitsune-mask",
      name: "Kitsune Mask Deluxe",
      slug: "kitsune-mask-deluxe",
      price: 89.99,
      status: "In Stock",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.7,
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {relatedProducts.map((product) => (
        <div
          key={product.id}
          className="group relative overflow-hidden rounded-lg bg-[#111111] transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          <div className="aspect-square overflow-hidden">
            <div className="absolute top-0 right-0 z-10 m-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
              {product.status}
            </div>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-600"}`}
                />
              ))}
            </div>
            <h3 className="mt-2 font-semibold text-white group-hover:text-primary transition-colors">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
            <p className="mt-1 text-lg font-bold text-white">${product.price.toFixed(2)}</p>
            <Button className="mt-3 w-full bg-primary hover:bg-primary/90">Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  )
}


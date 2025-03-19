import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Eye } from "lucide-react"

interface Product {
  id: string
  name: string
  slug: string
  price: number
  status: string
  category: string
  image: string
  rating: number
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#111111] transition-all hover:shadow-lg hover:shadow-primary/30 border border-gray-800 hover:border-primary">
      <div className="aspect-square overflow-hidden">
        <div className="absolute top-0 right-0 z-10 m-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-black">
          {product.status}
        </div>
        <Link href={`/products/${product.slug}`} className="relative block h-full w-full">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-black/80 to-primary/30 opacity-0 transition-opacity group-hover:opacity-100">
            <Button
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-primary hover:border-primary hover:text-black"
            >
              <Eye className="mr-2 h-4 w-4" />
              Visualização Rápida
            </Button>
          </div>
        </Link>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-600"}`} />
          ))}
          <span className="ml-1 text-xs text-gray-400">{product.rating.toFixed(1)}</span>
        </div>
        <div className="mt-2">
          <Link href={`/products/${product.slug}`} className="text-sm text-primary/80 hover:text-primary">
            {product.category}
          </Link>
          <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-1 text-lg font-bold text-white">
            <span className="text-primary">R$</span>
            {product.price.toFixed(2)}
          </p>
        </div>
        <Button className="mt-3 w-full bg-primary hover:bg-primary/90 text-black font-medium">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  )
}


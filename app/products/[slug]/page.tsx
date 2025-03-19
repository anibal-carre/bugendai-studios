import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProductGallery from "@/components/product-gallery"
import RelatedProducts from "@/components/related-products"
import {
  ChevronRight,
  Minus,
  Plus,
  Share2,
  Heart,
  ShoppingCart,
  Truck,
  CreditCard,
  ShieldCheck,
  Star,
} from "lucide-react"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const product = {
    id: "mecha-warrior-dx",
    name: "Mecha Warrior DX",
    slug: "mecha-warrior-dx",
    price: 129.99,
    originalPrice: 149.99,
    status: "In Stock",
    releaseDate: "Available Now",
    scale: "1/10",
    material: "PLA & Resin",
    height: "25 cm",
    width: "15 cm",
    depth: "12 cm",
    weight: "450g",
    limitedEdition: true,
    edition: "500",
    description:
      "The Mecha Warrior DX is a highly detailed collectible figure featuring articulated joints and interchangeable weapons. Inspired by classic anime mecha designs, this figure showcases intricate panel lines, weathering effects, and a dynamic pose that captures the essence of futuristic combat robots.",
    features: [
      "Highly detailed 3D printed figure",
      "Hand-painted with premium acrylics",
      "Articulated joints at shoulders, elbows, and knees",
      "Interchangeable weapon systems",
      "LED light-up features in eyes and chest core",
      "Includes display base with nameplate",
      "Limited edition of 500 pieces worldwide",
      "Individually numbered certificate of authenticity",
    ],
    images: [
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
      "/placeholder.svg?height=800&width=800",
    ],
    categories: ["Mecha", "Sci-Fi", "Action Figures"],
    designer: "Hiroshi Tanaka",
    rating: 4.9,
    reviewCount: 28,
  }

  return (
    <div className="flex min-h-screen flex-col dark bg-[#0a0a0a] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-800 py-4">
        <div className="container">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href={`/products/category/${product.categories[0].toLowerCase()}`} className="hover:text-primary">
              {product.categories[0]}
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-300">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2">
                {product.limitedEdition && <Badge className="bg-primary text-white">Limited Edition</Badge>}
                <Badge variant="outline" className="border-gray-700 text-gray-300">
                  {product.status}
                </Badge>
              </div>
              <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{product.name}</h1>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-600"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <p className="text-sm text-gray-400">Tax included. Shipping calculated at checkout.</p>
            </div>

            <Separator className="bg-gray-800" />

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Release Date</p>
                  <p className="font-medium">{product.releaseDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Scale</p>
                  <p className="font-medium">{product.scale}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Material</p>
                  <p className="font-medium">{product.material}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Dimensions</p>
                  <p className="font-medium">
                    {product.height} × {product.width} × {product.depth}
                  </p>
                </div>
              </div>

              {product.limitedEdition && (
                <div className="rounded-md bg-primary/10 p-3 text-sm">
                  <p className="font-medium text-primary">Limited Edition: Only {product.edition} pieces worldwide</p>
                </div>
              )}
            </div>

            <Separator className="bg-gray-800" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium">Quantity</p>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-r-none border-gray-800 bg-[#111111] hover:bg-[#1a1a1a]"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <div className="flex h-8 w-12 items-center justify-center border-y border-gray-800 bg-[#111111] text-sm">
                    1
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-l-none border-gray-800 bg-[#111111] hover:bg-[#1a1a1a]"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 border-gray-800 bg-[#111111] hover:bg-[#1a1a1a]">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="icon" className="border-gray-800 bg-[#111111] hover:bg-[#1a1a1a]">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator className="bg-gray-800" />

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free shipping on orders over $150</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CreditCard className="h-4 w-4 text-primary" />
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#111111]">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent
              value="description"
              className="mt-6 space-y-4 rounded-md border border-gray-800 bg-[#111111] p-6"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Product Description</h3>
                <p className="text-gray-300">{product.description}</p>

                <h4 className="text-lg font-medium">Features</h4>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-medium">Designer</h4>
                <p className="text-gray-300">
                  Designed by {product.designer}, a renowned concept artist with over 10 years of experience in the
                  anime industry.
                </p>

                <div className="rounded-md bg-[#0a0a0a] p-4">
                  <p className="text-sm text-gray-400">
                    Note: Due to the handcrafted nature of our products, each piece may have slight variations in paint
                    application, making each collectible truly unique.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="specifications"
              className="mt-6 space-y-4 rounded-md border border-gray-800 bg-[#111111] p-6"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technical Specifications</h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Scale</span>
                      <span className="text-gray-300">{product.scale}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Height</span>
                      <span className="text-gray-300">{product.height}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Width</span>
                      <span className="text-gray-300">{product.width}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Depth</span>
                      <span className="text-gray-300">{product.depth}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Weight</span>
                      <span className="text-gray-300">{product.weight}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Material</span>
                      <span className="text-gray-300">{product.material}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Edition Size</span>
                      <span className="text-gray-300">{product.edition} pieces</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-medium">Packaging</span>
                      <span className="text-gray-300">Premium collector box</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-medium">What's in the Box</h4>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  <li>Mecha Warrior DX figure</li>
                  <li>Display base with nameplate</li>
                  <li>3 interchangeable weapon systems</li>
                  <li>LED battery pack</li>
                  <li>Assembly instructions</li>
                  <li>Certificate of authenticity</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6 space-y-4 rounded-md border border-gray-800 bg-[#111111] p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Shipping Information</h3>
                <p className="text-gray-300">
                  We ship worldwide using trusted courier services to ensure your collectible arrives safely.
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-medium">Shipping Times</h4>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-md bg-[#0a0a0a] p-4">
                      <p className="font-medium">Domestic (Japan)</p>
                      <p className="text-sm text-gray-300">1-3 business days</p>
                    </div>
                    <div className="rounded-md bg-[#0a0a0a] p-4">
                      <p className="font-medium">Asia Pacific</p>
                      <p className="text-sm text-gray-300">3-5 business days</p>
                    </div>
                    <div className="rounded-md bg-[#0a0a0a] p-4">
                      <p className="font-medium">North America & Europe</p>
                      <p className="text-sm text-gray-300">5-7 business days</p>
                    </div>
                    <div className="rounded-md bg-[#0a0a0a] p-4">
                      <p className="font-medium">Rest of World</p>
                      <p className="text-sm text-gray-300">7-14 business days</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-medium">Return Policy</h4>
                <p className="text-gray-300">
                  We want you to be completely satisfied with your purchase. If for any reason you're not happy with
                  your collectible, you can return it within 30 days of receipt.
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  <li>Item must be in original condition and packaging</li>
                  <li>Return shipping costs are the responsibility of the customer</li>
                  <li>Limited edition items can only be returned if defective</li>
                  <li>Custom orders are non-returnable</li>
                </ul>

                <div className="rounded-md bg-primary/10 p-4">
                  <p className="font-medium text-primary">
                    For any questions about shipping or returns, please contact our customer service team at
                    support@kuriprint.com
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
          <RelatedProducts />
        </div>
      </div>
    </div>
  )
}


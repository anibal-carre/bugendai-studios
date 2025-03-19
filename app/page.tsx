import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PrinterIcon as Printer3d,
  ChevronRight,
  Star,
  MessageCircle,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark bg-[#0a0a0a] text-white">
      {/* Top Bar */}
      {/**
       * 
       * 
       * <div className="bg-primary py-2">
        <div className="container flex justify-between items-center">
          <div className="text-xs text-primary-foreground">
            FREE SHIPPING ON ORDERS OVER $150
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-primary-foreground hover:underline"
            >
              Login
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground hover:underline"
            >
              Register
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground hover:underline"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
       */}

      {/* Main Header */}
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/bugendai-studios-logo.png"}
              className="rounded-full border-[1px] border-white"
              width={36}
              height={36}
              alt="logo"
            />
            <span className="text-xl font-bold tracking-tight">
              Bugendai Studios
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/products"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Produtos
            </Link>
            <Link
              href="#new-releases"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Novos lançamentos
            </Link>
            <Link
              href="#pre-orders"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pré-encomendas
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Processo
            </Link>
            <Link
              href="#news"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Notícias
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Slider Section */}
        <section className="relative w-full bg-[#0a0a0a]">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80"></div>
            <Image
              src="/banner/banner2.png"
              alt="Featured 3D printed anime collectible"
              fill
              className="object-cover object-center"
              priority
            />

            {/**
 * 
 * <div className="absolute inset-0 z-20 flex items-center">
              <div className="container">
                <div className="max-w-xl space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    Personalize sua própria{" "}
                    <span className="text-primary">action figure</span> com
                    nosso serviço exclusivo.{" "}
                  </h1>
                  <p className="text-lg text-gray-300">
                    Estatuetas impressas em 3D meticulosamente elaboradas, com
                    arte e precisão inspiradas no Japão.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Peça agora
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10"
                    >
                      Ver Coleção
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white text-white hover:bg-white/10"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
 */}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "Pokemon",
                  image: "/category/pokemon-logo.png",
                },
                {
                  title: "Dragon Ball",
                  image: "/category/dragon-ball-logo.png",
                },
                {
                  title: "One Piece",
                  image: "/category/one-piece-logo.png",
                },
                {
                  title: "Naruto",
                  image: "/category/naruto-logo.png",
                },
              ].map((category, index) => (
                <Link
                  href="#"
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-16 bg-[#0a0a0a]">
          <div className="container space-y-12">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                Featured Collectibles
              </h2>
              <Link
                href="#"
                className="text-primary flex items-center gap-1 hover:underline"
              >
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Mecha Warrior DX",
                  price: "$129.99",
                  status: "In Stock",
                  image: "/placeholder.svg?height=500&width=500",
                },
                {
                  title: "Sakura Shrine Diorama",
                  price: "$199.99",
                  status: "Pre-Order",
                  image: "/placeholder.svg?height=500&width=500",
                },
                {
                  title: "Kitsune Mask Deluxe",
                  price: "$89.99",
                  status: "In Stock",
                  image: "/placeholder.svg?height=500&width=500",
                },
                {
                  title: "Dragon Emperor Statue",
                  price: "$249.99",
                  status: "Limited Edition",
                  image: "/placeholder.svg?height=500&width=500",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-[#111111] transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-primary">
                        {product.status}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                    <h3 className="mt-2 font-semibold text-white group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-lg font-bold text-white">
                      {product.price}
                    </p>
                    <Button className="mt-3 w-full bg-primary hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Releases Banner */}
        <section id="new-releases" className="py-16 bg-[#0c0c0c]">
          <div className="container">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="New releases banner"
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="px-8 md:px-16 max-w-xl space-y-6">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    NEW RELEASE
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    Legendary Samurai Collection
                  </h2>
                  <p className="text-gray-300">
                    Our newest line of historically accurate samurai figures
                    with interchangeable weapons and armor pieces.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Pre-Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Orders Section */}
        <section id="pre-orders" className="py-16 bg-[#0a0a0a]">
          <div className="container space-y-12">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                Available for Pre-Order
              </h2>
              <Link
                href="#"
                className="text-primary flex items-center gap-1 hover:underline"
              >
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cyber Ninja 2077",
                  price: "$159.99",
                  release: "Dec 2023",
                  image: "/placeholder.svg?height=500&width=500",
                },
                {
                  title: "Yokai Hunter",
                  price: "$179.99",
                  release: "Jan 2024",
                  image: "/placeholder.svg?height=500&width=500",
                },
                {
                  title: "Mecha Battle Diorama",
                  price: "$229.99",
                  release: "Feb 2024",
                  image: "/placeholder.svg?height=500&width=500",
                },
                {
                  title: "Sakura Spirit",
                  price: "$149.99",
                  release: "Mar 2024",
                  image: "/placeholder.svg?height=500&width=500",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-[#111111] transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="aspect-square overflow-hidden">
                    <div className="absolute top-0 right-0 z-10 m-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
                      Pre-Order
                    </div>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-400">
                        Release: {product.release}
                      </span>
                    </div>
                    <h3 className="mt-2 font-semibold text-white group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-lg font-bold text-white">
                      {product.price}
                    </p>
                    <Button className="mt-3 w-full bg-primary hover:bg-primary/90">
                      Pre-Order Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 bg-[#0c0c0c]">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Creation Process
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400">
                From concept to completion, we bring your ideas to life with
                precision and care.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Design Consultation",
                  description:
                    "We work closely with you to understand your vision and requirements.",
                },
                {
                  step: "02",
                  title: "3D Modeling",
                  description:
                    "Our artists create detailed digital models inspired by your ideas.",
                },
                {
                  step: "03",
                  title: "Precision Printing",
                  description:
                    "Using high-quality materials and state-of-the-art printers for the best results.",
                },
                {
                  step: "04",
                  title: "Hand Finishing",
                  description:
                    "Each piece is carefully sanded and prepared for painting.",
                },
                {
                  step: "05",
                  title: "Artistic Painting",
                  description:
                    "Detailed hand-painting brings your creation to life with vibrant colors.",
                },
                {
                  step: "06",
                  title: "Final Delivery",
                  description:
                    "Carefully packaged and shipped to ensure your item arrives in perfect condition.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative rounded-lg border border-gray-800 bg-[#111111] p-6 transition-all hover:border-primary"
                >
                  <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="container">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Video thumbnail"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-16 w-16 rounded-full border-2 border-white bg-black/50 text-white hover:bg-black/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 bg-[#0c0c0c]">
          <div className="container space-y-12">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                Latest News
              </h2>
              <Link
                href="#"
                className="text-primary flex items-center gap-1 hover:underline"
              >
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "New Anime Series Collection Announced",
                  date: "November 15, 2023",
                  excerpt:
                    "We're excited to announce our partnership with Studio Ghibli for an exclusive collection of limited edition figures.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Behind the Scenes: Creating Our Mecha Series",
                  date: "November 8, 2023",
                  excerpt:
                    "Take a look at our design process and the technology behind our highly detailed mecha figurines.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Tokyo Collectibles Expo 2023 Recap",
                  date: "October 30, 2023",
                  excerpt:
                    "Check out the highlights from our booth at this year's Tokyo Collectibles Expo where we unveiled our newest designs.",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg bg-[#111111]"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-400">{article.date}</div>
                    <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{article.excerpt}</p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center text-primary hover:underline"
                    >
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-[#0a0a0a]">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                What Collectors Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400">
                Hear what our clients have to say about our 3D printed
                collectibles.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Takashi M.",
                  role: "Collector",
                  quote:
                    "The attention to detail on my custom mecha figure is incredible. Every joint moves smoothly and the paint work is flawless.",
                },
                {
                  name: "Emily K.",
                  role: "Cosplayer",
                  quote:
                    "My costume props arrived exactly as designed and in time for the convention. The lightweight material is perfect for all-day wear.",
                },
                {
                  name: "David L.",
                  role: "Game Developer",
                  quote:
                    "We ordered prototype figures of our game characters and were blown away by the quality. They look exactly like our concept art!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-800 bg-[#111111] p-6 shadow-sm"
                >
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4">
                    <p className="text-gray-300">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="mt-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-[#0c0c0c]">
          <div className="container">
            <div className="rounded-xl bg-gradient-to-r from-primary/20 to-[#111111] p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Join Our Collector's Club
                  </h2>
                  <p className="text-gray-300">
                    Subscribe to our newsletter for exclusive previews, early
                    access to pre-orders, and special discounts.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-gray-800 bg-[#111111] px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-[#0a0a0a]">
          <div className="container">
            <div className="rounded-xl border border-gray-800 bg-[#111111] p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Get In Touch
                  </h2>
                  <p className="text-gray-300">
                    Contact us today to discuss your custom 3D printing project
                    or inquire about our collectibles.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <span className="text-gray-300">info@kuriprint.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-primary" />
                      <span className="text-gray-300">Tokyo, Japan</span>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-gray-700 text-white hover:border-primary hover:text-primary"
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-gray-700 text-white hover:border-primary hover:text-primary"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-gray-700 text-white hover:border-primary hover:text-primary"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-gray-700 text-white hover:border-primary hover:text-primary"
                    >
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-white"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-gray-800 bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-white"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-800 bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-  px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-gray-800 bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-12 bg-[#0a0a0a]">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Printer3d className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold tracking-tight text-white">
                  KuriPrint
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Premium 3D printed anime collectibles and custom figurines with
                Japanese-inspired craftsmanship.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Pre-Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Limited Editions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Sale Items
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Information
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Production Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Custom Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Customer Service
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} KuriPrint. All rights reserved.
              Bringing anime to life through 3D printing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

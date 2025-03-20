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
              href="#pre-orders"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Categorias
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
          <div className="container overflow-x-auto">
            <div className="mb-2 flex justify-end">
              <Link
                href={"/categories"}
                className="font-semibold text-primary underline hover:text-primary/70"
              >
                Ver todas as categorias
              </Link>
            </div>
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
                {
                  title: "Naruto",
                  image: "/category/naruto-logo.png",
                },
                {
                  title: "Naruto",
                  image: "/category/naruto-logo.png",
                },
                {
                  title: "Naruto",
                  image: "/category/naruto-logo.png",
                },
                {
                  title: "Naruto",
                  image: "/category/naruto-logo.png",
                },
              ]
                .slice(0, 4)
                .map((category, index) => (
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
                Action Figures
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
                  title: "Funko Pop Master Chief de Halo",
                  price: "R$129.99",
                  status: "Disponível",
                  image: "/products/product3.png",
                },
                {
                  title: "Charmander skin Ace, One Piece",
                  price: "R$199.99",
                  status: "Pré-encomenda",
                  image: "/products/product4.png",
                },
                {
                  title: "Naruto Chibi",
                  price: "R$154.99",
                  status: "Em estoque",
                  image: "/products/product2.png",
                },
                {
                  title: "Estatueta Marika de Elden Ring",
                  price: "R$320.00",
                  status: "Edição Limitada",
                  image: "/products/product1.png",
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
                      Encomende Agora
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
                src="/maradona.png"
                alt="New releases banner"
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="px-8 md:px-16 max-w-xl space-y-6">
                  <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    NOVO LANÇAMENTO
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                    Coleção Lendária de Samurais
                  </h2>
                  <p className="text-gray-300">
                    Nossa linha mais recente de figuras de samurais
                    historicamente precisas, com armas e peças de armadura
                    intercambiáveis.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Pré-encomende agora.
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Orders Section */}
        {/**
         * 
         * <section id="pre-orders" className="py-16 bg-[#0a0a0a]">
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
         */}

        {/* Process Section */}
        <section id="process" className="py-16 bg-[#0c0c0c]">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Nosso processo de criação.
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400">
                Do conceito à conclusão, transformamos suas ideias em realidade
                com precisão e cuidado.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Consultoria de Design",
                  description:
                    "Trabalhamos de perto com você para entender sua visão e requisitos.",
                },
                {
                  step: "02",
                  title: "Modelagem 3D",
                  description:
                    "Nossos artistas criam modelos digitais detalhados inspirados pelas suas ideias.",
                },
                {
                  step: "03",
                  title: "Impressão de Precisão",
                  description:
                    "Usamos materiais de alta qualidade e impressoras de última geração para os melhores resultados.",
                },
                {
                  step: "04",
                  title: "Acabamento Manual",
                  description:
                    "Cada peça é cuidadosamente lixada e preparada para pintura.",
                },
                {
                  step: "05",
                  title: "Pintura Artística",
                  description:
                    "Pintura manual detalhada dá vida à sua criação com cores vibrantes.",
                },
                {
                  step: "06",
                  title: "Entrega Final",
                  description:
                    "Cuidadosamente embalado e enviado para garantir que seu item chegue em perfeito estado.",
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
                Últimas notícias
              </h2>
              <Link
                href="#"
                className="text-primary flex items-center gap-1 hover:underline"
              >
                Ver todos <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Nova estatueta Marika de Elden Ring!!",
                  date: "Março 18, 2025",
                  excerpt:
                    "Peça tem cerca de 25cm, produto personalizado e pintado a mão. Jogo do ano em 2022 agora eternizado em sua estante, garanta a sua peça ou encomende conosco 🧡",
                  image: "/products/product1.png",
                },
                {
                  title: "Naruto Chibi 🧡",
                  date: "Janeiro 6, 2025",
                  excerpt:
                    "Entre em contato para encomendar o seu, enviamos para todo Brasil ou entrega em mãos em São Paulo - Capital.",
                  image: "/products/product2.png",
                },
                {
                  title: "Funko Pop Master Chief de Halo!!",
                  date: "Fevereiro 22, 2025",
                  excerpt:
                    "Figure de alta qualidade e pintada a mão, venha fazer seu orçamento para presentear quem você ama, ou deixar a sua estante com a sua cara 🧡",
                  image: "/products/product3.png",
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
                O que os colecionadores dizem
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400">
                Ouça o que nossos clientes têm a dizer sobre nossos
                colecionáveis impressos em 3D
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Takashi M.",
                  role: "Colecionador",
                  quote:
                    "A atenção aos detalhes na minha figura personalizada de mecha é incrível. Cada articulação se move suavemente e o trabalho de pintura é impecável.",
                },
                {
                  name: "Emily K.",
                  role: "Cosplayer",
                  quote:
                    "Meus acessórios de fantasia chegaram exatamente como foram projetados e a tempo para a convenção. O material leve é perfeito para usar o dia todo.",
                },
                {
                  name: "David L.",
                  role: "Desenvolvedor de jogos",
                  quote:
                    "Encomendamos figuras protótipo dos personagens do nosso jogo e ficamos impressionados com a qualidade. Elas parecem exatamente com a nossa arte conceitual!",
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
                    Junte-se ao nosso Clube de Colecionadores
                  </h2>
                  <p className="text-gray-300">
                    Inscreva-se na nossa newsletter para prévias exclusivas,
                    acesso antecipado a pré-vendas e descontos especiais.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    className="flex h-10 w-full rounded-md border border-gray-800 bg-[#111111] px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                    Inscreva-se agora
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
                    Entre em contato
                  </h2>
                  <p className="text-gray-300">
                    Entre em contato conosco hoje para discutir seu projeto
                    personalizado de impressão 3D ou para saber mais sobre
                    nossos colecionáveis.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      <span className="text-gray-300">
                        bugendaistudios@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5 text-primary" />
                      <span className="text-gray-300">São Paulo, Brasil</span>
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
                        Nome
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-gray-800 bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Digite seu nome"
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
                        placeholder="Digite seu email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-white"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-gray-800 bg-[#0a0a0a] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Conte-nos sobre o seu projeto"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Enviar Mensagem
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
                <Image
                  className="rounded-full border-[1px] border-white"
                  width={32}
                  height={32}
                  src={"/bugendai-studios-logo.png"}
                  alt="Bugendai Studios Logo"
                />
                <span className="text-xl font-bold tracking-tight text-white">
                  Bugendai Studios
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Colecionáveis de anime premium impressos em 3D e figuras
                personalizadas com artesanato inspirado no Japão.
              </p>
              <div className="flex gap-4">
                <Link
                  href={"instagram.com"}
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href={"facebook.com"}
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href={"x.com"}
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href={"youtube.com"}
                  className="h-8 w-8 text-gray-400 hover:text-primary"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Produtos
                  </Link>
                </li>

                <li>
                  <Link
                    href="/categories"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link
                    href="#news"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Notícias
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Informação
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="#/process"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Processo de Produção
                  </Link>
                </li>

                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    Fale Conosco
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
              © {new Date().getFullYear()} Bugendai Studios. Todos os direitos
              reservados. Dando vida ao anime através da impressão 3D.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductFilters from "@/components/product-filters";
import ProductSort from "@/components/product-sort";
import ProductCard from "@/components/product-card";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function CategoriesPage() {
  // Isso normalmente viria de um banco de dados ou API
  const products = [
    {
      id: "mecha-warrior-dx",
      name: "Mecha Warrior DX",
      slug: "mecha-warrior-dx",
      price: 129.99,
      status: "Em Estoque",
      category: "Mecha",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.9,
    },
    {
      id: "sakura-shrine",
      name: "Diorama Santuário Sakura",
      slug: "sakura-shrine-diorama",
      price: 199.99,
      status: "Pré-Venda",
      category: "Diorama",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.7,
    },
    {
      id: "kitsune-mask",
      name: "Máscara Kitsune Deluxe",
      slug: "kitsune-mask-deluxe",
      price: 89.99,
      status: "Em Estoque",
      category: "Acessórios",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.8,
    },
    {
      id: "dragon-emperor",
      name: "Estátua Imperador Dragão",
      slug: "dragon-emperor-statue",
      price: 249.99,
      status: "Edição Limitada",
      category: "Estátuas",
      image: "/placeholder.svg?height=500&width=500",
      rating: 5.0,
    },
    {
      id: "cyber-ninja",
      name: "Cyber Ninja 2077",
      slug: "cyber-ninja-2077",
      price: 159.99,
      status: "Pré-Venda",
      category: "Action Figures",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.8,
    },
    {
      id: "samurai-armor",
      name: "Armadura Samurai Deluxe",
      slug: "samurai-armor-deluxe",
      price: 189.99,
      status: "Em Estoque",
      category: "Estátuas",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.9,
    },
    {
      id: "yokai-hunter",
      name: "Caçador de Yokai",
      slug: "yokai-hunter",
      price: 179.99,
      status: "Pré-Venda",
      category: "Action Figures",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.6,
    },
    {
      id: "mecha-battle",
      name: "Diorama Batalha Mecha",
      slug: "mecha-battle-diorama",
      price: 229.99,
      status: "Pré-Venda",
      category: "Diorama",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.7,
    },
    {
      id: "sakura-spirit",
      name: "Espírito Sakura",
      slug: "sakura-spirit",
      price: 149.99,
      status: "Em Estoque",
      category: "Estátuas",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.5,
    },
    {
      id: "oni-mask",
      name: "Coleção Máscaras Oni",
      slug: "oni-mask-collection",
      price: 119.99,
      status: "Em Estoque",
      category: "Acessórios",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.4,
    },
    {
      id: "ninja-scroll",
      name: "Diorama Pergaminho Ninja",
      slug: "ninja-scroll-diorama",
      price: 189.99,
      status: "Edição Limitada",
      category: "Diorama",
      image: "/placeholder.svg?height=500&width=500",
      rating: 4.9,
    },
    {
      id: "gundam-tribute",
      name: "Modelo Tributo Gundam",
      slug: "gundam-tribute-model",
      price: 299.99,
      status: "Pré-Venda",
      category: "Mecha",
      image: "/placeholder.svg?height=500&width=500",
      rating: 5.0,
    },
  ];

  // Categorias para filtragem
  const categories = [
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
  ];

  // Opções de status para filtragem
  const statusOptions = [
    {
      name: "Em Estoque",
      count: products.filter((p) => p.status === "Em Estoque").length,
    },
    {
      name: "Pré-Venda",
      count: products.filter((p) => p.status === "Pré-Venda").length,
    },
    {
      name: "Edição Limitada",
      count: products.filter((p) => p.status === "Edição Limitada").length,
    },
  ];

  // Faixas de preço para filtragem
  const priceRanges = [
    {
      name: "Menos de R$100",
      count: products.filter((p) => p.price < 100).length,
    },
    {
      name: "R$100 - R$150",
      count: products.filter((p) => p.price >= 100 && p.price <= 150).length,
    },
    {
      name: "R$150 - R$200",
      count: products.filter((p) => p.price > 150 && p.price <= 200).length,
    },
    {
      name: "Acima de R$200",
      count: products.filter((p) => p.price > 200).length,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col dark bg-[#0a0a0a] text-white">
      {/* Banner Hero */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src="/maradona.png"
          alt="Banner da coleção de produtos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-primary/10 to-transparent opacity-90"></div>
      </div>

      {/* Navegação de Migalhas */}
      <div className="border-b border-gray-800 py-4 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="container">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-primary">
              Início
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-300">Categorias</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container py-8 border-l-4 border-primary/20">
        <div className="flex flex-col justify-center lg:flex-row gap-8">
          {/* Grade de Produtos */}
          <div className="w-full lg:w-3/4">
            {/* Controles de Ordenação e Filtro */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm text-gray-400">
                  Mostrando {categories.length} categorias de produtos
                </p>
              </div>
            </div>

            {/* Grade de Produtos */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <div className="mt-12 border-t border-gray-800 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Bugendai Studios. Todos os direitos
                reservados. Dando vida ao anime através da impressão 3D.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

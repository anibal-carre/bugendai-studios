"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, LayoutGrid, LayoutList } from "lucide-react"

export default function ProductSort() {
  const [sortOption, setSortOption] = useState("Destaque")

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-gray-800 bg-[#111111] hover:bg-primary/20 text-white group">
            Ordenar: <span className="text-primary ml-1">{sortOption}</span>
            <ChevronDown className="ml-2 h-4 w-4 group-hover:text-primary" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#111111] border-gray-800 text-white">
          <DropdownMenuItem
            className="hover:bg-primary/20 hover:text-white focus:bg-primary/20 focus:text-white"
            onClick={() => setSortOption("Destaque")}
          >
            Destaque
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary/20 hover:text-white focus:bg-primary/20 focus:text-white"
            onClick={() => setSortOption("Preço: Menor para Maior")}
          >
            Preço: Menor para Maior
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary/20 hover:text-white focus:bg-primary/20 focus:text-white"
            onClick={() => setSortOption("Preço: Maior para Menor")}
          >
            Preço: Maior para Menor
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary/20 hover:text-white focus:bg-primary/20 focus:text-white"
            onClick={() => setSortOption("Mais Recentes")}
          >
            Mais Recentes
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary/20 hover:text-white focus:bg-primary/20 focus:text-white"
            onClick={() => setSortOption("Mais Vendidos")}
          >
            Mais Vendidos
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-primary/20 hover:text-white focus:bg-primary/20 focus:text-white"
            onClick={() => setSortOption("Melhor Avaliados")}
          >
            Melhor Avaliados
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex border border-gray-800 rounded-md overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-none border-r border-gray-800 bg-[#111111] hover:bg-primary/20 hover:text-primary"
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-none bg-[#111111] hover:bg-primary/20 hover:text-primary"
        >
          <LayoutList className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


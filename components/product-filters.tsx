"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FilterOption {
  name: string
  count: number
}

interface ProductFiltersProps {
  categories: FilterOption[]
  statusOptions: FilterOption[]
  priceRanges: FilterOption[]
}

export default function ProductFilters({ categories, statusOptions, priceRanges }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 300])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 border-l-4 border-primary pl-3">Filtros</h2>
        <Button variant="outline" className="w-full border-gray-800 bg-[#111111] hover:bg-primary/20 text-sm">
          Limpar Todos os Filtros
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "status", "price"]} className="border-gray-800">
        {/* Filtro de Categorias */}
        <AccordionItem value="categories" className="border-gray-800 border-l-2 border-l-primary/20">
          <AccordionTrigger className="text-base font-medium py-4">Categorias</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`category-${category.name}`} />
                    <label
                      htmlFor={`category-${category.name}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name}
                    </label>
                  </div>
                  <span className="text-xs text-gray-400">({category.count})</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Filtro de Status */}
        <AccordionItem value="status" className="border-gray-800 border-l-2 border-l-primary/20">
          <AccordionTrigger className="text-base font-medium py-4">Disponibilidade</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {statusOptions.map((status) => (
                <div key={status.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`status-${status.name}`} />
                    <label
                      htmlFor={`status-${status.name}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {status.name}
                    </label>
                  </div>
                  <span className="text-xs text-gray-400">({status.count})</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Filtro de Preço */}
        <AccordionItem value="price" className="border-gray-800 border-l-2 border-l-primary/20">
          <AccordionTrigger className="text-base font-medium py-4">Faixa de Preço</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6 pt-2">
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <div key={range.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`price-${range.name}`} />
                      <label
                        htmlFor={`price-${range.name}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {range.name}
                      </label>
                    </div>
                    <span className="text-xs text-gray-400">({range.count})</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Slider
                  defaultValue={[0, 300]}
                  max={300}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
                <div className="flex items-center justify-between">
                  <div className="rounded-md border border-gray-800 bg-[#111111] px-3 py-1">
                    <span className="text-sm">R${priceRange[0]}</span>
                  </div>
                  <div className="rounded-md border border-gray-800 bg-[#111111] px-3 py-1">
                    <span className="text-sm">R${priceRange[1]}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-gray-800 bg-[#111111] hover:bg-primary/20 text-sm">
                  Aplicar Faixa de Preço
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Filtro de Avaliação */}
        <AccordionItem value="rating" className="border-gray-800 border-l-2 border-l-primary/20">
          <AccordionTrigger className="text-base font-medium py-4">Avaliação</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`rating-${rating}`} />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      {rating === 5 && <span className="ml-1">apenas</span>}
                    </label>
                  </div>
                  <span className="text-xs text-gray-400">(12)</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}


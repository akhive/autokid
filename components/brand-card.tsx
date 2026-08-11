"use client"

import { useState } from "react"
import { Volume2, ChevronRight } from "lucide-react"
import type { Brand } from "@/lib/cars"
import { speakCar } from "@/lib/speak"

export function BrandCard({ brand, onSelect }: { brand: Brand; onSelect: (brand: Brand) => void }) {
  const [speaking, setSpeaking] = useState(false)

  function handleSpeak() {
    speakCar(brand.syllables, brand.name, {
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
    })
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Big tile: opens the brand's cars */}
      <button
        type="button"
        onClick={() => onSelect(brand)}
        aria-label={`See ${brand.name} cars`}
        className={`group relative flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-4xl border-4 border-card-foreground/10 p-5 text-center shadow-[0_8px_0_0_rgba(0,0,0,0.08)] transition-transform duration-150 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 active:translate-y-0 active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)] ${
          speaking ? "animate-wiggle" : ""
        }`}
        style={{ backgroundColor: brand.color }}
      >
        <div className="flex h-20 w-full items-center justify-center rounded-3xl bg-white/70 px-5">
          <img
            src={brand.logo || "/placeholder.svg"}
            alt={`${brand.name} logo`}
            className="max-h-12 w-auto max-w-[75%] object-contain"
            draggable={false}
          />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 font-sans text-xs font-bold text-foreground">
          See cars
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </button>

      <p className="font-serif text-xl font-extrabold tracking-wide text-foreground sm:text-2xl">{brand.name}</p>

      {/* Dedicated listen button */}
      <button
        type="button"
        onClick={handleSpeak}
        aria-label={`Hear the name ${brand.name}`}
        className={`inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary px-4 py-2 font-sans text-sm font-bold text-primary-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 active:translate-y-0 active:shadow-[0_1px_0_0_rgba(0,0,0,0.12)] ${
          speaking ? "animate-pulse-ring" : ""
        }`}
      >
        <Volume2 className="h-4 w-4" aria-hidden="true" />
        Say it
      </button>
    </div>
  )
}

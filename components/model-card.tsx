"use client"

import { useState } from "react"
import { Volume2 } from "lucide-react"
import type { Brand, Model } from "@/lib/cars"
import { speakCar } from "@/lib/speak"

export function ModelCard({ brand, model }: { brand: Brand; model: Model }) {
  const [speaking, setSpeaking] = useState(false)

  function handlePlay() {
    speakCar(model.syllables, model.name, {
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
    })
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={handlePlay}
        aria-label={`Play the name ${brand.name} ${model.name}`}
        className={`group relative flex w-full flex-col items-center gap-4 rounded-4xl border-4 border-card-foreground/10 p-5 text-center shadow-[0_8px_0_0_rgba(0,0,0,0.08)] transition-transform duration-150 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 active:translate-y-0 active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)] ${
          speaking ? "animate-wiggle" : ""
        }`}
        style={{ backgroundColor: brand.color }}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/70">
          <img
            src={model.image || "/placeholder.svg"}
            alt={`A ${brand.name} ${model.name}`}
            className="h-full w-full object-contain p-2"
            draggable={false}
          />
          <span
            className={`absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110 ${
              speaking ? "animate-pulse-ring" : ""
            }`}
          >
            <Volume2 className="h-6 w-6" aria-hidden="true" />
          </span>
        </div>
      </button>
      <p className="font-serif text-2xl font-extrabold tracking-wide text-foreground">{model.name}</p>

      <button
        type="button"
        onClick={handlePlay}
        aria-label={`Hear the name ${brand.name} ${model.name}`}
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

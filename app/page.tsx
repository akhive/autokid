"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, Volume2 } from "lucide-react"
import { brands, type Brand } from "@/lib/cars"
import { primeVoices, speakCar } from "@/lib/speak"
import { BrandCard } from "@/components/brand-card"
import { ModelCard } from "@/components/model-card"

export default function Page() {
  const [selected, setSelected] = useState<Brand | null>(null)
  const [speakingBrand, setSpeakingBrand] = useState(false)

  function sayBrand(brand: Brand) {
    speakCar(brand.syllables, brand.name, {
      onStart: () => setSpeakingBrand(true),
      onEnd: () => setSpeakingBrand(false),
    })
  }

  // Warm up the browser's voice list so the first tap speaks instantly.
  useEffect(() => {
    primeVoices()
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => primeVoices()
    }
  }, [])

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {selected === null ? (
        <>
          <header className="mb-10 flex flex-col items-center text-center">
            <span className="mb-3 rounded-full bg-secondary px-4 py-1.5 font-sans text-sm font-bold uppercase tracking-widest text-secondary-foreground">
              Learn & Play
            </span>
            <h1 className="text-balance font-serif text-4xl font-extrabold leading-tight text-foreground sm:text-6xl">
              Pick a Car Brand!
            </h1>
            <p className="mt-4 max-w-xl text-pretty font-sans text-lg leading-relaxed text-muted-foreground">
              Tap <span className="font-bold text-foreground">Say it</span> to hear a brand name, or tap the logo to
              explore its coolest cars.
            </p>
          </header>

          <section
            aria-label="Car brands"
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4"
          >
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} onSelect={setSelected} />
            ))}
          </section>
        </>
      ) : (
        <>
          <header className="mb-8 flex flex-col items-center gap-6">
            <div className="flex w-full items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex items-center gap-2 rounded-full border-2 border-card-foreground/10 bg-card px-4 py-2 font-sans text-sm font-bold text-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 active:translate-y-0"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All brands
              </button>
              <div className="flex h-14 items-center rounded-2xl bg-white/70 px-5">
                <img
                  src={selected.logo || "/placeholder.svg"}
                  alt={`${selected.name} logo`}
                  className="max-h-8 w-auto object-contain"
                  draggable={false}
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <h1 className="text-balance font-serif text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
                {selected.name} Cars
              </h1>
              <button
                type="button"
                onClick={() => sayBrand(selected)}
                aria-label={`Hear the name ${selected.name}`}
                className={`mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary px-5 py-2.5 font-sans text-base font-bold text-primary-foreground shadow-[0_4px_0_0_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 active:translate-y-0 active:shadow-[0_1px_0_0_rgba(0,0,0,0.12)] ${
                  speakingBrand ? "animate-pulse-ring" : ""
                }`}
              >
                <Volume2 className="h-5 w-5" aria-hidden="true" />
                Say &ldquo;{selected.name}&rdquo;
              </button>
              <p className="mt-4 text-pretty font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
                Now tap a car to hear its name — first the sounds, then the whole word!
              </p>
            </div>
          </header>

          {/* Quick brand switcher */}
          <div
            role="tablist"
            aria-label="Switch brand"
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {brands.map((brand) => {
              const active = brand.id === selected.id
              return (
                <button
                  key={brand.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelected(brand)}
                  className={`rounded-full border-2 px-4 py-1.5 font-sans text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-card-foreground/10 bg-card text-foreground hover:bg-secondary"
                  }`}
                >
                  {brand.name}
                </button>
              )
            })}
          </div>

          <section
            aria-label={`${selected.name} models`}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3"
          >
            {selected.models.map((model) => (
              <ModelCard key={model.id} brand={selected} model={model} />
            ))}
          </section>
        </>
      )}

      <footer className="mt-14 text-center font-sans text-sm text-muted-foreground">
        <p>Turn up the volume and tap a car to start learning.</p>
      </footer>
    </main>
  )
}

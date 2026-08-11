export type Model = {
  id: string
  name: string
  /** Syllable chunks spoken slowly one-by-one before the full word, e.g. ["muh", "stang"] */
  syllables: string[]
  /** Realistic photo of the model's top variant */
  image: string
}

export type Brand = {
  id: string
  name: string
  /** Syllable chunks spoken slowly one-by-one before the full word */
  syllables: string[]
  logo: string
  /** Soft themed background color for the card */
  color: string
  models: Model[]
}

export const brands: Brand[] = [
  {
    id: "ford",
    name: "Ford",
    syllables: ["fo", "rd"],
    logo: "/logos/ford.svg",
    color: "oklch(0.93 0.05 250)",
    models: [
      { id: "mustang", name: "Mustang", syllables: ["muh", "stang"], image: "/cars/models/ford-mustang.png" },
      { id: "raptor", name: "Raptor", syllables: ["rap", "tor"], image: "/cars/models/ford-raptor.png" },
    ],
  },
  {
    id: "toyota",
    name: "Toyota",
    syllables: ["to", "yo", "ta"],
    logo: "/logos/toyota.svg",
    color: "oklch(0.93 0.06 20)",
    models: [
      { id: "supra", name: "Supra", syllables: ["soo", "pra"], image: "/cars/models/toyota-supra.png" },
      {
        id: "land-cruiser",
        name: "Land Cruiser",
        syllables: ["land", "croo", "zer"],
        image: "/cars/models/toyota-land-cruiser.png",
      },
    ],
  },
  {
    id: "honda",
    name: "Honda",
    syllables: ["hon", "da"],
    logo: "/logos/honda.svg",
    color: "oklch(0.94 0.02 250)",
    models: [
      { id: "civic", name: "Civic", syllables: ["si", "vik"], image: "/cars/models/honda-civic.png" },
      { id: "crv", name: "CR-V", syllables: ["C", "R", "V"], image: "/cars/models/honda-crv.png" },
    ],
  },
  {
    id: "bmw",
    name: "BMW",
    syllables: ["B", "M", "W"],
    logo: "/logos/bmw.svg",
    color: "oklch(0.93 0.04 240)",
    models: [
      { id: "m4", name: "M4", syllables: ["M", "four"], image: "/cars/models/bmw-m4.png" },
      { id: "x5", name: "X5", syllables: ["X", "five"], image: "/cars/models/bmw-x5.png" },
    ],
  },
  {
    id: "tesla",
    name: "Tesla",
    syllables: ["tes", "la"],
    logo: "/logos/tesla.svg",
    color: "oklch(0.94 0.04 10)",
    models: [
      { id: "model-s", name: "Model S", syllables: ["mo", "del", "es"], image: "/cars/models/tesla-model-s.png" },
      {
        id: "cybertruck",
        name: "Cybertruck",
        syllables: ["sy", "ber", "truck"],
        image: "/cars/models/tesla-cybertruck.png",
      },
    ],
  },
  {
    id: "jeep",
    name: "Jeep",
    syllables: ["jee", "p"],
    logo: "/logos/jeep.svg",
    color: "oklch(0.93 0.06 150)",
    models: [
      { id: "wrangler", name: "Wrangler", syllables: ["rang", "gler"], image: "/cars/models/jeep-wrangler.png" },
      {
        id: "gladiator",
        name: "Gladiator",
        syllables: ["gla", "dee", "ay", "tor"],
        image: "/cars/models/jeep-gladiator.png",
      },
    ],
  },
  {
    id: "ferrari",
    name: "Ferrari",
    syllables: ["fe", "ra", "ri"],
    logo: "/logos/ferrari.svg",
    color: "oklch(0.93 0.07 30)",
    models: [
      { id: "roma", name: "Roma", syllables: ["ro", "ma"], image: "/cars/models/ferrari-roma.png" },
      { id: "f8", name: "F8", syllables: ["F", "eight"], image: "/cars/models/ferrari-f8.png" },
    ],
  },
  {
    id: "audi",
    name: "Audi",
    syllables: ["ow", "dee"],
    logo: "/logos/audi.svg",
    color: "oklch(0.94 0.02 280)",
    models: [
      { id: "r8", name: "R8", syllables: ["R", "eight"], image: "/cars/models/audi-r8.png" },
      { id: "q8", name: "Q8", syllables: ["Q", "eight"], image: "/cars/models/audi-q8.png" },
    ],
  },
  {
    id: "lamborghini",
    name: "Lamborghini",
    syllables: ["lam", "bor", "gee", "nee"],
    logo: "/logos/lamborghini.svg",
    color: "oklch(0.94 0.07 110)",
    models: [
      {
        id: "aventador",
        name: "Aventador",
        syllables: ["a", "ven", "ta", "dor"],
        image: "/cars/models/lamborghini-aventador.png",
      },
      { id: "urus", name: "Urus", syllables: ["oo", "roos"], image: "/cars/models/lamborghini-urus.png" },
    ],
  },
  {
    id: "porsche",
    name: "Porsche",
    syllables: ["por", "sha"],
    logo: "/logos/porsche.svg",
    color: "oklch(0.93 0.04 60)",
    models: [
      { id: "911", name: "911", syllables: ["nine", "one", "one"], image: "/cars/models/porsche-911.png" },
      { id: "cayenne", name: "Cayenne", syllables: ["kai", "en"], image: "/cars/models/porsche-cayenne.png" },
    ],
  },
  {
    id: "mercedes",
    name: "Mercedes",
    syllables: ["mer", "say", "dees"],
    logo: "/logos/mercedes.svg",
    color: "oklch(0.94 0.02 240)",
    models: [
      { id: "amg-gt", name: "AMG GT", syllables: ["A", "M", "G"], image: "/cars/models/mercedes-amg-gt.png" },
      { id: "g-wagon", name: "G-Wagon", syllables: ["G", "wa", "gon"], image: "/cars/models/mercedes-g-wagon.png" },
    ],
  },
  {
    id: "nissan",
    name: "Nissan",
    syllables: ["nee", "san"],
    logo: "/logos/nissan.svg",
    color: "oklch(0.93 0.05 20)",
    models: [
      { id: "gtr", name: "GT-R", syllables: ["G", "T", "R"], image: "/cars/models/nissan-gtr.png" },
      { id: "leaf", name: "Leaf", syllables: ["lee", "f"], image: "/cars/models/nissan-leaf.png" },
    ],
  },
]

export function getBrand(id: string): Brand | undefined {
  return brands.find((b) => b.id === id)
}
